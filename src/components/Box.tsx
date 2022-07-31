import { CaretDown, CaretUp, CheckCircle, Wind } from "phosphor-react";
import { useState } from "react";

interface BoxProps {
  name: string;
  description: string;
  status: string;
}

export function Box ({ name, description, status }: BoxProps) {
  const [openbox, setOpenBox] = useState(false);

  const handleToggleBox = () => {
    setOpenBox(!openbox);
    status = 'default';
  }
   
  return (
    <div 
      className={`bg-gray-900 py-7 px-4 text-white rounded-lg relative border ${status === "default" ? 'border-gray-500 bg-gray-900' : status === 'swell' ? 'bg-red-700' : status === 'alerta' ? 'bg-red-700' : status === 'pratico_a_bordo' ? 'bg-green-500' : 'bg-blue-600' } `}
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
      <h1 className="text-lg">Navio - {name}</h1>

      {openbox ? (
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-500 flex rounded-full relative before:w-[1px] before:h-7 before:bg-green-500 before:top-4 before:left-1/2 before:absolute"></span>
            <p className="text-sm">Navio chegou</p>
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
            <p className="text-sm">Navio está atracado</p>
          </div>
        </div>
        ) : (
          <>
            <p className="my-5 opacity-60 font-light italic">{description}</p>
            <span 
              className={`text-sm flex items-center gap-2 ${status === 'prontidao_aviso' ? 'text-green-500' : status === 'swell' ? 'text-red-500' : status === 'prontidao_aceito' ? 'text-green-500' : ''}`}
            >
              {status === 'prontidao_aviso' ? (
                <CheckCircle size={24} />
              ) : status === '' ? (
                <Wind size={24} />
              ) : ''}
              Status: {status === 'default' ? 'Padrão' : status === 'prontidao_aviso' ? 'Estado de prontidão' : status === 'swell' ? 'Perigo eminente, ondas fortes!' : status === 'prontidao_aceito' ? 'Estado de prontidão aceito' : status === 'psp_liberada' ? 'Documentação liberada' : status === 'pratico_a_bordo' ? 'Prático a bordo' : ''}
            </span>
          </>
      )}
    </div>
  );
}