import type { Metadata } from "next";
import Link from "next/link";
import { doctor, clinic } from "@/data/doctor";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "About Dr. Sandeep Singh Chhatwal",
  description:
    "Learn about Dr. Sandeep Singh Chhatwal — MBBS, MD (Medicine), 27+ years experience in Internal Medicine. Senior Consultant & Managing Director at Omni Clinics & Diagnostics, Chandigarh.",
  openGraph: {
    title: "About Dr. Sandeep Singh Chhatwal — Physician, Chandigarh",
    description:
      "MBBS (CMC Ludhiana), MD Medicine (GMC Patiala). 27+ years of clinical experience. Member IMA, RSSDI, CSI, API.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary-300 flex items-center justify-center mb-3">
                    <svg
                      className="w-12 h-12 text-primary-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-primary-700">Photo placeholder</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {doctor.name}
              </h1>
              <p className="text-xl text-primary-600 font-medium mb-1">
                {doctor.qualifications}
              </p>
              <p className="text-gray-600 mb-6">{doctor.position}</p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Sandeep Singh Chhatwal is a highly experienced physician
                with over {doctor.experience} years of dedicated practice in
                Internal Medicine. As the Senior Consultant and Managing
                Director of {clinic.name}, Chandigarh, he has built a reputation
                for thorough, patient-centred care that combines clinical
                expertise with genuine compassion.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His approach to medicine is grounded in the belief that accurate
                diagnosis is the cornerstone of effective treatment — a
                philosophy reflected in the clinic&apos;s tagline, &ldquo;
                {clinic.tagline}.&rdquo; Dr. Chhatwal takes the time to
                understand each patient&apos;s unique health concerns, medical
                history, and lifestyle before recommending a personalised
                treatment plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Education & Qualifications
          </h2>
          <div className="space-y-6">
            {doctor.education.map((edu) => (
              <div
                key={edu.degree}
                className="flex gap-4 items-start bg-gray-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-400">Class of {edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Professional Memberships
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {doctor.memberships.map((m) => (
              <div
                key={m.abbr}
                className="bg-white p-5 rounded-xl border border-gray-100"
              >
                <p className="font-bold text-primary-600 text-lg">{m.abbr}</p>
                <p className="text-gray-600 text-sm">{m.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Care Philosophy
          </h2>
          <div className="bg-primary-50 rounded-2xl p-8 sm:p-10">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dr. Chhatwal believes that the doctor-patient relationship is
                built on trust, transparency, and mutual respect. He is known
                for his patient listening skills — taking the time to hear each
                patient&apos;s concerns fully before arriving at a diagnosis.
              </p>
              <p>
                His clinical practice is guided by three core principles:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 text-xs font-bold">
                    1
                  </span>
                  <span>
                    <strong>Accurate Diagnosis:</strong> Thorough evaluation and
                    evidence-based testing to identify the root cause, not just
                    treat symptoms.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 text-xs font-bold">
                    2
                  </span>
                  <span>
                    <strong>Patient Education:</strong> Empowering patients with
                    clear explanations of their condition, treatment options, and
                    lifestyle modifications.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 text-xs font-bold">
                    3
                  </span>
                  <span>
                    <strong>Compassionate Care:</strong> Treating every patient
                    with kindness, empathy, and the personal attention they
                    deserve.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-primary-200 mb-6">
            {clinic.fullAddress} &bull; {clinic.timings}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={clinic.practoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Book on Practo
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MedicalDisclaimer />
      </div>
    </>
  );
}
