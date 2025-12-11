import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Layers, BarChart3, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Stock & Crypto Trading Training & Web dev",
      description: "Comprehensive training programs covering technical analysis, risk management, and trading psychology",
      features: [
        "Live market analysis sessions",
        "Chart pattern recognition",
        "Risk & money management",
        "Trading psychology workshops",
        "Real-time trade setups",
        "Website creation and digital marketing"
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Investment & Portfolio Consultancy",
      description: "Professional guidance for building and managing investment portfolios aligned with your financial goals",
      features: [
        "Personalized portfolio analysis",
        "Asset allocation strategies",
        "Risk assessment & management",
        "Diversification planning",
        "Regular portfolio reviews",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Market Analytics & Research",
      description: "Data-driven market insights and research reports to support your investment decisions",
      features: [
        "Market trend analysis",
        "Sector research reports",
        "Custom research projects",
        "Technical indicator studies",
        "Market sentiment analysis",
      ],
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions designed to help you succeed in trading, investing, and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="shadow-custom-lg hover:shadow-glow transition-base animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className={`p-8 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <service.icon className="h-24 w-24 text-white" />
                  </div>
                  <div className="md:col-span-2 p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact">
                        <Button className="gradient-primary text-white">
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground">
              Our proven process ensures you get the best results from our services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Consultation", description: "We understand your needs and goals" },
              { step: "02", title: "Planning", description: "Create a customized roadmap for success" },
              { step: "03", title: "Execution", description: "Deliver high-quality training or services" },
              { step: "04", title: "Support", description: "Ongoing guidance and assistance" },
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-custom-md">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
              <h2 className="mb-4 text-white">Ready to Get Started?</h2>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
