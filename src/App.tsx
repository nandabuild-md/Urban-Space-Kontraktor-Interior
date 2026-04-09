import React, { useState } from 'react';

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = (y - rect.height / 2) / 15;
    const ry = -(x - rect.width / 2) / 15;
    setStyle({ transform: `rotateX(${rx}deg) rotateY(${ry}deg)` });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' });
  };

  return (
    <div
      className={`tilt-card ${className || ''}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [sliderValue, setSliderValue] = useState(50);
  const [hintVisible, setHintVisible] = useState(true);

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary selection:text-on-primary">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md flex justify-between items-center px-8 py-6 max-w-full">
        <div className="text-2xl font-serif text-[#e5e2e1] tracking-tight">Urban Space</div>
        <div className="hidden md:flex gap-12 items-center">
          <a className="text-[#e5e2e1] font-medium hover:text-[#e6c364] transition-colors duration-300" href="#">Proyek</a>
          <a className="text-[#e5e2e1] font-medium hover:text-[#e6c364] transition-colors duration-300" href="#">Layanan</a>
          <a className="text-[#e5e2e1] font-medium hover:text-[#e6c364] transition-colors duration-300" href="#">Harga</a>
          <a className="text-[#e5e2e1] font-medium hover:text-[#e6c364] transition-colors duration-300" href="#">Kontak</a>
          <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20membuat%20website%20kontraktor%20interior%20seperti%20Urban%20Space%20di%20demo8.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-6 py-2 text-sm font-semibold rounded-sm hover:bg-primary-container transition-all active:scale-95 duration-200">
            Konsultasi Gratis
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Luxury Living Room" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"/>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl space-y-8">
            <span className="font-label text-primary tracking-[0.2em] text-xs uppercase font-semibold">KONTRAKTOR INTERIOR · SURABAYA</span>
            <h1 className="text-6xl md:text-8xl leading-tight font-headline tracking-tighter">
              Ruang yang <br/><span className="italic text-primary">Berbicara</span> Tentang Kamu.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl font-light leading-relaxed">
              Urban Space mengubah ruang kosong menjadi interior yang fungsional dan berkarakter. Konsultasi pertama gratis.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="bg-primary text-on-primary px-8 py-4 text-sm font-bold rounded-sm flex items-center gap-3 group hover:bg-primary-container transition-all">
                Lihat Proyek Kami <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">south</span>
              </button>
              <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20membuat%20website%20kontraktor%20interior%20seperti%20Urban%20Space%20di%20demo8.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="border border-outline-variant/15 text-primary px-8 py-4 text-sm font-bold rounded-sm hover:bg-surface-container-highest transition-all">
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Room Reveal Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div 
            className="reveal-container relative w-full h-[716px] overflow-hidden group cursor-pointer"
            onMouseEnter={() => setTimeout(() => setHintVisible(false), 500)}
          >
            {/* Background revealed image */}
            <img alt="Revealed Interior" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80"/>
            
            {/* Door Panels */}
            <div className="room-door-left absolute top-0 left-0 w-1/2 h-full bg-surface-container-highest z-20 border-r border-primary/30 flex items-center justify-end">
              <div className="w-1 h-32 bg-primary/50 mr-[-2px] group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
            <div className="room-door-right absolute top-0 right-0 w-1/2 h-full bg-surface-container-highest z-20 border-l border-primary/30 flex items-center justify-start">
              <div className="w-1 h-32 bg-primary/50 ml-[-2px] group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
            
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500 pointer-events-none">
              <div className="bg-surface/60 backdrop-blur-sm px-8 py-6 text-center">
                <p className="font-label text-xs tracking-widest text-primary mb-2">FEATURED SPACE</p>
                <h3 className="text-3xl font-headline">Ruang Tamu Modern · Jakarta Selatan</h3>
              </div>
            </div>
            
            {/* Initial Hint */}
            <div className="absolute inset-0 flex items-center justify-center z-40 group-hover:hidden">
              <span className="text-primary font-label text-sm tracking-[0.5em] animate-pulse">HOVER TO ENTER</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid (3D Tilt) */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 space-y-4">
            <span className="font-label text-primary text-xs tracking-widest uppercase">Portofolio</span>
            <h2 className="text-5xl font-headline">Karya Terbaru Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective-1000">
            {/* Project 1 */}
            <TiltCard className="group relative bg-surface-container-low p-6 rounded-sm border border-outline-variant/5 hover:border-primary/20 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[4/5] mb-8 overflow-hidden">
                <img alt="Apartment Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"/>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-label text-[10px] text-primary tracking-widest mb-1">SURABAYA</p>
                    <h4 className="text-xl font-headline">Unit Apartemen 3BR Modern</h4>
                  </div>
                  <p className="text-sm font-medium text-on-surface-variant italic">Rp 180jt</p>
                </div>
              </div>
            </TiltCard>

            {/* Project 2 */}
            <TiltCard className="group relative bg-surface-container-low p-6 rounded-sm border border-outline-variant/5 hover:border-primary/20 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[4/5] mb-8 overflow-hidden">
                <img alt="Office Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"/>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-label text-[10px] text-primary tracking-widest mb-1">JAKARTA</p>
                    <h4 className="text-xl font-headline">Kantor Startup 200m²</h4>
                  </div>
                  <p className="text-sm font-medium text-on-surface-variant italic">Rp 420jt</p>
                </div>
              </div>
            </TiltCard>

            {/* Project 3 */}
            <TiltCard className="group relative bg-surface-container-low p-6 rounded-sm border border-outline-variant/5 hover:border-primary/20 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-[4/5] mb-8 overflow-hidden">
                <img alt="Residential Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"/>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-label text-[10px] text-primary tracking-widest mb-1">MALANG</p>
                    <h4 className="text-xl font-headline">Rumah Tinggal Minimalis</h4>
                  </div>
                  <p className="text-sm font-medium text-on-surface-variant italic">Rp 135jt</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline">Transformasi Drastis</h2>
            <p className="text-on-surface-variant">Geser untuk melihat hasil renovasi kami.</p>
          </div>
          <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-sm group select-none">
            {/* After (Background) */}
            <img alt="After Kitchen" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80"/>
            
            {/* Before (Clipped) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden border-r-2 border-primary z-10 shadow-2xl" 
              style={{ width: `${sliderValue}%` }}
            >
              <img alt="Before Kitchen" className="absolute inset-0 w-[896px] max-w-none h-full object-cover grayscale brightness-50" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80" />
              <span className="absolute top-8 left-8 bg-surface-container-highest px-4 py-1 text-[10px] font-label tracking-widest uppercase">Sebelum</span>
            </div>
            
            <span className="absolute top-8 right-8 bg-primary text-on-primary px-4 py-1 text-[10px] font-label tracking-widest uppercase z-10">Sesudah</span>
            
            {/* Controller */}
            <input 
              className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize" 
              max="100" 
              min="0" 
              type="range" 
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
            />
            
            {/* Visual Handle */}
            <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `calc(${sliderValue}% - 1px)` }}>
              <div className="h-full w-[2px] bg-primary relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl">
                  <span className="material-symbols-outlined text-on-primary">unfold_more_double</span>
                </div>
              </div>
            </div>
            
            <div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-on-surface/80 font-label text-xs tracking-widest animate-bounce transition-opacity duration-300"
              style={{ opacity: hintVisible ? 1 : 0 }}
            >
              ← GESER UNTUK MEMBANDINGKAN →
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32 space-y-8">
              <span className="font-label text-primary text-xs tracking-widest uppercase">Layanan Kami</span>
              <h2 className="text-6xl font-headline leading-tight">Solusi Interior <br/>Purna Rupa.</h2>
              <p className="text-on-surface-variant max-w-sm leading-relaxed">
                Kami mengintegrasikan visi estetika dengan fungsi teknis untuk menciptakan lingkungan yang mendukung gaya hidup dan performa bisnis Anda.
              </p>
              <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20membuat%20website%20kontraktor%20interior%20seperti%20Urban%20Space%20di%20demo8.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-4 text-sm font-bold rounded-sm inline-flex items-center gap-3">
                Konsultasi Sekarang <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant/10">
              <div className="bg-surface p-10 space-y-4">
                <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-primary">home</span>
                </div>
                <h4 className="text-xl font-headline">Desain Residential</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Personalisasi hunian untuk kenyamanan maksimal keluarga.</p>
              </div>
              <div className="bg-surface p-10 space-y-4">
                <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-primary">business</span>
                </div>
                <h4 className="text-xl font-headline">Komersial</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Optimasi ruang kantor dan retail untuk produktivitas.</p>
              </div>
              <div className="bg-surface p-10 space-y-4">
                <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-primary">chair</span>
                </div>
                <h4 className="text-xl font-headline">Furnitur</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Pembuatan custom furniture dengan material premium.</p>
              </div>
              <div className="bg-surface p-10 space-y-4">
                <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-primary">lightbulb</span>
                </div>
                <h4 className="text-xl font-headline">Tata Cahaya</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Skenario pencahayaan untuk membangun atmosfer ruang.</p>
              </div>
              <div className="bg-surface p-10 space-y-4">
                <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-primary">handyman</span>
                </div>
                <h4 className="text-xl font-headline">Renovasi</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Pembaruan struktur dan estetika ruang lama Anda.</p>
              </div>
              <div className="bg-surface p-10 space-y-4">
                <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-sm">
                  <span className="material-symbols-outlined text-primary">3d_rotation</span>
                </div>
                <h4 className="text-xl font-headline">3D Visualisasi</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Presentasi desain realistis sebelum pengerjaan dimulai.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-headline text-primary mb-2">120+</p>
              <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-headline text-primary mb-2">9</p>
              <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-headline text-primary mb-2">4,2M</p>
              <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Nilai Proyek</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-headline text-primary mb-2">4.9 ★</p>
              <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Rating Klien</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-surface-container-low border border-outline-variant/10 italic text-on-surface-variant leading-relaxed relative">
              <span className="material-symbols-outlined absolute top-4 right-4 text-primary/20 scale-150">format_quote</span>
              "Urban Space sangat memperhatikan detail. Mereka bukan cuma kasih desain cantik, tapi bener-bener mikirin kenyamanan hidup sehari-hari."
              <div className="mt-8 not-italic">
                <p className="font-bold text-on-surface">Aditya Pratama</p>
                <p className="text-xs font-label tracking-widest">RESIDENTIAL CLIENT</p>
              </div>
            </div>
            <div className="p-8 bg-surface-container-low border border-outline-variant/10 italic text-on-surface-variant leading-relaxed relative">
              <span className="material-symbols-outlined absolute top-4 right-4 text-primary/20 scale-150">format_quote</span>
              "Tim yang sangat profesional dalam menangani deadline kantor kami. Hasil akhir melampaui ekspektasi dewan direksi."
              <div className="mt-8 not-italic">
                <p className="font-bold text-on-surface">Siska Wijaya</p>
                <p className="text-xs font-label tracking-widest">COMMERCIAL CLIENT</p>
              </div>
            </div>
            <div className="p-8 bg-surface-container-low border border-outline-variant/10 italic text-on-surface-variant leading-relaxed relative">
              <span className="material-symbols-outlined absolute top-4 right-4 text-primary/20 scale-150">format_quote</span>
              "Harga yang sangat masuk akal dengan kualitas craftmanship yang sangat rapi. Sangat merekomendasikan untuk renovasi rumah."
              <div className="mt-8 not-italic">
                <p className="font-bold text-on-surface">Budi Santoso</p>
                <p className="text-xs font-label tracking-widest">RESIDENTIAL CLIENT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 space-y-4">
            <span className="font-label text-primary text-xs tracking-widest uppercase">Pricing Tiers</span>
            <h2 className="text-5xl font-headline">Investasi Ruang Anda</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Tier 1 */}
            <div className="bg-surface-container-low p-10 border border-outline-variant/10 flex flex-col">
              <h3 className="text-2xl font-headline mb-4">Starter</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-label text-on-surface-variant italic">Rp</span>
                <span className="text-5xl font-headline text-primary">4jt</span>
                <span className="text-sm text-on-surface-variant">/m²</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow text-sm text-on-surface-variant">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check</span> Desain Interior Dasar</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check</span> Material Multiplek High Grade</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check</span> Finishing HPL</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check</span> Garansi 6 Bulan</li>
              </ul>
              <button className="w-full border border-outline-variant text-on-surface py-4 text-sm font-bold rounded-sm hover:bg-surface-container-highest transition-all">Pilih Paket</button>
            </div>
            {/* Tier 2 (Popular) */}
            <div className="bg-surface-container-low p-10 border-2 border-primary relative flex flex-col shadow-[0_20px_50px_rgba(230,195,100,0.1)]">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-on-primary px-4 py-1 text-[10px] font-label tracking-widest uppercase font-bold">Terpopuler</div>
              <h3 className="text-2xl font-headline mb-4">Growth</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-label text-on-surface-variant italic">Rp</span>
                <span className="text-5xl font-headline text-primary">8jt</span>
                <span className="text-sm text-on-surface-variant">/m²</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow text-sm text-on-surface-variant">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Desain &amp; 3D Render HD</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Material Blockboard / Plywood</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Finishing Duco / Veneer</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Smart Home Lighting</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Garansi 12 Bulan</li>
              </ul>
              <button className="w-full bg-primary text-on-primary py-4 text-sm font-bold rounded-sm hover:bg-primary-container transition-all">Pilih Paket</button>
            </div>
            {/* Tier 3 */}
            <div className="bg-surface-container-low p-10 border border-outline-variant/10 flex flex-col">
              <h3 className="text-2xl font-headline mb-4">Ultimate</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-label text-on-surface-variant italic">Rp</span>
                <span className="text-5xl font-headline text-primary">16jt</span>
                <span className="text-sm text-on-surface-variant">/m²</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow text-sm text-on-surface-variant">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">verified</span> Full Custom Luxury Design</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">verified</span> Material Kayu Solid / Marble</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">verified</span> Luxury Hardware (Blum/Hafele)</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">verified</span> Full Automation Integration</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">verified</span> Garansi Seumur Hidup</li>
              </ul>
              <button className="w-full border border-outline-variant text-on-surface py-4 text-sm font-bold rounded-sm hover:bg-surface-container-highest transition-all">Pilih Paket</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-headline mb-4">Sering Ditanyakan</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          <div className="space-y-2">
            {/* FAQ 1 */}
            <details className="group bg-surface-container-low">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="text-lg font-medium">Berapa lama rata-rata durasi pengerjaan?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/10 leading-relaxed">
                Untuk renovasi standar apartemen 2BR, memakan waktu sekitar 4-8 minggu. Sedangkan untuk rumah tinggal full renovasi bisa memakan waktu 3-6 bulan tergantung kompleksitas.
              </div>
            </details>
            {/* FAQ 2 */}
            <details className="group bg-surface-container-low">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="text-lg font-medium">Bagaimana sistem pembayarannya?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/10">
                Kami menggunakan sistem termin: DP 30% untuk mulai desain, 40% setelah approval desain (mulai fabrikasi), dan pelunasan 30% setelah instalasi selesai dan serah terima.
              </div>
            </details>
            {/* FAQ 3 */}
            <details className="group bg-surface-container-low">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="text-lg font-medium">Apakah ada biaya untuk konsultasi awal?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/10">
                Konsultasi awal via telepon atau di kantor kami sepenuhnya GRATIS. Untuk kunjungan survey lokasi dikenakan biaya komitmen yang akan dipotong dari nilai kontrak jika proyek berlanjut.
              </div>
            </details>
            {/* FAQ 4 */}
            <details className="group bg-surface-container-low">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="text-lg font-medium">Apakah tim tukang adalah tim internal?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/10">
                Ya, kami memiliki tim fabrikasi workshop dan tukang bangunan internal yang sudah bekerja bersama kami selama lebih dari 5 tahun untuk menjamin kualitas pengerjaan.
              </div>
            </details>
            {/* FAQ Astmay */}
            <details className="group bg-surface-container-low">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="text-lg font-medium">Siapa desainer / web developer komersial ini?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/10">
                Situs ini adalah demo portofolio yang dirancang oleh Astrina Maysaroh (Astmay), seorang freelance web developer. Beliau melayani pembuatan website untuk jasa kontraktor dan interior design kustom, menawarkan kolaborasi personal via astmay.space untuk mendapatkan hasil premium tanpa overhead dari agensi IT.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-headline mb-12 leading-tight">Wujudkan Ruang <br/>Impianmu.</h2>
          <a href="https://wa.me/6283167987800?text=Halo%20astrina%20saya%20tertarik%20membuat%20website%20kontraktor%20interior%20seperti%20Urban%20Space%20di%20demo8.astmay.space%20bisakah%20saya%20dapat%20free%20konsultasi%20%3F" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-12 py-6 text-lg font-bold rounded-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(230,195,100,0.3)] inline-flex items-center gap-4">
            Jadwalkan Konsultasi Gratis <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-serif text-[#e5e2e1] mb-4">Urban Space</div>
            <p className="text-[#e5e2e1]/60 max-w-sm mb-8 leading-relaxed">
              Kami menciptakan ruang yang tidak hanya estetis, tetapi juga berfungsi sebagai perpanjangan dari identitas penghuninya. Architects of Atmosphere.
            </p>
            <div className="flex gap-6">
              <a className="text-[#e5e2e1]/60 hover:text-[#e6c364] transition-opacity font-label text-xs tracking-widest uppercase" href="#">Instagram</a>
              <a className="text-[#e5e2e1]/60 hover:text-[#e6c364] transition-opacity font-label text-xs tracking-widest uppercase" href="#">LinkedIn</a>
              <a className="text-[#e5e2e1]/60 hover:text-[#e6c364] transition-opacity font-label text-xs tracking-widest uppercase" href="#">Pinterest</a>
              <a className="text-[#e5e2e1]/60 hover:text-[#e6c364] transition-opacity font-label text-xs tracking-widest uppercase" href="#">Facebook</a>
            </div>
          </div>
          <div>
            <h5 className="text-[#e6c364] font-label text-xs tracking-widest uppercase mb-6">Menu</h5>
            <ul className="space-y-4">
              <li><a className="text-[#e5e2e1]/60 hover:text-[#e6c364] transition-all" href="#">Layanan Kami</a></li>
              <li><a className="text-[#e5e2e1]/60 hover:text-[#e6c364] transition-all" href="#">Portofolio</a></li>
              <li><a className="text-[#e5e2e1]/60 hover:text-[#e6c364] transition-all" href="#">Daftar Harga</a></li>
              <li><a className="text-[#e5e2e1]/60 hover:text-[#e6c364] transition-all" href="#">Tentang Kami</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#e6c364] font-label text-xs tracking-widest uppercase mb-6">Kontak</h5>
            <ul className="space-y-4 text-[#e5e2e1]/60">
              <li>Jl. Raya Darmo Permai No. 88, Surabaya</li>
              <li>+62 812-3456-7890</li>
              <li>hello@urbanspace.id</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-12 mt-20 pt-8 border-t border-outline-variant/5 text-center space-y-2">
          <p className="text-[#e5e2e1]/40 text-xs font-label tracking-widest uppercase">© 2024 Urban Space. Architects of Atmosphere.</p>
          <p className="text-[#e5e2e1]/30 text-xs">Website oleh <a href="https://astmay.space" target="_blank" rel="noopener" className="text-[#e6c364]/50 hover:text-[#e6c364] transition-colors underline">Astrina Maysaroh — Jasa Pembuatan Website Profesional</a></p>
        </div>
      </footer>
    </div>
  );
}
