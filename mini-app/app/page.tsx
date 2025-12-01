import { useState } from "react";
import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";

export { generateMetadata };

export default function Home() {
  const [winner, setWinner] = useState<string | null>(null);
  const [running, setRunning] = useState(false);

  const startRace = () => {
    setRunning(true);
    setWinner(null);
    setTimeout(() => {
      const horses = ["Thunder", "Lightning", "Storm"];
      const win = horses[Math.floor(Math.random() * horses.length)];
      setWinner(win);
      setRunning(false);
    }, 2000);
  };

  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={startRace}
        disabled={running}
      >
        {running ? "Racing..." : "Start Race"}
      </button>
      {winner && (
        <div className="mt-4 text-center">
          <p className="text-xl">Winner: {winner}</p>
          <p className="text-lg">🎉 You earned a virtual trophy! 🎉</p>
        </div>
      )}
    </main>
  );
}
