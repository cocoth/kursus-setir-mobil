import Navbar from "@/components/navbar/Navbar";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen">
        <section className="relative flex flex-col pt-12" id="home">
          <Image
            src="/img/car-landing-2.jpg"
            alt="Logo"
            width={1280}
            height={720}
            className="relative h-[50vh] w-full object-fill"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <section className="h-full w-full flex justify-center items-center">
              <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                Maju Jaya Lancar
              </h1>
            </section>
          </div>
        </section>
        <section className="pt-10 py-2 px-3 flex flex-col justify-center items-center" id="about">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">About Us</h1>
            <Card className="p-3 w-full">
              <p className="text-sm sm:text-lg md:text-2xl">
                Selamat datang di <span className="font-semibold">Maju Jaya Lancar</span>, ahli kursus mengemudi dengan fokus pada keamanan dan kenyamanan. Kami mengajarkan teknik Defensive Driving untuk memastikan Anda berkendara dengan risiko minimal. Instruktur berpengalaman kami akan membimbing Anda menjadi pengemudi yang percaya diri dan bertanggung jawab. Bergabunglah dengan kami untuk pengalaman belajar mengemudi yang profesional dan menyenangkan.
              </p>
            </Card>
          </div>
        </section>
      </div>
      <section className="grid md:grid-flow-col px-3 py-3 pt-10 gap-3 justify-center bg-slate-900/70" id="service">
        <Card className="p-3 shadow-lg hover:scale-[1.03] hover:shadow-blue-800 ease-in-out duration-700">
          <div className="mx-5">
            <h2 className="font-semibold text-center text-2xl sm:text-3xl md:text-4xl">Kurikulum</h2>
            <hr className="my-2" />
            <ul className="list-disc">
              <li>Pengenalan Transmisi manual dan automatic/triptonic</li>
              <li>Persiapan awal berkendara</li>
              <li>Jalan lurus, berbelok dan menikung</li>
              <li>Belajar di jalan berlawanan ( dua arah )</li>
              <li>Belajar di jalanan sempit (melatih dimensi kendaraan)</li>
              <li>Belajar tanjakan dan turunan</li>
              <li>Belajar parkir Seri dan Parallel</li>
              <li>Belajar timing (ketepatan)</li>
              <li>Belajar controlling (memahami lingkungan)</li>
            </ul>
          </div>
        </Card>
        <Card className="p-3 shadow-lg hover:scale-[1.03] hover:shadow-blue-800 ease-in-out duration-700">
          <div className="mx-5">
            <h2 className="font-semibold text-center text-2xl sm:text-3xl md:text-4xl">Fasilitas</h2>
            <hr className="my-2" />
            <ul className="list-disc">
              <li>Simulasi Ujian Nasional</li>
              <li>Simulasi Ujian Praktik</li>
              <li>Simulasi Ujian Teori</li>
              <li>Simulasi Ujian SIM</li>
              <li>Simulasi Ujian SIM Internasional</li>
              <li>Simulasi Ujian SIM A</li>
              <li>Simulasi Ujian SIM C</li>
              <li>Simulasi Ujian SIM B1</li>
              <li>Simulasi Ujian SIM B2</li>
              <li>Simulasi Ujian SIM B2 Umum dan Khusus</li>
            </ul>
          </div>
        </Card>
        <Card className="p-3 shadow-lg hover:scale-[1.03] hover:shadow-blue-800 ease-in-out duration-700">
          <div className="mx-5">
            <h2 className="font-semibold text-center text-2xl sm:text-3xl md:text-4xl">Harga</h2>
            <hr className="my-2" />
            <ul className="list-disc">
              <li>Biaya Kursus Rp. 1.500.000,-</li>
              <li>Biaya Ujian Praktik Rp. 300.000,-</li>
              <li>Biaya Ujian Teori Rp. 200.000,-</li>
              <li>Biaya Ujian SIM Rp. 200.000,-</li>
              <li>Biaya Ujian SIM Internasional Rp. 300.000,-</li>
              <li>Biaya Ujian SIM A Rp. 300.000,-</li>
              <li>Biaya Ujian SIM C Rp. 300.000,-</li>
              <li>Biaya Ujian SIM B1 Rp. 300.000,-</li>
              <li>Biaya Ujian SIM B2 Rp. 300.000,-</li>
              <li>Biaya Ujian SIM B2 Umum dan Khusus Rp. 300.000,-</li>
            </ul>
          </div>
        </Card>
      </section>
      <div className="px-3">
        <section className="my-1 grid">
          <h1 className="text-center text-3xl font-semibold">Frequently Asked Questions</h1>
          <Card className="p-3 text-sm sm:text-lg md:text-xl w-full">
            <details className="transition-all transform ease-linear duration-700">
              <summary className="text-xl font-semibold cursor-pointer">Bagaimana Cara Mendaftar?</summary>
              <p>Untuk mendaftar kursus, Anda bisa langsung datang ke kantor kami di Jalan Dokter Cipto, Semarang timur. Atau Anda bisa menghubungi kami melalui telepon atau email. Kami akan memberikan informasi lebih lanjut mengenai kursus dan jadwal yang tersedia.</p>
            </details>
            <details className="transition-all transform ease-linear duration-700">
              <summary className="text-xl font-semibold cursor-pointer">Apa Saja Syarat Pendaftaran?</summary>
              <p>Syarat pendaftaran kursus kami adalah minimal berusia 17 tahun dan memiliki KTP. Untuk ujian SIM, peserta harus memiliki SIM C sementara untuk ujian SIM Internasional, peserta harus memiliki SIM A.</p>
            </details>
            <details className="transition-all transform ease-linear duration-700">
              <summary className="text-xl font-semibold cursor-pointer">Apakah Ada Diskon Khusus?</summary>
              <p>Kami memberikan diskon khusus untuk pendaftaran lebih dari satu orang. Anda juga bisa mendapatkan diskon jika Anda mendaftar lebih dari satu kursus.</p>
            </details>
            <details className="transition-all transform ease-linear duration-700">
              <summary className="text-xl font-semibold cursor-pointer">Apakah Ada Program Khusus Untuk Pelajar?</summary>
              <p>Kami memiliki program khusus untuk pelajar yang ingin mengikuti kursus mengemudi. Program ini memberikan diskon khusus untuk pelajar yang mendaftar kursus bersama teman-temannya.</p>
            </details>
            <details className="transition-all transform ease-linear duration-700">
              <summary className="text-xl font-semibold cursor-pointer">Apakah Ada Program Khusus Untuk Wanita?</summary>
              <p>Kami memiliki program khusus untuk wanita yang ingin belajar mengemudi. Program ini memberikan kelas khusus untuk wanita dengan instruktur wanita.</p>
            </details>
            <details className="transition-all transform ease-linear duration-700">
              <summary className="text-xl font-semibold cursor-pointer">Apakah Ada Program Khusus Untuk Lansia?</summary>
              <p>Kami memiliki program khusus untuk lansia yang ingin belajar mengemudi. Program ini memberikan kelas khusus untuk lansia dengan instruktur berpengalaman.</p>
            </details>
          </Card>
        </section>
      </div>
    </main>
  );
}
