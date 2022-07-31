import { GetServerSideProps } from "next";

export default function Home() {
  return null;
};

export const getServerSide: GetServerSideProps = async () => {
  const authenticated = true;

  if (authenticated === true) {
    return {
      redirect: {
        destination: '/app',
        permanent: false,
      }
    }
  }
}
