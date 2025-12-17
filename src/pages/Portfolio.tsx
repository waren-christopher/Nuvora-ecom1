import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Analytics Dashboard",
      category: "Web Development",
      description:
        "Developed a comprehensive analytics dashboard for an e-commerce business to track sales, customer behavior, and inventory.",
      tags: ["React", "Node.js", "MongoDB", "Charts"],
    },
    {
      title: "Trading Bot Development",
      category: "Trading Tech",
      description:
        "Developed automated trading strategies with backtesting capabilities for algorithmic trading.",
      tags: ["Python", "Trading Algorithms", "Backtesting"],
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Student - Trading Masterclass",
      content:
        "Christopher's training completely transformed my approach to trading. The practical insights and personalized mentorship helped me achieve consistent profits.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Client - Investment Consultancy",
      content:
        "Professional, knowledgeable, and always available. The portfolio strategy Christopher developed has significantly improved my investment returns.",
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
              A selection of web development projects we've delivered
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
                  <Badge variant="secondary">{project.category}</Badge>
                  <CardTitle className="text-xl mt-2">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
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

      {/* Success Metrics */}
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
              {
                metric: "85%",
                label: "Students achieving profitability within 6 months",
              },
              {
                metric: "40%",
                label: "Average portfolio growth for consultancy clients",
              },
              {
                metric: "150+",
                label: "Successful web projects delivered",
              },
            ].map((stat, index) => (
              <Card key={index} className="text-center shadow-custom-md">
                <CardContent className="p-8">
                  {/* ✅ FIXED NUMBER */}
                  <div className="text-4xl font-bold text-primary mb-3">
                    {stat.metric}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Hear what our students and clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, index) => (
              <Card
                key={index}
                className="shadow-custom-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  <div className="flex mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <p className="italic text-muted-foreground mb-4">
                    "{t.content}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
