import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  DollarSign, 
  Shield, 
  Globe, 
  Send,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const domainPrice = 4999;
  const contactEmail = "sales@domain.com"; // The email address where inquiries should be sent

  const handleBuyNow = () => {
    const subject = encodeURIComponent("Interest in purchasing domain.com");
    const body = encodeURIComponent("Hello,\n\nI am interested in purchasing domain.com listed for $4,999.\n\nPlease provide more information about the purchase process.\n\nBest regards");
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="gradient-bg min-h-[60vh] flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            domain.com
          </h1>
          <div className="animate-float bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-xl">
            <p className="text-2xl md:text-4xl font-bold text-gradient mb-4">
              ${domainPrice.toLocaleString()}
            </p>
            <Button 
              size="lg"
              onClick={handleBuyNow}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Contact to Buy
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-2 duration-300">
            <Globe className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Domain</h3>
            <p className="text-gray-600">Short, memorable, and brandable domain name.</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-2 duration-300">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Transfer</h3>
            <p className="text-gray-600">Safe and secure domain transfer process.</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-2 duration-300">
            <CheckCircle className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Setup</h3>
            <p className="text-gray-600">Quick and hassle-free domain setup.</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Make an Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full min-h-[100px]"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;