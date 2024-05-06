import {Node as Node} from "@/components/Node";
import React from "react";
import ReactFlow, {ReactFlowProvider, useReactFlow} from "reactflow";
import {About} from "@/components/About";
import {OALogo} from "@/components/OALogo";
import {Modal} from "@/components/Modal";
import {initialNodes} from "@/data/nodes";
import {ReplayIntro} from "@/components/ReplayIntro";

function Flow(props) {
  const {w, h, ...rest} = props;
  const {setViewport} = useReactFlow();

  const handleTransform = React.useCallback(
    (_, {position}) =>
      setViewport(
        {
          x: -position.x + w / 2,
          y: -position.y + h / 2,
          zoom: 1,
        },
        {duration: 800}
      ),
    [setViewport, w, h]
  );

  return <ReactFlow {...rest} onNodeClick={handleTransform} />;
}

export const Map = ({width, height, toggleIntro}) => {
  const [show, setShow] = React.useState(null);
  const [node, setNode] = React.useState(null);
  const [displayed, setDisplayed] = React.useState([]);
  const nodeTypes = React.useMemo(() => {
    return {default: Node};
  }, []);
  const [open, setOpen] = React.useState(false);
  const [reactFlowInstance, setReactFlowInstance] = React.useState(null);

  const onOpen = React.useCallback(() => setOpen(!open), [open]);

  const onSelect = React.useCallback(
    (e, node) => {
      if (e) e.preventDefault();
      const {id} = node ?? {};
      if (displayed.includes(id)) return;

      if (id.length === 1) {
        setDisplayed([...displayed, id]);
      }
      setNode(node);
    },
    [displayed]
  );

  React.useEffect(() => {
    setShow(!node?.content ? false : !show);
  }, [node]);

  const nodes = React.useMemo(
    () =>
      initialNodes.map((node) => {
        const main = node.id.length === 1;
        const sub = node.id.length === 3;
        const inc = displayed.includes(node.id[0]);
        const isIn = (id, cn) => node.id === id && displayed.includes(cn);

        return {
          ...node,
          data: {
            ...node.data,
            main,
            sub,
            hidden: main ? false : !inc,
            clicked: main ? inc : false,
            move:
              isIn("B", "5") ||
              isIn("C", "4") ||
              isIn("D", "2") ||
              isIn("E", "1") ||
              isIn("F", "3"),
            onSelect,
          },
        };
      }),
    [displayed, width, height]
  );

  React.useEffect(() => {
    if (reactFlowInstance) {
      const zoom =
        width > 1920 ? 0.75 : width > 600 ? 0.6 : width > 450 ? 0.45 : 0.4;
      const h =
        width > height
          ? height > 1200
            ? height / 2.5
            : height / 2
          : height / 2;
      reactFlowInstance.setCenter(0, h, {zoom});
    }
  }, [reactFlowInstance, width, height]);

  return (
    <div className="map">
      <ReactFlowProvider>
        <Flow
          nodes={nodes}
          nodeTypes={nodeTypes}
          style={{filter: show ? "blur(3px)" : "unset"}}
          onInit={setReactFlowInstance}
          w={width}
          h={height}
          minZoom={0.6}
          maxZoom={2}
        />
      </ReactFlowProvider>
      <Modal
        content={node?.content}
        show={show}
        node={node}
        width={width}
        height={height}
        onClose={setNode}
      />
      <About open={open} onOpen={onOpen} />
      <OALogo />
      <ReplayIntro toggleIntro={toggleIntro} />
    </div>
  );
};
