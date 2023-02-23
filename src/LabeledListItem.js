import React, { useState, useEffect } from "react";
import "./styles.css";

export default function LabeledListItem({ url, labelPropertyName }) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLabel(data[labelPropertyName]));
  }, []);

  return <p>{label}</p>;
}
