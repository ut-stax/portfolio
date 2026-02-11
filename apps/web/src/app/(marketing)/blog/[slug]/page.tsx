import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Eye, Tag, Share2, Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

// Blog posts data
const blogPosts: Record<string, { title: string; content: string; category: string; tags: string[]; publishedAt: string; readTime: number; views: number; coverImage: string }> = {
  "cyber-security-hackathon-deepfake-detection": {
    title: "Better Late Than Never – A Win Worth Sharing! 🏆",
    content: `
# Better Late Than Never – A Win Worth Sharing! 🏆

A month ago, Team Hack4Good secured 3rd Place 🥉 at the Cyber Security Hackathon organized by MP Police, Gwalior. It was an incredible experience competing against some of the brightest minds in cybersecurity.

## Our Challenge

Real-time Deepfake Detection – a crucial step in safeguarding digital trust in an era of AI-generated misinformation.

## What We Built

### Deepfake Image & Video Detection
Identifying AI-generated manipulations with precision using advanced deep learning algorithms.

### Frame-by-Frame Video Analysis
Confidence scoring for better accuracy in detecting manipulated video content.

### CNN-Based Deep Learning Model
Ensuring reliability in detecting fakes through state-of-the-art convolutional neural networks.

### Scalable Architecture
Future-ready for deepfake audio detection and real-world applications.

## The Journey

The journey was intense—countless hours of research, debugging, and refining our model. But in the end, the effort paid off. More than just a win, this was a step toward building AI-driven cybersecurity solutions for a safer digital world.

"Been caught up with new challenges, but it's never too late to celebrate this proud moment from 1.5 months ago!" 🚀🎉

## Acknowledgments

A huge thank you to our mentors:
- Prof.(Dr.) Hemant Kumar Soni
- Dr. Manish Gupta
- Dr. Ashok Kumar Shrivastava
- Dr. Rajeev Goyal

Your guidance and support were invaluable in making this possible.

## Our Incredible Team

👨‍💻 Kratanjali Chandel (Team Leader)
👨‍💻 Krishna Chauhan (Aye Aye, Captain! 🫡)
👨‍💻 Utkarsh Tripathi (Me!)

## What's Next?

🔜 Advancing Deepfake Audio Detection
🔜 Integrating with Threat Intelligence Systems
🔜 Scaling for real-world cybersecurity applications

This is just the beginning. Excited for what lies ahead! Let's connect, collaborate, and innovate for a more secure digital future.

#CyberSecurity #DeepfakeDetection #AI #MachineLearning #Hackathon #TechForGood #DigitalTrust #AIforSecurity #TeamHack4Good
    `,
    category: "Hackathon",
    tags: ["CyberSecurity", "DeepfakeDetection", "AI", "MachineLearning"],
    publishedAt: "2025-01-15",
    readTime: 6,
    views: 2431,
    coverImage: "/images/blog/cyber-hackathon.jpg",
  },
  "newspaper-feature-dainik-bhaskar": {
    title: "Making Headlines! Featured in Dainik Bhaskar 📰",
    content: `
# Making Headlines! Featured in Dainik Bhaskar 📰

We're thrilled to share that our achievement at the Cyber Security Hackathon received recognition from Dainik Bhaskar, one of the largest Hindi newspapers in India.

## The Recognition

Our team Hack4Good was featured in the newspaper for securing 3rd Place 🥉 in the Cyber Security Hackathon organized by MP Police, Gwalior.

## Certificate from Higher Authorities

We had the honor of receiving our certificates from senior officials of the Police Department of Gwalior. This recognition from higher authorities made our achievement even more meaningful.

## Why This Matters

Being featured in Dainik Bhaskar not only celebrates our hard work but also brings awareness to the importance of cybersecurity and AI-driven solutions in combating digital fraud.

## Our Achievement

This feature in the newspaper highlights:
- The importance of cybersecurity awareness
- Youth contribution to digital safety
- Innovation in AI technology
- Team collaboration and hard work

## Thank You

We extend our gratitude to:
- MP Police for organizing this amazing hackathon
- Dainik Bhaskar for highlighting our achievement
- Our mentors who guided us throughout
- Our supportive families and friends

This recognition motivates us to continue working on innovative solutions for a safer digital world!
    `,
    category: "Achievement",
    tags: ["Newspaper", "CyberSecurity", "Recognition", "MPPolice"],
    publishedAt: "2025-01-20",
    readTime: 4,
    views: 2431,
    coverImage: "/images/blog/newspaper-feature.jpg",
  },
  "cricket-drs-system-technology": {
    title: "The Technology Behind Cricket's DRS System",
    content: `
# The Technology Behind Cricket's DRS System

The Decision Review System (DRS) has revolutionized cricket by using technology to ensure fair decisions. Let's dive into the tech behind it!

## How DRS Works

DRS incorporates several sophisticated technologies that work together to provide accurate decision-making.

### Ball Tracking (Hawk-Eye)

Hawk-Eye uses multiple cameras (typically 8-10) positioned around the stadium to track the ball's trajectory in 3D space.

- **Principle**: Triangulation from multiple camera angles
- **Accuracy**: Within 3.5mm precision
- **Purpose**: Predicts where the ball would have gone for LBW decisions

### UltraEdge

UltraEdge detects subtle sounds when the ball hits the bat or pad.

- **Technology**: Acoustic sensors placed around the stadium
- **Sensitivity**: More sensitive than human hearing
- **Purpose**: Determines whether there was an edge

### Heat Mapping

Heat mapping shows where the ball pitched on the pitch and helps analyze turn and bounce.

- **Data**: Ball trajectory visualization
- **Use**: Understanding pitch behavior

### Real-Time Processing

All data is processed in milliseconds and broadcast to millions worldwide instantly.

## The Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Cameras | High-speed CCD | Ball tracking |
| Sensors | Acoustic/Pressure | Edge detection |
| Processing | GPU Clusters | Real-time analysis |
| Display | Broadcast Graphics | Visual representation |

## The Challenge

Implementing DRS requires:
- Precise camera calibration before each match
- Advanced algorithms for trajectory prediction
- Low latency processing (<100ms)
- Reliable communication systems

## Impact on the Game

DRS has transformed cricket by:
- Reducing umpiring errors significantly
- Increasing fairness in decisions
- Adding excitement for fans
- Raising the standard of play

## The Future

The technology continues to evolve with AI and machine learning playing bigger roles:

- **Automated lbw calls** using computer vision
- **Predictive analytics** for player performance
- **Enhanced visualization** for broadcasters

The future of cricket technology is exciting!
    `,
    category: "Sports Tech",
    tags: ["Cricket", "DRS", "HawkEye", "UltraEdge", "Technology"],
    publishedAt: "2025-01-25",
    readTime: 7,
    views: 2431,
    coverImage: "/images/blog/drs-technology.jpg",
  },
  "why-cricket-technology-costs-millions": {
    title: "Why Does Cricket Tech Cost So Much? 💰",
    content: `
# Why Does Cricket Tech Cost So Much? 💰

From Hotspot to 360° cameras, modern cricket relies on expensive technology. But why does it cost so much?

## The Technologies

### Hotspot

Hotspot uses infrared cameras to detect where the ball made contact.

- **How it works**: Thermal imaging cameras detect temperature changes
- **Cost**: Each camera costs over $50,000
- **Setup**: Multiple cameras required for complete coverage
- **Accuracy**: Can detect even the faintest edge

### Snickometer

Snickometer measures the sound frequency of ball impact.

- **Technology**: Specialized audio equipment
- **Sensitivity**: Detects sounds below human hearing threshold
- **Expertise**: Requires trained operators
- **Purpose**: Confirms edge detection

### 360° Cameras (Spider Cam)

Spider cams move around the stadium providing unique perspectives.

- **Mechanics**: Cable-suspended camera system
- **Coverage**: Complete stadium view
- **Investment**: Significant infrastructure
- **Operation**: Requires skilled technicians

### Ball Tracking Systems

DRS ball tracking requires:

- **10+ cameras** per venue for accuracy
- **Real-time processing** servers
- **Precision calibration** before each match
- **Redundant systems** for reliability

## The Costs Breakdown

| Technology | Cost per Match | Annual Investment |
|------------|---------------|-------------------|
| DRS Setup | $15,000 - $20,000 | Millions |
| Camera Network | $50,000+ | Ongoing |
| Processing Systems | $10,000+ | Maintenance |
| Training Staff | Significant | Annual |
| Software Licenses | Varies | Annual |

## Why It's Worth It

✅ **Fairer decisions** - Technology reduces human error
✅ **Better viewer experience** - Enhanced broadcast quality
✅ **Premium broadcasting** - Attracts more viewers
✅ **Fan engagement** - Creates talking points
✅ **International standards** - Required for Tests/ODIs

## The Economic Perspective

### Broadcasting Rights
- DRS adds value to broadcast packages
- More viewers = higher ad revenues
- Premium technology = premium pricing

### Brand Value
- IPL and international cricket demand the best
- Sponsors expect top-tier technology
- Player safety and fair play justify costs

## The Future

AI and machine learning are making systems more:
- **Accurate** - Better prediction algorithms
- **Affordable** - Cloud-based processing
- **Accessible** - Portable systems for all venues
- **Automated** - Reduced human intervention

The investment in cricket technology continues to grow as fans demand more transparency and excitement!
    `,
    category: "Sports Tech",
    tags: ["Cricket", "Hotspot", "Snickometer", "Cost", "Broadcasting"],
    publishedAt: "2025-02-01",
    readTime: 6,
    views: 2431,
    coverImage: "/images/blog/cricket-tech-cost.jpg",
  },
  "mumbai-indians-data-science": {
    title: "How Data Science Powers Mumbai Indians 🏏",
    content: `
# How Data Science Powers Mumbai Indians 🏏

Mumbai Indians, one of the most successful IPL teams, heavily relies on data science to gain a competitive edge. Let's explore how!

## Data Collection Methods

### Player Tracking
During matches and practice sessions, players are tracked using:
- **GPS devices** embedded in jerseys
- **Motion sensors** for movement analysis
- **Video analysis** for technique breakdown
- **Wearable technology** for biometrics

### Performance Analytics
Data is collected on every aspect of performance:

- **Batting patterns** - Shot selection, strike rates
- **Bowling variations** - Pace, swing, spin analysis
- **Fielding efficiency** - Throwing accuracy, catching
- **Running between wickets** - Speed, decision-making

### Opponent Analysis
Extensive research on opposition teams:
- Video analysis of past performances
- Statistical modeling of player weaknesses
- Predictive analytics for match scenarios

## Key Applications

### 1. Team Selection
Data science helps in:
- Finding undervalued players in auctions
- Building balanced squads
- Identifying talent early through scouting networks
- Predicting player performance in different conditions

### 2. Match Strategy
Data-driven decision making for:
- Optimal batting order
- Bowling changes based on match situation
- Field placements for specific batsmen
- Choosing to bowl first or chase

### 3. Injury Prevention
Proactive approach to player fitness:
- Workload monitoring and management
- Recovery tracking through wearables
- Injury risk prediction
- Customized training programs

### 4. Scouting
Identifying talent worldwide:
- Statistical analysis of domestic players
- Performance prediction models
- Cost-benefit analysis for auctions
- Young talent identification

## The Impact

📈 **Improved win rates** through data-driven decisions
📊 **Better player utilization** based on strengths
🎯 **Smarter auction strategies**
💪 **Reduced injury incidents**
🎉 **Fan engagement through analytics**

## Tech Tools Used

| Tool | Purpose |
|------|---------|
| Python | Data analysis and ML models |
| Tableau | Visualization dashboards |
| Video Analysis | Performance breakdown |
| GPS Tracking | Player movement data |
| Statistical Models | Predictive analytics |

## Case Studies

### Auction Strategy
MI uses data to find hidden gems:
- Analyzing domestic T20 performance
- Predicting adaptation to IPL conditions
- Cost optimization in auctions

### Match-day Decisions
In-game analytics help:
- Setting fields for specific batsmen
- Identifying batting matchups
- Bowling change timing

## The Future of Cricket Analytics

AI and machine learning are revolutionizing:
- **Real-time predictions** during matches
- **Automated video analysis**
- **Enhanced fan experiences**
- **Virtual reality training**

Data science has become the backbone of modern cricket franchise management, and Mumbai Indians is leading the way!

## Conclusion

The integration of data science in cricket has transformed how teams prepare and compete. Mumbai Indians' success story proves that data-driven decisions can lead to championships!

    `,
    category: "Sports Tech",
    tags: ["MumbaiIndians", "DataScience", "Cricket", "Analytics", "IPL"],
    publishedAt: "2025-02-05",
    readTime: 8,
    views: 2431,
    coverImage: "/images/blog/mumbai-indians.jpg",
  },
  "best-it-tech-sports-f1-fifa-nba-mlb": {
    title: "Best IT Tech in F1, FIFA, NBA & MLB",
    content: `
# Best IT Tech in F1, FIFA, NBA & MLB 🏎️⚽🏀⚾

Let's explore the incredible technology powering the world's top sports leagues!

## Formula 1 - The Pinnacle of Motorsport Tech

### Simulation Technology
F1 teams use cutting-edge simulations:
- **Full-scale simulators** for driver training
- **Virtual wind tunnels** for aerodynamics testing
- **CFD (Computational Fluid Dynamics)** for optimization
- **Digital twin** of the race car

### Real-Time Data
Each F1 car generates:
- **300+ sensors** collecting data
- **1GB data transmitted** per second
- **AI-powered** race strategy optimization
- **Instant feedback** to engineers

### Key Technologies

| Technology | Purpose | Impact |
|------------|---------|--------|
| Telemetry | Remote monitoring | Real-time insights |
| CFD | Aerodynamics | Faster cars |
| AI Strategy | Race decisions | Winning races |
| Simulation | Driver training | Better performance |

## FIFA - Football's Digital Revolution

### VAR Technology
Video Assistant Referee transformed football:
- **Multiple camera angles** for review
- **Semi-automated offside** technology
- **Precision timing** systems (<5mm)
- **Quick decisions** (under 60 seconds)

### Performance Tracking
Player analysis has evolved:
- **GPS tracking** during matches
- **Heat maps** for positioning
- **Expected goals (xG)** models
- **Pass completion** analysis

### Key Innovations

✅ **Semi-automated offside** - Optical tracking markers
✅ **Connected ball** - Sensor in every match ball
✅ **VAR overlay** - Broadcast graphics
✅ **AI predictions** - Match outcome analysis

## NBA - Basketball's Tech Revolution

### Player Tracking
The NBA leads in player tracking:
- **Second Spectrum** cameras in every arena
- **RFID chips** in player jerseys
- **Real-time stats** broadcast instantly
- **Player movement** analysis

### Advanced Analytics
Statistics have transformed the game:
- **Player efficiency ratings** (PER)
- **Shot charts** for every player
- **Win shares** calculations
- **Plus-minus** ratings

### Tech Tools

| Tool | Provider | Use |
|------|----------|-----|
| Second Spectrum | Vision tracking | Movement analysis |
| Sportradar | Data feeds | Real-time stats |
| Catapult | Wearables | Performance |
| Tableau | Analytics | Visualization |

## MLB - Baseball's Analytics Age

### Statcast
MLB's Statcast revolution:
- **Trackman radar** technology
- **Swing analysis** systems
- **Pitch tracking** (velocity, spin, location)
- **Outfield arm strength** measurements

### Sabermetrics
Advanced statistics changed baseball:
- **OPS (On-base Plus Slugging)**
- **WAR (Wins Above Replacement)**
- **xFIP (Expected FIP)**
- **Launch angle** analysis

### Technology Impact

📊 **Better player evaluation**
🎯 **Optimized lineup construction**
💰 **Revolutionized contracts**
🏆 **Strategic in-game decisions**

## Common Technologies Across Sports

🤖 **Machine Learning** - Predictions and analysis
📊 **Big Data** - Processing millions of data points
🎥 **Computer Vision** - Tracking and analysis
📡 **IoT Sensors** - Real-time data collection
☁️ **Cloud Computing** - Processing power
📱 **Mobile Apps** - Fan engagement

## The Future

### Emerging Technologies
- **AI referees** for automated decisions
- **VR training** environments
- **Blockchain** for ticketing and collectibles
- **AR broadcasts** for enhanced viewing

### Fan Experience
- **Personalized content** recommendations
- **Interactive statistics** during games
- **Virtual reality** match experiences
- **Augmented reality** player info

## Conclusion

These technologies represent the best of what IT can offer to sports:

- **Enhanced fairness** through accurate officiating
- **Better performance** through data-driven training
- **Superior entertainment** for fans
- **Informed decisions** for teams and leagues

The convergence of sports and technology continues to push boundaries, creating more exciting, fair, and engaging experiences for everyone involved!
    `,
    category: "Sports Tech",
    tags: ["F1", "FIFA", "NBA", "MLB", "Technology", "SportsAnalytics"],
    publishedAt: "2025-02-10",
    readTime: 10,
    views: 2431,
    coverImage: "/images/blog/sports-tech.jpg",
  },
};

const categoryColors: Record<string, string> = {
  Hackathon: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Achievement: "bg-green-500/20 text-green-400 border-green-500/30",
  "Sports Tech": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Tutorial: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Technology: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Utkarsh Tripathi`,
    description: post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-background-secondary/30 to-background">
        <div className="container-custom max-w-4xl">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Category & Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className={`${categoryColors[post.category]} border capitalize`}>{post.category}</Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                <Tag className="h-2 w-2 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="container-custom max-w-4xl mb-8">
          <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Content Section */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          {/* Share Buttons */}
          <div className="flex items-center gap-2 mb-8 pb-8 border-b border-border">
            <span className="text-sm text-muted">Share this post:</span>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Link2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            {/* Render markdown content */}
            {post.content.split('\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{trimmed.slice(2)}</h1>;
              }
              if (trimmed.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{trimmed.slice(3)}</h2>;
              }
              if (trimmed.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{trimmed.slice(4)}</h3>;
              }
              if (trimmed.startsWith('- **')) {
                return (
                  <li key={index} className="ml-4 mb-2">
                    <strong>{trimmed.slice(4, trimmed.indexOf('**', 4))}</strong>{trimmed.slice(trimmed.indexOf('**', 4) + 2)}
                  </li>
                );
              }
              if (trimmed.startsWith('- ')) {
                return <li key={index} className="ml-4 mb-2">{trimmed.slice(2)}</li>;
              }
              if (trimmed.startsWith('|')) {
                return null; // Skip table rows for simplicity
              }
              if (trimmed.startsWith('```')) {
                return null; // Skip code blocks for simplicity
              }
              if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return <p key={index} className="font-bold mb-4">{trimmed.slice(2, -2)}</p>;
              }
              if (trimmed.startsWith('📊') || trimmed.startsWith('📈') || trimmed.startsWith('✅') || trimmed.startsWith('🔜') || trimmed.startsWith('👨‍💻') || trimmed.startsWith('🙏')) {
                return <p key={index} className="mb-2">{trimmed}</p>;
              }
              if (trimmed.startsWith('#')) {
                return null;
              }
              if (trimmed.length > 0) {
                return <p key={index} className="mb-4 text-muted leading-relaxed">{trimmed}</p>;
              }
              return null;
            })}
          </article>

          {/* Author Attribution */}
          <Card className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-orange-500/10 border-primary/20">
            <CardContent className="p-0 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                👨‍💻
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-semibold mb-1">Utkarsh Tripathi</h4>
                <p className="text-sm text-muted mb-2">
                  B.Tech IT student specializing in Data Science. Passionate about web development, AI, and
                  building innovative solutions.
                </p>
                <div className="flex justify-center md:justify-start gap-2">
                  <Badge variant="outline" className="text-xs">
                    Developer
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Writer
                  </Badge>
                </div>
              </div>
              <Link href="/contact">
                <Button>Get in Touch</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
