import React from "react";
import "./GridLayout.css";
function GridLayout({
  children,
  gridAutoColumns,
  gridTemplateRows,
  gap,
  gridTemplateAreas,
  gridTemplateColumns,
  additionalStyle,
}) {
  return (
    <div
      className="grid-layout"
      style={{
        gridAutoColumns: gridAutoColumns,
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
        gap: gap,
        gridTemplateAreas: gridTemplateAreas,
        ...additionalStyle,
      }}
    >
      {children}
    </div>
  );
}

export default GridLayout;
