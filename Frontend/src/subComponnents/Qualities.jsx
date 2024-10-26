import React from 'react'

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image:"/cummunity.jpg",
      title:"CUMMUNITY DEVELOPMENT",
      description: "We are a community of people who are passionate about making a positive impact in the."
    },
    {
      id: 2,
      image:"/transparency.png",
      title:"TRANSPARENCY",
      description: "We are a community of people who are passionate about making a positive impact in the."

    },
    {
      id: 3,
      image:"/impact.webp",
      title:"IMPACT MEASURMENT",
      description: "We are a community of people who are passionate about making a positive impact in the."
    }
  ];
  return (
  <>
  <div className='qualities'>
    <h2>OUR QUALITIES</h2>
    <div className='container'>
      {
        qualities.map(element => {
          return(
            <div className='card' key={element.id}>
              <div className='img-wrapper'>
                <img src={element.image} alt={element.title} />
              </div>
              <div className='content'>
                <p className='title'>
                  {element.title}
                </p>
                <p className='description'>{element.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
  </>
    
    )
}

export default Qualities