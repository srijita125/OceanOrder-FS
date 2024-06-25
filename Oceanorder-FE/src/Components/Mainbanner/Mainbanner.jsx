
import image from "../../assets/Images/bannerimage.jpg";
const MyComponent = () => {
  return (
    <div
      className=" bg-cover rounded-br-[200px] bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className=" bg-black rounded-br-[200px]  bg-opacity-50 w-full h-fit">
        <div className="mx-auto flex flex-col items-start py-24 sm:py-32" > 
          <div className="md:w-[50%]  lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-5xl md:text-xl lg:text-xl xl:text-3xl md:text-end ml-2 text-white font-black leading-10">
                Set sail for success with our 
                <span className="text-sky-400 "> "unbeatable" </span>
                shipping Solution.
              </h1>
              
          </div>
          <form className=" w-[80%] sm:w-[60%] ml:2 sm:ml-7 mt-2 py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
            <input
              type="text"
              placeholder="Search Product"
              className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
              name="topic"
            />
            <button className=" hover:bg-sky-400 flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full  tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-sky-500 text-white font-medium border-transparent py-1.5 h-[38px] -mr-3">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
