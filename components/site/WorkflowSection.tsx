import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const inputs = [
  { title: "Business teams", sub: "People · requests · approvals" },
  { title: "Customer activity", sub: "Enquiries · service · feedback" },
  { title: "Connected tools", sub: "CRM · finance · contact center" },
  { title: "Recurring processes", sub: "Tasks · records · handoffs" },
];

const services = [
  { title: ["Workflow", "Automation"], acts: ["Map repeatable work", "Route routine steps"] },
  { title: ["Back Office &", "finances"], acts: ["Document processing", "Finance admin"] },
  { title: ["CRM and helpdesk", "Software"], acts: ["Record updates", "Queue coordination"] },
  { title: ["Cloud Contact", "Center"], acts: ["Route conversations", "Maintain channels"] },
  { title: ["Maintaining Audit", "logs"], acts: ["Capture key actions", "Review activity"] },
  { title: ["full Follow ups"], acts: ["Track open items", "Prompt next steps"] },
  { title: ["Virtual Desktop", "Infrastructure"], acts: ["Provision workspaces", "Assign virtual support"] },
];

const line = "fill-none stroke-forest";
const box = "fill-ivory stroke-forest/60";

function Marker({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" className="fill-forest" />
      </marker>
    </defs>
  );
}

/** Wide horizontal flowchart for tablets and desktops. */
function DesktopDiagram() {
  const W = 1680;
  const mid = 840;
  const inX = [30, 448, 868, 1290];
  const inW = 360;
  const cols = services.map((_, i) => 130 + i * 236);
  const sw = 214;
  const a = "url(#wf-arrow-d)";
  return (
    <svg viewBox={`0 0 ${W} 940`} className="h-auto w-full" role="img" aria-labelledby="wf-desc">
      <title id="wf-desc">Improx operations workflow from business inputs through seven services to operational reporting</title>
      <defs>
        <marker id="wf-arrow-d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="fill-forest" />
        </marker>
      </defs>
      <g strokeWidth={2.5}>
        {inputs.map((it, i) => {
          const x = inX[i]!;
          const cx = x + inW / 2;
          return (
            <g key={it.title}>
              <rect x={x} y={48} width={inW} height={92} className={box} />
              <text x={cx} y={88} textAnchor="middle" className="fill-charcoal text-[25px] font-bold">{it.title}</text>
              <text x={cx} y={120} textAnchor="middle" className="fill-muted-foreground text-[19px]">{it.sub}</text>
              <path d={`M${cx} 140 C${cx} 200, ${mid} 175, ${mid} 230`} className={line} markerEnd={a} />
            </g>
          );
        })}
        <rect x={448} y={234} width={784} height={116} className="fill-forest" />
        <text x={mid} y={286} textAnchor="middle" className="fill-ivory text-[34px] font-bold">Improx Operations</text>
        <text x={mid} y={325} textAnchor="middle" className="fill-ivory/90 text-[22px]">Dedicated people · connected technology · clear workflows</text>

        <path d={`M${mid} 350 V398`} className={line} />
        <path d={`M${cols[0]} 398 H${cols[6]}`} className={line} strokeLinecap="square" />
        {services.map((s, i) => {
          const c = cols[i]!;
          const x = c - sw / 2;
          const t = s.title.length === 1 ? [s.title[0]!] : s.title;
          return (
            <g key={s.title.join()}>
              <path d={`M${c} 398 V436`} className={line} markerEnd={a} />
              <rect x={x} y={440} width={sw} height={106} className={box} />
              <text x={c} y={470} textAnchor="middle" className="fill-gold text-[18px] font-semibold">{String(i + 1).padStart(2, "0")}</text>
              {t.map((l, j) => (
                <text key={l} x={c} y={(t.length === 1 ? 508 : 499) + j * 28} textAnchor="middle" className="fill-charcoal text-[21px] font-semibold">{l}</text>
              ))}
              <path d={`M${c} 546 V578`} className={line} markerEnd={a} />
              <rect x={x} y={582} width={sw} height={52} className={box} />
              <text x={c} y={614} textAnchor="middle" className="fill-charcoal text-[17px]">{s.acts[0]}</text>
              <path d={`M${c} 634 V658`} className={line} markerEnd={a} />
              <rect x={x} y={662} width={sw} height={54} className={box} />
              <text x={c} y={695} textAnchor="middle" className="fill-charcoal text-[17px]">{s.acts[1]}</text>
              <path d={`M${c} 716 V764`} className={line} />
            </g>
          );
        })}
        <path d={`M${cols[0]} 764 H${cols[6]}`} className={line} strokeLinecap="square" />
        <path d={`M${mid} 764 V804`} className={line} markerEnd={a} />
        <rect x={448} y={808} width={784} height={96} className="fill-surface stroke-gold" />
        <text x={mid} y={852} textAnchor="middle" className="fill-charcoal text-[30px] font-bold">Operational visibility &amp; reporting</text>
        <text x={mid} y={887} textAnchor="middle" className="fill-charcoal/80 text-[21px]">Queue status · activity records · next actions</text>
      </g>
    </svg>
  );
}

/** Vertical flowchart for phones: inputs stack, services hang off a left spine and feed a right spine. */
function MobileDiagram() {
  const W = 400;
  const mid = 200;
  const inY = (i: number) => 10 + i * 66;
  const centerY = inY(4) + 20;
  const rowTop = centerY + 110;
  const rowH = 190;
  const lastRow = rowTop + (services.length - 1) * rowH;
  const reportY = lastRow + rowH + 10;
  const H = reportY + 92;
  const a = "url(#wf-arrow-m)";
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-labelledby="wf-desc-m">
      <title id="wf-desc-m">Improx operations workflow from business inputs through seven services to operational reporting</title>
      <Marker id="wf-arrow-m" />
      <g strokeWidth={2}>
        {inputs.map((it, i) => {
          const y = inY(i);
          return (
            <g key={it.title}>
              <rect x={60} y={y} width={280} height={52} className={box} />
              <text x={mid} y={y + 23} textAnchor="middle" className="fill-charcoal text-[16px] font-bold">{it.title}</text>
              <text x={mid} y={y + 42} textAnchor="middle" className="fill-muted-foreground text-[12px]">{it.sub}</text>
              {/* side rail joins each input to the central box */}
              <path d={`M60 ${y + 26} H30`} className={line} />
            </g>
          );
        })}
        <path d={`M30 ${inY(0) + 26} V${centerY - 22} C30 ${centerY - 8}, ${mid} ${centerY - 22}, ${mid} ${centerY - 4}`} className={line} markerEnd={a} />
        <rect x={20} y={centerY} width={360} height={76} className="fill-forest" />
        <text x={mid} y={centerY + 33} textAnchor="middle" className="fill-ivory text-[22px] font-bold">Improx Operations</text>
        <text x={mid} y={centerY + 58} textAnchor="middle" className="fill-ivory/90 text-[12.5px]">Dedicated people · connected technology · clear workflows</text>

        <path d={`M${mid} ${centerY + 76} V${centerY + 92} H16 V${lastRow + 30}`} className={line} />
        <path d={`M384 ${rowTop + 160} V${reportY - 26} H${mid} V${reportY - 4}`} className={line} markerEnd={a} />
        {services.map((s, i) => {
          const y = rowTop + i * rowH;
          return (
            <g key={s.title.join()}>
              <path d={`M16 ${y + 30} H46`} className={line} markerEnd={a} />
              <rect x={50} y={y} width={300} height={60} className={box} />
              <text x={66} y={y + 36} className="fill-gold text-[14px] font-semibold">{String(i + 1).padStart(2, "0")}</text>
              <text x={210} y={y + 36} textAnchor="middle" className="fill-charcoal text-[16px] font-semibold">{s.title.join(" ")}</text>
              <path d={`M200 ${y + 60} V${y + 76}`} className={line} markerEnd={a} />
              <rect x={50} y={y + 80} width={300} height={40} className={box} />
              <text x={200} y={y + 105} textAnchor="middle" className="fill-charcoal text-[14px]">{s.acts[0]}</text>
              <path d={`M200 ${y + 120} V${y + 136}`} className={line} markerEnd={a} />
              <rect x={50} y={y + 140} width={300} height={40} className={box} />
              <text x={200} y={y + 165} textAnchor="middle" className="fill-charcoal text-[14px]">{s.acts[1]}</text>
              <path d={`M350 ${y + 160} H384`} className={line} />
            </g>
          );
        })}
        <rect x={20} y={reportY} width={360} height={80} className="fill-surface stroke-gold" />
        <text x={mid} y={reportY + 34} textAnchor="middle" className="fill-charcoal text-[19px] font-bold">Operational visibility &amp; reporting</text>
        <text x={mid} y={reportY + 60} textAnchor="middle" className="fill-charcoal/80 text-[13px]">Queue status · activity records · next actions</text>
      </g>
    </svg>
  );
}

/** Business process workflow section with a connected flowchart of Improx operations. */
export function WorkflowSection() {
  return (
    <section aria-labelledby="workflow-title" className="section-y bg-surface">
      <div className="container-site">
        <FadeIn>
          <SectionHeading
            id="workflow-title"
            eyebrow="Business process workflow"
            title="How Our Business Operations Work"
            intro="A structured operating model connects your business units to our delivery teams, backed by governance, quality control and a secure technology foundation."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <figure className="mx-auto mt-14 max-w-7xl rounded-lg border border-line bg-ivory p-4 sm:p-6 lg:mt-20 lg:p-8">
            <div className="hidden md:block"><DesktopDiagram /></div>
            <div className="mx-auto max-w-md md:hidden"><MobileDiagram /></div>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
