import { useState } from "react"

export function FavoriteButton() {
const [isFavorite, setIsFavorite] = useState(false)

  return (
    <button className="btn" onClick={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? '❤️‍🔥' : '🩶'}
    </button>
  )
}
