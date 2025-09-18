export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center bg-slate-50">
      <div className="container mx-auto">
        <p className="text-xs text-gray-700">
          © {currentYear} Bryan Thov
        </p>
      </div>
    </footer>
  );
}