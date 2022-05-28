import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import img from "./image/img.png"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const HomePart1 = () => {
  let [categories] = useState({
    LOGIN: [],
    "SIGN UP": [],
  });

  return (
    <div class="h-screen bg-bgColor font-prototype">
      <header class="text-gray-600 body-font pt-2">
        <div class="container mx-auto flex flex-wrap px-5 py-4 flex-col md:flex-row items-center">
          <a href="#" class="flex title-font font-medium items-center text-gray-900 mb- ">
            <span class="ml-3 text-3xl font-bold text-textBlack">LOGO</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#" class=" text-green-500 font-normal">BN</a>
            <span class="mx-2">/</span>
            <a href="#" class=" text-textBlack font-normal">EN</a>
          </nav>
        </div>
      </header>
      <div class="">
        <div class="container mx-auto flex flex-wrap  flex-row items-start">
          <nav class="flex w-4/5 uppercase flex-wrap items-start text-base pl-14">
            <a href="#" class="mr-6 text-lg text-buttonColor">home</a>
            <a href="#" class="mr-6 text-lg text-textBlue ">advertisers</a>
            <a href="#" class="mr-6 text-lg text-textBlue ">publishers</a>
            <a href="#" class="mr-6 text-lg text-textBlue ">influencers</a>
            <a href="#" class="mr-6 text-lg text-textBlue ">ad formats</a>
            <a href="#" class="mr-6 text-lg text-textBlue ">blog</a>
            <a href="#" class="mr-6 text-lg text-textBlue ">contact us</a>
          </nav>

          <div class="lg:w-1/5 inline-flex justify-end  lg:ml-0 -mt-4">
            <div className="w-full max-w-md px-1  sm:px-0">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-full bg-white p-2 shadow-sm">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-full py-1 text-lg font-normal ",
                          "",
                          selected
                            ? "text-white bg-buttonColor  shadow-sm"
                            : "text-textBlack "
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
      <section class="">
  <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-4 font-normal text-textBlue">Best News Porvide Site
 
      </h1>
      <p class="mb-8 leading-relaxed text-textBlack text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quasi non repellat ab ut doloremque, adipisci ipsum, commodi quos quisquam consequatur sapiente sit culpa vel aliquam architecto. Repellendus, quo rerum?</p>
      
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded shadow-sm" alt="hero" src={img}/>
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePart1;
