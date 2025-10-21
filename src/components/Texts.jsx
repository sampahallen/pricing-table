import { useState } from "react";

const Texts = () => {
  const [toggle, setToggle] = useState("left");
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6 mt-10">
      <h3 className="text-purple-500 text-[18px] font-semibold leading-[100%]">
        PRICING
      </h3>
      <h1 className="text-[40px] font-bold leading-[100%]">
        Choose the plan that fits your needs
      </h1>

      <div className="flex flex-row justify-between items-center min-w-[350px] mt-7 text-center border rounded-xl p-1 h-[72px]">
        <p
          onClick={() => setToggle("left")}
          className={`cursor-pointer flex items-center justify-center text-[16px] w-1/2 h-[64px] p-6 ${toggle === "left" ? 'bg-gray-200 rounded-lg' : ''}`}
        >
          Monthly
        </p>
        <div
          onClick={() => setToggle("right")}
          className={`flex flex-col text-[16px] h-[64px] items-center justify-center cursor-pointer w-1/2 p-6 ${toggle === "right" ? 'bg-gray-100 rounded-lg' : ''}`}
        >
          <p>Annually</p>
          <p className="text-purple-500">Save 30%</p>
        </div>
      </div>
    </section>
  );
};

export default Texts;
