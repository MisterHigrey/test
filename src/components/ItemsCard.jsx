import React, { useState, useEffect } from "react";

function ItemsCard() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="card">
      <h2>Items</h2>
      <input
        type="text"
        placeholder="Enter item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsCard;
