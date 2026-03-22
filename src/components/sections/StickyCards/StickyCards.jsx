import gsap from "gsap";
import "./StickyCards.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
  const cards = [
    {
      index: "01",
      title: "Languages & Core",
      image: "image_1.png",
      techLabel: "Core Stack",
      icons: ["python", "java", "mysql"],
      description:
        "Proficient in Python, SQL, and statistical analysis with a strong grasp of machine learning algorithms and data modeling. Python is my primary language for building predictive models and data pipelines, while SQL drives my approach to data extraction, transformation, and query optimization across relational databases.",
    },
    {
      index: "02",
      title: "Data Science & Analytics",
      image: "image_2.png",
      techLabel: "Tech Stack",
      icons: ["python", "pandas", "numpy", "scikitlearn", "mysql", "flask"],
      description:
        "Skilled in performing Exploratory Data Analysis (EDA) and building predictive models using Python's data ecosystem. I leverage Pandas and NumPy for complex data manipulations, and Scikit-Learn to design robust machine learning workflows — from data cleaning to model evaluation and deployment via Flask.",
    },
    {
      index: "03",
      title: "Machine Learning & AI",
      image: "machine.png",
      techLabel: "Tech Stack",
      icons: ["python", "nlp", "flask", "pandas", "scikitlearn"],
      description:
        "Experienced in building machine learning models for classification and natural language processing. Developed projects including sentiment analysis, recommendation systems, and predictive analytics with model deployment using Flask for web-based applications.",
    },
    {
      index: "04",
      title: "Tools & Workflow",
      image: "image_3.png",
      techLabel: "Tech Stack",
      icons: ["git", "github", "jupyter", "vscode", "powerbi", "excel"],
      description:
        "Versed in a professional data science workflow using Git for version control, Jupyter for exploratory analysis, and Power BI/Tableau for interactive dashboards. Experienced with cloud platforms and MLOps practices — deploying models and automating pipelines for real-time insights.",
    },
  ];

  const containerRef = useRef(null);

  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".sticky-card");
      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            end: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            pin: true,
            pinSpacing: false,
            scrub: 2,
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress;

              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                "--after-opacity": afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="sticky-cards" ref={containerRef}>
      {cards.map((card, index) => (
        <div className="sticky-card rounded-t-4xl" key={index}>
          <div className="sticky-card-index">
            <h1 className="text-6xl font-medium">({card.index})</h1>
          </div>
          <div className="sticky-card-content">
            <div className="sticky-card-content-wrapper">
              <h1 className="sticky-card-header text-3xl font-bold tracking-wider uppercase">
                {card.title}
              </h1>

              <div className="sticky-card-img">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="sticky-card-copy">
                <div className="sticky-card-copy-title">
                  <p className="text-2xl">({card.techLabel})</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      marginTop: "0.75rem",
                    }}
                  >
                    {Array.from(
                      { length: Math.ceil(card.icons.length / 3) },
                      (_, rowIndex) => (
                        <div
                          key={rowIndex}
                          style={{ display: "flex", gap: "1.5rem" }}
                        >
                          {card.icons
                            .slice(rowIndex * 3, rowIndex * 3 + 3)
                            .map((icon) => {
                              const isCustomIcon = ["pandas", "numpy", "nlp", "powerbi", "excel", "jupyter"].includes(icon);
                              let iconUrl = "";

                              if (icon === "nlp") {
                                iconUrl = "/nlp.png";
                              } else if (icon === "powerbi") {
                                iconUrl = "/powerbi.png";
                              } else if (icon === "excel") {
                                iconUrl = "/excel.png";
                              } else if (icon === "jupyter") {
                                iconUrl = "/jupyter.png";
                              } else if (isCustomIcon) {
                                iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;
                              } else {
                                iconUrl = `https://skillicons.dev/icons?i=${icon}`;
                              }

                              return (
                                <div
                                  key={icon}
                                  style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: isCustomIcon ? "#1a1a1a" : "transparent",
                                    padding: isCustomIcon ? "6px" : "0",
                                    borderRadius: isCustomIcon ? "8px" : "0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                  }}
                                >
                                  <img
                                    src={iconUrl}
                                    alt={icon}
                                    style={{
                                      width: isCustomIcon ? "100%" : 40,
                                      height: isCustomIcon ? "100%" : 40,
                                      objectFit: "contain"
                                    }}
                                    title={icon}
                                  />
                                </div>
                              );
                            })}
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="sticky-card-copy-description font-semibold">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCards;
