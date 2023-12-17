import React from "react";
import styles from "@/components/Modal.module.scss";

export const Modal = ({
  content,
  show,
  bottom,
  node,
  width,
  height,
  onClose,
}) => {
  const renderContent = React.useCallback(
    (node, content) => {
      const {type, svg, link} = content ?? {};

      switch (type) {
        case "svg": {
          return <div>{svg}</div>;
        }
        case "embed": {
          return (
            <div
              className={`${styles.container} ${styles[node.type]}`}
              key={node.id}
            >
              <div className={styles.close} onClick={onClose}>
                <div />
              </div>
              <div
                className={styles.iframe}
                dangerouslySetInnerHTML={{__html: link}}
              />
            </div>
          );
        }
      }
    },
    [width, height]
  );

  return (
    content && (
      <div
        className={styles.Modal}
        style={{
          display: !show ? "none" : "block",
          //bottom,
          /* width: !show ? 0 : width,
	height: !show ? 0 : height, */
        }}
      >
        {content?.map((item) => renderContent(node, item))}
      </div>
    )
  );
};
