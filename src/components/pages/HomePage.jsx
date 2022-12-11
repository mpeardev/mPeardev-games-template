import { Blackjack, Home, Memory } from "..";

export function HomePage() {
  const container = {
    width: "100%",
    overflow: "hidden",
  };

  return (
    <div style={container}>
      <Home />
      <Blackjack />
      <Memory />
    </div>
  );
}
