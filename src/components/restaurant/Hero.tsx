import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Truck, Star } from 'lucide-react';
import heroBurger from '@/assets/hero-burger.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <div className="flex items-center gap-2">
              <Badge className="bg-secondary text-secondary-foreground">
                <Star className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
              <Badge variant="outline" className="text-white border-white/50">
                <Truck className="h-3 w-3 mr-1" />
                Free Delivery
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Flavor
              <br />
              <span className="text-primary-glow">Perfection</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-lg">
              Experience culinary excellence with our signature dishes, crafted from the finest ingredients
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => {
                  document.getElementById('menu')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="bg-primary hover:bg-primary-glow text-primary-foreground transition-all duration-300 transform hover:scale-105"
              >
                Order Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-foreground transition-all duration-300"
              >
                <Clock className="h-4 w-4 mr-2" />
                Schedule Order
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-6 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8</div>
                <div className="text-sm">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2.1k+</div>
                <div className="text-sm">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25-35</div>
                <div className="text-sm">Minutes</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative">
              <img 
                src={heroBurger} 
                alt="Signature Burger" 
                className="w-full h-auto rounded-2xl shadow-food transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-food rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Signature Deluxe Burger</h3>
                <p className="text-sm text-white/80">Premium beef, aged cheese, crispy bacon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};