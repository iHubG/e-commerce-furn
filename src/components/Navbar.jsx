import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link as NextLink,
} from '@heroui/react';
import { ChevronDown } from 'lucide-react'; // 👈 Import icon
import Bag from '../assets/images/bag.png';
import Zero from '../assets/images/zero.png';

const CustomNavbar = () => {
  return (
    <Navbar
      maxWidth="full"
      className="bg-transparent shadow-none"
      isBordered={false}
      position="static"
    >
      <NavbarBrand>
        <h1 className="text-white font-bold text-xl">Furn</h1>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <NextLink href="#" className="text-white hover:underline">
            Home
          </NextLink>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <button className="flex items-center gap-1 text-white hover:underline">
                Shop
                <ChevronDown size={16} className="mt-[1px]" />
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Shop Categories">
              <DropdownItem key="furniture">Furniture</DropdownItem>
              <DropdownItem key="lighting">Lighting</DropdownItem>
              <DropdownItem key="decor">Decor</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <NextLink href="#" className="text-white hover:underline">
            About
          </NextLink>
        </NavbarItem>

        <NavbarItem>
          <NextLink href="#" className="text-white hover:underline">
            Contact
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="relative hidden lg:flex">
          <img src={Bag} alt="Cart" className="w-[34px] h-[34px]" />
          <img
            src={Zero}
            alt="Cart count"
            className="absolute -top-1 -right-1 w-4 h-4"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
