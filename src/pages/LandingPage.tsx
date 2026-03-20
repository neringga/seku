import { motion } from "motion/react";
import { ArrowRight, Sparkles, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative px-8 pt-16 pb-24 md:pt-32 md:pb-40 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-on-surface leading-[1.1] mb-8">
              Turn everyday moments into <span className="italic">meaningful stories.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Craft bespoke narratives with Seku that grow with your child. A quiet sanctuary for digital storytelling, designed for the quiet moments of parenthood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/pricing">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-on-primary px-8 py-4 rounded-xl text-lg font-medium shadow-lg w-full sm:w-auto"
                >
                  Start Your Free Trial
                </motion.button>
              </Link>
              <button className="bg-surface-container-high text-primary px-8 py-4 rounded-xl text-lg font-medium w-full sm:w-auto">
                Explore the Library
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-surface-container">
              <img 
                alt="Parent reading to child" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqfYmzaigEpLk-lDIJacbBEssAlE1CS-GdqTf6MktP1S-YFGTKwN8xEEza3uX7GVtXObP7f4RkrYOY99myoe1HTqsS7qugCo4gLG7np05jg8T8xB1PMgLBiMI5qyDrwg7hR3lS9edlcdlRln7Ge6vTdA6Brep47HkU0ZEYQYK9EAHUNJVV8xnmSN5O3D4Rxqjpo_Rw0q2cGsv2QWn-d0gy6hEb77fMBwjFTKjr_VYCi1bvp2C0dcMBoj_gxZoRQg-0PingPV7zdkl6" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section id="how-it-works" className="bg-surface-container-low py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-serif text-on-surface mb-4">The Magic of Seku Storytelling</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-primary rounded-full">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-serif">Personalization</h3>
              <p className="text-on-surface-variant leading-relaxed">
                "Stories as unique as your child." Every narrative adapts to their interests, fears, and triumphs, making them the hero of their own journey.
              </p>
            </div>
            <div className="space-y-6 md:mt-12">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-primary rounded-full">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-serif">Connection</h3>
              <p className="text-on-surface-variant leading-relaxed">
                "Build stronger bonds through narrative." Seku provides the spark for meaningful conversations and shared laughter during bedtime routines.
              </p>
            </div>
            <div className="space-y-6 md:mt-24">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container text-primary rounded-full">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-serif">Ease</h3>
              <p className="text-on-surface-variant leading-relaxed">
                "Craft magic in minutes, not hours." Our intuitive AI handles the creative heavy lifting, so you can focus on the performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Illustration */}
      <section id="heirloom" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-20 bg-surface-container-lowest p-12 md:p-20 rounded-[3rem] shadow-sm">
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden aspect-square shadow-lg transform -rotate-2">
              <img 
                alt="Watercolor illustration" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpI1soguAjd6oyHCxyMJfjvljlXj3XP69Thp_U-r-Fen8d_ZyvqaJpeORfoOivc36YFMuUW1Mvzq_DybgbB4CBQWca1OG5hozYAYOWAeJadHQGrsqfHonDL3YThShJzpnjQUkdARiSdekOzNNEfnMNVQJv8j2CbmsSg-W6Hb1rnKg6aMd2MCrtXQwxUBeOrFIqDRmfDY4qeN5O1PBWMo674ozTupflT1PMpc8Gdgfb8TKEy3B2BkTZsXsU2Vd2EdLEY_H9OiNAteUU" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Featured Artist</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Every story is a <span className="italic">work of art.</span></h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Beyond the words, Seku generates beautiful, soft watercolor illustrations that mirror your child's likeness and the story's setting, creating a physical heirloom feel in a digital space.
            </p>
            <Link to="/pricing" className="inline-flex items-center text-primary font-medium gap-2 group">
              See how it works 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="vision" className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif mb-6">From Our Digital Hearth</h2>
            <p className="text-on-surface-variant">Real stories from real parents about their bedtime magic.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-10 rounded-2xl flex flex-col justify-between">
              <p className="text-xl font-serif leading-relaxed italic mb-10">
                "It turned the frantic 7 PM rush into a time of genuine connection. My daughter asks for her 'special fox story' every single night."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img alt="Sarah J." src="https://picsum.photos/seed/sarah/100/100" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-on-surface">Sarah Jenkins</p>
                  <p className="text-sm text-on-surface-variant">Mother of two, London</p>
                </div>
              </div>
            </div>
            <div className="bg-primary text-on-primary p-10 rounded-2xl flex flex-col justify-between transform md:-translate-y-8 shadow-xl">
              <p className="text-xl font-serif leading-relaxed italic mb-10">
                "I struggle with creativity after a long work day. Seku helps me be the imaginative father I've always wanted to be."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden">
                  <img alt="David K." src="https://picsum.photos/seed/david/100/100" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-on-primary">David Kim</p>
                  <p className="text-sm text-primary-container">Father of a 4-year-old, NYC</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl flex flex-col justify-between">
              <p className="text-xl font-serif leading-relaxed italic mb-10">
                "The quality of the prose is genuinely moving. It doesn't feel like 'AI'—it feels like a classic children's book found in an attic."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img alt="Elena R." src="https://picsum.photos/seed/elena/100/100" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-on-surface">Elena Rodriguez</p>
                  <p className="text-sm text-on-surface-variant">Early Childhood Educator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-32">
        <div className="max-w-4xl mx-auto bg-primary-container rounded-[3rem] p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8">Ready to write your child's first heirloom?</h2>
          <p className="text-xl text-primary opacity-80 mb-12 max-w-2xl mx-auto">
            Join thousands of families preserving the magic of childhood through personalized digital storytelling with Seku.
          </p>
          <Link to="/pricing">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-on-primary px-10 py-5 rounded-xl text-xl font-medium shadow-lg"
            >
              Start Your Free Trial
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
