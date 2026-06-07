import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import { doctor } from "@/data/doctor";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Health Articles",
  description:
    "Expert health articles by Dr. Sandeep Singh Chhatwal on diabetes, hypertension, thyroid, allergies, preventive health, and geriatric care.",
  openGraph: {
    title: "Health Articles — Dr. Sandeep Singh Chhatwal",
    description:
      "Read expert health articles on diabetes, blood pressure, thyroid, allergies, and more by Dr. Chhatwal.",
  },
};

export default function HealthArticlesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Health Articles
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Evidence-based health information from {doctor.name} to help you
            make informed decisions about your well-being.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/health-articles/${article.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group"
              >
                <div className="h-2 bg-gradient-to-r from-primary-500 to-accent-500" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {article.date}
                    </span>
                    <span className="text-sm text-primary-600 font-medium">
                      Read article &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MedicalDisclaimer />
      </div>
    </>
  );
}
