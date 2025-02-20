import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {

  function handleCategoryClick(category){
    onSelectCategory(category);

  }

  return (
    <div className="categories">
      
      {/* render <button> elements for each category here */}

      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
