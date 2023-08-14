import { useState } from "react";
import { IssueCard } from "../IssueCard";
import { cn } from "@/lib/utils";

type Issue = {
  message: string;
  author: string;
  id: number;
  time: string;
  avatar: string;
  picture?: string | undefined;
};

export const IssueList = ({ issues }: { issues: Issue[] }) => {
  const [currentList, setCurrentList] = useState<Issue[]>(issues.slice(0, 7));
  const [offset, setOffset] = useState<number>(8);

  const btnClickHandler = () => {
    setOffset((prev) => {
      return prev + 8;
    });
    setCurrentList((prev) => [...prev, ...issues.slice(offset, offset + 7)]);
  };
  return (
    <>
      <div className="grid my-6 grid-cols-1 gap-4 divide-y">
        {currentList.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
      <div
        className={cn(
          "flex hover:text-pink transition-colors h-12 justify-center",
          { hidden: offset >= issues.length }
        )}
      >
        <button className="text-sm" onClick={() => btnClickHandler()}>
          - 加载更多 -
        </button>
      </div>
    </>
  );
};
