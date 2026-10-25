// garis pembatas "atau" di antara tombol submit dan tombol Google
export default function FormDivider({ text = "atau" }) {
  return (
    <div className="flex items-center gap-3 my-5 text-xs text-gray-400">
      <div className="flex-1 h-px bg-gray-200" />
      {text}
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}
