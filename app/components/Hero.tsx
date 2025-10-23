import Link from "next/link";

export default function Hero() {
  return (
    <div className='px-2 lg:px-4 bg-[url("/images/hero.png")] bg-cover'>
      <main className="py-10 px-4 lg:p-50 ">
        <h6 className="text-white text-center lg:px-30 mb-5 md:mb-10">
          Empowering 21st-century learning rooted in Bhutanese values and guided
          by Gross National Happiness, blending academic excellence with
          well-being, cultural identity, and sustainable citizenship.
        </h6>
        <div className="flex justify-center items-center">
          <Link href="/about-us" className="flex justify-center items-center text-xs md:text-base bg-white px-3 py-1 md:px-6 md:py-3 rounded shadow transition delay-150 duration-300 ease-in-out hover:scale-110 hover:font-bold hover:cursor-pointer hover:-translate-y-0.5 hover:shadow">
            About Us
          </Link>
        </div>
      </main>
    </div>
  );
}
