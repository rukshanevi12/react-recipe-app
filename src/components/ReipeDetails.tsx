import type { RecipeProps } from "../Types/types";

const ReipeDetails = ({ recipe }: { recipe: RecipeProps[] }) => {
  if (recipe.length === 0) return null;

  const currentRecipe = recipe[0];
  const instructions = currentRecipe.analyzedInstructions?.[0]?.steps || [];
  const ingredients = currentRecipe.extendedIngredients || [];

  return (
    <div className="card shadow-lg mb-5">
      <div className="row g-0">
        {/* Recipe Image */}
        <div className="col-md-5">
          <img
            src={currentRecipe.image}
            className="img-fluid rounded-start h-100 object-fit-cover"
            alt={currentRecipe.title}
          />
        </div>

        {/* Recipe Details */}
        <div className="col-md-7">
          <div className="card-body p-4">
            <h2 className="card-title fw-bold text-dark mb-4">
              {currentRecipe.title}
            </h2>

            <div className="row g-3 mb-4">
              {/* Servings */}
              <div className="col-6">
                <div className="p-3 bg-light rounded">
                  <div className="text-muted small">Servings</div>
                  <div className="fs-4 fw-bold text-dark">
                    {currentRecipe.servings}
                  </div>
                </div>
              </div>

              {/* Ready In */}
              <div className="col-6">
                <div className="p-3 bg-light rounded">
                  <div className="text-muted small">Ready In</div>
                  <div className="fs-4 fw-bold text-info">
                    {currentRecipe.readyInMinutes} min
                  </div>
                </div>
              </div>

              {/* Cooking Time */}
              <div className="col-6">
                <div className="p-3 bg-light rounded">
                  <div className="text-muted small">Cooking Time</div>
                  <div className="fs-4 fw-bold text-danger">
                    {currentRecipe.cookingMinutes} min
                  </div>
                </div>
              </div>

              {/* Preparation Time */}
              <div className="col-6">
                <div className="p-3 bg-light rounded">
                  <div className="text-muted small">Prep Time</div>
                  <div className="fs-4 fw-bold text-info">
                    {currentRecipe.preparationMinutes} min
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="alert alert-info d-flex align-items-center justify-content-between">
              <div>
                <strong>Price Per Serving</strong>
              </div>
              <div className="fs-3 fw-bold">
                ${(parseFloat(currentRecipe.pricePerServing) / 100).toFixed(2)}
              </div>
            </div>

            {/* Recipe ID Badge */}
            <div className="mt-3">
              <span className="badge bg-secondary">
                Recipe ID: {currentRecipe.id}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      {ingredients.length > 0 && (
        <div className="card-body border-top">
          <h3 className="fw-bold text-dark mb-4">
            <i className="bi bi-cart"></i> Ingredients
          </h3>
          <div className="row">
            {ingredients.map((ingredient) => (
              <div key={ingredient.id} className="col-md-6 mb-3">
                <div className="d-flex align-items-center p-3 bg-light rounded">
                  <img
                    src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
                    alt={ingredient.name}
                    className="rounded me-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex-grow-1">
                    <div className="fw-bold text-capitalize">
                      {ingredient.name}
                    </div>
                    <div className="text-muted small">
                      {ingredient.amount} {ingredient.unit}
                    </div>
                    <div className="text-secondary small fst-italic">
                      {ingredient.original}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions Section */}
      {instructions.length > 0 && (
        <div className="card-body border-top">
          <h3 className="fw-bold text-dark mb-4">
            <i className="bi bi-list-ol"></i> Instructions
          </h3>
          <div className="row">
            <div className="col-12">
              {instructions.map((step, index) => (
                <div key={step.number} className="mb-4">
                  <div className="d-flex align-items-start">
                    <div className="me-3">
                      <span className="badge bg-dark rounded-circle p-3 fs-5">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-2 fs-6 text-dark">{step.step}</p>

                      {/* Equipment */}
                      {step.equipment && step.equipment.length > 0 && (
                        <div className="mt-2">
                          <small className="text-muted fw-bold">
                            Equipment:{" "}
                          </small>
                          {step.equipment.map((item, idx) => (
                            <span
                              key={idx}
                              className="badge bg-light text-dark me-1"
                            >
                              {item.name}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Time */}
                      {step.length && (
                        <div className="mt-2">
                          <small className="text-muted">
                            <i className="bi bi-clock"></i> {step.length.number}{" "}
                            {step.length.unit}
                          </small>
                        </div>
                      )}
                    </div>
                  </div>
                  {index < instructions.length - 1 && <hr className="my-3" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReipeDetails;
