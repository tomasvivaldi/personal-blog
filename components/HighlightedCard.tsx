import React from "react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

interface Props {
  post: Post;
}

const HighlightedCard = ({ post }: Props) => {
  return (
    <div
      className="max-w-[95%] w-[400px] sm:w-[550px] lg:w-[400px] xl:w-[550px] flex flex-wrap
     items-center flex-col group"
    >
      <div className=" w-full group-hover:shadow-xl p-2 rounded-lg">
        <div className="flex flex-row gap-6 ">
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <div
              className="w-[100px] lg:w-[85px] h-auto shrink-0
             drop-shadow-xl shadow-black"
            >
              <Image
                className="rounded-lg aspect-square object-cover"
                src={urlFor(post.mainImage).url()}
                alt={post.description}
                width={100}
                height={100}
              />{" "}
            </div>
          </ClientSideRoute>

          <div className="flex flex-col w-fit">
            <ClientSideRoute
              route={`/post/${post.slug.current}`}
              key={post._id}
            >
              <div
                className="text-lg font-bold leading-100 tracking-1 md:text-xl lg:text-lg
             group-hover:underline group-hover:underline-offset-4 group-hover:decoration-[--primary1]  group-hover:decoration-3"
              >
                {post.title}
              </div>
            </ClientSideRoute>

            <div className="">{post.description}</div>
            <div className="text-[--primary1] font-light">
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightedCard;
