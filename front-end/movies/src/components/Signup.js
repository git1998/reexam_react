import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Signup = () => {
  console.log("0");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUpUser = () => {
    const body = {
      name,
      email,
      password,
    };

    console.log("1 : ", body);

    const url = `http://localhost:4000/user/signup`;

    axios.post(url, body).then((response) => {
      const result = response.data;
      console.log("2 : ", result);

      if (result["status"] == "success") {
        toast.success("sucessfully sign up");
      } else {
        toast.success(result["error"]);
      }
    });
  };

  return (
    <div>
      <h1>Signup 1</h1>

      <label>
        Name:
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        Email:
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        Password:
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
      </label>
      <button onClick={signUpUser} className="btn btn-primary">
        Signup
      </button>
    </div>
  );
};

export default Signup;
