import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default:
      "Dr. Sandeep Singh Chhatwal — Senior Consultant Medicine, Chandigarh",
    template: "%s | Dr. Sandeep Singh Chhatwal",
  },
  description:
    "Dr. Sandeep Singh Chhatwal — MBBS, MD (Medicine), 27+ years experience. Senior Consultant & Managing Director at Omni Clinics & Diagnostics, Chandigarh. Expert in Diabetes, Hypertension, Thyroid, Allergies & Internal Medicine.",
  keywords: [
    "Dr Sandeep Singh Chhatwal",
    "best physician Chandigarh",
    "internal medicine Chandigarh",
    "Omni Clinics Diagnostics",
    "diabetes doctor Chandigarh",
    "hypertension specialist Chandigarh",
    "general physician Sector 34 Chandigarh",
  ],
  authors: [{ name: "Dr. Sandeep Singh Chhatwal" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Sandeep Singh Chhatwal",
    title:
      "Dr. Sandeep Singh Chhatwal — Senior Consultant Medicine, Chandigarh",
    description:
      "MBBS, MD (Medicine) with 27+ years experience. Expert in Diabetes, Hypertension, Thyroid & Internal Medicine at Omni Clinics & Diagnostics, Chandigarh.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Sandeep Singh Chhatwal",
              description:
                "Senior Consultant Medicine & Managing Director at Omni Clinics & Diagnostics, Chandigarh. MBBS, MD (Medicine) with 27+ years of experience.",
              medicalSpecialty: "Internal Medicine",
              url: "https://dr-sandeep-chhatwal.vercel.app",
              telephone: "+91-172-XXXXXXX",
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Christian Medical College, Ludhiana",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Government Medical College, Punjabi University, Patiala",
                },
              ],
              memberOf: [
                { "@type": "Organization", name: "Indian Medical Association" },
                {
                  "@type": "Organization",
                  name: "Research Society for Study of Diabetes in India",
                },
                {
                  "@type": "Organization",
                  name: "Cardiological Society of India",
                },
                {
                  "@type": "Organization",
                  name: "Association of Physicians of India",
                },
              ],
              worksFor: {
                "@type": "MedicalClinic",
                name: "Omni Clinics & Diagnostics",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "SCO 343-345, Sector 34A",
                  addressLocality: "Chandigarh",
                  postalCode: "160022",
                  addressCountry: "IN",
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:30",
                  closes: "19:00",
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
