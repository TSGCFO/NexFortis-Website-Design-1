import { PageHero, Section, SectionHeader } from "@/components/ui-elements";
import { SEO, ServiceSchema, BreadcrumbSchema } from "@/components/seo";
import { Check, ShieldCheck, Mail, Users, MonitorSmartphone, ArrowRight, Cloud, Lock, Smartphone } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Microsoft365() {
  const features = [
    { icon: Mail, label: "Business Email", desc: "Professional email with custom domains, 50 GB mailboxes, and built-in calendar." },
    { icon: Users, label: "Teams Deployment", desc: "Full Microsoft Teams rollout with channels, meetings, and external collaboration." },
    { icon: MonitorSmartphone, label: "Intune MDM", desc: "Mobile device management to secure company data on any device, anywhere." },
    { icon: ShieldCheck, label: "Advanced Security", desc: "MFA, conditional access, and threat protection to keep your data safe." },
  ];

  const process = [
    { step: "1", title: "Assessment", desc: "We audit your current email and productivity setup to identify gaps and migration requirements." },
    { step: "2", title: "Planning", desc: "A detailed migration plan with timelines, user communication templates, and rollback procedures." },
    { step: "3", title: "Migration", desc: "Zero-downtime migration of mailboxes, files, and settings with continuous monitoring." },
    { step: "4", title: "Training & Support", desc: "Hands-on user training and 30-day post-migration support to ensure smooth adoption." },
  ];

  const tiers = ["Small Business", "Medium Business", "Enterprise"];
  const rows = [
    ["Business Email Setup", "\u2713", "\u2713", "\u2713"],
    ["Office 365 Apps", "\u2713", "\u2713", "\u2713"],
    ["Microsoft Teams", "Optional", "\u2713", "\u2713"],
    ["Email Security", "Basic", "Advanced", "Enterprise-Grade"],
    ["User Management", "Up to 25", "Up to 100", "Unlimited"],
    ["Device Management", "\u2014", "Basic Intune", "Full Intune + Autopilot"],
    ["Security & Compliance", "MFA", "MFA + CA", "Full Zero Trust"],
    ["Dedicated Support", "Email", "Email + Phone", "Priority 24/7"],
  ];

  return (
    <div>
      <SEO title="Microsoft 365 for Canadian Businesses" description="Microsoft Authorized Partner for M365 deployment: zero-downtime email migration, Teams & SharePoint setup, Intune MDM, and zero-trust security for Canadian businesses." path="/services/microsoft-365" />
      <ServiceSchema name="Microsoft 365 Solutions" description="Microsoft 365 deployment, email migration, Teams, Intune MDM, and enterprise security for Canadian businesses." url="https://nexfortis.com/services/microsoft-365" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nexfortis.com/" },
        { name: "Services", url: "https://nexfortis.com/services" },
        { name: "Microsoft 365", url: "https://nexfortis.com/services/microsoft-365" },
      ]} />
      <PageHero
        title="Microsoft 365 Solutions"
        subtitle="Empower your workforce with enterprise-grade productivity tools and zero-trust security."
      />

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary font-bold text-sm mb-6 border border-border">
              <ShieldCheck className="w-4 h-4 text-accent" aria-hidden="true" />
              Microsoft Authorized Partner
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Work Anywhere. Securely.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As an authorized Microsoft partner, NexFortis specializes in migrating, deploying, and managing Microsoft 365 environments. Whether you need basic email setup or complex Intune device management, we have the expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Cloud, label: "Cloud-First" },
                { icon: Lock, label: "Zero Trust" },
                { icon: Smartphone, label: "Any Device" },
              ].map((badge, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-semibold">
                  <badge.icon className="w-4 h-4" /> {badge.label}
                </span>
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="p-6 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-colors"
              >
                <item.icon className="w-8 h-8 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="secondary">
        <SectionHeader title="Migration Process" subtitle="A battle-tested four-phase approach to moving your organization to Microsoft 365." centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {process.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative bg-card p-8 rounded-2xl border border-border"
            >
              <span className="inline-flex w-10 h-10 rounded-full bg-accent text-white font-bold items-center justify-center text-lg mb-5">{item.step}</span>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader title="Choose Your Tier" subtitle="Transparent pricing tiers that grow with your business." centered />
        <div className="overflow-x-auto pb-8 -mx-4 px-4">
          <table className="w-full min-w-[800px] border-collapse" role="table">
            <caption className="sr-only">Microsoft 365 tier comparison — features by plan size</caption>
            <thead>
              <tr className="border-b-2 border-border text-left">
                <th scope="col" className="p-4 font-display font-bold text-xl text-primary">Feature</th>
                {tiers.map((tier, i) => (
                  <th key={i} scope="col" className={`p-4 font-display font-bold text-xl ${i === 2 ? "text-accent" : "text-primary"}`}>
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <th scope="row" className="p-4 font-medium text-foreground text-left">{row[0]}</th>
                  <td className="p-4">
                    {row[1] === "\u2713" ? <Check className="text-green-500 w-5 h-5" aria-label="Included" /> : row[1] === "\u2014" ? <span aria-label="Not available">{"\u2014"}</span> : row[1]}
                  </td>
                  <td className="p-4">
                    {row[2] === "\u2713" ? <Check className="text-green-500 w-5 h-5" aria-label="Included" /> : row[2]}
                  </td>
                  <td className="p-4 font-medium text-accent">
                    {row[3] === "\u2713" ? <Check className="text-green-500 w-5 h-5" aria-label="Included" /> : row[3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section bg="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to Modernize Your Workspace?</h2>
          <p className="text-lg text-white/80 mb-10">
            Get a custom Microsoft 365 deployment plan tailored to your team's size and security requirements.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 min-h-[48px] rounded-xl bg-warning text-white font-bold text-lg hover:bg-warning/90 transition-all items-center justify-center gap-2 hover:-translate-y-0.5">
            Get Your Microsoft 365 Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
