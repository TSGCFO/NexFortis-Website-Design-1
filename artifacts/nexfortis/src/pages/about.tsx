import { PageHero, Section, SectionHeader } from "@/components/ui-elements";
import { SEO } from "@/components/seo";
import { Target, Lightbulb, Users, Minimize2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    { icon: Target, title: "Integrity", desc: "Honest advice and transparent pricing. We recommend what you need, nothing more." },
    { icon: Lightbulb, title: "Innovation", desc: "Staying ahead of the tech curve to bring you the most modern and effective tools." },
    { icon: Users, title: "Client-First", desc: "Your success is our success. We prioritize your business goals in every project." },
    { icon: Minimize2, title: "Simplicity", desc: "Making complex technology easy to understand and effortless to use." },
  ];

  return (
    <div>
      <SEO title="About Us" description="Learn about NexFortis IT Solutions — our mission, vision, and values. Empowering Canadian businesses with innovative IT solutions since day one." path="/about" />
      <PageHero 
        title="About NexFortis" 
        subtitle="Empowering Canadian businesses with innovative, reliable, and scalable IT solutions."
        imagePath={`${import.meta.env.BASE_URL}images/about-team.png`}
      />

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded with a vision to demystify technology for modern enterprises, NexFortis IT Solutions has grown into a trusted partner for businesses across Canada. 
              </p>
              <p>
                We realized that many organizations struggle with fragmented IT setups — juggling different vendors for marketing, cloud infrastructure, accounting software, and bespoke automation. We bridge that gap by offering true end-to-end solutions under one roof.
              </p>
              <p>
                Our headquarters in Nobleton, Ontario serves as the hub for our dedicated team of engineers, developers, and consultants who are passionate about driving your business forward.
              </p>
            </div>
          </div>
          <div className="bg-secondary rounded-3xl p-10 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-8">
              To seamlessly integrate robust technology solutions that enhance operational efficiency, ensure data security, and catalyze limitless growth for our clients.
            </p>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground">
              To be Canada's premier IT partner, recognized for transforming complex technical challenges into competitive business advantages.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="secondary">
        <SectionHeader title="Core Values" centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center"
              >
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{val.title}</h4>
                <p className="text-muted-foreground">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section bg="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-lg text-white/80 mb-10">
            Ready to transform your business with technology? We'd love to hear from you.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 min-h-[48px] rounded-xl bg-warning text-white font-bold text-lg hover:bg-warning/90 transition-all items-center justify-center gap-2 hover:-translate-y-0.5">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
