import { Plane, ArrowRight, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlightCardProps {
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  departureDate: string;
  departureTime: string;
  arrivalDate?: string;
  arrivalTime: string;
  isReturn?: boolean;
}

const FlightCard = ({
  from,
  fromCode,
  to,
  toCode,
  departureDate,
  departureTime,
  arrivalDate,
  arrivalTime,
  isReturn,
}: FlightCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-2xl p-5 animate-fade-in",
      isReturn && "border-accent/30 bg-accent/5"
    )}>
      {/* Flight Route */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-center">
          <span className="text-2xl font-display font-bold text-foreground">{fromCode}</span>
          <p className="text-xs text-muted-foreground mt-0.5">{from}</p>
        </div>
        
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="flex-1 h-px bg-border" />
          <div className={cn(
            "mx-3 p-2 rounded-full",
            isReturn ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
          )}>
            <Plane className={cn("w-4 h-4", isReturn && "rotate-180")} />
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="text-center">
          <span className="text-2xl font-display font-bold text-foreground">{toCode}</span>
          <p className="text-xs text-muted-foreground mt-0.5">{to}</p>
        </div>
      </div>

      {/* Flight Times */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-xs">{departureDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">{departureTime}</span>
          </div>
        </div>
        
        <ArrowRight className="w-5 h-5 text-muted-foreground" />
        
        <div className="text-right">
          {arrivalDate && (
            <div className="flex items-center justify-end gap-1.5 text-muted-foreground mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-xs">{arrivalDate}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 justify-end">
            <span className="font-semibold text-foreground">{arrivalTime}</span>
            <Clock className="w-4 h-4 text-accent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
