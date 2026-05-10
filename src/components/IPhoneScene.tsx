'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TAU = Math.PI * 2;
const KEYFRAMES = [
  { position: { x: -0.03, y: -1.4, z: 0   }, rotation: { x: -1.0,  y: 0,              z: 0     }, scale: 1.8 },
  { position: { x: -1.0, y: 0.0,  z: 0   }, rotation: { x: 0.0, y: TAU + 0.7,      z: 0.00 }, scale: 1.0 },
  { position: { x: 1.0,  y: -0.0, z: 0   }, rotation: { x: 0.0,  y: TAU * 2 - 0.0, z: 0.00  }, scale: 1.0 },
  { position: { x: 0,    y: 0.0, z: 0.5 }, rotation: { x: 0,     y: TAU * 3,         z: 0     }, scale: 1.0 },
];
const SCREEN_TEXTURES = ['/hero-image.png', '/chord_search_ui.png', '/repertoire_list_ui.png', '/hero-image.png'];
const SCREEN_NODE = 'ScreenMaterial1';

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

export default function IPhoneScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.NoToneMapping; // ACESFilmic beyazları grileştiriyordu, kapattık
    renderer.toneMappingExposure = 1.0; 
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    scene.add(new THREE.AmbientLight(0xffffff, 1.0));
    const kl = new THREE.DirectionalLight(0xffffff, 2.5); kl.position.set(3, 5, 5); scene.add(kl);
    const fl = new THREE.DirectionalLight(0x8ab4f8, 1.0); fl.position.set(-4, 2, 2); scene.add(fl);
    const rl = new THREE.DirectionalLight(0xffffff, 1.0); rl.position.set(0, -3, -5); scene.add(rl);

    const texLoader = new THREE.TextureLoader();
    const textures = SCREEN_TEXTURES.map((src) => {
      const t = texLoader.load(src);
      t.flipY = false;
      t.colorSpace = THREE.SRGBColorSpace;
      // Sündürmeyi engellemek için mükemmel oran (SX: 2.17, SY: 1.0, TX: -0.04)
      t.repeat.set(2.17, 1.0); 
      t.offset.set(-0.04, 0);
      t.wrapS = THREE.ClampToEdgeWrapping;
      t.wrapT = THREE.ClampToEdgeWrapping;
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
      return t;
    });

    let phone: THREE.Object3D | null = null;
    let ox = 0, oy = 0, oz = 0;
    let screenMesh: THREE.Mesh | null = null;
    let currentTexIdx = -1;

    function applyTexture(idx: number) {
      if (!screenMesh || idx === currentTexIdx) return;
      currentTexIdx = idx;
      console.log(`[Gituar3D] Applying texture index: ${idx}`);
      const mat = (
        Array.isArray(screenMesh.material) ? screenMesh.material[0] : screenMesh.material
      ) as THREE.MeshStandardMaterial;
      mat.map = textures[idx];
      mat.emissiveMap = textures[idx];
      mat.color.setHex(0xffffff); 
      mat.emissive.setHex(0x000000);
      mat.emissiveIntensity = 0;
      mat.needsUpdate = true;
    }

    let rafId = 0;
    function animate() {
      rafId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // GSAP ScrollTrigger logic will be initialized after model loads

    new GLTFLoader().load('/iphone.glb', (gltf) => {
      phone = gltf.scene;
      const box = new THREE.Box3().setFromObject(phone);
      const size = new THREE.Vector3(); box.getSize(size);
      const center = new THREE.Vector3(); box.getCenter(center);
      const targetHeight = 2.4;
      const baseScale = targetHeight / size.y;
      (phone as any)._baseHeight = size.y; // Store original height for dynamic scaling
      phone.scale.setScalar(baseScale * KEYFRAMES[0].scale);
      phone.position.sub(center.multiplyScalar(baseScale));
      ox = phone.position.x; oy = phone.position.y; oz = phone.position.z;

      phone.position.x = ox + KEYFRAMES[0].position.x;
      phone.position.y = oy + KEYFRAMES[0].position.y;
      phone.position.z = oz + KEYFRAMES[0].position.z;
      phone.rotation.set(KEYFRAMES[0].rotation.x, KEYFRAMES[0].rotation.y, KEYFRAMES[0].rotation.z);

      phone.traverse((child) => {
        // Debug: Modeldeki tüm mesh isimlerini görelim
        if ((child as THREE.Mesh).isMesh) {
          console.log('[Gituar3D] Mesh found:', child.name);
        }

        if (child.name.includes(SCREEN_NODE) && (child as THREE.Mesh).isMesh) {
          screenMesh = child as THREE.Mesh;
          console.log('[Gituar3D] Target screen mesh found:', child.name);
          const mat = (Array.isArray(screenMesh.material) ? screenMesh.material[0] : screenMesh.material) as THREE.MeshStandardMaterial;
          
          // Dokuları uygula
          mat.map = textures[0]; 
          mat.emissiveMap = textures[0];
          mat.color = new THREE.Color(0xffffff);
          mat.emissive = new THREE.Color(0x000000); // Işımayı kapattık
          mat.emissiveIntensity = 0;
          mat.metalness = 0.0;
          mat.roughness = 1.0;
          
          // Sadece ön yüzey ve sündürme engelleyici ayarlar
          mat.side = THREE.FrontSide;
          mat.transparent = false;
          mat.opacity = 1.0;
          
          mat.needsUpdate = true;
        }
      });

      scene.add(phone);

      // We will use a proxy object to hold the global 'progress' (0 to 3)
      const proxy = { p: 0 };
      
      const onUpdateProxy = () => {
        const N = KEYFRAMES.length - 1; // 3
        // Clamping to avoid out of bounds
        const seg = Math.max(0, Math.min(proxy.p, N)); 
        const i = Math.min(Math.floor(seg), N - 1);
        const p = seg - i;
        const from = KEYFRAMES[i];
        const to = KEYFRAMES[i + 1];

        // Apply interpolations
        phone!.position.x = ox + lerp(from.position.x, to.position.x, p);
        phone!.position.y = oy + lerp(from.position.y, to.position.y, p);
        phone!.position.z = oz + lerp(from.position.z, to.position.z, p);
        phone!.rotation.x = lerp(from.rotation.x, to.rotation.x, p);
        phone!.rotation.y = lerp(from.rotation.y, to.rotation.y, p);
        phone!.rotation.z = lerp(from.rotation.z, to.rotation.z, p);

        const targetScale = (2.4 / (phone as any)._baseHeight) * lerp(from.scale, to.scale, p);
        phone!.scale.setScalar(targetScale);
        
        // Apply texture
        applyTexture(Math.round(seg));
      };

      // 1. Hero to Features (Fast transition)
      ScrollTrigger.create({
        trigger: '#section-features',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        animation: gsap.fromTo(proxy, { p: 0 }, { p: 1, ease: 'none', onUpdate: onUpdateProxy })
      });

      // 2. Inside Features (Slow motion drift during pin)
      ScrollTrigger.create({
        trigger: '#section-features',
        start: 'top top',
        end: '+=300%',
        scrub: true,
        animation: gsap.fromTo(proxy, { p: 1 }, { p: 1.05, ease: 'none', onUpdate: onUpdateProxy })
      });

      // 3. Features to Community (Fast transition)
      ScrollTrigger.create({
        trigger: '#section-community',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        animation: gsap.fromTo(proxy, { p: 1.05 }, { p: 2, ease: 'none', onUpdate: onUpdateProxy })
      });

      // 4. Inside Community (Slow motion drift during pin)
      ScrollTrigger.create({
        trigger: '#section-community',
        start: 'top top',
        end: '+=300%',
        scrub: true,
        animation: gsap.fromTo(proxy, { p: 2 }, { p: 2.05, ease: 'none', onUpdate: onUpdateProxy })
      });

      // 5. Community to CTA (Fast transition)
      ScrollTrigger.create({
        trigger: '#section-cta',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        animation: gsap.fromTo(proxy, { p: 2.05 }, { p: 3, ease: 'none', onUpdate: onUpdateProxy })
      });
      
      // Initialize to state 0
      applyTexture(0);
    });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: 'fixed', inset: 0, zIndex: 10, pointerEvents: 'none' }}
    />
  );
}
