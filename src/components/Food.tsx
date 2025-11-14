import type { FoodProps } from "../Types/types";

const Food = ({ id, image, title }: FoodProps) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="text-muted">ID: {id}</p>
        <button className="btn btn-gradient w-100 fw-bold">View Recipe</button>
      </div>
    </div>
  );
};

export default Food;
