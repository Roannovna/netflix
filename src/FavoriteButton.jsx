import { useState } from "react"

export function FavoriteButton() {
const [isFavorite, setIsFavorite] = useState(false)

  return (
    <button onClick={() => setIsFavorite(!isFavorite)}>
      {isFavorite ? '❤️‍🔥' : '🩶'}
    </button>
  )
}
