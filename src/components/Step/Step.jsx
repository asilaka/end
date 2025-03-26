import React from 'react'
import s from './Step.module.scss'
import { Link } from 'react-router-dom'
const   Step = () => {
  return (
  <>

    <section>
    <div className="container">
    <div className={s.wrap}>
  <img src="/images.png" alt="" />
<div className={s.into}>
    <h1>Step into the <br /> Anime Universe <br /> With Geekozi</h1>

    <Link to={'/More'}>
    <button className={s.blur} >Discover More</button>
    </Link>
</div>
    
  </div>
  

<div className={s.dop}>
  <div className={s.gift}>
  <h1>Surprise your  friend with Geekozi Gift Card</h1>

  </div>

  <img src="/one.png" alt="" />

</div>
</div>

    </section>
 
  
  </>
  )
}

export default Step