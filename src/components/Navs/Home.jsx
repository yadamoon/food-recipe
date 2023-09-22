import React from 'react'

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-between items-center py-28 px-5">
          <div className="w-1/2">
            <h2 className="text-5xl font-semibold text-gray-800">
              Fideliza Más
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
          <div className="w-1/2">
            <img
              src="https://www.emprenderconactitud.com/img/fidelizamas.png"
              alt="Imagen relacionada con el programa de fidelización"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  )
}
