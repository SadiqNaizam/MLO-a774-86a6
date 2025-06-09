import React from 'react';
import { Link } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Custom Components
import Carousel from '@/components/Carousel';
import FeatureShowcaseItem from '@/components/FeatureShowcaseItem';
import TestimonialCard from '@/components/TestimonialCard';
import AnimatedCounter from '@/components/AnimatedCounter';

// Shadcn UI Components
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast"; // For form submission confirmation

// Lucide Icons
import { Zap, BarChartBig, Users, Rocket, ShieldCheck, LifeBuoy } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const SaaSProductLandingPage = () => {
  console.log('SaaSProductLandingPage loaded');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  function onSubmit(data: FormData) {
    console.log("Form submitted:", data);
    toast({
      title: "Demo Request Received!",
      description: `Thanks, ${data.name}! We'll be in touch soon at ${data.email}.`,
    });
    form.reset();
  }

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Experience unparalleled speed and responsiveness." },
    { icon: BarChartBig, title: "Insightful Analytics", description: "Gain valuable insights with our advanced analytics." },
    { icon: Users, title: "Team Collaboration", description: "Seamlessly collaborate with your team members." },
    { icon: Rocket, title: "Scalable Infrastructure", description: "Grow your business without worrying about limits." },
    { icon: ShieldCheck, title: "Top-tier Security", description: "Your data is safe and secure with us." },
    { icon: LifeBuoy, title: "Dedicated Support", description: "Get help whenever you need it from our expert team." },
  ];

  const testimonials = [
    { id: 1, quote: "This product has revolutionized how we work. Absolutely essential!", authorName: "Alex Johnson", authorTitle: "CEO, Tech Solutions Inc.", avatarUrl: "https://i.pravatar.cc/150?u=alexjohnson", rating: 5 },
    { id: 2, quote: "The best SaaS tool I've used in years. Highly recommended.", authorName: "Maria Garcia", authorTitle: "Marketing Director, Creative Co.", avatarUrl: "https://i.pravatar.cc/150?u=mariagarcia", rating: 5 },
    { id: 3, quote: "A game changer for our productivity. The support team is also fantastic!", authorName: "Sam Lee", authorTitle: "Operations Manager, Innovate Ltd.", avatarUrl: "https://i.pravatar.cc/150?u=samlee", rating: 4 },
  ];

  const carouselSlides = testimonials.map(testimonial => ({
    id: testimonial.id,
    content: <TestimonialCard {...testimonial} className="h-full" />
  }));

  const stats = [
    { endValue: 10000, suffix: "+", label: "Happy Users" },
    { endValue: 500, suffix: "+", label: "Companies Trust Us" },
    { endValue: 99, suffix: "%", label: "Uptime Guarantee" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">SaaSProduct</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#features" className={navigationMenuTriggerStyle()}>
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#testimonials" className={navigationMenuTriggerStyle()}>
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#cta" className={navigationMenuTriggerStyle()}>
                  Request Demo
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="#cta">Sign Up</Link>
            </Button>
          </div>
          {/* Mobile Menu Trigger (implementation would be part of NavigationMenu or custom) */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              <div className="space-y-4 text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  The Future of <span className="text-primary">Productivity</span> is Here
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                  Streamline your workflow, boost collaboration, and achieve more with our cutting-edge SaaS solution.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <Link to="#cta">Request a Demo</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto lg:max-w-none">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Fhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="SaaS Product Showcase"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        {/* Features Section */}
        <section id="features" className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-10 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features, Simply Delivered</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Everything you need to succeed, all in one intuitive platform.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureShowcaseItem key={index} icon={feature.icon} title={feature.title} description={feature.description} className="bg-card p-6 rounded-lg shadow" />
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-20 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-10 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Loved by Teams Worldwide</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Don't just take our word for it. See what our customers are saying.
              </p>
            </div>
            <Carousel slides={carouselSlides} options={{ loop: true, align: 'start' }} enableAutoplay={true} />
          </div>
        </section>
        
        <Separator className="my-12 md:my-16" />

        {/* Stats Section */}
        <section id="stats" className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-6">
                            <AnimatedCounter
                                endValue={stat.endValue}
                                suffix={stat.suffix}
                                duration={3}
                                className="text-5xl font-bold text-primary"
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                            />
                            <p className="text-lg text-muted-foreground mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <Separator className="my-12 md:my-16" />

        {/* CTA Section */}
        <section id="cta" className="py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container px-4 md:px-6">
            <Card className="max-w-2xl mx-auto shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</CardTitle>
                <p className="text-muted-foreground pt-2">
                  Fill out the form below to request a personalized demo or get more information.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" size="lg">
                      Request Demo
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SaaSProduct. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default SaaSProductLandingPage;