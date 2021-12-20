import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

const DUMMY_POST = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with NextJS",
    image: "getting-started-with-nextjs1.png",
    date: "2022-01-01",
    content: "# First Post",
  },
];

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST[0].slug}/${DUMMY_POST[0].image}`;
  return (
    <>
      <PostHeader title={DUMMY_POST[0].title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST[0].content}</ReactMarkdown>
    </>
  );
}

export default PostContent;
