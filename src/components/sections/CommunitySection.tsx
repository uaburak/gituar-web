'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '10.000+', label: 'Şarkı' },
  { value: '2.000+', label: 'Aktif Kullanıcı' },
  { value: '500+', label: 'Eklenmiş Akor' },
];

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleContainer = sectionRef.current?.querySelector('.community-title-container');
      const desc = sectionRef.current?.querySelector('.community-desc');
      const stats = sectionRef.current?.querySelectorAll('.community-stat');
      const steps = sectionRef.current?.querySelectorAll('.community-step');
      const chars = textRef.current?.querySelectorAll('.char');

      // Başlangıç durumu
      gsap.set([titleContainer, desc], { opacity: 0, y: 40 });
      gsap.set([stats, steps], { opacity: 0, x: 60 }); // Sağdan gelecekler

      // Scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%', // Increased pin duration
          pin: true,
          anticipatePin: 1,
          scrub: 1, // slight smoothing
        }
      });

      tl.to(titleContainer, { opacity: 1, y: 0, duration: 1 })
        .add("textFillStart", "-=0.5")
        .to(chars, { color: '#000000', stagger: 0.1, duration: 2 }, "textFillStart")
        .to(desc, { opacity: 1, y: 0, duration: 1 }, "textFillStart")
        .to(stats, { opacity: 1, x: 0, stagger: 1, duration: 1 }, "textFillStart+=0.5")
        .to(steps, { opacity: 1, x: 0, stagger: 1, duration: 1 }, "textFillStart+=1.0");
        
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char text-zinc-300 transition-colors duration-75">
        {char}
      </span>
    ));
  };

  return (
    <section
      id="section-community"
      ref={sectionRef}
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <div className="w-full max-w-[800px] px-6">
        <div className="max-w-[400px] flex flex-col gap-6">
          <div className="community-title-container">
            <h2 ref={textRef} className="text-[36px] leading-[1.1] font-medium tracking-[-0.025em]">
              {renderText("Müziğini")}
              <br />
              {renderText("Sahneni Genişlet")}
            </h2>
          </div>

          <p className="community-desc text-[15px] leading-[1.6] text-zinc-500">
            Gituar ile akorlarını düzenle, dijital repertuarını oluştur ve Popüler şarkıları saniyeler içinde keşfet. Müzik yolculuğunda ihtiyacın olan her şey tek bir platformda.
          </p>

          {/* Stats */}
          <div className="flex gap-6 pt-2">
            {STATS.map((s) => (
              <div key={s.label} className="community-stat flex flex-col gap-0.5">
                <span className="text-[24px] font-bold text-black tracking-tight">{s.value}</span>
                <span className="text-[12px] text-zinc-500">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="flex flex-col gap-3 mt-2">
            {[
              { step: '1', text: 'Akorları çıkar ve kaydet' },
              { step: '2', text: 'Uygulamaya gönder' },
              { step: '3', text: 'Onaylandıktan sonra herkesle paylaşıldı!' },
            ].map((item) => (
              <div key={item.step} className="community-step flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0">
                  <span className="text-[11px] font-bold text-white">{item.step}</span>
                </div>
                <span className="text-[14px] text-zinc-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
