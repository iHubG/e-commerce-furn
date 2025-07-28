import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Star, StarHalf, MoveRight, MoveLeft } from 'lucide-react'
import Card from '../components/Card'
import Chair1 from '../assets/images/chair1.png'
import Chair2 from '../assets/images/chair2.png'
import Chair3 from '../assets/images/chair3.png'
import Chair4 from '../assets/images/chair4.png'

const categories = ['Chair', 'Bed', 'Sofa', 'Lamp']

const chairData = [
  { imageUrl: Chair1, type: 'Chair', title: 'Sakarias Armchair', price: '$200', rating: 4.5 },
  { imageUrl: Chair2, type: 'Chair', title: 'Baltsar Chair', price: '$570', rating: 5 },
  { imageUrl: Chair3, type: 'Chair', title: 'Anjay Chair', price: '$250', rating: 5 },
  { imageUrl: Chair4, type: 'Chair', title: 'Nyantuy Chair', price: '$340', rating: 5 },
  { imageUrl: Chair1, type: 'Chair', title: 'Lundby Chair', price: '$380', rating: 4 },
  { imageUrl: Chair2, type: 'Chair', title: 'Ekedalen Chair', price: '$220', rating: 4.5 },
  { imageUrl: Chair3, type: 'Chair', title: 'Vilmar Chair', price: '$260', rating: 3.5 },
  { imageUrl: Chair4, type: 'Chair', title: 'Kullaberg Chair', price: '$310', rating: 5 },
]

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 stroke-amber-400 fill-amber-400" />
      ))}
      {halfStar && <StarHalf className="w-4 h-4 stroke-amber-400 fill-amber-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 stroke-amber-300 fill-transparent" />
      ))}
    </div>
  )
}

const BestSelling = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)

  // Set responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4) 
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2) 
      } else if (window.innerWidth >= 350) {
        setCardsPerView(1) 
      } else {
        setCardsPerView(1)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // Create extended array for infinite scroll
  const extendedItems = [
    ...chairData.slice(-cardsPerView),
    ...chairData,
    ...chairData.slice(0, cardsPerView)
  ]

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1)
  }

  const handlePrev = () => {
    setCurrentIndex(prev => prev - 1)
  }

  // Reset to real items when at cloned sections
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex >= chairData.length) {
        setCurrentIndex(0)
      } else if (currentIndex < 0) {
        setCurrentIndex(chairData.length - 1)
      }
    }, 500) 

    return () => clearTimeout(timer)
  }, [currentIndex])

  const translateX = -(currentIndex + cardsPerView) * (100 / cardsPerView)

  return (
    <section className="bg-[#f7f7f7] p-10">
      <h2 className="text-center font-semibold text-4xl">Best Selling Product</h2>

      {/* Category Filters */}
      <div className="mt-10 rounded-full bg-[#EEEEEE] w-fit mx-auto p-1 px-2 flex gap-2">
        {categories.map((category, idx) => (
          <Link
            key={idx}
            to="/"
            className={`rounded-full md:p-2 md:px-4 p-1 px-3 transition-colors ${
              idx === 0 ? 'bg-white' : 'hover:bg-white'
            }`}
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative mt-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${translateX}%)`,
            }}
          >
            {extendedItems.map((item, idx) => (
              <div 
                key={`${item.title}-${idx}`}
                className="px-2 sm:px-3 flex-shrink-0"
                style={{ 
                  width: `${100 / cardsPerView}%`,
                  minWidth: `${100 / cardsPerView}%`
                }}
              >
                <Card className="flex flex-col bg-white rounded-lg p-3 sm:p-4 h-full hover:shadow-lg transition-shadow">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-32 sm:h-40 object-contain mb-3 sm:mb-4"
                  />
                  <div className="flex flex-col flex-grow">
                    <span className="text-xs sm:text-sm text-gray-500 mb-1">{item.type}</span>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                    <div className="mb-3 sm:mb-4">
                      <StarRating rating={item.rating} />
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg sm:text-xl font-bold">{item.price}</span>
                      <button className="bg-black p-1.5 sm:p-2 rounded-full hover:bg-neutral-700 transition-colors">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                     bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <MoveLeft className="w-5 h-5 text-black" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                     bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <MoveRight className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* View All Link */}
      <Link
        to="/"
        className="flex mx-auto mt-10 gap-2 items-center text-sm text-amber-500 
                   hover:text-amber-600 transition-colors w-fit group"
      >
        View All
        <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  )
}

export default BestSelling