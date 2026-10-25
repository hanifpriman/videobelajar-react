// komponen Avatar, cuma bungkus <img> jadi bulat
// dipakai di Navbar (foto profil) dan CourseCard (foto instruktur)
export default function Avatar({ src, alt = "avatar", size = "w-9 h-9" }) {
  return <img src={src} alt={alt} className={`${size} rounded-full object-cover flex-shrink-0`} />;
}
