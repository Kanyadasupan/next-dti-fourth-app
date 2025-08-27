import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin","thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Calculator Varity 2025 by DTI-SAU",
  description: "เครื่องคำนวณหลากหลาย โดย DTI-SAU",
  keywords: ["เครื่องคำนวณ","BMI","BMR","Car Installment"],
  icons: {
    icon: "/Graphicloads-Flat-Finance-Calculator.256.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
