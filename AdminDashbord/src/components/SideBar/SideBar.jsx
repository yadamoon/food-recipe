import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    // <div className="bg-white h-screen ">
    <div className="w-96 bg-white  md:h-screen flex-col justify-between hidden sm:flex ">
      <div className="mt-0 bg-teal-700 p-3 ">
        <h1 className="text-white font-bold text-3xl justify-center text-center uppercase">
          Admin Panel
        </h1>
        <hr className="p-1" />
      </div>
      <div className="px-8 mb-[100vh] mt-4 ">
        <ul className="mb-3">
          <li className="flex w-full justify-between text-gray-500 hover:text-white hover:bg-teal-800 p-2 rounded cursor-pointer items-center mb-6">
            <Link to="/" className="flex items-center">
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width={18}
                height={18}
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
                xml:space="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      fill="#199c07"
                      d="M33,27.102V17c0-0.552-0.448-1-1-1s-1,0.448-1,1v10.102C31.323,27.035,31.657,27,32,27 S32.677,27.035,33,27.102z"
                    />
                    <path
                      fill="#199c07"
                      d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,37c-2.757,0-5-2.243-5-5 c0-1.629,0.795-3.064,2.004-3.979L29,28.008V17c0-1.654,1.346-3,3-3s3,1.346,3,3v11l-0.004,0.021C36.205,28.936,37,30.371,37,32 C37,34.757,34.757,37,32,37z M55.722,46.851l-6.035-3.484c-0.479-0.277-0.643-0.888-0.366-1.366s0.887-0.643,1.366-0.366 l4.301,2.483c0.745-1.405,1.361-2.888,1.842-4.429l-1.906-0.511c-0.529-0.143-0.85-0.69-0.707-1.225 c0.146-0.536,0.689-0.848,1.225-0.707l1.902,0.51c0.351-1.538,0.563-3.127,0.626-4.756H53c-0.553,0-1-0.447-1-1s0.447-1,1-1h4.975 c-0.062-1.629-0.275-3.218-0.625-4.758l-1.909,0.512c-0.533,0.144-1.082-0.174-1.225-0.707c-0.144-0.534,0.174-1.081,0.707-1.225 l1.916-0.513c-0.479-1.544-1.103-3.023-1.847-4.43l-4.304,2.484c-0.48,0.277-1.092,0.113-1.368-0.365 c-0.275-0.477-0.113-1.089,0.364-1.365l4.304-2.483c-0.857-1.357-1.835-2.63-2.922-3.803l-1.39,1.389 c-0.391,0.391-1.023,0.391-1.414,0c-0.392-0.391-0.391-1.023,0-1.414l1.39-1.389c-1.172-1.087-2.445-2.064-3.803-2.922l-2.482,4.3 c-0.277,0.48-0.889,0.644-1.367,0.367c-0.478-0.275-0.643-0.887-0.367-1.364l2.488-4.307c-1.407-0.744-2.888-1.367-4.432-1.847 l-0.513,1.915c-0.143,0.534-0.691,0.851-1.225,0.707c-0.535-0.143-0.85-0.69-0.707-1.225l0.512-1.908 C36.218,6.301,34.628,6.087,33,6.025v4.973c0,0.555-0.447,1.001-1,1.002c-0.552-0.001-1-0.447-1-0.999l0.001-4.976 c-1.629,0.062-3.22,0.275-4.759,0.625l0.511,1.908c0.144,0.534-0.174,1.082-0.707,1.225c-0.535,0.145-1.08-0.173-1.225-0.707 l-0.513-1.914c-1.543,0.479-3.022,1.102-4.429,1.846l2.485,4.304c0.277,0.48,0.113,1.091-0.365,1.368 c-0.479,0.274-1.089,0.112-1.365-0.366l-2.483-4.303c-1.357,0.858-2.632,1.836-3.805,2.923l1.389,1.389 c0.391,0.391,0.391,1.024,0,1.414c-0.392,0.393-1.021,0.391-1.414,0l-1.389-1.389c-1.086,1.173-2.063,2.445-2.921,3.803 l4.301,2.482c0.48,0.277,0.644,0.888,0.367,1.367c-0.277,0.478-0.887,0.642-1.365,0.365l-4.307-2.486 c-0.744,1.407-1.367,2.887-1.847,4.431l1.914,0.513c0.533,0.144,0.851,0.692,0.707,1.225c-0.143,0.537-0.689,0.85-1.225,0.707 L6.65,26.243c-0.35,1.538-0.562,3.128-0.625,4.756h4.974C11.554,30.999,12,31.446,12,32c-0.001,0.552-0.446,0.999-1,0.999H6.031 c0.062,1.629,0.275,3.218,0.626,4.756l1.9-0.509c0.533-0.143,1.082,0.174,1.225,0.707c0.145,0.537-0.172,1.08-0.707,1.225 l-1.904,0.51c0.48,1.542,1.097,3.023,1.841,4.429v0.001l4.301-2.483c0.48-0.277,1.091-0.113,1.367,0.366 c0.275,0.479,0.113,1.089-0.366,1.364L8.278,46.85c-0.354-0.564-0.687-1.144-1.001-1.733C5.19,41.201,4,36.738,4,32 C4,16.561,16.561,4,32,4s28,12.561,28,28c0,4.739-1.19,9.202-3.278,13.118C56.407,45.708,56.076,46.287,55.722,46.851z"
                    />
                    <path
                      fill="#199c07"
                      d="M32,29c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S33.654,29,32,29z M32,33c-0.553,0-1-0.447-1-1 s0.447-1,1-1s1,0.447,1,1S32.553,33,32,33z"
                    />
                  </g>
                </g>
              </svg>

              <span className="text-sm  ml-2">Dashboard</span>
            </Link>
            {/* <div className="py-1 px-3 bg-teal-600 rounded text-white flex items-center justify-center text-xs hover:bg-teal-600 hover:text-white">
              5
            </div> */}
          </li>
          <li className="flex w-full justify-between text-gray-500 hover:text-white hover:bg-teal-800 p-2 rounded cursor-pointer items-center mb-6">
            <Link to="/table" className="flex items-center">
              <svg
                fill="#139202"
                width={18}
                height={18}
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#139202"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    d="M1740 0c99.24 0 180 80.76 180 180v1560c0 99.24-80.76 180-180 180H180c-99.24 0-180-80.76-180-180V180C0 80.76 80.76 0 180 0h1560Zm-420 1200h480V720h-480v480Zm480 540v-420h-480v480h420c33 0 60-27 60-60ZM720 1200h480V720H720v480Zm0 600h480v-480H720v480Zm-600-600h480V720H120v480Zm480 600v-480H120v420c0 33 27 60 60 60h420Z"
                    fill-rule="evenodd"
                  />{' '}
                </g>
              </svg>
              <span className="text-sm  ml-2">Table</span>
            </Link>
            {/* <div className="py-1 px-3 bg-teal-600 rounded text-white flex items-center justify-center text-xs hover:bg-teal-600 hover:text-white">
              8
            </div> */}
          </li>
          {/* <li className="flex w-full justify-between text-gray-500 hover:text-black  hover:bg-white p-2 rounded cursor-pointer items-center mb-6">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-compass"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                <circle cx={12} cy={12} r={9} />
              </svg>
              <span className="text-sm  ml-2">Performance</span>
            </div>
          </li> */}
          {/* <li className="flex w-full justify-between text-gray-500 hover:text-black hover:bg-white p-2 rounded cursor-pointer items-center mb-6">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-code"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1={14} y1={4} x2={10} y2={20} />
              </svg>
              <span className="text-sm  ml-2">Deliverables</span>
            </div>
          </li> */}
          <li className="flex w-full justify-between text-gray-500 hover:text-white hover:bg-teal-800 p-2 rounded cursor-pointer items-center mb-6">
            <Link to="/notification" className="flex items-center">
              <svg
                width={18}
                height={18}
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
                  {' '}
                  <path
                    d="M12.0001 5.5C14.7615 5.5 17.0001 7.73858 17.0001 10.5V12.7396C17.0001 13.2294 17.1798 13.7022 17.5052 14.0683L18.7809 15.5035C19.6408 16.4708 18.9541 18 17.6598 18H6.34031C5.04604 18 4.35933 16.4708 5.2192 15.5035L6.49486 14.0683C6.82028 13.7022 7.00004 13.2294 7.00004 12.7396L7.00006 10.5C7.00006 7.73858 9.23864 5.5 12.0001 5.5ZM12.0001 5.5V3M3 11.0001C3 7.87966 4.58803 5.13015 7 3.51562M21 11.0001C21 7.87966 19.412 5.13015 17 3.51562M11 21H13"
                    stroke="#0b8413"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{' '}
                </g>
              </svg>
              <span className="text-sm  ml-2">Notifications</span>
            </Link>
            <Link className="py-1 px-1 bg-red-600 rounded-full text-white flex items-center justify-center text-xs hover:bg-teal-600 hover:text-white">
              8
            </Link>
          </li>
          <li className="flex w-full justify-between text-gray-500 hover:text-white hover:bg-teal-800 p-2  rounded cursor-pointer items-center mb-6">
            <Link to="/chart" className="flex items-center">
              <svg
                width={18}
                height={18}
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
                  {' '}
                  <path
                    d="M3.29289 9.29289C3 9.58579 3 10.0572 3 11V17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17V11C7 10.0572 7 9.58579 6.70711 9.29289C6.41421 9 5.94281 9 5 9C4.05719 9 3.58579 9 3.29289 9.29289Z"
                    fill="#11a71b"
                  />{' '}
                  <path
                    opacity="0.4"
                    d="M17.2929 2.29289C17 2.58579 17 3.05719 17 4V17C17 17.9428 17 18.4142 17.2929 18.7071C17.5858 19 18.0572 19 19 19C19.9428 19 20.4142 19 20.7071 18.7071C21 18.4142 21 17.9428 21 17V4C21 3.05719 21 2.58579 20.7071 2.29289C20.4142 2 19.9428 2 19 2C18.0572 2 17.5858 2 17.2929 2.29289Z"
                    fill="#11a71b"
                  />{' '}
                  <path
                    opacity="0.7"
                    d="M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z"
                    fill="#11a71b"
                  />{' '}
                  <path
                    d="M3 21.25C2.58579 21.25 2.25 21.5858 2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22C21.75 21.5858 21.4142 21.25 21 21.25H3Z"
                    fill="#11a71b"
                  />{' '}
                </g>
              </svg>
              <span className="text-sm  ml-2">Chart</span>
            </Link>
          </li>
          <li className="flex w-full justify-between text-gray-500 hover:text-white hover:bg-teal-800 p-2 rounded cursor-pointer items-center">
            <Link to="/settings" className="flex items-center">
              <svg
                fill="#118328"
                width={18}
                height={18}
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    d="M1703.534 960c0-41.788-3.84-84.48-11.633-127.172l210.184-182.174-199.454-340.856-265.186 88.433c-66.974-55.567-143.323-99.389-223.85-128.415L1158.932 0h-397.78L706.49 269.704c-81.43 29.138-156.423 72.282-223.962 128.414l-265.073-88.32L18 650.654l210.184 182.174C220.39 875.52 216.55 918.212 216.55 960s3.84 84.48 11.633 127.172L18 1269.346l199.454 340.856 265.186-88.433c66.974 55.567 143.322 99.389 223.85 128.415L761.152 1920h397.779l54.663-269.704c81.318-29.138 156.424-72.282 223.963-128.414l265.073 88.433 199.454-340.856-210.184-182.174c7.793-42.805 11.633-85.497 11.633-127.285m-743.492 395.294c-217.976 0-395.294-177.318-395.294-395.294 0-217.976 177.318-395.294 395.294-395.294 217.977 0 395.294 177.318 395.294 395.294 0 217.976-177.317 395.294-395.294 395.294"
                    fill-rule="evenodd"
                  />{' '}
                </g>
              </svg>
              <span className="text-sm  ml-2">Settings</span>
            </Link>
          </li>

          <div className="space-y-4 mt-10">
            <h1 className="text-teal-800 font-bold text-center text-xl">
              Account Page
            </h1>
          </div>
          <hr />
          <li className="flex w-full justify-between text-gray-500 hover:text-white hover:bg-teal-800 p-2  rounded cursor-pointer items-center mb-6 mt-5">
            <Link to="/profile" className="flex items-center">
              <svg
                width={18}
                height={18}
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#168208"
                stroke="#168208"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <title>profile_round [#1342]</title>{' '}
                  <desc>Created with Sketch.</desc> <defs> </defs>{' '}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {' '}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -2159.000000)"
                      fill="#0f951e"
                    >
                      {' '}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {' '}
                        <path
                          d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                          id="profile_round-[#1342]"
                        >
                          {' '}
                        </path>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>
              <span className="text-sm  ml-2">Profile</span>
            </Link>
          </li>
          <li className="flex w-full justify-between text-gray-500 hover:text-white hover:bg-teal-800 p-2 rounded cursor-pointer items-center">
            <Link to="logout" className="flex items-center">
              <svg
                width={18}
                height={18}
                viewBox="0 -1.29 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <defs> </defs>{' '}
                  <g data-name="Layer 2" id="Layer_2">
                    {' '}
                    <g
                      data-name="E430, Logout, multimedia, Ui"
                      id="E430_Logout_multimedia_Ui"
                    >
                      {' '}
                      <line
                        class="cls-1"
                        x1="291.14"
                        x2="502"
                        y1="234.62"
                        y2="234.62"
                      />{' '}
                      <polyline
                        class="cls-1"
                        points="437.83 181.15 502 234.62 437.83 288.1"
                      />{' '}
                      <polyline
                        class="cls-1"
                        points="10 459.25 10 10 331.31 10 331.31 459.25 230.9 459.25"
                      />{' '}
                      <polygon
                        class="cls-1"
                        points="230.9 499.41 10 459.25 10 10 230.9 50.16 230.9 499.41"
                      />{' '}
                      <polygon
                        class="cls-1"
                        points="180.69 178.1 60.2 158.02 60.2 107.82 180.69 127.9 180.69 178.1"
                      />{' '}
                    </g>{' '}
                  </g>{' '}
                </g>
              </svg>

              <span className="text-sm  ml-2">Logout</span>
            </Link>
          </li>

          {/* //todo for end icons */}
        </ul>
        <div className="flex justify-center w-full mt-10">
          <div className="relative ">
            <div className=" absolute ml-4 inset-0 m-auto w-4 h-4">
              <svg
                width={18}
                height={18}
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
                  {' '}
                  <path
                    d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="#139615"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{' '}
                </g>
              </svg>
            </div>
            <input
              className="  focus:outline-none rounded w-full text-sm  bg-gray-100 pl-10 py-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="px-8 border-t bg-gray-200 border-white mt-64 ">
          <ul className="w-full flex items-center hover:text-teal-800  justify-between ">
            <Link
              to=""
              className="cursor-pointer hover:text-teal-800 pt-5 pb-3  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </Link>
            <Link
              to=""
              className="cursor-pointer hover:text-teal-800  pt-5 pb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-messages"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
            </Link>
            <Link
              to=""
              className="cursor-pointer  hover:text-teal-800  pt-5 pb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-settings"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
            </Link>
            <Link
              to=""
              className="cursor-pointer hover:text-teal-80  pt-5 pb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-archive"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={4} width={18} height={4} rx={2} />
                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                <line x1={10} y1={12} x2={14} y2={12} />
              </svg>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
