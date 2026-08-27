import {
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGlobe,
  FaLink,
  FaBehance,
  FaDribbble,
  FaMedium,
} from "react-icons/fa";
import { SiUpwork, SiFiverr, SiKaggle, SiDevdotto } from "react-icons/si";

const platformMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  stackoverflow: FaStackOverflow,
  "stack overflow": FaStackOverflow,
  upwork: SiUpwork,
  kaggle: SiKaggle,
  fiverr: SiFiverr,
  behance: FaBehance,
  dribbble: FaDribbble,
  twitter: FaTwitter,
  x: FaTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  medium: FaMedium,
  "dev.to": SiDevdotto,
  devto: SiDevdotto,
  portfolio: FaGlobe,
  website: FaGlobe,
  other: FaLink,
};

export const getPlatformIcon = (title = "") => {
  const key = title.trim().toLowerCase();
  return platformMap[key] || FaLink;
};