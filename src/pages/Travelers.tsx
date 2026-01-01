import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { travelers } from "@/data/tripData";
import { User, Phone, Mail } from "lucide-react";

const Travelers = () => {
  // Demo contact info
  const contactInfo: { [key: string]: { phone: string; email: string } } = {
    paresh: { phone: "+91 8917351934", email: "pareshsahoo902@gmail.com" },
    akash: { phone: "+91 99377 70400", email: "Akashkumar06sk@gmail.com" },
    prerna: { phone: "+91 7327 967 554", email: "Prerna200012@gmail.com" },
    navneeta: { phone: "+91 9110964248", email: "Navneetaprasad1812@gmail.com" },
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="hero-gradient">
        <Header 
          title="Travelers" 
          subtitle="Your travel companions" 
        />
      </div>

      <div className="px-4 space-y-4">
        {travelers.map((traveler, index) => (
          <div 
            key={traveler.id} 
            className="glass-card rounded-2xl p-5 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              {traveler.image ? (
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/30">
                  <img 
                    src={traveler.image} 
                    alt={traveler.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                  {traveler.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg text-foreground">{traveler.name}</h3>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{contactInfo[traveler.id].phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo[traveler.id].email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Contact */}
      <div className="px-4 mt-6">
        <div className="glass-card rounded-xl p-4 border-l-4 border-accent">
          <h3 className="font-semibold text-foreground mb-2">🆘 Emergency Contacts</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Indian Embassy in Vietnam: +84-24-3824-4989</li>
            <li>• Emergency Services: 113 (Police), 115 (Ambulance)</li>
          </ul>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Travelers;
