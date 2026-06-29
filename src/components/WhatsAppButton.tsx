import { siteConfig } from "@/content/site";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp (демо)"
      className="btn-glow group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-olive-deep shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:bg-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-olive-deep"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-3.6 4.45c-.17 0-.45.06-.68.31-.23.26-.9.88-.9 2.15s.92 2.49 1.05 2.66c.13.17 1.8 2.75 4.37 3.85.61.26 1.09.42 1.46.54.61.2 1.17.17 1.61.1.49-.07 1.51-.62 1.72-1.21.21-.59.21-1.1.15-1.21-.06-.1-.23-.16-.49-.28-.26-.13-1.51-.75-1.75-.83-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8.99-.15.17-.29.2-.55.07-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.52-1.43-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.31.4-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.06-.13-.57-1.38-.78-1.89-.21-.5-.42-.43-.57-.44-.15 0-.32-.01-.49-.01Z" />
      </svg>
    </a>
  );
}
