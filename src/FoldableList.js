import React, { useState } from "react";
import LabeledListItem from "./LabeledListItem";
import "./styles.css";

export default function FoldableList({ label, values, labelPropertyName }) {
  const [isHidden, setIsHidden] = useState(true);

  const items = values.map((value, index) => (
    <LabeledListItem
      key={index}
      url={value}
      labelPropertyName={labelPropertyName}
    />
  ));

  return (
    <div className="foldable-list-container">
      <p onClick={() => setIsHidden((prevHidden) => !prevHidden)}>{label}</p>
      {!isHidden && items}
    </div>
  );
}
