import React from 'react'

const Members = () => {
  const members = [
    {
      id: 1,
      image:"/m1.jpeg",
      title:"Ratan Tata",
    },
    {
      id: 2,
      image:"/m2.jpeg",
      title:"Salman Khan"
    },
    {
      id: 3,
      image:"/m3.jpg",
      title:"Jamsetji Tata"
    },
    {
      id: 4,
      image:"/m4.jpeg",
      title:"Shiv nadar"
    },
    {
      id: 5,
      image:"/m5.jpg",
      title:"Rohini Nilekani"
    },
    {
      id: 6,
      image:"/m6.jpg",
      title:"Nandan Nilekani"
    },
    {
      id: 7,
      image:"/m7.jpg",
      title:"Adar Poonawalla"
    },
  ];
  return (
    <>
    <section className='members'>
      <div className='container'>
        <div className='heading_section'>
          <h2 className='heading'>Our Members</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste corporis nostrum, laboriosam ipsum quaerat sit reprehenderit porro voluptate quibusdam?</p>
        </div>
      </div>
      <div className="members_container">
        {
          members.map((element) => (
          <div className='card' key={element.id}>
            <img src={element.image} alt={element.title} />
            <h3>{element.title}</h3>
          </div>
          ))
        }
      </div>
    </section>
    </>
  )
}

export default Members;