import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify({ name: "User" }));
    navigate("/profile");
  };

  return (
    <div style={{ padding: "80px", color: "#fff" }}>
      <h2>Login</h2>
      <button
        onClick={handleLogin}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "red",
          color: "#fff",
        }}
      >
        Login
      </button>
    </div>
  );
}
