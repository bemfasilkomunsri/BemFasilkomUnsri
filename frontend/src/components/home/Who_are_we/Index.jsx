import React from "react";
import LogoTengah from "../../../Assets/Photo-Home/Logo-tengah.png";
import PotoKanan from "../../../Assets/Photo-Home/Poto-kanan.png";
import PotoKiri from "../../../Assets/Photo-Home/Poto-kiri.png";
import { Link } from "react-router-dom";

const Who_are_we = () => {
  return (
    <section
      id="who-are-we"
      className="relative overflow-hidden mx-auto max-w-[1300px] 
      flex flex-col md:flex-row items-center 
      gap-14 md:gap-20 
      px-6 sm:px-10 lg:px-16 
      py-20"
    >
      {/* Background Blur */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 
        w-[300px] h-[300px] bg-[#4A0000] 
        rounded-full blur-[220px] opacity-40 pointer-events-none"
      />

      {/* KIRI - IMAGE */}
      <div className="relative flex items-center justify-center gap-4 md:gap-6 flex-shrink-0">
        <img
          src={PotoKiri}
          alt="Foto Kiri"
          className="w-36 md:w-72 translate-y-6 md:translate-y-10 
          rounded-2xl shadow-lg object-cover"
        />

        <img
          src={PotoKanan}
          alt="Foto Kanan"
          className="w-36 md:w-72 -translate-y-6 md:-translate-y-10 
          rounded-2xl shadow-lg object-cover"
        />

        <img
          src={LogoTengah}
          alt="Logo Tengah"
          className="absolute w-16 md:w-32 z-10"
        />
      </div>

      {/* KANAN - TEXT */}
      <div className="relative max-w-xl text-center md:text-left text-[#3E3E3E]">
        <h2 className="text-3xl md:text-5xl font-gotham-bold font-bold mb-6 text-[#030303]">
          Who <span className="text-[#FD8F17]">Are</span> We?
        </h2>

        <p className="mb-4 leading-relaxed">
          BEM Fasilkom Unsri adalah organisasi eksekutif mahasiswa yang
          mewadahi aspirasi, inovasi, dan aksi nyata.
        </p>

        <p className="mb-6 leading-relaxed">
          Dengan semangat <span className="italic">Arka Satyawira</span>, BEM
          Fasilkom Unsri berkomitmen menciptakan lingkungan yang dinamis,
          kolaboratif, dan progresif untuk membentuk mahasiswa yang visioner,
          berintegritas, dan berdampak.
        </p>

        <ul className="space-y-3 mb-8 text-left">
          <li className="flex gap-3">
            <span className="text-[#4A0000]">✔</span>
            Memiliki total 12 dinas dan 5 bidang
          </li>
          <li className="flex gap-3">
            <span className="text-[#4A0000]">✔</span>
            Garda terdepan aspirasi, inovasi, dan aksi nyata
          </li>
          <li className="flex gap-3">
            <span className="text-[#4A0000]">✔</span>
            Sinergi program kerja yang bermanfaat
          </li>
        </ul>

        <Link
          to="/profile"
          className="inline-block bg-[#4A0000] text-white 
          px-7 py-2 rounded-md font-medium 
          hover:bg-transparent hover:text-[#4A0000] 
          hover:border hover:border-[#4A0000] 
          transition"
        >
          More About BEM
        </Link>
      </div>
    </section>
  );
};

export default Who_are_we;
