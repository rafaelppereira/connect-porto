interface CardProps {
  result: number;
  status: string;
  description: string;
}

export function Card({ result, status, description }: CardProps){
  return (
    <div className="bg-gray-800 p-5 rounded-lg text-white">
      <div className="flex items-start justify-between">
        <span className="text-4xl">{result}</span>
        <div className={status === 'open' ? "w-2 h-2 bg-green-500 rounded-full" : status === 'blocked' ? "w-2 h-2 bg-red-500 rounded-full" : status === 'warning' ? "w-2 h-2 bg-yellow-500 rounded-full" : 'w-2 h-2 bg-orange-500 rounded-full'} />
      </div>
      <p className="mt-4 font-light opacity-60">
        {description}
      </p>
    </div>
  )
}