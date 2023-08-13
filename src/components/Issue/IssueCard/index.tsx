import { LazyFancyboxImage, LazyImage } from "@/components/LazyImage";

type Issue = {
  message: string;
  author: string;
  id: number;
  time: string;
  avatar: string;
  picture?: string | undefined;
};

export const IssueCard = ({ issue }: { issue: Issue }) => {
  return (
    <div className="w-full flex py-4">
      <div className="overflow-hidden rounded-full w-10 h-10 sm:w-12 sm:h-12">
        <LazyImage src={issue.avatar} width="100" height="100" />
      </div>
      <div className="flex flex-col ml-4 pt-2 w-full">
        <div className="flex items-center justify-between text-sm">
          <div className="text-xs sm:text-sm">{issue.time}</div>
          <div className="text-xs">{`# ${issue.id}`}</div>
        </div>
        <p className="text-sm/8 sm:text-base/8 mt-2">{issue.message}</p>
        {issue.picture && (
          <div className="h-32 mt-2 w-32 rounded-sm overflow-hidden">
            <LazyFancyboxImage src={issue.picture} />
          </div>
        )}
      </div>
    </div>
  );
};
