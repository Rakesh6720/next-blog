import Image from "next/image";
function Hero() {
  return (
    <section>
      <div>
        <Image
          src="/images/site/rakesh-jordan.jpg"
          alt="An image showing Rakesh"
          width={250}
          height={300}
        />
      </div>
      <h1>Hi, I'm Rakesh</h1>
      <p>I blog about web development.</p>
    </section>
  );
}

export default Hero;
