 "use client";

import { useState } from "react";

const menuCategories = [
  { id: "drinks", name: "Drinks" },
  { id: "tea", name: "Tea & Coffee" },
  { id: "pasta", name: "Pasta" },
  { id: "pizza", name: "Pizza" },
  { id: "quickbites", name: "Quick Bites" },
  { id: "combo", name: "Combos" },
] as const;

const menuItems = {
  drinks: [
    { name: "Lassi", price: "₹40 / ₹60", desc: "Traditional refreshing yogurt drink." },
    { name: "Mango Lassi", price: "₹50 / ₹65", desc: "Sweet mango blended with rich yogurt." },
    { name: "Chaas", price: "₹35", desc: "Spiced traditional buttermilk." },
    { name: "Brownie Shake", price: "₹70 / ₹90", desc: "Thick shake blended with rich chocolate brownie." },
    { name: "Mango Shake", price: "₹60 / ₹80", desc: "Creamy fresh mango milkshake." },
    { name: "Banana Shake", price: "₹50 / ₹70", desc: "Smooth and energy-boosting banana shake." },
    { name: "Kit Kat Shake", price: "₹70 / ₹90", desc: "Crushed Kit Kat chocolate blended into milk." },
    { name: "Oreo Shake", price: "₹70 / ₹90", desc: "Loaded with crunchy Oreo cookies." },
    { name: "Pineapple Shake", price: "₹50 / ₹80", desc: "Sweet and tangy pineapple milkshake." },
    { name: "Strawberry Shake", price: "₹50 / ₹80", desc: "Classic strawberry flavored thick shake." },
    { name: "Blue Lagoon", price: "₹50 / ₹80", desc: "Refreshing citrus blue mocktail." },
    { name: "Fresh Lime Soda", price: "₹50 / ₹70", desc: "Classic fizzy lime refreshment." },
    { name: "Cold Coffee", price: "₹60 / ₹80", desc: "Chilled blended coffee over ice." },
    { name: "Virgin Mojito", price: "₹50 / ₹80", desc: "Minty lime refreshing cooler." },
  ],
  tea: [
    { name: "Milk Tea", price: "₹10 / ₹10", desc: "Hot comforting traditional Indian milk tea." },
    { name: "Black Tea", price: "₹10", desc: "Strong plain brewed tea." },
    { name: "Green Tea", price: "₹20", desc: "Healthy antioxidant-rich green tea." },
    { name: "Chocolate Tea", price: "₹20", desc: "Unique twist of chocolate infused hot tea." },
    { name: "Coffee", price: "₹20 / ₹40", desc: "Hot frothy regular coffee." },
    { name: "Black Coffee", price: "₹20", desc: "Rich and strong black coffee." },
    { name: "Chocolate Coffee", price: "₹30", desc: "Coffee blended with rich chocolate notes." },
    { name: "Hot Chocolate", price: "₹70", desc: "Warm, thick, and creamy dark hot chocolate." },
  ],
  pasta: [
    { name: "Veg White Sauce Pasta", price: "₹80", desc: "Creamy cheese white sauce with fresh vegetables." },
    { name: "Chicken White Sauce Pasta", price: "₹100", desc: "Tender chicken chunks in rich creamy white sauce." },
    { name: "Veg Mix Sauce Pasta", price: "₹90", desc: "Fusion of creamy white and tangy red sauce with veggies." },
    { name: "Chicken Mix Sauce Pasta", price: "₹110", desc: "Chicken pieces tossed in a flavorful mix sauce blend." },
    { name: "Veg Masala Pasta", price: "₹80", desc: "Desi-style spicy masala pasta with vegetables." },
    { name: "Chicken Masala Pasta", price: "₹100", desc: "Spicy and savory chicken masala pasta." },
  ],
  pizza: [
    { name: "Margherita", price: "₹100", desc: "Classic cheese pizza with rich tomato base." },
    { name: "Veg Pizza", price: "₹120", desc: "Loaded with fresh assorted vegetables and mozzarella." },
    { name: "Chicken Pizza", price: "₹150", desc: "Juicy chicken toppings with extra melted cheese." },
    { name: "Extra Cheese", price: "₹30", desc: "Add-on extra mozzarella cheese layer." },
  ],
  quickbites: [
    { name: "Chicken Nuggets", price: "₹60", desc: "Crispy golden chicken bites." },
    { name: "Veg Nuggets", price: "₹60", desc: "Crispy vegetable snack bites." },
    { name: "Maggi Veg", price: "₹50", desc: "Classic hot masala maggi with vegetables." },
    { name: "Maggi Egg", price: "₹60", desc: "Maggi noodles tossed with egg." },
    { name: "Maggi Chicken", price: "₹70", desc: "Savory chicken maggi noodles." },
    { name: "Maggi Mix", price: "₹80", desc: "Special mixed variant maggi." },
    { name: "Veg Sandwich", price: "₹60", desc: "Fresh vegetable grilled sandwich." },
    { name: "Chicken Sandwich", price: "₹80", desc: "Savory chicken filling toasted sandwich." },
    { name: "Veg Burger", price: "₹80", desc: "Crunchy veg patty burger with mayo." },
    { name: "Chicken Burger", price: "₹100", desc: "Juicy chicken patty burger." },
    { name: "French Fries", price: "₹60", desc: "Crispy salted potato fries." },
    { name: "Veg Spring Roll", price: "₹40", desc: "Crispy fried rolls packed with seasoned veggies." },
    { name: "Chicken Spring Roll", price: "₹48", desc: "Crispy rolls stuffed with spiced chicken." },
    { name: "Bread Omlet", price: "₹50", desc: "Classic egg omelet served with toasted bread." },
    { name: "Bread Butter", price: "₹70", desc: "Simple buttered toast slices." },
  ],
  combo: [
    { name: "Veg Fried Rice + Chilli Chicken", price: "₹100", desc: "Classic combo of aromatic fried rice and spicy chilli chicken." },
    { name: "Veg Fried Rice + Chilli Paneer", price: "₹120", desc: "Fried rice served with savory chilli paneer gravy." },
    { name: "Chilli Chicken / Chilli Paneer", price: "₹80", desc: "Standalone serving of spicy Chinese-style starter." },
  ],
};

const customGalleryImages = [
  { url: "/im2.png", title: "Cozy Café Seating & Vibe" },
  { url: "/im3.png", title: "Signature Wood-Fired Pizza" },
  { url: "/image.png", title: "Crispy Bites & Snacks" },
  { url: "/img6.png", title: "Refreshing Cold Beverages" },
  { url: "/img4.png", title: "Polaroids & Hangout Corner" },
];

export default function AboutMenuGallery() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuItems>("drinks");
  const [viewMode, setViewMode] = useState<"home" | "gallery" | "paper-menu">("home");

  const handleReturnToMenu = () => {
    setViewMode("home");
    setTimeout(() => {
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  if (viewMode === "gallery") {
    return (
      <div className="min-h-screen bg-[#090706] text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-6">
            <div>
              <p className="text-orange-400 text-xs uppercase tracking-[0.3em] font-semibold mb-2">✦ Exclusive Showcase</p>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Café Too Full Gallery</h1>
            </div>
            <button
              onClick={() => setViewMode("home")}
              className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg border border-orange-400/30"
            >
              ← Back to Home
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {customGalleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 bg-[#120e0c] shadow-2xl transition-transform duration-500 hover:-translate-y-2"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-orange-400 font-bold block mb-1">Café Too Moment</span>
                    <h3 className="text-sm md:text-base uppercase tracking-wider font-bold text-white">{img.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-8 border-t border-white/10 text-center text-xs text-white/50 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Café Too, Kolkata • Sip. Chill. Repeat.</p>
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === "paper-menu") {
    return (
      <div className="min-h-screen bg-[#331c13] text-[#f4d0a4] py-20 px-4 md:px-12 selection:bg-amber-600 selection:text-white">
        <div className="max-w-4xl mx-auto bg-[#26130b] border-2 border-[#d49454]/40 rounded-2xl p-6 md:p-12 shadow-2xl relative">
          
          {/* Top Bar inside Paper Menu */}
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-[#d49454]/20">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d49454] font-semibold">✦ Authentic Physical Menu Card</span>
            <button
              onClick={handleReturnToMenu}
              className="bg-[#d49454] hover:bg-[#b87d40] text-[#26130b] px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-black transition-all shadow-md cursor-pointer"
            >
              ← Back to Interactive Menu
            </button>
          </div>

          {/* Paper Menu Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black italic tracking-wider text-[#ffb074] drop-shadow-md mb-2" style={{ fontFamily: 'serif' }}>
              Café <span className="text-white not-italic">Too</span>
            </h1>
            <div className="inline-block border-b-2 border-t-2 border-[#d49454]/40 py-1 px-8">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] text-[#f4d0a4]">Menu</h2>
            </div>
          </div>

          {/* Two-Column Grid matching paper menu reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            
            {/* Column 1: Drinks & Pasta & Pizza */}
            <div className="space-y-8">
              {/* Drinks */}
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#ff9f59] mb-4 border-b border-[#d49454]/20 pb-1">Drinks</h3>
                <div className="space-y-2 text-xs md:text-sm">
                  {menuItems.drinks.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline gap-2">
                      <span className="font-medium text-[#f4d0a4]">{item.name}</span>
                      <div className="flex-1 border-b border-dotted border-[#d49454]/30 mx-2"></div>
                      <span className="font-mono font-bold text-[#ffb074]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pasta */}
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#ff9f59] mb-4 border-b border-[#d49454]/20 pb-1">Pasta</h3>
                <div className="space-y-2 text-xs md:text-sm">
                  {menuItems.pasta.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline gap-2">
                      <span className="font-medium text-[#f4d0a4]">{item.name}</span>
                      <div className="flex-1 border-b border-dotted border-[#d49454]/30 mx-2"></div>
                      <span className="font-mono font-bold text-[#ffb074]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pizza */}
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#ff9f59] mb-4 border-b border-[#d49454]/20 pb-1">Pizza</h3>
                <div className="space-y-2 text-xs md:text-sm">
                  {menuItems.pizza.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline gap-2">
                      <span className="font-medium text-[#f4d0a4]">{item.name}</span>
                      <div className="flex-1 border-b border-dotted border-[#d49454]/30 mx-2"></div>
                      <span className="font-mono font-bold text-[#ffb074]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Tea & Quick bites & Combo */}
            <div className="space-y-8">
              {/* Tea & Coffee */}
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#ff9f59] mb-4 border-b border-[#d49454]/20 pb-1">Tea</h3>
                <div className="space-y-2 text-xs md:text-sm">
                  {menuItems.tea.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline gap-2">
                      <span className="font-medium text-[#f4d0a4]">{item.name}</span>
                      <div className="flex-1 border-b border-dotted border-[#d49454]/30 mx-2"></div>
                      <span className="font-mono font-bold text-[#ffb074]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick bites */}
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#ff9f59] mb-4 border-b border-[#d49454]/20 pb-1">Quick bites</h3>
                <div className="space-y-2 text-xs md:text-sm">
                  {menuItems.quickbites.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline gap-2">
                      <span className="font-medium text-[#f4d0a4]">{item.name}</span>
                      <div className="flex-1 border-b border-dotted border-[#d49454]/30 mx-2"></div>
                      <span className="font-mono font-bold text-[#ffb074]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Combo */}
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#ff9f59] mb-4 border-b border-[#d49454]/20 pb-1">Combo</h3>
                <div className="space-y-2 text-xs md:text-sm">
                  {menuItems.combo.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline gap-2">
                      <span className="font-medium text-[#f4d0a4]">{item.name}</span>
                      <div className="flex-1 border-b border-dotted border-[#d49454]/30 mx-2"></div>
                      <span className="font-mono font-bold text-[#ffb074]">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 pt-6 border-t border-[#d49454]/20 text-center text-xs text-[#d49454]/70 uppercase tracking-widest">
            <p>Café Too • Jay Ambey Apartment, Dhalua Main Road, Kolkata</p>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#090706] text-white relative z-20 overflow-x-hidden">
      
      {/* ABOUT SECTION */}
      <section 
        id="about" 
        className="relative pt-24 pb-32 px-6 md:px-16 overflow-hidden border-t border-white/10 bg-[#090706]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(9,7,6,0.92) 20%, rgba(9,7,6,0.6) 50%, rgba(9,7,6,0.92) 80%), 
            url('/ss.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-400 text-xs uppercase tracking-[0.3em] font-semibold mb-4 drop-shadow-md">
              ✦ About Café Too
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6 drop-shadow-lg">
              Your Everyday Chill Spot in Kolkata.
            </h2>
            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6 font-light drop-shadow">
              Welcome to <strong className="text-white font-medium">Café Too</strong>, located at Jay Ambey Apartment, 146 Dhalua Main Road, Kolkata - 700152. We built this space for good conversations, unforgettable hangouts, and soul-satisfying food. Whether you are catching up after classes or chilling late into the evening, our cozy vibe, polaroids, and warm lighting make you feel right at home.
            </p>
            <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-orange-300 font-medium">
              <div className="bg-[#14100d]/90 border border-white/15 px-4 py-3 rounded-lg backdrop-blur-md shadow-2xl">
                ✨ Fresh Ingredients
              </div>
              <div className="bg-[#14100d]/90 border border-white/15 px-4 py-3 rounded-lg backdrop-blur-md shadow-2xl">
                ❤️ Cozy Ambience
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-700 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#120e0c] aspect-[4/3] shadow-2xl">
              <img
                src={customGalleryImages[0].url}
                alt="Cafe Too interior"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter brightness-90 contrast-110 transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/10 bg-[#090706]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-orange-400 text-xs uppercase tracking-[0.3em] font-semibold mb-3">Delicious Offerings</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Explore Our Menu</h2>
          <p className="text-white/60 text-sm mb-6">Handcrafted beverages, pastas, pizzas, and quick bites made fresh to order.</p>
          
          {/* View Paper Menu Button */}
          <button
            onClick={() => setViewMode("paper-menu")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-black transition-all shadow-lg border border-orange-400/30 transform hover:scale-105 cursor-pointer"
          >
            📄 View Paper Menu
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-900/40 border border-orange-500"
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#120e0c] border border-white/10 p-6 rounded-xl hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-lg font-bold group-hover:text-orange-400 transition-colors">{item.name}</h3>
                  <span className="text-orange-400 font-mono font-bold text-base whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed mb-6">{item.desc}</p>
              </div>
              <button className="w-full bg-white/5 border border-white/10 py-2.5 text-[10px] uppercase tracking-[0.2em] font-medium rounded hover:bg-orange-600 hover:text-white transition-colors cursor-pointer">
                Order Item
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW SECTION */}
      <section id="gallery" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/10 bg-[#090706]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-orange-400 text-xs uppercase tracking-[0.3em] font-semibold mb-3">Visual Vibe</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">The Café Too Gallery</h2>
            <p className="text-white/60 text-sm mt-3">A sneak peek into our food, ambiance, and happy moments.</p>
          </div>
          <button
            onClick={() => setViewMode("gallery")}
            className="bg-white/10 hover:bg-orange-600 text-white border border-white/20 px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all cursor-pointer"
          >
            Open Full Gallery Page →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customGalleryImages.slice(0, 3).map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setViewMode("gallery")}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] border border-white/10 bg-[#120e0c] shadow-xl cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-xs uppercase tracking-widest font-semibold text-orange-300">{img.title} (Click to View All)</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT & MAP SECTION */}
      <section id="contact" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/10 bg-[#090706]">
        <div className="bg-[#120e0c] border border-white/10 rounded-2xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 shadow-2xl mb-12">
          <div>
            <p className="text-orange-400 text-xs uppercase tracking-[0.3em] font-semibold mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">Visit Café Too Today</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Drop by with your friends or order online. We are always ready to serve you hot food and cold beverages!
            </p>

            <div className="space-y-4 text-xs tracking-wide text-white/80">
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-0.5">📍</span>
                <span>Jay Ambey Apartment, 146 Dhalua Main Road, Kolkata - 700152</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">📞</span>
                <span>+91 91430 03365</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">📸</span>
                <a href="https://www.instagram.com/cafetoo_15.04" target="_blank" rel="noreferrer" className="hover:text-orange-400 underline">
                  @cafetoo_15.04
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">🕒</span>
                <span>Open Daily: 10:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#090706] p-8 rounded-xl border border-white/5">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Send a Quick Note</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out to Café Too!"); }} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-[#14100d] border border-white/10 px-4 py-3 rounded text-xs focus:outline-none focus:border-orange-500 text-white"
              />
              <input
                type="text"
                placeholder="Phone / Email"
                required
                className="w-full bg-[#14100d] border border-white/10 px-4 py-3 rounded text-xs focus:outline-none focus:border-orange-500 text-white"
              />
              <textarea
                placeholder="Your Message or Table Reservation Inquiry"
                rows={3}
                required
                className="w-full bg-[#14100d] border border-white/10 px-4 py-3 rounded text-xs focus:outline-none focus:border-orange-500 text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 transition-colors py-3 rounded text-xs uppercase tracking-[0.2em] font-bold text-white shadow-lg cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* GOOGLE MAP EMBED CONTAINER */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-80 w-full relative">
          <div className="absolute top-4 left-4 z-10 bg-[#090706]/90 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs font-bold uppercase tracking-wider text-orange-400">
            Find Us on Google Maps 🗺️
          </div>
          <iframe 
            title="Cafe Too Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5367622998394!2d88.3970860762955!3d22.48197753634045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027157a9e334d5%3A0xc391b1a774cbfcd5!2sJay%20Ambey%20Apartments!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Café Too, Kolkata. All rights reserved.</p>
          <p className="mt-4 sm:mt-0 font-medium tracking-widest uppercase">Sip. Chill. Repeat. @Cafe 2</p>
        </div>
      </section>

    </div>
  );
}