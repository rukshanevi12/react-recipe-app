import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import RecipeDetails from "../components/ReipeDetails";
import type { RecipeProps } from "../Types/types";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<RecipeProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchFoodRecipe = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${baseUrl}/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`
        );

        const data = await res.json();

        if (data.code === 402 || data.status === "failure") {
          setError(data.message);
        } else {
          const parsedData: RecipeProps = {
            id: data.id,
            title: data.title,
            image: data.image,
            servings: String(data.servings),
            readyInMinutes: data.readyInMinutes,
            cookingMinutes: data.cookingMinutes,
            preparationMinutes: String(data.preparationMinutes),
            pricePerServing: String(data.pricePerServing),
            analyzedInstructions: data.analyzedInstructions,
            extendedIngredients: data.extendedIngredients,
          };

          setRecipe([parsedData]);
        }
      } catch (error) {
        setError("Failed to fetch recipe details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchFoodRecipe();
  }, [id]);

  return (
    <>
      <Nav />
      <div className="container py-5">
        <button onClick={() => navigate(-1)} className="btn btn-dark mb-4">
          <i className="bi bi-arrow-left me-2"></i>
          Back to Search
        </button>

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
        ) : (
          <RecipeDetails recipe={recipe} />
        )}
      </div>
    </>
  );
};

export default RecipePage;
