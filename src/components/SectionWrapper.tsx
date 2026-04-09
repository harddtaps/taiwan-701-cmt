import { useEffect, useRef, useState, type ReactNode } from "react";

const SectionWrapper = ({
  id,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title text-foreground">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
