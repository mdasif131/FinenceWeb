import React, { useState } from 'react'
import person1 from '../assets/person-1.png'
import person2 from '../assets/person-2.png'
import person3 from '../assets/person-3.png'
const Feedback = () => {
  const [personFeed, setPersonFeed] = useState([
    {
      num: 66,
      des: `"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."`,
      Img: person1,
      name: 'Hadid Khan',
      prof: 'UIUX Designer',
    },
    {
      num: 66,
      des: `"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."`,
      Img: person1,
      name: 'Wade Warren',
      prof: 'Web Designer',
    },
    {
      num: 66,
      des: `"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "`,
      Img: person1,
      name: 'Jenny Wilson',
      prof: 'Trust Administrator',
    },
  ]);
  return (
    <>
      {/* <section className='p-2'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personFeed.map((item, index) => (
            <div key={index} className="flex-1  bg-[#27322F3D] flex flex-col items-start p-5 space-y-4">
          
                <div className="bg-[#3D3F54] rounded-full text-xl p-2">
                  <p>{item.num}</p>
                </div>
                <div className='max-w-[344px]'>
                  <p>{item.des}</p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <img
                    className="w-full max-w-[48px] max-h-[48px]"
                    src={item.Img}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3>{item.name}</h3>
                    <p className="text-sm text-gray-400 ">{item.prof}</p>
                  </div>
                </div>
              </div>
          
          ))}
        </div>
      </section> */}

      <section className="p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {personFeed.map((item, index) => (
            <div
              key={index}
              className="w-full bg-[#27322F3D] flex flex-col items-start p-5 space-y-4 rounded-lg"
            >
              <div className="bg-[#3D3F54] rounded-full text-xl p-2 text-white">
                <p>{item.num}</p>
              </div>
              <div className="max-w-[344px]">
                <p>{item.des}</p>
              </div>
              <div className="flex gap-3 items-center">
                <img className="w-12 h-12 rounded-full" src={item.Img} alt="" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.prof}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Feedback