import { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setusername] = useState("");
  const [Password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, Password });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[500px]  border text-center">
        <form onSubmit={handleSubmit}>
          <h2>login</h2>
          <input
            className="border p-1 w-1/2 rounded-[8px] m-2"
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
          />
          <input
            className="border w-1/2 p-1 rounded-[8px] m-2"
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="border py-2 px-4 text-[#FFF] bg-[#444] w-1/2 rounded-xl m-2"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
