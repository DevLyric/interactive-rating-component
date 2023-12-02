import { useState } from "react";

function App() {
  const [selectedRating, setSelectedRating] = useState<number | undefined>(
    undefined,
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectRating = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center px-5">
      {isSubmitted ? (
        <div className="flex flex-col items-center gap-8 h-[400px] w-[400px] bg-gradient-to-t from-[#171e28] to-[#232833] rounded-3xl p-8">
          <img
            className="w-44"
            src="../src/assets/illustration-thank-you.svg"
            alt=""
          />
          <div className="text-center w-full bg-[#282f38] py-2 rounded-full text-orange-600">
            You selected {selectedRating} out 5
          </div>
          <h3 className="text-3xl">Thank You!</h3>
          <p className="text-center text-[#9ea4b0]">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-between h-[440px] w-[440px] bg-gradient-to-t from-[#171e28] to-[#232833] rounded-3xl p-8">
          <div className="bg-[#242f39] h-14 w-14 flex items-center justify-center rounded-full">
            <img src="../../src/assets/icon-star.svg" alt="" />
          </div>
          <h3 className="text-3xl">How did we do?</h3>
          <p className="text-[#9ea4b0]">
            Please let us know how we did With your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <button
                  key={item}
                  onClick={() => handleSelectRating(item)}
                  type="button"
                  className="bg-[#262f38] text-[#848c96] font-semibold h-14 w-14 rounded-full hover:bg-[#7a8898] hover:text-white focus:bg-orange focus:text-white"
                >
                  {item}
                </button>
              );
            })}
          </div>
          <button
            disabled={!selectedRating ? true : false}
            onClick={handleSubmit}
            className="w-full py-4 font-semibold rounded-full bg-orange hover:bg-white hover:text-orange-500"
          >
            SUBMIT
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
