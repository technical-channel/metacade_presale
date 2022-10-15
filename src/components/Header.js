import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  return (
    <div className="bg-black fixed w-full">
      <div className="h-[80px] max-w-[1350px] mx-auto flex justify-between items-center px-5">
        <div>
          <div className="text-white">
            {" "}
            <img
              alt="fd"
              className="max-w-[300px] w-full "
              src={process.env.PUBLIC_URL + "/assets/images/full_logo.gif"}
            />
          </div>
        </div>
        <div className="block md:hidden ">
          <div>
            <GiHamburgerMenu size={40} color={"#fff"} />
          </div>
        </div>
        <div
          className="hidden md:flex items-center gap-5 goshareg uppercase"
          style={{ alignItems: "end" }}
        >
          <nav className="text-white flex  gap-5">
            <li className="dropdown inline px-4 text-white-500 text-left  cursor-pointer font-bold text-base uppercase tracking-wide">
              <a>How to buy</a>
              <div className="dropdown-menu absolute hidden h-auto flex ">
                <ul className="block w-full shadow px-2 py-2 bg-[black] font-bold text-white">
                  <li className="py-1 uppercase">
                    <a className="block text-white-500 font-bold text-base uppercase hover:bg-purple-700 p-5 text-left cursor-pointer">
                      How to setup trust wallet
                    </a>
                  </li>
                  <li className="py-1 uppercase">
                    <a className="block text-white-500 font-bold text-base uppercase  hover:bg-purple-700 p-5 text-left cursor-pointer">
                      How to setup metamask
                    </a>
                  </li>
                  <li className="py-1 uppercase">
                    <a className="block text-white-500 font-bold text-base uppercase  hover:bg-purple-700 p-5 text-left cursor-pointer">
                      How to buy MCADE
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <a href="/">Whitepaper</a>
            <a href="/">Audit</a>
            <a href="/">About</a>
            <a href="/">Press</a>
            <a href="/">Store</a>
          </nav>
          <div className="flex gap-5">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/new/language.png"}
                width="50"
                alt=""
              />

              <div className="dropdown-menu absolute hidden h-auto flex ">
                <ul className="block w-full shadow px-2 py-2 bg-[black] font-bold text-white">
                  <li className="py-1 uppercase">
                    <a className="block text-white-500 font-bold text-base uppercase hover:bg-purple-700 p-5 text-left cursor-pointer">
                      How to setup trust wallet
                    </a>
                  </li>
                  <li className="py-1 uppercase">
                    <a className="block text-white-500 font-bold text-base uppercase  hover:bg-purple-700 p-5 text-left cursor-pointer">
                      How to setup metamask
                    </a>
                  </li>
                  <li className="py-1 uppercase">
                    <a className="block text-white-500 font-bold text-base uppercase  hover:bg-purple-700 p-5 text-left cursor-pointer">
                      How to buy MCADE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/new/social.png"}
                alt=""
                width="50"
              />
            </div>
            <div>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/new/claim-active.png"
                }
                alt=""
                width="100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
