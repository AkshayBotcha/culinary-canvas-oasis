import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MenuCard } from './MenuCard';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Import all images
import margheritaPizza from '@/assets/margherita-pizza.jpg';
import caesarSalad from '@/assets/caesar-salad.jpg';
import grilledSalmon from '@/assets/grilled-salmon.jpg';
import chocolateLavaCake from '@/assets/chocolate-lava-cake.jpg';
import icedLemonade from '@/assets/iced-lemonade.jpg';
import heroBurger from '@/assets/hero-burger.jpg';

const categories = [
  { id: 'all', name: 'All Items', count: 12 },
  { id: 'popular', name: 'Popular', count: 6 },
  { id: 'appetizers', name: 'Appetizers', count: 3 },
  { id: 'mains', name: 'Main Courses', count: 5 },
  { id: 'desserts', name: 'Desserts', count: 2 },
  { id: 'beverages', name: 'Beverages', count: 2 },
];

const menuItems = [
  {
    id: '1',
    name: 'Signature Deluxe Burger',
    description: 'Premium beef patty with aged cheddar, crispy bacon, fresh lettuce, tomato, and our secret sauce on a brioche bun',
    price: 18.99,
    image: heroBurger,
    rating: 4.9,
    prepTime: '15-20 min',
    category: 'mains',
    isPopular: true,
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Wood-fired pizza with fresh mozzarella, San Marzano tomatoes, fresh basil, and extra virgin olive oil',
    price: 22.99,
    image: margheritaPizza,
    rating: 4.8,
    prepTime: '12-18 min',
    category: 'mains',
    isPopular: true,
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce, parmesan cheese, croutons, and our house-made Caesar dressing',
    price: 14.99,
    image: caesarSalad,
    rating: 4.7,
    prepTime: '5-10 min',
    category: 'appetizers',
  },
  {
    id: '4',
    name: 'Grilled Atlantic Salmon',
    description: 'Fresh salmon fillet with lemon herb butter, served with roasted vegetables and quinoa',
    price: 28.99,
    image: grilledSalmon,
    rating: 4.9,
    prepTime: '20-25 min',
    category: 'mains',
    isPopular: true,
  },
  {
    id: '5',
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate cake with a molten center, served with vanilla ice cream and fresh berries',
    price: 12.99,
    image: chocolateLavaCake,
    rating: 4.8,
    prepTime: '10-15 min',
    category: 'desserts',
    isPopular: true,
  },
  {
    id: '6',
    name: 'Fresh Iced Lemonade',
    description: 'Refreshing house-made lemonade with fresh mint and real lemon juice, served over ice',
    price: 5.99,
    image: icedLemonade,
    rating: 4.6,
    prepTime: '2-5 min',
    category: 'beverages',
  },
];

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || 
      item.category === activeCategory || 
      (activeCategory === 'popular' && item.isPopular);
    
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with passion and the finest ingredients
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-300 hover:scale-105"
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <MenuCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              rating={item.rating}
              prepTime={item.prepTime}
              isPopular={item.isPopular}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No dishes found matching your search criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};