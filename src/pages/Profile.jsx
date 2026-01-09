import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ padding: "80px", color: "#fff" }}>
      <h2>User Profile</h2>
      <button
        onClick={logout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "red",
          color: "#fff",
        }}
      >
        Logout
      </button>
    </div>
  );
}
