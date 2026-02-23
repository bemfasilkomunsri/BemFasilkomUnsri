import React, { useState, useRef } from "react";
import kalender from "../../Assets/Photo-Home/kalender-akademik.jpg";
import peta from "../../Assets/Photo-Home/denah-kampus.jpg";

const PAMA = () => {
  /* ================= FAQ STATE ================= */
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      q: "Berapa SKS ideal untuk mahasiswa baru?",
      a: "Mahasiswa baru biasanya mengambil 18–22 SKS. Fokus utama adalah adaptasi dengan sistem kuliah dan menjaga kestabilan nilai.",
    },
    {
      q: "Apa IPK yang dianggap aman?",
      a: "IPK di atas 3.00 sudah tergolong baik. Namun jika ingin beasiswa atau peluang lebih besar, targetkan di atas 3.50.",
    },
    {
      q: "Apakah wajib ikut organisasi?",
      a: "Tidak wajib, namun organisasi membantu meningkatkan soft skill, relasi, dan pengalaman.",
    },
  ];

  /* ================= ROADMAP STATE ================= */

  const [openRoadmap, setOpenRoadmap] = useState(null);

  const roadmap = [
    {
      semester: "Semester 1 — Adaptasi",
      content:
        "Memahami sistem kuliah, SIMAK, dan membangun rutinitas belajar.",
    },
    {
      semester: "Semester 2 — Konsistensi",
      content: "Mulai meningkatkan nilai dan eksplorasi organisasi.",
    },
    {
      semester: "Semester 3 — Eksplorasi",
      content: "Mulai ikut lomba, organisasi, dan pengembangan skill.",
    },
    {
      semester: "Semester 4 — Pengembangan",
      content: "Bangun portfolio dan pengalaman.",
    },
    {
      semester: "Semester 5 — Spesialisasi",
      content: "Fokus bidang minat dan magang.",
    },
    {
      semester: "Semester 6 — Profesional",
      content: "Mulai networking dan persiapan karier.",
    },
    {
      semester: "Semester 7 — Skripsi",
      content: "Fokus skripsi dan karier.",
    },
    {
      semester: "Semester 8 — Lulus",
      content: "Finalisasi kuliah dan masuk dunia kerja.",
    },
  ];

  /* ================= CAROUSEL DRAG ================= */

  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const mistakes = [
    {
      title: "Meremehkan Deadline",
      desc: "Deadline sangat ketat dan mempengaruhi nilai.",
    },
    {
      title: "Jarang Masuk",
      desc: "Absensi mempengaruhi nilai akhir.",
    },
    {
      title: "Tidak Kenal Dosen",
      desc: "Dosen bisa jadi mentor penting.",
    },
    {
      title: "Tidak Bangun Relasi",
      desc: "Relasi penting untuk karier.",
    },
    {
      title: "Manajemen Waktu Buruk",
      desc: "Kuliah butuh keseimbangan.",
    },
  ];

  const handleMouseDown = (e) => {
    isDown.current = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a0000] via-[#6a0000] to-black" />

        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Panduan Mahasiswa Baru Unsri
          </h1>

          <p className="opacity-90">
            Semua informasi penting untuk memulai perjalanan kuliahmu
          </p>
        </div>
      </section>

      {/* KALENDER */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Kalender Akademik
        </h2>

        <div className="flex justify-center">
          <div className="w-full md:w-[60%] lg:w-[70%] rounded-2xl shadow-xl">
            <img src={kalender} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      {/* VIDEO SIMAK */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Panduan Sistem Akademik
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* SIMAK */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Panduan SIMAK Unsri
              </h3>

              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allowFullScreen
                />
              </div>
            </div>

            {/* ELEARNING */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Panduan e-Learning Unsri
              </h3>

              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-xl shadow-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PENJELASAN SKS IPK */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Penjelasan SKS dan IPK</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-2">Apa itu SKS?</h3>

              <p>
                SKS adalah satuan beban studi. Biasanya mahasiswa mengambil
                18–24 SKS per semester.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-2">Apa itu IPK?</h3>

              <p>IPK adalah rata-rata nilai seluruh semester. Maksimal 4.00.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Kesalahan Fatal Mahasiswa Baru
          </h2>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto cursor-grab scroll-smooth"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {mistakes.map((item, i) => (
              <div
                key={i}
                className="min-w-[280px] bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Roadmap Kuliah</h2>

          {roadmap.map((item, i) => (
            <div key={i} className="mb-4 border rounded-xl">
              <button
                onClick={() => setOpenRoadmap(openRoadmap === i ? null : i)}
                className="w-full text-left p-5 font-semibold flex justify-between"
              >
                {item.semester}

                <span>{openRoadmap === i ? "-" : "+"}</span>
              </button>

              {openRoadmap === i && (
                <div className="p-5 bg-white">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">FAQ</h2>

          {faqData.map((item, i) => (
            <div key={i} className="mb-4 border rounded-xl">
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full text-left p-5 font-semibold flex justify-between"
              >
                {item.q}

                <span>{openFAQ === i ? "-" : "+"}</span>
              </button>

              {openFAQ === i && <div className="p-5 bg-gray-50">{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Peta Kampus Unsri
        </h2>

        <div className="flex justify-center">
          <div className="w-full md:w-[60%] lg:w-[70%]">
            <img src={peta} className="rounded-xl shadow-xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PAMA;
