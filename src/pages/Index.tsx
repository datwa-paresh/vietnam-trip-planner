import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import { itinerary } from "@/data/tripData";
import { Calendar, MapPin, Plane, Clock, Camera, Utensils, PartyPopper, Car, Building, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Activity, ActivityType } from "@/data/tripData";

const activityIcons: Record<ActivityType, React.ElementType> = {
  flight: Plane,
  activity: MapPin,
  hotel: Building,
  food: Utensils,
  photo: Camera,
  party: PartyPopper,
  transport: Car,
};

const activityColors: Record<ActivityType, string> = {
  flight: "bg-primary/10 text-primary border-primary/20",
  activity: "bg-secondary/10 text-secondary-foreground border-secondary/30",
  hotel: "bg-accent/10 text-accent-foreground border-accent/30",
  food: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  photo: "bg-pink-500/10 text-pink-600 border-pink-500/20",
  party: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  transport: "bg-slate-500/10 text-slate-600 border-slate-500/20",
};

const Index = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const currentItinerary = itinerary.find(day => day.day === selectedDay) || itinerary[0];

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Fixed Header with Trip Info */}
      <div className="flex-none border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground">Vietnam Adventure</h1>
              <p className="text-sm text-muted-foreground">January 3-12, 2025 • 10 Days</p>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">3 Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">4 Flights</span>
              </div>
            </div>
          </div>

          {/* Day Navigation - Horizontal Scrollable */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {itinerary.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-lg transition-all duration-200",
                  selectedDay === day.day
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:scale-102"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Day {day.day}</span>
                  <span className="text-xs opacity-75">{day.date}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          {/* Day Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{currentItinerary.date}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <h2 className="text-2xl font-display font-bold text-foreground">{currentItinerary.location}</h2>
            </div>

            {/* Photo Spots & Restaurants Overview */}
            {(currentItinerary.bestPhotoSpots?.length || currentItinerary.recommendedRestaurants?.length) && (
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {currentItinerary.bestPhotoSpots && currentItinerary.bestPhotoSpots.length > 0 && (
                  <div className="glass-card rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Camera className="w-5 h-5 text-pink-500" />
                      <h3 className="font-semibold text-foreground">Must-Photo Spots</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentItinerary.bestPhotoSpots.map((spot, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-pink-500/10 text-pink-600 px-3 py-1.5 rounded-full border border-pink-500/20"
                        >
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {currentItinerary.recommendedRestaurants && currentItinerary.recommendedRestaurants.length > 0 && (
                  <div className="glass-card rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Utensils className="w-5 h-5 text-orange-500" />
                      <h3 className="font-semibold text-foreground">Recommended Dining</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentItinerary.recommendedRestaurants.map((rest, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-orange-500/10 text-orange-600 px-3 py-1.5 rounded-full border border-orange-500/20"
                        >
                          {rest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Activities Timeline */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground mb-4">Today's Schedule</h3>
            {currentItinerary.activities.map((activity, index) => {
              const Icon = activityIcons[activity.type];
              return (
                <div
                  key={index}
                  className={cn(
                    "glass-card rounded-xl p-4 border-l-4 transition-all duration-200 hover:shadow-lg animate-fade-in",
                    activityColors[activity.type]
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        activityColors[activity.type]
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Time */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="inline-flex items-center gap-1.5 bg-background/70 px-3 py-1 rounded-full text-sm font-mono font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{activity.time}</span>
                          {activity.endTime && (
                            <>
                              <span className="opacity-50 mx-0.5">→</span>
                              <span>{activity.endTime}</span>
                            </>
                          )}
                        </div>
                        
                        {/* Badges */}
                        <div className="flex gap-1.5">
                          {activity.isPhotoSpot && (
                            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-pink-500 text-white text-xs">
                              <Camera className="w-3 h-3" />
                              <span>Photo Op</span>
                            </span>
                          )}
                          {activity.isRestaurant && (
                            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500 text-white text-xs">
                              <Utensils className="w-3 h-3" />
                              <span>Dining</span>
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Title & Description */}
                      <h4 className="font-semibold text-foreground text-base mb-1">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                      
                      {/* Photo Tip */}
                      {activity.photoTip && (
                        <div className="mt-3 flex items-start gap-2 text-sm text-pink-600 bg-pink-500/5 p-3 rounded-lg border border-pink-500/10">
                          <Camera className="w-4 h-4 mt-0.5 shrink-0" />
                          <span className="italic">{activity.photoTip}</span>
                        </div>
                      )}
                      
                      {/* Restaurant Name */}
                      {activity.restaurantName && (
                        <div className="mt-3 flex items-center gap-2 text-sm text-orange-600 bg-orange-500/5 p-3 rounded-lg border border-orange-500/10">
                          <Utensils className="w-4 h-4 shrink-0" />
                          <span className="font-medium">{activity.restaurantName}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Padding for BottomNav */}
          <div className="h-24"></div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
