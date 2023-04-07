import React from "react";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "../lib/urlFor";

type Props = {
  posts: Post[];
};

function MainPost({ posts }: Props) {
  const highlightedPosts = posts.filter((post) =>
    post.categories.find((category) => category.title === "Highlighted")
  );

  const sortedHighlightedPosts = highlightedPosts.sort((a, b) => {
    return (
      new Date(b._updatedAt as string).getTime() -
      new Date(a._updatedAt as string).getTime()
    );
  });

  const newestHighlightedPost = sortedHighlightedPosts[0];

  const newestHighlightedPostDate =
    newestHighlightedPost._updatedAt.split("T")[0];

  return (
    <div className=" flex flex-wrap items-center flex-col">
      <div className="group m-auto">
        <div className="relative block  mx-auto">
          {newestHighlightedPost && (
            <ClientSideRoute
              route={`/post/${newestHighlightedPost.slug.current}`}
              key={newestHighlightedPost._id}
            >
              <div className=" group flex-grow-0 flex-shrink-0 flex flex-col items-end">
                <div
                  className="flex-grow-0 flex-shrink-0 w-[380px] sm:w-[450px] lg:w-[400px] xl:w-[450px] h-auto 
                relative block box-border mx-auto sm:mr-auto sm:mx-0 drop-shadow-md shadow-black  group-hover:shadow-xl"
                >
                  <Image
                    className=" m-auto rounded-xl aspect-[1/1]"
                    src={urlFor(newestHighlightedPost.mainImage).url()}
                    alt={newestHighlightedPost.author.name}
                    width={1500}
                    height={1500}
                  />
                </div>
                <div className=" relative min-h-full w-[400px] sm:w-[500px] -mt-10 sm:-mt-12 text-left">
                  <div className="z-20 font-semibold text-gray-800 dark:text-white w-full flex flex-col">
                    <h2 className="  border-x-inherit text-5xl sm:text-6xl ">
                      <span
                        className="mainpost-shadow-red dark:group-hover:text-red-200 group-hover:text-gray-200 ease-in-out before:block 
                      text-white dark:text-white before:inset-0 before:content:'' text-shadow"
                      >
                        {newestHighlightedPost.title}
                      </span>
                    </h2>
                    <p className=" text-xl mt-4">
                      {newestHighlightedPost.description}
                    </p>
                    <p className=" text-[--primary1]">
                      {new Date(
                        newestHighlightedPost._createdAt
                      ).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </ClientSideRoute>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPost;
