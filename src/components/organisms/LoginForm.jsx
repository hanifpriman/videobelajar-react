import { useState } from "react";
import Input from "../atoms/Input.jsx";
import Button from "../atoms/Button.jsx";
import FormDivider from "../molecules/FormDivider.jsx";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(field) {
    return (e) => setForm({ ...form, [field]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Data login:", form);
    alert("Login berhasil (dummy, belum terhubung ke backend)!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="E-Mail"
        type="email"
        placeholder="nama@email.com"
        required
        value={form.email}
        onChange={handleChange("email")}
      />
      <Input
        label="Kata Sandi"
        type="password"
        placeholder="masukkan kata sandi"
        required
        value={form.password}
        onChange={handleChange("password")}
      />

      <a href="#" className="block text-right text-xs text-brand-green mb-4">
        Lupa Password?
      </a>

      <Button type="submit" variant="primary">
        Masuk
      </Button>
      <div className="mt-3">
        <Button to="/register" variant="secondary">
          Daftar
        </Button>
      </div>

      <FormDivider />

      <Button variant="outline">Masuk dengan Google</Button>
    </form>
  );
}
