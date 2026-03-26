import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ShieldCheck, Monitor, Cloud, Database, Cog, LayoutDashboard,
  ArrowRight, CheckCircle2, Users, Award, Clock, Globe,
  TrendingUp, Zap
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui-elements";
import { SEO, OrganizationSchema } from "@/components/seo";

const services = [
  {
    icon: Monitor,
    title: "Digital Marketing & Web Presence",
    description: "Custom websites, SEO, Google Ads, and content creation that convert visitors into loyal customers. We handle your entire digital storefront.",
    benefits: ["Mobile-first responsive design", "Monthly SEO reporting", "Dedicated account manager"],
    href: "/services/digital-marketing",
    badge: "Web & SEO",
  },
  {
    icon: Cloud,
    title: "Microsoft 365 Solutions",
    description: "Enterprise-grade email, Teams, SharePoint, and zero-trust security deployment — with zero-downtime migration and 30-day post-launch support.",
    benefits: ["Microsoft Authorized Partner", "Zero-downtime migration", "Intune device management"],
    href: "/services/microsoft-365",
    badge: "Cloud & Productivity",
  },
  {
    icon: Database,
    title: "QuickBooks Migration & Tools",
    description: "100% accuracy-guaranteed data migration from Sage, SAP, Xero, and more. Plus custom add-on tools to extend your QuickBooks capabilities.",
    benefits: ["Money-back guarantee", "Same-day expedited service", "Certified ProAdvisor team"],
    href: "/services/quickbooks",
    badge: "Accounting & Finance",
  },
  {
    icon: Cog,
    title: "IT Consulting & Strategy",
    description: "Virtual CIO services, technology audits, and project management to align your IT infrastructure with your business growth goals.",
    benefits: ["Technology roadmap planning", "License cost optimization", "Security gap analysis"],
    href: "/services/it-consulting",
    badge: "Strategy & Advisory",
  },
  {
    icon: LayoutDashboard,
    title: "Workflow Automation & Custom Software",
    description: "Eliminate manual data entry with Power Automate, Zapier, custom APIs, and bespoke web applications built for your exact process.",
    benefits: ["Reduce manual work by up to 90%", "Real-time multi-system sync", "Custom dashboards & reporting"],
    href: "/services/automation-software",
    badge: "Automation & Dev",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Businesses Served" },
  { icon: Award, value: "10+", label: "Years of Experience" },
  { icon: Clock, value: "24h", label: "Response Time SLA" },
  { icon: Globe, value: "CA", label: "Canadian-Based Team" },
];

const whyUs = [
  { title: "End-to-End IT Under One Roof", desc: "From marketing websites to cloud infrastructure — no juggling multiple vendors. NexFortis is your single point of contact for every technology need." },
  { title: "Microsoft Authorized Partner", desc: "Certified expertise in the Microsoft ecosystem including Microsoft 365, Azure, and Intune MDM for businesses of every size." },
  { title: "Scalable Solutions for Every Budget", desc: "Whether you're a five-person shop or a 200-seat enterprise, our solutions grow with you. We tailor recommendations to your stage and budget." },
  { title: "Canadian-Based, Privacy-First Support", desc: "Our team is local, our data handling complies with Canadian privacy standards (PIPEDA), and our response times reflect a business you can depend on." },
];

export default function Home() {
  return (
    <div className="w-full">
      <SEO
        title="NexFortis IT Solutions"
        description="NexFortis delivers end-to-end IT solutions for Canadian businesses — managed IT, Microsoft 365, QuickBooks migration, digital marketing, and workflow automation. Get a free consultation today."
        path="/"
      />
      <OrganizationSchema />

      <section className="relative min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt=""
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            loading="eager"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/80 to-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8">
              <ShieldCheck className="w-4 h-4 text-accent" aria-hidden="true" />
              Canada's Trusted Managed IT Partner
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8">
              Your Business.<br />
              <span className="text-gradient-teal">Our Technology.</span><br />
              Limitless Growth.
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              From managed IT and Microsoft 365 to QuickBooks migration and digital marketing — NexFortis is the all-in-one IT partner Canadian businesses trust to scale securely.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-xl bg-warning text-warning-foreground font-bold text-lg hover:bg-warning/90 hover:-translate-y-1 transition-all shadow-xl shadow-warning/20 flex items-center justify-center gap-2"
              >
                Get a Free Consultation <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-primary/95 border-b border-white/10" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="text-center"
              >
                <stat.icon className="w-7 h-7 text-accent mx-auto mb-3" aria-hidden="true" />
                <div className="text-3xl md:text-4xl font-display font-extrabold text-white mb-1">{stat.value}</div>
                <p className="text-white/60 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-12" aria-label="Trust badges">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Certified Partners &amp; Trusted by Modern Canadian Businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-3 font-display font-bold text-xl text-primary">
              <Cloud className="w-8 h-8 text-accent" aria-hidden="true" />
              Microsoft Authorized Partner
            </div>
            <div className="flex items-center gap-3 font-display font-bold text-xl text-primary">
              <Database className="w-8 h-8 text-accent" aria-hidden="true" />
              QuickBooks ProAdvisor
            </div>
          </div>
        </div>
      </section>

      <Section bg="secondary">
        <SectionHeader
          title="Comprehensive IT Solutions for Canadian Businesses"
          subtitle="Five specialized service areas, delivered by one expert team. No vendor juggling, no knowledge gaps — just results."
          centered
        />

        <div className="space-y-0">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center py-16 lg:py-24 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <div className="flex-1 max-w-xl">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-5">
                    {service.badge}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-5 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-3 text-foreground font-medium">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg"
                  >
                    Learn More <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </div>

                <div className="flex-1 w-full max-w-lg">
                  <div className="relative bg-card rounded-3xl p-12 border border-border shadow-xl flex items-center justify-center aspect-square max-w-sm mx-auto lg:mx-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl" aria-hidden="true" />
                    <Icon className="w-32 h-32 text-accent/25 relative z-10" aria-hidden="true" />
                    <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-accent/40" aria-hidden="true" />
                    <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-accent/30" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Why Canadian Businesses Choose NexFortis"
              subtitle="We don't just fix computers — we engineer business growth through smart, strategic technology adoption."
            />

            <div className="space-y-6 mt-8">
              {whyUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.3, ease: "easeOut" }}
                  className="flex gap-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl transform translate-x-4 translate-y-4" aria-hidden="true"></div>
            <img
              src={`${import.meta.env.BASE_URL}images/about-team.png`}
              alt="NexFortis IT team collaborating on client project"
              className="relative z-10 rounded-3xl shadow-2xl object-cover aspect-[4/3]"
              loading="lazy"
              width={600}
              height={450}
            />
          </div>
        </div>
      </Section>

      <Section bg="secondary">
        <SectionHeader
          title="How We Deliver Results"
          subtitle="A clear, repeatable process that keeps projects on time, on budget, and fully aligned with your goals."
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {[
            { step: "01", icon: TrendingUp, title: "Discovery & Audit", desc: "We assess your current systems, goals, and gaps to build a strategy tailored to your business." },
            { step: "02", icon: Zap, title: "Planning & Design", desc: "A detailed project plan with milestones, timelines, and clearly defined success metrics." },
            { step: "03", icon: Cog, title: "Implementation", desc: "Our specialists execute the plan with minimal disruption to your daily operations." },
            { step: "04", icon: CheckCircle2, title: "Support & Optimization", desc: "Post-launch monitoring, training, and ongoing optimization so your investment keeps growing." },
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

      <section className="py-24 bg-gradient-navy-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Modernize Your Business IT?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Schedule a free 30-minute consultation. No commitment — just an honest conversation about your technology goals and how NexFortis can help you achieve them.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 min-h-[48px] rounded-xl bg-warning text-warning-foreground font-bold text-lg hover:bg-warning/90 hover:scale-105 transition-all shadow-xl shadow-warning/20 items-center justify-center gap-2"
          >
            Book Your Free Consultation <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
