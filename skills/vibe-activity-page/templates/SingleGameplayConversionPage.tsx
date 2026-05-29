import { type ReactNode, useEffect, useState } from "react";

type GameplayKind =
  | "spin-wheel"
  | "soccer-shoot"
  | "scratch-card"
  | "slot-machine"
  | "blind-box"
  | "treasure-chest"
  | "gacha"
  | "jackpot";

type SingleGameplayConfig = {
  title: string;
  titleAssetUrl: string;
  backgroundAssetUrl: string;
  countdownLabel: string;
  countdownSeconds: number;
  gameplayKind: GameplayKind;
  avatarUrl?: string;
  balanceValue: string;
  thresholdValue: string;
  remainingValue: string;
  progress: number;
  chances: number;
  gameplayAssetUrl: string;
  rewards: Array<{
    id: string;
    label: string;
    value: string;
  }>;
};

const config: SingleGameplayConfig = {
  title: "돌리고 받으세요",
  titleAssetUrl: "./assets/title-single-gameplay.png",
  backgroundAssetUrl: "./assets/background-single-gameplay.png",
  countdownLabel: "过期时间：",
  countdownSeconds: 279_840,
  gameplayKind: "spin-wheel",
  balanceValue: "₩8,000",
  thresholdValue: "₩100,000",
  remainingValue: "₩2000",
  progress: 0.8,
  chances: 5,
  gameplayAssetUrl: "./assets/gameplay-spin-wheel.png",
  rewards: [
    { id: "coins-large", label: "Coins", value: "20,000" },
    { id: "coins-mid", label: "Coins", value: "6,000" },
    { id: "coins-small", label: "Coins", value: "200" },
  ],
};

export function SingleGameplayConversionPage() {
  const safeProgress = Math.max(0, Math.min(config.progress, 1));
  const noChances = config.chances <= 0;
  const countdownText = useCountdown(config.countdownSeconds);

  return (
    <main className="min-h-screen bg-[#bff7f4] text-[#0d2f38]">
      <div
        className="relative mx-auto h-[844px] w-[390px] overflow-hidden bg-[#bff7f4] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${config.backgroundAssetUrl})` }}
      >
        <TopNavigation />
        <HeaderArea config={config} progress={safeProgress} countdownText={countdownText} />
        <GameplayArea config={config} disabled={noChances} />
        <BottomActionTriple chances={config.chances} disabled={noChances} />
      </div>
    </main>
  );
}

function TopNavigation() {
  return (
    <nav className="absolute left-0 top-0 z-40 h-[91px] w-[390px]" aria-label="Top navigation">
      <div className="absolute left-0 top-0 h-[47px] w-[390px]" aria-hidden="true">
        <span className="absolute left-[45px] top-[18.5px] text-[15px] font-semibold leading-[21px] text-[#1b130c]">
          8:00
        </span>
        <span className="absolute left-[280px] top-5 flex h-[13px] w-[78px] items-center gap-[7px] text-[#1b130c]">
          <CellularIcon />
          <WifiIcon />
          <BatteryIcon />
        </span>
      </div>
      <div className="absolute left-0 top-[47px] h-11 w-[390px]">
        <div className="absolute inset-[-47px_0_0_0]" aria-hidden="true" />
        <div className="hidden" aria-hidden="true" />
        <div className="absolute left-0 top-0 flex h-11 w-[390px] items-center justify-between px-4">
          <NavIconButton label="Back">
            <ChevronLeftIcon />
          </NavIconButton>
          <div className="flex h-8 w-[72px] items-center justify-end gap-2">
            <NavIconButton label="Music">
              <MusicIcon />
            </NavIconButton>
            <NavIconButton label="Help">
              <HelpIcon />
            </NavIconButton>
          </div>
          <div className="pointer-events-none absolute left-24 top-0 h-11 w-[213px]" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}

function NavIconButton({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white/60 p-1.5 leading-none text-[#1b130c] [&>svg]:block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0"
      aria-label={label}
    >
      {children}
    </button>
  );
}

function ChevronLeftIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M12.5 4.2 6.7 10l5.8 5.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg className="h-5 w-5 -translate-y-px" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M13.3 3.1v9.4a3 3 0 1 1-1.8-2.7V5.1l5.1-1.2v2.3l-3.3.8Z" fill="currentColor" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 13.1v-.6c0-1 .5-1.7 1.5-2.4.9-.7 1.4-1.2 1.4-2.1 0-1.2-1-2-2.5-2-1.4 0-2.5.7-3 1.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <circle cx="10" cy="16.1" r="1.2" fill="currentColor" />
    </svg>
  );
}

function CellularIcon() {
  return (
    <svg className="h-3 w-[19px] shrink-0" viewBox="0 0 19 12" aria-hidden="true">
      <rect x="0" y="7" width="3" height="5" rx="1" fill="currentColor" />
      <rect x="5" y="5" width="3" height="7" rx="1" fill="currentColor" />
      <rect x="10" y="2.5" width="3" height="9.5" rx="1" fill="currentColor" />
      <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg className="h-3 w-[17px] shrink-0" viewBox="0 0 17 12" aria-hidden="true">
      <path d="M1 3.9C5.2.1 11.8.1 16 3.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M4.1 7C6.5 4.9 10.5 4.9 12.9 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <path d="M7.2 10.1C7.9 9.5 9.1 9.5 9.8 10.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg className="h-[13px] w-[27px] shrink-0" viewBox="0 0 27 13" aria-hidden="true">
      <rect x="0.5" y="1" width="22" height="11" rx="3" fill="none" stroke="currentColor" />
      <rect x="3" y="3.5" width="16" height="6" rx="1.6" fill="currentColor" />
      <rect x="24" y="4.2" width="2.5" height="4.6" rx="1" fill="currentColor" />
    </svg>
  );
}

function HeaderArea({
  config,
  progress,
  countdownText,
}: {
  config: SingleGameplayConfig;
  progress: number;
  countdownText: string;
}) {
  return (
    <header className="relative z-10 text-center">
      <h1 className="absolute left-[11px] top-[60px] m-0 h-24 w-[368px]">
        <img className="block h-full w-full object-contain" src={config.titleAssetUrl} alt={config.title} />
      </h1>
      <p className="absolute left-[86px] top-[156px] m-0 grid h-7 w-[218px] place-items-center text-xs font-normal leading-4 text-[#1b130c] [text-shadow:0_1px_0_rgba(255,255,255,0.75)]" aria-live="polite">
        {config.countdownLabel}
        {countdownText}
      </p>
      <AssetImage config={config} progress={progress} />
    </header>
  );
}

function useCountdown(initialSeconds: number) {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingSeconds((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return formatDuration(remainingSeconds);
}

function formatDuration(seconds: number) {
  const safeSeconds = Math.max(0, seconds);
  const days = Math.floor(safeSeconds / 86400);
  const hours = Math.floor((safeSeconds % 86400) / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);

  return `${days}d:${hours}h:${minutes}m`;
}

function AssetImage({ config, progress }: { config: SingleGameplayConfig; progress: number }) {
  return (
    <section className="absolute left-8 top-[188px] h-[120px] w-[326px] rounded-[30px] border border-white/70 bg-white/55 px-5 py-4 text-left text-[#1f3e45] shadow-[0_14px_36px_rgba(59,128,140,0.18)] backdrop-blur-md">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-[#d7eef2] text-xs font-black">
            {config.avatarUrl ? <img src={config.avatarUrl} alt="" className="h-full w-full object-cover" /> : "U"}
          </div>
          <strong className="truncate text-[34px] font-black leading-none text-black">{config.balanceValue}</strong>
        </div>
        <button type="button" className="h-[52px] shrink-0 rounded-full bg-white/75 px-7 text-[22px] font-black text-[#687d84]">
          withdraw
        </button>
      </div>
      <p className="mt-8 text-[26px] font-medium leading-none text-[#45636b]">Only {config.remainingValue} to go</p>
      <div className="relative mt-5 pr-8">
        <div className="h-[14px] overflow-hidden rounded-full bg-white/80 shadow-[inset_0_1px_4px_rgba(0,0,0,0.12)]">
          <div className="h-full rounded-full bg-[linear-gradient(90deg,#1597d3,#37d3e3,#fff6cf)]" style={{ width: `${progress * 100}%` }} />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#ffc926] text-xl font-black text-[#b36b00] shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
            P
          </div>
          <div className="-mt-1 rounded-full bg-white px-2 py-1 text-sm font-black text-[#2d1a13] shadow-[0_2px_6px_rgba(0,0,0,0.12)]">
            {config.thresholdValue}
          </div>
        </div>
      </div>
    </section>
  );
}

function GameplayArea({ config, disabled }: { config: SingleGameplayConfig; disabled: boolean }) {
  return (
    <section className="absolute left-8 top-[342px] w-[326px] text-[#4b2110]">
      <img className="block h-[326px] w-[326px] object-contain" src={config.gameplayAssetUrl} alt={`${config.gameplayKind} gameplay asset`} />
      <button
        type="button"
        disabled={disabled}
        className="absolute left-1/2 top-[132px] h-24 w-24 -translate-x-1/2 rounded-full bg-transparent p-0 text-[0px] disabled:opacity-70"
      >
        돌리기
      </button>
    </section>
  );
}

function BottomActionTriple({
  chances,
  disabled,
}: {
  chances: number;
  disabled: boolean;
}) {
  return (
    <nav className="absolute left-0 top-[668px] h-[120px] w-[390px] text-[#5b2c13]">
      <button type="button" className="absolute left-0 top-5 h-[58px] w-20 bg-transparent p-0">
        <span className="absolute left-0 top-0 h-14 w-20 rounded-r-[22px] bg-[#f4d8b7] shadow-[inset_0_3px_0_rgba(255,255,255,0.55),0_7px_0_#b87b42]" />
        <span className="absolute left-0 top-0 flex h-14 w-20 items-center justify-center whitespace-pre-line text-center text-[15px] font-bold leading-[19px]">
          기회 더
          {"\n"}
          받기
        </span>
      </button>
      <button
        type="button"
        disabled={disabled}
        className="absolute left-[86px] top-[-1px] h-24 w-[218px] bg-transparent p-0 disabled:opacity-70"
      >
        <span className="absolute left-[11px] top-3 h-[72px] w-[196px] rounded-[28px] bg-[#9b4c27] shadow-[inset_0_4px_0_rgba(255,255,255,0.22),0_8px_0_#5f2b18]" />
        <span className="absolute left-[11px] top-3 flex h-[72px] w-[196px] items-center justify-center text-[32px] font-bold leading-[38px] text-white">
          돌
        </span>
      </button>
      <button type="button" className="absolute left-[310px] top-5 h-[58px] w-20 bg-transparent p-0">
        <span className="absolute left-0 top-0 h-14 w-20 rounded-l-[22px] bg-[#f4d8b7] shadow-[inset_0_3px_0_rgba(255,255,255,0.55),0_7px_0_#b87b42]" />
        <span className="absolute left-0 top-0 flex h-14 w-20 items-center justify-center whitespace-pre-line text-center text-[15px] font-bold leading-[19px]">
          QR
          {"\n"}
          코드
        </span>
      </button>
      <p className="absolute left-[136px] top-[106px] m-0 h-[18px] w-[119px] text-center text-sm font-normal leading-[18px] text-white">
        Opportunity: {chances}
      </p>
    </nav>
  );
}
