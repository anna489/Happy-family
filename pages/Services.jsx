import React from "react";
import { Users } from "./data";
import { useState } from "react";

const Services = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="container mx-auto md:p-2 lg:p-8">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl text-black font-medium">Our services</h1>
      </div>
      <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {Users.filter((user) => user.name.toLowerCase().includes(query)).map(
          (user) => (
            <div className="">
              <ul>
                <a href="">
                  <img
                    src={user.imageUrl}
                    className="rounded border flex-col items-start p-2 m-2   shadow-lg truncate hover:bg-[#D03737] hover:scale-110 hover:transition-all"
                  />
                </a>
              </ul>
              <div>
                <ul>
                  <a href="">
                    <h1 className="p-2 text-lg font-medium">{user.name}</h1>
                  </a>
                </ul>
                <div className="flex justify-between">
                  <p>{user.time}</p>
                  <p>{user.cost}</p>
                </div>
              </div>
              <div className="border-grey border"></div>
              <div className="flex justify-center mt-3 items-center">
                <button className="bg-black text-white rounded p-1">
                  Book now
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Services;
