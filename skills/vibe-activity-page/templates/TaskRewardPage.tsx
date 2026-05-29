type TaskStatus = "locked" | "available" | "progress" | "completed" | "claimed";

type RewardTask = {
  id: string;
  title: string;
  description: string;
  reward: string;
  status: TaskStatus;
  actionLabel: string;
};

const tasks: RewardTask[] = [
  {
    id: "daily-checkin",
    title: "今日签到",
    description: "连续签到可提升奖励",
    reward: "+800 金币",
    status: "available",
    actionLabel: "签到",
  },
  {
    id: "invite",
    title: "邀请好友参与",
    description: "好友完成首次浏览后生效",
    reward: "+12000 金币",
    status: "progress",
    actionLabel: "继续",
  },
  {
    id: "browse",
    title: "浏览精选活动",
    description: "停留 30 秒即可领取",
    reward: "+3000 金币",
    status: "completed",
    actionLabel: "领取",
  },
  {
    id: "bonus",
    title: "解锁加码奖励",
    description: "完成 3 个任务后开放",
    reward: "+20000 金币",
    status: "locked",
    actionLabel: "未解锁",
  },
];

const statusLabel: Record<TaskStatus, string> = {
  locked: "待解锁",
  available: "可完成",
  progress: "进行中",
  completed: "可领取",
  claimed: "已领取",
};

export function TaskRewardPage() {
  const completedCount = tasks.filter((task) => ["completed", "claimed"].includes(task.status)).length;

  return (
    <main className="min-h-screen bg-[#f5f7ff] text-[#14161a]">
      <div className="mx-auto min-h-screen max-w-[430px] px-4 pb-[calc(96px+env(safe-area-inset-bottom))] pt-5">
        <header className="rounded-[20px] bg-[#14161a] p-5 text-white">
          <p className="w-fit rounded-full bg-[#25f4ee] px-3 py-1 text-xs font-black text-[#14161a]">
            每日任务
          </p>
          <h1 className="mt-3 text-[30px] font-black leading-[1.1]">做任务领金币</h1>
          <p className="mt-2 text-sm font-medium text-white/72">完成更多任务，解锁更高奖励</p>
          <div className="mt-5 rounded-2xl bg-white/10 p-3">
            <div className="flex items-end justify-between">
              <span className="text-sm font-bold">今日进度</span>
              <strong className="text-2xl font-black">
                {completedCount}/{tasks.length}
              </strong>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/16">
              <div className="h-full rounded-full bg-[#25f4ee]" style={{ width: `${(completedCount / tasks.length) * 100}%` }} />
            </div>
          </div>
        </header>

        <section className="mt-5">
          <h2 className="text-xl font-black">任务列表</h2>
          <div className="mt-3 space-y-2">
            {tasks.map((task) => {
              const disabled = task.status === "locked" || task.status === "claimed";
              return (
                <article key={task.id} className="rounded-[18px] bg-white p-4 shadow-[0_8px_22px_rgba(28,35,54,0.08)]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-black">{task.title}</h3>
                        <span className="rounded-full bg-[#eef1f8] px-2 py-1 text-[11px] font-bold text-[#5f6675]">
                          {statusLabel[task.status]}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-medium text-[#6b7280]">{task.description}</p>
                      <p className="mt-2 text-sm font-black text-[#fe2c55]">{task.reward}</p>
                    </div>
                    <button
                      type="button"
                      className="h-10 min-w-[76px] rounded-xl bg-[#14161a] px-3 text-sm font-black text-white disabled:bg-[#d9dde7] disabled:text-[#7d8492]"
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

        <section className="mt-5 rounded-[20px] bg-white p-4">
          <h2 className="text-lg font-black">累计奖励</h2>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["第 1 个", "第 3 个", "第 4 个"].map((label, index) => (
              <div key={label} className="rounded-2xl bg-[#fff0f4] p-3 text-center">
                <p className="text-xs font-bold text-[#7d4656]">{label}</p>
                <strong className="mt-1 block text-base font-black text-[#fe2c55]">
                  +{[1000, 8000, 20000][index]}
                </strong>
              </div>
            ))}
          </div>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 mx-auto max-w-[430px] bg-white/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)]">
        <button type="button" className="h-12 w-full rounded-2xl bg-[#fe2c55] text-base font-black text-white">
          继续完成任务
        </button>
      </nav>
    </main>
  );
}

