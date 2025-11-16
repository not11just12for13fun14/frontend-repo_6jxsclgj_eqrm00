import { ArrowRight } from 'lucide-react';

export default function CTA(){
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to remove the busywork?</h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">Let’s map out where AI creates leverage in your business and ship your first win in weeks, not quarters.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:hello@blueflare.ai" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
            hello@blueflare.ai
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
            Book a discovery call
            <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
