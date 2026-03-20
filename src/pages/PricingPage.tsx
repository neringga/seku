import { motion } from "motion/react";
import { BookOpen, Baby, BarChart3, Languages } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-on-surface mb-6 leading-tight"
        >
          Choose the path for your family's stories.
        </motion.h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Invest in memories that last forever. Select a plan to begin creating personalized journeys for your little ones with Seku.
        </p>
      </section>

      {/* Pricing Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
        {/* Features Highlight */}
        <div className="md:col-span-4 space-y-8 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                <BookOpen size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-on-surface">Unlimited story generation</h3>
                <p className="text-sm text-on-surface-variant">Create as many worlds as your imagination allows.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                <Baby size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-on-surface">Custom child profiles</h3>
                <p className="text-sm text-on-surface-variant">Each child gets their own personalized AI memory bank.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                <BarChart3 size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-on-surface">Emotional tracking</h3>
                <p className="text-sm text-on-surface-variant">Understand development through story choices.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                <Languages size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-on-surface">Multi-language support</h3>
                <p className="text-sm text-on-surface-variant">Preserve your heritage in 40+ native languages.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Standard Plan */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-surface-container-low p-8 rounded-xl border-2 border-transparent hover:border-primary/20 transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Flexible</span>
              <h2 className="text-2xl font-serif mt-2 mb-4">Standard</h2>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">€7.99</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
              <p className="mt-6 text-sm text-on-surface-variant leading-relaxed">
                Up to 30 stories per month. Perfect for consistent bedtime routines and families starting their journey.
              </p>
            </div>
            <Link to="/checkout?plan=standard">
              <button className="mt-8 w-full py-4 rounded-xl bg-surface-container-high text-primary font-semibold hover:bg-primary hover:text-on-primary transition-all">
                Select Standard
              </button>
            </Link>
          </motion.div>

          {/* Unlimited Plan */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-surface-container-lowest p-8 rounded-xl ring-2 ring-primary/30 relative flex flex-col justify-between shadow-sm"
          >
            <div className="absolute -top-3 right-8 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Best Value
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Legacy</span>
              <h2 className="text-2xl font-serif mt-2 mb-4">Unlimited</h2>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">€59.99</span>
                <span className="text-on-surface-variant">/yr</span>
              </div>
              <p className="mt-6 text-sm text-on-surface-variant leading-relaxed">
                Unlimited stories for the whole year. Our most popular choice for families growing with Seku.
              </p>
            </div>
            <Link to="/checkout?plan=unlimited">
              <button className="mt-8 w-full py-4 rounded-xl bg-primary text-on-primary font-semibold shadow-lg hover:opacity-90 transition-all">
                Select Unlimited
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Image Section */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img 
            alt="Peaceful family bedtime" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBypD0gERc7gcbfHf9iHL9coKjTLHLDC-zQHhoUl8VWRBnkejh4SwE0mAcPsWECLs83IUqvCt4pyYVDIPugER9O8bjjnaWBBo3L82OAHlMruKsjbELGO8TFrbiaQQRGZsxm40630vYjsYubnvjgCPwoqrXebnSTHquTbrzkhqcWZAQtQT-J4FxGWC9tGggQXZIYQs716ZDI2KWdgw05O2IMZ4shLdBQOLbzPNf4uGUcyEJTKv0AU2wQhUX4mtGXgXJ7I-XoGJkNb0sm" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl font-serif mb-4 italic">"The stories are so personal, it feels like Seku has known our family for generations."</h2>
              <p className="text-sm font-bold tracking-widest uppercase opacity-80">— The Anderson Family</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
