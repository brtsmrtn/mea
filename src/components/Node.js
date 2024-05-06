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
      onClick={(e) =>
        hidden === false ? onSelect(e, {id, type, content}) : null
      }
    >
      {type !== "cloud" ? (
        <span className={`color${id}`}>{label}</span>
      ) : (
        content[0].cloud
      )}
      {content?.length && content[0]?.svg && content[0].svg}
    </div>
  );
}
