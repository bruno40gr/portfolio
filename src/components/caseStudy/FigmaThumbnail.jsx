import React from "react";
import { FigmaEmbed } from "../ui/FigmaEmbed";

const FigmaThumbnail = ({ src, caption, onClick }) => (
  <button
    onClick={onClick}
    className="block w-full text-left"
    aria-label={`Open Figma prototype: ${caption}`}
  >
    <FigmaEmbed src={src} title={caption} scaling="scale-down" />
  </button>
);

export default FigmaThumbnail;
