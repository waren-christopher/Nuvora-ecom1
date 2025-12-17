import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Shield,
  BarChart3,
  BookOpen,
  Users,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Website Creation & Digital Marketing",
      description:
        "Build a powerful online presence with expertly crafted websites and data-driven digital marketing strategies designed to grow your business",
    },
    {
      icon: Shield,
      title: "Investment Consultancy",
      description: "Build and manage your portfolio with expert advice",
    },
    {
      icon: BarChart3,
      title: "Market Analytics",
      description: "Data-driven insights for informed decision making",
    },
  ];

  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "150+", label: "Projects Delivered" },
    { value: "6+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="mb-6">
              Empowering You with Financial and Digital Confidence
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional training, consultancy, and digital project support
              from Waren Christopher
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white shadow-glow">
                  Book Consultation
                </Button>
              </Link>

              <Link to="/services">
                <Button size="lg" variant="outline">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">About Nuvora Ecom</h2>
            <p className="text-lg text-muted-foreground">
              Founded by{" "}
              <span className="font-semibold text-foreground">
                Waren Christopher
              </span>
              , a seasoned Trading Analyst and Digital Consultant. We are a
              registered company firm in India, dedicated to helping individuals
              and businesses navigate trading and investment safely and legally.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your financial education and digital
              transformation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-custom-md hover:shadow-custom-lg transition-base hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="shadow-custom-lg overflow-hidden">
            <div className="gradient-primary p-12 text-center text-white">
              <h2 className="mb-4 text-white">Ready to Start Your Journey?</h2>

              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Join hundreds of successful students and clients who have
                transformed their financial knowledge and digital presence
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Courses
                  </Button>
                </Link>

                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
