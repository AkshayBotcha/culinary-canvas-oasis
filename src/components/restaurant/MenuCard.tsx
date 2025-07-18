import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Star, Clock } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  prepTime: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  rating,
  prepTime,
  isPopular = false,
  isNew = false,
}) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
    });
    toast({
      title: "Added to cart!",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden hover:shadow-food transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-food opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {(isPopular || isNew) && (
          <div className="absolute top-3 left-3 flex gap-2">
            {isPopular && (
              <Badge className="bg-accent text-accent-foreground">
                <Star className="h-3 w-3 mr-1" />
                Popular
              </Badge>
            )}
            {isNew && (
              <Badge className="bg-secondary text-secondary-foreground">
                New
              </Badge>
            )}
          </div>
        )}
        
        <Button 
          onClick={handleAddToCart}
          size="sm"
          className="absolute bottom-3 right-3 bg-primary hover:bg-primary-glow text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="text-primary font-bold text-lg">
            ${price.toFixed(2)}
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{prepTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};