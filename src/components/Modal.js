import React from "react";

export const Modal = ({nodes, active, onSelect, width, height}) => {
  const [displayed, setDisplayed] = React.useState([]);

  const onSelect_ = React.useCallback(
    (newId, oldId) => {
      setDisplayed([...displayed, oldId]);
      onSelect(newId);
    },
    [displayed]
  );

  const renderContent = React.useCallback(
    (index) => {
      const {id, data} = nodes[index];
      const prev = index === 0 ? nodes[nodes.length - 1] : nodes[index - 1];
      const next = index === nodes.length - 1 ? nodes[0] : nodes[index + 1];

      return (
        <div className={`container ${data.type}`}>
          <div className="header">
            <div className="label">{data.label}</div>
            <div className="left" onClick={() => onSelect_(prev.id, id)} />
            <div className="right" onClick={() => onSelect_(next.id, id)} />
            <div className="close" onClick={() => onSelect_(undefined, id)} />
          </div>
          <div
            className="iframe"
            dangerouslySetInnerHTML={{__html: data.content.link}}
          />
        </div>
      );
    },
    [nodes, width, height]
  );

  if (!active) return null;
  if (nodes.length === 0) return null;

  const nodeIndex = nodes.findIndex((node) => node.id === active);
  const node = nodes[nodeIndex];
  const first = node.id.length === 1 && !displayed.includes(node.id);

  return (
    <div className={`modal ${first ? "delayed" : ""}`} key={active}>
      {renderContent(nodeIndex)}
    </div>
  );
};
