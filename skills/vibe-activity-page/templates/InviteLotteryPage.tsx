import { useMemo, useState } from "react";

type RewardItem = {
  id: string;
  label: string;
  value: string;
};

type InviteLotteryConfig = {
  title: string;
  subtitle: string;
  coinBalance: number;
  cashoutThreshold: number;
  inviteCount: number;
  nextInviteReward: string;
  chances: number;
  rewards: RewardItem[];
  primaryCta: string;
  secondaryActions: string[];
};

const config: InviteLotteryConfig = {
  title: "邀请好友抽好礼",
  subtitle: "好友助力越多，抽中金币奖励机会越高",
  coinBalance: 68000,
  cashoutThreshold: 100000,
  inviteCount: 3,
  nextInviteReward: "+1 次抽奖机会",
  chances: 2,
  rewards: [
    { id: "coins-1", label: "金币", value: "888" },
    { id: "cash-1", label: "现金", value: "¥1" },
    { id: "coins-2", label: "金币", value: "1888" },
    { id: "thanks", label: "鼓励奖", value: "再来" },
    { id: "coins-3", label: "金币", value: "5888" },
    { id: "cash-2", label: "现金", value: "¥5" },
  ],
  primaryCta: "立即邀请",
  secondaryActions: ["我的奖励", "活动规则", "去提现"],
};

export function InviteLotteryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const progress = Math.min(config.coinBalance / config.cashoutThreshold, 1);

  const gapText = useMemo(() => {
    const gap = Math.max(config.cashoutThreshold - config.coinBalance, 0);
    return gap === 0 ? "已达到提现门槛" : `还差 ${gap.toLocaleString()} 金币可提现`;
  }, []);

  const draw = () => {
    if (config.chances <= 0) return;
    setActiveIndex(Math.floor(Math.random() * config.rewards.length));
  };

  return (
    <main className="min-h-screen bg-[#fff3d1] text-[#321607]">
      <div className="mx-auto min-h-screen max-w-[430px] px-4 pb-[calc(96px+env(safe-area-inset-bottom))] pt-5">
        <header className="space-y-2">
          <p className="w-fit rounded-full bg-[#fe2c55] px-3 py-1 text-xs font-bold text-white">
            邀请得机会
          </p>
          <h1 className="text-[32px] font-black leading-[1.08]">{config.title}</h1>
          <p className="text-sm font-medium text-[#7a3b15]">{config.subtitle}</p>
        </header>

        <section className="mt-5 rounded-[20px] bg-white p-4 shadow-[0_12px_28px_rgba(156,70,12,0.18)]">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-[#9b5a16]">当前金币</p>
              <strong className="text-[36px] font-black leading-none">
                {config.coinBalance.toLocaleString()}
              </strong>
            </div>
            <span className="rounded-full bg-[#fff0c2] px-3 py-1 text-xs font-bold text-[#a65300]">
              满 {config.cashoutThreshold.toLocaleString()} 可提现
            </span>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#f4dfaa]">
            <div className="h-full rounded-full bg-[#fe2c55]" style={{ width: `${progress * 100}%` }} />
          </div>
          <p className="mt-2 text-sm font-bold text-[#fe2c55]">{gapText}</p>
        </section>

        <section className="mt-5 rounded-[20px] bg-[#321607] p-3 text-white">
          <div className="mb-3 flex items-center justify-between px-1">
            <h2 className="text-xl font-black">幸运 6 格抽奖</h2>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
              剩余 {config.chances} 次
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {config.rewards.map((reward, index) => (
              <button
                key={reward.id}
                type="button"
                className={[
                  "aspect-square rounded-2xl border-2 p-2 text-center transition",
                  activeIndex === index
                    ? "border-[#fe2c55] bg-[#ffe66d] text-[#321607]"
                    : "border-white/10 bg-white text-[#321607]",
                ].join(" ")}
                onClick={() => setActiveIndex(index)}
              >
                <span className="block text-xs font-bold text-[#9b5a16]">{reward.label}</span>
                <strong className="mt-1 block text-lg font-black">{reward.value}</strong>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-3 h-12 w-full rounded-2xl bg-[#fe2c55] text-base font-black text-white disabled:bg-white/25"
            disabled={config.chances <= 0}
            onClick={draw}
          >
            {config.chances > 0 ? "立即抽奖" : "邀请好友得机会"}
          </button>
        </section>

        <section className="mt-5 rounded-[20px] bg-white p-4">
          <h2 className="text-lg font-black">邀请进度</h2>
          <div className="mt-3 flex items-center justify-between rounded-2xl bg-[#fff7df] p-3">
            <div>
              <p className="text-sm font-bold">已邀请 {config.inviteCount} 位好友</p>
              <p className="mt-1 text-xs font-medium text-[#8b5a24]">再邀请 1 位可获得 {config.nextInviteReward}</p>
            </div>
            <button type="button" className="h-10 rounded-xl bg-[#321607] px-4 text-sm font-black text-white">
              去邀请
            </button>
          </div>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 mx-auto max-w-[430px] bg-white/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-[1fr_1fr_1.45fr] gap-2">
          {config.secondaryActions.slice(0, 2).map((action) => (
            <button key={action} type="button" className="h-12 rounded-2xl bg-[#fff0c2] text-sm font-black text-[#7a3b15]">
              {action}
            </button>
          ))}
          <button type="button" className="h-12 rounded-2xl bg-[#fe2c55] text-base font-black text-white">
            {config.primaryCta}
          </button>
        </div>
      </nav>
    </main>
  );
}

