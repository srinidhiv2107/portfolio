import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import "../styles/SocialLinks.scss";

const iconSize = 22;

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://github.com/srinidhiv2107" target="_blank" rel="noopener noreferrer">
      <FaGithub size={iconSize} />
    </a>
    <a href="https://www.linkedin.com/in/srinidhiv21/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={iconSize} />
    </a>
    <a href="https://x.com/srinidhiV2107" target="_blank" rel="noopener noreferrer">
      <FaXTwitter size={iconSize} />
    </a>
  </div>
);

export default SocialLinks;
