export function Content({ children }) {
  const style = {
    width: "100%",
    maxWidth: "1500px",
    margin: "0 auto",
    padding: "0 2%",
  };

  return <div style={style}>{children}</div>;
}
