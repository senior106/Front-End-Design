import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import img from "./image/img.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const HomePart1 = () => {
  let [categories] = useState({
    LOGIN: [],
    "SIGN UP": [],
  });
  return (
    <div class="h-screen bg-bgColor">
      <header class="font-prototype">
        <div class="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
          <a
            href="#"
            class="flex  font-bold items-center text-textBlack mb-4 md:mb-0"
          >
            <span class="ml-3 text-3xl">LOGO</span>
          </a>
          <div class="md:ml-auto flex flex-wrap items-center  justify-center">
            <a href="#" class=" text-green-500 mr-2 text-bold">
              BN
            </a>
            <span class="mr-2">/</span>
            <a href="#" class="mr-5 text-textBlack">
              EN
            </a>
          </div>
        </div>
      </header>
      <div class=" font-prototype">
        <div class="container mx-auto flex font-normal flex-wrap px-5 uppercase">
          <nav class="flex w-5/6 flex-wrap items-start text-md pl-5">
            <a href="#" class="mr-12 tracking-tigh text-buttonColor">
              Home
            </a>
            <a href="#" class="mr-12 tracking-tigh text-textBlue">
              advertisers
            </a>
            <a href="#" class="mr-12 tracking-tigh text-textBlue">
              publishers
            </a>
            <a href="#" class="mr-12 tracking-tigh text-textBlue">
              influencers
            </a>
            <a href="#" class="mr-12 tracking-tigh text-textBlue">
              ad formats
            </a>
            <a href="#" class="mr-12 tracking-tigh text-textBlue">
              blog
            </a>
            <a href="#" class="tracking-tigh text-textBlue">
              contact us
            </a>
          </nav>

          <div class="lg:w-1/6 inline-flex lg:justify-end ml-5 lg:ml-0">
            <div className="w-full max-w-md px-2 -mt-3 ">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-full bg-white p-2 shadow-sm">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-full py-1 text-sm font-medium bg-buttonColor leading-5 text-textBlack",
                          " ",
                          selected
                            ? "bg-buttonColor text-white shadow-lg"
                            : "text-textBlack bg-white/[0.12] "
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
      <section class="font-prototype overflow-hidden">
        <div class=" px-5 py-14 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 my-auto">
              <h1 class="text-textBlue text-3xl title-font font-medium mb-4">
                Best News Side Ever
              </h1>
              <h2 class="text-xl title-font text-textBlack tracking-tigh">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sint id obcaecati voluptatibus autem eum dolore nostrum soluta
                fugiat laudantium adipisci, et dolores incidunt quas earum
                quidem quisquam dolor facere!
              </h2>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 animate-pulse  w-full lg:h-auto h-64 object-cover object-center rounded"
              src={img}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePart1;
