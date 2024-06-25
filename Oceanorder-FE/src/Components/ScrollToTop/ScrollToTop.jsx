import React, { useState, useEffect } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
// import "./shake.css"
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    const scrollPercentage = (scrolled / scrollHeight) * 100;

    if (scrollPercentage > 8) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (<>
  <style>
        {`
          @keyframes vertical-shake {
            0%, 100% {
              transform: translateY(0);
            }
            25% {
              transform: translateY(-2px);
            }
            75% {
              transform: translateY(2px);
            }
          }
          .vertical-shake {
            animation: vertical-shake 0.5s infinite;
          }
        `}
      </style>
    <div>
      {visible && (
        <div className="fixed bottom-8 left-0 rounded-full p-2 ">
          <div className="">
            <button
              type="button"
              className="w-full p-1 bg-[#39c7ff] group rounded-full vertical-shake"
              onClick={scrollToTop}
            >
              <IoMdArrowRoundUp
                color="white"
                style={{ fontSize: "40px", display: "inline" }}
              />
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};
export default ScrollToTop;