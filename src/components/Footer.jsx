import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Furn</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
            </p>
          </div>

          <div>
            <h3 className="text-orange-400 font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Email Marketing</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Campaigns</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Branding</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-orange-400 font-medium mb-4">Furniture</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Beds</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Chair</a></li>
              <li><a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">All</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-orange-400 font-medium mb-4">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors flex items-center"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors flex items-center"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-gray-900 transition-colors flex items-center"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center">
              Copyright © 2021 · Design by Kretya Studio · Coded by Ian
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer