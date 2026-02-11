import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/ut-stax", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/utkarsh-tripathi-399206283/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "mailto:tripathiutkarsh790@gmail.com", icon: Mail, label: "Email" },
];

const quickLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-bold font-mono">
              <span className="text-primary">UT</span>
              <span className="text-foreground">.dev</span>
            </Link>
            <p className="mt-4 text-sm text-muted max-w-xs">
              Building innovative solutions through web development and AI.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Skills</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Data Science</li>
              <li>Machine Learning</li>
              <li>AI & NLP</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <address className="not-italic text-sm text-muted space-y-2">
              <p>Gwalior, M.P. 474020</p>
              <p>
                <a
                  href="mailto:tripathiutkarsh790@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  tripathiutkarsh790@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+916265655707" className="hover:text-primary transition-colors">
                  +91 6265655707
                </a>
              </p>
            </address>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
            <p>© {currentYear} Utkarsh Tripathi. All rights reserved.</p>
            <p className="text-xs">
              Built with Next.js, TypeScript, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
