import { useState } from "react";
import CategoryTabs from "../molecules/CategoryTabs.jsx";
import CourseCard from "../molecules/CourseCard.jsx";

const categories = ["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];

// CourseGrid nerima data course dari luar lewat props "courses"
// (datanya sendiri didefinisikan di src/data/courses.js, lalu dikirim dari HomePage)
// state "active" cuma ngurusin kategori mana yang lagi difilter
export default function CourseGrid({ courses }) {
  const [active, setActive] = useState("Semua Kelas");

  const filteredCourses =
    active === "Semua Kelas" ? courses : courses.filter((course) => course.category === active);

  return (
    <section className="px-4 md:px-10 py-10">
      <h2 className="text-xl font-bold mb-1">Koleksi Video Pembelajaran Unggulan</h2>
      <p className="text-sm text-gray-500 mb-6">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami
      </p>

      <CategoryTabs categories={categories} active={active} onSelect={setActive} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCourses.map((course) => (
          // "key" wajib ada tiap kali render list di React, dan props di-spread dari data course
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}
