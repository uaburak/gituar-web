export default function Footer() {
  return (
    <footer
      className="relative border-t border-zinc-100 bg-white"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-[800px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-[7px] bg-black flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M12 3a9 9 0 100 18A9 9 0 0012 3zm0 2a7 7 0 110 14A7 7 0 0112 5zm-1 3v5l4 2.5-.75 1.23L10 14V8h1z" />
            </svg>
          </div>
          <span className="text-[14px] font-semibold text-black">Gituar</span>
        </div>

        <p className="text-[13px] text-zinc-400 text-center">
          © {new Date().getFullYear()} Gituar. Tüm hakları saklıdır.
        </p>

        <div className="flex gap-5">
          <a href="/app-ads.txt" className="text-[13px] text-zinc-400 hover:text-black transition-colors">
            Gizlilik
          </a>
          <a href="#" className="text-[13px] text-zinc-400 hover:text-black transition-colors">
            Kullanım Koşulları
          </a>
        </div>
      </div>
    </footer>
  );
}
