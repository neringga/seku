import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { CreditCard, ShieldCheck, Loader2 } from "lucide-react";

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get("plan") || "unlimited";
  const price = plan === "unlimited" ? 59.99 : 7.99;
  const PAYPAL_LINK = "https://paypal.me/fairytail877";
  
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [formData, setFormData] = useState({
    name: "Sarah Mitchell",
    email: "sarah@example.com",
    cardNumber: "**** **** **** ****",
    expiry: "MM/YY",
    cvc: "***"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (paymentMethod === "paypal") {
      window.open(PAYPAL_LINK, "_blank");
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, email: formData.email, method: paymentMethod })
      });
      
      const data = await response.json();
      if (data.status === "success") {
        // Redirect to success page after a short delay
        setTimeout(() => {
          navigate("/success");
        }, 1500);
      }
    } catch (error) {
      console.error("Checkout failed", error);
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-8">
      <section className="max-w-4xl mx-auto">
        <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-12 shadow-sm border border-on-surface/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form Area */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-serif mb-8 text-on-surface">Payment Details</h3>
              
              {/* Payment Method Selector */}
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => setPaymentMethod("card")}
                  className={`flex-1 py-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 font-medium text-sm ${paymentMethod === "card" ? "border-primary bg-primary/5 text-primary" : "border-on-surface/5 text-on-surface-variant hover:border-on-surface/10"}`}
                >
                  <CreditCard size={18} />
                  Credit Card
                </button>
                <button 
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex-1 py-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 font-medium text-sm ${paymentMethod === "paypal" ? "border-primary bg-primary/5 text-primary" : "border-on-surface/5 text-on-surface-variant hover:border-on-surface/10"}`}
                >
                  PayPal
                </button>
              </div>

              {paymentMethod === "card" ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Cardholder Name</label>
                    <input 
                      className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary transition-all" 
                      placeholder="Sarah Mitchell" 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Card Number</label>
                    <div className="relative">
                      <input 
                        className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary transition-all" 
                        placeholder="**** **** **** ****" 
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                      />
                      <div className="absolute right-3 top-3 opacity-40">
                        <CreditCard size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Expiry</label>
                      <input 
                        className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary transition-all" 
                        placeholder="MM/YY" 
                        type="text"
                        value={formData.expiry}
                        onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">CVC</label>
                      <input 
                        className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary transition-all" 
                        placeholder="***" 
                        type="text"
                        value={formData.cvc}
                        onChange={(e) => setFormData({...formData, cvc: e.target.value})}
                      />
                    </div>
                  </div>
                </form>
              ) : (
                <div className="bg-surface-container-high/50 p-8 rounded-2xl text-center space-y-4">
                  <h4 className="font-serif text-xl">Pay with PayPal</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    You will be redirected to PayPal to complete your purchase securely.
                  </p>
                  <div className="pt-4">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Instant Refund Active</p>
                    <p className="text-[10px] text-on-surface-variant italic">All test payments are instantly returned.</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Summary Area */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-end"
            >
              <div className="bg-surface-container-high/50 p-6 rounded-xl mb-8 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Plan Subtotal ({plan})</span>
                  <span className="font-medium">€{price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Tax</span>
                  <span className="font-medium">€0.00</span>
                </div>
                <div className="h-px bg-on-surface/5 my-2"></div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Today</span>
                  <span className="text-primary">€{price}</span>
                </div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-5 rounded-xl bg-primary text-on-primary font-bold text-lg shadow-lg shadow-primary/20 hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Processing...
                  </>
                ) : (
                  paymentMethod === "paypal" ? "Pay with PayPal" : "Complete Subscription"
                )}
              </motion.button>
              
              <div className="mt-6 flex gap-3">
                <div className="flex-shrink-0">
                  <ShieldCheck className="text-primary" size={20} />
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed italic">
                  Start your subscription to unlock the full potential. Cancel anytime. All payments are instantly refunded for this test period.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
