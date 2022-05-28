import React from "react";
import b2 from "./image/b2.jpg";
import b3 from "./image/b3.jpg";
import b4 from "./image/b4.jpg";
const HomePart5 = () => {
  return (
    <div class="bg-bgColor h-screen font-prototype ">
      <div
        id="carouselExampleCaptions"
        class="carousel slide py-10"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item   active">
            <section class="max-w-4xl mx-auto px-4   font-prototype">
              <div class="grid grid-cols-1  gap-6">
                <div class="w-full bg-white mt-36  rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row pt-">
                  <div class="flex w-full p-4 border-2 rounded-lg border-dotted m-3 border-red-500">
                    <div class="w-full md:w-2/5 h-60">
                      <img
                        class="object-center object-cover w-full h-full"
                        src={b2}
                        alt="photo"
                      />
                    </div>
                    <div class="w-full md:w-3/5 text-left  pl-24 pt-6 pr-4  space-y-8">
                      <p class="text-2xl  text-textBlue tracking-tight font-normal">
                        Title 1
                      </p>

                      <p class="text-xl text-textBlue leading-relaxed  font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Enim cum quibusdam aut! Labore ipsa facilis .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="carousel-caption d-none d-md-block ">
              <h5 class="text-textBlue text-3xl font-prototype">Title 1</h5>
            </div>
          </div>
          <div class="carousel-item   ">
            <section class="max-w-4xl mx-auto px-4   font-prototype">
              <div class="grid grid-cols-1  gap-6">
                <div class="w-full bg-white mt-36  rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row pt-">
                  <div class="flex w-full p-4 border-2 rounded-lg border-dotted m-3 border-red-500">
                    <div class="w-full md:w-2/5 h-60">
                      <img
                        class="object-center object-cover w-full h-full"
                        src={b3}
                        alt="photo"
                      />
                    </div>
                    <div class="w-full md:w-3/5 text-left  pl-24 pt-6 pr-4  space-y-8">
                      <p class="text-2xl  text-textBlue tracking-tight font-normal">
                        Title 2
                      </p>

                      <p class="text-xl text-textBlue leading-relaxed  font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Enim cum quibusdam aut! Labore ipsa facilis .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="carousel-caption d-none d-md-block ">
              <h5 class="text-textBlue text-3xl font-prototype">Title 2</h5>
            </div>
          </div>
          <div class="carousel-item   ">
            <section class="max-w-4xl mx-auto px-4   font-prototype">
              <div class="grid grid-cols-1  gap-6">
                <div class="w-full bg-white mt-36  rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row pt-">
                  <div class="flex w-full p-4 border-2 rounded-lg border-dotted m-3 border-red-500">
                    <div class="w-full md:w-2/5 h-60">
                      <img
                        class="object-center object-cover w-full h-full"
                        src={b4}
                        alt="photo"
                      />
                    </div>
                    <div class="w-full md:w-3/5 text-left  pl-24 pt-6 pr-4  space-y-8">
                      <p class="text-2xl  text-textBlue tracking-tight font-normal">
                        Title 3
                      </p>

                      <p class="text-xl text-textBlue leading-relaxed  font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Enim cum quibusdam aut! Labore ipsa facilis .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="carousel-caption d-none d-md-block ">
              <h5 class="text-textBlue text-3xl font-prototype">Title 3</h5>
            </div>
          </div>
        </div>
        <div class="mx-20">
          <button
            class="carousel-control-prev ml-86"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon shadow-lg bg-white "
              aria-hidden="true"
            ></span>
            <span class="visually-hidden ">Previous</span>
          </button>
          <button
            class="carousel-control-next mr-86"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon shadow-lg bg-white "
              aria-hidden="true"
            ></span>
            <span class="visually-hidden ">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePart5;
