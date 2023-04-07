import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";
import MainPost from "../../components/MainPost";
import HighlightedFeed from "../../components/HighlightedFeed";
import SectionName from "../../components/SectionName";
import BlurredBg from "../../components/BlurredBg";

const query = groq`
	*[_type == "post"] {
		...,
		author->,
		categories[]->
	} | order(_createdAt desc)
`;

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <p className="text-4xl my-2 mx-6">PREVIEW MODE</p>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return (
    <>
      <section id="HighlightedPosts">
        <BlurredBg
          darkBackground="/backgrounds/DarkMode/16.jpg"
          lightBackground="/backgrounds/LightMode/10.jpg"
        />
        <hr className=" mx-auto my-8 md:my-16 w-full max-w-[80%] border-[--primary1-dark1]" />
        <div
          className="flex flex-col mx-auto lg:flex-row items-center justify-center
        gap-10 sm:gap-16 lg:gap-28"
        >
          <MainPost posts={posts} />
          <hr className=" m-auto w-full max-w-[80%] border-[--primary1-dark1] lg:hidden" />
          <div className="">
            <HighlightedFeed posts={posts} />
          </div>
        </div>
      </section>

      <section id="BlogList" className="relative">
        <BlurredBg
          darkBackground="/backgrounds/DarkMode/6.jpg"
          lightBackground="/backgrounds/LightMode/8.jpg"
        />
        <hr className=" mx-auto my-16 w-full max-w-[80%] border-[--primary1-dark1]" />
        <div className="flex flex-col gap-8">
          <SectionName section={"Latest"} />
          <BlogList posts={posts} />
        </div>
      </section>
    </>
  );
}
