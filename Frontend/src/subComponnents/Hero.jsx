import React from 'react'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className='hero'>
<div className='banner'>
  <h1>Volunteers</h1>
  <h3>Needed</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos odit dolorem ducimus quam velit nesciunt quia possimus repellat accusantium!</p>
<Link to={"/donate"} className='btn'> Donate Now</Link>
</div>
<div className='banner'>
  <img src={"/hero.jpg"} alt="hero" />
</div>
    </section>
  )
}

export default Hero