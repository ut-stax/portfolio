"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ExternalLink, Download, X, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, ScaleOnHover } from "@/components/animations/FramerWrapper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Modal";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl?: string;
  imageUrl: string;
  category: string;
  verified: boolean;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "3rd Place – Internal Smart India Hackathon (SIH) 2025",
    issuer: "Amity University Madhya Pradesh",
    issueDate: "February 2025",
    credentialId: "SIH2025-001",
    credentialUrl: "https://sih.gov.in",
    imageUrl: "/images/certificates/sih-2025.jpg",
    category: "Hackathon",
    verified: true,
  },
  {
    id: 2,
    title: "Cyber Security Campaign",
    issuer: "M.P. Police",
    issueDate: "February 2025",
    credentialId: "CYBER2025-001",
    credentialUrl: "https://mppolice.gov.in",
    imageUrl: "/images/certificates/mp-police-cyber-security.jpg",
    category: "Cybersecurity",
    verified: true,
  },
  {
    id: 3,
    title: "Innovate 2025 Hackathon",
    issuer: "Smart India Hackathon",
    issueDate: "April 2025",
    credentialId: "INNOVATE2025-001",
    credentialUrl: "https://innovate.gov.in",
    imageUrl: "/images/certificates/innovate-2025.jpg",
    category: "Hackathon",
    verified: true,
  },
  {
    id: 4,
    title: "AR/MEI Workshop – Applied Math in Engineering",
    issuer: "Amity University Gwalior",
    issueDate: "2024",
    credentialId: "ARMEI2024-001",
    imageUrl: "/images/certificates/ar-mei-workshop.jpg",
    category: "Workshop",
    verified: true,
  },
  {
    id: 5,
    title: "GSSoC 2024 Contributor",
    issuer: "GirlScript Summer of Code",
    issueDate: "2024",
    credentialId: "GSSOC2024-001",
    credentialUrl: "https://gssoc.girlscript.tech",
    imageUrl: "/images/certificates/gsoc-2024.jpg",
    category: "Open Source",
    verified: true,
  },
  {
    id: 6,
    title: "AmiHack 2K24",
    issuer: "Amity University Gwalior",
    issueDate: "February 2024",
    credentialId: "AMIHACK2024-001",
    imageUrl: "/images/certificates/amihack-2k24.jpg",
    category: "Hackathon",
    verified: true,
  },
];

const categoryColors: Record<string, string> = {
  Hackathon: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Cybersecurity: "bg-red-500/20 text-red-400 border-red-500/30",
  Workshop: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Open Source": "bg-green-500/20 text-green-400 border-green-500/30",
};

const issuerLogos: Record<string, string> = {
  "Amity University Madhya Pradesh": "🏛️",
  "M.P. Police": "👮",
  "Smart India Hackathon": "🚀",
  "Amity University Gwalior": "🎓",
  "GirlScript Summer of Code": "💻",
};

export function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(certificates.map((c) => c.category)))];

  const filteredCertificates =
    filter === "All" ? certificates : certificates.filter((c) => c.category === filter);

  return (
    <section id="certificates" className="section-padding bg-background-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Certificates & <span className="text-primary">Credentials</span>
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            Professional certifications, hackathon achievements, and verified credentials
          </p>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-background-secondary text-muted hover:text-foreground hover:bg-background-tertiary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ScaleOnHover>
                  <Card
                    variant="default"
                    hoverEffect="lift"
                    className="h-full overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    {/* Certificate Preview */}
                    <div className="relative h-48 bg-gradient-to-br from-background-tertiary to-background-secondary overflow-hidden">
                      {certificate.imageUrl && (
                        <Image
                          src={certificate.imageUrl}
                          alt={certificate.title}
                          fill
                          className="object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                      {/* Verified Badge */}
                      {certificate.verified && (
                        <div className="absolute top-3 right-3 z-10">
                          <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs border border-green-500/30">
                            <CheckCircle className="h-3 w-3" />
                            Verified
                          </div>
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <Badge className={`${categoryColors[certificate.category]} border capitalize`}>
                          {certificate.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      {/* Issuer Logo */}
                      <div className="text-2xl mb-2">
                        {issuerLogos[certificate.issuer] || "🏆"}
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {certificate.title}
                      </h3>

                      {/* Issuer */}
                      <p className="text-sm text-muted mb-2">{certificate.issuer}</p>

                      {/* Date & Credential */}
                      <div className="flex items-center gap-4 text-xs text-muted">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{certificate.issueDate}</span>
                        </div>
                      </div>

                      {/* Credential ID */}
                      <div className="mt-3 pt-3 border-t border-border/50">
                        <p className="text-xs text-muted">
                          ID: <span className="font-mono">{certificate.credentialId}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <FadeIn delay={0.3}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Certificates", value: certificates.length },
              { label: "Verified", value: certificates.filter((c) => c.verified).length },
              { label: "Hackathons", value: certificates.filter((c) => c.category === "Hackathon").length },
              { label: "Workshops", value: certificates.filter((c) => c.category === "Workshop").length },
            ].map((stat) => (
              <Card key={stat.label} variant="outlined" className="text-center p-4">
                <CardContent className="p-0">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Certificate Lightbox */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-3xl">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{issuerLogos[selectedCertificate.issuer] || "🏆"}</span>
                    <div>
                      <DialogTitle className="text-xl">{selectedCertificate.title}</DialogTitle>
                      <DialogDescription className="text-muted">
                        {selectedCertificate.issuer}
                      </DialogDescription>
                    </div>
                  </div>
                  <Badge className={`${categoryColors[selectedCertificate.category]} border capitalize`}>
                    {selectedCertificate.category}
                  </Badge>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-background-tertiary to-background-secondary rounded-lg overflow-hidden border border-border">
                  {selectedCertificate?.imageUrl && (
                    <Image
                      src={selectedCertificate.imageUrl}
                      alt={selectedCertificate.title}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Certificate Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted" />
                    <span className="text-muted">Issued:</span>
                    <span>{selectedCertificate.issueDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-muted">Status:</span>
                    <span className="text-green-400">Verified</span>
                  </div>
                </div>

                {/* Credential ID */}
                <div className="bg-background-secondary/50 rounded-lg p-4">
                  <p className="text-xs text-muted mb-1">Credential ID</p>
                  <p className="font-mono text-sm">{selectedCertificate.credentialId}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {selectedCertificate.credentialUrl && (
                    <a
                      href={selectedCertificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Verify Credential
                      </Button>
                    </a>
                  )}
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Download Certificate
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
