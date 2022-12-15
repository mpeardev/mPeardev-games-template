import { Home, GamesView } from "..";

export function HomePage({ breakpoint }) {
  return (
    <div>
      <Home breakpoint={breakpoint} />
      <GamesView breakpoint={breakpoint} />
    </div>
  );
}
