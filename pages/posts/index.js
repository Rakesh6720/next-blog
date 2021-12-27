import AllPosts from "../../components/posts/all-posts";
import Head from "next/head";
import { getAllPosts } from "../../lib/post-util";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
