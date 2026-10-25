import { useState } from "react";
import Input from "../atoms/Input.jsx";
import Button from "../atoms/Button.jsx";
import FormDivider from "../molecules/FormDivider.jsx";

// RegisterForm nyimpen state form-nya sendiri pakai useState
// setiap Input dikasih value + onChange dari state ini (controlled input)
export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // fungsi ini dipakai buat semua field, tinggal beda "field" yang diupdate
  function handleChange(field) {
    return (e) => setForm({ ...form, [field]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Data pendaftaran:", form);
    alert("Pendaftaran berhasil (dummy, belum terhubung ke backend)!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nama Lengkap"
        placeholder="nama lengkap kamu"
        required
        value={form.name}
        onChange={handleChange("name")}
      />
      <Input
        label="E-Mail"
        type="email"
        placeholder="nama@email.com"
        required
        value={form.email}
        onChange={handleChange("email")}
      />

      {/* nomor HP dipisah manual karena ada dropdown kode negara di sampingnya */}
      <div className="mb-4">
        <label className="block text-sm mb-1">
          No. Hp <span className="text-brand-red">*</span>
        </label>
        <div className="flex gap-2">
          <select className="border border-gray-300 rounded-md px-2 text-sm">
            <option>+62</option>
          </select>
          <input
            type="tel"
            placeholder="8xxxxxxxxx"
            value={form.phone}
            onChange={handleChange("phone")}
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
          />
        </div>
      </div>

      <Input
        label="Kata Sandi"
        type="password"
        placeholder="buat kata sandi"
        required
        value={form.password}
        onChange={handleChange("password")}
      />
      <Input
        label="Konfirmasi Kata Sandi"
        type="password"
        placeholder="ulangi kata sandi"
        required
        value={form.confirmPassword}
        onChange={handleChange("confirmPassword")}
      />

      <a href="#" className="block text-right text-xs text-brand-green mb-4">
        Lupa Password?
      </a>

      <Button type="submit" variant="primary">
        Daftar
      </Button>
      <div className="mt-3">
        <Button to="/login" variant="secondary">
          Masuk
        </Button>
      </div>

      <FormDivider />

      <Button variant="outline">Daftar dengan Google</Button>
    </form>
  );
}
