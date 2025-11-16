import type { RecipeProps } from "../Types/types";

const ReipeDetails = ({ recipe }: { recipe: RecipeProps[] }) => {
  if (recipe.length === 0) return null;

  const currentRecipe = recipe[0];
  const instructions = currentRecipe.analyzedInstructions?.[0]?.steps || [];
  const ingredients = currentRecipe.extendedIngredients || [];

  const exportRecipe = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${currentRecipe.title}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
          h1 { color: #333; border-bottom: 3px solid #333; padding-bottom: 10px; }
          h2 { color: #555; margin-top: 30px; }
          .info { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 20px 0; }
          .info-item { background: #f5f5f5; padding: 15px; border-radius: 5px; }
          .info-label { font-weight: bold; color: #666; font-size: 12px; }
          .info-value { font-size: 18px; font-weight: bold; color: #333; margin-top: 5px; }
          .ingredients { margin: 20px 0; }
          .ingredient { margin: 10px 0; padding: 10px; background: #f9f9f9; border-radius: 5px; }
          .instructions { margin: 20px 0; }
          .step { margin: 20px 0; padding-left: 40px; position: relative; }
          .step-number { position: absolute; left: 0; top: 0; background: #333; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
          .equipment { margin-top: 10px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <h1>${currentRecipe.title}</h1>
        <div class="info">
          <div class="info-item">
            <div class="info-label">Servings</div>
            <div class="info-value">${currentRecipe.servings}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Ready In</div>
            <div class="info-value">${currentRecipe.readyInMinutes} min</div>
          </div>
          <div class="info-item">
            <div class="info-label">Cooking Time</div>
            <div class="info-value">${currentRecipe.cookingMinutes} min</div>
          </div>
          <div class="info-item">
            <div class="info-label">Prep Time</div>
            <div class="info-value">${
              currentRecipe.preparationMinutes
            } min</div>
          </div>
        </div>
        <div class="info-item">
          <div class="info-label">Price Per Serving</div>
          <div class="info-value">${(
            parseFloat(currentRecipe.pricePerServing) / 100
          ).toFixed(2)}</div>
        </div>
        <h2>Ingredients</h2>
        <div class="ingredients">
          ${ingredients
            .map(
              (ing) => `
            <div class="ingredient">
              <strong>${ing.name}</strong> - ${ing.amount} ${ing.unit}
            </div>
          `
            )
            .join("")}
        </div>
        <h2>Instructions</h2>
        <div class="instructions">
          ${instructions
            .map(
              (step) => `
            <div class="step">
              <div class="step-number">${step.number}</div>
              <div>${step.step}</div>
              ${
                step.equipment && step.equipment.length > 0
                  ? `
                <div class="equipment">Equipment: ${step.equipment
                  .map((e) => e.name)
                  .join(", ")}</div>
              `
                  : ""
              }
            </div>
          `
            )
            .join("")}
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
    };
  };

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
            <div className="d-flex justify-content-between align-items-start mb-4">
              <h2 className="card-title fw-bold text-dark mb-0">
                {currentRecipe.title}
              </h2>
              <button
                onClick={exportRecipe}
                className="btn btn-success btn-sm d-flex align-items-center gap-2"
              >
                <i className="bi bi-download"></i>
                Export
              </button>
            </div>

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
                    {currentRecipe.cookingMinutes &&
                    currentRecipe.cookingMinutes > 0
                      ? `${currentRecipe.cookingMinutes} min`
                      : "Not specified"}
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="p-3 bg-light rounded">
                  <div className="text-muted small">Prep Time</div>
                  <div className="fs-4 fw-bold text-info">
                    {currentRecipe.preparationMinutes &&
                    currentRecipe.preparationMinutes > 0
                      ? `${currentRecipe.preparationMinutes} min`
                      : "Not specified"}
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
