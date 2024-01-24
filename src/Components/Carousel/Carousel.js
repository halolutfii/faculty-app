import { Carousel } from "flowbite-react";

const Carousels = () => {
    return (
        <div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-3 p-3">
        <Carousel>
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
            />
            <img
            src="https://mediacdn.quipper.com/media/W1siZiIsIjIwMTkvMDUvMjgvMDQvMTkvMTQvN2YwMWRmMjYtYWUwYi00OGQ4LThkYzEtYjQ0ZTdlOWY4Mzk4LyJdLFsicCIsInRodW1iIiwiMzYweDI0MCNjIix7fV0sWyJwIiwiY29udmVydCIsIi1jb2xvcnNwYWNlIHNSR0IgLXN0cmlwIix7ImZvcm1hdCI6ImpwZyJ9XV0.jpg?sha=033051c25aac098c"
            alt="Fakultas Ilmu Komputer"
            />
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
            />
        </Carousel>
        </div>
        <div className="m-3 p-3">
        <h1 className="font-bold text-2xl">ILMU KOMPUTER</h1>
        <span className="m-2"></span>
        <p className="text-justify">Ilmu Komputer merupakan bidang studi yang identik dengan computer programming. Di fakultas ini akan dibekali keterampilan menyusun algoritma dan programming untuk mengembangkan sebuah aplikasi maupun sistem perangkat lunak. Jadi, pada dasarnya kamu akan belajar bagaimana cara agar komputer mampu melakukan berbagai hal yang diinginkan penggunanya. Di jurusan ini, ide-ide kreatifmu bisa diwujudkan apalagi di dunia informasi digital yang semakin tak terbatas ini!</p>
        <span className="m-1"></span>
        <h1 className="font-bold">Prospek Kerja</h1>
        <span className="m-1"></span>
        <p className="text-justify">Peluang karier yang menanti lulusan Ilmu Komputer itu ada banyak sekali, Gengs. Seluruh sektor membutuhkan lulusan Ilmu Komputer agar dapat bertahan dan bersaing di era revolusi industri 4.0. Jadi, berbekal keilmuan yang kamu pelajari di bangku perkuliahan, lulusan Ilmu Komputer punya nilai jual yang patut dibanggakan. Nggak heran deh kalau jenis dan jenjang kariernya yang ditawarkan sangat bervariasi.

        <strong> Secara umum, rata-rata gaji awal lulusan Ilmu Komputer berada pada kisaran Rp5.000.000,</strong> dengan pekerjaan sebagai staf dari bidang tertentu di suatu perusahaan. Besaran ini sangat bergantung pada kemampuan dan pengalaman yang kamu dimiliki, area tempatmu bekerja, posisi saat bekerja. Berikut ini beberapa pilihan karier yang bisa kamu geluti:</p>
        <ul className="list-disc m-3 grid grid-flow-row grid-cols-2">
            <li className="m-2">Perancang Web (Web Designer)</li>
            <li className="m-2">Insinyur Aplikasi (Application Engineer)</li>
            <li className="m-2">Game Creator</li>
            <li className="m-2">Game Programmer / Game Developer</li>
            <li className="m-2">Insinyur Perangkat Lunak (Software Engineering)</li>
            <li className="m-2">Konsultan IT</li>
            <li className="m-2">Data Scientist</li>
            <li className="m-2">Programmer (Software Developer)</li>
            <li className="m-2">Dosen</li>
            <li className="m-2">Technopreneur</li>
        </ul>

        </div>
        </div>
    )
}

export default Carousels;