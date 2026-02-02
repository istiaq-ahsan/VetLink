import React from 'react';
import Marquee from 'react-fast-marquee';

// import your logos
import amazon from '../../../assets/brands/amazon.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import start from '../../../assets/brands/star.png';
import randstad from '../../../assets/brands/randstad.png';

const logos = [amazon, casio, moonstar, start, randstad];

const ClientLogosMarquee = () => {
  return (
    <section className="py-10 bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl text-green-700 font-bold text-center">Trusted by Leading AgroFarms</h2>
        
        <div className='mt-16'>
            <Marquee pauseOnHover speed={50} gradient={false}>
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-24 flex items-center">
              <img src={logo} alt={`Client Logo ${idx + 1}`} className="h-7 object-contain" />
            </div>
          ))}
        </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;