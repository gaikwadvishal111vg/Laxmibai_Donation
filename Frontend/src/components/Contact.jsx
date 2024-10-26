import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
  };
  return (
 <section className='contact'>
<div className='container'>
  <div className='banner'>
    <form >
      <h2>CONTACT US</h2>
      <div>
        <input type="text" value={name} placeholder='Enter Your Name ' onChange={(e) => setName(e.target.value)}  />
        <input type="email" value={email} placeholder=' Enter Your Email' onChange={(e) => setEmail(e.target.value)}  />
        <input type="number" value={phone} placeholder='Phone ' onChange={(e) => setPhone(e.target.value)}  />
        </div>
        <textarea rows="10" value={message} placeholder='Whats in Your mind ' onChange={(e) => setMessage(e.target.value)}  />
          <button className='btn' type='submit'>Send Message</button>
    </form>
  </div>
</div>
 </section>
  )
}

export default Contact