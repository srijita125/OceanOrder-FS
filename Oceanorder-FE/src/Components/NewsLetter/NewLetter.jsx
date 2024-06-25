import React from 'react'
import News from "../../assets/Images/news.jpg"

const NewLetter = () => {
  return (
    <>
      <section className="mt-10">
        <div className=" shadow-2xl ">
          <div className="relative py-12 px-8 md:py-20 md:px-12 aos-init rounded-2xl " 
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${News})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 className="text-3xl font-bold text-white mb-2">Get your Product Directly In Your Destination</h3>
                <p className="text-white text-lg">Join our newsletter to get top news before anyone else.</p>
              </div>
              <form className="w-full lg:w-1/2">
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <input 
                    type="email" 
                    className="w-full appearance-none bg-white border border-white focus:border-blue-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-slate-600 font-semibold" 
                    placeholder="Enter Your Email…" 
                    aria-label="Your best email…"
                  />
                  <a 
                    className="flex justify-center items-center font-semibold p-2 text-slate-800 bg-amber-400 shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out"
                    href="#0">
                    Subscribe
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewLetter
