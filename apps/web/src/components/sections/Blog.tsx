"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, Eye, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, ScaleOnHover } from "@/components/animations/FramerWrapper";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  publishedAt: string;
  readTime: number;
  views: number;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "cyber-security-hackathon-deepfake-detection",
    title: "Better Late Than Never – A Win Worth Sharing! 🏆",
    excerpt:
      "How our team secured 3rd Place at the Cyber Security Hackathon organized by MP Police, building a real-time Deepfake Detection system.",
    content: `
# Better Late Than Never – A Win Worth Sharing! 🏆

A month ago, Team Hack4Good secured 3rd Place 🥉 at the Cyber Security Hackathon organized by MP Police, Gwalior. It was an incredible experience competing against some of the brightest minds in cybersecurity.

## Our Challenge

Real-time Deepfake Detection – a crucial step in safeguarding digital trust in an era of AI-generated misinformation.

## What We Built

✅ **Deepfake Image & Video Detection** – Identifying AI-generated manipulations with precision

✅ **Frame-by-Frame Video Analysis** – Confidence scoring for better accuracy

✅ **CNN-Based Deep Learning Model** – Ensuring reliability in detecting fakes

✅ **Scalable Architecture** – Future-ready for deepfake audio detection

## The Journey

The journey was intense—countless hours of research, debugging, and refining our model. But in the end, the effort paid off. More than just a win, this was a step toward building AI-driven cybersecurity solutions for a safer digital world.

## Acknowledgments

A huge thank you to our mentors:
- Prof.(Dr.) Hemant Kumar Soni
- Dr. Manish Gupta
- Dr. Ashok Kumar Shrivastava
- Dr. Rajeev Goyal

## Our Incredible Team

👨‍💻 Kratanjali Chandel (Team Leader)
👨‍💻 Krishna Chauhan (Aye Aye, Captain! 🫡)
👨‍💻 Utkarsh Tripathi (Me!)

## What's Next?

🔜 Advancing Deepfake Audio Detection
🔜 Integrating with Threat Intelligence Systems
🔜 Scaling for real-world cybersecurity applications

This is just the beginning!
    `,
    category: "Hackathon",
    tags: ["CyberSecurity", "DeepfakeDetection", "AI", "MachineLearning"],
    coverImage: "/images/blog/cyber-hackathon.jpg",
    publishedAt: "2025-01-15",
    readTime: 6,
    views: 423,
    featured: true,
  },
  {
    id: 2,
    slug: "newspaper-feature-dainik-bhaskar",
    title: "Making Headlines! Featured in Dainik Bhaskar 📰",
    excerpt:
      "Our team got featured in Dainik Bhaskar newspaper for securing 3rd position in the Cyber Security Hackathon by MP Police.",
    content: `
# Making Headlines! Featured in Dainik Bhaskar 📰

We're thrilled to share that our achievement at the Cyber Security Hackathon received recognition from Dainik Bhaskar, one of the largest Hindi newspapers in India.

## The Recognition

Our team Hack4Good was featured in the newspaper for securing 3rd Place 🥉 in the Cyber Security Hackathon organized by MP Police, Gwalior.

## Certificate from Higher Authorities

We had the honor of receiving our certificates from senior officials of the Police Department of Gwalior. This recognition from higher authorities made our achievement even more meaningful.

## Why This Matters

Being featured in Dainik Bhaskar not only celebrates our hard work but also brings awareness to the importance of cybersecurity and AI-driven solutions in combating digital fraud.

## Thank You

We extend our gratitude to:
- MP Police for organizing this amazing hackathon
- Dainik Bhaskar for highlighting our achievement
- Our mentors who guided us throughout

This recognition motivates us to continue working on innovative solutions for a safer digital world!
    `,
    category: "Achievement",
    tags: ["Newspaper", "CyberSecurity", "Recognition", "MPPolice"],
    coverImage: "/images/blog/newspaper-feature.jpg",
    publishedAt: "2025-01-20",
    readTime: 4,
    views: 423,
    featured: true,
  },
  {
    id: 3,
    slug: "cricket-drs-system-technology",
    title: "The Technology Behind Cricket's DRS System",
    excerpt:
      "Explore the cutting-edge technology that powers the Decision Review System (DRS) in cricket, including ball tracking and UltraEdge.",
    content: `
# The Technology Behind Cricket's DRS System

The Decision Review System (DRS) has revolutionized cricket by using technology to ensure fair decisions. Let's dive into the tech behind it!

## How DRS Works

DRS incorporates several technologies:

### 1. Ball Tracking (Hawk-Eye)
- Uses multiple cameras to track the ball's trajectory
- Predicts where the ball would have gone
- Crucial for LBW decisions

### 2. UltraEdge
- Detects subtle sounds when ball hits bat or pad
- Uses acoustic sensors placed around the stadium
- More sensitive than human hearing

### 3. Heat Mapping
- Shows where the ball pitched on the pitch
- Helps analyze turn and bounce

### 4. Real-Time Processing
- All data processed in milliseconds
- Broadcast to millions worldwide instantly

## The Challenge

Implementing DRS requires:
- Precise camera calibration
- Advanced algorithms
- Low latency processing
- Reliable communication systems

## Impact on the Game

DRS has:
- Reduced umpiring errors
- Increased fairness in decisions
- Added excitement for fans
- Raised the standard of play

The technology continues to evolve with AI and machine learning playing bigger roles!
    `,
    category: "Sports Tech",
    tags: ["Cricket", "DRS", "HawkEye", "UltraEdge", "Technology"],
    coverImage: "/images/blog/drs-technology.jpg",
    publishedAt: "2025-01-25",
    readTime: 7,
    views: 422,
    featured: false,
  },
  {
    id: 4,
    slug: "why-cricket-technology-costs-millions",
    title: "Why Does Cricket Tech Cost So Much? 💰",
    excerpt:
      "Uncovering the expensive technology behind Hotspot, Snickometer, and 360° cameras that make modern cricket possible.",
    content: `
# Why Does Cricket Tech Cost So Much? 💰

From Hotspot to 360° cameras, modern cricket relies on expensive technology. But why does it cost so much?

## The Technologies

### Hotspot
- Uses infrared cameras to detect ball contact
- Each camera costs over $50,000
- Requires thermal imaging sensors

### Snickometer
- Measures sound frequency of ball impact
- Specialized audio equipment
- Expert operators required

### 360° Cameras
- Spider cams moving around the stadium
- Multiple high-speed cameras
- Complex rigging systems

### Ball Tracking Systems
- 10+ cameras per venue
- Real-time processing servers
- Precision calibration required

## The Costs Breakdown

| Technology | Cost per Match | Annual Investment |
|------------|---------------|-------------------|
| DRS Setup | $15,000 - $20,000 | Millions |
| Camera Network | $50,000+ | Ongoing |
| Processing Systems | $10,000+ | Maintenance |
| Training | - | Significant |

## Why It's Worth It

✅ Fairer decisions
✅ Better viewer experience
✅ Premium broadcasting
✅ Fan engagement

## The Future

AI and machine learning are making systems more:
- Accurate
- Affordable
- Accessible

The investment in cricket technology continues to grow as fans demand more transparency and excitement!
    `,
    category: "Sports Tech",
    tags: ["Cricket", "Hotspot", "Snickometer", "Cost", "Broadcasting"],
    coverImage: "/images/blog/cricket-tech-cost.jpg",
    publishedAt: "2025-02-01",
    readTime: 6,
    views: 422,
    featured: false,
  },
  {
    id: 5,
    slug: "mumbai-indians-data-science",
    title: "How Data Science Powers Mumbai Indians 🏏",
    excerpt:
      "Discover how the Mumbai Indians cricket team uses data science and analytics to build winning strategies and improve player performance.",
    content: `
# How Data Science Powers Mumbai Indians 🏏

Mumbai Indians, one of the most successful IPL teams, heavily relies on data science to gain a competitive edge.

## Data Collection Methods

### Player Tracking
- GPS tracking during matches and practice
- Movement analysis
- Workload monitoring

### Performance Analytics
- Batting patterns
- Bowling variations
- Fielding efficiency

### Opponent Analysis
- Video analysis of opposition
- Statistical modeling
- Predictive analytics

## Key Applications

### 1. Team Selection
- Finding undervalued players
- Building balanced squads
- Identifying talent early

### 2. Match Strategy
- Optimal batting order
- Bowling changes
- Field placements

### 3. Injury Prevention
- Workload management
- Recovery tracking
- Fitness optimization

### 4. Scouting
- Finding hidden gems
- International talent identification
- Auction strategy

## The Impact

📈 Improved win rates
📊 Better player utilization
🎯 Smarter auction decisions
💪 Reduced injury incidents

## Tech Tools Used

- Python for data analysis
- Machine learning models
- Video analysis software
- Custom dashboards

Data science has become the backbone of modern cricket franchise management, and Mumbai Indians is leading the way!
    `,
    category: "Sports Tech",
    tags: ["MumbaiIndians", "DataScience", "Cricket", "Analytics", "IPL"],
    coverImage: "/images/blog/mumbai-indians.jpg",
    publishedAt: "2025-02-05",
    readTime: 8,
    views: 422,
    featured: false,
  },
  {
    id: 6,
    slug: "best-it-tech-sports-f1-fifa-nba-mlb",
    title: "Best IT Tech in F1, FIFA, NBA & MLB",
    excerpt:
      "Exploring the cutting-edge technology used by the world's biggest sports leagues - from F1 simulations to NBA tracking systems.",
    content: `
# Best IT Tech in F1, FIFA, NBA & MLB 🏎️⚽🏀⚾

Let's explore the incredible technology powering the world's top sports leagues!

## Formula 1 - The Pinnacle of Motorsport Tech

### Simulation Technology
- Full-scale simulators for driver training
- Virtual wind tunnels
- CFD (Computational Fluid Dynamics)

### Real-Time Data
- 300+ sensors per car
- 1GB data transmitted per second
- AI-powered race strategy

## FIFA - Football's Digital Revolution

### VAR Technology
- Video Assistant Referee
- Semi-automated offside
- Precision timing systems

### Performance Tracking
- Player movement analysis
- Heat maps
- Expected goals (xG) models

## NBA - Basketball's Tech Revolution

### Player Tracking
- Second Spectrum cameras
- RFID in player jerseys
- Real-time stats

### Fantasy Integration
- Live data feeds
- Advanced analytics
- Predictive modeling

## MLB - Baseball's Analytics Age

### Statcast
- Trackman radar technology
- Swing analysis
- Pitch tracking

### Sabermetrics
- Advanced statistics
- Player projections
- Value-based analysis

## Common Technologies

🤖 Machine Learning
📊 Big Data Analytics
🎥 Computer Vision
📡 IoT Sensors

## The Future

The convergence of sports and technology continues to:
- Enhance fan experience
- Improve player performance
- Ensure fair competition
- Create new entertainment value

These technologies represent the best of what IT can offer to sports!
    `,
    category: "Sports Tech",
    tags: ["F1", "FIFA", "NBA", "MLB", "Technology", "SportsAnalytics"],
    coverImage: "/images/blog/sports-tech.jpg",
    publishedAt: "2025-02-10",
    readTime: 10,
    views: 422,
    featured: true,
  },
];

const categories = ["All", "Hackathon", "Achievement", "Sports Tech", "Technology"];

const categoryColors: Record<string, string> = {
  Hackathon: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Achievement: "bg-green-500/20 text-green-400 border-green-500/30",
  "Sports Tech": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Technology: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = regularPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <section id="blog" className="section-padding bg-background-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Latest <span className="text-primary">Blog Posts</span>
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12">
            Insights, experiences, and thoughts on cybersecurity, sports technology, and innovation
          </p>
        </FadeIn>

        {/* Search & Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-background-secondary text-muted hover:text-foreground hover:bg-background-tertiary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Featured Posts */}
        {activeCategory === "All" && searchQuery === "" && (
          <FadeIn delay={0.2}>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary">★</span> Featured Posts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.id}>
                    <ScaleOnHover>
                      <Card variant="default" hoverEffect="lift" className="h-full overflow-hidden group">
                        <div className="relative h-40 bg-gradient-to-br from-primary/10 to-orange-500/10">
                          {post.coverImage && (
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          )}
                          <div className="absolute top-3 right-3 z-10">
                            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                              Featured
                            </Badge>
                          </div>
                          <div className="absolute bottom-3 left-3 z-10">
                            <Badge className={`${categoryColors[post.category]} border capitalize`}>
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-5">
                          <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-muted text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center gap-4 text-xs text-muted">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime} min</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScaleOnHover>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Blog Posts Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {paginatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <ScaleOnHover>
                    <Card variant="default" hoverEffect="lift" className="h-full overflow-hidden group">
                      <div className="relative h-40 bg-gradient-to-br from-background-tertiary to-background-secondary">
                        {post.coverImage && (
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        )}
                        <div className="absolute bottom-3 left-3 z-10">
                          <Badge className={`${categoryColors[post.category]} border capitalize`}>
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-muted text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              <Tag className="h-2 w-2 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-muted pt-3 border-t border-border/50">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime} min</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              <span>{post.views}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScaleOnHover>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <FadeIn delay={0.3}>
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : "bg-background-secondary text-muted hover:text-foreground hover:bg-background-tertiary"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </FadeIn>
        )}

        {/* Blog Stats */}
        <FadeIn delay={0.4}>
          <div className="mt-12 grid grid-cols-2 md:grid-4 gap-4">
            {[
              { label: "Total Posts", value: blogPosts.length },
              { label: "Featured", value: blogPosts.filter((p) => p.featured).length },
              { label: "Categories", value: categories.length - 1 },
              { label: "Total Views", value: blogPosts.reduce((acc, p) => acc + p.views, 0).toLocaleString() },
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
    </section>
  );
}
