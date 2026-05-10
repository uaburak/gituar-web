export default function Footer() {
  return (
    <footer
      className="relative border-t border-[var(--nav-border)] bg-[var(--bg-color)]"
      style={{ zIndex: 20 }}
    >
      <div className="max-w-[800px] mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-[14px] text-[var(--text-secondary)] font-medium text-center sm:text-left">
          © {new Date().getFullYear()} Gituar. Tüm hakları saklıdır.
        </p>

        <div className="flex gap-5">
          <a href="/privacy" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            Gizlilik Politikası
          </a>
          <a href="/terms" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            Kullanım Koşulları
          </a>
        </div>
      </div>
    </footer>
  );
}
