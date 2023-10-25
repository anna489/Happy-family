import React from "react";

const Footer = () => {
  return (
    <main className="w-[100%] h-64">
      <div className="bg-[#D03737] h-80 items-center flex p-10 justify-center gap-10">
        <div className="flex gap-10 ">
          <div>
            <h1 className="text-2xl text-white font-semibold">Холбоо барих</h1>{" "}
            <br />
            <p className="text-white">Утас: +976 88187575</p>
            <p className="text-white">И-мэйл: help@behappy-family.com</p>
            <ul className="text-white">
              <li>
                <a href="serves">Book a Consultation</a>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <p className="text-white">Happy Family NGO</p>
              <p className="text-white">Баяр хөөртэй гэр бүл ТББ</p>
              <p className="text-white">165 Main St, Cambridge, MA 02142</p>
            </div>
            <br />
            <div className="flex justify-center gap-10 mt-5">
              <ul>
                <li>
                  <a href="">
                    <img src="./image/whiteLogo.png" className="h-11 w-15" />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.facebook.com/Happy.family.in.Mongolia">
                    <img
                      src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_152,h_152,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
                      className="h-11 w-11"
                    />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.instagram.com/happy_family_in_mongolia?igshid=YmMyMTA2M2Y%3D">
                    <img
                      src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_152,h_152,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png"
                      className="h-11 w-11"
                    />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.youtube.com/channel/UCEDwG-fYs-CUNaRLchIAc6A">
                    <img
                      src="https://static.wixstatic.com/media/203dcdc2ac8b48de89313f90d2a4cda1.png/v1/fill/w_152,h_152,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/203dcdc2ac8b48de89313f90d2a4cda1.png"
                      className="h-11 w-11"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h1 className="text-lg text-white">
              Subscribe to Get My Newsletter
            </h1>
            <br />
            <div className="flex justify-between gap-5 text-white ">
              <input
                type="text"
                placeholder="Enter your email here..."
                className="text-white border border-white bg-[#D03737]  p-2"
              />
              <button className="bg-white text-[#D03737] h-10 w-20">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-10 w-full justify-center items-center flex">
        <p className="text-[#D14833]">© 2022 by Happy Family NGO.</p>
      </div>
    </main>
  );
};

export default Footer;
