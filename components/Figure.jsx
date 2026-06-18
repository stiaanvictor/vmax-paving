"use client";

import { useState } from "react";

// Image with a tasteful stone-gradient fallback so nothing ever looks broken.
// All images are placeholders — swap the URLs in lib/site.js.
export default function Figure({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes = "100vw",
  priority = false,
  fill = false,
}) {
  const [ok, setOk] = useState(true);

  return (
    <div
      className={`${
        fill ? "absolute inset-0" : "relative"
      } overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-blue-accent ${className}`}
    >
      {/* placeholder texture shown until/if image loads */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 10px, transparent 10px 20px)",
        }}
      />
      {ok && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setOk(false)}
          className={`relative h-full w-full object-cover transition-transform duration-700 ease-smooth ${imgClassName}`}
        />
      )}
    </div>
  );
}
