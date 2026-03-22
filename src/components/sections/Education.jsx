import EducationalSection from "./Educational-Section/EducationalSection";

const Education = () => {
  return (
    <div id="education" className="min-h-screen bg-white">
      <section className="intro relative w-screen overflow-hidden">
        <h1 className="uppercase text-center text-9xl w-2/3 font-semibold leading-none text-black">
          My Educational Journey
        </h1>
      </section>

      <EducationalSection />
    </div>
  );
};

export default Education;
