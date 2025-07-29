import React from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Testimonial1 from '../assets/images/testimonial1.png'
import Testimonial2 from '../assets/images/testimonial2.png'
import Testimonial3 from '../assets/images/testimonial3.png'
import Avatar1 from '../assets/images/avatar1.png'
import Avatar2 from '../assets/images/avatar2.png'
import Avatar3 from '../assets/images/avatar3.png'


const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  )
}

const TestimonialCard = ({ name, title, review, rating, avatarSrc, backgroundImage }) => {
  return (
    <Card className="relative overflow-hidden h-96">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="bg-white rounded-lg p-4 pt-8 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <img 
              src={avatarSrc} 
              alt={name}
              className="w-12 h-12 rounded-full border-4 border-white object-cover"
            />
          </div>
          
          <div className="text-center mb-3">
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 leading-relaxed text-center">
            "{review}"
          </p>
          
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star 
                key={index}
                className={`w-4 h-4 ${
                  index < rating 
                    ? 'text-orange-400 fill-orange-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

const Testimonials = () => {
    const testimonials = [
    {
        name: "Bang Upin",
        title: "Street Vendor",
        review: "Thank you so much! Now my room looks more luxurious and expensive.",
        rating: 4,
        avatarSrc: Avatar1,
        backgroundImage: Testimonial1
    },
    {
        name: "Ibuk Sukijan",
        title: "Homemaker",
        review: "Thanks, Furn! It now feels like I'm living in an apartment because the furniture looks so luxurious.",
        rating: 4,
        avatarSrc: Avatar2,
        backgroundImage: Testimonial2
    },
    {
        name: "Mpok Ina",
        title: "Private Employee",
        review: "Very affordable for someone like me who doesn’t have a big budget.",
        rating: 4,
        avatarSrc: Avatar3,
        backgroundImage: Testimonial3
    }
    ];


  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-5">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Client Reviews
        </h2>
      </div>

      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              review={testimonial.review}
              rating={testimonial.rating}
              avatarSrc={testimonial.avatarSrc}
              backgroundImage={testimonial.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials