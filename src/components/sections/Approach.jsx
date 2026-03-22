import FlipCards from "./FlipCards/FlipCards";

const Approach = () => {
  return (
    <div id="approach" className="min-h-screen bg-black">
      <section className="intro relative w-screen h-screen p-8 bg-[#0f0f0f] text-white text-center content-center">
        <h1 className="text-9xl font-medium uppercase leading-none md:w-2/3 w-full my-0 mx-auto">
          Every Solution Begins With A Single Data Point
        </h1>
      </section>

      <FlipCards />

      <section className="outro relative w-screen h-screen p-8 bg-[#0f0f0f] text-white text-center content-center">
        <h1 className="text-9xl font-medium uppercase leading-none md:w-2/3 w-full my-0 mx-auto">
          I Bridge The Gap Between Numbers And Impact
        </h1>
      </section>
    </div>
  );
};

export default Approach;
