import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>full stack with expressjs and react </h1>
      <h2>JOKE:{jokes.length}</h2>

      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
