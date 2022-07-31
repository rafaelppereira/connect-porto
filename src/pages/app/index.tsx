import Head from "next/head";
import { Box } from "../../components/Box";
import { Card } from "../../components/Card";
import { Temp } from "../../components/Temp";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

const dataTest = [
  {
    id: 'f8885ce1-a041-405e-8f14-2e275cae18f4',
    name: 'AU82D',
    description: 'Carga de medicamentos controlados',
    status: 0
  },
  {
    id: '82080d72-095e-4ce5-92b6-dd9d1e373678',
    name: 'BDA2D',
    description: 'Carga de ferros controlados',
    status: 1
  }
]

export default function App() {
  const totalRegisters = dataTest.length;
  const [staticts, setStaticts] = useState([]);
  
  useEffect(() => {
    api.get('/staticts').then((res) => {
      setStaticts(res.data);
    }).catch((err) => {
      console.log(err)
    })
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
              key="d0b43292-cebd-422f-9098-e5f2447c362a"
              result={12}
              description="Esperando a validaçao da documentaçao"
              status="blocked"
            />
            <Card
              key="d0b43292-cebd-422f-9098-e5f2447c362a"
              result={35}
              description="Liberados para entrada"
              status="warning"
            />
            <Card
              key="d0b43292-cebd-422f-9098-e5f2447c362a"
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
              <span className="bg-gray-900 px-4 py-1 rounded-full">{totalRegisters}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {dataTest.map(item => (
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