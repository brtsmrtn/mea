import {Node as Node} from "@/components/Node";
import React from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useReactFlow,
} from "reactflow";
import {About} from "@/components/About";
import {OALogo} from "@/components/OALogo";
import {Modal} from "@/components/Modal";
import {initialNodes} from "@/data/nodes";
import {ReplayIntro} from "@/components/ReplayIntro";

function Flow(props) {
  const {w, h, ...rest} = props;
  const {setViewport} = useReactFlow();

  const handleTransform = React.useCallback(
    (_, node) => {
      const {width, height, position} = node;
      const {x, y} = position;
      setViewport(
        {
          x: -x - width / 2 + w / 2,
          y: -y - height / 2 + h / 2,
          zoom: 1,
        },
        {duration: 800}
      );
    },
    [setViewport]
  );

  return <ReactFlow {...rest} onNodeClick={handleTransform} />;
}

export const Map = ({width, height, toggleIntro}) => {
  const [show, setShow] = React.useState(null);
  const [node, setNode] = React.useState(null);
  const [displayed, setDisplayed] = React.useState([]);
  const [nodes, setNodes] = useNodesState();
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

  React.useEffect(
    () =>
      setNodes(
        initialNodes.map((node) => {
          const main = node.id.length === 1;
          const sub = node.id.length === 3;
          const inc = displayed.includes(node.id[0]);
          let move = false;
          console.log(
            displayed,
            node.id,
            node.id === "V" && displayed.includes("1")
          );
          if (node.id === "V" && displayed.includes("5")) move = true;
          if (node.id === "W" && displayed.includes("4")) move = true;
          if (node.id === "X" && displayed.includes("2")) move = true;
          if (node.id === "Y" && displayed.includes("1")) move = true;
          if (node.id === "Z" && displayed.includes("3")) move = true;
          return {
            ...node,
            data: {
              ...node.data,
              main,
              sub,
              hidden: main ? false : !inc,
              clicked: main ? inc : false,
              move,
              onSelect,
            },
          };
        })
      ),
    [displayed, width, height]
  );

  React.useEffect(() => {
    if (reactFlowInstance && nodes?.length) {
      reactFlowInstance.setCenter(width / 3.5, height / 2.5, {
        duration: 200,
        zoom: 0.65,
      });
    }
  }, [reactFlowInstance, nodes?.length]);

  return (
    <div className="map">
      <ReactFlowProvider>
        <Flow
          nodes={nodes}
          nodeTypes={nodeTypes}
          style={{filter: show ? "blur(3px)" : "unset"}}
          w={width}
          h={height}
          onInit={setReactFlowInstance}
          /* zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false} */
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
