import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/inext/navbar';
import Footer from '@/inext/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The Good News Collective | Making Jesus Known',
    template: '%s | The Good News Collective',
  },
  description: 'We are a digital ministry community dedicated to making Jesus known through the digital mission field. Join us as we share the Good News across every platform.',
  keywords: ['Christian ministry', 'digital evangelism', 'faith community', 'Good News', 'Bible', 'Jesus', 'gospel outreach'],
  openGraph: { 
    type: 'website',
    url: 'https://thegoodnewscollective.org',
    siteName: 'The Good News Collective',
    title: 'The Good News Collective | Making Jesus Known',
    description: 'A digital ministry community dedicated to making Jesus known through every platform.',
    images: [{ url: 'https://ideogram.ai/api/images/ephemeral/2HFLUpzlVcq-ec4tlO24Uw.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Good News Collective | Making Jesus Known',
    description: 'A digital ministry community dedicated to making Jesus known through every platform.',
    images: ['https://ideogram.ai/api/images/ephemeral/2HFLUpzlVcq-ec4tlO24Uw.png'],
  },
  alternates: {
    canonical: 'https://thegoodnewscollective.org',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'The Good News Collective',
              url: 'https://thegoodnewscollective.org',
              description: 'A digital ministry community making Jesus known through the digital mission field.',
              sameAs: ['https://www.facebook.com/thegoodnewscollective', 'https://www.instagram.com/thegoodnewscollective'],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}