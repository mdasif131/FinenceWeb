import React from 'react';
import { Button } from '@heroui/react';
import perfectcard from '../assets/perfect-card.svg';
const PerfectCard = () => {
  return (
    <>
      <section className="flex flex-col sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center">
        <img className="sm:w-1/2 p-2" src={perfectcard} alt="" />

        <div className="space-y-6">
          <div className="space-y-3 sm:space-y-6 ">
            <h2 className="font-bold leading-tight text-2xl lg:text-4xl">
              Find the Perfect Card for You
            </h2>
            <p className="text-secondary text-md lg:text-base w-full max-w-[500px]  ">
              Unlocking the Power of Crypto, Both Virtually and Physically
              Manage your crypto effortlessly and spend it seamlessly with Wern.
              Our virtual card allows for instant and secure online
              transactions, while the physical Wern Card empowers you to convert
              and spend your crypto at millions of merchants worldwide.
              Experience the flexibility and convenience of both options, all
              within the secure and user-friendly Wern ecosystem.
            </p>
          </div>

          <div className="space-y-2">
            <Button
              variant="solid"
              radius="full"
              size="lg"
              color="primary"
              className="font-bold text-sm"
            >
              learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PerfectCard;
