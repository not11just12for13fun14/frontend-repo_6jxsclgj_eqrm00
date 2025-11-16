import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Scope',
    subtitle: 'Week 1',
    points: [
      'Define outcomes, constraints, and success metrics',
      'Capture processes and pain points',
      'Confirm data + systems access',
    ],
  },
  {
    title: 'Forge',
    subtitle: 'Weeks 2–3',
    points: [
      'Prototype key workflows with HITL',
      'Evaluate quality, risk, and usability',
      'Tight feedback loops with your team',
    ],
  },
  {
    title: 'Deploy',
    subtitle: 'Weeks 4–6',
    points: [
      'Productionize the winning path',
      'Guardrails, governance, and access controls',
      'Rollout plan + enablement',
    ],
  },
  {
    title: 'Iterate',
    subtitle: 'Ongoing',
    points: [
      'Track ROI and quality metrics',
      'Expand to adjacent use cases',
      'Continuously improve with evals',
    ],
  },
];

export default function Approach(){
  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-gray-700">
            <Sparkles size={14} /> Our Sufdit approach
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">From clarity to compounding impact</h2>
          <p className="mt-3 text-gray-600">A lightweight 4-step path to prove value quickly and scale what works.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.05 }}
              className="rounded-xl border border-black/10 p-6 bg-white shadow-sm"
            >
              <div className="text-sm text-gray-500">{s.subtitle}</div>
              <h3 className="mt-1 font-medium text-gray-900">{i + 1}. {s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="text-emerald-600 mt-0.5" size={16} /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
