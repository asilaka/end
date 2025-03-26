import React from 'react'
import s from './Anime.module.scss'
const Anime = () => {
  return (
<>
<section>
    <div className="container">

    <div className={s.full}>
    <img className={s.img} src="/one.png" alt="" />
    <div className={s.wiki}>
        <h2>Anime wiki</h2>
        <h1>One Piece</h1>
        <p>Monkey D. Luffy, commonly known as "Straw Hat Luffy" or simply "Straw Hat", <br /> [10] is the  founder, captain, and strongest combatant of the increasingly infamous and powerful Straw Hat Pirates.[26][27] He fearlessly pursues the legendary treasure of the  late Gol D. Roger in  order to become the new Pirate King[28] and reach a further, untold dream (currently known to only his crew and closest friends).[29] He believes that being the Pirate King means having the most freedom in the world.[31]</p>
      
    </div>
    </div>
    </div>

</section>
</>
  )
}

export default Anime
