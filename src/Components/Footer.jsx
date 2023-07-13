import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import { SiTwitter, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4 text-xs md:text-sm">
        {siteConfig.mainFooter.map((f, i) => (
          <Link key={i} to={f.href} className="link link-hover">
            {f.title}
          </Link>
        ))}
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-all duration-300"
          >
            <SiTwitter />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:scale-125 transition-all duration-300"
            href={siteConfig.links.github}
          >
            <SiGithub />
          </a>
        </div>
      </div>
      <div>
        <p className="w-full max-w-lg">
          {siteConfig.copyrights.desc}{" "}
          <a
            className="border-b border-[#ffffff34] hover:text-white hover:border-white"
            target="_blank"
            rel="noreferrer"
            href={siteConfig.copyrights.href}
          >
            {siteConfig.copyrights.name}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
