import { Moon, Palette, Sun } from "./icons";
import type { RkGlow, RkTheme } from "./visualPreferences";

const glowOptions: Array<{ value: RkGlow; label: string; note: string }> = [
  { value: "violet", label: "研究紫", note: "当前主路径" },
  { value: "blue", label: "呼吸蓝", note: "冷静、持续计算" },
  { value: "crimson", label: "深绯红", note: "克制的高警觉感" },
  { value: "razer", label: "雷蛇绿", note: "清晰、硬朗的运行态" },
  { value: "cyan", label: "冰川青", note: "低温、精密的验证态" },
  { value: "amber", label: "琥珀脉冲", note: "温和但明确的等待态" },
];

export function ResearchSettings({ theme, glow, onTheme, onGlow }: {
  theme: RkTheme;
  glow: RkGlow;
  onTheme(theme: RkTheme): void;
  onGlow(glow: RkGlow): void;
}) {
  return (
    <section className="rk-settings-panel" role="dialog" aria-label="研究图显示设置">
      <header><Palette size={16} /><div><strong>显示设置</strong><small>只改变本机界面，不修改研究数据</small></div></header>
      <fieldset>
        <legend>外观</legend>
        <div className="rk-setting-segment">
          <button type="button" aria-pressed={theme === "dark"} onClick={() => onTheme("dark")}><Moon size={15} />深色</button>
          <button type="button" aria-pressed={theme === "light"} onClick={() => onTheme("light")}><Sun size={15} />白天</button>
        </div>
      </fieldset>
      <fieldset>
        <legend>运行光效</legend>
        <div className="rk-glow-options">
          {glowOptions.map((option) => <button
            type="button"
            key={option.value}
            className={`rk-glow-option rk-glow-option--${option.value}`}
            aria-pressed={glow === option.value}
            onClick={() => onGlow(option.value)}
          >
            <i aria-hidden="true" />
            <span><strong>{option.label}</strong><small>{option.note}</small></span>
          </button>)}
        </div>
      </fieldset>
    </section>
  );
}
