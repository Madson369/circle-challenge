export const Circle = ({ initialX, initialY }) => {
  return (
    <div
      className="Circle"
      style={{
        left: `${initialX - 12}px`,
        top: `${initialY - 12}px`,
      }}
    />
  );
};
