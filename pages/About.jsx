import React from "react";
import { Members } from "./data";

const About = () => {
  return (
    <div className="container mx-auto md:p-2 lg:p-8">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-medium">Meet The Team</h1>
      </div>

      <div className="grid grid-col-1 mt-10 justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Members.map((member) => (
          <div className="bg-[#efeff2]  hover:scale-110 hover:transition-all border-[#2190C7] border-4 rounded-lg p-3">
            <div>
              <img src={member.imageUrl} className=" box-border rounded-lg " />
            </div>
            <div className="mt-7">
              <h1 className="font-medium text-lg">{member.name}</h1>
            </div>
            <div className="mt-5">
              <p>{member.description}</p>
            </div>
            <div className="mt-5">
              <ul className="h-10 w-10">
                <li>
                  <a href={member.instagram}>
                    <img src={member.instagram} />
                  </a>
                </li>
              </ul>
              <ul className="h-10 w-10">
                <li>
                  <a href={member.facebook}>
                    <img src={member.facebookUrl} />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href={member.twitter}>
                    <img src={member.twitter} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
