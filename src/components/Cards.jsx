import { useState } from "react";
import { motion } from "motion/react";
import { pkg as initialpkg, cards, } from "../constants"
import tick from "../assets/greentick.png"
import star from "../assets/star.png"

const Cards = () => {
    const [plans, setplans] = useState(initialpkg);

    const handleActiveChange = (index) => {
        const updated = plans.map((plan, i) => (
            {
                ...plan,
                isActive: i === index,
            }
        ))
        setplans(updated)
    }
  return (
    <section className="flex flex-row flex-wrap gap-5 items-stretch justify-center sm:p-0 p-5 mt-5 mb-10">
      {plans.map((plan, index) => (
        <motion.div
            whileHover={{scale: 1.01}}
            whileTap={{scale: 0.95}}
            key={index}
            onClick={() => handleActiveChange(index)}
          className={`flex flex-col rounded-3xl p-7 w-full  sm:max-w-[400px] sm:h-hit bg-white ${
            plan.isActive === true ? "border-2 shadow-lg shadow-purple-500 border-purple-500" : "border-2"
          } cursor-pointer relative`}
        >
          <div className={`absolute top-4 right-5 ${plan.isActive ? '' : 'hidden'}`}>
            <img src={star} alt="" className="w-[30px] h-[30px] object-contain" />
          </div>
          <div className="ml-1 mb-5 mt-1">
            <div className="flex flex-row gap-6 items-start">
              <p className="text-[20px] text-gray-600 font-bold">{plan.name}</p>
              <p
                className={`${
                  plan.mostPopular ? "" : "hidden"
                } border border-green-500 rounded-xl p-1 text-center
              text-[10px] font-semibold text-green-500 min-w-[150px] bg-green-50`}
              >
                Most Popular
              </p>
            </div>

            <h3 className="text-[35px] tracking-wider font-bold ">{plan.price}</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <motion.button
            whileHover={{scale: 1.03}}
            whileTap={{scale: 0.95}}
              className={`border w-full rounded-[5px] border-purple-500 px-4 py-2 ${
                plan.isActive
                  ? "bg-purple-500 text-white"
                  : "bg-white text-purple-500"
              }`}
            >
              Buy Plan
            </motion.button>

            <div className="flex flex-row items-center justify-center gap-4 mt-1 mb-5">
              {cards.map((card) => (
                <img
                  src={card.image}
                  alt=""
                  className="sm:w-[50px] sm:h-[35px] w-[35px] h-[35px] object-contain"
                />
              ))}
            </div>
          </div>
          {plan.offers.map((offer, offerIndex) => (
            <div >
              <p className="font-semibold text-[16px] mb-1 ">
                {offer.title}
              </p>
              <ul className="mb-4">
                {offer.items.map((item) => (
                  <div className="flex flex-row  items-center justify-start gap-2">
                    <img
                      src={tick}
                      alt=""
                      className="w-[20px] h-[20px] object-contain"
                    />
                    <li className="my-1 text-[12px]">{item.title}</li>
                    <p
                      className={`text-[10px] bg-purple-200 rounded-xl min-w-[80px] flex items-center justify-center text-purple-500 ml-3 ${
                        item.boost ? "block" : "hidden"
                      }`}
                    >
                      Boosted ↑
                      <span className={`${item.proBoost ? "" : "hidden"}`}>
                        ↑
                      </span>
                    </p>
                  </div>
                ))} 
              </ul>
              {
                offerIndex < plan.offers.length -1 && (
                    <hr className="border-t border-gray-400 mb-3"/>
                )
              }
             
            </div>
          ))}
        </motion.div>
      ))}
    </section>
  );
};

export default Cards;
