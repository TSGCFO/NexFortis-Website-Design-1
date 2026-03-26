import { PageHero, Section } from "@/components/ui-elements";
import { SEO } from "@/components/seo";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImage: string | null;
  published: boolean;
  createdAt: string;
}

const fallbackPosts = [
  {
    id: 1,
    title: "Migrating to Microsoft 365: A Guide for Small Businesses",
    slug: "migrating-to-microsoft-365",
    excerpt: "Learn the steps, challenges, and immense benefits of moving your legacy email and file systems to Microsoft's powerful cloud environment.",
    category: "Microsoft 365",
    coverImage: null,
    published: true,
    createdAt: "2023-10-12T00:00:00Z",
  },
  {
    id: 2,
    title: "Why Your Business Needs a Tech Audit Before Year End",
    slug: "tech-audit-before-year-end",
    excerpt: "Uncovering hidden licensing costs and patching security vulnerabilities should be a priority before finalizing your next annual budget.",
    category: "IT Consulting",
    coverImage: null,
    published: true,
    createdAt: "2023-09-28T00:00:00Z",
  },
  {
    id: 3,
    title: "The Power of Zapier: 5 Workflows You Can Automate Today",
    slug: "zapier-5-workflows",
    excerpt: "Stop copying and pasting data. Here are five simple automations that can save your team hours every week.",
    category: "Automation",
    coverImage: null,
    published: true,
    createdAt: "2023-09-15T00:00:00Z",
  },
];

export default function Blog() {
  const { data: posts = fallbackPosts } = useQuery<BlogPost[]>({
    queryKey: ["blog-posts"],
    queryFn: () => apiFetch<BlogPost[]>("/blog/posts"),
    retry: 1,
  });

  return (
    <div>
      <SEO title="Blog — Insights & Resources" description="Expert advice, industry news, and technical guides from the NexFortis IT Solutions team." path="/blog" />
      <PageHero
        title="Insights & Resources"
        subtitle="Expert advice, industry news, and technical guides from the NexFortis team."
      />

      <Section bg="white">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl font-display font-bold text-primary mb-4">No posts yet</p>
            <p className="text-muted-foreground">Check back soon for insights from the NexFortis team.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-200 flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative bg-secondary">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={`Illustration for ${post.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width={400}
                      height={192}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-primary/10">
                      <span className="text-4xl font-display font-bold text-accent/20">{post.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mb-3">
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    <time dateTime={post.createdAt}>
                      {new Date(post.createdAt).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="text-accent font-semibold text-sm hover:underline mt-auto inline-flex items-center gap-1">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
