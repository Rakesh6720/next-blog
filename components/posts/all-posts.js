import PostGrid from "./posts-grid";

function AllPosts(props) {
  return (
    <section>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
