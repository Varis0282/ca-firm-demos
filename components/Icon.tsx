import { FileText, Receipt, Building2, ShieldCheck, Users, Landmark, Stamp, TrendingUp, BadgeCheck, Clock, IndianRupee, Briefcase, Store, Factory, Stethoscope, Rocket, Building, Globe, LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { FileText, Receipt, Building2, ShieldCheck, Users, Landmark, Stamp, TrendingUp, BadgeCheck, Clock, IndianRupee, Briefcase, Store, Factory, Stethoscope, Rocket, Building, Globe };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? FileText;
  return <C className={className} />;
}
