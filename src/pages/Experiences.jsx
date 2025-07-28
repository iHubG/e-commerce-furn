import React from "react";
import Card from "../components/Card";
import LivingBg from "../assets/images/living-bg.png";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import MaterialsBig from "../assets/images/materials-big.png";
import MaterialsMedium from "../assets/images/materials-medium.png";
import MaterialsSmall from "../assets/images/materials-small.png";

const Experiences = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 py-10 lg:py-40 px-4 lg:px-8 max-w-7xl mx-auto">
        <Card
          className="bg-cover bg-center bg-no-repeat rounded-lg shadow-xl overflow-hidden min-h-[300px] lg:min-h-[400px]"
          style={{ backgroundImage: `url(${LivingBg})` }}
        >
          <img
            src={LivingBg}
            alt="Living room experience"
            className="w-full h-full object-cover opacity-0"
            onError={(e) => {
              e.target.style.opacity = "1";
              e.target.parentElement.style.backgroundImage = "none";
            }}
          />
        </Card>

        <Card className="flex flex-col justify-center p-6 lg:p-0">
          <h3 className="text-amber-500 mb-4 font-medium text-sm tracking-wide">
            EXPERIENCES
          </h3>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-6 leading-tight">
            We Provide You The Best Experience
          </h2>
          <p className="mb-6 lg:mb-8 text-sm lg:text-base leading-relaxed text-gray-600">
            You don't have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and luxurious style and with premium quality
            materials.
          </p>

          <Link
            to="/"
            className="flex gap-2 items-center text-sm text-amber-500 hover:text-amber-600 transition-colors w-fit group"
          >
            More Info
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Card>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 py-10 lg:py-40 px-4 lg:px-8 max-w-7xl mx-auto">
        <Card className="flex flex-col justify-center p-6 lg:p-0 order-2 lg:order-1">
          <h3 className="text-amber-500 mb-4 font-medium text-sm tracking-wide">
            MATERIALS
          </h3>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-6 leading-tight">
            Very Serious Materials For Making Furniture
          </h2>
          <p className="mb-6 lg:mb-8 text-sm lg:text-base leading-relaxed text-gray-600">
            Because furn was very serious about designing furniture for our 
            environment, using a very expensive and famous capital but at a 
            relatively low price.
          </p>

          <Link
            to="/"
            className="flex gap-2 items-center text-sm text-amber-500 hover:text-amber-600 transition-colors w-fit group"
          >
            More Info
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Card>
        <Card className="flex gap-5 items-end justify-center order-1 lg:order-2 mt-40 lg:mt-0">
          <Card className="flex flex-col gap-5">
            <div className="bg-cover bg-center bg-no-repeat rounded-lg shadow-xl"
              style={{ backgroundImage: `url(${MaterialsSmall})` }}>
                <img
                  src={MaterialsSmall}
                  alt="Materials Small"
                  className="w-full h-full object-cover opacity-0"
                  onError={(e) => {
                    e.target.style.opacity = "1";
                    e.target.parentElement.style.backgroundImage = "none";
                  }}
                />
            </div>
            <div className="bg-cover bg-center bg-no-repeat rounded-lg shadow-xl"
              style={{ backgroundImage: `url(${MaterialsMedium})` }}>
                <img
                  src={MaterialsMedium}
                  alt="Materials Medium"
                  className="w-full h-full object-cover opacity-0"
                  onError={(e) => {
                    e.target.style.opacity = "1";
                    e.target.parentElement.style.backgroundImage = "none";
                }}
              />
            </div>
          </Card>
          <Card
            className="bg-cover bg-center bg-no-repeat rounded-lg shadow-xl h-[80%] mb-5"
            style={{ backgroundImage: `url(${MaterialsBig})` }}
          >
            <img
              src={MaterialsBig}
              alt="Materials Big"
              className="w-full h-full object-cover opacity-0"
              onError={(e) => {
                e.target.style.opacity = "1";
                e.target.parentElement.style.backgroundImage = "none";
              }}
            />
          </Card>
        </Card>
      </section>
    </>
  );
};

export default Experiences;
