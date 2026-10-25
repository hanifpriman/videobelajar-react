import Avatar from "../atoms/Avatar.jsx";

// CourseCard nerima semua datanya lewat props (dikirim dari CourseGrid)
// jadi satu komponen ini bisa dipakai ulang buat course apa aja, tinggal beda props
export default function CourseCard({
  image,
  title,
  description,
  instructorName,
  instructorRole,
  instructorAvatar,
  rating,
  reviewCount,
  price,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
      <div
        className="h-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold mb-1">{title}</h3>
        <p className="text-xs text-gray-500 mb-3">{description}</p>

        <div className="flex items-center gap-2 mb-3">
          <Avatar src={instructorAvatar} size="w-6 h-6" />
          <div>
            <p className="text-xs font-bold leading-tight">{instructorName}</p>
            <p className="text-[11px] text-gray-400 leading-tight">{instructorRole}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-brand-orange">★ {rating} ({reviewCount})</span>
          <span className="text-brand-green font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
}
