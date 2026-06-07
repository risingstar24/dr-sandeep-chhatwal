import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas, clinic } from "@/data/doctor";
import { practiceAreaDetails } from "@/data/practiceAreaDetails";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Dr. Sandeep Singh Chhatwal treats diabetes, hypertension, thyroid, allergies, geriatric conditions, and more. 27+ years of Internal Medicine expertise in Chandigarh.",
  openGraph: {
    title: "Practice Areas — Dr. Sandeep Singh Chhatwal",
    description:
      "Comprehensive Internal Medicine care: Diabetes, Hypertension, Thyroid, Allergies & Asthma, Geriatrics, Preventive Health, and more.",
  },
};

const icons: Record<string, string> = {
  "Allergies & Asthma": "🫁",
  "Diabetes Care": "🩸",
  "Hypertension Management": "❤️",
  Geriatrics: "🧓",
  "Adolescent Disorders": "👦",
  "Thyroid Diseases": "🦋",
  "Gastrointestinal Diseases": "🏥",
  "Chronic Heart Disease Management": "💓",
  "Bronchial Asthma Management": "💨",
  "Infectious Diseases": "🦠",
  "Routine Medical Checkups": "🩺",
  "Adult Vaccination": "💉",
  Osteoarthritis: "🦴",
  "Peptic Ulcer Disease": "🫄",
  "Stress Management Counselling": "🧘",
  "Tuberculosis Treatment": "🔬",
  Hyperlipidemia: "📊",
};

const detailSlugs = new Set(practiceAreaDetails.map((p) => p.slug));

function areaToSlug(area: string): string | null {
  const slug = area
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return detailSlugs.has(slug) ? slug : null;
}

export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Practice Areas
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Dr. Sandeep Singh Chhatwal provides expert care across a wide
            spectrum of internal medicine conditions. Click on highlighted areas
            to learn more.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => {
              const slug = areaToSlug(area);
              const detail = slug
                ? practiceAreaDetails.find((p) => p.slug === slug)
                : null;
              const card = (
                <div
                  className={`p-6 rounded-xl border ${
                    slug
                      ? "border-primary-200 bg-primary-50 hover:shadow-lg cursor-pointer"
                      : "border-gray-100 bg-gray-50"
                  } transition-shadow`}
                >
                  <span className="text-3xl mb-3 block">
                    {icons[area] || "🏥"}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {area}
                  </h3>
                  {detail && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {detail.description}
                    </p>
                  )}
                  {slug && (
                    <span className="inline-block mt-3 text-sm text-primary-600 font-medium">
                      Learn more &rarr;
                    </span>
                  )}
                </div>
              );

              return slug ? (
                <Link key={area} href={`/practice-areas/${slug}`}>
                  {card}
                </Link>
              ) : (
                <div key={area}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Expert Medical Advice?
          </h2>
          <p className="text-primary-200 mb-6">
            Book a consultation at {clinic.name}, Chandigarh
          </p>
          <a
            href={clinic.practoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MedicalDisclaimer />
      </div>
    </>
  );
}
