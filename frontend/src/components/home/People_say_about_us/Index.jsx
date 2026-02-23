import React, { useEffect, useRef } from "react";
import KataTokoh from "../../../Assets/Photo-Home/Kata Tokoh.svg";
import Fadhil from "./images/Fadhil_Kabem.svg";
import Jonathan from "./images/Jonathan_Kabem.svg";
import Wanda from "./images/Sekum_Wanda.svg";
import Hauzan from "./images/Kadin_PPSDM.svg";
import Diva from "./images/Koorbid_Kerumahtanggaan.svg";
import Xenia from "./images/Kadin_Adm.svg";

const testimonials = [
  {
    name: "M Fadhil Rahman",
    title: "Ketua BEM KM Fasilkom UNSRI 2025",
    quote:
      "BEM selalu menjadi ruang kolaborasi yang memungkinkan mahasiswa untuk berinovasi dan menyuarakan aspirasi dengan penuh tanggung jawab.",
    foto: Fadhil,
  },
  {
    name: "Jonathan Alfasya Putra",
    title: "Ketua BEM KM Fasilkom UNSRI 2024",
    quote:
      "Kami percaya bahwa keterlibatan aktif mahasiswa adalah kunci perubahan kampus yang berkelanjutan.",
    foto: Jonathan,
  },
  {
    name: "Wanda Hamidah",
    title: "Sekretaris Umum",
    quote:
      "Pengalaman di BEM membuka banyak kesempatan untuk berkembang, belajar organisasi, dan berjejaring.",
    foto: Wanda,
  },
  {
    name: "Diva Sarasvati Azzahra",
    title: "Koorbid Kerumahtanggaan",
    quote:
      "Kolaborasi antar dinas menjadi kekuatan utama dalam menjalankan visi misi kami.",
    foto: Diva,
  },
];

export default function PeopleSayAboutUs() {
  const containerRef = useRef(null);
  const speed = 0.35; // atur kecepatan di sini

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId;
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        el.scrollLeft += speed;

        // infinite loop
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const pause = () => (isPaused = true);
    const resume = () => (isPaused = false);

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause);
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="relative max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-16 py-16 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-[22px] md:text-4xl font-gotham-bold mb-4">
          What <span className="text-[#FD8F17]">People</span> Say{" "}
          <span className="text-[#4A0000]">About</span> Us
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-gotham-book">
          Kami percaya, suara mahasiswa lebih dari sekadar umpan balik — ia
          adalah napas dari perubahan dan refleksi perjalanan BEM Fasilkom
          UNSRI.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <article
            key={i}
            className="min-w-[250px] md:min-w-[320px] max-w-60 md:max-w-80
           bg-white rounded-2xl p-6 pt-8 pb-8
           shadow-md shadow-black/5 border border-gray-100
           flex-shrink-0 mb-8 snap-start hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FD9B2D] flex-shrink-0">
                <img
                  src={t.foto}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="text-sm md:text-base font-gotham-medium">
                  {t.name}
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-gotham-book">
                  {t.title}
                </div>
              </div>
            </div>

            <blockquote className="italic text-sm leading-relaxed text-gray-700">
              “{t.quote}”
            </blockquote>
          </article>
        ))}
      </div>

      {/* Decorative */}
      {/* <img
        src={KataTokoh}
        alt="Kata Tokoh"
        className="absolute right-6 bottom-4 w-28 md:w-36 opacity-80 pointer-events-none"
      /> */}

      <div className="absolute top-[15%] right-[10%] w-[260px] h-[200px] bg-[#4A0000] rounded-full blur-[300px] opacity-40" />
    </section>
  );
}
