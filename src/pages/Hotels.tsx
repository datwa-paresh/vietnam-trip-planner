import Header from "@/components/Header";
import HotelCard from "@/components/HotelCard";
import BottomNav from "@/components/BottomNav";
import { hotels } from "@/data/tripData";
import { Building2, Calendar, MapPin } from "lucide-react";

const Hotels = () => {
  // Calculate total nights
  const totalNights = hotels.reduce((sum, hotel) => sum + hotel.nights, 0);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="hero-gradient">
        <Header 
          title="Hotels & Stay" 
          subtitle="Your accommodations for the trip" 
        />
      </div>

      {/* Trip Overview */}
      <div className="px-4 mb-6">
        <div className="glass-card rounded-2xl p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
                <Building2 className="w-4 h-4" />
              </div>
              <p className="text-xs text-muted-foreground">Total Hotels</p>
              <p className="font-semibold text-foreground text-lg">{hotels.length}</p>
            </div>
            <div className="text-center border-l border-r border-border">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
                <Calendar className="w-4 h-4" />
              </div>
              <p className="text-xs text-muted-foreground">Total Nights</p>
              <p className="font-semibold text-foreground text-lg">{totalNights}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-xs text-muted-foreground">Cities</p>
              <p className="font-semibold text-foreground text-lg">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hotels List */}
      <div className="px-4 space-y-4">
        {hotels.map((hotel, index) => (
          <div key={hotel.id} style={{ animationDelay: `${index * 100}ms` }}>
            <HotelCard
              name={hotel.name}
              location={hotel.location}
              address={hotel.address}
              checkIn={hotel.checkIn}
              checkOut={hotel.checkOut}
              nights={hotel.nights}
              guests={hotel.guests}
              rating={hotel.rating}
              type={hotel.type}
              url={hotel.url}
              image={hotel.image}
            />
          </div>
        ))}
      </div>

      {/* Travel Tips */}
      <div className="px-4 mt-6">
        <div className="glass-card rounded-xl p-4 border-l-4 border-primary">
          <h3 className="font-semibold text-foreground mb-2">🏨 Hotel Tips</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Keep booking confirmations readily accessible</li>
            <li>• Check-in time is usually 2 PM, check-out at 12 PM</li>
            <li>• Inform hotels about late arrival if needed</li>
            <li>• Request early check-in when booking if arriving early</li>
          </ul>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Hotels;

