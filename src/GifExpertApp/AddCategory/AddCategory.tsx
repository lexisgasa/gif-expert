import { useState } from "react";

interface AddCategoryProps {
  onNewCategory: (value: string) => void;
}

const AddCategory = ({
  onNewCategory,
}: AddCategoryProps): React.ReactElement => {
  const [inputValue, setInputvalue] = useState("");

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputvalue(event.target.value);
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    const newInputValue = inputValue.trim();

    event.preventDefault();

    if (newInputValue.length <= 1) return;

    onNewCategory(newInputValue);

    setInputvalue("");
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={changeValue}
      />
    </form>
  );
};

export default AddCategory;
