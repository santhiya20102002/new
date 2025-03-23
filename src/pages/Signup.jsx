import React from "react";

const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>Name:</label>
        <input type="text" required />
        <br />
        <label>Email:</label>
        <input type="email" required />
        <br />
        <label>Password:</label>
        <input type="password" required />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
