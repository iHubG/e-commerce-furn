import React from 'react';
import AppNavbar from '../components/Navbar';
import LandingBg from '../assets/images/landing-bg.png';
import SearchBar from '../components/SearchBar';
import WhyChoosingUs from './WhyChoosingUs';

const Home = () => {
  return (
    <div title="Home - Furn">
      <div
        style={{
          backgroundImage: `url(${LandingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100dvh',
          width: '100%',
        }}
        className="relative scroll-smooth"
      >
        <AppNavbar />

        <div className="mt-10 text-center text-white">
          <h1 className="leading-tight lg:text-5xl 2xl:text-6xl font-medium mb-5">
            Make Your Interior More <br />
            Minimalistic & Modern
          </h1>
          <p className="text-center leading-8">Turn your room with panto into a lot more minimalist <br />
            and modern with ease and speed
          </p>
          <SearchBar text="Search furniture" className="mt-5 m-auto w-xs"/>
        </div>

        
      </div>

      <section>
        <WhyChoosingUs />
      </section>
    </div>
  );
};

export default Home;
