import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./components/formInput";
import "./App.css";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://container-1-6j5ciz4cca-uc.a.run.app/Register`, values)
      .then((res) => navigate("/login"));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <FormInput
          name="name"
          type="text"
          placeholder="Name"
          label="Name"
          required
          onChange={onChange}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          required
          onChange={onChange}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          required
          onChange={onChange}
        />
        <FormInput
          name="location"
          type="text"
          placeholder="Location"
          label="Location"
          required
          onChange={onChange}
        />
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
