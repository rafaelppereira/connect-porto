import Head from "next/head";
import { useEffect, useState } from "react";
import { Box } from "../../components/Box";
import { Card } from "../../components/Card";
import { Temp } from "../../components/Temp";
import { ships } from "../../services/ships";

interface MsmProps {
  eventType: string;
  data: {
    ship: string;
  }
}


export default function App() {
  const [isMsg, setIsMsg] = useState([]);
  const totalNumberMsgs = isMsg.length;

  const wsUri = "wss://pcs-portohack.herokuapp.com/ws/dashboard-updates"

  const isBrowser = typeof window !== 'undefined';
  const [wsInstance] = useState(() => isBrowser ?  new WebSocket(wsUri) : null);
  
  if(wsInstance) {
    wsInstance.onopen = () => {
      console.log('conectado')
    }

    wsInstance.onmessage = (msg) => {
      const shipName = JSON.parse(msg.data);
      const test = isMsg.map(item => {
        if (item.name === shipName.data.ship) {
          item.status = shipName.eventType;
        }

        return item;
      });

      setIsMsg(test);
    }
  }

  useEffect(() => {
    setIsMsg(ships)
  }, [])

  return (
    <>
      <Head>
        <title>Gerenciamento do porto de Santos</title>  
      </Head>    
      <section className="">
        <div className="w-full bg-gray-900 py-10">
          <Temp />
          <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <Card
              key="d0b43292-cebd-422f-9098-e5f2447c362a"
              result={20}
              description="Návios aguardando a entrada"
              status="open"
            />
            <Card
              key="af37542b-cd7f-42ae-a9e0-5e5f3d3c174b"
              result={12}
              description="Esperando a validação da documentação"
              status="blocked"
            />
            <Card
              key="b2566f5e-7edf-4bf1-a6e4-62e7ee0b676d"
              result={35}
              description="Liberados para entrada"
              status="warning"
            />
            <Card
              key="5a9d60c4-9466-437c-9bcb-33c66fe40790"
              result={92}
              description="Bloqueados na entrada"
              status="validation"
            />
          </div>
        </div>

        <div className="w-full bg-gray-800">
          <div className="max-w-5xl mx-auto px-8 mt-5 py-10">
            <div className="w-full flex items-center justify-between  text-white">
              <h1 className="text-blue-500">Total de registros</h1>
              <span className="bg-gray-900 px-4 py-1 rounded-full">{totalNumberMsgs}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {isMsg.map(item => (
                <Box
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      mij
    </>
  )
}