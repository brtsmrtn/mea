import React from "react";

export function Node(props) {
  const {data, id} = props;
  const {content, label, onSelect, hidden, clicked, type, main, sub, move} =
    data ?? {};

  return (
    <div
      id={id}
      key={id}
      className={`node ${type} ${main ? "large" : sub ? "micro" : "small"} ${
        clicked ? "clicked" : ""
      } ${move ? "move" : ""}`}
      style={{
        visibility: hidden === false ? "visible" : "hidden",
        opacity: hidden === false ? 1 : 0,
      }}
      onClick={() => (hidden === false ? onSelect(id) : null)}
    >
      {type !== "cloud" ? (
        <span className={`color${id}`}>{label}</span>
      ) : (
        content.cloud
      )}
      {content?.svg && content.svg}
    </div>
  );
}
