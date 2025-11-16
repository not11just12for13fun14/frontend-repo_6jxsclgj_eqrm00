import { BrainCircuit, Workflow, ShieldCheck, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: BrainCircuit,
    title: 'AI Opportunity Mapping',
    desc: 'Identify the highest ROI use-cases tailored to your workflows, data, and constraints.',
  },
  {
    icon: Workflow,
    title: 'Automation & Orchestration',
    desc: 'Design human-in-the-loop automations that remove monotony and scale output safely.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance & Safety',
    desc: 'Policies, guardrails, and evaluation to keep models accurate, auditable, and compliant.',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    desc: 'Clickable prototypes and small wins in weeks, not quarters — de-risk big bets.',
  },
];

export default function Services(){
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">Practical, measurable outcomes that unlock time and revenue — without growing your headcount.</p>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({icon:Icon, title, desc}, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.05 }}
              className="rounded-xl border border-black/10 p-6 bg-gradient-to-b from-white to-gray-50/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-violet-500 to-cyan-500 text-white inline-flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
