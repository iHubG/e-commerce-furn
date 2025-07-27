import React from 'react'
import { Link } from 'react-router-dom';
import { Plus, Star, StarHalf, StarOff } from 'lucide-react';
import Card from '../components/Card';

const categories = ['Chair', 'Bed', 'Sofa', 'Lamp'];

const chairData = [
    {
        imageUrl: 'https://via.placeholder.com/300x150',
        type: 'Chair',
        title: 'Sakarias Armchair',
        price: '$200',
        icon: Plus,
        rating: 4.5,
    },
    {
        imageUrl: 'https://via.placeholder.com/300x150',
        type: 'Chair',
        title: 'Baltsar Chair',
        price: '$570',
        icon: Plus,
        rating: 5,
    },
    {
        imageUrl: 'https://via.placeholder.com/300x150',
        type: 'Chair',
        title: 'Anjay Chair',
        price: '$250',
        icon: Plus,
        rating: 5,
    },
    {
        imageUrl: 'https://via.placeholder.com/300x150',
        type: 'Chair',
        title: 'Nyantuy Chair',
        price: '$340',
        icon: Plus,
        rating: 5,
    },
  
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 stroke-amber-400 fill-amber-400" />
      ))}
      {halfStar && (
        <StarHalf className="w-4 h-4 stroke-amber-400 fill-amber-400" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star className="w-4 h-4 stroke-amber-300 fill-transparent" key={`empty-${i}`} />
      ))}
    </div>
  );
}


const BestSelling = () => {

    return (
        <>
        <section className="bg-[#f7f7f7] p-10">
            <h2 className="text-center font-semibold text-4xl">Best Selling Product</h2>

            <div className="mt-10 rounded-full bg-[#EEEEEE] w-fit mx-auto p-1 px-2 flex gap-2">
            {categories.map((category, index) => (
                <Link
                key={index}
                to="/"
                className={`rounded-full p-2 px-4 ${
                    index === 0 ? 'bg-white' : 'hover:bg-white'
                }`}
                >
                {category}
                </Link>
            ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mt-20">
                {chairData.map(({ imageUrl, type, title, price, icon: Icon, rating }, idx) => (
                    <Card key={idx} className="flex flex-col bg-white rounded-lg">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full h-40" 
                    />

                    <div className="flex flex-col flex-grow p-4">
                        <span className="text-sm text-gray-500">{type}</span>
                        <h3 className="text-lg font-semibold mt-1">{title}</h3>

                        <div className="mt-2">
                        <StarRating rating={rating} />
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-4">
                            <span className="text-xl font-bold">{price}</span>
                            <div className="bg-black p-2 rounded-full hover:bg-neutral-700 transition-colors duration-200 cursor-pointer">
                                <Icon className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                    </Card>
                ))}
            </div>

        </section>
        </>
    )
}

export default BestSelling