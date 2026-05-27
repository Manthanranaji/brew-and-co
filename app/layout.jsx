import "./globals.css"
import { Cormorant_Garamond, Fraunces, Lato, Playfair_Display, Lovers_Quarrel } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','500','600','700','800','900'],
  variable: "--font-playfair",
})

const vibes = Lovers_Quarrel({
  weight: "400",
  subsets: ['latin'],
  variable: "--font-vibes"
})

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
      <body className={`${fraunces.variable} ${playfair.variable} ${vibes.variable} ${cormorant.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  )
}