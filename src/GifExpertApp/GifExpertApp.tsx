import { useState } from "react";
import AddCategory from "./AddCategory/AddCategory";
import GifGrid from "./GifGrid/GifGrid";
import "./GifExpertApp.css";

const existingWord = (categories: string[], value: string) =>
  categories.find((category) => category.toLowerCase() === value.toLowerCase());

const GifExpertApp = (): React.ReactElement => {
  const [categories, setCategories] = useState([
    "One Piece",
    "Dragon Ball",
    "Jujutsu Kaisen",
  ]);

  const onAddCategory = (value: string): void => {
    const newCategory = existingWord(categories, value);

    if (newCategory) return;

    setCategories((currentCategories) => [...currentCategories, value]);
  };

  console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
