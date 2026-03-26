import { PageHero, Section, SectionHeader } from "@/components/ui-elements";
import { SEO, ServiceSchema } from "@/components/seo";
import { Globe, Server, Search, PenTool, BarChart, Settings, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function DigitalMarketing() {
  const offerings = [
    { icon: Globe, title: "Web Design & Development", desc: "Modern, responsive, and high-converting websites built on the latest frameworks." },
    { icon: Server, title: "Hosting & Domain Management", desc: "Secure, fast, and reliable cloud hosting with complete domain administration." },
    { icon: Search, title: "SEO Optimization", desc: "On-page and technical SEO to improve your visibility on search engines." },
    { icon: BarChart, title: "Google Ads Management", desc: "Data-driven PPC campaigns designed to maximize your ROI." },
    { icon: PenTool, title: "Content Creation", desc: "Engaging copy and visual assets that resonate with your target audience." },
    { icon: Settings, title: "Website Maintenance", desc: "Ongoing updates, security patches, and performance optimization." },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "We analyze your brand, audience, and competitors to build a strategy that fits." },
    { step: "02", title: "Design & Build", desc: "Our team designs and develops your digital presence with performance in mind." },
    { step: "03", title: "Launch & Optimize", desc: "We go live, monitor analytics, and continuously refine for better results." },
    { step: "04", title: "Grow & Scale", desc: "Ongoing campaigns, content, and SEO to drive sustainable traffic growth." },
  ];

  return (
    <div>
      <SEO title="Digital Marketing & Web Presence" description="Full-service digital marketing: web design, hosting, SEO optimization, Google Ads, and content creation for Canadian businesses." path="/services/digital-marketing" />
      <ServiceSchema name="Digital Marketing & Web Presence" description="Full-service digital marketing including web design, hosting, SEO, Google Ads, and content creation." />
      <PageHero 
        title="Digital Marketing & Web Presence" 
        subtitle="Your digital storefront matters. We build, host, and optimize your online presence to attract and convert."
      />

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">Full-Service Digital Agency</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Your Complete Online Identity, Handled
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From the first pixel to the final conversion, we handle every aspect of your online identity. No more juggling five different vendors — NexFortis delivers web design, hosting, SEO, ads, and content under one roof.
              </p>
              <ul className="space-y-3">
                {["Mobile-first responsive design", "99.9% uptime SLA on hosting", "Monthly SEO & analytics reporting", "Dedicated account manager"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {offerings.slice(0, 4).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-secondary border border-border hover:border-accent/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center text-accent mb-4 shadow-sm border border-border">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-primary text-sm">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="secondary">
        <SectionHeader 
          title="Comprehensive Digital Solutions" 
          subtitle="Everything you need to establish, grow, and dominate your online presence."
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader title="Our Process" subtitle="A proven four-step approach to transforming your digital presence." centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {process.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative"
            >
              <span className="text-6xl font-display font-extrabold text-accent/10 absolute -top-4 -left-2">{item.step}</span>
              <div className="pt-10 pl-2">
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
              {i < process.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 w-5 h-5 text-accent/30" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section bg="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to Grow Your Online Presence?</h2>
          <p className="text-lg text-white/80 mb-10">
            Let's discuss how we can build a digital strategy that drives real results for your business.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 min-h-[48px] rounded-xl bg-warning text-white font-bold text-lg hover:bg-warning/90 transition-all items-center justify-center gap-2 hover:-translate-y-0.5">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
