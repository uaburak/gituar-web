'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DarkModeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin logic for the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
      });

      // Content reveal
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'top top',
            scrub: true,
          }
        }
      );

      // Global theme toggle for subsequent sections
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'max',
        toggleClass: { targets: "html, body", className: "dark" }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="section-dark-mode"
      ref={sectionRef}
      className="relative h-[100vh] w-full overflow-hidden bg-black"
    >
      {/* Light Side Triangle (Top-Left) */}
      <div 
        className="absolute inset-0 bg-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />
      
      {/* Dark Side Triangle (Bottom-Right) is handled by the section's bg-black */}

      {/* Content Overlay */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <div className="w-full max-w-[1200px] px-12 flex justify-between items-center pointer-events-none">
          
          {/* Light Side Text */}
          <div className="w-1/3 text-left">
            <div className="flex flex-col gap-2">
              <h2 className="text-[42px] leading-[1.1] font-medium tracking-[-0.03em] text-black">
                Tertemiz<br />Görünüm
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-zinc-500 max-w-[300px]">
                Gün ışığında bile mükemmel okunabilirlik sunan yüksek kontrastlı arayüz.
              </p>
            </div>
          </div>

          {/* iPhone will be in the middle (x:0 in keyframe) */}
          <div className="w-1/3" />

          {/* Dark Side Text */}
          <div className="w-1/3 text-right" ref={contentRef}>
            <div className="flex flex-col gap-2 items-end">
              <h2 className="text-[42px] leading-[1.1] font-medium tracking-[-0.03em] text-white">
                Göz Yormayan<br />Konfor
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-zinc-400 max-w-[300px]">
                Sahnede ve loş ortamlarda müziğine odaklanmanı sağlayan karanlık tasarım.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
