import React, { useState } from "react";
import webDev from "../images/web-dev.png";
import robotDev from "../images/robot.png";
import gameDev from "../images/game-dev (3).png";
import ui from "../images/ui-design.png";
import learning from "../images/icons/education-learning-6.svg";
export default function Courses() {
  return (
    // <div class="max-w-[85rem] my-24 mx-auto md:px-6">
    //   <section class="mb-32 text-center">
    // <div class="flex justify-center">
    //   <div class="max-w-[700px] text-center">
    //     <h2 class="mb-6 text-center text-3xl font-bold">Classes</h2>
    //     <p class="mb-16 text-neutral-500 dark:text-neutral-300">
    //       Popular Topic To Learn
    //     </p>
    //   </div>
    // </div>

    //     <div class="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
    //       <div class="mb-12 lg:mb-0 rounded-lg shadow-xl p-6">
    //         <div class="mb-6 inline-block rounded-full bg-blue-300 p-4 text-primary shadow-sm">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="2"
    //             stroke="currentColor"
    //             class="h-6 w-6"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
    //             />
    //           </svg>
    //         </div>
    //         <h5 class="mb-4 text-lg font-bold">Support 24/7</h5>
    //         <p class="text-neutral-500 dark:text-neutral-300">
    //           Laudantium totam quas cumque pariatur at doloremque hic quos quia
    //           eius. Reiciendis optio minus mollitia rerum labore
    //         </p>
    //       </div>

    //       <div class="mb-12 lg:mb-0 rounded-lg shadow-xl p-6">
    //         <div class="mb-6 inline-block rounded-full bg-blue-300 p-4 text-primary shadow-sm">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="2"
    //             stroke="currentColor"
    //             class="h-6 w-6"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
    //             />
    //           </svg>
    //         </div>
    //         <h5 class="mb-4 text-lg font-bold">Safe and solid</h5>
    //         <p class="text-neutral-500 dark:text-neutral-300">
    //           Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam
    //           aspernatur odio soluta, quisquam dolore animi
    //         </p>
    //       </div>

    //       <div class="mb-12 md:mb-0 rounded-lg shadow-xl p-6">
    //         <div class="mb-6 inline-block rounded-full bg-blue-300 p-4 text-primary shadow-sm">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="2"
    //             stroke="currentColor"
    //             class="h-6 w-6"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    //             />
    //           </svg>
    //         </div>
    //         <h5 class="mb-4 text-lg font-bold">Extremely fast</h5>
    //         <p class="text-neutral-500 dark:text-neutral-300">
    //           Enim cupiditate, minus nulla dolor cumque iure eveniet facere
    //           ullam beatae hic voluptatibus dolores exercitationem
    //         </p>
    //       </div>

    //       <div class="mb-12 md:mb-0 rounded-lg shadow-xl p-6">
    //         <div class="mb-6 inline-block rounded-full bg-blue-300 p-4 text-primary shadow-sm">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="2"
    //             stroke="currentColor"
    //             class="h-6 w-6"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
    //             />
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
    //             />
    //           </svg>
    //         </div>
    //         <h5 class="mb-4 text-lg font-bold">Live analytics</h5>
    //         <p class="text-neutral-500 dark:text-neutral-300">
    //           Illum doloremque ea, blanditiis sed dolor laborum praesentium
    //           maxime sint, consectetur atque ipsum ab adipisci
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <>
      <section class="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="max-w-[85rem] mx-auto">
          <div class="flex justify-center">
            <div class="text-center">
              <h2 class="mb-6 text-center text-5xl font-bold text-purple-700">
                Classes
              </h2>
              <p class="text-body-color mb-16  text-2xl font-medium leading-relaxed">
                Popular Topic To Learn
              </p>
            </div>
          </div>
          <div class="-mx-4 flex flex-wrap flex-row">
            <div class="w-full px-4 md:w-1/2 xl:w-1/4">
              <div class="mb-10 overflow-hidden rounded-lg bg-green-300">
                <img src={webDev} alt="image" class="w-full" />
                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9 bg-white">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      WEB DEVELOPMENT
                    </a>
                  </h3>
                  <p class="text-body-color mb-7 text-base leading-relaxed">
                    Master front-end and back-end technologies. Build dynamic
                    websites and web applications using HTML, CSS, JavaScript,
                    React, and Node.js.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 xl:w-1/4">
              <div class="mb-10 overflow-hidden rounded-lg bg-pink-300">
                <img src={robotDev} alt="image" class="w-full" />
                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9 bg-white">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      ROBOTIC AND IOT
                    </a>
                  </h3>
                  <p class="text-body-color mb-7 text-base leading-relaxed">
                    Discover the fascinating world of robotics. Learn
                    electronics, programming, and mechanics to design, build,
                    and program robots for real-world challenges.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 xl:w-1/4">
              <div class="mb-10 overflow-hidden rounded-lg bg-purple-300">
                <img src={ui} alt="image" class="w-full" />
                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9 bg-white">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      UI/UX DESIGN
                    </a>
                  </h3>
                  <p class="text-body-color mb-7 text-base leading-relaxed">
                    Craft intuitive interfaces and seamless user experiences.
                    Develop wireframing, prototyping, and usability testing
                    skills using industry-standard design tools.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 xl:w-1/4">
              <div class="mb-10 overflow-hidden rounded-lg bg-orange-300">
                <img src={gameDev} alt="image" class="w-full" />
                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9 bg-white">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      GAME DEVELOPMENT
                    </a>
                  </h3>
                  <p class="text-body-color mb-7 text-base leading-relaxed">
                    Our course uses Scratch to teach young minds how to create
                    interactive games, fostering creativity and coding skills in
                    a fun environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
