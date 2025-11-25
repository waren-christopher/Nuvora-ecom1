import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower individuals and businesses with the knowledge and tools needed to succeed in trading, investment.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become India's most trusted platform for financial education and digital transformation services.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from training content to project delivery.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building a supportive community of learners and professionals who grow together.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="mb-6">About Shiloh Digital</h1>
            <p className="text-xl text-muted-foreground">
              A registered private limited firm dedicated to financial education and digital innovation
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-custom-lg overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-48 h-48 mx-auto rounded-full gradient-primary flex items-center justify-center text-white text-6xl font-bold shadow-glow">
                      MS
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Michael Suresh</h2>
                    <p className="text-xl text-primary font-semibold">Trading Analyst & Digital Consultant</p>
                    <p className="text-muted-foreground">
                      With over 5 years of experience in financial markets, 
                      Michael Suresh has helped hundreds of individuals and businesses achieve their financial 
                      and digital transformation goals.
                    </p>
                    <p className="text-muted-foreground">
                      As the founder of Shiloh Digital Pvt Ltd, he combines deep market knowledge 
                      with technical expertise to deliver comprehensive training and consultancy services 
                      that make a real difference.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Shiloh Digital Pvt Ltd</h2>
            <p className="text-lg text-muted-foreground">
              A legally registered private limited company in India, operating with full compliance 
              and transparency in all our services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Helping individuals and businesses navigate trading, and investment 
              safely and legally
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="shadow-custom-md hover:shadow-custom-lg transition-base animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">What We Stand For</h2>
            <div className="space-y-6 text-lg">
              <div className="p-6 bg-background rounded-lg shadow-custom-sm">
                <h3 className="font-semibold mb-2 text-primary">Education First</h3>
                <p className="text-muted-foreground">
                  We believe in empowering through knowledge. All our training is designed to help you 
                  understand markets deeply, not just chase quick profits.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-custom-sm">
                <h3 className="font-semibold mb-2 text-primary">Legal Compliance</h3>
                <p className="text-muted-foreground">
                  We operate strictly within Indian regulations. We provide education and consultancy only - 
                  no trading facilitation or cryptocurrency transactions.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg shadow-custom-sm">
                <h3 className="font-semibold mb-2 text-primary">Transparent Operations</h3>
                <p className="text-muted-foreground">
                  As a registered private limited company, we maintain complete transparency in our operations, 
                  services, and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
