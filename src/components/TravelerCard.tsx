import { User, ChevronRight, FileCheck, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TravelerCardProps {
  name: string;
  id: string;
  documentsComplete: number;
  totalDocuments: number;
  url?: string;
  image?: string;
}

const TravelerCard = ({ name, id, documentsComplete, totalDocuments, url, image }: TravelerCardProps) => {
  const isComplete = documentsComplete === totalDocuments;
  
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-4 flex items-center gap-4 transition-all duration-300 animate-fade-in",
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
        {image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
            isComplete ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
          )}>
            <User className="w-6 h-6" />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="font-medium text-foreground">{name}</h3>
          <div className="flex items-center gap-1.5 mt-0.5">
            {isComplete ? (
              <>
                <FileCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs text-primary font-medium">All documents ready</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs text-muted-foreground">
                  {documentsComplete}/{totalDocuments} documents
                </span>
              </>
            )}
          </div>
        </div>
        
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>
  );
};

export default TravelerCard;
