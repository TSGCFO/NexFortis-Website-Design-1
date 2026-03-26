import { PageHero, Section, SectionHeader } from "@/components/ui-elements";
import { SEO, ServiceSchema } from "@/components/seo";
import { Zap, Code2, GitMerge, ArrowRight, CheckCircle2, Workflow, Bot, Layers } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function AutomationSoftware() {
  const capabilities = [
    {
      icon: Zap,
      title: "Workflow Automation",
      desc: "Utilize tools like Power Automate, Zapier, and Make to connect your favorite apps. Automatically trigger emails, update CRMs, and notify teams without lifting a finger.",
    },
    {
      icon: GitMerge,
      title: "Custom Integrations",
      desc: "Complex API integrations to sync data between legacy systems and modern cloud platforms. We build custom middleware that transforms and routes data safely.",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      desc: "Need a bespoke client portal, internal dashboard, or custom inventory system? Our developers build secure, scalable web applications from the ground up.",
    },
  ];

  const useCases = [
    {
      title: "Automated Invoice Processing",
      desc: "PDF invoices arrive via email \u2192 AI extracts text \u2192 Data is pushed to QuickBooks \u2192 Approval request sent via Teams.",
      icon: Bot,
    },
    {
      title: "Custom Client Portal",
      desc: "A secure web portal where your clients can log in, view project status, download documents, and pay invoices.",
      icon: Layers,
    },
    {
      title: "Multi-System Data Sync",
      desc: "Ensure your HubSpot CRM, inventory database, and marketing email lists are always perfectly synchronized in real-time.",
      icon: Workflow,
    },
  ];

  const techStack = [
    "Power Automate", "Zapier", "Make (Integromat)", "Node.js", "Python",
    "React", "PostgreSQL", "REST APIs", "GraphQL", "Azure Functions",
  ];

  return (
    <div>
      <SEO title="Workflow Automation & Custom Software" description="Custom workflow automation, API integrations, and full-stack development. Power Automate, Zapier, and bespoke solutions." path="/services/automation-software" />
      <ServiceSchema name="Workflow Automation & Custom Software" description="Custom workflow automation, API integrations, and full-stack web application development." />
      <PageHero 
        title="Workflow Automation & Custom Software" 
        subtitle="Eliminate manual busywork and build bespoke tools that run your business flawlessly."
      />

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">Custom Solutions</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Engineered for Efficiency
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Off-the-shelf software doesn't always fit. We build the bridges and applications that make your data flow seamlessly between systems, eliminating hours of manual work.
            </p>
            <ul className="space-y-3">
              {["Reduce manual data entry by up to 90%", "Real-time data sync across all systems", "Custom dashboards and reporting", "Scalable architecture that grows with you"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-secondary border border-border hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <cap.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{cap.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="secondary">
        <SectionHeader title="Real-World Use Cases" subtitle="See how automation transforms everyday business operations." centered />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border relative overflow-hidden group hover:border-accent/50 transition-colors"
            >
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <uc.icon className="w-24 h-24 text-accent" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <uc.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{uc.title}</h3>
              <p className="text-muted-foreground relative z-10 leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader title="Our Technology Stack" subtitle="We work with the best tools and platforms to deliver robust solutions." centered />
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {techStack.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: i * 0.04 }}
              className="px-5 py-2.5 rounded-full bg-secondary border border-border text-foreground font-medium text-sm hover:border-accent/50 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </Section>

      <Section bg="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to Automate?</h2>
          <p className="text-lg text-white/80 mb-10">
            Tell us about your workflow challenges and we'll design a custom solution that saves your team hours every week.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 min-h-[48px] rounded-xl bg-warning text-white font-bold text-lg hover:bg-warning/90 transition-all items-center justify-center gap-2 hover:-translate-y-0.5">
            Discuss Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
