import React, { useState } from 'react';
import AppNavbar from '../components/Navbar';
import LandingBg from '../assets/images/landing-bg.png';
import SearchBar from '../components/SearchBar';
import WhyChoosingUs from './WhyChoosingUs';
import BestSelling from './BestSelling';
import Experiences from './Experiences';
import ToastNotification from '../components/ToastNotification';
import Footer from '../components/Footer';
import Testimonials from './Testimonials';

const Home = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState({ isVisible: false, item: null });

  const addToCart = (product) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        return items.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });

    setToast({ isVisible: true, item: product });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
      <div>
        <ToastNotification 
          isVisible={toast.isVisible}
          onClose={() => setToast({ isVisible: false, item: null })}
          item={toast.item}
        />
      <div
        style={{
          backgroundImage: `url(${LandingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
        className="relative scroll-smooth pb-50"
      >
        <AppNavbar 
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />

        <div className="mt-10 text-center text-white p-2 px-5">
          <h1 className="lg:leading-16 leading-10 lg:text-5xl 2xl:text-6xl text-2xl font-medium mb-5">
            Make Your Interior More <br />
            Minimalistic & Modern
          </h1>
          <p className="text-center leading-8 text-sm lg:text-lg px-10 lg:px-0">
            Turn your room with furn into a lot more minimalist
            <span className="hidden lg:inline"><br /> &nbsp;</span>
             and modern with ease and speed
          </p>

          <SearchBar text="Search furniture" className="mt-5 m-auto w-xs px-5 lg:px-0"/>
        </div>
      </div>

      <main>
        <WhyChoosingUs />
        <BestSelling onAddToCart={addToCart}/>
        <Experiences />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default Home;