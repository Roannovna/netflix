import { useState } from 'react';
import { MovieCard } from './MovieCard';
import { MOVIES } from './movies.data';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);  
  const movies = MOVIES.filter(movie => 
    movie.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className='min-h-screen w-full bg-black text-white px-6 py-5'>
      <header className='mb-10 flex items-center justify-between'>
        <img
          src='/netflix.png'
          alt='Netflix'
          className='h-8 w-auto'
        />

        <input 
          type='search' 
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }} 
          placeholder='Search...🔍'
          className='border border-white/30 px-2 py-1 rounded outline-0'
        />

      </header>
      <main className='flex gap-6'>
        {movies.length ? (
          movies.map(movie => (
            <MovieCard {...movie} key={movie.name} />
          )) 
        ) : (
          <p>No movies found🥲</p>
        )}
      </main>
    </div>
  )
}

export default App
