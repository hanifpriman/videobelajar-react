// komponen Input reusable: label + input jadi satu
// semua data (value) dan event (onChange) dikirim dari parent lewat props
// jadi komponen ini sendiri tidak nyimpen state apapun
export default function Input({ label, type = "text", placeholder, required, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
      />
    </div>
  );
}
