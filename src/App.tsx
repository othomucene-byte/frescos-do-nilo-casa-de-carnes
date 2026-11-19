import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, ChevronRight, Star, MapPin, Clock } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: '1', name: 'Bife de Vaca Selecionado', category: 'Carne de Vaca', price: 450, image: '🥩' },
  { id: '2', name: 'Costeleta de Cabrito', category: 'Carne de Cabrito', price: 520, image: '🍖' },
  { id: '3', name: 'Frango Inteiro Fresco', category: 'Frango', price: 280, image: '🍗' },
];

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const sendOrderToWhatsApp = () => {
    const message = `Olá, gostaria de encomendar: ${cart.map(i => i.name).join(', ')}. Total: ${total} MT`;
    window.open(`https://wa.me/258840000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <nav className="bg-emerald-950 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-display font-bold">Frescos do Nilo</h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2" onClick={() => setCart([])}>
              <ShoppingBag size={24} />
              {cart.length > 0 && <span className="absolute top-0 right-0 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</span>}
            </button>
          </div>
        </div>
      </nav>

      <header className="relative h-96 bg-stone-900 flex items-center justify-center text-white text-center">
        <div className="z-10 px-4">
          <h2 className="text-5xl font-display mb-4">A melhor qualidade de carne começa aqui.</h2>
          <p className="text-xl mb-8">Qualidade, frescura e sabor à sua mesa.</p>
          <button className="bg-red-700 px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition">Comprar Agora</button>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="grid md:grid-cols-3 gap-8">
          {products.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <div className="text-6xl mb-4">{p.image}</div>
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-emerald-800 font-semibold">{p.price} MT / kg</p>
              <button 
                onClick={() => setCart([...cart, p])}
                className="w-full mt-4 bg-emerald-900 text-white py-2 rounded-lg hover:bg-emerald-800"
              >Adicionar ao Carrinho</button>
            </div>
          ))}
        </section>

        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-white p-6 rounded-2xl shadow-2xl border border-emerald-100 max-w-sm">
            <h4 className="font-bold mb-2">Resumo da Encomenda</h4>
            <p className="text-2xl font-display text-emerald-950">Total: {total} MT</p>
            <button 
              onClick={sendOrderToWhatsApp}
              className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-700"
            >
              Finalizar no WhatsApp
            </button>
          </div>
        )}
      </main>

      <footer className="bg-stone-950 text-stone-300 py-12 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">Frescos do Nilo</h4>
            <p className="flex items-center gap-2"><MapPin size={16}/> Maputo, Moçambique</p>
            <p className="flex items-center gap-2 mt-2"><Clock size={16}/> Seg-Sáb: 08h - 19h</p>
          </div>
        </div>
      </footer>
    </div>
  );
}