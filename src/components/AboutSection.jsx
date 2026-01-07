import { Box, Code, Mountain } from "lucide-react";
import Resume from "../assets/Resume.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate <span className="text-primary">Game development</span>
            </h3>

            <p className="text-muted-foreground">
              With a deep passion for game development, I specialize in creating
              immersive experiences through robust code, detailed modeling, and
              breathtaking environments.
            </p>

            <p className="text-muted-foreground">
              I love turning creative ideas into interactive realities,
              constantly pushing the boundaries of technology to deliver
              memorable gameplay and stunning visuals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={Resume}
                download="Shemeem_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">C# Programmer</h4>
                  <p className="text-muted-foreground">
                    Developing robust game logic, AI systems, and core gameplay
                    mechanics using C#.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Box className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">3D Model</h4>
                  <p className="text-muted-foreground">
                    Crafting detailed 3D assets, characters, and props to bring
                    game worlds to life.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mountain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Terrain Designer</h4>
                  <p className="text-muted-foreground">
                    Designing immersive environments and landscapes with a focus
                    on atmosphere and flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
