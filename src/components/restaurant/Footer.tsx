import React from 'react';
import { MapPin, Phone, Mail, Clock, Star, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Savory Delights
            </h3>
            <p className="text-background/80">
              Experience culinary excellence with our signature dishes, crafted from the finest ingredients with passion and creativity.
            </p>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <Star className="h-4 w-4 fill-primary text-primary" />
              <Star className="h-4 w-4 fill-primary text-primary" />
              <Star className="h-4 w-4 fill-primary text-primary" />
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="ml-2 text-sm">4.8 (2.1k+ reviews)</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">123 Culinary Street, Food District, City 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">hello@savorydelights.com</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              <Clock className="inline h-4 w-4 mr-2" />
              Hours
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-background/20 text-background hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-background/20 text-background hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-background/20 text-background hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></div>
              <div><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></div>
              <div><a href="#" className="hover:text-primary transition-colors">Careers</a></div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-background/80">
          <p>© 2024 Savory Delights. All rights reserved.</p>
          <p>Made with ❤️ for food lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
};