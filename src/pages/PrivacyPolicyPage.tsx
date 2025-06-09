import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Rocket } from 'lucide-react'; // Icon for consistency

const PrivacyPolicyPage = () => {
  console.log('PrivacyPolicyPage loaded');
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">SaaSProduct</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Back to Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <Separator />
          <CardContent className="py-6">
            <ScrollArea className="h-[calc(100vh-20rem)] pr-6"> {/* Adjust height as needed */}
              <div className="space-y-6 text-muted-foreground prose prose-sm sm:prose-base dark:prose-invert max-w-none">
                <p>Welcome to SaaSProduct's Privacy Policy. This policy describes how we collect, use, process, and disclose your information, including personal data, in conjunction with your access to and use of the SaaSProduct platform and services.</p>
                
                <h3 className="font-semibold text-foreground">1. Information We Collect</h3>
                <p>We collect various types of information in connection with the services we provide, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Information you provide to us:</strong> This includes account registration details (name, email, password), profile information, payment information, and any communications you send us.</li>
                  <li><strong>Information we automatically collect:</strong> This includes usage data (features used, pages visited, time spent), device information (IP address, browser type, operating system), and cookies and similar technologies.</li>
                  <li><strong>Information from third parties:</strong> We may receive information about you from third-party services, such as identity verification services or social media platforms if you link your account.</li>
                </ul>

                <h3 className="font-semibold text-foreground">2. How We Use Your Information</h3>
                <p>We use the information we collect for purposes such as:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Providing, operating, and maintaining our services.</li>
                  <li>Improving, personalizing, and expanding our services.</li>
                  <li>Understanding and analyzing how you use our services.</li>
                  <li>Developing new products, services, features, and functionality.</li>
                  <li>Communicating with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes.</li>
                  <li>Processing your transactions.</li>
                  <li>Finding and preventing fraud.</li>
                </ul>

                <h3 className="font-semibold text-foreground">3. How We Share Your Information</h3>
                <p>We may share the information we collect in various ways, including the following:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.</li>
                  <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                  <li><strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                  <li><strong>With your consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
                </ul>

                <h3 className="font-semibold text-foreground">4. Data Security</h3>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                <h3 className="font-semibold text-foreground">5. Your Data Protection Rights</h3>
                <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, update, or request deletion of your personal information. If you wish to exercise any of these rights, please contact us.</p>

                <h3 className="font-semibold text-foreground">6. Children's Privacy</h3>
                <p>Our services are not intended for use by children under the age of 13 (or 16 in some jurisdictions), and we do not knowingly collect personal information from children under this age. If we learn that we have collected personal information from a child under the relevant age, we will take steps to delete such information from our files as soon as possible.</p>

                <h3 className="font-semibold text-foreground">7. Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>

                <h3 className="font-semibold text-foreground">8. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at: privacy@saasproduct.com</p>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>

      <footer className="py-8 border-t">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SaaSProduct. All rights reserved. | <Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;