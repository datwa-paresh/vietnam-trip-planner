import { User, ChevronRight, FileCheck, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TravelerCardProps {
  name: string;
  id: string;
  documentsComplete: number;
  totalDocuments: number;
}

const TravelerCard = ({ name, id, documentsComplete, totalDocuments }: TravelerCardProps) => {
  const isComplete = documentsComplete === totalDocuments;
  
  return (
    <Link to={`/documents/${id}`}>
      <div className="glass-card rounded-xl p-4 flex items-center gap-4 hover:shadow-elevated transition-shadow duration-300 animate-fade-in">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          isComplete ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
        )}>
          <User className="w-6 h-6" />
        </div>
        
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
    </Link>
  );
};

export default TravelerCard;
