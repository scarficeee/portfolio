import type { Localized } from "./types";
export const stack: {
  name: string;
  icon: string;
  category: Localized;
  note: Localized;
}[] = [
  {
    name: "Meta Ads",
    icon: "meta",
    category: { en: "Paid media", id: "Iklan berbayar" },
    note: {
      en: "Campaign setup, lead acquisition, and improvement.",
      id: "Penyiapan iklan, akuisisi calon pelanggan, dan perbaikan.",
    },
  },
  {
    name: "Google Ads",
    icon: "googleads",
    category: { en: "Search advertising", id: "Iklan pencarian" },
    note: {
      en: "Search campaigns, leads, and campaign optimization.",
      id: "Campaign pencarian, calon pelanggan, dan perbaikan iklan.",
    },
  },
  {
    name: "Google Analytics 4",
    icon: "googleanalytics",
    category: { en: "Analytics", id: "Analisis" },
    note: {
      en: "Understand website activity and what happens after a click.",
      id: "Memahami aktivitas website dan proses setelah klik.",
    },
  },
  {
    name: "Google Search Console",
    icon: "googlesearchconsole",
    category: { en: "SEO", id: "SEO" },
    note: {
      en: "Review search visibility, queries, and organic performance.",
      id: "Melihat visibilitas, kata pencarian, dan performa organik.",
    },
  },
  {
    name: "HTML",
    icon: "html5",
    category: { en: "Web structure", id: "Struktur web" },
    note: {
      en: "Build clear, accessible page structure.",
      id: "Membuat struktur halaman yang jelas dan mudah diakses.",
    },
  },
  {
    name: "CSS",
    icon: "css",
    category: { en: "Web presentation", id: "Tampilan web" },
    note: {
      en: "Responsive layouts, visual details, and interaction.",
      id: "Tata letak responsif, detail visual, dan interaksi.",
    },
  },
  {
    name: "JavaScript",
    icon: "javascript",
    category: { en: "Web interaction", id: "Interaksi web" },
    note: {
      en: "Connect page behavior with useful interactions.",
      id: "Membuat halaman lebih interaktif dan berguna.",
    },
  },
  {
    name: "Python",
    icon: "python",
    category: { en: "Data", id: "Data" },
    note: {
      en: "Prepare and explore data for practical analysis.",
      id: "Menyiapkan dan membaca data untuk kebutuhan analisis.",
    },
  },
  {
    name: "Canva",
    icon: "canva",
    category: { en: "Creative support", id: "Dukungan kreatif" },
    note: {
      en: "Prepare campaign visuals and everyday content.",
      id: "Menyiapkan visual campaign dan konten sehari-hari.",
    },
  },
];
