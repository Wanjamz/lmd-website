import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/254723539332" 
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} color="white" />
    </a>
  );
}
