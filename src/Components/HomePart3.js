import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import b1 from "./image/b1.jpg";
import b2 from "./image/b2.jpg";
import b3 from "./image/b3.jpg";
import b4 from "./image/b4.jpg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const HomePart3 = () => {
  let [categories] = useState({
    "POP-UNDER": [
      {
        title: "POP-UNDER",
        text: "This is one of the most popular ads. After user’s click, this ad opens landing page in behind. So, the user experience is not hampered much.",
        img: b1,
      },
    ],
    "BANNER AD": [
      {
        title: "BANNER AD",
        text: "Choose between the available banner formats. Highly effective ad for visibility.",
        img: b2,
      },
    ],
    NATIVE: [
      {
        title: "NATIVE",
        text: "Ad format with the image and the title, that perfectly fits into the content of the site.Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.",
        img: b3,
      },
    ],
    SKIM: [
      {
        title: "SKIM",
        text: "SKIM is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user.SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers.",
        img: b4,
      },
    ],
  });

  return (
    <div class="bg-bgColor  py-16 ">
      <div class=" text-center font-prototype">
        <h1 class="topText uppercase  text-3xl tracking-tigh text-textBlue">
          {" "}
          VERSATILE AD FORMATS
        </h1>
      </div>
      <div className="w-10/12   pt-16  sm:px-0 md:mx-auto">
        <Tab.Group>
          <Tab.List className="flex space-x-14 rounded-xl  p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full   py-3  font-normal leading-5 shadow-xl rounded-full ",
                    "",
                    selected
                      ? "bg-buttonColor   text-white text-2xl "
                      : "text-textBlack  bg-bgColor text-2xl "
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="pb-6">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel key={idx} className={classNames("", "")}>
                {posts.map((post) => (
                  <section class="max-w-6xl mx-auto px-4   font-prototype">
                    <div class="grid grid-cols-1  gap-6">
                      <div class="w-full  rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row pt-14">
                        <div class="w-full md:w-2/5 h-80">
                          <img
                            class="object-center object-cover w-full h-full"
                            src={post.img}
                            alt="photo"
                          />
                        </div>
                        <div class="w-full md:w-3/5 text-left  pl-24 pt-4 pr-4  space-y-8">
                          <p class="text-2xl uppercase text-buttonColor tracking-tight font-normal">
                            {post.title}
                          </p>

                          <p class="text-xl text-textBlack leading-relaxed  font-normal">
                            {post.text}
                          </p>
                          <a
                            href="#"
                            class="flex justify-start align-end space-x-2 font-normal pt-8"
                          >
                            <p class="text-xl text-textBlue">Learn more</p>
                            <div class="text-gray-500 hover:text-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 pt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default HomePart3;
