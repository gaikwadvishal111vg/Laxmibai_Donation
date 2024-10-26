import React, { useState } from "react";

const Donate = () => {
  const [name, setName] = useState("");
  const [email , setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [disableBtn, setdisableBtn] = useState(false);
  return (
    <section className="donate">
      <form>
        <div>
          <img src="/logo.webp" alt="logo" />
        </div>
        <div>
          <label>Show your love for poor's</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation Amount (IND)"
          />
        </div>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any Message"
          />
          <button className="btn" type="submit" disabled={disableBtn}>Donate {amount ? `$${amount}` : "$0"}</button>
      </form>
    </section>
  );
};

export default Donate;
