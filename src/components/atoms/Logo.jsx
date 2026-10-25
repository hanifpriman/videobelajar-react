// komponen Logo, dipakai di Navbar, Footer, dan halaman login/register
// prop "size" dibikin fleksibel pakai Tailwind text size class
export default function Logo({ size = "text-xl" }) {
  return (
    <div className={`font-bold ${size}`}>
      <span className="text-brand-orange">video</span>
      <span className="text-brand-red">belajar</span>
    </div>
  );
}
