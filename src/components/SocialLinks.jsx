import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "../styles/SocialLinks.scss";

const iconSize = "clamp(1.125rem, 1.063rem + 0.278vw, 1.375rem)";

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://www.linkedin.com/in/srinidhiv21/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn size={iconSize} />
    </a>
    <a href="https://github.com/srinidhiv2107" target="_blank" rel="noopener noreferrer">
      <FaGithub size={iconSize} />
    </a>
    <a href="https://leetcode.com/u/srinidhiV2107/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 13h7.5" /><path d="M9.424 7.268l4.999 -4.999" /><path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" /></svg>
    </a>
  </div>
);

export default SocialLinks;
