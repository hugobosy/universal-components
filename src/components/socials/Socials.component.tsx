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
}) => {
  return (
    <Socials>
      {facebook && (
        <FaFacebookF
          size={size}
          onClick={() => handleClickSocialIcon(facebook.href)}
        />
      )}
      {twitter && (
        <FaTwitter
          size={size}
          onClick={() => handleClickSocialIcon(twitter.href)}
        />
      )}
      {instagram && (
        <FaInstagram
          size={size}
          onClick={() => handleClickSocialIcon(instagram.href)}
        />
      )}
      {linkedin && (
        <FaLinkedinIn
          size={size}
          onClick={() => handleClickSocialIcon(linkedin.href)}
        />
      )}
      {pinterest && (
        <FaPinterest
          size={size}
          onClick={() => handleClickSocialIcon(pinterest.href)}
        />
      )}
      {youtube && (
        <FaYoutube
          size={size}
          onClick={() => handleClickSocialIcon(youtube.href)}
        />
      )}
    </Socials>
  );
};
