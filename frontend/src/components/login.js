import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/formInput";
import "../App.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://container-2-6j5ciz4cca-uc.a.run.app/validate`,
      values
    );
    if (!response.data) {
      return;
    }
    navigate("/profile", { state: response.data.email });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
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
        <div className="submit">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
