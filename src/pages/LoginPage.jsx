import Logo from "../components/atoms/Logo.jsx";
import LoginForm from "../components/organisms/LoginForm.jsx";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white px-6 py-4 border-b border-gray-100">
        <Logo />
      </header>

      <div className="flex justify-center px-4 py-14">
        <div className="bg-white rounded-xl shadow-sm p-8 w-full max-w-md">
          <h2 className="text-xl font-bold text-center">Masuk ke Akun</h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
