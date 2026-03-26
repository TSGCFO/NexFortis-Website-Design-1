import { PageHero, Section, SectionHeader } from "@/components/ui-elements";
import { SEO, ServiceSchema } from "@/components/seo";
import { ArrowRight, Database, Wrench, ShieldAlert, CheckCircle2, DollarSign } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function QuickBooks() {
  const services = [
    {
      icon: Database,
      title: "Data Migration",
      desc: "Migrate from NetSuite, Sage 50, SAP, Xero, and more. 100% accuracy guaranteed.",
      items: ["Standard (1 day): $299", "Expedited (Same day): $450"],
    },
    {
      icon: ShieldAlert,
      title: "Data Recovery",
      desc: "Error code repair, file corruption fixes, and password recovery with a money-back guarantee.",
      items: ["TLG Recovery", "Mac Data Recovery"],
    },
    {
      icon: Wrench,
      title: "Data Services",
      desc: "Optimize your company files for performance or audit preparation.",
      items: ["Enterprise to Pro/Premier Conversion (from $249)", "Super Condensing & List Reduction"],
    },
  ];

  const products = [
    { cat: "Financial Statements", items: [{ name: "A/R Statements Pro", price: "$79" }, { name: "List Reporter", price: "$59" }] },
    { cat: "Nonprofit/Donor", items: [{ name: "Donor Statements (Desktop)", price: "$99" }, { name: "Donor Statements (Online)", price: "$99" }, { name: "Desktop+Email Bundle", price: "$158" }] },
    { cat: "Payment Processing", items: [{ name: "Direct Debit File Creator", price: "$119" }, { name: "Direct Deposit File Creator", price: "$119" }, { name: "PayPal Link", price: "$99" }, { name: "PositivePay", price: "$119" }] },
    { cat: "Data Import", items: [{ name: "IIF Transaction Creator", price: "$139" }, { name: "Transaction Copier", price: "$119" }, { name: "Excel to QIF", price: "$69" }, { name: "OFX Cleaner", price: "$79" }] },
  ];

  return (
    <div>
      <SEO title="QuickBooks Migration & Tools" description="Expert QuickBooks data migration, file recovery, and add-on tools. Certified ProAdvisor team with 100% accuracy guarantee." path="/services/quickbooks" />
      <ServiceSchema name="QuickBooks Migration & Tools" description="QuickBooks data migration, recovery, and add-on tools for Canadian businesses." />
      <PageHero 
        title="QuickBooks Migration & Tools" 
        subtitle="Expert data migration, recovery services, and powerful add-on tools to supercharge your accounting."
      />

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">QuickBooks ProAdvisor</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Your Accounting Data, Safe and Sound
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you're switching platforms, recovering corrupted files, or need specialized tools, our QuickBooks experts have handled thousands of migrations with a 100% accuracy guarantee.
            </p>
            <ul className="space-y-3">
              {["Money-back guarantee on all services", "Same-day expedited processing available", "Support for Desktop, Online, and Enterprise", "Certified QuickBooks ProAdvisor team"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="space-y-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-secondary border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{svc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{svc.desc}</p>
                    <ul className="text-sm font-medium text-foreground space-y-1">
                      {svc.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="secondary">
        <SectionHeader 
          title="QuickBooks Add-On Catalog" 
          subtitle="Powerful tools to extend the functionality of your QuickBooks software."
          centered 
        />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {products.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-accent" />
                {category.cat}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, j) => (
                  <div key={j} className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:shadow-md hover:border-accent/30 transition-all">
                    <div>
                      <h4 className="font-bold text-foreground">{item.name}</h4>
                      <p className="text-accent font-semibold">{item.price}</p>
                    </div>
                    <Link href="/contact" className="px-4 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary hover:bg-accent hover:text-white transition-colors text-sm font-bold">
                      Buy Now
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section bg="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Need Help with QuickBooks?</h2>
          <p className="text-lg text-white/80 mb-10">
            Get a free consultation on your migration, recovery, or custom tool needs.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 min-h-[48px] rounded-xl bg-warning text-white font-bold text-lg hover:bg-warning/90 transition-all items-center justify-center gap-2 hover:-translate-y-0.5">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
