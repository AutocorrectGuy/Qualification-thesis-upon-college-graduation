import { Link } from 'react-router-dom'

type Props = {}

const NotFoundPage = (props: Props) => {
  return (
    <div className="bg-gray-900 py-8 px-4 lg:py-16 lg:px-6 h-full">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-500">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl text-white">
          Something's missing.
        </p>
        <p className="mb-4 text-lg font-light  text-gray-400">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <Link to='/'
          className="inline-flex text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-slate-900 my-4"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage