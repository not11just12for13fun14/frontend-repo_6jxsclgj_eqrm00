import { motion } from 'framer-motion';
import { BadgeCheck, ClipboardList, Crown } from 'lucide-react';

const audits = [
  {
    tier: 'Free Audit',
    icon: BadgeCheck,
    desc: 'A quick, no-commitment scan to spot 2–3 high-leverage automation or AI opportunities in your current workflows.',
    bullets: [
      '15–20 min async questionnaire',
      'Top 3 opportunities ranked by impact',
      'Fast wins + next steps outline',
    ],
    price: '$0',
    cta: 'Get free audit',
    href: '#contact',
    highlight: false,
  },
  {
    tier: 'Mini Audit',
    icon: ClipboardList,
    desc: 'A focused review across one team or process with clear recommendations and a lightweight prototype concept.',
    bullets: [
      'Stakeholder interview (45 min)',
      'Systems + data review',
      'Feasibility + risk notes',
      'Prototype concept + ROI estimate',
    ],
    price: '$1,500',
    cta: 'Book mini audit',
    href: '#contact',
    highlight: true,
  },
  {
    tier: 'Executive Audit',
    icon: Crown,
    desc: 'A deep-dive across multiple workflows with a prioritized roadmap, governance guardrails, and rollout plan.',
    bullets: [
      'Multi-stakeholder workshop',
      'Process + data mapping',
      'Security, compliance, and eval plan',
      'Roadmap with milestones + ROI model',
    ],
    price: 'Custom',
    cta: 'Request proposal',
    href: '#contact',
    highlight: false,
  },
];

export default function Audits(){
  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.5, ease: 'easeOut' } }),
  };

  return (
    <section id="audits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-gray-700">
            Audits
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Choose the right audit to get started</h2>
          <p className="mt-3 text-gray-600">From a zero-cost pulse check to a deep-dive roadmap. Pick the depth that matches your timeline and goals.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {audits.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.tier}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                className={`rounded-2xl border border-black/10 p-6 shadow-sm bg-gradient-to-b from-white to-gray-50/40 ${a.highlight ? 'ring-1 ring-violet-400/30' : ''}`}
              >
                <div className="h-11 w-11 rounded-md bg-gradient-to-br from-violet-500 to-cyan-500 text-white inline-flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{a.tier}</h3>
                <p className="mt-2 text-sm text-gray-600">{a.desc}</p>
                <ul className="mt-4 space-y-2">
                  {a.bullets.map((b) => (
                    <li key={b} className="text-sm text-gray-700 list-disc list-inside">{b}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xl font-semibold text-gray-900">{a.price}</div>
                  <a href={a.href} className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition border ${a.highlight ? 'bg-gray-900 text-white border-transparent hover:opacity-90' : 'bg-white text-gray-900 border-black/10 hover:bg-gray-50'}`}>
                    {a.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
