import { Calendar, MapPin, Plane, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  time: string;
  title: string;
  description: string;
  type: "flight" | "activity" | "hotel" | "food";
}

interface DayCardProps {
  day: number;
  date: string;
  location: string;
  activities: Activity[];
  isToday?: boolean;
}

const activityIcons = {
  flight: Plane,
  activity: MapPin,
  hotel: MapPin,
  food: MapPin,
};

const activityColors = {
  flight: "bg-primary/10 text-primary border-primary/20",
  activity: "bg-secondary/10 text-secondary border-secondary/20",
  hotel: "bg-accent/10 text-accent border-accent/20",
  food: "bg-muted text-muted-foreground border-muted",
};

const DayCard = ({ day, date, location, activities, isToday }: DayCardProps) => {
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

        {/* Activities */}
        <div className="space-y-3">
          {activities.map((activity, index) => {
            const Icon = activityIcons[activity.type];
            return (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3 p-3 rounded-xl border",
                  activityColors[activity.type]
                )}
              >
                <div className="mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Clock className="w-3 h-3 opacity-70" />
                    <span className="text-xs font-medium">{activity.time}</span>
                  </div>
                  <h4 className="font-medium text-sm">{activity.title}</h4>
                  <p className="text-xs opacity-80 mt-0.5">{activity.description}</p>
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
