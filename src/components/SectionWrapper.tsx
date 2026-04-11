import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";

const SectionWrapper = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) => (
  <PageWrapper>
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para Home
        </Link>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="section-title text-foreground">{title}</h1>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {children}
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default SectionWrapper;
