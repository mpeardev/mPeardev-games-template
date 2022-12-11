import "./titles.scss";

export function Title({ title = "title", size = "auto" }) {
  return <h1 style={{ fontSize: size }}>{title}</h1>;
}
