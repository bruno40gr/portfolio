import React from "react";

import { ASSETS } from "../../data/assets";

const avatarSources = {
  logo: ASSETS.isoGreen,
  photo: ASSETS.aboutPhoto,
};

const VoiceHeading = ({
  eyebrow,
  title,
  showAvatar = false,
  avatarType = "logo",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
}) => {
  const avatarSrc = avatarSources[avatarType] || avatarSources.logo;

  return (
    <div className={`voice-heading ${className}`.trim()}>
      {showAvatar && (
        <div className="voice-heading__avatar" aria-hidden="true">
          <img
            src={avatarSrc}
            alt=""
            className={`voice-heading__avatar-image ${avatarType === "photo" ? "voice-heading__avatar-image--photo" : "voice-heading__avatar-image--logo"}`}
          />
        </div>
      )}

      <div className="voice-heading__content">
        {eyebrow ? (
          <div className={`voice-heading__eyebrow ${eyebrowClassName}`.trim()}>{eyebrow}</div>
        ) : null}
        {title ? (
          <div className={`voice-heading__title ${titleClassName}`.trim()}>{title}</div>
        ) : null}
      </div>
    </div>
  );
};

export default VoiceHeading;