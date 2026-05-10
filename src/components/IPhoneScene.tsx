'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const TAU = Math.PI * 2;
const KEYFRAMES = [
  { position: { x: -0.03, y: -1.0, z: 0   }, rotation: { x: -1.0,  y: 0,              z: 0     }, scale: 1.4 },
  { position: { x: -1.0, y: 0.1,  z: 0   }, rotation: { x: -0.04, y: TAU + 0.3,      z: -0.03 }, scale: 1.0 },
  { position: { x: 1.0,  y: -0.1, z: 0   }, rotation: { x: 0.04,  y: TAU * 2 - 0.25, z: 0.03  }, scale: 1.0 },
  { position: { x: 0,    y: -0.1, z: 0.5 }, rotation: { x: 0,     y: TAU * 3,         z: 0     }, scale: 1.0 },
];
const SCREEN_TEXTURES = ['/hero-image.png', '/chord_search_ui.png', '/repertoire_list_ui.png', '/hero-image.png'];
const SCREEN_NODE = 'ScreenMaterial2';

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
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
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
      const t = texLoader.load(src); t.flipY = false; t.colorSpace = THREE.SRGBColorSpace; return t;
    });

    // Scroll state — native, no GSAP dependency
    let rawProgress = 0;
    let smoothProgress = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      rawProgress = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let phone: THREE.Object3D | null = null;
    let ox = 0, oy = 0, oz = 0;
    let screenMesh: THREE.Mesh | null = null;
    let currentTexIdx = -1; // -1 yapıyoruz ki ilk 0 indeksi uygulansın

    function applyTexture(idx: number) {
      if (!screenMesh || idx === currentTexIdx) return;
      currentTexIdx = idx;
      console.log(`[Gituar3D] Applying texture index: ${idx}`);
      const mat = (
        Array.isArray(screenMesh.material) ? screenMesh.material[0] : screenMesh.material
      ) as THREE.MeshStandardMaterial;
      mat.map = textures[idx];
      mat.emissiveMap = textures[idx];
      mat.metalness = 0;
      mat.roughness = 1;
      mat.needsUpdate = true;
    }

    let rafId = 0;
    function animate() {
      rafId = requestAnimationFrame(animate);

      // Smooth lerp
      smoothProgress += (rawProgress - smoothProgress) * 0.055;

      if (phone) {
        const N = KEYFRAMES.length - 1;
        const seg = smoothProgress * N;
        const i = Math.min(Math.floor(seg), N - 1);
        const p = Math.min(seg - i, 1);
        const from = KEYFRAMES[i];
        const to = KEYFRAMES[i + 1] ?? KEYFRAMES[i];

        phone.position.x = ox + lerp(from.position.x, to.position.x, p);
        phone.position.y = oy + lerp(from.position.y, to.position.y, p);
        phone.position.z = oz + lerp(from.position.z, to.position.z, p);
        phone.rotation.x = lerp(from.rotation.x, to.rotation.x, p);
        phone.rotation.y = lerp(from.rotation.y, to.rotation.y, p);
        phone.rotation.z = lerp(from.rotation.z, to.rotation.z, p);

        // Scale lerp
        const targetScale = (2.4 / (phone as any)._baseHeight) * lerp(from.scale, to.scale, p);
        phone.scale.setScalar(targetScale);

        applyTexture(Math.min(Math.round(smoothProgress * N), N));
      }

      renderer.render(scene, camera);
    }
    animate();

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
        if (child.name.includes(SCREEN_NODE) && (child as THREE.Mesh).isMesh) {
          screenMesh = child as THREE.Mesh;
          console.log('[Gituar3D] Screen node found:', child.name);
          const mat = (Array.isArray(screenMesh.material) ? screenMesh.material[0] : screenMesh.material) as THREE.MeshStandardMaterial;
          mat.map = textures[0]; 
          mat.emissiveMap = textures[0];
          mat.emissive = new THREE.Color(0xffffff); 
          mat.emissiveIntensity = 0.5;
          mat.metalness = 0;
          mat.roughness = 1;
          mat.needsUpdate = true;
        }
      });

      scene.add(phone);
    });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
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
