import React, { useState } from "react";


import Login from "../src/components/containers/login";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "test123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const LoginDetails = (details) => {
    console.log(details);
    if (details.email === "admin@admin.co" && details.password === "test123") {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("logged out");
      setError("Invalid details");
    }
  };

  const Logout = () => {
    console.log("logout");
    setUser({ name: "", email: "" });
  };
  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="Welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Login LoginDetails={LoginDetails} error={error}></Login>
      )}
    </div>
  );
}

export default App;
