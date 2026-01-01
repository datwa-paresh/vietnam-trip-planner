import { MapPin } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="pt-12 pb-6 px-4">
      <div className="flex items-center gap-2 mb-1">
        <MapPin className="w-4 h-4 text-accent" />
        <span className="text-sm font-medium text-accent">Vietnam 2026</span>
      </div>
      <h1 className="text-2xl font-display font-bold text-foreground">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
      )}
    </header>
  );
};

export default Header;
