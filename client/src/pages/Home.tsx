import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, GitBranch, Shield, Smartphone, Cloud } from "lucide-react";
import { useState } from "react";

/**
 * WhatsFlow Landing Page - Technisch-Minimalistisches Design
 * Design-Prinzipien:
 * - Extreme Klarheit durch Whitespace und Typografie-Hierarchie
 * - Monochrome Basis mit elektrischem Cyan (#00D9FF) als Akzent
 * - Geometrische Elemente für technische Eleganz
 * - Subtile, schnelle Animationen
 */

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

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
        {/* Background geometric elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container max-w-6xl">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="space-y-8">
              <div className="space-y-4">
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

            {/* Right: Hero Image */}
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

      {/* Workflow Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              A streamlined workflow from development to production deployment.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663063192003/XsCKYZ8gWf3PnNe7bj4Sbz/whatsflow-feature-automation-736K576FsrbPWJvnv8gkHW.webp"
              alt="Automation Pipeline"
              className="w-full rounded-lg"
            />
          </div>

          <div className="grid grid-cols-4 gap-8 mt-12">
            {[
              { step: "1", label: "Code", desc: "Write bot logic" },
              { step: "2", label: "Build", desc: "Automated testing" },
              { step: "3", label: "Deploy", desc: "Push to cloud" },
              { step: "4", label: "Run", desc: "Live WhatsApp bot" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-display font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-24 px-4 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Tech Stack</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Built with modern, production-proven technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            {/* Left: Tech Stack Image */}
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663063192003/XsCKYZ8gWf3PnNe7bj4Sbz/whatsflow-tech-stack-4TxevcJrzibTDumsfnKhiE.webp"
                alt="Tech Stack"
                className="w-full rounded-lg"
              />
            </div>

            {/* Right: Tech Details */}
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

      {/* Mobile Integration Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663063192003/XsCKYZ8gWf3PnNe7bj4Sbz/whatsflow-mobile-integration-YR9oZmnjMid9YngMA9kNb7.webp"
                alt="Mobile Integration"
                className="w-full rounded-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-display font-bold mb-4">
                  Develop on
                  <br />
                  <span className="text-primary">Any Device</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  WhatsFlow is optimized for Android environments using UserLand. Build, test, and deploy production-ready WhatsApp bots directly from your mobile device without requiring a traditional development machine.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Full Development Environment</p>
                    <p className="text-sm text-gray-600">Python, Git, Docker all on Android</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Seamless Deployment</p>
                    <p className="text-sm text-gray-600">Push to cloud with a single command</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">Real-time Monitoring</p>
                    <p className="text-sm text-gray-600">Track bot performance on the go</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Flow Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Deployment Pipeline</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              From mobile device to production in three simple steps.
            </p>
          </div>

          <div className="bg-white p-12 rounded-lg border border-border">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663063192003/XsCKYZ8gWf3PnNe7bj4Sbz/whatsflow-deployment-flow-4ncM2yfPhnWDEnNvgV3n2m.webp"
              alt="Deployment Flow"
              className="w-full max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
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
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
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
