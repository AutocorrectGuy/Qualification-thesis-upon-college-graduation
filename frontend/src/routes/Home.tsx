type Props = {}

const Home = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-transparent min-h-screen overflow-auto" >
      <div className="container max-w-5xl mx-auto px-4">
        <div className="w-4/5">
          <h1 className="mt-32 text-white text-6xl font-bold">Sadaļā"aktualitātes" pārbaudiet<br /><span className="text-blue-400">datubāzes darbību </span></h1>
        </div>
        <div className="w-5/6 my-10 ml-6">
          <h3 className="text-gray-300">
            CLorem ipsum, dolor sit amet consectetur adipisicing elit.  <br />
            <strong className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </strong>
            <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>
        <div className="hidden sm:block opacity-50 z-0">
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-72"></div>
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-96"></div>
          <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96"></div>
        </div>
        <div className="text-white relative">
          <h3 className="text-uppercase font-semibold">Lorem ipsum, dolor sit amet </h3>
        </div>
      </div>
    </div>
  )
}

export default Home