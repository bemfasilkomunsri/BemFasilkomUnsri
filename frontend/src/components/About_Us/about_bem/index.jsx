import React, { useRef } from "react";
import useInView from "../../../hooks/useInView.jsx";

import Img1 from "../images/1.png";
import Img2 from "../images/2.png";
import Img3 from "../images/3.png";
import Img4 from "../images/4.png";
import Img5 from "../images/5.png";
import Img6 from "../images/6.png";
import Img7 from "../images/7.png";

const AboutBem = () => {
  const scrollRef = useRef(null);

  // --- Mouse Drag (smooth, no jitter) ---
  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    scrollRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    scrollRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!slider.isDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.1;
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  const items = [
    { img: Img1, title: "OPREC", desc: "Open Recruitment Staff BEM KM Fasilkom UNSRI 2025" },
    { img: Img2, title: "Kekeluargaan", desc: "Upgrading Staff BEM KM Fasilkom UNSRI 2025" },
    { img: Img3, title: "Lingkungan", desc: "Pemuda Pemudi Peduli Lingkungan (P3L)" },
    { img: Img4, title: "Kebersamaan", desc: "Movie Mates Nonton Bareng Artha Darma" },
    { img: Img5, title: "Visit Internal", desc: "BEM Visit Internal Bersama HIMSI" },
    { img: Img6, title: "Aksi Sosial", desc: "Galang Dana Korban Banjir di Mataram" },
    { img: Img7, title: "Kolaborasi", desc: "FEM X BEM FTI UNAND" },
  ];

  const [ref, inView] = useInView({ threshold: 0.08, once: true });

  return (
    <section
      ref={ref}
      className="w-full bg-transparent px-4 sm:px-8 lg:px-16 py-16"
    >
      <div className="max-w-[1750px] mx-auto px-6">

        <div className="flex flex-col md:flex-row items-start md:gap-32 gap-12">

          {/* LEFT TEXT */}
          <div className={`md:w-5/12 ${inView ? "animate-stagger animate-play" : ""}`}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-gotham-bold">
              <span className="text-black">About </span>
              <span className="text-[#4a0000]">BEM KM Fasilkom UNSRI</span>
            </h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify font-gotham-book">
              BEM KM Fasilkom Unsri adalah organisasi eksekutif mahasiswa yang
              mewadahi aspirasi, inovasi, dan aksi nyata. Dengan semangat Artha
              Dharma, BEM KM Fasilkom Unsri berkomitmen menciptakan lingkungan
              yang dinamis, kolaboratif, dan progresif.
            </p>
          </div>

          {/* CAROUSEL */}
          <div className="md:w-7/12 w-full">

            <div
              ref={scrollRef}
              className="
                flex gap-8 overflow-x-auto
                snap-x snap-mandatory
                scroll-smooth
                no-scrollbar
                cursor-grab active:cursor-grabbing
                select-none
              "
              style={{
                WebkitOverflowScrolling: "touch",
              }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="
                    snap-center
                    flex-shrink-0
                    w-[280px] md:w-[340px] lg:w-[380px]
                  "
                >
                  <div className="
                    relative h-60 md:h-64
                    rounded-3xl overflow-hidden
                    shadow-xl group
                    transition duration-500
                    hover:scale-105
                  ">
                    <img
                      src={item.img}
                      alt={item.title}
                      draggable="false"
                      className="
                        w-full h-full object-cover
                        transition duration-700
                        group-hover:scale-110
                        pointer-events-none
                      "
                    />

                    <div className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                    " />

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <h4 className="font-bold text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm opacity-90">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBem;