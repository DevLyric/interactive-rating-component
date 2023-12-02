import { useState } from "react";

function Rating() {
  const [selectedRating, setSelectedRating] = useState<number | undefined>(
    undefined,
  );

  const handleSelectRating = (rating: number) => {
    setSelectedRating(rating);
  };

  return (
    <form className="flex flex-col justify-between h-[450px] w-[450px] bg-gradient-to-t from-[#171e28] to-[#232833] rounded-3xl p-8">
      <div className="bg-[#242f39] h-14 w-14 flex items-center justify-center rounded-full">
        <img src="../../src/assets/icon-star.svg" alt="" />
      </div>
      <h3 className="text-2xl">How did we do?</h3>
      <p className="text-[#9ea4b0]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex items-center justify-between">
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <button
              key={item}
              onClick={() => handleSelectRating(item)}
              type="button"
              className="bg-[#262f38] text-[#848c96] font-semibold h-14 w-14 rounded-full hover:text-white focus:bg-orange focus:text-white"
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        disabled={!selectedRating ? true : false}
        className="w-full py-4 font-semibold rounded-full bg-orange"
      >
        SUBMIT
      </button>
    </form>
  );
}

export default Rating;
