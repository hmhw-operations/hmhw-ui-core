import React, { useState } from "react";
import Select, { SelectOptionGroup } from "../Select";

const SelectWithOptionGroups = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const optionGroups: SelectOptionGroup[] = [
    {
      label: "Fruits",
      options: [
        { value: "apple", text: "Apple" },
        { value: "banana", text: "Banana" },
        { value: "orange", text: "Orange" }
      ]
    },
    {
      label: "Vegetables",
      options: [
        { value: "carrot", text: "Carrot" },
        { value: "potato", text: "Potato" },
        { value: "broccoli", text: "Broccoli" }
      ]
    }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={{ width: "300px", padding: "20px" }}>
      <h2>Select with Option Groups</h2>
      <Select
        id="food-select"
        title="Select Food"
        label="Choose a food item"
        optionGroups={optionGroups}
        value={selectedValue}
        onChange={handleChange}
        helperText="Items are grouped by category"
      />
      <div style={{ marginTop: "20px" }}>
        Selected value: <strong>{selectedValue}</strong>
      </div>
    </div>
  );
};

export default SelectWithOptionGroups;
