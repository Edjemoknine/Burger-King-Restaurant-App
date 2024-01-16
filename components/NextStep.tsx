"use client";
import { DeleteOrder, NextStage } from "@/actions/action";

const NextStep = ({ id, stage }: { id: string; stage: number }) => {
  const changeStatus = async () => {
    if (stage === 4) {
      await DeleteOrder(id);
    } else {
      await NextStage(id);
    }
  };

  return (
    <button
      onClick={changeStatus}
      className="border rounded-lg px-1.5 py-1 text-xs hover:bg-amber-700 duration-300"
    >
      Next Step
    </button>
  );
};

export default NextStep;
