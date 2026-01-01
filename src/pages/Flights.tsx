import Header from "@/components/Header";
import FlightCard from "@/components/FlightCard";
import BottomNav from "@/components/BottomNav";
import { flights } from "@/data/tripData";

const Flights = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="hero-gradient">
        <Header 
          title="Flight Tickets" 
          subtitle="All your flight details in one place" 
        />
      </div>

      <div className="px-4 space-y-4">
        {flights.map((flight, index) => (
          <div key={flight.id} style={{ animationDelay: `${index * 100}ms` }}>
            <FlightCard
              from={flight.from}
              fromCode={flight.fromCode}
              to={flight.to}
              toCode={flight.toCode}
              departureDate={flight.departureDate}
              departureTime={flight.departureTime}
              arrivalDate={flight.arrivalDate}
              arrivalTime={flight.arrivalTime}
              isReturn={flight.isReturn}
            />
          </div>
        ))}
      </div>

      {/* Flight Tips */}
      <div className="px-4 mt-6">
        <div className="glass-card rounded-xl p-4 border-l-4 border-secondary">
          <h3 className="font-semibold text-foreground mb-2">✈️ Travel Tips</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Arrive 3 hours early for international flights</li>
            <li>• Keep passport and e-visa handy</li>
            <li>• Download offline maps for each city</li>
          </ul>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Flights;
