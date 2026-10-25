import Logo from "../atoms/Logo.jsx";
import Avatar from "../atoms/Avatar.jsx";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 md:px-10">
      <Logo />
      <div className="flex items-center gap-5">
        <a href="#" className="text-sm text-gray-600 hidden sm:block">
          Kategori
        </a>
        <Avatar src="https://i.pravatar.cc/100?img=47" />
      </div>
    </header>
  );
}
