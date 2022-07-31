import { GetServerSideProps } from "next";

export default function Home() {
  return null;
};

export const getServerSide: GetServerSideProps = async () => {

  return {
    redirect: {
      destination: '/app',
      permanent: false,
    }
  }
  
}
