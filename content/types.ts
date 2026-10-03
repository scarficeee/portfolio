export type Locale = "en" | "id";
export type Localized = { en: string; id: string };
export type Metric = {
  value: string;
  label: "awareness" | "leads" | "organic" | "bookings" | "engagement" | "sales";
  evidenceId?: string;
};
export type Document = {
  id: string;
  image?: string;
  images?: string[];
  file?: string;
  alt: Localized;
  category: Localized;
  title: Localized;
  caption: Localized;
  period?: string;
  source?: string;
  featured?: boolean;
  orientation?: "portrait" | "landscape" | "square" | "dashboard" | "wide";
  fit?: "cover" | "contain";
  type?: "image" | "comparison" | "report";
  evidence?: boolean;
};
export type InsightValue = { value: string; label: Localized; note?: Localized };
export type InsightChart = {
  title: Localized;
  unit: Localized;
  note?: Localized;
  items: { label: Localized; value: number; display: Localized }[];
};
export type ProjectInsights = {
  title: Localized;
  intro: Localized;
  period?: Localized;
  snapshots?: InsightValue[];
  charts?: InsightChart[];
  journey?: {
    title: Localized;
    steps: { label: Localized; detail: Localized }[];
  };
};
export type ProjectComparison = {
  title: Localized;
  beforeLabel: Localized;
  afterLabel: Localized;
  note: Localized;
  metrics: {
    label: Localized;
    before: number | null;
    beforeDisplay: Localized;
    after: number;
    afterDisplay: Localized;
  }[];
};
export type Project = {
  slug: string;
  number: string;
  company: string;
  mediaFolder: string;
  industry: Localized;
  role: Localized | null;
  period: string | null;
  type: string | null;
  title: Localized;
  summary: Localized;
  context: Localized;
  responsibility: Localized | null;
  objective: Localized | null;
  strategy: Localized | null;
  execution: Localized | null;
  reflection: Localized | null;
  services: Localized[];
  index: { capabilities: Localized; output: Localized };
  metrics: Metric[];
  documentation: Document[];
  insights?: ProjectInsights;
  comparison?: ProjectComparison;
  documentationMeta?: Record<
    string,
    {
      alt?: Localized | string;
      category?: Localized | string;
      title?: Localized | string;
      caption?: Localized | string;
      featured?: boolean;
      orientation?: Document["orientation"];
      fit?: Document["fit"];
    }
  >;
};
