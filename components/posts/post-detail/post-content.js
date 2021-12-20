import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

function PostContent(props) {
  const imagePath = `/images/posts/${props.post.slug}}/${props.post.image}`;
  return (
    <>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </>
  );
}

export default PostContent;
