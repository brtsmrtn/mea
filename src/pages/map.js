import {Node as Node} from "@/components/Node";
import React from "react";
import ReactFlow, {Background, useNodesState} from "reactflow";
import {AppContext} from "@/context/AppContext";
import {About} from "@/components/About";
import {OALogo} from "@/components/OALogo";
import {Modal} from "@/components/Modal";
import {initialNodes} from "@/data/nodes";

const App = () => {
  const [show, setShow] = React.useState(null);
  const [node, setNode] = React.useState(null);
  const [displayed, setDisplayed] = React.useState([]);

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
          const len = node.id.length === 1;
          const inc = displayed.includes(node.id[0]);
          return {
            ...node,
            data: {
              ...node.data,
              main: len,
              hidden: len ? false : !inc,
              clicked: len ? inc : false,
              onSelect,
            },
          };
        })
      ),
    [displayed]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const nodeTypes = React.useMemo(() => ({default: Node}), []);

  const {screenSize} = React.useContext(AppContext);
  const {width, height} = screenSize ?? {};
  const [bottom, setBottom] = React.useState("0px");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => setBottom(`${height - 240}px`), [height]);
  const onOpen = React.useCallback(() => setOpen(!open), [open]);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        style={{filter: show ? "blur(3px)" : "unset"}}
      >
        <Background />
      </ReactFlow>
      <Modal
        content={node?.content}
        show={show}
        bottom={bottom}
        id={node?.id}
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
