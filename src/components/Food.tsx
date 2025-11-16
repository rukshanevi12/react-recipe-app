import type { FoodProps } from "../Types/types";

const Food = ({ id, image, title, onClick }: FoodProps) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title fw-bold text-center text-danger">{title}</h5>
        <button
          onClick={() => onClick(id)}
          className="btn btn-gradient w-100 fw-bold"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default Food;
