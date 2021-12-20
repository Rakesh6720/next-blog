import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs1",
      title: "Getting Started with NextJS",
      image: "getting-started-with-nextjs1.png",
      excerpt: "NextJS is the fullstack ReactJS framework",
      date: "2022-01-01",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started with NextJS",
      image: "getting-started-with-nextjs2.png",
      excerpt: "NextJS is the fullstack ReactJS framework",
      date: "2022-01-01",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started with NextJS",
      image: "getting-started-with-nextjs3.png",
      excerpt: "NextJS is the fullstack ReactJS framework",
      date: "2022-01-01",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started with NextJS",
      image: "getting-started-with-nextjs4.png",
      excerpt: "NextJS is the fullstack ReactJS framework",
      date: "2022-01-01",
    },
  ];
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
