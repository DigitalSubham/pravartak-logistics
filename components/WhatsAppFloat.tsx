import Link from 'next/link'

const WHATSAPP_NUMBER = '911234567890'
const WHATSAPP_MESSAGE = encodeURIComponent('Hello Pravartak Logistics, I would like to know more about your services.')

export default function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 hover:bg-[#20c55a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.59 2 2.16 6.42 2.16 11.86c0 1.74.45 3.43 1.31 4.93L2 22l5.37-1.41a9.86 9.86 0 0 0 4.66 1.19h.01c5.44 0 9.86-4.42 9.86-9.86 0-2.64-1.03-5.12-2.85-7.01Zm-7.02 15.2h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.19.84.85-3.11-.2-.32a8.15 8.15 0 0 1-1.26-4.35c0-4.5 3.67-8.17 8.18-8.17 2.18 0 4.22.84 5.76 2.39a8.08 8.08 0 0 1 2.39 5.79c0 4.5-3.67 8.17-8.16 8.17Zm4.48-6.12c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.12-.17.25-.65.8-.8.96-.15.17-.3.19-.55.07-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.53.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.67-1.17.21-.58.21-1.07.15-1.17-.07-.1-.23-.15-.48-.28Z" />
      </svg>
    </Link>
  )
}
