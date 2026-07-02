export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919446090003"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 rounded-full p-4 bg-secondary/10 backdrop-blur-md border border-secondary/20 shadow-[0px_4px_20px_rgba(119,90,25,0.15)] z-50 hover:scale-110 hover:brightness-110 transition-all duration-300 active:scale-95 flex items-center gap-3 group"
    >
      <div className="bg-secondary text-on-secondary w-10 h-10 rounded-full flex items-center justify-center">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          chat
        </span>
      </div>
      <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out flex flex-col pr-2">
        <span className="font-label-md text-[10px] text-secondary uppercase tracking-widest leading-tight whitespace-nowrap">
          Instant Support
        </span>
        <span className="font-label-md text-[12px] text-on-surface font-bold whitespace-nowrap">
          WhatsApp Us
        </span>
      </div>
    </a>
  );
}
