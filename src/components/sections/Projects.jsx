import ProjectTitle from "./ProjectSection/ProjectTitle";
import PinnedProjects from "./ProjectSection/PinnedProjects";
import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";

const PROJECTS = [
  {
    id: "inventorypro",
    title: "Movie Recommendation System with sentimental Analysis",
    tag: "Machine Learning · Streamlit",
    description:
      "A content-based movie recommendation system using TF-IDF and cosine similarity to suggest similar movies based on genre and metadata, integrated with a deep learning sentiment analysis model to classify user reviews as positive or negative, delivered through an interactive Streamlit interface.",
    image: "/movie.png",
    alt: "Movie Recommendation System with sentimental Analysis",
    deployUrl: "https://movierecommendationsystemforthewebsite-hra8w9ckqegyrn4ydqwpm7.streamlit.app/?view=home",
    githubUrl: "https://github.com/ArpitCodeNinja/Movie-Recommendation-System-with-sentimental-Analysis",
    techIcons: "Python , Streamlit , TensorFlow , Scikit-learn , Pandas , NLP , TF-IDF , Cosine Similarity",
  },
  {
    id: "Multi domain prediction",
    title: "Multi Domain Prediction System",
    tag: "Machine Learning · Streamlit",
    description:
      " A multi-domain prediction platform integrating six machine learning models for car price prediction, credit card fraud detection, emotion detection, fake news classification, house price prediction, and movie rating prediction, delivered through a unified Streamlit interface.",
    image: "/multidomain.png",
    alt: "Multi Domain Prediction System",
    deployUrl: "https://github.com/ArpitCodeNinja/multidomain_prediction",
    githubUrl: "https://github.com/ArpitCodeNinja/multidomain_prediction",
    techIcons: "Python , Streamlit , Scikit-learn , Pandas , NumPy , Machine Learning , NLP",
  },
  {
    id: "Telecom Customer Churn Dashboard",
    title: "Telecom Customer Churn Dashboard",
    tag: "Python · Power BI · MySql",
    description:
      " An interactive Power BI dashboard examining telecom customer churn patterns using MySQL data integration. Features churn predictions via Random Forest model in Python to identify key attrition factors, with data cleaning and DAX-based visualizations for churn trends, retention metrics, and high-risk customer segments.",
    image: "/churn.png",
    alt: "Telecom Customer Churn Dashboard",
    deployUrl: "https://app.powerbi.com/groups/me/reports/3cba64c4-e5de-49f0-8778-743522f897dc/67d1c9442d7e0d75a3c1?experience=power-bi",
    githubUrl: "https://github.com/ArpitCodeNinja/telecom-customer-churn-dashboard",
    techIcons: "Python , Power BI , MySql , Random Forest ",
  },
];

const ProjectCard = ({ project, index }) => {
  const { title, tag, description, deployUrl, githubUrl, techIcons } = project;

  return (
    <div className="flex flex-col gap-5 w-full m-8">
      <div className="flex items-end gap-3">
        <span className="font-black text-[clamp(72px,10vw,130px)] leading-none text-white select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="mb-4 text-[9px] tracking-[0.28em] uppercase text-[#c9ff00] border border-[#c9ff00]/25 px-3 py-1 rounded-full font-medium">
          {tag}
        </span>
      </div>

      <h3 className="text-[clamp(32px,4.5vw,62px)] font-black leading-none tracking-tight text-white">
        {title}
      </h3>

      <div className="w-18 h-px bg-white" />

      <p className="text-[13.5px] leading-[1.8] text-white/50 font-light max-w-2/3 max-md:max-w-full">
        {description}
      </p>

      <div>
        <p className="text-md tracking-[0.3em] uppercase text-white mb-2.5 font-medium">
          Tech Stack
        </p>
        <img
          src={`https://skillicons.dev/icons?i=${techIcons}&perline=9&theme=dark`}
          alt={`Tech used in ${title}`}
          className="h-10"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex items-center gap-2.5 flex-wrap pt-1">
        {deployUrl && (
          <a
            href={deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-8 py-3 rounded-full text-md font-semibold tracking-wide bg-[#c9ff00] text-black transition-[opacity,transform] duration-200 opacity-80 hover:opacity-100"
          >
            <RiExternalLinkLine size={25} />
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-8 py-3 rounded-full text-md font-semibold tracking-wide border border-white text-white transition-[border-color,transform,background-color] duration-200 hover:border-[#555] hover:text-black hover:bg-white"
          >
            <RiGithubFill size={25} />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectImage = ({ project }) => (
  <div className="relative w-full h-full min-h-125 rounded-2xl overflow-hidden">
    <img
      src={project.image}
      alt={project.alt}
      loading="lazy"
      decoding="async"
      className="pinned-project-img absolute inset-0 w-full h-full object-cover block"
    />
  </div>
);

const Projects = () => (
  <section
    id="projects"
    className="min-h-screen bg-[#0f0f0f]"
    aria-label="Projects"
  >
    <div>
      <ProjectTitle />

      <PinnedProjects
        leftWidth="w-[50%]"
        leftContent={PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            index={i}
            total={PROJECTS.length}
          />
        ))}
        rightContent={PROJECTS.map((p, i) => (
          <ProjectImage
            key={p.id}
            project={p}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      />

      <div className="h-[10vh]" />
    </div>
  </section>
);

export default Projects;
