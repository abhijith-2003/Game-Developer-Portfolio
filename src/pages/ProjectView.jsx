import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Download, Play } from "lucide-react";
import { projects } from "@/data/projects";
import { useEffect } from "react";

export const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="cosmic-button flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 relative">
      <button
        onClick={() => navigate("/#projects")}
        className="fixed top-10 left-4 md:left-8 p-2 text-muted-foreground hover:text-primary transition-colors z-50 bg-background/80 backdrop-blur-sm rounded-full"
        aria-label="Back"
      >
        <ArrowLeft size={32} />
      </button>

      <div className="container mx-auto max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <h1 className="text-3xl md:text-5xl font-bold text-left">
              {project.title}
            </h1>

            <div className="p-6 md:p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-left">
                About the Game
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-left">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 pt-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button flex items-center justify-center gap-2"
              >
                <Play size={20} /> Play Now
              </a>
              <a
                href={project.downloadUrl}
                download
                className="px-4 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Download size={20} /> Download
              </a>
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images?.map((img, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg border border-white/10 group ${
                  index === 0 ? "md:col-span-2 h-64 md:h-80" : "h-48"
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
