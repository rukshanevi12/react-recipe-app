import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import Food from "../components/Food";
import type { FoodProps } from "../Types/types";
import Nav from "../components/Nav";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const url = `${baseUrl}/recipes`;

function HomePage() {
  const [text, setText] = useState("");
  const [list, setList] = useState<FoodProps[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const showFoodDetails = (id: number) => {
    navigate(`/recipe/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = text || "pasta";

        const res = await fetch(
          `${url}/complexSearch?query=${query}&number=12&apiKey=${apiKey}`
        );
        const data = await res.json();

        if (data.code === 402 || data.status === "failure") {
          setError(data.message);
          setList([]);
        } else if (data.results) {
          setList(data.results);
          setError("");
        } else {
          setList([]);
          setError("");
        }
      } catch (error) {
        setError("Failed to fetch recipes. Please try again.");
        setList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [text]);

  return (
    <>
      <Nav />
      <div className="container py-5">
        <div className="mb-5">
          <Search text={text} onChange={setInputValue} />
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        ) : list.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {list.map((item) => (
              <div className="col" key={item.id}>
                <Food
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  onClick={showFoodDetails}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted fs-5">
            No recipes found. Try a different search term.
          </p>
        )}
      </div>
    </>
  );
}

export default HomePage;
