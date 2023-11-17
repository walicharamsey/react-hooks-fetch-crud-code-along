import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if name is not empty before adding
    if (name.trim() === "") {
      alert("Please enter a name for the item.");
      return;
    }

    // Create a new item object
    const newItem = {
      name: name,
      category: category,
      isInCart: false,
    };

    // Pass the new item to the parent component
    onAddItem(newItem);

    // Reset the form fields after adding
    setName("");
    setCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
