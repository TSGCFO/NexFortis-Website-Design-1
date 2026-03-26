import { PageHero, Section, SectionHeader } from "@/components/ui-elements";
import { SEO, ServiceSchema, BreadcrumbSchema } from "@/components/seo";
import { Map, ListChecks, SearchCheck, ArrowRight, Shield, TrendingUp, Clock, CheckCircle2, MessageCircle, Target, Rocket, BarChart2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ITConsulting() {
  const services = [
    {
      icon: Map,
      title: "Strategic IT Consultation",
      desc: "We act as your virtual CIO. We evaluate your current systems, understand your long-term business objectives, and create a roadmap for digital transformation. From cloud migration strategy to cybersecurity posture assessments, we ensure your tech stack is an asset, not a liability.",
      highlights: ["Technology roadmap development", "Cloud migration planning", "Vendor evaluation & selection"],
    },
    {
      icon: ListChecks,
      title: "Project Management",
      desc: "Implementing new software or upgrading infrastructure shouldn't disrupt your daily operations. Our certified project managers handle end-to-end execution — requirements gathering, vendor coordination, milestone tracking, and user training.",
      highlights: ["End-to-end execution", "On-time, on-budget delivery", "User training & adoption"],
    },
    {
      icon: SearchCheck,
      title: "Technology Audits",
      desc: "Are you overpaying for unused licenses? Are there glaring security holes in your network? Our comprehensive IT audits review your hardware, software, security, and compliance standing, providing you with a clear, actionable report.",
      highlights: ["License optimization", "Security gap analysis", "Compliance review"],
    },
  ];

  const stats = [
    { icon: Shield, value: "100%", label: "Client satisfaction rate" },
    { icon: TrendingUp, value: "40%", label: "Average cost reduction" },
    { icon: Clock, value: "24h", label: "Response time SLA" },
  ];

  return (
    <div>
      <SEO title="IT Consulting & Managed IT Services" description="Virtual CIO services, strategic IT consulting, technology audits, and project management for Canadian businesses. Reduce costs, close security gaps, and modernize your infrastructure." path="/services/it-consulting" />
      <ServiceSchema name="IT Consulting & Project Management" description="Strategic IT consulting, project management, technology audits, and virtual CIO services for Canadian businesses." url="https://nexfortis.com/services/it-consulting" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nexfortis.com/" },
        { name: "Services", url: "https://nexfortis.com/services" },
        { name: "IT Consulting", url: "https://nexfortis.com/services/it-consulting" },
      ]} />
      <PageHero 
        title="IT Consulting & Project Management" 
        subtitle="Strategic technology guidance to align your IT infrastructure with your business goals."
      />

      <Section bg="white">
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-secondary border border-border"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-4xl font-display font-extrabold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-20">
          {services.map((svc, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                    <svc.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{svc.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-3 text-foreground font-medium">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-secondary rounded-3xl p-12 border border-border aspect-[4/3] flex items-center justify-center">
                    <svc.icon className="w-24 h-24 text-accent/20" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section bg="secondary">
        <SectionHeader
          title="Our Engagement Process"
          subtitle="A structured approach that delivers measurable results without disrupting your day-to-day business."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            { step: "01", icon: MessageCircle, title: "Discovery Call", desc: "A free 30-minute session to understand your current technology pain points, business goals, and priorities — no commitment required." },
            { step: "02", icon: Target, title: "Audit & Roadmap", desc: "We conduct a thorough assessment of your systems, security posture, and licensing costs, then deliver a prioritized action plan with clear ROI projections." },
            { step: "03", icon: Rocket, title: "Implementation", desc: "Our project managers execute the roadmap on your timeline — coordinating vendors, training staff, and hitting every milestone on budget." },
            { step: "04", icon: BarChart2, title: "Ongoing Review", desc: "Regular check-ins, performance reviews, and strategy updates ensure your IT investment continues to drive business value as you grow." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative bg-card p-8 rounded-2xl border border-border"
            >
              <span className="text-6xl font-display font-extrabold text-accent/10 absolute -top-4 -left-2" aria-hidden="true">{item.step}</span>
              <item.icon className="w-8 h-8 text-accent mb-4 relative z-10 mt-6" aria-hidden="true" />
              <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section bg="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Let's Build Your IT Strategy</h2>
          <p className="text-lg text-white/80 mb-10">
            Book a free 30-minute consultation to discuss your technology challenges and goals.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 min-h-[48px] rounded-xl bg-warning text-white font-bold text-lg hover:bg-warning/90 transition-all items-center justify-center gap-2 hover:-translate-y-0.5">
            Book a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
