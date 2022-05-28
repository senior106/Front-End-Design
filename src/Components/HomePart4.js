import React from "react";

const HomePart4 = () => {
  return (
    <div class="bg-textBlue h-screen py-12 ">
      <div class=" text-center font-prototype">
        <p class="  align-center text-3xl tracking-wide text-white pt-4">
          {" "}
          Title 1
        </p>
      </div>
      <section class="">
        <div class="container px-5 py-20 mx-auto">
          <div class="container flex flex-wrap  ">
            <div class=" md:w-1/3 h-full flex flex-col text-center items-center">
              <div class="w-80 h-80 shadow inline-flex items-center justify-center rounded-full border-dashed border-2 border-white  text-white mb-5 flex-shrink-0">
                <div>
                  <h1 class="text-6xl pb-8">1 BN+ </h1>
                  <span class="text-3xl ">Daily Impressions</span>
                </div>
              </div>
            </div>
            <div class=" md:w-1/3 h-full flex flex-col text-center items-center">
              <div class="w-80 h-80 shadow inline-flex items-center justify-center rounded-full bg-white  text-textBlue mb-5 flex-shrink-0">
                <div>
                  <h1 class="text-6xl pb-8">$500K+ </h1>
                  <span class="text-3xl">Paid</span>
                </div>
              </div>
            </div>
            <div class=" md:w-1/3 h-full flex flex-col text-center items-center">
              <div class="w-80 h-80 shadow inline-flex items-center justify-center rounded-full  bg-buttonColor text-white mb-5 flex-shrink-0">
                <div>
                  <h1 class="text-6xl pb-8">8K+ </h1>
                  <span class="text-3xl">Global Publishers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePart4;
