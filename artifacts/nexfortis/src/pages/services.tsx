import { PageHero, Section, ServiceCard } from "@/components/ui-elements";
import { SEO } from "@/components/seo";
import { Monitor, Cloud, Database, Cog, LayoutDashboard } from "lucide-react";

export default function ServicesOverview() {
  return (
    <div>
      <SEO title="Our Services" description="Comprehensive IT solutions: digital marketing, Microsoft 365, QuickBooks migration, IT consulting, and workflow automation." path="/services" />
      <PageHero 
        title="Our Services" 
        subtitle="End-to-end technology solutions tailored to your unique business challenges."
      />

      <Section bg="secondary" className="pt-24 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ServiceCard 
            title="Digital Marketing"
            description="Elevate your brand with custom web design, reliable hosting, SEO, and targeted Google Ads management."
            icon={Monitor}
            href="/services/digital-marketing"
          />
          <ServiceCard 
            title="Microsoft 365 Solutions"
            description="Transform collaboration with business email, Teams, SharePoint, and enterprise-grade security."
            icon={Cloud}
            href="/services/microsoft-365"
          />
          <ServiceCard 
            title="QuickBooks Migration"
            description="Seamless data migration, file recovery, and bespoke add-on tools for your financial software."
            icon={Database}
            href="/services/quickbooks"
          />
          <ServiceCard 
            title="IT Consulting"
            description="Strategic planning, project management, and comprehensive technology audits."
            icon={Cog}
            href="/services/it-consulting"
          />
          <ServiceCard 
            title="Workflow Automation"
            description="Custom software development and automated processes to eliminate manual data entry."
            icon={LayoutDashboard}
            href="/services/automation-software"
          />
        </div>
      </Section>
    </div>
  );
}
