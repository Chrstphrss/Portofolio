import { useEffect } from "react";
import {
  Github,
  Instagram,
  ExternalLink,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@christophorusalann",
    icon: Instagram,
    url: "https://www.instagram.com/christophorusalann",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
    isPrimary: true, // Instagram jadi kartu utama di atas
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Chrstphrss",
    icon: Github,
    url: "https://github.com/Chrstphrss",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "TikTok",
    displayName: "Tiktok",
    subText: "@zsxca0",
    icon: ({ className, ...props }) => (
      <svg
        {...props}
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.525.02c1.31-.02 2.61.17 3.84.58V5.08c-1.2-.36-2.43-.51-3.67-.43v11.49c0 2.27-1.84 4.12-4.12 4.12s-4.12-1.84-4.12-4.12 1.84-4.12 4.12-4.12c.39 0 .77.05 1.14.15V7.03c-3.53-.16-6.43 2.72-6.43 6.26 0 3.46 2.81 6.26 6.26 6.26s6.26-2.8 6.26-6.26V0h.72z" />
      </svg>
    ),
    url: "https://tiktok.com/@zsxca0",
    color: "#25F4EE",
    gradient: "from-[#000000] via-[#25F4EE] to-[#FE2C55]",
  },
];

const SocialLinks = () => {
  const primaryLink = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);

  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3
        className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* Primary Row - Instagram */}
        {primaryLink && (
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r ${primaryLink.gradient}`}
            />

            <div className="relative flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                                 group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: primaryLink.color }}
                />
                <div className="relative p-2 rounded-md">
                  <primaryLink.icon
                    className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                    style={{ color: primaryLink.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  {primaryLink.displayName}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {primaryLink.subText}
                </span>
              </div>
            </div>

            <ExternalLink
              className="relative w-5 h-5 text-gray-500 group-hover:text-white
                         opacity-0 group-hover:opacity-100 transition-all duration-300
                         transform group-hover:translate-x-0 -translate-x-1"
            />
          </a>
        )}

        {/* Secondary Row - GitHub & TikTok */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                         bg-white/5 border border-white/10 overflow-hidden
                         hover:border-white/20 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                           bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink
                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                           opacity-0 group-hover:opacity-100 transition-all duration-300
                           transform group-hover:translate-x-0 -translate-x-2"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;