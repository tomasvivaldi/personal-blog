import React from "react";
import ClientSideRoute from "./ClientSideRoute";
import HighlightedCard from "./HighlightedCard";

type Props = {
  posts: Post[];
};

const HighlightedFeed = ({ posts }: Props) => {
  const articlesShown = 5;
  const highlightedPosts = posts.filter((post) =>
    post.categories.find((category) => category.title === "Highlighted")
  );

  return (
    <div className="flex flex-col gap-4 mx-auto bg-slate-800/10 rounded-xl max-w-[95%] sm:px-4 py-8 md:p-8 dark:bg-slate-800/60">
      <div className="text-lg text-white sm:mb-4">
        <span
          className="z-20 mx-4 relative inline-block before:-z-10 before:block before:absolute 
        before:-inset-1 before:-skew-y-3 before:bg-[--primary1]"
        >
          Highlighted Posts
        </span>
      </div>
      <div>
        {highlightedPosts.slice(0)?.map((item, index) => (
          <React.Fragment key={item._id}>
            <div>
              <HighlightedCard post={item} />
            </div>
            {index !== highlightedPosts.length - 1 && (
              <hr className="my-6 border-gray-600 mx-auto max-w-[95%]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HighlightedFeed;
