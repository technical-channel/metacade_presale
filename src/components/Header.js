import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
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
          <nav className="text-white flex  gap-5 items-end">
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
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-3 md:space-y-0 m-0">
              <li className="relative text-white-600 uppercase hover:text-blue-600">
                <a href="javascript:void(0)">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/new/language.png"
                    }
                    width="50"
                    alt=""
                  />
                  <i className="absolute flex top-[0] text-black  text-2xl h-full w-full justify-center items-center z-[100] peer px-2 py-2  text-white hover:text-blue-600">
                    <FaGlobe />
                  </i>
                  <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-yellow-600 drop-shadow-lg">
                    <a
                      className="w-[300px] px-2 py-2 text-black hover:bg-yellow-600 bg-[#ff6837] text-left"
                      href="#"
                    >
                      English
                    </a>
                  </div>
                </a>
              </li>
              <li className="relative text-white-600 uppercase hover:text-blue-600">
                <a href="javascript:void(0)">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/new/social.png"
                    }
                    alt=""
                    width="50"
                  />
                  <i className="absolute flex top-[0] text-black  text-2xl h-full w-full justify-center items-center z-[100] peer  py-2  text-white hover:text-blue-600"></i>
                  <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-[#ff6837] text-left drop-shadow-lg">
                    <div>
                      <a
                        className="px-2 py-2 flex items-center text-white hover:bg-yellow-600 "
                        href="https://twitter.com/Metacade_Crypto"
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                      >
                        <FaTwitter color={"#fff"} className="mx-2" /> Twitter
                      </a>
                    </div>

                    <a
                      className="px-2 py-2 flex items-center text-white hover:bg-yellow-600"
                      href="https://www.facebook.com/metacade"
                    >
                      <FaInstagram color={"#fff"} className="mx-2" />
                      Instagram
                    </a>
                    <a
                      className="px-2 py-2 flex items-center text-white hover:bg-yellow-600"
                      href="https://t.me/+rfvHWK2AfNMzMjQ0"
                    >
                      <FaTelegram color={"#fff"} className="mx-2" /> Telegram
                    </a>
                    <a
                      className="px-2 py-2 flex items-center text-white hover:bg-yellow-600"
                      href="https://www.youtube.com/channel/UCVA_TZHxuqziubGe1ExEUQg"
                    >
                      <FaReddit color={"#fff"} className="mx-2" />
                      Reddit
                    </a>
                    <a
                      className="px-2 py-2 flex items-center text-white hover:bg-yellow-600"
                      href="https://discord.com/channels/@metacade"
                    >
                      <FaDiscord color={"#fff"} className="mx-2" /> Discord
                    </a>
                    <a
                      className="px-2 py-2 flex items-center text-white hover:bg-yellow-600"
                      href="https://www.instagram.com/metacade_/"
                    >
                      <FaTiktok color={"#fff"} className="mx-2" /> Tiktok
                    </a>
                    <a
                      className="px-2 py-2  flex items-center text-white hover:bg-yellow-600"
                      href="https://www.tiktok.com/@metacade_official"
                    >
                      <FaFacebook color={"#fff"} className="mx-2" /> Facebook
                    </a>
                    <a
                      className="px-2 py-2 flex items-center text-white hover:bg-yellow-600"
                      href="
                https://www.linkedin.com/company/metacade/"
                    >
                      <FaLinkedin color={"#fff"} className="mx-2" /> Linkedin
                    </a>
                    <a
                      className="px-2 py-2 flex items-center text-white hover:bg-yellow-600"
                      href="
                https://www.linkedin.com/company/metacade/"
                    >
                      <FaYoutube color={"#fff"} className="mx-2" /> Youtube
                    </a>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-5">
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
