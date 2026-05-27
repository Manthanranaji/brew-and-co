'use client'

import NavBar from "../navbar";
import useReveal from "../../hooks/reveal";

export const menus = [
  {
    category: "Espresso Based",
    items: [
      { name: "Espresso", description: "A concentrated shot of coffee with rich crema, bold flavor, and intense aroma. The purest form of coffee.", price: 120 },
      { name: "Double Espresso", description: "Two shots of espresso for a stronger, more intense coffee experience with deeper body.", price: 150 },
      { name: "Americano", description: "Espresso diluted with hot water, giving a smooth, black coffee similar to drip but richer.", price: 160 },
      { name: "Cappuccino", description: "Equal parts espresso, steamed milk, and milk foam. Creamy, balanced, and slightly frothy.", price: 190 },
      { name: "Latte", description: "Espresso with a large amount of steamed milk and a thin layer of foam. Smooth and mellow.", price: 200 },
      { name: "Flat White", description: "Velvety microfoam milk poured over espresso. Stronger than a latte, smoother than cappuccino.", price: 210 },
      { name: "Mocha", description: "Espresso blended with chocolate and milk, topped with foam. A perfect mix of coffee and dessert.", price: 220 },
    ],
  },
  {
    category: "Manual Brew",
    items: [
      { name: "Pour Over", description: "Hand-brewed coffee using V60 method. Highlights delicate flavors and aroma of specialty beans.", price: 220 },
      { name: "French Press", description: "Full-bodied coffee brewed by steeping coarse grounds. Rich oils and heavy texture.", price: 200 },
      { name: "AeroPress", description: "Smooth and versatile brew with low acidity and clean taste.", price: 210 },
      { name: "Cold Brew", description: "Slow-steeped coffee (12–18 hrs) resulting in low acidity, smooth, and naturally sweet flavor.", price: 230 },
      { name: "South Indian Filter Coffee", description: "Traditional decoction coffee with milk and chicory. Strong, bold, and nostalgic.", price: 150 },
    ],
  },
  {
    category: "Iced Coffee",
    items: [
      { name: "Iced Americano", description: "Chilled espresso diluted with cold water and ice. Crisp and refreshing.", price: 170 },
      { name: "Iced Latte", description: "Espresso with cold milk and ice. Smooth and cooling.", price: 210 },
      { name: "Iced Mocha", description: "Cold coffee with chocolate syrup and milk. Sweet and refreshing.", price: 230 },
      { name: "Vanilla Iced Latte", description: "Iced latte infused with vanilla syrup for a subtle sweetness.", price: 240 },
      { name: "Caramel Cold Coffee", description: "Blended cold coffee with caramel syrup and ice cream. Thick and indulgent.", price: 260 },
    ],
  },
  {
    category: "Signature Drinks",
    items: [
      { name: "Hazelnut Latte", description: "Smooth latte infused with nutty hazelnut flavor. Rich and aromatic.", price: 240 },
      { name: "Caramel Macchiato", description: "Layered drink with vanilla milk, espresso shot, and caramel drizzle.", price: 250 },
      { name: "Affogato", description: "Vanilla ice cream topped with a hot shot of espresso. Dessert meets coffee.", price: 270 },
      { name: "Irish Coffee (Non-Alcoholic)", description: "Strong coffee with cream and brown sugar notes. Warm and comforting.", price: 230 },
      { name: "Spiced Cinnamon Latte", description: "Latte infused with cinnamon and subtle spices. Cozy and flavorful.", price: 220 },
    ],
  },
  {
    category: "Add-ons",
    items: [
      { name: "Extra Espresso Shot", description: "Add an extra shot for more caffeine kick.", price: 50 },
      { name: "Almond Milk", description: "Dairy-free alternative with nutty flavor.", price: 40 },
      { name: "Soy Milk", description: "Plant-based milk with creamy texture.", price: 40 },
      { name: "Vanilla Syrup", description: "Adds smooth sweetness and aroma.", price: 30 },
      { name: "Caramel Syrup", description: "Rich caramel flavor boost.", price: 30 },
    ],
  },
];

function CoffeeBean({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M60 15C38 15 20 34 20 60C20 86 38 105 60 105C82 105 100 86 100 60C100 34 82 15 60 15Z"
        fill="#6F4E37"
      />

      <path
        d="M62 20C48 35 45 55 52 72C57 84 55 95 48 103"
        stroke="#3E2723"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuCard({ item, delay }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="
        opacity-0
        p-5
        rounded-2xl
        bg-[#FFF8F2]/20
        backdrop-blur-md
        border border-[#D9C9B8]/40
        shadow-md
        hover:shadow-xl
        hover:shadow-[0_10px_40px_rgba(181,118,40,0.18)]
        hover:scale-[1.02]
        transition-all
        duration-300
      "
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-semibold font-cormorant text-[#6B5144]">
          {item.name}
        </h3>

        <span className="text-[#B57628] font-bold">
          ₹{item.price}
        </span>
      </div>

      <p className="text-[13px] md:text-sm text-[#5C3D2E] font-playfair tracking-wider opacity-80 leading-relaxed">
        {item.description}
      </p>

      <div className="mt-4 h-[2px] w-10 bg-[#C8A27C] rounded-full"></div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="relative scroll-smooth min-h-screen w-full pt-24 bg-gradient-to-br from-[#F7F1E8] to-[#EFE4D4]">
      <NavBar />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Coffee Beans */}
        <CoffeeBean className="absolute top-28 left-10 md:w-12 md:h-12 w-6 h-6 opacity-20 animate-softBlink" />

        <CoffeeBean className="absolute top-40 right-20 w-8 h-8 opacity-10 rotate-[30deg] animate-softBlink [animation-delay:700ms]" />

        <CoffeeBean className="absolute bottom-72 left-2/3 md:h-8 md:w-8 w-5 h-5 opacity-20 -rotate-[15deg] animate-softBlink [animation-delay:300ms]" />

        <CoffeeBean className="absolute bottom-56 left-16 w-6 h-6 md:w-10 md:h-10 opacity-20 rotate-[45deg] animate-softBlink [animation-delay:900ms]" />

        <CoffeeBean className="absolute top-1/4 left-1/3 w-7 h-7 md:w-10 md:h-10 opacity-10 rotate-[18deg] animate-softBlink [animation-delay:500ms]" />

        <CoffeeBean className="absolute top-[18%] right-[32%] w-5 h-5 md:w-8 md:h-8 opacity-15 -rotate-[20deg] animate-softBlink [animation-delay:1200ms]" />

        <CoffeeBean className="absolute bottom-[22%] right-[18%] w-8 h-8 md:w-11 md:h-11 opacity-10 rotate-[65deg] animate-softBlink [animation-delay:400ms]" />

        <CoffeeBean className="absolute bottom-[35%] left-[28%] w-6 h-6 md:w-9 md:h-9 opacity-20 -rotate-[35deg] animate-softBlink [animation-delay:1000ms]" />

        <CoffeeBean className="absolute top-[55%] right-[40%] w-4 h-4 md:w-7 md:h-7 opacity-10 rotate-[10deg] animate-softBlink [animation-delay:600ms]" />

        <CoffeeBean className="absolute top-[70%] left-[45%] w-6 h-6 md:w-10 md:h-10 opacity-15 rotate-[75deg] animate-softBlink [animation-delay:1400ms]" />

        <CoffeeBean className="absolute top-[12%] left-[70%] w-5 h-5 md:w-8 md:h-8 opacity-10 -rotate-[50deg] animate-softBlink [animation-delay:850ms]" />

        <CoffeeBean className="absolute bottom-[12%] right-[8%] w-7 h-7 md:w-12 md:h-12 opacity-15 rotate-[28deg] animate-softBlink [animation-delay:1600ms]" />

        {/* Glow Blobs */}
        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-[#C8892A]/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            right-[-100px]
            w-[350px]
            h-[350px]
            rounded-full
            bg-[#8C6B58]/20
            blur-[120px]
          "
        />
      </div>

      {/* Grid Texture */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          opacity-[0.03]
          bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* Title */}
      <div className="text-center py-10">
        <h1 className="opacity-0 animate-fadeInUp [animation-delay:200ms] text-6xl md:text-8xl font-vibes text-[#2A160D] tracking-wide">
          Our Menu
        </h1>

        <p className="text-sm text-[#6B5144] font-playfair italic mt-2 opacity-0 animate-fadeInUp [animation-delay:600ms]">
          Crafted coffee experiences
        </p>
      </div>

      {/* Menu Sections */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        {menus.map((section, i) => (
          <div
            key={i}
            className={`mb-12 ${
              i !== menus.length - 1
                ? "border-b border-[#D9C9B8]/30 pb-10"
                : ""
            }`}
          >
            {/* Category Title */}
            <h2 className="font-vibes text-[#2A160D]/60 text-4xl md:text-5xl mb-6 border-l-4 border-[#B57628] pl-3">
              {section.category}
            </h2>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, j) => (
                <MenuCard
                  key={j}
                  item={item}
                  delay={j * 80}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}