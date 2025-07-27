import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const cardData = [
  {
    title: 'Luxury Facilities',
    description: 'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.',
    link: '/',
  },
  {
    title: 'Affordable Price',
    description: 'You can get a workspace of high quality at an affordable price and still enjoy the facilities that are only here.',
    link: '/',
  },
  {
    title: 'Many Choices',
    description: 'We provide many unique work space choices so that you can choose the workspace to your liking.',
    link: '/',
  },
];

const WhyChoosingUs = () => {
  return (
    <section className="p-10 py-20 gap-2 grid lg:grid-cols-4">
      <Card className="p-10">
        <h2 className="text-3xl font-semibold whitespace-nowrap">Why <br /> Choosing Us</h2>
      </Card>
      {cardData.map((card, index) => (
        <Card key={index} className="px-2 flex flex-col gap-3">
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-sm">{card.description}</p>
          <Link to={card.link} className="flex gap-3 text-sm text-amber-500 hover:border-b-1 hover:border-amber-300 w-fit">
            More Info <MoveRight />
          </Link>
        </Card>
      ))}
    </section>
  );
};

export default WhyChoosingUs;
