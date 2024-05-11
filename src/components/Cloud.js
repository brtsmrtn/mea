export const Cloud = ({x = 0, y = 0, width = "auto", image}) => (
  <div style={{transform: `translate3d(${x}px, ${y}px, 0px)`}}>
    <img src={`img/${image}`} style={{width}} />
  </div>
);
