import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const win = localStorage;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("enter details");
    } else {
      if (win.getItem("name")) setName(win.getItem("name"));
      if (win.getItem("email")) setEmail(win.getItem("email"));
      if (win.getItem("pass")) setPass(win.getItem("pass"));
      win.setItem("name", name);
      win.setItem("email", email);
      win.setItem("pass", pass);
      setName("");
      setEmail("");
      setPass("");
    }
  };

  //   useEffect(() => {
  //     if (win.getItem("name")) setName(win.getItem("name"));
  //     if (win.getItem("email")) setEmail(win.getItem("email"));
  //     if (win.getItem("pass")) setPass(win.getItem("pass"));
  //   }, []);
  //   useEffect(() => {
  //     win.setItem("name", name);
  //     win.setItem("email", email);
  //     win.setItem("pass", pass);
  //   }, [email, pass]);

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full Name"
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
