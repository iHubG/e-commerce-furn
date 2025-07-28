import React from 'react';
import AppNavbar from '../components/Navbar';
import LandingBg from '../assets/images/landing-bg.png';
import SearchBar from '../components/SearchBar';
import WhyChoosingUs from './WhyChoosingUs';
import BestSelling from './BestSelling';

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${LandingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
        className="relative scroll-smooth"
      >
        <AppNavbar />

        <div className="mt-10 text-center text-white p-2 px-5">
          <h1 className="lg:leading-16 leading-10 lg:text-5xl 2xl:text-6xl text-2xl font-medium mb-5">
            Make Your Interior More <br />
            Minimalistic & Modern
          </h1>
          <p className="text-center leading-8 text-sm lg:text-lg">
            Turn your room with panto into a lot more minimalist
            <span className="hidden lg:inline"><br /></span>
            and modern with ease and speed
          </p>

          <SearchBar text="Search furniture" className="mt-5 m-auto w-xs px-5 lg:px-0"/>
        </div>

        
      </div>

      <main>
        <WhyChoosingUs />
        <BestSelling />
      </main>
    </div>
  );
};

export default Home;
