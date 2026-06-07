import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { doctor, clinic } from "@/data/doctor";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.date,
      authors: [doctor.name],
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      continue;
    }
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-xl font-bold text-gray-900 mt-8 mb-3"
        >
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-semibold text-gray-800 mt-4 mb-1">
          {trimmed.slice(2, -2)}
        </p>
      );
    } else if (trimmed.startsWith("*") && trimmed.endsWith("*")) {
      elements.push(
        <p key={key++} className="text-sm text-gray-500 italic mt-6">
          {trimmed.slice(1, -1)}
        </p>
      );
    } else {
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed mb-3">
          {trimmed}
        </p>
      );
    }
  }

  return elements;
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    author: {
      "@type": "Physician",
      name: doctor.name,
    },
    publisher: {
      "@type": "MedicalClinic",
      name: clinic.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="bg-white">
        <section className="bg-gradient-to-br from-primary-50 to-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/health-articles"
              className="text-primary-600 text-sm hover:underline mb-4 inline-block"
            >
              &larr; All Articles
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-gray-500">{article.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>By {doctor.name}</span>
              <span>&bull;</span>
              <time dateTime={article.date}>{article.date}</time>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderContent(article.content)}
          </div>
        </section>
      </article>

      <section className="bg-primary-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have Questions About Your Health?
          </h2>
          <p className="text-primary-200 mb-6">
            Consult {doctor.name} at {clinic.name}, Chandigarh
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <MedicalDisclaimer />
      </div>
    </>
  );
}
