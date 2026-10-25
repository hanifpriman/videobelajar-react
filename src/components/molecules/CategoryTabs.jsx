// komponen tab kategori (Semua Kelas, Pemasaran, dst)
// "active" = kategori yang lagi dipilih, "onSelect" = fungsi dari parent waktu tab diklik
// komponen ini sendiri tidak tahu cara filter datanya, itu urusan parent (CourseGrid)
export default function CategoryTabs({ categories, active, onSelect }) {
  return (
    <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto text-sm pb-px">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`pb-2 whitespace-nowrap ${
            active === cat
              ? "text-brand-red border-b-2 border-brand-red font-bold"
              : "text-gray-500"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
