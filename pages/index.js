import Hero from "../components/home-page/hero";
import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/post-util";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Rakesh's Blog</title>
        <meta
          name="description"
          content="I post about programming and education"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
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

export default HomePage;
