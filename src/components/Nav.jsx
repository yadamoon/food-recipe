import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = () => {
  const { signedIn } = useSelector((state) => state.auth)
  const [activeStatus, setActiveStatus] = useState(1)

  return (
    <div className="w-full">
      <div className="bg-white ">
        <motion.ul animate={{ x: 10 }} className=" flex justify-end mx-3 ">
          <li
            onClick={() => setActiveStatus(1)}
            className={
              activeStatus == 1
                ? 'text-sm border-teal-700 pt-3 rounded-t text-teal-700 mr-12 col-span-1'
                : 'text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-teal-700 cursor-pointer'
            }
          >
            <Link to="/" className="flex items-center mb-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-home"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="5 12 3 12 12 3 21 12 19 12" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
              </span>
              <span className=" hidden ml-1  md:block  font-normal">Home</span>
            </Link>
            {activeStatus == 1 && (
              <div className="w-full h-1 bg-teal-700 rounded-t-md" />
            )}
          </li>

          {signedIn && (
            <li
              onClick={() => setActiveStatus(2)}
              className={
                activeStatus == 2
                  ? 'text-sm border-teal-700 pt-3 rounded-t text-teal-700 mr-12 col-span-1'
                  : 'text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-teal-700 cursor-pointer'
              }
            >
              <Link to="/listRecipe" className="flex items-center mb-3">
                <span>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H21C21.4142 9.25 21.75 9.58579 21.75 10C21.75 10.4142 21.4142 10.75 21 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H10C10.4142 13.25 10.75 13.5858 10.75 14C10.75 14.4142 10.4142 14.75 10 14.75H3C2.58579 14.75 2.25 14.4142 2.25 14ZM13.4306 14.5119C13.7001 14.1974 14.1736 14.161 14.4881 14.4306L17.5 17.0122L20.5119 14.4306C20.8264 14.161 21.2999 14.1974 21.5694 14.5119C21.839 14.8264 21.8026 15.2999 21.4881 15.5694L17.9881 18.5694C17.7072 18.8102 17.2928 18.8102 17.0119 18.5694L13.5119 15.5694C13.1974 15.2999 13.161 14.8264 13.4306 14.5119ZM2.25 18C2.25 17.5858 2.58579 17.25 3 17.25H10C10.4142 17.25 10.75 17.5858 10.75 18C10.75 18.4142 10.4142 18.75 10 18.75H3C2.58579 18.75 2.25 18.4142 2.25 18Z"
                        fill="#1e8717"
                      />{' '}
                    </g>
                  </svg>
                </span>
                <span className=" hidden ml-1 md:block font-normal">
                  Recipes
                </span>
              </Link>
              {activeStatus == 2 && (
                <div className="w-full h-1 bg-teal-700 rounded-t-md" />
              )}
            </li>
          )}

          <li
            onClick={() => setActiveStatus(3)}
            className={
              activeStatus == 3
                ? 'text-sm border-teal-700 pt-3 rounded-t text-teal-700 mr-12'
                : 'text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-teal-700 cursor-pointer'
            }
          >
            <Link to="/contact" className="flex items-center mb-3">
              <span>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--fxemoji"
                  preserveAspectRatio="xMidYMid meet"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#36c446"
                      d="M63.4 58.9c0-2.6-.4-3.3-3.2-3.5c-.5 0-.8-.4-.8-.9v-1.3c0-.3.2-.7.5-.8c3.5-2.4 5.8-6.4 5.8-10.9l.1-.6c.1-.4.4-.7.8-.8c1.2-.3 2.1-1.1 2.4-2.3c.3-1.7-.8-3.2-2.4-3.5c-.3-.1-.4-.3-.4-.6l.4-5.2c.1-20.2-29-20.5-29.2-.4l.5 5.7c0 .2-.1.4-.3.5c-1.3.5-2.2 2-1.8 3.5c.3 1.1 1.3 1.8 2.5 2.1c.5.1.8.5.8 1v.5c0 4.6 2.4 8.7 6 11.1c.2.1.2.3.2.4v1.6c0 .4-.3.8-.8.8c-3 .2-3.3.9-3.4 3.4c-.1.2-.1.3-.2.4c-4.9 2.1-8.5 5-8.4 12.1c0 .4.4.8.8.8h37.9c.4 0 .8-.3.8-.8c.1-7.1-3.3-9.8-8.3-11.9c-.1-.2-.2-.3-.3-.4z"
                    />

                    <path
                      fill="#145d20"
                      d="M38 56c0-3.2-.4-4-3.9-4.3c-.6 0-1-.5-1-1.1V49c0-.4.2-.8.6-1c4.3-2.9 7.1-7.8 7.1-13.3l.1-.7c.1-.5.5-.9 1-1c1.4-.3 2.6-1.4 2.9-2.8c.4-2.1-1-3.9-2.9-4.3c-.3-.1-.5-.4-.5-.7l.4-6.4C41.9-5.7 6.5-6 6.3 18.4l.6 7c0 .3-.1.5-.4.6c-1.6.6-2.7 2.4-2.2 4.3c.3 1.3 1.6 2.2 3 2.6c.6.1 1 .6 1 1.2v.6c0 5.6 2.9 10.6 7.3 13.5c.2.1.3.3.3.5v2c0 .5-.4 1-1 1c-3.6.2-4 1.1-4.1 4.2c-.1.1-.2.3-.3.4C4.5 58.8.1 62.4.3 71.1c0 .5.4.9 1 .9h46.2c.5 0 1-.4 1-.9c.2-8.7-4.1-11.9-10.1-14.5c-.2-.3-.3-.4-.4-.6z"
                    />
                  </g>
                </svg>
              </span>
              <span className=" hidden ml-1 md:block font-normal">contact</span>
            </Link>
            {activeStatus == 3 && (
              <div className="w-full h-1 bg-teal-700 rounded-t-md" />
            )}
          </li>

          {signedIn && (
            <li
              onClick={() => setActiveStatus(4)}
              className={
                activeStatus == 4
                  ? 'text-sm border-teal-700 pt-3 rounded-t text-teal-700 mr-12'
                  : 'text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-teal-700 cursor-pointer'
              }
            >
              <Link to="/settings" className="flex items-center mb-3">
                <span>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="#308320"
                        stroke-width="1.5"
                      />{' '}
                      <path
                        opacity="0.5"
                        d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z"
                        stroke="#308320"
                        stroke-width="1.5"
                      />{' '}
                    </g>
                  </svg>
                </span>
                <span className="hidden ml-1 md:block  font-normal">
                  Settings
                </span>
              </Link>
              {activeStatus == 4 && (
                <div className="w-full h-1 bg-teal-700 rounded-t-md" />
              )}
            </li>
          )}

          {signedIn && (
            <li
              onClick={() => setActiveStatus(5)}
              className={
                activeStatus == 5
                  ? 'text-sm border-teal-700 pt-3 rounded-t text-teal-700 mr-12'
                  : 'text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-teal-700 cursor-pointer'
              }
            >
              <Link to="/Add_New_Recipe" className="flex items-center mb-3">
                <span>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 11V14M12 14V17M12 14H15M12 14H9M6 7H18M8 5H16M6 9H18C19.1046 9 20 9.89543 20 11V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V11C4 9.89543 4.89543 9 6 9Z"
                        stroke="#2ea31f"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{' '}
                    </g>
                  </svg>
                </span>
                <span className="hidden ml-1 md:block  font-normal">Add</span>
              </Link>
              {activeStatus == 5 && (
                <div className="w-full h-1 bg-teal-700 rounded-t-md" />
              )}
            </li>
          )}

          <li
            onClick={() => setActiveStatus(6)}
            className={
              activeStatus == 6
                ? 'text-sm border-teal-700 pt-3 rounded-t text-teal-700 mr-12'
                : 'text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-teal-700 cursor-pointer'
            }
          >
            <Link to="/help" className="flex items-center mb-3">
              <span>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 512 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <title>about-filled</title>{' '}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="drop"
                        fill="#268748"
                        transform="translate(42.666667, 42.666667)"
                      >
                        <path
                          d="M213.333333,3.55271368e-14 C331.154987,3.55271368e-14 426.666667,95.51168 426.666667,213.333333 C426.666667,331.153707 331.154987,426.666667 213.333333,426.666667 C95.51296,426.666667 3.55271368e-14,331.153707 3.55271368e-14,213.333333 C3.55271368e-14,95.51168 95.51296,3.55271368e-14 213.333333,3.55271368e-14 Z M234.713387,192 L192.04672,192 L192.04672,320 L234.713387,320 L234.713387,192 Z M213.55008,101.333333 C197.99616,101.333333 186.713387,112.5536 186.713387,127.704107 C186.713387,143.46752 197.698773,154.666667 213.55008,154.666667 C228.785067,154.666667 240.04672,143.46752 240.04672,128 C240.04672,112.5536 228.785067,101.333333 213.55008,101.333333 Z"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="hidden  ml-1 md:block  font-normal ">Help</span>
            </Link>
            {activeStatus == 6 && (
              <div className="w-full h-1 bg-teal-700 rounded-t-md" />
            )}
          </li>
        </motion.ul>
      </div>
    </div>
  )
}

export default Nav
