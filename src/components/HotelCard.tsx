import { Building2, MapPin, Calendar, Users, Star, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface HotelCardProps {
  name: string;
  location: string;
  address?: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  rating?: number;
  type?: string;
  url?: string;
  image?: string;
}

const HotelCard = ({
  name,
  location,
  address,
  checkIn,
  checkOut,
  nights,
  guests,
  rating,
  type,
  url,
  image,
}: HotelCardProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={cn(
        "glass-card rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in",
        url && "cursor-pointer hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
      )}
      onClick={handleClick}
      role={url ? "button" : undefined}
      tabIndex={url ? 0 : undefined}
      onKeyDown={(e) => {
        if (url && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Hotel Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
          {url && (
            <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2">
              <ExternalLink className="w-4 h-4 text-foreground" />
            </div>
          )}
          {type && (
            <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              {type}
            </div>
          )}
        </div>
      )}

      {/* Hotel Info */}
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-display text-lg font-bold text-foreground mb-1">{name}</h3>
            <div className="flex items-start gap-1.5 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-sm">{location}</p>
                {address && (
                  <p className="text-xs mt-0.5 text-muted-foreground/80">{address}</p>
                )}
              </div>
            </div>
          </div>
          {rating && (
            <div className="flex items-center gap-1 bg-secondary/20 px-2.5 py-1 rounded-full ml-2 shrink-0">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-sm font-semibold text-foreground">{rating}</span>
            </div>
          )}
        </div>

        {/* Dates & Details */}
        <div className="space-y-3 pt-3 border-t border-border">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-xs">Check-in</span>
              </div>
              <p className="text-sm font-semibold text-foreground">{checkIn}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-xs">Check-out</span>
              </div>
              <p className="text-sm font-semibold text-foreground">{checkOut}</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm">{nights} {nights === 1 ? 'night' : 'nights'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm">{guests} {guests === 1 ? 'guest' : 'guests'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

