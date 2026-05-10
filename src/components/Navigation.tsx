import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4 bg-white border-b border-zinc-100">
      <div className="flex items-center justify-between max-w-[800px] w-full">
        <Link href="/" className="flex gap-3 items-center hover:opacity-80 transition-opacity">
          <div className="relative size-[36px] rounded-[9px] overflow-hidden bg-black flex items-center justify-center shrink-0">
            <Image
              src="/gituar-logo.png"
              alt="Gituar Logo"
              fill
              className="object-cover scale-[1.3]"
            />
          </div>
          <div className="flex flex-col leading-[1.2]">
            <span className="text-[16px] font-semibold text-black tracking-tight">Gituar</span>
            <span className="text-[11px] text-zinc-500">Gitar Repertuarın</span>
          </div>
        </Link>

        <a
          href="/#download"
          id="header-download-btn"
          className="bg-[#0088FF] hover:bg-[#0077EE] transition-all duration-200 flex h-[40px] items-center justify-center px-[10px] rounded-full shadow-sm"
        >
          <span className="text-[12px] px-4 font-medium text-white">Uygulamayı indir</span>
        </a>
      </div>
    </header>
  );
}
