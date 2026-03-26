import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShieldCheck, Monitor, Cloud, Database, Cog, LayoutDashboard, ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader, ServiceCard } from "@/components/ui-elements";
import { SEO, OrganizationSchema } from "@/components/seo";

export default function Home() {
  return (
    <div className="w-full">
      <SEO
        title="NexFortis IT Solutions"
        description="End-to-end IT solutions for Canadian businesses. Digital marketing, Microsoft 365, QuickBooks migration, IT consulting, and workflow automation."
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
              Canada's Trusted IT Solutions Partner
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8">
              Your Business.<br />
              <span className="text-gradient-teal">Our Technology.</span><br />
              Limitless Growth.
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              End-to-end IT solutions designed to streamline operations, enhance security, and drive measurable results for your business.
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

      <section className="border-b border-border bg-background py-12" aria-label="Trust badges">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by Modern Businesses &amp; Certified Partners
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
          title="Comprehensive IT Solutions"
          subtitle="Everything you need to modernize your infrastructure and scale your business operations."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Digital Marketing"
            description="Web design, hosting, SEO, and ad management to build your online presence."
            icon={Monitor}
            href="/services/digital-marketing"
          />
          <ServiceCard
            title="Microsoft 365"
            description="Enterprise-grade email, collaboration tools, and security deployment."
            icon={Cloud}
            href="/services/microsoft-365"
          />
          <ServiceCard
            title="QuickBooks Solutions"
            description="Data migration, file recovery, and custom add-on tools for accounting."
            icon={Database}
            href="/services/quickbooks"
          />
          <ServiceCard
            title="IT Consulting"
            description="Strategic advisory, project management, and technology audits."
            icon={Cog}
            href="/services/it-consulting"
          />
          <ServiceCard
            title="Workflow Automation"
            description="Custom software and automated processes using modern tech stacks."
            icon={LayoutDashboard}
            href="/services/automation-software"
          />
        </div>
      </Section>

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Why Choose NexFortis?"
              subtitle="We don't just fix computers; we engineer business growth through smart technology adoption."
            />

            <div className="space-y-6 mt-8">
              {[
                { title: "End-to-End Solutions", desc: "From marketing to cloud infrastructure, we handle it all." },
                { title: "Certified Expertise", desc: "Microsoft Authorized Partner & experienced professionals." },
                { title: "Tailored for Your Size", desc: "Scalable solutions that fit your budget and requirements." },
                { title: "Canadian-Based Support", desc: "Local reliability, understanding, and compliance." }
              ].map((item, i) => (
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
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl transform translate-x-4 translate-y-4" aria-hidden="true"></div>
            <img
              src={`${import.meta.env.BASE_URL}images/about-team.png`}
              alt="NexFortis team collaborating"
              className="relative z-10 rounded-3xl shadow-2xl object-cover aspect-[4/3]"
              loading="lazy"
              width={600}
              height={450}
            />
          </div>
        </div>
      </Section>

      <section className="py-24 bg-gradient-navy-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your IT? Let's Talk.
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Schedule a free 30-minute consultation with our experts to discuss your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 min-h-[48px] rounded-xl bg-warning text-warning-foreground font-bold text-lg hover:bg-warning/90 hover:scale-105 transition-all shadow-xl shadow-warning/20 items-center justify-center"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
