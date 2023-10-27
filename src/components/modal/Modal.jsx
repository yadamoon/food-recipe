import { useState } from 'react'

export default Modal = ({ isOpen, onClose, isSuccess }) => {
  return (
    <>
      {/* {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">
              {isSuccess ? 'Success!' : 'Error!'}
            </h2>
            <p className="mb-4">
              {isSuccess
                ? 'You have successfully logged in.'
                : 'There was an error logging in.'}
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
      helllo
    </>
  )
}
