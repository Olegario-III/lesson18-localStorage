import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [isLoaded, setIsLoaded] = useState(false); // 🧩 New flag

  // 🧩 Load saved users from localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
    setIsLoaded(true); // Mark that initial load is done
  }, []);

  // 💾 Save users only AFTER initial load
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users, isLoaded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.trim() === "" || form.email.trim() === "") return;

    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
    };

    setUsers([...users, newUser]);
    setForm({ name: "", email: "" });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="App">
      <h1>Lesson 18: Save Data with localStorage</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> — {u.email}
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
