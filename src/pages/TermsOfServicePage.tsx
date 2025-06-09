import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Rocket } from 'lucide-react'; // Icon for consistency

const TermsOfServicePage = () => {
  console.log('TermsOfServicePage loaded');
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
            <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <Separator />
          <CardContent className="py-6">
            <ScrollArea className="h-[calc(100vh-20rem)] pr-6"> {/* Adjust height as needed */}
              <div className="space-y-6 text-muted-foreground prose prose-sm sm:prose-base dark:prose-invert max-w-none">
                <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the SaaSProduct website and services (collectively, the "Service") operated by SaaSProduct ("us", "we", or "our").</p>
                
                <h3 className="font-semibold text-foreground">1. Agreement to Terms</h3>
                <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

                <h3 className="font-semibold text-foreground">2. Accounts</h3>
                <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

                <h3 className="font-semibold text-foreground">3. Intellectual Property</h3>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of SaaSProduct and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of SaaSProduct.</p>

                <h3 className="font-semibold text-foreground">4. User Conduct</h3>
                <p>You agree not to use the Service:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>In any way that violates any applicable national or international law or regulation.</li>
                  <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                  <li>To impersonate or attempt to impersonate SaaSProduct, a SaaSProduct employee, another user, or any other person or entity.</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm SaaSProduct or users of the Service or expose them to liability.</li>
                </ul>
                
                <h3 className="font-semibold text-foreground">5. Termination</h3>
                <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>

                <h3 className="font-semibold text-foreground">6. Limitation of Liability</h3>
                <p>In no event shall SaaSProduct, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii.any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

                <h3 className="font-semibold text-foreground">7. Disclaimer</h3>
                <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
                
                <h3 className="font-semibold text-foreground">8. Governing Law</h3>
                <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which SaaSProduct is established, without regard to its conflict of law provisions.</p>

                <h3 className="font-semibold text-foreground">9. Changes to Terms</h3>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

                <h3 className="font-semibold text-foreground">10. Contact Us</h3>
                <p>If you have any questions about these Terms, please contact us at: legal@saasproduct.com</p>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>

      <footer className="py-8 border-t">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SaaSProduct. All rights reserved. | <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfServicePage;