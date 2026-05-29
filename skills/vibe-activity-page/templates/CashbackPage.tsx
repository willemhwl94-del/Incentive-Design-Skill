type CashoutTask = {
  id: string;
  title: string;
  reward: string;
  status: "available" | "completed" | "claimed";
  actionLabel: string;
};

type CashbackConfig = {
  title: string;
  subtitle: string;
  balance: number;
  threshold: number;
  cashValue: string;
  tasks: CashoutTask[];
};

const config: CashbackConfig = {
  title: "金币满额免费提现",
  subtitle: "完成任务攒金币，达到门槛即可发起提现",
  balance: 76000,
  threshold: 100000,
  cashValue: "¥7.60",
  tasks: [
    { id: "invite", title: "邀请 1 位好友", reward: "+12000 金币", status: "available", actionLabel: "去邀请" },
    { id: "watch", title: "浏览活动 30 秒", reward: "+3000 金币", status: "completed", actionLabel: "领取" },
    { id: "share", title: "分享活动页", reward: "+5000 金币", status: "claimed", actionLabel: "已领取" },
  ],
};

export function CashbackPage() {
  const progress = Math.min(config.balance / config.threshold, 1);
  const remaining = Math.max(config.threshold - config.balance, 0);
  const canWithdraw = remaining === 0;

  return (
    <main className="min-h-screen bg-[#101114] text-white">
      <div className="mx-auto min-h-screen max-w-[430px] px-4 pb-[calc(96px+env(safe-area-inset-bottom))] pt-5">
        <header>
          <p className="w-fit rounded-full bg-[#25f4ee] px-3 py-1 text-xs font-black text-[#101114]">
            提现进度
          </p>
          <h1 className="mt-3 text-[32px] font-black leading-[1.08]">{config.title}</h1>
          <p className="mt-2 text-sm font-medium text-white/72">{config.subtitle}</p>
        </header>

        <section className="mt-5 rounded-[20px] bg-white p-5 text-[#101114] shadow-[0_16px_36px_rgba(37,244,238,0.16)]">
          <p className="text-xs font-bold text-[#5f666d]">当前可兑现金</p>
          <strong className="mt-1 block text-[44px] font-black leading-none">{config.cashValue}</strong>
          <div className="mt-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-[#5f666d]">金币余额</p>
              <p className="text-lg font-black">{config.balance.toLocaleString()}</p>
            </div>
            <p className="text-xs font-bold text-[#fe2c55]">
              {canWithdraw ? "已满足提现条件" : `还差 ${remaining.toLocaleString()} 金币`}
            </p>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#e7e9ee]">
            <div className="h-full rounded-full bg-[#fe2c55]" style={{ width: `${progress * 100}%` }} />
          </div>
          <p className="mt-3 text-xs font-medium text-[#5f666d]">
            满 {config.threshold.toLocaleString()} 金币可提现，到账时间以活动规则为准
          </p>
        </section>

        <section className="mt-5">
          <h2 className="text-xl font-black">继续赚金币</h2>
          <div className="mt-3 space-y-2">
            {config.tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-3">
                <div>
                  <p className="text-sm font-bold">{task.title}</p>
                  <p className="mt-1 text-xs font-bold text-[#25f4ee]">{task.reward}</p>
                </div>
                <button
                  type="button"
                  className="h-10 min-w-[76px] rounded-xl bg-white px-3 text-sm font-black text-[#101114] disabled:bg-white/20 disabled:text-white/45"
                  disabled={task.status === "claimed"}
                >
                  {task.actionLabel}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-[20px] bg-white/10 p-4">
          <h2 className="text-lg font-black">提现说明</h2>
          <p className="mt-2 text-sm leading-6 text-white/72">
            达到提现门槛后可发起申请，奖励状态会根据审核和到账结果更新。
          </p>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 mx-auto max-w-[430px] bg-[#101114]/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.28)]">
        <button type="button" className="h-12 w-full rounded-2xl bg-[#fe2c55] text-base font-black text-white">
          {canWithdraw ? "马上提现" : "继续赚金币"}
        </button>
      </nav>
    </main>
  );
}

