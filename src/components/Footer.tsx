export default function Footer() {
  return (
    <footer
      className="relative border-t border-zinc-100 bg-white"
      style={{ zIndex: 20 }}
    >
      <div className="max-w-[800px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-zinc-400 text-center sm:text-left">
          © {new Date().getFullYear()} Gituar. Tüm hakları saklıdır.
        </p>

        <div className="flex gap-5">
          <a href="/privacy" className="text-[13px] text-zinc-400 hover:text-black transition-colors">
            Gizlilik Politikası
          </a>
          <a href="/terms" className="text-[13px] text-zinc-400 hover:text-black transition-colors">
            Kullanım Koşulları
          </a>
        </div>
      </div>
    </footer>
  );
}
