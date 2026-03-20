import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <div className="pt-32 pb-24 px-8 min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-surface-container-low rounded-[2rem] p-12 text-center shadow-sm border border-on-surface/5"
      >
        <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 bg-primary-container rounded-full"
          />
          <CheckCircle2 className="text-primary relative z-10" size={40} />
        </div>
        <h1 className="text-3xl font-serif mb-4">A Heartfelt Thank You.</h1>
        <p className="text-on-surface-variant leading-relaxed mb-6">
          Your journey with Seku begins today. We are honored to be a part of your family's bedtime magic.
        </p>
        <div className="bg-surface-container p-6 rounded-2xl mb-8 text-sm text-on-surface-variant italic leading-relaxed">
          "The stories we tell our children are the seeds of the adults they will become. Thank you for choosing to plant something beautiful with us."
        </div>
        <p className="text-xs text-on-surface-variant/60 mb-8">
          Note: This was a test transaction. Your mock payment has been <strong>instantly refunded</strong>.
        </p>
        <div className="space-y-4">
          <Link to="/">
            <button className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold shadow-lg hover:opacity-90 transition-all">
              Go to Dashboard
            </button>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
