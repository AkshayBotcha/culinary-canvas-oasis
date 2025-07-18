import React from 'react';
import { ShoppingCart, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getTotalItems } = useCart();
  const cartItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Savory Delights
            </h1>
            <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Downtown Location</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>25-35 min</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>4.8 (2.1k reviews)</span>
              </div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onCartClick}
            className="relative group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">View Cart</span>
            <span className="sm:hidden">Cart</span>
            {cartItems > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs animate-bounce-in"
              >
                {cartItems}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};