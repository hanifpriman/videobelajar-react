import Navbar from "../components/organisms/Navbar.jsx";
import HeroBanner from "../components/organisms/HeroBanner.jsx";
import CourseGrid from "../components/organisms/CourseGrid.jsx";
import NewsletterSection from "../components/organisms/NewsletterSection.jsx";
import Footer from "../components/organisms/Footer.jsx";
import courses from "../data/courses.js";

// HomePage cuma nyusun organism-organism di atas secara berurutan,
// dan ngirim data "courses" ke CourseGrid lewat props
export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <HeroBanner />
      <CourseGrid courses={courses} />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
