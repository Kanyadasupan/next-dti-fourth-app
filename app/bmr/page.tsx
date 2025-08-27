'use client'
import Image from "next/image";
import mbr from "../images/mbr.png";
import { useState } from "react";
export default function Page() {

  const [gender, setGender] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmr, setBmr] = useState<number | null>(null);

  const calculateBmr = () => {
    const ageValue = parseFloat(age);
    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (!gender || isNaN(ageValue) || isNaN(heightValue) || isNaN(weightValue) ||
        ageValue <= 0 || heightValue <= 0 || weightValue <= 0) {
      setBmr(null);
      return;
    }

    let calculatedBmr: number;

    if (gender === 'male') {
      calculatedBmr = (10 * weightValue) + (6.25 * heightValue) - (5 * ageValue) + 5;
    } else { 
      calculatedBmr = (10 * weightValue) + (6.25 * heightValue) - (5 * ageValue) - 161;
    }

    setBmr(calculatedBmr);
  };

  const resetForm = () => {
    setGender('');
    setAge('');
    setHeight('');
    setWeight('');
    setBmr(null);
  };


  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full">
        
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-2">
            เครื่องมือคำนวณ <span className="text-pink-600">BMR</span>
          </h1>
          <p className="text-gray-500 text-center text-sm">
            Basal Metabolic Rate
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <Image
              src={mbr}
              alt="BMI Calculator"
              className="w-1/2 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
            />
        </div>

          <div>
            <label htmlFor="age" className="block text-base font-medium text-gray-700">
              อายุ (ปี)
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="mb-4 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
              placeholder="เช่น 25"
            />
          </div>

          <div>
            <label htmlFor="height" className="block text-base font-medium text-gray-700">
              ส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mb-4 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
              placeholder="เช่น 170"
            />
          </div>

          <div>
            <label htmlFor="weight" className="block text-base font-medium text-gray-700">
              น้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mb-4 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
              placeholder="เช่น 65"
            />
          </div>
        <div>
  <label className="block text-base font-medium text-gray-700">เพศ</label>
  <div className="flex items-center mb-4">
    <input
      type="radio"
      id="male"
      name="gender"
      value="male"
      className="mr-2"
    />
    <label htmlFor="male" className="text-base font-medium text-gray-700">ชาย</label>
  </div>
  <div className="flex items-center mb-4">
    <input
      type="radio"
      id="female"
      name="gender"
      value="female"
      className="mr-2"
    />
    <label htmlFor="female" className="text-base font-medium text-gray-700">หญิง</label>
  </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            className="flex-1 w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            คำนวณ BMR
          </button>
          <button
            className="flex-1 w-full py-3 px-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            รีเซ็ต
          </button>
        </div>

        <div className="mt-6 text-center text-xl font-semibold text-gray-700">
          <p>
            ค่า BMR ที่คำนวณได้: 0.00 กิโลแคลอรี่
          </p>
        </div>
      </div>
    </div>
  )
}
