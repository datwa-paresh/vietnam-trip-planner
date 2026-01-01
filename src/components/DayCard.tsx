import { Calendar, MapPin, Plane, Clock, Camera, Utensils, PartyPopper, Car, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import { Activity, ActivityType } from "@/data/tripData";

interface DayCardProps {
  day: number;
  date: string;
  location: string;
  activities: Activity[];
  isToday?: boolean;
  bestPhotoSpots?: string[];
  recommendedRestaurants?: string[];
}

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

const DayCard = ({ 
  day, 
  date, 
  location, 
  activities, 
  isToday,
  bestPhotoSpots,
  recommendedRestaurants 
}: DayCardProps) => {
  return (
    <div className={cn(
      "min-w-[85vw] snap-center px-2 first:pl-4 last:pr-4"
    )}>
      <div className={cn(
        "glass-card rounded-2xl p-5 h-full",
        isToday && "ring-2 ring-primary/50 pulse-glow"
      )}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={cn(
                "text-xs font-semibold px-2 py-0.5 rounded-full",
                isToday ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                Day {day}
              </span>
              {isToday && (
                <span className="text-xs font-medium text-primary">Today</span>
              )}
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{location}</h3>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{date}</span>
          </div>
        </div>

        {/* Photo Spots & Restaurant Tags */}
        {(bestPhotoSpots?.length || recommendedRestaurants?.length) && (
          <div className="mb-4 space-y-2">
            {bestPhotoSpots && bestPhotoSpots.length > 0 && (
              <div className="flex items-start gap-2">
                <Camera className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                <div className="flex flex-wrap gap-1">
                  {bestPhotoSpots.map((spot, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-pink-500/10 text-pink-600 px-2 py-0.5 rounded-full"
                    >
                      {spot}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {recommendedRestaurants && recommendedRestaurants.length > 0 && (
              <div className="flex items-start gap-2">
                <Utensils className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <div className="flex flex-wrap gap-1">
                  {recommendedRestaurants.map((rest, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-orange-500/10 text-orange-600 px-2 py-0.5 rounded-full"
                    >
                      {rest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Activities */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
          {activities.map((activity, index) => {
            const Icon = activityIcons[activity.type];
            return (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3 p-3 rounded-xl border relative",
                  activityColors[activity.type]
                )}
              >
                {/* Photo/Restaurant indicators */}
                <div className="absolute -top-1.5 -right-1.5 flex gap-0.5">
                  {activity.isPhotoSpot && (
                    <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center">
                      <Camera className="w-3 h-3 text-white" />
                    </span>
                  )}
                  {activity.isRestaurant && (
                    <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                      <Utensils className="w-3 h-3 text-white" />
                    </span>
                  )}
                </div>

                <div className="mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  {/* Time box */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className="inline-flex items-center gap-1 bg-background/50 px-2 py-0.5 rounded text-xs font-mono font-medium">
                      <Clock className="w-3 h-3" />
                      <span>{activity.time}</span>
                      {activity.endTime && (
                        <>
                          <span className="opacity-50">→</span>
                          <span>{activity.endTime}</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-sm">{activity.title}</h4>
                  <p className="text-xs opacity-80 mt-0.5">{activity.description}</p>
                  
                  {/* Photo tip */}
                  {activity.photoTip && (
                    <div className="mt-2 flex items-start gap-1.5 text-xs text-pink-600 bg-pink-500/5 p-2 rounded-lg">
                      <Camera className="w-3 h-3 mt-0.5 shrink-0" />
                      <span className="italic">{activity.photoTip}</span>
                    </div>
                  )}
                  
                  {/* Restaurant name */}
                  {activity.restaurantName && (
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-orange-600 bg-orange-500/5 p-2 rounded-lg">
                      <Utensils className="w-3 h-3 shrink-0" />
                      <span className="font-medium">{activity.restaurantName}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DayCard;
