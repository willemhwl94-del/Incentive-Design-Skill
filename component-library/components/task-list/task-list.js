(function () {
  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function mediumIcon(config, className = "medium-icon") {
    if (!config.mediumIconImage) return "";
    return `<img class="${className}" src="${escapeHtml(config.mediumIconImage)}" alt="" />`;
  }

  function taskMain(task, config) {
    const status = task.status || "available";
    const disabled = status !== "available";
    const label = status === "claimed" ? "Done" : task.actionLabel;
    const reward = task.rewardText ?? task.rewardAmount;

    return `
      <div class="task-row__main">
        <div class="task-row__text">
          <h3>${escapeHtml(task.title)}</h3>
          ${reward ? `<p class="task-row__reward">${mediumIcon(config)}${escapeHtml(reward)}</p>` : ""}
        </div>
        <button class="task-button" type="button" data-task-id="${escapeHtml(task.id)}" ${disabled ? "disabled" : ""}>${escapeHtml(label)}</button>
      </div>
    `;
  }

  function progress(task, config) {
    const progressPercent = Math.max(0, Math.min(1, task.progress || 0)) * 33;
    const steps = task.steps || [];

    return `
      <div class="task-progress">
        <div class="task-progress__track" aria-hidden="true">
          <span style="width: ${progressPercent}%"></span>
        </div>
        ${steps.map((step) => `
          <div class="task-progress__step ${step.reached ? "is-reached" : ""}">
            <span class="task-progress__pill">${mediumIcon(config, "medium-icon medium-icon--small")}${escapeHtml(step.reward)}</span>
            <span class="task-progress__node"></span>
            <span class="task-progress__label">${escapeHtml(step.label)}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  function inviteBenefit(task, config) {
    const rewards = task.inviteRewards || [];

    return `
      <div class="invite-benefit">
        ${rewards.map((item) => `
          <div class="invite-benefit__side">
            ${item.avatarImage
              ? `<img class="invite-benefit__avatar" src="${escapeHtml(item.avatarImage)}" alt="" />`
              : `<span class="invite-benefit__avatar invite-benefit__avatar--${escapeHtml(item.avatar || "self")}"></span>`}
            <span>
              <strong>${escapeHtml(item.label)}</strong>
              <em>${mediumIcon(config, "medium-icon medium-icon--small")}${escapeHtml(item.value)}</em>
            </span>
          </div>
        `).join('<span class="invite-benefit__divider"></span>')}
      </div>
    `;
  }

  function row(task, config) {
    const rowClass = task.type === "progress"
      ? "task-row task-row--progress"
      : task.type === "invite"
        ? "task-row task-row--invite"
        : "task-row task-row--simple";

    if (task.type === "progress") {
      return `
        <article class="${rowClass}">
          ${taskMain(task, config)}
          ${progress(task, config)}
        </article>
      `;
    }

    if (task.type === "invite") {
      return `
        <article class="${rowClass}">
          ${taskMain(task, config)}
          ${inviteBenefit(task, config)}
        </article>
      `;
    }

    return `
      <article class="${rowClass}">
        ${taskMain(task, config)}
        <p class="task-row__desc">${escapeHtml(task.description)}</p>
      </article>
    `;
  }

  function template(config) {
    const title = config.title || "Daily Task";
    const subtitle = config.subtitle || "Updated everyday 24:00";
    const tasks = config.tasks || [];

    return `
      <section class="tasks" aria-label="${escapeHtml(config.ariaLabel || title)}">
        <div class="task-list-title">
          <div class="task-list-title__copy">
            <h2>${escapeHtml(title)}</h2>
            <p>${escapeHtml(subtitle)}</p>
          </div>
          <div class="task-list-icon" aria-hidden="true">
            ${config.headerIconImage
              ? `<img class="task-list-icon__medium" src="${escapeHtml(config.headerIconImage)}" alt="" />`
              : mediumIcon(config, "task-list-icon__medium")}
          </div>
        </div>
        <div class="task-list-body">${tasks.map((task) => row(task, config)).join("")}</div>
      </section>
    `;
  }

  class IncentiveTaskListElement extends HTMLElement {
    connectedCallback() {
      if (!this._config) this._config = {};
      this.render();
    }

    set config(value) {
      this._config = value || {};
      if (this.isConnected) this.render();
    }

    get config() {
      return this._config || {};
    }

    render() {
      this.innerHTML = template(this.config);
      this.querySelectorAll("[data-task-id]").forEach((button) => {
        button.addEventListener("click", () => {
          this.dispatchEvent(new CustomEvent("task-list-action", {
            bubbles: true,
            detail: { taskId: button.getAttribute("data-task-id") }
          }));
        });
      });
    }
  }

  window.IncentiveTaskList = { template };

  if (!customElements.get("incentive-task-list")) {
    customElements.define("incentive-task-list", IncentiveTaskListElement);
  }
})();
