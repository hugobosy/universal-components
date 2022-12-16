import React from "react";
import { Socials } from "./Socials.styles";
import { SocialsTypes } from "./Socials.types";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const SocialsComponent: React.FC<SocialsTypes> = ({
  facebook,
  twitter,
  instagram,
  linkedin,
  pinterest,
  youtube,
  size,
}) => {
  return (
    <Socials>
      {facebook && <FaFacebookF size={size} />}
      {twitter && <FaTwitter size={size} />}
      {instagram && <FaInstagram size={size} />}
      {linkedin && <FaLinkedinIn size={size} />}
      {pinterest && <FaPinterest size={size} />}
      {youtube && <FaYoutube size={size} />}
    </Socials>
  );
};
