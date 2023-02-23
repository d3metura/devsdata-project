import React from "react";
import "./styles.css";

export default function PageSelector({
  pageSize,
  numberOfCharacters,
  onPageSelected,
  selectedPageNumber,
}) {
  const pageCount = Math.ceil(numberOfCharacters / pageSize);

  const pageButtons = [];

  for (let i = 1; i <= pageCount; i++) {
    let className = "page-button";
    if (selectedPageNumber === i) {
      className += " page-button-selected";
    }
    const pageButton = (
      <p className={className} key={i} onClick={() => onPageSelected(i)}>
        {i}
      </p>
    );
    pageButtons.push(pageButton);
  }

  return <div className="page-selector">{pageButtons}</div>;
}
