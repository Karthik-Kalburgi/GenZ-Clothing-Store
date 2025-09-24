import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className=''>
    <footer className="border-t border-gray-300 dark:border-gray-700  bg-white dark:bg-gray-900 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-600 dark:text-gray-400">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">E-Comm</h2>
            <p className="mt-1 text-sm">© {new Date().getFullYear()} E-Comm. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8">
            <a href="/about" className="hover:text-gray-900 dark:hover:text-white transition">
              About
            </a>
            <a href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-900 dark:hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="/contact" className="hover:text-gray-900 dark:hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 text-gray-500 dark:text-gray-400">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-600 transition">
              <BsFacebook size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400 transition">
              <BsTwitter size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-600 transition">
              <BsInstagram size={24} />
            </a>
            <a href="https://github.com" aria-label="GitHub" className="hover:text-gray-900 dark:hover:text-white transition">
              <BsGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
