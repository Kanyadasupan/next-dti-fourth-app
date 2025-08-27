import Image from "next/image";
import bmi from "./images/bmi.png";
import mbr from "./images/mbr.png";
import car from "./images/car.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center mb-4">
          <Image
            src="/Graphicloads-Flat-Finance-Calculator.256.png"
            alt="Calculator Logo"
            width={200}
            height={200}
          />
        </div>
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            เครื่องมือ<span className="text-indigo-600">คำนวณ</span>ออนไลน์
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ตัวช่วยคำนวณสำหรับชีวิตประจำวันของคุณ คำนวณ BMI, BMR, และค่างวดรถได้อย่างรวดเร็ว
          </p>
        </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- BMI Card --> */}
          <Link
            href="/bmi"
            className="card p-6 flex flex-col items-center text-center"
          >
            <div className="flex-shrink-0 mb-4">
              <Image src={bmi} alt="BMI" width={96} height={96} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              คำนวณค่า BMI
            </h2>
            <p className="text-gray-500">
              คำนวณดัชนีมวลกาย เพื่อประเมินภาวะอ้วนหรือผอม
            </p>
          </Link>

          {/* <!-- BMR Card --> */}
          <Link
            href="/bmr"
            className="card p-6 flex flex-col items-center text-center"
          >
            <div className="flex-shrink-0 mb-4">
              <Image src={mbr} alt="BMR" width={96} height={96} />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              คำนวณค่า BMR
            </h2>
            <p className="text-gray-500">
              คำนวณอัตราการเผาผลาญพลังงานในร่างกาย
            </p>
          </Link>

          {/* <!-- Car Installment Card --> */}
          <Link
            href="/carinstallment"
            className="card p-6 flex flex-col items-center text-center"
          >
            <div className="flex-shrink-0 mb-4">
              <Image
                src={car}
                alt="Car Installment"
                width={96}
                height={96}
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              คำนวณค่างวดรถ
            </h2>
            <p className="text-gray-500">
              คำนวณค่างวดรถยนต์รายเดือนอย่างรวดเร็ว
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
