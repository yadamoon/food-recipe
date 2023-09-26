import React from 'react'

export default function Home() {
  return (
    <>
      <div className="flex  w-full justify-center">
        <div className=" py-10  bg-white ">
          <div className="w-2/3 ">
            <h2 className="text-5xl font-semibold text-gray-800">
              Food Recipes
            </h2>
            <h3 className="text-xl font-semibold text-gray-600 mt-4">
              ¡Únete a nuestro programa de lealtad y obtén increíbles
              recompensas!
            </h3>
            <p className="text-gray-600 mt-4">
              Nuestro programa de fidelización está diseñado para recompensar a
              nuestros clientes más fieles. Obtén puntos con cada compra y
              canjéalos por descuentos exclusivos, regalos especiales y
              experiencias únicas.
            </p>
          </div>
          <div className="">
            <img
              src="public/images/Screenshot from 2023-09-23 13-41-53.png"
              alt="Imagen relacionada con el programa de fidelización"
              className="w-1/2 h-auto"
            />
          </div>
        </div>
      </div>
    </>
  )
}
