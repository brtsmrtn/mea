import React from "react";

export const Modal = ({content, show, node, width, height, onClose}) => {
  const renderContent = React.useCallback(
    (node, content) => {
      return (
        <div className={`container ${node.type}}`} key={node.id}>
          <div className="close" onClick={onClose}>
            <div />
          </div>
          <div
            className="iframe"
            dangerouslySetInnerHTML={{__html: content?.link}}
          />
        </div>
      );
    },
    [width, height]
  );

  if (!content) return null;

  return (
    <div className="modal" style={{display: !show ? "none" : "block"}}>
      {content?.map((item) => renderContent(node, item))}
    </div>
  );
};
