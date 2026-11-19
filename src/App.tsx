import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, MapPin, Search, ChevronRight, CheckCircle2 } from 'lucide-react';

const products = [
  { id: 1, name: 'Bife de Vaca Escolha', category: 'Carne de vaca', price: 450, unit: 'kg' },
  { id: 2, name: 'Costeleta de Cabrito', category: 'Carne de cabrito', price: 650, unit: 'kg' },
  { id: 3, name: 'Frango Inteiro Fresco', category: 'Frango', price: 250, unit: 'un' }
];

export default function App() {
  const [cart, setCart] = useState<{id: number, qty: number}[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (id: number) => setCart([...cart, { id, qty: 1 }]);

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <header className="bg-emerald-900 text-white p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold italic tracking-wider">Frescos do Nilo</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#catalogo">Catálogo</a>
            <a href="#contacto">Contactos</a>
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu /></button>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto p-4">
        <section className="py-12 bg-white rounded-2xl border border-stone-200 mb-8">
          <h2 className="text-4xl text-center text-emerald-900 font-bold mb-4">A melhor qualidade de carne começa aqui.</h2>
          <p className="text-center text-stone-600">Qualidade, frescura e sabor à sua mesa.</p>
        </section>

        <section id="catalogo" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
              <div className="h-40 bg-stone-200 rounded-lg mb-4"></div>
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-accent font-semibold">{p.price} MT / {p.unit}</p>
              <button 
                onClick={() => addToCart(p.id)}
                className="mt-4 w-full bg-emerald-700 text-white py-2 rounded-lg flex items-center justify-center gap-2">
                <ShoppingBag size={18} /> Adicionar
              </button>
            </div>
          ))}
        </section>
      </main>
      
      <footer className="bg-stone-900 text-stone-300 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div><h4 className="text-gold font-bold mb-4">Frescos do Nilo</h4><p>Maputo, Moçambique</p></div>
          <div><h4 className="text-white font-bold mb-4">Contactos</h4><div className="flex items-center gap-2"><Phone size={16}/> +258 84 000 0000</div></div>
          <div><h4 className="text-white font-bold mb-4">Localização</h4><div className="flex items-center gap-2"><MapPin size={16}/> Bairro Polana, Maputo</div></div>
        </div>
      </footer>
    </div>
  );
}