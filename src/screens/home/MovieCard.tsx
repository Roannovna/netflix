import FavoriteButton from "./FavoriteButton";
import { memo, useCallback, useState } from "react";
import { Modal } from "../../components/UI/Modal";
import { Link } from "react-router-dom";
import type { IMovie } from "./movie.interface";

interface Props {
  movie: IMovie
}

function MovieCard({ movie }: Props) {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);
  
  const openTrailer = useCallback(() => {
    setIsOpenTrailer(true)
  }, [])

  return (
    <div className="relative w-[200px] rounded-2xl overflow-hidden 
    bg-neutral-900 shadow-lg">
      {isOpenTrailer && (
        <Modal 
          onClose={() => {
            setIsOpenTrailer(false)
          }}
        >
          <iframe 
            width="373" 
            height="210" 
            src={`https://www.youtube.com/embed/${movie.trailerYoutubeID}?&amp;
            controls=0`}
            title="YouTube video player"

            allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal>
      )}

      <img
        src={movie.image}
        alt="Movie poster"
        className="w-full h-auto object-cover"
      />
      
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <FavoriteButton />

        <button
          className="btn"
          onClick={openTrailer}
        >
          🎞️
        </button>

        <Link 
        to={`/movie/${movie.trailerYoutubeID}`}
        className="btn"
        >
          🔗
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full
      bg-gradient-to-t from-black/80 to-transparent p-2 text-sm
      text-white font-semibold">
        IMDb rating: {movie.rating}
      </div>
    </div>
  )
}

export default memo(MovieCard)