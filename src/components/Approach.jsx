import { Check, Sparkles } from 'lucide-react';

const steps = [
  {
    title: 'Discovery & Alignment',
    points: [
      'Stakeholder interviews and process mapping',
      'Define value targets and constraints',
      'Data + tooling inventory',
    ],
  },
  {
    title: 'Design & Prototype',
    points: [
      'Prioritized use-case shortlist',
      'Human-in-the-loop workflow design',
      'Clickable prototype or automation POC',
    ],
  },
  {
    title: 'Pilot & Scale',
    points: [
      'Guardrails, governance and evaluation',
      'Rollout plan and team enablement',
      'Metrics, ROI and continuous improvement',
    ],
  },
];

export default function Approach(){
  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-8 flex-col lg:flex-row">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-gray-700">
              <Sparkles size={14} /> Our approach
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Clarity first. Then momentum.</h2>
            <p className="mt-3 text-gray-600">We meet your team where they are, co-design the right workflows, and build what matters now.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
            {steps.map((s) => (
              <div key={s.title} className="rounded-xl border border-black/10 p-6 bg-white shadow-sm">
                <h3 className="font-medium text-gray-900">{s.title}</h3>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="text-emerald-600 mt-0.5" size={16} /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
