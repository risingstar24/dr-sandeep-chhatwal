import Link from "next/link";
import { clinic, doctor } from "@/data/doctor";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {doctor.name}
            </h3>
            <p className="text-sm mb-2">{doctor.qualifications}</p>
            <p className="text-sm mb-2">{doctor.position}</p>
            <p className="text-sm text-primary-300">{clinic.name}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas"
                  className="hover:text-white transition-colors"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-white transition-colors"
                >
                  Patient Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/health-articles"
                  className="hover:text-white transition-colors"
                >
                  Health Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Clinic Hours</h4>
            <p className="text-sm mb-2">Monday - Saturday</p>
            <p className="text-sm font-medium text-white mb-4">
              09:30 AM - 05:00 PM
            </p>
            <p className="text-sm mb-1">Sunday</p>
            <p className="text-sm text-red-400">Closed</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">{clinic.address}</p>
            <p className="text-sm mb-2">{clinic.landmark}</p>
            <p className="text-sm mb-4">
              {clinic.city} {clinic.pincode}
            </p>
            <a
              href={doctor.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              {doctor.twitter}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="text-xs text-gray-500 space-y-2">
            <p>
              <strong>Medical Disclaimer:</strong> The information provided on
              this website is for general informational purposes only and should
              not be considered as medical advice. Always consult a qualified
              healthcare professional for diagnosis and treatment. Never
              disregard professional medical advice or delay in seeking it
              because of something you have read on this website.
            </p>
            <p className="text-center mt-4">
              &copy; {new Date().getFullYear()} {doctor.name} &mdash;{" "}
              {clinic.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
