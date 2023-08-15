import { IssueCard } from "../IssueCard";

type Issue = {
  message: string;
  author: string;
  id: number;
  time: string;
  avatar: string;
  picture?: string | undefined;
};

export const IndexIssue = ({ issues }: { issues: Issue[] }) => {
  return (
    <div className="grid grid-cols-1 border-b divide-y">
      {issues.slice(0, 5).map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};
