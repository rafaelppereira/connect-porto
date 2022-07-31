
export default function Identificator({ slug }) {
  return (
    <section className="w-full h-screen">
      <div className="max-w-5xl mx-auto px-8 h-full flex items-center">
        <div className="bg-gray-800 w-full p-10 rounded-lg border border-orange-500">
          <h1 className="text-white text-3xl">Návio identificador - {slug}</h1>
          <p className="text-white opacity-60 text-xl">Transporte de alimentos</p>
          <div className="mt-16 flex items-center justify-between gap-10 text-white">
            <div className="w-10 h-10 relative rounded-full flex bg-orange-500 items-center justify-center text-lg animate-bounce">1</div>
            <div className="w-10 h-10 relative rounded-full flex bg-gray-500 items-center justify-center text-lg">2</div>
            <div className="w-10 h-10 relative rounded-full flex bg-gray-500 items-center justify-center text-lg">3</div>
            <div className="w-10 h-10 relative rounded-full flex bg-gray-500 items-center justify-center text-lg">4</div>
            <div className="w-10 h-10 relative rounded-full flex bg-gray-500 items-center justify-center text-lg">5</div>
            <div className="w-10 h-10 relative rounded-full flex bg-gray-500 items-center justify-center text-lg">6</div>
            <div className="w-10 h-10 relative rounded-full flex bg-gray-500 items-center justify-center text-lg">7</div>
            <div className="w-10 h-10 relative rounded-full flex bg-gray-500 items-center justify-center text-lg">8</div>
            <div className="w-10 h-10 relative rounded-full flex bg-gray-500 items-center justify-center text-lg">9</div>
          </div>
        </div>
      </div>
    </section>
  )
};

export const getStaticPaths = () => {
  let slug = [];
  const paths = slug;

  return {
    paths: [],
    fallback: 'blocking'
  };
}

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  return {
    props: {
      slug,
    },
    revalidate: 1 
  }
}