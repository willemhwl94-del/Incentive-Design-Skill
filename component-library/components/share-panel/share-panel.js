(function () {
  const defaultConfig = {
    assetBasePath: "./assets/share-panel",
    guideImage: "image-placeholder.png",
    shareUrl: window.location.href,
    instructions: [
      "Sharing the link to your friends who haven't download tiktok lite.",
      "Your friends open TikTok with the link, register and check-in.",
      "Check your reward",
    ],
    disclaimer: "* This gameplay is available for users above 18 years old",
    title: "Sent to",
    channels: [
      ["WhatsApp", "channel-whatsapp.svg", "externalShare"],
      ["Copy link", "channel-copy-link.svg", "copyLink"],
      ["Facebook", "channel-facebook.svg", "externalShare"],
      ["WhatsApp status", "channel-whatsapp.svg", "externalShare", "share-channel--double"],
      ["Instagram", "channel-instagram.svg", "externalShare"],
      ["Snapchat", "channel-snapchat.svg", "externalShare"],
      ["More", "channel-more.svg", "more"],
    ],
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function renderSharePanel(config) {
    const guideImageSrc = config.guideImageUrl || `${config.assetBasePath}/${escapeHtml(config.guideImage)}`;
    const steps = config.instructions
      .map(
        (text, index) => `
          <div class="share-step">
            <span class="share-step__number">${index + 1}</span>
            <span class="share-step__copy">${escapeHtml(text)}</span>
          </div>
        `
      )
      .join("");

    const channels = config.channels
      .map(([label, icon, action, extraClass = ""]) => {
        const className = ["share-channel", extraClass].filter(Boolean).join(" ");
        return `
          <button class="${className}" type="button" data-share-action="${escapeHtml(action)}">
            <img class="share-channel__icon" src="${config.assetBasePath}/${escapeHtml(icon)}" alt="" aria-hidden="true" />
            <span>${escapeHtml(label)}</span>
          </button>
        `;
      })
      .join("");

    return `
      <section class="share-panel" role="dialog" aria-modal="true" aria-labelledby="${config.titleId}" hidden>
        <button class="share-panel__scrim" type="button" aria-label="Close share panel"></button>

        <section class="share-instructions" aria-label="Share instructions">
          <div class="share-instructions__image">
            <img src="${guideImageSrc}" alt="" aria-hidden="true" />
          </div>
          <div class="share-instructions__steps">
            <span class="share-instructions__connector" aria-hidden="true"></span>
            ${steps}
          </div>
          <div class="share-instructions__divider" aria-hidden="true"></div>
          <p class="share-instructions__disclaimer">${escapeHtml(config.disclaimer)}</p>
        </section>

        <section class="share-sheet" aria-labelledby="${config.titleId}">
          <div class="share-sheet__titlebar">
            <h2 id="${config.titleId}">${escapeHtml(config.title)}</h2>
            <button class="share-sheet__close" type="button" aria-label="Close share panel">×</button>
          </div>
          <div class="share-sheet__channels" aria-label="Share channels">
            ${channels}
          </div>
          <div class="share-sheet__homebar" aria-hidden="true"></div>
        </section>

        <div class="share-toast" role="status" aria-live="polite"></div>
      </section>
    `;
  }

  function createSharePanel(options = {}) {
    const titleId = options.titleId || `sharePanelTitle-${Math.random().toString(36).slice(2)}`;
    const config = {
      ...defaultConfig,
      ...options,
      // share-sheet is a locked component area: projects may not override
      // the sheet title, channel list, channel order, labels, or icons.
      title: defaultConfig.title,
      channels: defaultConfig.channels,
      titleId,
    };
    const mount = options.mount || document.body;
    const template = document.createElement("template");
    template.innerHTML = renderSharePanel(config).trim();

    const panel = template.content.firstElementChild;
    const scrim = panel.querySelector(".share-panel__scrim");
    const closeButton = panel.querySelector(".share-sheet__close");
    const toast = panel.querySelector(".share-toast");
    const channels = panel.querySelectorAll(".share-channel");
    let toastTimer;

    function open() {
      panel.hidden = false;
      requestAnimationFrame(() => {
        panel.classList.add("is-open");
      });
    }

    function close() {
      panel.classList.remove("is-open");
      window.setTimeout(() => {
        if (!panel.classList.contains("is-open")) {
          panel.hidden = true;
        }
      }, 240);
    }

    function showToast(message) {
      window.clearTimeout(toastTimer);
      toast.textContent = message;
      toast.classList.add("is-visible");
      toastTimer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
      }, 1400);
    }

    async function handleShareAction(button) {
      const action = button.dataset.shareAction;
      const label = button.textContent.trim();
      if (typeof config.onShareAction === "function") {
        const result = await config.onShareAction({ action, label, button, panel });
        if (result === false) return;
      }

      if (action === "copyLink") {
        try {
          await navigator.clipboard.writeText(config.shareUrl);
          showToast("Link copied");
        } catch {
          showToast("Couldn't copy link. Try again.");
        }
        return;
      }

      if (action === "more") {
        showToast("More options");
        return;
      }

      showToast("Shared");
    }

    function handleKeydown(event) {
      if (event.key === "Escape" && !panel.hidden) {
        close();
      }
    }

    scrim.addEventListener("click", close);
    closeButton.addEventListener("click", close);
    channels.forEach((button) => {
      button.addEventListener("click", () => handleShareAction(button));
    });
    document.addEventListener("keydown", handleKeydown);
    mount.append(panel);

    return {
      element: panel,
      open,
      close,
      destroy() {
        document.removeEventListener("keydown", handleKeydown);
        panel.remove();
      },
    };
  }

  window.createSharePanel = createSharePanel;
})();
