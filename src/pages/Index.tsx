import React, { useState } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import { Header } from '@/components/restaurant/Header';
import { Hero } from '@/components/restaurant/Hero';
import { Menu } from '@/components/restaurant/Menu';
import { CartSidebar } from '@/components/restaurant/CartSidebar';
import { Footer } from '@/components/restaurant/Footer';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <Menu />
        <Footer />
        
        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50">
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsCartOpen(false)}
            />
            <div className="relative">
              <CartSidebar />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(false)}
                className="absolute top-4 right-4 z-10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Floating Cart Button */}
        <Button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary-glow text-primary-foreground shadow-food z-40 rounded-full w-14 h-14 animate-bounce-in"
        >
          <span className="sr-only">Open Cart</span>
          🛒
        </Button>
      </div>
    </CartProvider>
  );
};

export default Index;
