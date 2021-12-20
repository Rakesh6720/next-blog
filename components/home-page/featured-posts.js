import PostGrid from "../posts/posts-grid";

function FeaturedPosts(props) {
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
