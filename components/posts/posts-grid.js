import { createClassNameString } from "react-syntax-highlighter/dist/cjs/create-element";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";
function PostGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
