import Header from "@/components/Header";
import TravelerCard from "@/components/TravelerCard";
import BottomNav from "@/components/BottomNav";
import { travelers, documentTypes } from "@/data/tripData";

const Documents = () => {
  // For demo, showing different completion states
  const documentStatus = {
    paresh: 5,
    akash: 3,
    prerna: 5,
    navneeta: 4,
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="hero-gradient">
        <Header 
          title="Document Library" 
          subtitle="Manage travel documents for all travelers" 
        />
      </div>

      {/* Document Overview */}
      <div className="px-4 mb-6">
        <div className="glass-card rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Required Documents</p>
              <p className="font-semibold text-foreground">{documentTypes.length} per person</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Total Travelers</p>
              <p className="font-semibold text-foreground">{travelers.length} people</p>
            </div>
          </div>
        </div>
      </div>

      {/* Travelers List */}
      <div className="px-4">
        <h2 className="font-display text-lg font-semibold text-foreground mb-3">Select Traveler</h2>
        <div className="space-y-3">
          {travelers.map((traveler, index) => (
            <div key={traveler.id} style={{ animationDelay: `${index * 100}ms` }}>
              <TravelerCard
                name={traveler.name}
                id={traveler.id}
                documentsComplete={documentStatus[traveler.id as keyof typeof documentStatus]}
                totalDocuments={documentTypes.length}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Document Checklist */}
      <div className="px-4 mt-6">
        <h2 className="font-display text-lg font-semibold text-foreground mb-3">Required Documents</h2>
        <div className="glass-card rounded-xl p-4">
          <ul className="space-y-2">
            {documentTypes.map((doc) => (
              <li key={doc.id} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {doc.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Documents;
