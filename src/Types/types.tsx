import type { ChangeEvent } from "react";

export interface FoodProps {
  id: number;
  image: string;
  title: string;
  onClick: (id: number) => void;
}

export interface FoodDetailProps {
  id: number;
}

export interface searchProps {
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Add these interfaces to your Types/types.ts file

export interface InstructionStep {
  number: number;
  step: string;
  ingredients?: Array<{
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }>;
  equipment?: Array<{
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }>;
  length?: {
    number: number;
    unit: string;
  };
}

export interface AnalyzedInstructions {
  name: string;
  steps: InstructionStep[];
}

// Add this interface to your Types/types.ts file

export interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
}

// Update RecipeProps interface
export interface RecipeProps {
  id: number;
  title: string;
  image: string;
  servings: string;
  readyInMinutes: number;
  cookingMinutes: number;
  preparationMinutes: string;
  pricePerServing: string;
  analyzedInstructions?: AnalyzedInstructions[];
  extendedIngredients?: ExtendedIngredient[];
}
