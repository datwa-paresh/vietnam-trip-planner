import { FileText, CheckCircle2, Upload, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocumentItemProps {
  title: string;
  status: "uploaded" | "pending";
  onClick?: () => void;
}

const DocumentItem = ({ title, status, onClick }: DocumentItemProps) => {
  const isUploaded = status === "uploaded";

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full glass-card rounded-xl p-4 flex items-center gap-4 text-left transition-all duration-300",
        "hover:shadow-elevated active:scale-[0.98]",
        isUploaded && "border-primary/30 bg-primary/5"
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center",
        isUploaded ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
      )}>
        <FileText className="w-5 h-5" />
      </div>
      
      <div className="flex-1">
        <h4 className="font-medium text-foreground">{title}</h4>
        <span className={cn(
          "text-xs",
          isUploaded ? "text-primary" : "text-muted-foreground"
        )}>
          {isUploaded ? "Document uploaded" : "Tap to upload"}
        </span>
      </div>
      
      {isUploaded ? (
        <CheckCircle2 className="w-5 h-5 text-primary" />
      ) : (
        <Upload className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
};

export default DocumentItem;
