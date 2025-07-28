import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link as NextLink,
  Badge,
  Button
} from '@heroui/react';
import { 
  ChevronDown, 
  ShoppingBag, 
  Menu, 
  X,
  Home,
  Store,
  Info,
  Phone
} from 'lucide-react';

import Cart from './Cart';

  const CustomNavbar = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'About', href: '#', icon: Info },
    { name: 'Contact', href: '#', icon: Phone }
  ];

  const shopCategories = [
    { key: 'furniture', label: 'Furniture' },
    { key: 'lighting', label: 'Lighting' },
    { key: 'decor', label: 'Decor' },
    { key: 'accessories', label: 'Accessories' }
  ];

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar
        maxWidth="full"
        className="bg-transparent shadow-none backdrop-blur-sm"
        isBordered={false}
        position="static"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Brand */}
        <NavbarBrand>
          <h1 className="text-white font-bold text-2xl tracking-wide hover:text-blue-200 transition-colors cursor-pointer">
            Furn
          </h1>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <NavbarContent className="hidden md:flex gap-8" justify="center">
          <NavbarItem>
            <NextLink 
              href="#" 
              className="text-white hover:text-blue-200 transition-colors duration-200 flex items-center gap-2 font-medium"
            >
              <Home size={18} />
              Home
            </NextLink>
          </NavbarItem>

          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <button className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                  <Store size={18} />
                  Shop
                  <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="Shop Categories"
                className="w-44"
              >
                {shopCategories.map((category) => (
                  <DropdownItem 
                    key={category.key}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    {category.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          <NavbarItem>
            <NextLink 
              href="#" 
              className="text-white hover:text-blue-200 transition-colors duration-200 flex items-center gap-2 font-medium"
            >
              <Info size={18} />
              About
            </NextLink>
          </NavbarItem>

          <NavbarItem>
            <NextLink 
              href="#" 
              className="text-white hover:text-blue-200 transition-colors duration-200 flex items-center gap-2 font-medium"
            >
              <Phone size={18} />
              Contact
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        {/* Right side content */}
        <NavbarContent justify="end">
          {/* Cart Button */}
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              className="text-white hover:bg-white/10 transition-all duration-200 relative"
              onClick={() => setIsCartOpen(true)}
            >
              <Badge 
                content={cartItemCount} 
                color="danger" 
                className={cartItemCount > 0 ? "block" : "hidden"}
                size="sm"
              >
                <ShoppingBag size={24} className="hover:scale-110 transition-transform" />
              </Badge>
            </Button>
          </NavbarItem>

          {/* Mobile menu toggle */}
          <NavbarItem className="md:hidden">
            <NavbarMenuToggle
              aria-label="Toggle menu"
               className="text-white w-10 h-10 flex items-center justify-center hover:text-blue-200 transition-colors cursor-pointer"
            />
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="bg-white/95 backdrop-blur-md">
          <div className="flex flex-col gap-4 pt-6">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.name}-${index}`}>
                <NextLink
                  href={item.href}
                  className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition-colors duration-200 text-lg font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={20} />
                  {item.name}
                </NextLink>
              </NavbarMenuItem>
            ))}
            
            {/* Mobile Shop Dropdown */}
            <NavbarMenuItem>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 text-gray-800 text-lg font-medium py-2 mb-2">
                  <Store size={20} />
                  Shop Categories
                </div>
                <div className="pl-8 flex flex-col gap-2">
                  {shopCategories.map((category) => (
                    <NextLink
                      key={category.key}
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.label}
                    </NextLink>
                  ))}
                </div>
              </div>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </Navbar>

      {/* Cart Component */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}  
        onUpdateQuantity={onUpdateQuantity}  
        onRemoveItem={onRemoveItem}  
      />


    </>
  );
};

export default CustomNavbar;