import React from "react";
import { Socials } from "./Socials.styles";
import { SocialsTypes } from "./Socials.types";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { handleClickSocialIcon } from "./Socials.utils";

export const SocialsComponent: React.FC<SocialsTypes> = ({
  facebook,
  twitter,
  instagram,
  linkedin,
  pinterest,
  youtube,
  size,
  hover,
  transition,
}) => {
  return (
    <Socials hover={hover} transition={transition}>
      {facebook && (
        <FaFacebookF
          size={size}
          onClick={() => handleClickSocialIcon(facebook.href)}
          className="icon"
        />
      )}
      {twitter && (
        <FaTwitter
          size={size}
          onClick={() => handleClickSocialIcon(twitter.href)}
          className="icon"
        />
      )}
      {instagram && (
        <FaInstagram
          size={size}
          onClick={() => handleClickSocialIcon(instagram.href)}
          className="icon"
        />
      )}
      {linkedin && (
        <FaLinkedinIn
          size={size}
          onClick={() => handleClickSocialIcon(linkedin.href)}
          className="icon"
        />
      )}
      {pinterest && (
        <FaPinterest
          size={size}
          onClick={() => handleClickSocialIcon(pinterest.href)}
          className="icon"
        />
      )}
      {youtube && (
        <FaYoutube
          size={size}
          onClick={() => handleClickSocialIcon(youtube.href)}
          className="icon"
        />
      )}
    </Socials>
  );
};
