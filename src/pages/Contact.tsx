import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the data to your backend
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@michaeldigitalassets.com",
      link: "mailto:contact@michaeldigitalassets.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "India",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help you on your trading and investment journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-custom-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-sm text-muted-foreground hover:text-primary transition-base"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Connect Buttons */}
              <Card className="shadow-custom-lg">
                <CardHeader>
                  <CardTitle>Quick Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a 
                    href="https://wa.me/91XXXXXXXXXX" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </a>
                  <a 
                    href="https://t.me/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      <Send className="mr-2 h-4 w-4" />
                      Telegram
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-custom-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        placeholder="Tell us about your requirements or questions..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full gradient-primary text-white">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Address & Disclaimer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-custom-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Company Information</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Shiloh Digital Pvt Ltd</strong><br />
                  Registered Private Limited Company in India<br />
                  [Add complete registered address here]
                </p>
                <div className="border-t border-border pt-4 mt-4">
                  <h4 className="font-semibold mb-2 text-sm">Important Disclaimer</h4>
                  <p className="text-sm text-muted-foreground">
                    This platform offers training and consultancy services only. We do not facilitate 
                    cryptocurrency trading or accept payments for crypto transactions. All educational 
                    material is for informational purposes only. Past performance does not guarantee 
                    future results. Trading and investing involve risk of loss.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
