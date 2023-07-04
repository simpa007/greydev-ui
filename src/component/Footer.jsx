import React from "react";

export default function Footer() {
  return (
    <footer class="relative z-10 bg-green-600 pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div class="max-w-[85rem] mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div class="mb-10 w-full">
              <a
                href="javascript:void(0)"
                class="mb-6 inline-block max-w-[160px]"
              >
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                  alt="logo"
                  class="max-w-full"
                />
              </a>
              <p class="text-body-color mb-7 text-base">
                Sed ut perspiciatis undmnis is iste natus error sit amet
                voluptatem totam rem aperiam.
              </p>
              <p class="text-dark flex items-center text-sm font-medium">
                <span class="text-primary mr-3">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    class="fill-current"
                  >
                    <path d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z" />
                    <path d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z" />
                    <path d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z" />
                  </svg>
                </span>
                <span>+012 (345) 678 99</span>
              </p>
            </div>
          </div>
          <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div class="mb-10 w-full">
              <h4 class="text-dark mb-9 text-lg font-semibold">Resources</h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    SaaS Development
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    User Flow
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    User Strategy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div class="mb-10 w-full">
              <h4 class="text-dark mb-9 text-lg font-semibold">Company</h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    About TailGrids
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Contact & Support
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Success History
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Setting & Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div class="mb-10 w-full">
              <h4 class="text-dark mb-9 text-lg font-semibold">Quick Links</h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Premium Support
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Know Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Download App
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div class="mb-10 w-full">
              <h4 class="text-dark mb-9 text-lg font-semibold">Follow Us On</h4>
              <div class="mb-6 flex items-center">
                <a
                  href="javascript:void(0)"
                  class="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    class="fill-current"
                  >
                    <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  class="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    class="fill-current"
                  >
                    <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  class="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    class="fill-current"
                  >
                    <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  class="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    class="fill-current"
                  >
                    <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                  </svg>
                </a>
              </div>
              <p class="text-body-color text-base">&copy; 2025 TailGrids</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1="281"
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.08" />
                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="absolute top-10 right-10 z-[-1]">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_4"
                x1="-1.63917e-06"
                y1="37.5"
                x2="75"
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#13C296" stop-opacity="0.31" />
                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>

    // <section class="flex flex-col h-screen lg:justify-end font-poppins">
    //   <div class="w-full bg-gray-100 border-t dark:border-gray-900 py-4 dark:bg-gray-900">
    //     <div class="max-w-6xl mx-auto">
    //       <div class="justify-center flex-1 max-w-6xl px-4 py-2 mx-auto lg:py-0">
    //         <div class="flex flex-wrap py-4 -mx-3">
    //           <div class="w-full px-4 mb-7 md:w-1/2 lg:w-4/12 lg:mb-0">
    //             <a
    //               href="#"
    //               class="inline-block pb-2 text-lg font-bold dark:text-gray-400"
    //             >
    //               About Company
    //             </a>
    //             <div class="w-16 mb-4 border-b-2 border-blue-600 dark:border-gray-600"></div>
    //             <p class="text-base font-normal leading-6 lg:w-64 dark:text-gray-400">
    //               Lorem ipsum dor amet Lorem ipsum dor amet Lorem ipsum dor amet
    //               Lorem ipsum dor ame{" "}
    //             </p>
    //           </div>
    //           <div class="w-full px-4 md:w-1/4 lg:w-2/12 mb-7 lg:mb-0">
    //             <h2 class="pb-2 text-lg font-bold text-gray-800 dark:text-gray-400 ">
    //               Quick Links
    //             </h2>
    //             <div class="w-16 mb-4 border-b-2 border-blue-600 dark:border-gray-600"></div>
    //             <ul>
    //               <li class="mb-4">
    //                 <a
    //                   href="#"
    //                   class="inline-block text-base font-normal dark:text-gray-400"
    //                 >
    //                   Home
    //                 </a>
    //               </li>
    //               <li class="mb-4">
    //                 <a
    //                   href="#"
    //                   class="inline-block text-base font-normal dark:text-gray-400"
    //                 >
    //                   About Us
    //                 </a>
    //               </li>
    //               <li class="mb-4">
    //                 <a
    //                   href="#"
    //                   class="inline-block text-base font-normal dark:text-gray-400"
    //                 >
    //                   Features
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div class="w-full px-4 mb-7 lg:mb-0 md:w-1/4 lg:w-2/12">
    //             <h2 class="pb-2 text-lg font-bold text-gray-800 dark:text-gray-400">
    //               Features{" "}
    //             </h2>
    //             <div class="w-16 mb-4 border-b-2 border-blue-600 dark:border-gray-600"></div>
    //             <ul>
    //               <li class="mb-4">
    //                 <a
    //                   href="#"
    //                   class="inline-block text-base font-normal dark:text-gray-400"
    //                 >
    //                   Home
    //                 </a>
    //               </li>
    //               <li class="mb-4">
    //                 <a
    //                   href="#"
    //                   class="inline-block text-base font-normal dark:text-gray-400"
    //                 >
    //                   About Us
    //                 </a>
    //               </li>
    //               <li class="mb-4">
    //                 <a
    //                   href="#"
    //                   class="inline-block text-base font-normal dark:text-gray-400"
    //                 >
    //                   Features
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div class="w-full px-4 mb-2 lg:mb-0 md:w-1/3 lg:w-4/12">
    //             <h2 class="pb-2 text-lg font-bold text-gray-800 dark:text-gray-400">
    //               Contact Info
    //             </h2>
    //             <div class="w-16 mb-4 border-b-2 border-blue-600 dark:border-gray-600"></div>
    //             <p class="flex items-center mb-4">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="16"
    //                 height="16"
    //                 fill="currentColor"
    //                 class="w-4 h-4 mr-1 text-gray-800 dark:text-gray-400 bi bi-geo-alt "
    //                 viewBox="0 0 16 16"
    //               >
    //                 <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
    //                 <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    //               </svg>
    //               <span class="text-gray-800 dark:text-gray-400">
    //                 Kathmandu, Nepal
    //               </span>
    //             </p>
    //             <p class="flex items-center mb-4 ">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="16"
    //                 height="16"
    //                 fill="currentColor"
    //                 class="w-4 h-4 mr-2 text-gray-800 dark:text-gray-400 bi bi-envelope"
    //                 viewBox="0 0 16 16"
    //               >
    //                 <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
    //               </svg>
    //               <span class="text-gray-800 dark:text-gray-400">
    //                 info@gmail.com
    //               </span>
    //             </p>
    //             <p class="flex items-center mb-4">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="16"
    //                 height="16"
    //                 fill="currentColor"
    //                 class="w-4 h-4 mr-2 text-gray-800 dark:text-gray-400 bi bi-telephone"
    //                 viewBox="0 0 16 16"
    //               >
    //                 <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
    //               </svg>
    //               <span class="text-gray-800 dark:text-gray-400">
    //                 +977-9836736352
    //               </span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="flex flex-wrap items-center justify-between px-4 mb-4">
    //         <h2 class="mb-4 text-2xl font-semibold tracking-wider text-gray-700 lg:mb-0 dark:text-gray-400">
    //           Subscribe to the latest Newsletters
    //         </h2>
    //         <div class="flex flex-wrap">
    //           <div class="w-full py-1 mb-2 lg:flex-1 lg:py-0 lg:mr-3 lg:mb-0">
    //             <input
    //               type="email "
    //               class="inline-block w-full h-12 px-3 text-gray-700 placeholder-gray-500 border rounded-md dark:placeholder-gray-400 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700"
    //               placeholder="Your email"
    //             />
    //           </div>
    //           <div class="w-full py-1 lg:w-auto lg:py-0">
    //             <a
    //               href="#"
    //               class="inline-block w-full px-5 py-4 font-medium leading-4 text-center text-gray-100 bg-blue-700 rounded-md dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-blue-600"
    //             >
    //               Subscribe
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="px-4 py-6 bg-gray-300 dark:bg-gray-800 dark:text-gray-400">
    //     <div class="flex flex-wrap items-center justify-between max-w-6xl gap-4 mx-auto">
    //       <div class=""> © Copyright 2022 . All Rights Reserved</div>
    //       <div class="flex items-center gap-3">
    //         <a
    //           href="#"
    //           class="mr-4 text-gray-600 dark:text-gray-400 hover:text-blue-700"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             class="w-5 h-5 bi bi-facebook"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
    //           </svg>
    //         </a>
    //         <a
    //           href="#"
    //           class="mr-4 text-gray-600 dark:text-gray-400 hover:text-blue-600"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             class="w-5 h-5 bi bi-twitter"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
    //           </svg>
    //         </a>
    //         <a
    //           href="#"
    //           class="mr-4 text-gray-600 dark:text-gray-400 hover:text-red-600"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             class="w-5 h-5 bi bi-google"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
    //           </svg>
    //         </a>
    //         <a
    //           href="#"
    //           class="mr-4 text-gray-600 dark:text-gray-400 hover:text-blue-600"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             class="w-5 h-5 bi bi-linkedin"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
