import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";

interface BoxProps {
  name: string;
  description: string;
  status: number;
}

export function Box ({ name, description, status }: BoxProps) {
  const [openbox, setOpenBox] = useState(false);

  const handleToggleBox = () => {
    setOpenBox(!openbox);
  }
   
  return (
    <div 
      className={`bg-gray-900 py-7 px-4 text-white rounded-lg relative border ${status === 0 ? 'border-orange-500' : status === 1 ? 'border-green-500' : '' } `}
    >
      <button 
        onClick={handleToggleBox}
        className="bg-blue-500 absolute -right-2 -top-2 p-1 rounded-full hover:bg-blue-600 transition-colors"
      >
        {openbox ? (
          <CaretUp size={20} />
        ) : (
          <CaretDown size={20} />
        )}
      </button>
      <h1 className="text-lg">Návio identificador - {name}</h1>

      {openbox ? (
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-700 flex rounded-full relative before:w-[1px] before:h-7 before:bg-gray-700 before:top-4 before:left-1/2 before:absolute"></span>
            <p className="text-sm">Návio chegou</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-700 flex rounded-full relative before:w-[1px] before:h-7 before:bg-gray-700 before:top-4 before:left-1/2 before:absolute"></span>
            <p className="text-sm">Liberçao do terminal</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-700 flex rounded-full relative before:w-[1px] before:h-7 before:bg-gray-700 before:top-4 before:left-1/2 before:absolute"></span>
            <p className="text-sm">Checando a documentaçao</p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-700 flex rounded-full relative before:w-[1px] before:h-7 before:bg-gray-700 before:top-4 before:left-1/2 before:absolute"></span>
            <p className="text-sm">Praticagem</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-700 flex rounded-full relative "></span>
            <p className="text-sm">Návio está atracado</p>
          </div>
        </div>
        ) : (
          <>
            <p className="my-5 opacity-60 font-light italic">{description}</p>
            <span 
              className={`text-sm ${status === 0 ? 'text-orange-500' : status === 1 ? 'text-green-500' : ''}`}
            >Status: {status === 0 ? 'Aviso de prontidao' : status === 1 ? 'Liberaçao do terminal' : ''}</span>
          </>
      )}
    </div>
  );
}