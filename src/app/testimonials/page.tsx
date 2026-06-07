import type { Metadata } from "next";
import { testimonials, stats, clinic, doctor } from "@/data/doctor";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials",
  description:
    "Read verified patient reviews for Dr. Sandeep Singh Chhatwal — 465+ recommendations on Practo, 4.4/5 rating on Justdial. Trusted physician in Chandigarh.",
  openGraph: {
    title: "Patient Reviews — Dr. Sandeep Singh Chhatwal",
    description:
      "465+ patient recommendations on Practo. Read verified reviews from real patients.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Patient Reviews & Testimonials
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            What patients say about their experience with {doctor.name} at{" "}
            {clinic.name}, Chandigarh.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary-600">
                {stats.practoRecommendations}+
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Recommendations on Practo
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">
                {stats.practoStories}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Patient Stories on Practo
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">
                {stats.justdialRating}/5
              </p>
              <p className="text-sm text-gray-500 mt-1">Justdial Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">
                {stats.experienceYears}
              </p>
              <p className="text-sm text-gray-500 mt-1">Years of Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Verified Patient Reviews
          </h2>

          <div className="space-y-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex gap-3 items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Verified Patient
                    </p>
                    <p className="text-sm text-gray-500">
                      via{" "}
                      <a
                        href={t.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:underline"
                      >
                        {t.source}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-2xl p-8 border border-gray-100 text-center">
            <p className="text-gray-600 mb-4">
              Only verified patient reviews from Practo and Lybrate are
              displayed on this website. We do not publish fabricated
              testimonials.
            </p>
            <a
              href={clinic.practoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 font-semibold hover:underline"
            >
              See all reviews on Practo &rarr;
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Experience the Care Yourself
          </h2>
          <p className="text-primary-200 mb-6">
            Join {stats.practoRecommendations}+ patients who recommend{" "}
            {doctor.name}
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MedicalDisclaimer />
      </div>
    </>
  );
}
