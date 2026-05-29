(function () {
  const variants = {
    "two-dark": {
      nodeId: "331:13611",
      height: 91,
      statusTime: "8:00",
      actions: ["Music", "Question"]
    },
    "two-light": {
      nodeId: "331:13637",
      height: 91,
      statusTime: "8:00",
      actions: ["Music", "Question"]
    },
    "three-dark": {
      nodeId: "331:13612",
      height: 96,
      statusTime: "13:13",
      actions: ["Music", "Share", "More"]
    },
    "one-dark": {
      nodeId: "404:13177",
      height: 96,
      statusTime: "13:13",
      actions: ["More"]
    }
  };

  function iconSvg(action) {
    if (action === "Music") {
      return `
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path fill="currentColor" fill-opacity="0.8" d="M17.7087 1.917L17.708 14.3331C17.708 15.9439 16.4022 17.2498 14.7914 17.2498C13.1806 17.2498 11.8747 15.9439 11.8747 14.3331C11.8747 12.7223 13.1806 11.4164 14.7914 11.4164H16.292V4.099L8.1253 5.1615L8.1247 15.5831C8.1247 17.1939 6.8189 18.4998 5.208 18.4998C3.5972 18.4998 2.2914 17.1939 2.2914 15.5831C2.2914 13.9723 3.5972 12.6664 5.208 12.6664H6.7087V3.2431C6.7087 3.0338 6.8639 2.857 7.0714 2.8299L17.2381 1.5038C17.4876 1.4713 17.7087 1.6655 17.7087 1.917Z"/>
        </svg>
      `;
    }

    if (action === "Share") {
      return `
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path fill="currentColor" d="M11.72 3.22a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H9.25A4.25 4.25 0 0 0 5 12.75V16a.75.75 0 0 1-1.5 0v-3.25A5.75 5.75 0 0 1 9.25 7h5.19l-2.72-2.72a.75.75 0 0 1 0-1.06Z"/>
        </svg>
      `;
    }

    if (action === "Question") {
      return `
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path fill="currentColor" d="M9.93 2.8c-2.2 0-3.86 1.2-4.22 3.04a.78.78 0 0 0 .62.92l.68.12a.77.77 0 0 0 .87-.55c.2-.76.86-1.45 1.98-1.45 1.23 0 2.02.72 2.02 1.76 0 .84-.42 1.36-1.52 2.06-1.32.84-1.86 1.66-1.8 3.06l.02.38h2.13v-.3c0-.84.33-1.26 1.48-1.98 1.3-.82 2.23-1.74 2.23-3.32 0-2.2-1.76-3.74-4.49-3.74Zm-.28 10.62c-.84 0-1.46.58-1.46 1.4 0 .8.62 1.38 1.46 1.38.86 0 1.48-.58 1.48-1.38 0-.82-.62-1.4-1.48-1.4Z"/>
        </svg>
      `;
    }

    return "";
  }

  function systemIcons() {
    return `
      <div class="ip-top-navigation__system-icons" aria-hidden="true">
        <div class="ip-top-navigation__cellular"><span></span><span></span><span></span><span></span></div>
        <div class="ip-top-navigation__wifi">
          <svg viewBox="0 0 18 13">
            <path d="M1.4 4.9C5.4 1.7 12.6 1.7 16.6 4.9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M4.5 7.7c2.4-1.8 6.6-1.8 9 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M7.4 10.4c.9-.7 2.3-.7 3.2 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="ip-top-navigation__battery">
          <span class="ip-top-navigation__battery-body"></span>
          <span class="ip-top-navigation__battery-fill"></span>
          <span class="ip-top-navigation__battery-cap"></span>
        </div>
      </div>
    `;
  }

  function actionButton(action) {
    if (action === "More") {
      return `<button class="ip-top-navigation__more" type="button" data-top-nav-action="More">More</button>`;
    }

    return `
      <button class="ip-top-navigation__button" type="button" data-top-nav-action="${action}" aria-label="${action}">
        <span class="ip-top-navigation__icon">${iconSvg(action)}</span>
      </button>
    `;
  }

  function template(config) {
    const variant = variants[config.variant] || variants["two-dark"];
    const actions = config.actions || variant.actions;

    return `
      <div class="ip-top-navigation" data-variant="${config.variant}" data-node-id="${variant.nodeId}" data-name="${config.name}">
        <div class="ip-top-navigation__status">
          <div class="ip-top-navigation__time">${config.statusTime || variant.statusTime}</div>
          ${systemIcons()}
        </div>
        <div class="ip-top-navigation__row" data-name="NAV BAR MOCK">
          <button class="ip-top-navigation__button ip-top-navigation__back" type="button" data-top-nav-back aria-label="Back">
            <span class="ip-top-navigation__icon">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path fill="currentColor" d="M12.7 3.3a1 1 0 0 1 0 1.4L7.4 10l5.3 5.3a1 1 0 1 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0Z"/>
              </svg>
            </span>
          </button>
          <div class="ip-top-navigation__actions">${actions.map(actionButton).join("")}</div>
          <div class="ip-top-navigation__title-area">${config.title ? `<div class="ip-top-navigation__title">${config.title}</div>` : ""}</div>
        </div>
      </div>
    `;
  }

  class IncentiveTopNavigationElement extends HTMLElement {
    static get observedAttributes() {
      return ["variant", "title", "actions", "status-time"];
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback() {
      if (this.isConnected) this.render();
    }

    get config() {
      const variant = this.getAttribute("variant") || "two-dark";
      return {
        variant,
        name: variants[variant]?.nodeId || "TopNavigation",
        title: this.getAttribute("title") || "",
        statusTime: this.getAttribute("status-time") || "",
        actions: this.getAttribute("actions")
          ? this.getAttribute("actions").split(",").map((item) => item.trim()).filter(Boolean)
          : null
      };
    }

    render() {
      this.innerHTML = template(this.config);
      this.querySelector("[data-top-nav-back]")?.addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("top-navigation-back", { bubbles: true }));
      });
      this.querySelectorAll("[data-top-nav-action]").forEach((button) => {
        button.addEventListener("click", () => {
          this.dispatchEvent(
            new CustomEvent("top-navigation-action", {
              bubbles: true,
              detail: { action: button.getAttribute("data-top-nav-action") }
            })
          );
        });
      });
    }
  }

  if (!customElements.get("incentive-top-navigation")) {
    customElements.define("incentive-top-navigation", IncentiveTopNavigationElement);
  }
})();
