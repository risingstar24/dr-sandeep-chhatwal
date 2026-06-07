import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  practiceAreaDetails,
  getPracticeAreaBySlug,
} from "@/data/practiceAreaDetails";
import { clinic, doctor } from "@/data/doctor";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export function generateStaticParams() {
  return practiceAreaDetails.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = getPracticeAreaBySlug(params.slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.metaDescription,
    openGraph: {
      title: `${area.title} — Dr. Sandeep Singh Chhatwal`,
      description: area.metaDescription,
    },
  };
}

export default function PracticeAreaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const area = getPracticeAreaBySlug(params.slug);
  if (!area) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/practice-areas"
            className="text-primary-600 text-sm hover:underline mb-4 inline-block"
          >
            &larr; All Practice Areas
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {area.title}
          </h1>
          <p className="text-gray-600 text-lg">{area.description}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{area.overview}</p>
          </div>

          {/* Symptoms */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Common Symptoms
            </h2>
            <ul className="space-y-3">
              {area.symptoms.map((s, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-2 h-2 mt-2 shrink-0 rounded-full bg-primary-500" />
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* When to Consult */}
          <div className="bg-amber-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              When to Consult {doctor.name}
            </h2>
            <ul className="space-y-3">
              {area.whenToConsult.map((w, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 text-xs font-bold">
                    !
                  </span>
                  <span className="text-gray-700">{w}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Expect */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What to Expect During Your Visit
            </h2>
            <div className="space-y-4">
              {area.whatToExpect.map((w, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Book a Consultation for {area.title}
          </h2>
          <p className="text-primary-200 mb-6">
            {clinic.fullAddress} &bull; {clinic.timings}
          </p>
          <a
            href={clinic.practoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Book on Practo
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MedicalDisclaimer />
      </div>
    </>
  );
}
