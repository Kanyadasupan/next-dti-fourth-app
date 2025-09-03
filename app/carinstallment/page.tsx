'use client'
import Image from "next/image";
import car from "../images/car.png";
import { useState } from "react";
import Link from "next/link";


export default function Page() {

  const [name, setName] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [downPayment, setDownPayment] = useState('15');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('0.00');

  const calculateInstallment = () => {
    const price = parseFloat(carPrice);
    const downPercent = parseFloat(downPayment);
    const annualRate = parseFloat(interestRate);
    const periodMonths = parseInt(loanPeriod, 10);

    //validate input
    if (!carPrice || !interestRate || !loanPeriod || parseFloat(carPrice) <= 0 || parseFloat(interestRate) <= 0 || parseInt(loanPeriod, 10) <= 0) {
      alert ("กรุณาป้อนค่าราคา ดอกเบี้ย ระยะเวลาที่ต้องการ โดยต้องมีค่ามากกว่า 0");
      return;
    }

    const downPaymentAmount = price * (downPercent / 100);
    const loanAmount = price - downPaymentAmount;

    const totalInterestPayment = (loanAmount * (annualRate / 100)) * (periodMonths / 12);
    const totalLoanPayment = loanAmount + totalInterestPayment;
    
    const monthlyPaymentAmount = (totalLoanPayment / periodMonths) + (downPaymentAmount * 0.001);

    setMonthlyPayment(monthlyPaymentAmount.toFixed(2));
  };

  const resetForm = () => {
    setName('');
    setCarPrice('');
    setInterestRate('');
    setDownPayment('15');
    setLoanPeriod('');
    setMonthlyPayment('0.00');
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full">
        
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-2">
            เครื่องมือคำนวณ <span className="text-teal-600">ค่างวดรถ</span>
          </h1>
          <p className="text-gray-500 text-center text-sm">
            วางแผนการเงินสำหรับการซื้อรถ
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <Image
              src={car}
              alt="BMI Calculator"
              className="w-1/2 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
            />
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              ชื่อผู้คำนวณ
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              placeholder="เช่น สมชาย"
            />
          </div>

          <div>
            <label htmlFor="carPrice" className="block text-base font-medium text-gray-700">
              ราคารถ
            </label>
            <input
              type="number"
              id="carPrice"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              placeholder="เช่น 800000"
            />
          </div>

          <div>
            <label htmlFor="interestRate" className="block text-base font-medium text-gray-700">
              ดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              id="interestRate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              placeholder="เช่น 3.5"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              เงินดาวน์ (%)
            </label>
            <div className="flex flex-wrap gap-4">
              {[15, 20, 25, 30, 35].map((percent) => (
                <div key={percent} className="flex items-center">
                  <input
                    type="radio"
                    id={`downPayment-${percent}`}
                    name="downPayment"
                    value={percent}
                    checked={downPayment == String(percent)}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                  />
                  <label htmlFor={`downPayment-${percent}`} className="ml-2 text-sm text-gray-700">
                    {percent}%
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="loanPeriod" className="block text-base font-medium text-gray-700">
              จำนวนเดือนที่ผ่อน
            </label>
            <select
              id="loanPeriod"
              value={loanPeriod}
              onChange={(e) => setLoanPeriod(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
            >
              <option value="">เลือกจำนวนเดือน</option>
              {[...Array(6).keys()].map(i => (
                <option key={i + 1} value={(i + 1) * 12}>
                  {(i + 1) * 12} เดือน
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={calculateInstallment}
            className="flex-1 w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            คำนวณค่างวด
          </button>
          <button
            onClick={resetForm}
            className="flex-1 w-full py-3 px-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            รีเซ็ต
          </button>
        </div>

        <div className="mt-6 text-center text-xl font-semibold text-gray-700">
          <p>
            ค่างวดต่อเดือน: {monthlyPayment} บาท
          </p>
        </div>
        <div className="mt-6 flex space-x-4">
          <Link href="/" className="W=full py-3 px-4 border border-teal-700 hover:bg-gray-400 text-teal-700 font-bold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700">
            ย้อนกลับ
          </Link>
        </div>
      </div>
    </div>
  )
}
