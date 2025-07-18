import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export const CartSidebar: React.FC = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart();
  const { toast } = useToast();
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast({
      title: "Removed from cart",
      description: `${name} has been removed from your cart.`,
    });
  };

  if (totalItems === 0) {
    return (
      <div className="fixed right-0 top-0 h-full w-80 bg-background border-l shadow-lg z-50 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <Badge variant="secondary">0 items</Badge>
        </div>
        
        <div className="flex flex-col items-center justify-center h-60 text-center">
          <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-2">Your cart is empty</p>
          <p className="text-sm text-muted-foreground">Add some delicious items to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-background border-l shadow-lg z-50 flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <Badge variant="secondary">{totalItems} items</Badge>
        </div>
        <p className="text-sm text-muted-foreground">Ready to place your order?</p>
      </div>

      <ScrollArea className="flex-1 p-6">
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate">{item.name}</h4>
                <p className="text-primary font-semibold text-sm">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                
                <span className="w-8 text-center text-sm font-medium">
                  {item.quantity}
                </span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-3 w-3" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveItem(item.id, item.name)}
                  className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-6 border-t space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Delivery Fee</span>
            <span className="text-secondary">Free</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>${(totalPrice * 0.08).toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${(totalPrice * 1.08).toFixed(2)}</span>
          </div>
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary-glow text-primary-foreground transition-all duration-300"
          size="lg"
        >
          <CreditCard className="h-4 w-4 mr-2" />
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};