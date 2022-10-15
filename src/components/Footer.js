import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-[#005ec3] py-[80px]  ">
        <div className="max-w-[1350px] mx-auto grid md:grid-cols-3 gap-4 items-center">
          <div className="mx-auto">
            <img
              width={150}
              alt="logo"
              src={process.env.PUBLIC_URL + "/assets/images/new/meta-icon.png"}
            />
          </div>
          <div className="text-left">
            <h4 className="text-2xl">METAHOME</h4>
            <p>
              Luxe Media LLC, <br />
              3301 Cheturnal Street
              <br />
              Belize City, Belize.
              <br />
              Registration IFSC/200LLC 1470/22
            </p>
          </div>
          <div className="text-left">
            <h4 className="text-2xl">METAMAIL</h4>
            <p>
              Buying assistance:
              <a href="mailto:buy@metacade.co">buy@metacade.co</a>
              <br />
              General enquiries:
              <a href="mailto:admin@metacade.co">admin@metacade.co</a>
              <br />
              Marketing:
              <a href="mailto:marketing@metacade.co">marketing@metacade.co</a>
              <br />
              Press: <a href="mailto:pr@metacade.co">pr@metacade.co</a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0050a4] py-[40px]   ">
        <div className="max-w-[1350px] mx-auto  flex-wrap md:flex items-center  md:justify-between ">
          <div className="mb-5 md:mb-0">
            <p>
              <span>
                2022 © <a href="https://www.metacade.co">Metacade</a>, All
                rights reserved.
              </span>
              <a href="https://www.metacade.co/pages/terms.html">
                Terms of use
              </a>
              |
              <a href="https://www.metacade.co/pages/privacy.html">
                Privacy Policy
              </a>
              |
              <a href="https://www.metacade.co/pages/cookies.html">
                Cookie Policy
              </a>
            </p>
          </div>
          <div>
            <div className="flex gap-5 justify-center flex-wrap">
              <a href="Twitter: https://twitter.com/Metacade_">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/metacade_/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://t.me/+rfvHWK2AfNMzMjQ0">
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a href="https://www.reddit.com/user/Metacade_Crypto">
                <i class="fa-brands fa-reddit-alien"></i>
              </a>
              <a href="https://discord.com/channels/@metacade">
                <i class="fa-brands fa-discord"></i>
              </a>
              <a href="https://www.tiktok.com/@metacade_official">
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://www.facebook.com/metacade">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/company/metacade/">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCVA_TZHxuqziubGe1ExEUQg">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
