import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 mt-24 bg-surface-container-low border-t border-on-surface/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="col-span-1">
          <div className="mb-4">
            <img 
              alt="Seku Logo" 
              className="h-8 w-auto mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ui8a3UoPH65di2XALMxhC_B9jLNusKOBGAn-l4_51vEXl_CiNqxr6X5IUR1El-ZadsiacJ8oFSb9OJ6jpdDLf0zIU5x_ErS-0SH4ZQKMG24ihuOP7jZ92Od3swE0v8qXWJlv-tv1JAnwXgn5SUFW9z8uf90dWwqWF4OBWKbHYW0PZfOqy1dp8Z7AZC_g3XRI-xqUTero5igGOrHxsA-MEp1QVjE6hx28ztTHvrZ5Sy3mqfIkHBFu1xFXD9vkV_DxGeveyLmIGzniyU" 
            />
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            © 2024 Seku. Preserving the magic of childhood, one story at a time.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Product</h4>
          <div className="flex flex-col gap-2">
            <Link to="/#vision" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Our Vision</Link>
            <Link to="/#how-it-works" className="text-on-surface-variant hover:text-primary text-sm transition-colors">How it Works</Link>
            <Link to="/pricing" className="text-primary underline text-sm transition-colors">Pricing</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Terms of Service</Link>
            <Link to="/" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Family Safety</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Support</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Contact Support</Link>
            <Link to="/" className="text-on-surface-variant hover:text-primary text-sm transition-colors">Help Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
