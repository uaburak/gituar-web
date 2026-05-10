'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    id: 'auto-scroll',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 5v14M8 15l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Otomatik Kaydırma',
    description: 'Çalarken ekranı kaydırma derdine son. Hızını ayarla, sözler kendi aksın.',
  },
  {
    id: 'repertoire',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Kendi Repertuvarın',
    description: 'Favori şarkılarını grupla, sahne veya kamp setlist\'lerini saniyeler içinde oluştur.',
  },
  {
    id: 'cloud-sync',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M17 16a4 4 0 000-8 4.5 4.5 0 00-8.9.9A3.5 3.5 0 105 16h12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Bulut Senkronizasyonu',
    description: 'Tüm verilerin bulutta güvende. Telefonunu değiştirsen de repertuvarın hep seninle.',
  },
  {
    id: 'design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Göz Yormayan Tasarım',
    description: 'Sahnede ve loş ortamlarda bile rahat okunabilen, müzisyen dostu arayüz.',
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const label = sectionRef.current?.querySelector('.feature-label');
      const titleContainer = sectionRef.current?.querySelector('.feature-title-container');
      const cards = sectionRef.current?.querySelectorAll('.feature-card');
      const chars = textRef.current?.querySelectorAll('.char');

      // Başlangıç durumu
      gsap.set([label, titleContainer], { opacity: 0, y: 40 });
      gsap.set(cards, { opacity: 0, x: 60 }); // Kutucuklar sağdan gelecek

      // Scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%', // Increased pin duration for much slower scroll experience
          pin: true,
          anticipatePin: 1,
          scrub: 1, // slight smoothing
        }
      });

      tl.to(label, { opacity: 1, y: 0, duration: 1 })
        .to(titleContainer, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
        .add("textFillStart", "-=0.5")
        .to(chars, { color: '#000000', stagger: 0.1, duration: 2 }, "textFillStart")
        // Kutucuklar başlık efektiyle eş zamanlı gelmeye başlar
        .to(cards, { opacity: 1, x: 0, stagger: 1, duration: 1 }, "textFillStart");
        
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
      id="section-features"
      ref={sectionRef}
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <div className="w-full max-w-[800px] px-6">
        <div className="ml-auto max-w-[460px]">
          <div className="mb-10">
            <div className="feature-label inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-2 w-fit mb-4">
              <span className="text-[12px] font-medium text-black tracking-wide uppercase">
                Özellikler
              </span>
            </div>
            <div className="feature-title-container">
              <h2 ref={textRef} className="text-[36px] leading-[1.1] font-medium tracking-[-0.025em]">
                {renderText("Müziğini")}
                <br />
                {renderText("Sahneni Genişlet")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.id}
                id={`feature-${f.id}`}
                className="feature-card relative p-5 rounded-2xl bg-zinc-50 border border-zinc-100 transition-colors duration-200 hover:bg-zinc-100/50"
              >
                <div className="inline-flex p-2 rounded-xl bg-black text-white mb-4">
                  {f.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-black mb-1.5">{f.title}</h3>
                <p className="text-[13px] leading-[1.6] text-zinc-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
