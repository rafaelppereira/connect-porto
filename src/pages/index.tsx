import Head from "next/head";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Box } from "../components/Box";
import { Card } from "../components/Card";
import { Temp } from "../components/Temp";
import { ships } from "../services/ships";

export default function App() {
  const [isMsg, setIsMsg] = useState([]);
  const [tie, setTie] = useState(false);
  const totalNumberMsgs = isMsg.length;

  const wsUri = "wss://pcs-portohack.herokuapp.com/ws/dashboard-updates"

  const isBrowser = typeof window !== 'undefined';
  const [wsInstance] = useState(() => isBrowser ?  new WebSocket(wsUri) : null);
    
    if(wsInstance) {
      wsInstance.onopen = () => {
        console.log('connected to websocket instance');
      }
  
      wsInstance.onmessage = (msg) => {
        const shipName = JSON.parse(msg.data);
        const eventType = JSON.parse(msg.data);
  
        if (eventType.eventType === 'alerta') {
          const test = isMsg.map(item => {
            item.status = 'alerta';
  
            return item;
          });
          
          setTie(true);
          setIsMsg(test);
        } else {
          const toggleSingle = isMsg.map(item => {
            try {
              if (shipName.data.ship) {
                if (item.name === shipName.data.ship) {
                  item.status = shipName.eventType;
                }
              } else {
                toast.error('Náo conseguimos encontrar')
              }
            } catch (e) {
              alert('Navio nao encontrado')
            }
            
            return item;
          });

          setIsMsg(toggleSingle);
        }
      }
  
      wsInstance.onerror = (err) => {
        console.log(err)
      }
  
      wsInstance.onclose = () => {
        console.log('desconnect to server')
        setTimeout( wsInstance.onopen = () => {
          console.log('connected to websocket instance');
        }, 500);
      }
    }

  useEffect(() => {
    setIsMsg(ships)
  }, []);


  const totalone = isMsg.filter(item => item.status === 'prontidao_aviso').length
  const totaltwo = isMsg.filter(item => item.status === 'psp_liberada').length
  const totalthree = isMsg.filter(item => item.status === 'pratico_a_bordo').length
  const totalfor = isMsg.filter(item => item.status === 'swell').length


  return (
    <>
      <Head>
        <title>Gerenciamento do porto de Santos</title>  
      </Head>    
      <section className="">
        <div className="w-full bg-gray-900 py-10">
          <Temp
            tie={tie}
          />
          <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <Card
              key="d0b43292-cebd-422f-9098-e5f2447c362a"
              result={totalone}
              description="Navios com a prontidão aceita"
              status="open"
            />
            <Card
              key="af37542b-cd7f-42ae-a9e0-5e5f3d3c174b"
              result={totaltwo}
              description="Validação da documentação"
              status="blocked"
            />
            <Card
              key="b2566f5e-7edf-4bf1-a6e4-62e7ee0b676d"
              result={totalthree}
              description="Navios com práticos à bordo"
              status="warning"
            />
            <Card
              key="5a9d60c4-9466-437c-9bcb-33c66fe40790"
              result={totalfor}
              description="Navios com bloqueios por imprevistos"
              status="warning"
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
    </>
  )
}