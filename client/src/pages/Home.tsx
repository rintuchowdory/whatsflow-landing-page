import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, GitBranch, Shield, Smartphone, Cloud, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

/**
 * WhatsFlow Landing Page - Enhanced Professional Design
 * Design-Prinzipien:
 * - Moderne, professionelle Ästhetik mit Portfolio-Integration
 * - Elektrisches Cyan (#00D9FF) als primärer Akzent
 * - Dunkle und helle Elemente für visuelles Interesse
 * - Interaktive Portfolio-Showcase
 */

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "WhatsApp Chatbot Dashboard",
      description: "Full-featured dashboard for managing WhatsApp bots with real-time analytics and chat monitoring.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663063192003/XsCKYZ8gWf3PnNe7bj4Sbz/portfolio-project-1-bvqSSLYWVQiRTWXVuHeMZt.webp",
      tags: ["React", "FastAPI", "WebSocket", "Analytics"],
      link: "#"
    },
    {
      title: "Mobile Bot Manager",
      description: "Android-optimized application for deploying and managing WhatsApp bots directly from mobile devices.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663063192003/XsCKYZ8gWf3PnNe7bj4Sbz/portfolio-project-2-JWpXyxqjvsboK5HPKhog7F.webp",
      tags: ["React Native", "Python", "Docker", "CI/CD"],
      link: "#"
    },
    {
      title: "Analytics & Monitoring",
      description: "Real-time monitoring dashboard with performance metrics, traffic analysis, and system health tracking.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663063192003/XsCKYZ8gWf3PnNe7bj4Sbz/portfolio-project-3-BXUQ7tcDbnQbK69GVpKmGo.webp",
      tags: ["D3.js", "Node.js", "PostgreSQL", "Real-time"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-display font-bold text-lg">WhatsFlow</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#tech" className="text-sm font-medium hover:text-primary transition-colors">
              Tech Stack
            </a>
            <a href="#github" className="text-sm font-medium hover:text-primary transition-colors">
              GitHub
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container max-w-6xl">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                    ✨ Revolutionary Bot Development
                  </span>
                </div>
                <h1 className="text-6xl font-display font-bold leading-tight">
                  Build WhatsApp Bots
                  <br />
                  <span className="text-primary">From Your Phone</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  WhatsFlow is a WhatsApp chatbot platform with CI/CD automation, built entirely for Android environments. Deploy production-ready bots using only a mobile device.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-base group">
                  Start Building
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-base font-semibold">
                  View Docs
                </Button>
              </div>

              <div className="flex gap-12 pt-8 border-t border-border">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-display">Built with</p>
                  <p className="text-sm font-semibold mt-2">Python • FastAPI • Docker</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-display">Deployed on</p>
                  <p className="text-sm font-semibold mt-2">GitHub Actions • Cloud</p>
                </div>
              </div>
            </div>

            <div className="relative h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663063192003/XsCKYZ8gWf3PnNe7bj4Sbz/whatsflow-hero-abstract-AbA6Xahn3cY8GoQ6ZG99jP.webp"
                alt="WhatsFlow Hero"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Core Features</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Everything you need to build, deploy, and scale a production-ready WhatsApp bot from your mobile device.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "REST API",
                description: "FastAPI backend with full REST API for seamless integration and automation."
              },
              {
                icon: Zap,
                title: "CI/CD Automation",
                description: "GitHub Actions integration for automatic testing, building, and deployment."
              },
              {
                icon: GitBranch,
                title: "Version Control",
                description: "Full Git workflow support for managing bot versions and rollbacks."
              },
              {
                icon: Shield,
                title: "Secure Webhooks",
                description: "Secure webhook handling with WhatsApp Cloud API integration."
              },
              {
                icon: Smartphone,
                title: "Android Native",
                description: "Optimized for UserLand environment on Android devices."
              },
              {
                icon: Cloud,
                title: "Dockerized",
                description: "Container-based deployment for consistent environments."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-border rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${
                    hoveredFeature === idx ? "bg-primary text-white scale-110" : "bg-primary/10 text-primary"
                  }`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Showcase of professional projects built with WhatsFlow technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-border hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="grid grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredProject === idx ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Profile Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-xl border border-border p-12 text-center">
            <div className="mb-8 flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663063192003/XsCKYZ8gWf3PnNe7bj4Sbz/developer-avatar-Kfu9roLAqwwHFAXLPChueE.webp"
                alt="Developer"
                className="w-32 h-32 rounded-full border-4 border-primary"
              />
            </div>

            <h2 className="text-3xl font-display font-bold mb-2">Rintuchowdory</h2>
            <p className="text-primary font-semibold mb-4">Full Stack Developer & Open Source Enthusiast</p>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Passionate about building innovative solutions for mobile-first development. Specialized in Python, FastAPI, and modern DevOps practices. Creator of WhatsFlow - revolutionizing bot development on Android.
            </p>

            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            <div className="flex gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
                Connect
              </Button>
              <Button variant="outline">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-24 px-4">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Tech Stack</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Built with modern, production-proven technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663063192003/XsCKYZ8gWf3PnNe7bj4Sbz/whatsflow-tech-stack-4TxevcJrzibTDumsfnKhiE.webp"
                alt="Tech Stack"
                className="w-full rounded-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-xl mb-4">Backend</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-semibold">Python</p>
                      <p className="text-sm text-gray-600">Core bot logic and API</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-semibold">FastAPI</p>
                      <p className="text-sm text-gray-600">High-performance REST API</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl mb-4">DevOps</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-semibold">Docker</p>
                      <p className="text-sm text-gray-600">Containerized deployment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-semibold">GitHub Actions</p>
                      <p className="text-sm text-gray-600">Automated CI/CD pipeline</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl mb-4">Integration</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-semibold">WhatsApp Cloud API</p>
                      <p className="text-sm text-gray-600">Official messaging platform</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-semibold">SQLite Database</p>
                      <p className="text-sm text-gray-600">Lightweight data persistence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-gray-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container max-w-4xl text-center">
          <h2 className="text-5xl font-display font-bold mb-6">
            Ready to Build?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Start building production-ready WhatsApp bots today. Join developers who are revolutionizing bot development on mobile.
          </p>

          <div className="flex gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-base group">
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-base font-semibold">
              Read Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="github" className="border-t border-border py-12 px-4">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-display font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="https://github.com/rintuchowdory/WhatsFlow" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">License</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs">W</span>
              </div>
              <span className="font-display font-bold">WhatsFlow</span>
            </div>
            <p className="text-sm text-gray-600">
              © 2026 WhatsFlow. Built with ❤️ for developers.
            </p>
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="https://github.com/rintuchowdory/WhatsFlow" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
