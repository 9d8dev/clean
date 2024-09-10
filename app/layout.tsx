import "./globals.css";
import Script from "next/script";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
// import { NavMenu } from "@/components/layout/nav-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";

import Image from "next/image";
import Link from "next/link";
import Sticker from "@/public/sticker.png";
import Balancer from "react-wrap-balancer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curiously Clean | Auto Detailing",
  description:
    "Elevating the art of automotive detailing with an unyielding dedication to meticulous spotlessness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '824852226112291');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=824852226112291&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn("sticky z-50 top-0 bg-background", "border-b", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link className="hover:opacity-75 transition-all" href="/">
          <h2 className="sr-only">Curiously Clean</h2>
          <Image src="/logo.svg" alt="Logo" width={120} height={41.96}></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          {/* <NavMenu /> */}
          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="border-t pb-12 md:mb-0">
      <Section>
        <Container className="grid gap-6">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">Curiously Clean</h3>
              <Image src={Sticker} alt="Logo" width={164} height={28.5}></Image>
            </Link>
            <p>
              <Balancer>
                Elevating the art of automotive detailing with an unyielding
                dedication to meticulous spotlessness.
              </Balancer>
            </p>
            <div className="flex gap-4 underline underline-offset-4 text-sm text-muted-foreground">
              <Link href="/legal">Privacy Policy</Link>
              <Link href="/legal">Terms of Service</Link>
            </div>
            <p className="text-muted-foreground">
              © Curiously Clean. All rights reserved. 2023-present.
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
