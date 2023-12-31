import React from "react";
import styles from "@/components/Node.module.scss";

export function Node(props) {
  const {data, xPos, yPos, id} = props;
  const {content, label, onSelect, hidden, clicked, type, main, sub} =
    data ?? {};

  return (
    <div
      id={id}
      className={`${styles.Node} ${styles[type]} ${
        styles[main ? "large" : sub ? "micro" : "small"]
      } ${clicked ? styles.clicked : ""}`}
      style={{
        visibility: hidden === false ? "visible" : "hidden",
        opacity: hidden === false ? 1 : 0,
      }}
      onClick={(e) => onSelect(e, {id, type, content})}
    >
      <span className={styles[`color${id}`]}>{label}</span>
      {content?.length && content[0]?.svg && content[0].svg}
    </div>
  );
}
