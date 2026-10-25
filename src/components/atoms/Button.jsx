import { Link } from "react-router-dom";

// komponen Button yang reusable.
// - variant: "primary" (hijau), "secondary" (hijau muda), "outline" (putih border)
// - kalau prop "to" diisi, Button jadi Link ke halaman lain (dipakai buat pindah login <-> register)
// - kalau tidak, Button jadi <button> biasa yang bisa dikasih onClick
export default function Button({
  children,
  variant = "primary",
  to,
  onClick,
  type = "button",
  fullWidth = true,
}) {
  const base = "rounded-md font-bold text-sm py-3 px-4 text-center transition inline-block";
  const variants = {
    primary: "bg-brand-green text-white hover:opacity-90",
    secondary: "bg-brand-greenLight text-brand-green hover:opacity-90",
    outline: "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50",
  };
  const width = fullWidth ? "w-full" : "";
  const classes = `${base} ${variants[variant]} ${width}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
