// components/WhatsAppFloat.jsx
import React from "react";

export default function WhatsAppFloat({
  phone,
  text,
}) {
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      style={{position: "sticky", left: 20, bottom: 20}}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-[9999] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-transform transform hover:scale-110 active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 md:w-8 md:h-8"
        fill="white"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.88 11.88 0 0012.06 0C5.4 0 .2 5.2.2 11.86c0 2.09.55 4.14 1.6 5.95L0 24l6.46-1.67a11.84 11.84 0 005.6 1.36h.01c6.66 0 11.86-5.2 11.86-11.86 0-3.17-1.24-6.14-3.4-8.15zM12.06 21.6h-.01a9.54 9.54 0 01-4.88-1.34l-.35-.2-3.84.99.98-3.73-.23-.38A9.42 9.42 0 012.64 11.9c0-5.17 4.2-9.38 9.38-9.38 2.51 0 4.87.98 6.64 2.76 1.77 1.77 2.75 4.13 2.75 6.64 0 5.17-4.2 9.38-9.38 9.38z" />
        <path d="M17.32 14.07c-.29-.14-1.7-.84-1.96-.94-.26-.11-.45-.16-.64.15-.19.31-.73.94-.9 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.73-1.62-2.02-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.49-.64-.5-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.77.36-.27.29-1.04 1.02-1.04 2.48 0 1.45 1.07 2.85 1.21 3.05.15.19 2.09 3.2 5.07 4.49 0 0 .33.13.6.06.28-.07 1.7-.69 1.94-1.36.24-.68.24-1.26.17-1.38-.07-.13-.26-.19-.55-.32z" />
      </svg>
    </a>
  );
}
