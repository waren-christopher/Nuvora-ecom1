import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { BookOpen, Users, Clock, Award, Calendar, CheckCircle } from "lucide-react";

const Courses = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request submitted! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const programs = [
    {
      title: "Beginner Trading Masterclass",
      duration: "8 weeks",
      type: "1-to-1 Mentorship",
      price: "₹25,000",
      features: [
        "Basics of stock & crypto markets",
        "Technical analysis fundamentals",
        "Chart reading & patterns",
        "Risk management strategies",
        "Live trading sessions",
        "Lifetime community access",
      ],
    },
    {
      title: "Advanced Trading Program",
      duration: "12 weeks",
      type: "1-to-1 Mentorship",
      price: "₹45,000",
      features: [
        "Advanced technical indicators",
        "Options & derivatives trading",
        "Algorithmic trading basics",
        "Portfolio management",
        "Personal trading plan development",
        "Ongoing mentorship support",
      ],
    },
    {
      title: "Investment Consultancy Package",
      duration: "6 months",
      type: "Ongoing Support",
      price: "₹60,000",
      features: [
        "Complete portfolio analysis",
        "Personalized investment strategy",
        "Monthly portfolio reviews",
        "Market updates & research",
        "24/7 support access",
        "Tax planning guidance",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="mb-6">Courses & Mentorship</h1>
            <p className="text-xl text-muted-foreground">
              Transform your trading and investment journey with personalized training programs
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Students Trained", value: "500+" },
              { icon: Clock, label: "Hours of Content", value: "200+" },
              { icon: Award, label: "Success Rate", value: "95%" },
              { icon: BookOpen, label: "Course Materials", value: "50+" },
            ].map((stat, index) => (
              <Card key={index} className="text-center shadow-custom-sm">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Available Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the program that best fits your learning goals and schedule
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="shadow-custom-lg hover:shadow-glow transition-base animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {program.type}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-primary">{program.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full gradient-primary text-white">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Upcoming Group Sessions</h2>
            <p className="text-lg text-muted-foreground">
              Join our interactive group webinars and workshops
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Introduction to Crypto Trading",
                date: "April 15, 2025",
                time: "7:00 PM IST",
                seats: "20 seats",
              },
              {
                title: "Technical Analysis Workshop",
                date: "April 22, 2025",
                time: "6:00 PM IST",
                seats: "15 seats",
              },
            ].map((session, index) => (
              <Card key={index} className="shadow-custom-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      {session.seats}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{session.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <p>📅 {session.date}</p>
                    <p>🕐 {session.time}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Book a Session</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message / Preferred Course</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      placeholder="Tell us about your goals and which program interests you..."
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-primary text-white">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
