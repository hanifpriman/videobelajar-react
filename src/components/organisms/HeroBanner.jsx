import Button from "../atoms/Button.jsx";

export default function HeroBanner() {
  return (
    <div
      className="rounded-xl overflow-hidden text-white p-8 md:p-14 mx-4 md:mx-10 mt-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-2xl md:text-3xl font-bold max-w-xl mb-4">
        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
      </h1>
      <p className="text-sm text-gray-200 max-w-md mb-6">
        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran
        berkualitas tinggi. Anda juga bisa berpartisipasi dalam latihan interaktif.
      </p>
      <Button variant="primary" fullWidth={false}>
        Temukan Video Course untuk Dipelajari
      </Button>
    </div>
  );
}
