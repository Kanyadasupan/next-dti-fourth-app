'use client'
import Image from "next/image";
import bmi from "../images/bmi.png";

export default function Page() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full">
        
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-2">
            เครื่องมือคำนวณ <span className="text-indigo-600">BMI</span>
          </h1>
          <p className="text-gray-500 text-center text-sm">
            Body Mass Index
          </p>
        </div>

       
        <div className="flex justify-center mb-6">
          <Image
              src={bmi}
              alt="BMI Calculator"
              className="w-1/2 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
            />
        </div>

        
        <div className="space-y-4">
          <div>
            <label htmlFor="weight" className="block text-base font-medium text-gray-700">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="เช่น 65"
              disabled 
            />
          </div>

          <div>
            <label htmlFor="height" className="block text-base font-medium text-gray-700">
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="เช่น 170"
              disabled 
            />
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            className="flex-1 w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            คำนวณ BMI
          </button>
          <button
            className="flex-1 w-full py-3 px-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            รีเซ็ต
          </button>
        </div>

        <div className="mt-6 text-center text-xl font-semibold text-gray-700">
          <p>
            ค่า BMI ที่คำนวณได้: 0.00
          </p>
        </div>
      </div>
    </div>
  )
}
