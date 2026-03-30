import "./globals.css"
import { Fraunces, Lato } from "next/font/google"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-fraunces",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
})

export const metadata = {
  title: "Brew & Co.",
  description: "Premium Cafe",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  )
}