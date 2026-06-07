import type { Metadata } from "next";
import { doctor, clinic } from "@/data/doctor";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photo gallery of ${clinic.name}, Chandigarh — clinic interiors, health camps, community events, and awards. ${doctor.name}, Senior Consultant Medicine.`,
  openGraph: {
    title: `Gallery — ${clinic.name}`,
    description: `Explore photos of ${clinic.name} — clinic interiors, health camps, awards & recognition.`,
  },
};

interface GallerySection {
  title: string;
  folder: string;
  count: number;
  icon: React.ReactNode;
  note?: string;
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

const sections: GallerySection[] = [
  {
    title: "Clinic Interior",
    folder: "public/gallery/clinic/",
    count: 6,
    icon: (
      <svg
        className="w-8 h-8 text-primary-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Health Camps & Community Events",
    folder: "public/gallery/events/",
    count: 4,
    icon: (
      <svg
        className="w-8 h-8 text-primary-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Awards & Recognition",
    folder: "public/gallery/awards/",
    count: 3,
    icon: (
      <svg
        className="w-8 h-8 text-primary-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Dr. Chhatwal with Patients",
    folder: "public/gallery/patients/",
    count: 4,
    icon: (
      <svg
        className="w-8 h-8 text-primary-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    note: "Photos shared with patient consent",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            A visual tour of {clinic.name} — our clinic, community outreach,
            achievements, and the people we serve.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-2">
                {section.icon}
                <h2 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              {section.note && (
                <p className="text-sm text-gray-500 italic mb-4 ml-11">
                  {section.note}
                </p>
              )}
              <div
                className={`grid grid-cols-2 ${
                  section.count === 3
                    ? "md:grid-cols-3"
                    : section.count >= 6
                      ? "md:grid-cols-3"
                      : "md:grid-cols-2 lg:grid-cols-4"
                } gap-4 mt-4`}
              >
                {Array.from({ length: section.count }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 hover:border-primary-300 hover:bg-primary-50/30 transition-colors group"
                  >
                    <CameraIcon className="w-10 h-10 text-gray-300 group-hover:text-primary-300 transition-colors" />
                    <span className="text-xs text-gray-400 group-hover:text-primary-400 font-medium transition-colors">
                      Upload photo
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 ml-1">
                Add your photos to{" "}
                <code className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-500 text-xs">
                  {section.folder}
                </code>{" "}
                to display them here.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Visit Us in Person
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
