import React from "react";
import { FigmaEmbed } from "../ui/FigmaEmbed";

const FigmaThumbnail = ({ src, caption }) => (
  <a
    href={src}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
    aria-label={`Open Figma prototype: ${caption}`}
  >
    <FigmaEmbed src={src} title={caption} scaling="scale-down" />
  </a>
);

export default FigmaThumbnail;
