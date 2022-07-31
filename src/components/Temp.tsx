interface TempProps {
  temp?: string
}

export function Temp({ temp }: TempProps) {
  return (
    <section className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center gap-4 h-auto md:h-24">
      <div className="bg-gray-800 p-4 w-full md:w-auto flex-1 h-full text-white flex items-center rounded-lg">
        <h1 className="text-5xl">23<span className="text-xl">c</span></h1>
        <div className="ml-10">
          <h2 className="text-xl">Ventos de 23km/h</h2>
          <div className="flex items-center gap-2">
            <span className="text-red-500">Maré baixa</span>
            <span className="text-blue-500">Umidade de 10%</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 w-full md:w-auto flex flex-col md:flex-row py-4 items-center gap-4 px-6 h-full rounded-lg">
        <input 
          type="text"   
          placeholder="12:30hs"
          className="bg-gray-900 w-full md:w-auto text-gray-400 p-4 rounded-md outline-none border-2 border-gray-900 focus:border-blue-500 transition-colors"
        />
        <span className="text-white text-lg">Até</span>
        <input 
          type="text" 
          placeholder="14:30hs"
          className="bg-gray-900 w-full md:w-auto text-gray-400 p-4 rounded-md outline-none border-2 border-gray-900 focus:border-blue-500 transition-colors"
        />
      </div>
    </section>
  );
}