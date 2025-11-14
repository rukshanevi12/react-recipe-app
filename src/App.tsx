import { useEffect, useState, type ChangeEvent } from "react";
import Search from "./components/Search";
import Food from "./components/Food";
import type { FoodProps } from "./Types/types";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const url = `${baseUrl}/recipes/complexSearch`;

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<FoodProps[]>([]);

  const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!text) {
        setList([]);
        return;
      }
      const res = await fetch(`${url}?query=${text}&apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setList(data.results);
    };
    fetchData();
  }, [text]);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 text-primary fw-bold">
        🍽️ Recipe Finder
      </h1>

      <div className="mb-5">
        <Search text={text} onChange={setInputValue} />
      </div>

      {list.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {list.map((item) => (
            <div className="col" key={item.id}>
              <Food id={item.id} image={item.image} title={item.title} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted fs-5">
          Start typing to search for recipes...
        </p>
      )}
    </div>
  );
}

export default App;
