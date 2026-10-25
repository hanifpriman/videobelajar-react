import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Terima kasih, ${email || "teman"}! Kamu sudah subscribe.`);
    setEmail("");
  }

  return (
    <div
      className="rounded-xl overflow-hidden text-white text-center p-10 mx-4 md:mx-10 mb-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-xs text-gray-300 mb-2">NEWSLETTER</p>
      <h2 className="text-xl font-bold mb-2">Mau Belajar Lebih Banyak?</h2>
      <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
        Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari
        program-program terbaik videobelajar.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan Emailmu"
          className="px-4 py-2 rounded-md text-sm text-gray-800 sm:w-64"
        />
        <button
          type="submit"
          className="bg-brand-orange text-white font-bold px-6 py-2 rounded-md text-sm"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
