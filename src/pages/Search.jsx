import { useSearch } from "../context/SearchContext";

export default function Search() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div style={{ padding: "80px", color: "#fff" }}>
      <h2>Search Products</h2>

      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginTop: "20px",
          padding: "10px",
          width: "300px",
          background: "#111",
          border: "1px solid #333",
          color: "#fff",
        }}
      />
    </div>
  );
}
