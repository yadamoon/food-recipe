import React from 'react'
import ContactForm from '../forms/ContactForm'

const Contact = () => {
  const call = () => {
    Swal.fire({
      title: '<strong>Do You Want Call </strong>',
      icon: 'info',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `<i class="fa fa-close"></i>`,

      cancelButtonText: `
        <i class="fa fa-phone"></i>
      `,
      // cancelButtonAriaLabel: 'Thumbs down',
    })
  }
  return (
    <div className="bg-white  mx-3 rounded">
      <br />
      <h1 className="text-center text-2xl font-bold ">CONTACT US</h1>

      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:grid-cols-2 p-6 ">
        <div
          className=" rounded text-center w-full h-auto col-span-1 p-6 border  shadow hover:bg-gray-50"
          onClick={call}
        >
          <span className="text-2xl text-teal-800">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </span>
          <h1 className="font-bold">Phone</h1>
          <p className="font-thin">+25132380202</p>
        </div>
        <div className=" rounded text-center w-full h-auto col-span-1 p-6 border  shadow hover:bg-gray-50">
          <span className="text-2xl text-teal-800">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </span>
          <h1 className="font-bold">Email</h1>
          <p className="font-thin">yared241993@gmail.com</p>
        </div>
        <div className=" rounded text-center w-full h-5/5 col-span-1 p-6 border  shadow  hover:bg-gray-50">
          <span className="text-2xl text-teal-800">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </span>
          <h1 className="font-bold">Address</h1>
          <p className="font-thin">Ethiopia , AdissAbeba , Mekelle</p>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
