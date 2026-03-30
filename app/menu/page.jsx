import NavBar from "../navbar";

export const menus = [
    // ESPRESSO BASED
    {
      category: "Espresso Based",
      items: [
        {
          name: "Espresso",
          description: "A concentrated shot of coffee with rich crema, bold flavor, and intense aroma. The purest form of coffee.",
          price: 120,
        },
        {
          name: "Double Espresso",
          description: "Two shots of espresso for a stronger, more intense coffee experience with deeper body.",
          price: 150,
        },
        {
          name: "Americano",
          description: "Espresso diluted with hot water, giving a smooth, black coffee similar to drip but richer.",
          price: 160,
        },
        {
          name: "Cappuccino",
          description: "Equal parts espresso, steamed milk, and milk foam. Creamy, balanced, and slightly frothy.",
          price: 190,
        },
        {
          name: "Latte",
          description: "Espresso with a large amount of steamed milk and a thin layer of foam. Smooth and mellow.",
          price: 200,
        },
        {
          name: "Flat White",
          description: "Velvety microfoam milk poured over espresso. Stronger than a latte, smoother than cappuccino.",
          price: 210,
        },
        {
          name: "Mocha",
          description: "Espresso blended with chocolate and milk, topped with foam. A perfect mix of coffee and dessert.",
          price: 220,
        },
      ],
    },
  
    // FILTER & MANUAL BREW
    {
      category: "Manual Brew",
      items: [
        {
          name: "Pour Over",
          description: "Hand-brewed coffee using V60 method. Highlights delicate flavors and aroma of specialty beans.",
          price: 220,
        },
        {
          name: "French Press",
          description: "Full-bodied coffee brewed by steeping coarse grounds. Rich oils and heavy texture.",
          price: 200,
        },
        {
          name: "AeroPress",
          description: "Smooth and versatile brew with low acidity and clean taste.",
          price: 210,
        },
        {
          name: "Cold Brew",
          description: "Slow-steeped coffee (12–18 hrs) resulting in low acidity, smooth, and naturally sweet flavor.",
          price: 230,
        },
        {
          name: "South Indian Filter Coffee",
          description: "Traditional decoction coffee with milk and chicory. Strong, bold, and nostalgic.",
          price: 150,
        },
      ],
    },
  
    // ICED COFFEE
    {
      category: "Iced Coffee",
      items: [
        {
          name: "Iced Americano",
          description: "Chilled espresso diluted with cold water and ice. Crisp and refreshing.",
          price: 170,
        },
        {
          name: "Iced Latte",
          description: "Espresso with cold milk and ice. Smooth and cooling.",
          price: 210,
        },
        {
          name: "Iced Mocha",
          description: "Cold coffee with chocolate syrup and milk. Sweet and refreshing.",
          price: 230,
        },
        {
          name: "Vanilla Iced Latte",
          description: "Iced latte infused with vanilla syrup for a subtle sweetness.",
          price: 240,
        },
        {
          name: "Caramel Cold Coffee",
          description: "Blended cold coffee with caramel syrup and ice cream. Thick and indulgent.",
          price: 260,
        },
      ],
    },
  
    // SIGNATURE / SPECIALTY
    {
      category: "Signature Drinks",
      items: [
        {
          name: "Hazelnut Latte",
          description: "Smooth latte infused with nutty hazelnut flavor. Rich and aromatic.",
          price: 240,
        },
        {
          name: "Caramel Macchiato",
          description: "Layered drink with vanilla milk, espresso shot, and caramel drizzle.",
          price: 250,
        },
        {
          name: "Affogato",
          description: "Vanilla ice cream topped with a hot shot of espresso. Dessert meets coffee.",
          price: 270,
        },
        {
          name: "Irish Coffee (Non-Alcoholic)",
          description: "Strong coffee with cream and brown sugar notes. Warm and comforting.",
          price: 230,
        },
        {
          name: "Spiced Cinnamon Latte",
          description: "Latte infused with cinnamon and subtle spices. Cozy and flavorful.",
          price: 220,
        },
      ],
    },
  
    // ADD-ONS
    {
      category: "Add-ons",
      items: [
        {
          name: "Extra Espresso Shot",
          description: "Add an extra shot for more caffeine kick.",
          price: 50,
        },
        {
          name: "Almond Milk",
          description: "Dairy-free alternative with nutty flavor.",
          price: 40,
        },
        {
          name: "Soy Milk",
          description: "Plant-based milk with creamy texture.",
          price: 40,
        },
        {
          name: "Vanilla Syrup",
          description: "Adds smooth sweetness and aroma.",
          price: 30,
        },
        {
          name: "Caramel Syrup",
          description: "Rich caramel flavor boost.",
          price: 30,
        },
      ],
    },
  ];

  export default function Menu() {
    return (
      <div className="min-h-screen w-full bg-[#F5EFE6]">
        <NavBar />
  
        {/* Title */}
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-4xl font-fraunces font-bold text-[#3B1F0E] tracking-wide">
            Our Menu
          </h1>
          <p className="text-sm text-[#6F4E37] mt-2">
            Crafted coffee experiences
          </p>
        </div>
  
        {/* Menu Sections */}
        <div className="max-w-6xl mx-auto px-4 pb-10">
          {menus.map((section, i) => (
            <div key={i} className="mb-12">
              
              {/* Category Title */}
              <h2 className="font-fraunces text-[#5C3D2E] text-2xl md:text-3xl font-bold mb-6 border-l-4 border-[#C8A27C] pl-3">
                {section.category}
              </h2>
  
              {/* Grid Layout */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/30 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* Name + Price */}
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-[#3B1F0E]">
                        {item.name}
                      </h3>
                      <span className="text-[#6F4E37] font-bold">
                        ₹{item.price}
                      </span>
                    </div>
  
                    {/* Description */}
                    <p className="text-sm text-[#5C3D2E] opacity-80 leading-relaxed">
                      {item.description}
                    </p>
  
                    {/* Decorative line */}
                    <div className="mt-4 h-[2px] w-10 bg-[#C8A27C] rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
 