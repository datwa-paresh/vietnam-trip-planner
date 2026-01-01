import { useRef } from "react";
import Header from "@/components/Header";
import DayCard from "@/components/DayCard";
import BottomNav from "@/components/BottomNav";
import { itinerary } from "@/data/tripData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Calculate which day is "today" based on current date (for demo, day 1)
  const today = 1;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="hero-gradient">
        <Header 
          title="Trip Itinerary" 
          subtitle="10 days of adventure awaits" 
        />
      </div>

      {/* Trip Overview */}
      <div className="px-4 mb-6">
        <div className="glass-card rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Trip Duration</p>
            <p className="font-semibold text-foreground">Jan 3 - 12, 2025</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-xs text-muted-foreground">Destinations</p>
            <p className="font-semibold text-foreground">3 Cities</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-xs text-muted-foreground">Travelers</p>
            <p className="font-semibold text-foreground">4 People</p>
          </div>
        </div>
      </div>

      {/* Day Cards Slider */}
      <div className="relative">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="font-display text-lg font-semibold text-foreground">Day by Day</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {itinerary.map((day) => (
            <DayCard
              key={day.day}
              day={day.day}
              date={day.date}
              location={day.location}
              activities={day.activities}
              isToday={day.day === today}
              bestPhotoSpots={day.bestPhotoSpots}
              recommendedRestaurants={day.recommendedRestaurants}
            />
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 mt-6">
        <h2 className="font-display text-lg font-semibold text-foreground mb-3">Cities to Visit</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { city: "Hanoi", days: "3 nights", emoji: "🏛️" },
            { city: "Da Nang", days: "3 nights", emoji: "🏖️" },
            { city: "Ho Chi Minh", days: "2 nights", emoji: "🌃" },
          ].map((item) => (
            <div key={item.city} className="glass-card rounded-xl p-3 text-center">
              <span className="text-2xl mb-1 block">{item.emoji}</span>
              <h3 className="font-medium text-sm text-foreground">{item.city}</h3>
              <p className="text-xs text-muted-foreground">{item.days}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
