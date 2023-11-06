import React from "react";
import styles from "@/components/Modal.module.scss";

export const Modal = ({content, show, bottom, id, width, height, onClose}) => {
  const renderContent = React.useCallback(
    (id, content) => {
      const {type, text, video, image} = content ?? {};
      switch (type) {
        case "text":
          return (
            <div className={styles.textContainer} key={id}>
              <div className={styles.close} onClick={onClose}>
                <div />
              </div>
              <div className={styles.text}>{text}</div>
            </div>
          );
        case "video":
          return (
            <div className={styles.textContainer} key={id}>
              <div className={styles.close} onClick={onClose}>
                <div />
              </div>
              <div className={styles.video}>
                <video
                  style={{
                    maxWidth: `${width - 160}px`,
                    maxHeight: `${height - 240}px`,
                  }}
                  src={`./video/${video}`}
                  controls
                />
              </div>
            </div>
          );
        case "image":
          return (
            <div className={styles.textContainer} key={id}>
              <div className={styles.close} onClick={onClose}>
                <div />
              </div>
              <div className={styles.image}>
                <img
                  style={{
                    maxWidth: `${width - 160}px`,
                    maxHeight: `${height - 240}px`,
                  }}
                  preload="true"
                  src={`./img/${image}`}
                />
              </div>
            </div>
          );
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
        {content?.map((node) => renderContent(id, node))}
      </div>
    )
  );
};
