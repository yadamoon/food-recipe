import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setHide, setShow } from '../../store/slices/authSlice'
import { motion } from 'framer-motion'

export default function HeaderApp() {
  const [show, setshow] = useState(false)
  const [showButton, setShowButton] = useState()
  const { signedIn } = useSelector((state) => state.auth)
  const urlLogo = 'public/images/finail.svg'

  return (
    <div className=" bg-gray-100  ">
      <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between ">
          <motion.Link
            to="/"
            className=" flex space-x-3 items-center"
            initial={{ y: -250 }}
            animate={{ y: -10 }}
          >
            <img
              src={urlLogo}
              width={80}
              height={40}
              alt="logo"
              className="rounded-full"
            />

            {/* <svg
              fill="#2a2c2b"
              width={80}
              height={40}
              viewBox="-6.4 -6.4 76.80 76.80"
              style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
              version="1.1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:serif="http://www.serif.com/"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              stroke="#2a2c2b"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0">
                <rect
                  x="-6.4"
                  y="-6.4"
                  width="76.80"
                  height="76.80"
                  rx="38.4"
                  fill="#52ad9e"
                  strokewidth="0"
                />
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g transform="matrix(1,0,0,1,-192,-288)">
                  {' '}
                  <g id="Icon">
                    {' '}
                    <path
                      d="M206.275,343.594L206.275,343.761C206.275,344.861 206.712,345.917 207.49,346.695C208.268,347.473 209.323,347.91 210.424,347.91C216.812,347.91 231.227,347.91 237.615,347.91C238.715,347.91 239.77,347.473 240.548,346.695C241.327,345.917 241.764,344.861 241.764,343.761L241.764,343.594C241.764,343.042 241.316,342.594 240.764,342.594L207.275,342.594C206.723,342.594 206.275,343.042 206.275,343.594Z"
                      style="fill:#050505;"
                    />{' '}
                    <path
                      d="M238.479,342.594C238.489,342.651 238.494,342.709 238.494,342.769L238.494,342.937C238.494,344.037 238.057,345.092 237.279,345.87C236.501,346.649 235.446,347.086 234.345,347.086L207.942,347.086C208.654,347.618 209.524,347.91 210.424,347.91C216.812,347.91 231.227,347.91 237.615,347.91C238.715,347.91 239.77,347.473 240.548,346.695C241.327,345.917 241.764,344.861 241.764,343.761L241.764,343.594C241.764,343.042 241.316,342.594 240.764,342.594L238.479,342.594Z"
                      style="fill:#0f1a12;"
                    />{' '}
                    <path
                      d="M248.583,334.818L248.583,334.776C248.566,334.24 248.128,333.809 247.587,333.807L200.459,333.628C200.188,333.627 199.928,333.735 199.739,333.93C199.55,334.124 199.447,334.386 199.455,334.657C199.455,334.657 199.471,335.208 199.496,336.037C199.635,340.803 203.538,344.594 208.306,344.594C216.956,344.594 231.026,344.594 239.769,344.594C244.637,344.594 248.583,340.648 248.583,335.78C248.583,335.243 248.583,334.885 248.583,334.818Z"
                      style="fill:#198661;"
                    />{' '}
                    <path
                      d="M247.587,333.807L243.247,333.807C243.788,333.809 244.227,334.24 244.243,334.776L244.244,334.818C244.244,334.885 244.244,335.243 244.244,335.78C244.244,340.648 240.297,344.594 235.43,344.594L239.769,344.594C244.637,344.594 248.583,340.648 248.583,335.78C248.583,335.243 248.583,334.885 248.583,334.818L248.583,334.776C248.566,334.24 248.128,333.809 247.587,333.807Z"
                      style="fill:#3bba3b;"
                    />{' '}
                    <path
                      d="M201.046,321.538C198.187,323.022 196.3,325.752 196.3,328.848C196.3,333.486 200.579,337.327 205.93,337.327C208.237,337.327 210.352,336.611 212.003,335.428C213.655,336.611 215.77,337.327 218.077,337.327C220.384,337.327 222.499,336.611 224.15,335.428C225.802,336.611 227.917,337.327 230.224,337.327C232.531,337.327 234.646,336.611 236.297,335.428C237.949,336.611 240.064,337.327 242.371,337.327C247.722,337.327 252,333.486 252,328.848C252,325.747 250.106,323.012 247.24,321.531C243.3,314.219 234.753,309.12 224.824,309.12L223.466,309.12C213.534,309.12 204.986,314.221 201.046,321.538Z"
                      style="fill:#d0e5a4;"
                    />{' '}
                    <path
                      d="M223.828,309.12C230.776,310.836 236.474,315.13 239.484,320.716C242.35,322.197 244.244,324.932 244.244,328.033C244.244,331.814 241.401,335.065 237.45,336.138C238.887,336.891 240.571,337.327 242.371,337.327C247.722,337.327 252,333.486 252,328.848C252,325.747 250.106,323.012 247.24,321.531C243.3,314.219 234.753,309.12 224.824,309.12L223.828,309.12Z"
                      style="fill:#15b259;"
                    />{' '}
                    <path
                      d="M223.15,316.568L223.15,326.635C223.15,327.187 223.598,327.635 224.15,327.635C224.702,327.635 225.15,327.187 225.15,326.635L225.15,316.568C225.15,316.016 224.702,315.568 224.15,315.568C223.598,315.568 223.15,316.016 223.15,316.568Z"
                      style="fill:#15b259;"
                    />{' '}
                    <g transform="matrix(1,0,0,1,-9.28912,1.13687e-13)">
                      {' '}
                      <path
                        d="M223.15,316.568L223.15,326.635C223.15,327.187 223.598,327.635 224.15,327.635C224.702,327.635 225.15,327.187 225.15,326.635L225.15,316.568C225.15,316.016 224.702,315.568 224.15,315.568C223.598,315.568 223.15,316.016 223.15,316.568Z"
                        style="fill:#15b259;"
                      />{' '}
                    </g>{' '}
                    <g transform="matrix(1,0,0,1,9.28912,0.207994)">
                      {' '}
                      <path
                        d="M223.15,316.568L223.15,326.635C223.15,327.187 223.598,327.635 224.15,327.635C224.702,327.635 225.15,327.187 225.15,326.635L225.15,316.568C225.15,316.016 224.702,315.568 224.15,315.568C223.598,315.568 223.15,316.016 223.15,316.568Z"
                        style="fill:#15b259;"
                      />{' '}
                    </g>{' '}
                    <g transform="matrix(-1.02196,-1.67157e-16,1.22235e-16,-1.34718,248.058,323.528)">
                      {' '}
                      <path
                        d="M31.042,15.081L31.7,16.397C31.898,16.795 31.898,17.205 31.7,17.603L30.383,20.235C30.131,20.74 30.131,21.26 30.383,21.765C30.673,22.344 31.042,23.081 31.042,23.081C31.15,23.299 31.668,23.439 32.197,23.394C32.726,23.35 33.067,23.137 32.958,22.919L32.3,21.603C32.102,21.205 32.102,20.795 32.3,20.397L33.617,17.765C33.869,17.26 33.869,16.74 33.617,16.235C33.327,15.656 32.958,14.919 32.958,14.919C32.85,14.701 32.332,14.561 31.803,14.606C31.274,14.65 30.933,14.863 31.042,15.081Z"
                        style="fill:#198661;"
                      />{' '}
                    </g>{' '}
                    <g transform="matrix(-1.02196,-1.67157e-16,1.22235e-16,-1.34718,256.697,323.528)">
                      {' '}
                      <path
                        d="M31.042,15.081L31.7,16.397C31.898,16.795 31.898,17.205 31.7,17.603L30.383,20.235C30.131,20.74 30.131,21.26 30.383,21.765C30.673,22.344 31.042,23.081 31.042,23.081C31.15,23.299 31.668,23.439 32.197,23.394C32.726,23.35 33.067,23.137 32.958,22.919L32.3,21.603C32.102,21.205 32.102,20.795 32.3,20.397L33.617,17.765C33.869,17.26 33.869,16.74 33.617,16.235C33.327,15.656 32.958,14.919 32.958,14.919C32.85,14.701 32.332,14.561 31.803,14.606C31.274,14.65 30.933,14.863 31.042,15.081Z"
                        style="fill:#198661;"
                      />{' '}
                    </g>{' '}
                    <g transform="matrix(-1.02196,-1.67157e-16,1.22235e-16,-1.34718,265.647,323.528)">
                      {' '}
                      <path
                        d="M31.042,15.081L31.7,16.397C31.898,16.795 31.898,17.205 31.7,17.603L30.383,20.235C30.131,20.74 30.131,21.26 30.383,21.765C30.673,22.344 31.042,23.081 31.042,23.081C31.15,23.299 31.668,23.439 32.197,23.394C32.726,23.35 33.067,23.137 32.958,22.919L32.3,21.603C32.102,21.205 32.102,20.795 32.3,20.397L33.617,17.765C33.869,17.26 33.869,16.74 33.617,16.235C33.327,15.656 32.958,14.919 32.958,14.919C32.85,14.701 32.332,14.561 31.803,14.606C31.274,14.65 30.933,14.863 31.042,15.081Z"
                        style="fill:#198661;"
                      />{' '}
                    </g>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg> */}
            <Link
              to="/"
              className=" text-3xl leading-6 text-teal-800 uppercase font-thin"
            >
              food recipe
            </Link>
          </motion.Link>

          {!signedIn && (
            <div className="hidden sm:flex flex-row space-x-4">
              <Link
                className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 bg-gray-200 border border-teal-700 focus:outline-none focus:bg-teal-500 hover:bg-teal-300 hove:text-white duration-150 justify-center items-center"
                to="/Create New Account"
              >
                Sign Up
              </Link>
              <Link
                className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-teal-600 hover:bg-teal-600 duration-150 justify-center items-center"
                to="/Login"
              >
                Sign In
              </Link>
            </div>
          )}
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
          >
            <svg
              className={`${show ? 'hidden' : ''}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" transform duration-150"
                d="M4 6H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className=" transform duration-150"
                d="M4 18H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`${show ? 'block' : 'hidden'}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Mobile and small-screen devices (toggle Menu) */}
        <div
          id="MobileNavigation"
          className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-row items-center justify-center space-x-6">
            {/* tewiter */}
            <svg
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* facebook */}
            <a href="https://www.facebook.com/wizyaru.teklehaymanotnigro">
              <svg
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={'https://www.facebook.com/wizyaru.teklehaymanotnigro'}
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {/* linkedIn */}
            <svg
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 9H2V21H6V9Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* //!? instagram */}
            <svg
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0002 11.3701C16.1236 12.2023 15.9815 13.0523 15.594 13.7991C15.2065 14.5459 14.5933 15.1515 13.8418 15.5297C13.0903 15.908 12.2386 16.0397 11.408 15.906C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1903 8.22793 13.4229 8.09426 12.5923C7.9606 11.7616 8.09226 10.91 8.47052 10.1584C8.84878 9.40691 9.45438 8.7938 10.2012 8.4063C10.948 8.0188 11.7979 7.87665 12.6302 8.00006C13.4791 8.12594 14.265 8.52152 14.8719 9.12836C15.4787 9.73521 15.8743 10.5211 16.0002 11.3701Z"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 6.5H17.51"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {!signedIn && (
            <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
              <Link
                className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm  border border-teal-700 focus:outline-none  justify-center items-center"
                to="/Create New Account"
              >
                Sign Up
              </Link>
              <Link
                to="/Login"
                className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-teal-700  justify-center items-center"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
