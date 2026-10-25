# videobelajar — React Project

Website statis 3 halaman (Login, Register, Homepage) pakai React + Vite + Tailwind CSS.

## Cara menjalankan

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:5173` di browser. Halaman akan otomatis pindah antar
`/`, `/login`, dan `/register` lewat React Router.

## Struktur folder

```
src/
├── components/
│   ├── atoms/        → komponen paling kecil: Button, Input, Logo, Avatar
│   ├── molecules/     → gabungan atom: CourseCard, CategoryTabs, FormDivider
│   └── organisms/     → bagian besar halaman: Navbar, LoginForm, RegisterForm,
│                         HeroBanner, CourseGrid, NewsletterSection, Footer
├── data/
│   └── courses.js     → data dummy course, dikirim ke CourseGrid lewat props
├── pages/
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   └── HomePage.jsx
├── App.jsx             → routing antar 3 halaman
└── main.jsx            → entry point React
```

Pola yang dipakai: **atomic design** (atoms → molecules → organisms → pages) dan
**reusable component lewat props** — misalnya `Button` dipakai di banyak tempat
dengan `variant` yang beda-beda, dan `CourseCard` nerima semua datanya dari props,
bukan hardcode di dalam komponennya sendiri.

## Responsive

Semua responsive diatur pakai class Tailwind (`sm:`, `md:`, `lg:`), contohnya:

- `CourseGrid`: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — 1 kolom di HP, 2 di tablet, 3 di desktop
- `Navbar`: link "Kategori" disembunyikan di layar kecil (`hidden sm:block`)
- `Footer`: kolom-kolom ditumpuk vertikal di HP, horizontal di desktop (`flex-col md:flex-row`)

Tidak perlu library tambahan seperti react-responsive, karena Tailwind sudah cukup
untuk kasus ini. Kalau butuh logic kondisional di JavaScript (misalnya render
komponen yang beda total di mobile vs desktop, bukan cuma beda style), baru
library seperti `react-responsive` lebih masuk akal dipakai.

## Menambah halaman baru

1. Buat file baru di `src/pages/`
2. Tambahkan `<Route>` baru di `src/App.jsx`
3. Pakai ulang komponen yang sudah ada di `components/` sebisa mungkin sebelum
   bikin komponen baru
