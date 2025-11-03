import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "DeFi Trading Platform Development",
      category: "Blockchain",
      description: "Built a decentralized trading platform with smart contract integration for secure peer-to-peer cryptocurrency trading.",
      tags: ["Solidity", "Web3", "React", "DeFi"],
    },
    {
      title: "E-commerce Analytics Dashboard",
      category: "Web Development",
      description: "Developed a comprehensive analytics dashboard for an e-commerce business to track sales, customer behavior, and inventory.",
      tags: ["React", "Node.js", "MongoDB", "Charts"],
    },
    {
      title: "Crypto Portfolio Tracker",
      category: "Blockchain",
      description: "Created a real-time portfolio tracking application with price alerts and market analysis features.",
      tags: ["React", "API Integration", "Real-time Data"],
    },
    {
      title: "Trading Bot Development",
      category: "Trading Tech",
      description: "Developed automated trading strategies with backtesting capabilities for algorithmic trading.",
      tags: ["Python", "Trading Algorithms", "Backtesting"],
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Student - Trading Masterclass",
      content: "Michael's training completely transformed my approach to trading. The practical insights and personalized mentorship helped me achieve consistent profits.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Client - Investment Consultancy",
      content: "Professional, knowledgeable, and always available. The portfolio strategy Michael developed has significantly improved my investment returns.",
      rating: 5,
    },
    {
      name: "Tech Startup Founder",
      role: "Client - Blockchain Development",
      content: "Excellent work on our DeFi project. Michael delivered high-quality code and provided valuable insights throughout the development process.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="mb-6">Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Showcasing our successful projects and satisfied clients
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of blockchain and web development projects we've delivered
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="shadow-custom-lg hover:shadow-glow transition-base animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Success Metrics</h2>
            <p className="text-lg text-muted-foreground">
              Real results from our training and consultancy services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { metric: "85%", label: "Students achieving profitability within 6 months" },
              { metric: "40%", label: "Average portfolio growth for consultancy clients" },
              { metric: "50+", label: "Successful blockchain & web projects delivered" },
            ].map((stat, index) => (
              <Card key={index} className="text-center shadow-custom-md">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-3">
                    {stat.metric}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Hear what our students and clients have to say
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="shadow-custom-lg animate-slide-up relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Want to Be Our Next Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of satisfied students and clients who have achieved their goals with our help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/courses" className="inline-block">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-base shadow-glow">
                  Explore Courses
                </button>
              </a>
              <a href="/contact" className="inline-block">
                <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-base">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
