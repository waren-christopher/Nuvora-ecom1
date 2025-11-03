import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Legal = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="mb-6">Legal Information</h1>
            <p className="text-xl text-muted-foreground">
              Privacy Policy, Terms of Service, and Important Disclaimers
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Disclaimer */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Important Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Educational Services Only:</strong> Michael Digital Assets Pvt Ltd 
                  provides educational training and consultancy services related to trading, investment, and technology. 
                  We do not provide financial advice, investment recommendations, or facilitate any trading activities.
                </p>
                <p>
                  <strong className="text-foreground">No Cryptocurrency Trading:</strong> We do not facilitate, 
                  enable, or conduct cryptocurrency trading operations. We do not accept cryptocurrency as payment. 
                  All our services are purely educational and informational in nature.
                </p>
                <p>
                  <strong className="text-foreground">Risk Warning:</strong> Trading and investing in financial 
                  markets involves substantial risk of loss. Past performance is not indicative of future results. 
                  You should carefully consider whether trading is suitable for you based on your financial condition.
                </p>
                <p>
                  <strong className="text-foreground">Not Investment Advice:</strong> All content, materials, and 
                  information provided through our services are for educational and informational purposes only. 
                  They should not be construed as investment advice or recommendations.
                </p>
              </CardContent>
            </Card>

            <Separator />

            {/* Privacy Policy */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Information We Collect</h3>
                  <p>
                    We collect information that you provide directly to us, including name, email address, 
                    phone number, and any other information you choose to provide when you register for our 
                    services or contact us.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How We Use Your Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>To provide and maintain our services</li>
                    <li>To communicate with you about our services</li>
                    <li>To send you educational materials and updates</li>
                    <li>To improve our services and develop new features</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Sharing</h3>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share 
                    information with service providers who assist us in operating our business, subject to 
                    confidentiality agreements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* Terms of Service */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Terms of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Acceptance of Terms</h3>
                  <p>
                    By accessing and using our services, you accept and agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Services Description</h3>
                  <p>
                    Michael Digital Assets Pvt Ltd provides educational training programs, consultancy services, 
                    and technology development services. All services are provided "as is" without warranties of 
                    any kind.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">User Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>You must be at least 18 years old to use our services</li>
                    <li>You are responsible for maintaining the confidentiality of your account</li>
                    <li>You agree to use our services only for lawful purposes</li>
                    <li>You acknowledge that trading involves risk and you trade at your own risk</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Limitation of Liability</h3>
                  <p>
                    Michael Digital Assets Pvt Ltd shall not be liable for any indirect, incidental, special, 
                    consequential, or punitive damages resulting from your use of our services. Our total liability 
                    shall not exceed the amount you paid for the specific service in question.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Refund Policy</h3>
                  <p>
                    Refund requests must be made within 7 days of purchase for online courses. Refunds for 
                    1-to-1 mentorship sessions are evaluated on a case-by-case basis. Custom development projects 
                    follow milestone-based payment terms as outlined in individual contracts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* Compliance */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Indian Regulations</h3>
                  <p>
                    Michael Digital Assets Pvt Ltd is a registered private limited company in India and operates 
                    in full compliance with Indian laws and regulations, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Companies Act, 2013</li>
                    <li>Information Technology Act, 2000</li>
                    <li>Consumer Protection Act, 2019</li>
                    <li>Guidelines issued by SEBI (for educational content only)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cryptocurrency Stance</h3>
                  <p>
                    We acknowledge the evolving regulatory landscape around cryptocurrencies in India. Our 
                    educational content about cryptocurrencies is purely informational. We do not promote, 
                    facilitate, or engage in cryptocurrency trading activities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* Contact for Legal Matters */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact for Legal Matters</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  If you have any questions about our legal policies or need to contact us regarding 
                  legal matters, please reach out to:
                </p>
                <p className="font-semibold text-foreground">
                  Michael Digital Assets Pvt Ltd<br />
                  Email: legal@michaeldigitalassets.com<br />
                  [Add registered address here]
                </p>
                <p className="mt-4 text-sm">
                  Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
