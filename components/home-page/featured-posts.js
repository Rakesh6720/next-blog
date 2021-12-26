import { getFeaturedPosts } from "../../lib/post-util";
import PostGrid from "../posts/posts-grid";

function FeaturedPosts({ posts }) {
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
export default FeaturedPosts;
