import { IssueCard } from "../IssueCard";

type Issue = {
  message: string;
  author: string;
  id: number;
  time: string;
  avatar: string;
  picture?: string | undefined;
};

export const IssueList = ({ issues }: { issues: Issue[] }) => {
  return (
    <div className="grid my-6 grid-cols-1 gap-4 divide-y">
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};
