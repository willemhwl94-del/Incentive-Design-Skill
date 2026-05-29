import { useMemo, useState } from "react";

type NurtureTaskStatus = "available" | "completed" | "claimed" | "locked";

type NurtureTask = {
  id: string;
  title: string;
  description: string;
  reward: number;
  status: NurtureTaskStatus;
  actionLabel: string;
};

type Milestone = {
  id: string;
  label: string;
  target: number;
  reward: string;
};

const pageConfig = {
  title: "Daily Companion Savings",
  subtitle: "Grow together a little every day",
  companionName: "Momo",
  rewardUnit: "Stars",
  initialProgress: 42,
  dailyGain: 8,
  maxProgress: 100,
  primaryAction: "Feed Today",
  completedAction: "Come Back Tomorrow",
  nextReturnCopy: "Next nurture window opens tomorrow",
  tasks: [
    {
      id: "check-in",
      title: "Check in",
      description: "Start today's ritual",
      reward: 3,
      status: "available",
      actionLabel: "Do",
    },
    {
      id: "watch",
      title: "Visit featured content",
      description: "Spend a short moment with today's pick",
      reward: 5,
      status: "available",
      actionLabel: "Go",
    },
    {
      id: "gift",
      title: "Send a gentle cheer",
      description: "Optional co-nurture action",
      reward: 4,
      status: "locked",
      actionLabel: "Locked",
    },
  ] satisfies NurtureTask[],
  milestones: [
    { id: "d1", label: "Today", target: 25, reward: "Small star pack" },
    { id: "d3", label: "Day 3", target: 55, reward: "Companion badge" },
    { id: "d7", label: "Day 7", target: 100, reward: "Ceremony gift" },
  ] satisfies Milestone[],
};

function clampProgress(value: number) {
  return Math.max(0, Math.min(pageConfig.maxProgress, value));
}

export function NurtureProgressPage() {
  const [progress, setProgress] = useState(pageConfig.initialProgress);
  const [hasNurturedToday, setHasNurturedToday] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const nextMilestone = useMemo(
    () => pageConfig.milestones.find((item) => progress < item.target) ?? pageConfig.milestones.at(-1),
    [progress],
  );

  const progressPercent = clampProgress(progress);

  function handleNurture() {
    if (hasNurturedToday) {
      setFeedback(pageConfig.nextReturnCopy);
      return;
    }

    const nextProgress = clampProgress(progress + pageConfig.dailyGain);
    setProgress(nextProgress);
    setHasNurturedToday(true);
    setFeedback(`+${pageConfig.dailyGain} ${pageConfig.rewardUnit}. ${pageConfig.companionName} is growing.`);
  }

  return (
    <main className="min-h-screen bg-[#f8f4ff] text-[#16131f]">
      <div className="mx-auto min-h-screen max-w-[430px] px-4 pb-[calc(104px+env(safe-area-inset-bottom))] pt-5">
        <header className="rounded-[24px] bg-white p-5 shadow-[0_12px_28px_rgba(54,38,84,0.10)]">
          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#7d5ab8]">Daily ritual</p>
          <h1 className="mt-2 text-[30px] font-black leading-[1.08]">{pageConfig.title}</h1>
          <p className="mt-2 text-sm font-semibold text-[#645b73]">{pageConfig.subtitle}</p>
        </header>

        <section className="mt-4 rounded-[22px] bg-white p-4 shadow-[0_10px_24px_rgba(54,38,84,0.08)]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-[#7a7284]">Current growth</p>
              <strong className="mt-1 block text-3xl font-black">{progressPercent}%</strong>
            </div>
            <div className="rounded-2xl bg-[#fff4cf] px-3 py-2 text-right">
              <p className="text-[11px] font-bold text-[#8a6515]">Next milestone</p>
              <p className="text-sm font-black text-[#3a2a05]">{nextMilestone?.label}</p>
            </div>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#eee9f6]">
            <div className="h-full rounded-full bg-[#8f6cff]" style={{ width: `${progressPercent}%` }} />
          </div>
          <p className="mt-2 text-xs font-semibold text-[#746b82]">
            {nextMilestone ? `${Math.max(0, nextMilestone.target - progressPercent)}% to ${nextMilestone.reward}` : "All milestones completed"}
          </p>
        </section>

        <section className="mt-4 rounded-[28px] bg-[#efe7ff] p-5 text-center">
          <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-white shadow-[inset_0_-12px_24px_rgba(93,65,150,0.12),0_18px_32px_rgba(70,42,122,0.18)]">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#ffd9ec] text-5xl font-black text-[#7b3d68]">
              {pageConfig.companionName.slice(0, 1)}
            </div>
          </div>
          <h2 className="mt-4 text-xl font-black">Care for {pageConfig.companionName}</h2>
          <p className="mt-1 text-sm font-semibold text-[#625873]">One small action keeps today's progress alive.</p>
          <button
            type="button"
            onClick={handleNurture}
            className="mt-4 h-12 w-full rounded-2xl bg-[#16131f] text-base font-black text-white"
          >
            {hasNurturedToday ? pageConfig.completedAction : pageConfig.primaryAction}
          </button>
          {feedback ? <p className="mt-3 text-sm font-bold text-[#6f4fc6]">{feedback}</p> : null}
        </section>

        <section className="mt-4">
          <h2 className="text-lg font-black">Small Daily Rituals</h2>
          <div className="mt-3 space-y-2">
            {pageConfig.tasks.map((task) => {
              const disabled = task.status === "locked" || task.status === "claimed";
              return (
                <article key={task.id} className="rounded-[18px] bg-white p-4 shadow-[0_8px_20px_rgba(54,38,84,0.07)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-black">{task.title}</h3>
                      <p className="mt-1 text-xs font-semibold text-[#6b6378]">{task.description}</p>
                      <p className="mt-1 text-xs font-black text-[#8f6cff]">+{task.reward} {pageConfig.rewardUnit}</p>
                    </div>
                    <button
                      type="button"
                      className="h-10 min-w-[72px] rounded-xl bg-[#efe7ff] px-3 text-sm font-black text-[#5c3db0] disabled:bg-[#eceaf0] disabled:text-[#9a94a7]"
                      disabled={disabled}
                    >
                      {task.actionLabel}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-4 rounded-[22px] bg-white p-4">
          <h2 className="text-lg font-black">Milestone Path</h2>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {pageConfig.milestones.map((milestone) => {
              const reached = progressPercent >= milestone.target;
              return (
                <div key={milestone.id} className={reached ? "rounded-2xl bg-[#e9fff5] p-3" : "rounded-2xl bg-[#f5f2fa] p-3"}>
                  <p className="text-xs font-black">{milestone.label}</p>
                  <p className="mt-1 text-[11px] font-semibold text-[#746b82]">{milestone.reward}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 mx-auto max-w-[430px] bg-white/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)]">
        <button type="button" onClick={handleNurture} className="h-12 w-full rounded-2xl bg-[#fe2c55] text-base font-black text-white">
          {hasNurturedToday ? pageConfig.completedAction : pageConfig.primaryAction}
        </button>
      </nav>
    </main>
  );
}
