document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     1. ANIMAÇÃO LEVE DE ENTRADA
     ========================= */

  const header = document.querySelector(".header");
  const container = document.querySelector(".container");

  // Estado inicial
  if (header) {
    header.style.opacity = "0";
    header.style.transform = "translateY(-20px)";
  }

  if (container) {
    container.style.opacity = "0";
    container.style.transform = "translateY(20px)";
  }

  // Animação do header
  setTimeout(() => {
    if (header) {
      header.style.transition = "all 0.6s ease";
      header.style.opacity = "1";
      header.style.transform = "translateY(0)";
    }
  }, 100);

  // Animação do conteúdo
  setTimeout(() => {
    if (container) {
      container.style.transition = "all 0.6s ease";
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    }
  }, 300);

  /* =========================
     2. FEEDBACK DE CLIQUE
     ========================= */

  const btnWhatsapp = document.querySelector(".btn-whatsapp");

  if (btnWhatsapp) {
    btnWhatsapp.addEventListener("click", () => {
      btnWhatsapp.innerHTML =
        '<i class="fa-brands fa-whatsapp"></i> Abrindo WhatsApp...';
    });

    /* =========================
       3. RASTREAMENTO DE CONVERSÃO
       ========================= */

    btnWhatsapp.addEventListener("click", () => {
      console.log("Conversão registrada: Clique no WhatsApp");

      // FUTURO (quando quiser ativar):
      // gtag('event', 'whatsapp_click', { event_category: 'contato' });
      // fbq('track', 'Contact');
    });
  }
});