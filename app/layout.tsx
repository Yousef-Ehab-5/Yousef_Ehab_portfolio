import type { Metadata } from "next";
import Navbar from "../src/components/Navbar";
import { portfolioData as data } from "../src/data/portfolioData";
import "./globals.css";
export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  metadataBase: new URL(
    data.seo.siteUrl ||
      "https://yousef-ehab-portfolio.adept-boot-6542.chatgpt.site",
  ),
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    type: "website",
    images: [data.seo.image],
  },
  twitter: {
    card: "summary_large_image",
    title: data.seo.title,
    description: data.seo.description,
    images: [data.seo.image],
  },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')||'light'}catch(e){}",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        {children}
        <footer>
          <a className="brand" href="/#home">
            <span className="monogram">
              {data.personalInfo.initials}
              <span>.</span>
            </span>
            {data.personalInfo.shortName}
          </a>
          <span>
            © {new Date().getFullYear()} {data.personalInfo.name}
          </span>
          <span>Thoughtfully engineered in Cairo.</span>
        </footer>
      </body>
    </html>
  );
}
