import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto md:p-2 lg:p-8">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">Apply today</h1>
      </div>
      {/* <div className="border border-black w-5 flex justify-center items-center justify-items-center"></div> */}
      <div className="flex justify-center items-center mt-10">
        <p>We are always welcome to everyone who wants to work with us.</p>
      </div>
      <div className="flex justify-center items-center gap-10  p-5">
        <ul>
          <li>help@behappy-family.com</li>
        </ul>
        <p>+976 88187575</p>
      </div>
    </div>
  );
};

export default Contact;
