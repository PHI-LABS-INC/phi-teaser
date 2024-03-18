import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas-lite";

export default function Confetti() {
  return <Rive src="/confetti.riv" stateMachines={["Explosion"]} layout={new Layout({ fit: Fit.Cover, alignment: Alignment.Center })} />;
}
