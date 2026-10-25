import Logo from "../atoms/Logo.jsx";

const footerLinks = {
  Kategori: ["Digital & Teknologi", "Pemasaran", "Manajemen Bisnis", "Pengembangan Diri", "Desain"],
  Perusahaan: ["Tentang Kami", "FAQ", "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"],
  Komunitas: ["Tips Sukses", "Blog"],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-4 md:px-10 py-10 text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto">
        <div>
          <Logo />
          <p className="text-gray-500 mt-3 text-xs max-w-xs">
            Gali Potensi Anda Melalui Pembelajaran Video di videobelajar.id
          </p>
        </div>

        {/* Object.entries dipakai biar tiap kolom footer bisa di-loop, bukan ditulis manual satu-satu */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-bold text-xs mb-3">{title}</h4>
            {links.map((link) => (
              <a key={link} href="#" className="block text-gray-500 text-xs mb-2">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-gray-400 mt-8 pt-5 border-t border-gray-100">
        &copy; 2026 videobelajar. All Rights Reserved.
      </p>
    </footer>
  );
}
