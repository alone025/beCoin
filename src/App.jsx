function App() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-[#080520] min-h-screen text-white relative overflow-hidden">
      {/* <div
        class="
  rounded-[1081.754px]
  bg-[rgba(84,59,213,0.30)]
  blur-[222.34959411621094px]
  w-[1081.754px]
  h-[961.897px]
  rotate-[59.563deg]
  
  aspect-[352/313]
  absolute
  left-[-824px]
  top-[-257px]
"
      ></div> */}
      <div className="mx-auto max-w-[1140px] px-2.5 flex justify-end z-40 relative">
        <div className="contant-fixed flex flex-col items-end gap-2 sm:gap-3 md:gap-4 lg:gap-[18px] fixed bottom-10 z-[100]">
          <img
            src="/scrollIcon.svg"
            alt="scroll"
            className="mr-1 md:mr-1.5 lg:mr-2 cursor-pointer relative z-40 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-11 md:h-11 lg:w-12 lg:h-12 "
            onClick={() => scrollToTop()}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="81"
            viewBox="0 0 80 81"
            fill="none"
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px]"
          >
            <circle cx="40" cy="40.75" r="40" fill="#C4C4C4" />
          </svg>
        </div>
      </div>
      <img src="/bg1.svg" alt="" className="absolute" />
      <img src="/bg2.svg" alt="" className="absolute right-0 top-[390px] sm:hidden" />
      <div className="content max-w-[1140px] px-2.5 mx-auto relative">
        <div className="header pb-[276px] min-h-screen flex flex-col pt-[68px] md:pt-[88px] lg:pt-[114px] xl:pt-[154px]">
          <div className="flex lg:hidden justify-center">
            <img
              src="/header-svg.svg"
              alt="arxideya"
              className="relative lg:right-[-49px] w-full max-w-[784px] lg:hidden"
            />
          </div>
          <div className="txts px-2.5 md:px-0 mt-9 lg:mt-0 text-center sm:text-left">
            <h1 className="font-alegreya text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[110%]">
              Название страницы
            </h1>
          </div>
          <div className="img-text px-2.5 md:px-0 flex lg:flex-row-reverse lg:justify-between">
            <img
              src="/header-svg.svg"
              alt="arxideya"
              className="relative right-[-49px] max-w-[784px] hidden lg:block"
            />
            <div className="ptxts h-max mt-4 md:mt-10 lg:mt-[106.5px] ml-0.5 flex flex-col gap-3 pl-1/2 border-l-[0.75px] border-l-solid border-white w-max">
              <button className="outline-noe border-none bg-transparent text-white py-1 sm:py-2 pl-4 sm:px-5 lg:px-7 xl:px-9 font-alegreya-sans font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[110%]">
                Название раздела
              </button>
              <button className="outline-noe border-none bg-transparent text-white py-1 sm:py-2 pl-4 sm:px-5 lg:px-7 xl:px-9 font-alegreya-sans font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-[110%]">
                Название раздела
              </button>
            </div>
          </div>
        </div>

        <section className="sm:mt-[106.82px] pl-2 md:pl-0">
          <div className="title flex gap-3 xl:gap-6 items-center mb-4 xl:mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="36"
              viewBox="0 0 17 36"
              fill="none"
              className="
  h-4 w-max    
  sm:h-5 
  md:h-6 
  lg:h-7
  xl:h-9 xl:w-[17px]
"
            >
              <path
                d="M16.75 18L0.4375 35.2123V0.787745L16.75 18Z"
                fill="#543BD5"
              />
            </svg>
            <h2 className="font-alegreya text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold leading-[110%]">
              Название раздела
            </h2>
          </div>
          <p className="font-alegreya-sans text-sm sm:text-base md:text-lg xl:text-xl font-normal leading-[110%] w-full">
            Текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст текст Текст текст текст текст текст
            текст текст текст текст текст текст текст текст текст текст текст
            текстТекст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст текст текстТекст текст текст текст
            текст текст текст текст текст текст текст текст текст текст текст
            текст текст
          </p>
          <div className="tp px-3 sm:px-4 py-3 bg-[#543BD54D] rounded-[18px] mt-4 md:mt-5 xl:mt-6">
            <p className="font-alegreya-sans text-sm sm:text-base md:text-lg xl:text-xl font-normal leading-[110%] w-full">
              Текст текст текст текст текст текст текст текст текст текст текст
              текст текст текст текст текст текстТекст текст текст текст текст
              текст текст текст текст текст текст текст текст текст текст текст
              текстТекст текст текст текст текст текст текст текст текст текст
              текст текст текст текст текст текст текстТекст текст текст текст
              текст текст текст текст текст текст текст текст текст текст текст
              текст текстТекст текст текст текст текст текст текст текст текст
              текст текст текст текст текст текст текст текстТекст текст текст
              текст текст текст текст текст текст текст текст текст текст текст
              текст текст текстТекст текст текст текст текст текст текст текст
              текст текст текст текст текст текст текст текст текст
            </p>
          </div>
        </section>
        <section className="mt-[56px] md:mt-[70px] lg:mt-[80px] xl:mt-[100px] pl-2 md:pl-0">
          <div className="title flex gap-3 sm:gap-4 lg:gap-5 xl:gap-6 items-center mb-4 xl:mb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="36"
              viewBox="0 0 17 36"
              fill="none"
              className="
  h-4 w-max    
  sm:h-5 
  md:h-6 
  lg:h-7
  xl:h-9 xl:w-[17px]
"
            >
              <path
                d="M16.75 18L0.4375 35.2123V0.787745L16.75 18Z"
                fill="#543BD5"
              />
            </svg>
            <h2 className="font-alegreya text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold leading-[110%]">
              Название раздела
            </h2>
          </div>

          <div className="both flex flex-col-reverse lg:flex-row gap-4">
             <div className="both4 sm:hidden flex-1/2 rounded-[18px] border-[1.5px] border-solid border-[#FFFFFF1A] bg-[radial-gradient(89.49%_87.25%_at_50%_28.41%,_rgba(8,_5,_32,_0.50)_50%,_rgba(84,_59,_213,_0.50)_100%)] backdrop-blur-[4.780799865722656px]">
              <div className="header p-4 sm:p-5 lg:px-6 lg:pt-6 pb-[31px] sm:pb-8 lg:pb-[34px] relative">
                <div className="badge top-[-13px] right-6 md:right-7 lg:right-8 font-alegreya-sans text-[11px] sm:text-xs md:text-sm lg:text-base leading-[110%] font-normal text-[#99D9FC] px-2 md:px-3 py-1 bg-[#99D9FC66] rounded-[50px] border border-solid border-[#99D9FC] w-max absolute">
                  Текст-текст
                </div>
                <div className="tt px-[18px] py-[9px] border-l-[1.5px] border-l-solid border-l-[#BB63FF]">
                  <h3 className="font-alegreya-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-[110%]">
                    Название блока
                  </h3>
                </div>
              </div>
              <div className="content p-4 md:p-5 lg:p-6 border-t-[1.5px] border-t-solid border-t-[#FFFFFF0D]">
                <p className="font-alegreya-sans text-sm sm:text-base lg:text-lg xl:text-xl font-normal leading-[110%] w-full">
                Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                </p>
               
              </div>
            </div>

     <div className="both3 sm:hidden flex-1/2 rounded-[18px] border-[1.5px] border-solid border-[#FFFFFF1A] bg-[radial-gradient(89.49%_87.25%_at_50%_28.41%,_rgba(8,_5,_32,_0.50)_50%,_rgba(84,_59,_213,_0.50)_100%)] backdrop-blur-[4.780799865722656px]">
              <div className="header p-4 sm:p-5 lg:px-6 lg:pt-6 pb-[31px] sm:pb-8 lg:pb-[34px] relative">
                <div className="badge top-[-13px] right-6 md:right-7 lg:right-8 font-alegreya-sans text-[11px] sm:text-xs md:text-sm lg:text-base leading-[110%] font-normal text-[#99D9FC] px-2 md:px-3 py-1 bg-[#99D9FC66] rounded-[50px] border border-solid border-[#99D9FC] w-max absolute">
                  Текст-текст
                </div>
                <div className="tt px-[18px] py-[9px] border-l-[1.5px] border-l-solid border-l-[#BB63FF]">
                  <h3 className="font-alegreya-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-[110%]">
                    Название блока
                  </h3>
                </div>
              </div>
              <div className="content p-4 md:p-5 lg:p-6 border-t-[1.5px] border-t-solid border-t-[#FFFFFF0D]">
                <p className="font-alegreya-sans text-sm sm:text-base lg:text-lg xl:text-xl font-normal leading-[110%] w-full">
                Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
                </p>
               
              </div>
            </div>

            <div className="both1 flex-1/2 rounded-[18px] border-[1.5px] border-solid border-[#FFFFFF1A] bg-[radial-gradient(89.49%_87.25%_at_50%_28.41%,_rgba(8,_5,_32,_0.50)_50%,_rgba(84,_59,_213,_0.50)_100%)] backdrop-blur-[4.780799865722656px]">
              <div className="header p-4 sm:p-5 lg:px-6 lg:pt-6 pb-[31px] sm:pb-8 lg:pb-[34px] relative">
                <div className="badge top-[-13px] right-6 md:right-7 lg:right-8 font-alegreya-sans text-[11px] sm:text-xs md:text-sm lg:text-base leading-[110%] font-normal text-[#BB63FF] px-2 md:px-3 py-1 bg-[#543BD566] rounded-[50px] border border-solid border-[#BB63FF] w-max absolute">
                  Текстовый
                </div>
                <div className="tt px-[18px] py-[9px] border-l-[1.5px] border-l-solid border-l-[#BB63FF]">
                  <h3 className="font-alegreya-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-[110%]">
                    Название блока
                  </h3>
                </div>
              </div>
              <div className="content p-4 md:p-5 lg:p-6 border-t-[1.5px] border-t-solid border-t-[#FFFFFF0D]">
                <p className="font-alegreya-sans text-sm sm:text-base lg:text-lg xl:text-xl font-normal leading-[110%] w-full">
                  Текст текст текст текст текст текст текст текст текст текст
                  текст текст текст текст текст текст{" "}
                  <span className="sm:hidden">
                    Текст текст текст текст текст текст текст текст текст текст
                    текст текст текст текст текст текст текст текст текст текст
                    Текст текст текст текст{" "}
                  </span>
                </p>
                <div className="tp p-3 md:p-4 bg-[#543BD54D] rounded-[18px] mt-2 md:mt-4">
                  <p className="font-alegreya-sans text-center sm:text-start text-sm sm:text-base lg:text-lg xl:text-xl font-normal leading-[110%] w-full">
                    Текст текст текст текст текст текст текст текст Текст текст
                    текст текст текст текст текст текст Текст текст текст текст
                    текст текст текст текст Текст текст текст текст текст текст
                    текст текст Текст текст текст текст текст текст текст текст
                    Текст текст текст текст текст текст текст текст Текст текст
                    текст текст текст текст текст текст Текст текст{" "}
                    <span className="hidden sm:block">
                      текст текст текст текст текст текст Текст текст текст
                      текст текст текст текст текст Текст текст текст текст
                      текст текст текст текст Текст текст текст текст текст
                      текст текст текст Текст текст текст текст текст{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="both2 flex-1/2 pb-9 lg:pb-0 rounded-[18px] border-[1.5px] border-solid border-[#FFFFFF1A] bg-[radial-gradient(89.49%_87.25%_at_50%_28.41%,_rgba(8,_5,_32,_0.50)_50%,_rgba(84,_59,_213,_0.50)_100%)] backdrop-blur-[4.780799865722656px]">
              <div className="header p-4 md:p-5 lg:px-6 lg:pt-6 pb-[31px]  md:pb-3 relative">
                <div className="badge w-max md:w-[68px] lg:w-[88px] xl:w-[108px] text-center top-[-13px] right-6 md:right-7 lg:right-8 font-alegreya-sans text-[11px] sm:text-xs md:text-sm lg:text-base leading-[110%] font-normal text-[#99D9FC] px-2 md:px-3 py-1 bg-[#99D9FC66] rounded-[50px] border border-solid border-[#99D9FC] absolute">
                  Текст
                </div>
                <div className="tt px-[18px] py-[9px] border-l-[1.5px] border-l-solid border-l-[#BB63FF]">
                  <h3 className="font-alegreya-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-[110%]">
                    Название блока
                  </h3>
                  <p className="font-alegreya-sans hidden md:block text-sm lg:text-base font-normal ">
                    как текст сохраняет текст текстовый
                  </p>
                </div>
              </div>
              <div className="content p-4 md:p-5 lg:p-6 border-t-[1.5px] border-t-solid border-t-[#FFFFFF0D]">
                <p className="font-alegreya-sans text-sm sm:text-base lg:text-lg xl:text-xl font-normal leading-[110%] w-full">
                  Текст текст текст текст текст текст текст текст текст текст
                  текст текст текст текст текст текст текст текст текст Текст
                  текст текст текст текст текст текст текст текст текст текст
                  текст текст текст текст текст текст текст текст
                </p>
                <p className="font-alegreya-sans text-sm sm:text-base lg:text-lg xl:text-xl font-normal leading-[110%] w-full mt-2 md:mt-4">
                  Текст текст текст текст текст текст текст текст текст текст
                  текст текст текст текст текст текст текст текст текстТекст
                  текст текст текст текст текст текст текст текст текст текст
                  текст текст текст текст текст текст текст текст
                </p>
                <div className="cdr mt-2 md:mt-4 flex flex-col sm:flex-row gap-2">
                  <div className="lft font-alegreya-sans text-[11px] sm:text-xs md:text-sm font-normal leading-[110%] w-full">
                    <p>
                      Текст текст текст текст текст текст текст текст текст
                      текст текст текст текст:
                    </p>
                    <ul className="list-disc list-inside ml-2">
                      <li>текст</li>
                      <li>текст</li>
                      <li>текст</li>
                      <li>текст</li>
                    </ul>
                    <p className="mt-3 md:mt-4">
                      Текст текст текст текст текст текст текст текст текст
                      текст текст текст текст текст текст текст текст текст
                      текст текст{" "}
                      <span className="sm:hidden">
                        текст текст текст текст текст текст текст текст текст
                        текст текст текст текст текст текст текст текст текст
                        текст текст текстТекст текст текст текст текст текст
                        текст текст текст текст текст текст текст текст текст
                        текст текст текст текст текст текстТекст текст текст
                        текст текст текст текст текст текст текст текст текст
                        текст текст текст текст текст текст текст текст текст
                      </span>
                    </p>
                  </div>
                  <div className="rgt p-3 md:p-4 bg-[#543BD54D] rounded-[18px] flex flex-col items-center">
                    <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-[240px] font-alegreya-sans font-normal leading-[110%] mb-2 md:mb-3 text-white text-center">
                      Текст текст текст — текст текст текст текст
                    </h3>

                    <div className="bg-[#3b2998] p-1 rounded-[28px] w-max">
                      <button className="font-alegreya-sans text-sm cursor-pointer font-normal leading-[110%] rounded-[28px] py-3 px-7 text-white bg-[radial-gradient(44.74%_44.74%_at_50%_100%,_#BB63FF_0%,_#543BD5_100%)] border-[1.5px] border-solid border-[#BB63FF] shadow-[0_1px_2px_0_rgba(16,_24,_40,_0.05)]">
                        Текст
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="footer mt-[75px] md:mt-[100px] lg:mt-[150px] xl:mt-[200px] mb-[30px] flex justify-between sm:pt-2 lg:pt-3 border-t-[0.5px] border-t-solid border-t-white">
          <div className="lg flex flex-row items-center gap-[2.7px] sm:gap-1 md:gap-2 lg:gap-3 font-alegreya-sans font-normal text-[8px] sm:text-[10px] md:text-xs lg:text-sm leading-[110%]">
            <p>Текст |</p>
            <svg
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[6px] mb-0.5 sm:w-[12px]    md:mb-0       md:w-[18px]            lg:w-[27px]"
            >
              <g clipPath="url(#clip0_2001_57)">
                <circle
                  cx="13.125"
                  cy="13.9502"
                  r="12.75"
                  stroke="white"
                  strokeWidth="0.75"
                />
                <path
                  d="M12.684 23.5072C10.98 23.5072 9.504 23.1112 8.256 22.3192C7.008 21.5032 6.048 20.3992 5.376 19.0072C4.704 17.6152 4.368 16.0192 4.368 14.2192C4.368 12.4432 4.716 10.8592 5.412 9.46719C6.132 8.05119 7.14 6.94719 8.436 6.15519C9.732 5.33919 11.256 4.9312 13.008 4.9312C14.616 4.9312 15.996 5.32719 17.148 6.11919C18.3 6.91119 19.164 7.85919 19.74 8.96319L16.968 9.97119C16.584 9.25119 16.02 8.67519 15.276 8.24319C14.532 7.81119 13.704 7.5952 12.792 7.5952C11.904 7.5952 11.064 7.83519 10.272 8.31519C9.48 8.77119 8.844 9.49119 8.364 10.4752C7.884 11.4352 7.644 12.6712 7.644 14.1832C7.644 15.6712 7.884 16.9192 8.364 17.9272C8.868 18.9112 9.504 19.6432 10.272 20.1232C11.064 20.6032 11.904 20.8432 12.792 20.8432C13.776 20.8432 14.628 20.6272 15.348 20.1952C16.092 19.7392 16.656 19.1752 17.04 18.5032L19.812 19.5112C19.14 20.6632 18.18 21.6232 16.932 22.3912C15.684 23.1352 14.268 23.5072 12.684 23.5072Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2001_57">
                  <rect
                    width="26.25"
                    height="26.25"
                    fill="white"
                    transform="translate(0 0.825195)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p>2025</p>
            <p>BeCoin All rights reserved</p>
          </div>
          <div className="sclinks flex flex-row gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="w-5 sm:w-6  md:w-7  lg:w-[30px]"
            >
              <g clipPath="url(#clip0_2001_45)">
                <circle
                  cx="15"
                  cy="15"
                  r="14.625"
                  stroke="white"
                  strokeWidth="0.75"
                />
                <path
                  d="M21.7502 7.52354L7.93651 11.4142C7.81892 11.4463 7.7141 11.514 7.63633 11.6078C7.55855 11.7017 7.51161 11.8173 7.50189 11.9388C7.49217 12.0603 7.52014 12.1819 7.582 12.2869C7.64386 12.392 7.7366 12.4754 7.84758 12.5258L14.1912 15.5272C14.3155 15.5847 14.4153 15.6845 14.4728 15.8088L17.4742 22.1524C17.5246 22.2634 17.608 22.3561 17.7131 22.418C17.8181 22.4799 17.9397 22.5078 18.0612 22.4981C18.1827 22.4884 18.2983 22.4414 18.3922 22.3637C18.486 22.2859 18.5537 22.1811 18.5858 22.0635L22.4765 8.2498C22.5059 8.14899 22.5078 8.04212 22.4817 7.94036C22.4557 7.83861 22.4028 7.74574 22.3285 7.67147C22.2543 7.59721 22.1614 7.54429 22.0596 7.51826C21.9579 7.49223 21.851 7.49406 21.7502 7.52354V7.52354Z"
                  stroke="white"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3837 15.6155L17.7333 12.2659"
                  stroke="white"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2001_45">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              className="w-5 sm:w-6  md:w-7  lg:w-[30px]"

              fill="none"
            >
              <g clipPath="url(#clip0_2001_50)">
                <circle
                  cx="15"
                  cy="15"
                  r="14.625"
                  stroke="white"
                  strokeWidth="0.75"
                />
                <path
                  d="M8.54818 18.8241C7.61665 17.2525 7.29081 15.3949 7.63184 13.6C7.97286 11.8052 8.95729 10.1965 10.4003 9.07609C11.8433 7.95563 13.6457 7.40042 15.4691 7.51469C17.2925 7.62896 19.0114 8.40485 20.3033 9.6967C21.5951 10.9886 22.371 12.7075 22.4853 14.5309C22.5996 16.3543 22.0444 18.1566 20.9239 19.5997C19.8035 21.0427 18.1948 22.0271 16.4 22.3682C14.6051 22.7092 12.7475 22.3834 11.1759 21.4518V21.4518L8.57946 22.187C8.47308 22.2181 8.36029 22.22 8.25291 22.1925C8.14554 22.1651 8.04752 22.1092 7.96915 22.0308C7.89078 21.9525 7.83493 21.8545 7.80747 21.7471C7.78 21.6397 7.78192 21.5269 7.81304 21.4205L8.54818 18.8241Z"
                  stroke="white"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.8929 19.3718C16.0697 19.3739 15.2541 19.2133 14.4932 18.8992C13.7322 18.5851 13.0408 18.1238 12.4587 17.5417C11.8766 16.9596 11.4153 16.2682 11.1012 15.5072C10.7871 14.7462 10.6265 13.9307 10.6286 13.1075C10.6306 12.5281 10.8623 11.9731 11.2727 11.5642C11.6831 11.1552 12.2389 10.9256 12.8183 10.9256V10.9256C12.9139 10.9248 13.008 10.9498 13.0905 10.998C13.1731 11.0461 13.2412 11.1157 13.2876 11.1993L14.2026 12.7947C14.257 12.8917 14.2849 13.0013 14.2836 13.1125C14.2822 13.2237 14.2516 13.3325 14.1948 13.4282L13.4596 14.656C13.8362 15.4937 14.5067 16.1642 15.3444 16.5408L16.5722 15.8056C16.6679 15.7488 16.7767 15.7182 16.8879 15.7168C16.9991 15.7155 17.1087 15.7434 17.2057 15.7978L18.8011 16.7128C18.8847 16.7592 18.9542 16.8273 19.0024 16.9099C19.0506 16.9924 19.0756 17.0865 19.0748 17.1821C19.0728 17.7608 18.8425 18.3155 18.434 18.7254C18.0254 19.1354 17.4717 19.3677 16.8929 19.3718V19.3718Z"
                  stroke="white"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2001_50">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
