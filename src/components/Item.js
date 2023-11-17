import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleAddToCartClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to update item.");
        }
        return r.json();
      })
      .then((updatedItem) => onUpdateItem(updatedItem))
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  }

  function handleDeleteClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to delete item.");
        }
        return r.json();
      })
      .then(() => onDeleteItem(item))
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button
        className={item.isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default Item;
