import React, { useState } from 'react';
import doller from '../assets/dollar.svg';
import ramp from '../assets/ramp.svg'
import solution from '../assets/solution.svg';
const Offer = () => {
  const [offerList, setOfferList] = useState([
    {
      title: 'Cardano Debit-Cards',
      des: 'Cardano, simplified. The debit card that makes crypto spending easy',
      icon: doller,
    },
    {
      title: 'On & off Ramp',
      des: 'Fiat meets crypto, effortlessly buy, sell and manage.',
      icon: ramp,
    },
    {
      title: 'Solution for business',
      des: 'Empowering businesses with effortless crypto payments and seamless fiat Solution.',
      icon: solution,
    },
  ]);

  return (
    <>
      <section className="space-y-12">
        <h2 className="font-bold leading-tight text-center text-2xl lg:text-3xl">
          What do web offer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {offerList.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="bg-[#3d3f54] flex items-center justify-center max-h-12 max-w-12 rounded-xl w-4/5">
                <img className="h-6 w-6" src={item.icon} alt="" />
              </div>
              <div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-secondary text-sm">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Offer;
