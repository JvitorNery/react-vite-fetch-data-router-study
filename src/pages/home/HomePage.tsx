import { useLoaderData } from 'react-router-dom';
import { HomeLoaderResult } from './homeLoader';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  const renderedPackages = featuredPackages.map(p => {
    return <div key={p.name} className='flex flex-col justify-between gap-3 border shadow p-4'>
      <div className='flex flex-col gap-1 border-bottom border-gray-400'>
        <div className="font-bold text-center">{p.name}</div>
        <div className="text-sm text-gray-500">{p.description}</div>
        <div className="text-sm text-gray-500">{p.maintainers.length} Maintainers</div>
      </div>
      <Link to={`/packages/${p.name}`} className='border rounded border-gray-900 text-center'>
        View
      </Link>
    </div>
  })
  
  return <div className='container py-12 space-y-8'>
    <div className='space-y-6 text-center'>
      <h1 className='text-6xl font-bold'>
        The NPM Registry
      </h1>
      <p className='mx-auto max-w-[600px] text-gray-500'>
        The package manager for javascript. Search and view packages.
      </p>
    </div>
    <div className='mx-auto grid grid-col-4 max-w-[900px] items-strech gap-4'>
      {renderedPackages}
    </div>
  </div>;
}
