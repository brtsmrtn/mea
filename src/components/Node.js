import React from "react";
import styles from "@/components/Node.module.scss";

export function Node(props) {
  const {data, xPos, yPos, id} = props;
  const {content, label, onSelect, hidden, clicked, type, main} = data ?? {};

  return (
    <div
      id={id}
      title={label}
      className={`${styles.Node} ${styles[type]}  ${
        styles[main ? "large" : "small"]
      } ${clicked ? styles.clicked : ""}`}
      style={{
        visibility: hidden === false ? "visible" : "hidden",
        opacity: hidden === false ? 1 : 0,
      }}
      onClick={(e) => onSelect(e, {id, content})}
    />
  );
}
