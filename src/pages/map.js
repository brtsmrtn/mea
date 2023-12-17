import {Node as Node} from "@/components/Node";
import React from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useReactFlow,
} from "reactflow";
import {AppContext} from "@/context/AppContext";
import {About} from "@/components/About";
import {OALogo} from "@/components/OALogo";
import {Modal} from "@/components/Modal";
import {initialNodes} from "@/data/nodes";

function Flow(props) {
  const {setViewport} = useReactFlow();
  const {screenSize} = React.useContext(AppContext);

  const handleTransform = React.useCallback(
    (_, node) => {
      const {width, height, position} = node;
      const {x, y} = position;
      setViewport(
        {
          x: -x - width / 2 + screenSize.width / 2,
          y: -y - height / 2 + screenSize.height / 2,
          zoom: 1,
        },
        {duration: 800}
      );
    },
    [setViewport]
  );

  return <ReactFlow {...props} onNodeClick={handleTransform} />;
}

const App = () => {
  const [show, setShow] = React.useState(null);
  const [node, setNode] = React.useState(null);
  const [displayed, setDisplayed] = React.useState([]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const nodeTypes = React.useMemo(() => ({default: Node}), []);

  const {screenSize} = React.useContext(AppContext);
  const {width, height} = screenSize ?? {};
  const [bottom, setBottom] = React.useState("0px");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => setBottom(`${height - 240}px`), [height]);
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
          return {
            ...node,
            data: {
              ...node.data,
              main,
              sub,
              hidden: main ? false : !inc,
              clicked: main ? inc : false,
              onSelect,
            },
          };
        })
      ),
    [displayed]
  );

  return (
    <>
      <ReactFlowProvider>
        <Flow
          nodes={nodes}
          nodeTypes={nodeTypes}
          style={{filter: show ? "blur(3px)" : "unset"}}
          fitView
        />
      </ReactFlowProvider>
      <Modal
        content={node?.content}
        show={show}
        bottom={bottom}
        node={node}
        width={width}
        height={height}
        onClose={setNode}
      />
      <About open={open} onOpen={onOpen} />
      <OALogo />
    </>
  );
};

export default App;
