import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-24 border-t border-outline-variant mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Col 1 */}
        <div className="md:col-span-1">
          <div className="font-headline-md text-headline-md text-primary mb-6 font-semibold">
            Starline Constructions
          </div>
          <p className="text-on-surface-variant font-body-md mb-8 leading-relaxed">
            Crafting excellence in every square foot since 1998. Your premier partner for high-end construction in Kochi.
          </p>
        </div>

        {/* Col 2 */}
        <div className="md:col-span-1">
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-6 font-semibold">
            Quick Links
          </h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-on-surface-variant hover:text-secondary transition-colors font-body-md">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-on-surface-variant hover:text-secondary transition-colors font-body-md">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-on-surface-variant hover:text-secondary transition-colors font-body-md">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-on-surface-variant hover:text-secondary transition-colors font-body-md">
                Iconic Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="md:col-span-2">
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-6 font-semibold">
            Contact Information
          </h4>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-secondary mt-1">location_on</span>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                1st Floor, Marian Abode Putharickal, Parambithara Road, Panampilly Nagar, Kochi
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span className="material-symbols-outlined text-secondary">call</span>
              <a href="tel:+919446090003" className="text-on-surface-variant hover:text-secondary transition-colors font-body-md">
                +91 94460 90003, +91 94460 90009
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <a href="mailto:starlineconstructions2017@gmail.com" className="text-on-surface-variant hover:text-secondary transition-colors font-body-md">
                starlineconstructions2017@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-20 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-on-surface-variant font-body-md text-sm">
          © 2026 Starline Constructions. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-sm">
            Privacy Policy
          </Link>
          <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors font-body-md text-sm">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
