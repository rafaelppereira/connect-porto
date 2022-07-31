export function Header() {
  return (
    <header className="w-full py-5 bg-gray-800">
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-between">
        <figure>
          <img
           src="/logo.svg" 
           alt="Logo da connect porto"
           className="w-44" 
          />
        </figure>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center border-2 border-blue-500 shrink-0">
            <span className="text-white text-md font-regular">U</span>
          </div> 
          <div className="text-white">
            <h1 className="text-lg">Usuário anonimo</h1>
            <p className="italic opacity-60">Imports World</p>
          </div>
        </div>    
      </div>
    </header>
  );
}