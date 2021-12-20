import PostItem from "./post-item";

function PostGrid(props) {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostGrid;
