import Link from "next/link";
import {
  doctor,
  clinic,
  practiceAreas,
  testimonials,
  stats,
} from "@/data/doctor";
import { articles } from "@/data/articles";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

const practiceAreaIcons: Record<string, string> = {
  "Allergies & Asthma": "🫁",
  "Diabetes Care": "🩸",
  "Hypertension Management": "❤️",
  Geriatrics: "🧓",
  "Thyroid Diseases": "🦋",
  "Routine Medical Checkups": "🩺",
  "Adult Vaccination": "💉",
  "Infectious Diseases": "🦠",
  "Gastrointestinal Diseases": "🏥",
  "Chronic Heart Disease Management": "💓",
  "Stress Management Counselling": "🧘",
  Hyperlipidemia: "📊",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-600 font-semibold mb-2">
                {clinic.name}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {doctor.name}
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                {doctor.qualifications}
              </p>
              <p className="text-lg text-gray-500 mb-6">
                {doctor.position}
              </p>
              <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">
                With over {doctor.experience} years of experience in Internal
                Medicine, Dr. Chhatwal provides compassionate, evidence-based
                care for patients of all ages at {clinic.name}, Chandigarh.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={clinic.practoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
                >
                  Book Appointment
                </a>
                <Link
                  href="/about"
                  className="px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary-300 flex items-center justify-center mb-4">
                    <svg
                      className="w-16 h-16 text-primary-700"
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
                  <p className="text-sm text-primary-700 font-medium">
                    Professional photo coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary-600">
                {stats.experienceYears}
              </p>
              <p className="text-sm text-gray-500 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">
                {stats.practoRecommendations}+
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Patient Recommendations
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">
                {stats.justdialRating}/5
              </p>
              <p className="text-sm text-gray-500 mt-1">Patient Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">4</p>
              <p className="text-sm text-gray-500 mt-1">
                Professional Memberships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Areas of Special Interest
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dr. Chhatwal provides expert care across a wide range of internal
              medicine conditions, with particular expertise in the following
              areas.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {practiceAreas.map((area) => (
              <Link
                key={area}
                href="/practice-areas"
                className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <span className="text-2xl mb-2 block">
                  {practiceAreaIcons[area] || "🏥"}
                </span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                  {area}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/practice-areas"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All Practice Areas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Patients Say
            </h2>
            <p className="text-gray-600">
              Verified reviews from patients on Practo
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-primary-50 rounded-2xl p-8 relative"
              >
                <svg
                  className="w-8 h-8 text-primary-200 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm text-gray-500">
                  &mdash; Verified Patient on{" "}
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
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Read All Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Health Articles
            </h2>
            <p className="text-gray-600">
              Expert health insights from Dr. Chhatwal
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={`/health-articles/${article.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="h-2 bg-gradient-to-r from-primary-500 to-accent-500" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-xs text-gray-400 gap-3">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/health-articles"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All Articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-primary-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Visit {clinic.name}
          </h2>
          <p className="text-primary-100 mb-2 text-lg">
            &ldquo;{clinic.tagline}&rdquo;
          </p>
          <p className="text-primary-200 mb-8">{clinic.fullAddress}</p>
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
              Get Directions
            </Link>
          </div>
          <p className="text-primary-200 mt-6 text-sm">{clinic.timings}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MedicalDisclaimer />
      </div>
    </>
  );
}
