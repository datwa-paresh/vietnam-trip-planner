import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import DocumentItem from "@/components/DocumentItem";
import BottomNav from "@/components/BottomNav";
import { travelers, documentTypes } from "@/data/tripData";
import { toast } from "@/hooks/use-toast";

const TravelerDocuments = () => {
  const { id } = useParams<{ id: string }>();
  const traveler = travelers.find((t) => t.id === id);

  if (!traveler) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Traveler not found</p>
      </div>
    );
  }

  // Demo status for documents
  const uploadedDocs: { [key: string]: string[] } = {
    paresh: ["aadhar", "pan", "passport", "insurance", "evisa"],
    akash: ["aadhar", "passport", "insurance"],
    prerna: ["aadhar", "pan", "passport", "insurance", "evisa"],
    navneeta: ["aadhar", "pan", "passport", "insurance"],
  };

  const handleDocumentClick = (docTitle: string, isUploaded: boolean) => {
    if (isUploaded) {
      toast({
        title: "Document Uploaded",
        description: `${docTitle} is already uploaded for ${traveler.name}`,
      });
    } else {
      toast({
        title: "Upload Document",
        description: `Upload ${docTitle} for ${traveler.name}`,
        variant: "default",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="pt-12 pb-6 px-4">
        <Link 
          to="/documents" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Documents</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground">{traveler.name}</h1>
            <p className="text-sm text-muted-foreground">
              {uploadedDocs[traveler.id]?.length || 0}/{documentTypes.length} documents uploaded
            </p>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-4 mb-6">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ 
              width: `${((uploadedDocs[traveler.id]?.length || 0) / documentTypes.length) * 100}%` 
            }}
          />
        </div>
      </div>

      {/* Documents List */}
      <div className="px-4 space-y-3">
        {documentTypes.map((doc, index) => {
          const isUploaded = uploadedDocs[traveler.id]?.includes(doc.id);
          return (
            <div key={doc.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
              <DocumentItem
                title={doc.title}
                status={isUploaded ? "uploaded" : "pending"}
                onClick={() => handleDocumentClick(doc.title, isUploaded)}
              />
            </div>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
};

export default TravelerDocuments;
