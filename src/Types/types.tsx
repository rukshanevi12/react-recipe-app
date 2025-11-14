import type { ChangeEvent } from "react";

export interface FoodProps {
  id: number;
  image: string;
  title: string;
}

export interface searchProps {
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
