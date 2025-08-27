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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/bmi"
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <Image
              src={bmi}
              alt="BMI Calculator"
              className="w-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">คำนวณ BMI</h2>
              <p className="text-gray-500">
                คำนวณดัชนีมวลกายเพื่อประเมินความเสี่ยงด้านสุขภาพที่อาจเกิดขึ้น
              </p>
            </div>
          </Link>
          <Link href="/bmr"
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <Image
              src={mbr}
              alt="BMI Calculator"
              className="w-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">คำนวณ BMR</h2>
              <p className="text-gray-500">
                คำนวณอัตราการเผาผลาญพลังงานพื้นฐานของร่างกาย
              </p>
            </div>
          </Link>
          <Link
            href="/carinstallment"
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <Image
              src={car}
              alt="BMI Calculator"
              className="w-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">คำนวณค่างวดรถ</h2>
              <p className="text-gray-500">
                คำนวณค่างวดรถยนต์และวางแผนการเงินสำหรับการซื้อรถของคุณ
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
