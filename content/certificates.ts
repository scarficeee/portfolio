import type { Localized } from "./types";

export type CertificateGroup = "marketing" | "data" | "language" | "travel";
export type CertificateRecord = {
  id: string;
  title: Localized;
  issuer: string;
  group: CertificateGroup;
  date?: Localized;
  image?: string;
  kind?: Localized;
};

const label = (en: string, id = en): Localized => ({ en, id });

export const certificates: CertificateRecord[] = [
  {
    id: "ef-set-c1",
    title: label("EF SET English Certificate · C1 Advanced", "Sertifikat Bahasa Inggris EF SET · C1 Advanced"),
    issuer: "EF SET",
    group: "language",
    date: label("Issued Mar 2025 · Score 80/100", "Terbit Mar 2025 · Skor 80/100"),
    image: "/media/certificates/english-certificate.webp",
  },
  {
    id: "hubspot-social-media",
    title: label("Social Media Marketing"),
    issuer: "HubSpot Academy",
    group: "marketing",
    date: label("Issued Jan 2025 · Valid through Feb 2027", "Terbit Jan 2025 · Berlaku hingga Feb 2027"),
  },
  {
    id: "hubspot-digital-advertising",
    title: label("Digital Advertising Certified"),
    issuer: "HubSpot Academy",
    group: "marketing",
    date: label("Issued Jan 2025 · Valid through Feb 2026", "Terbit Jan 2025 · Berlaku hingga Feb 2026"),
  },
  {
    id: "hubspot-expert-digital-marketing",
    title: label("Expert Digital Marketing"),
    issuer: "HubSpot Academy",
    group: "marketing",
    date: label("Issued Jan 2025 · Valid through Feb 2026", "Terbit Jan 2025 · Berlaku hingga Feb 2026"),
  },
  {
    id: "semrush-seo",
    title: label("Semrush SEO Crash Course with Brian Dean", "Semrush SEO Crash Course bersama Brian Dean"),
    issuer: "Semrush Academy",
    group: "marketing",
    date: label("Issued Jan 2025 · Valid through Jan 2026", "Terbit Jan 2025 · Berlaku hingga Jan 2026"),
    image: "/media/certificates/SEMRush-Seo.webp",
  },
  {
    id: "dqlab-python-fundamental",
    title: label("Python Fundamental for Data Science"),
    issuer: "DQLab",
    group: "data",
    date: label("Issued Nov 2024", "Terbit Nov 2024"),
    image: "/media/certificates/DQLab-Python-Data-Science.webp",
  },
  {
    id: "google-digital-marketing",
    title: label("Fundamentals of Digital Marketing", "Fundamental Digital Marketing"),
    issuer: "Google",
    group: "marketing",
    date: label("Issued Oct 2024", "Terbit Okt 2024"),
    image: "/media/certificates/Google-Fundamentals-Digital-Marketing.webp",
  },
  {
    id: "dqlab-python-ai",
    title: label("Guide Python with A.I"),
    issuer: "DQLab",
    group: "data",
    date: label("Issued Aug 2024 · Valid through Oct 2030", "Terbit Agu 2024 · Berlaku hingga Okt 2030"),
    image: "/media/certificates/DQLab-Python-With-Ai.webp",
  },
  {
    id: "nhi-digital-marketing-strategist",
    title: label("Digital Marketing Strategist"),
    issuer: "Sekolah Tinggi Pariwisata Bandung (NHI)",
    group: "marketing",
    date: label("Issued Oct 2024 · Valid through Oct 2030", "Terbit Okt 2024 · Berlaku hingga Okt 2030"),
    image: "/media/certificates/Digital-Marketing-Strategist.webp",
  },
  {
    id: "dqlab-data-science-python",
    title: label("Data Science with Python"),
    issuer: "DQLab",
    group: "data",
    date: label("Issued Aug 2024 · Valid through Sep 2030", "Terbit Agu 2024 · Berlaku hingga Sep 2030"),
    image: "/media/certificates/DQLab-Data-Science-Introduction.webp",
  },
  {
    id: "revou-digital-marketing",
    title: label("Digital Marketing"),
    issuer: "RevoU",
    group: "marketing",
    date: label("Issued Sep 2024 · Valid through Sep 2025", "Terbit Sep 2024 · Berlaku hingga Sep 2025"),
    image: "/media/certificates/RevoU-Digital-Marketing.webp",
  },
  {
    id: "savoy-manner",
    title: label("Fundamental Principles of Manner", "Prinsip Dasar Tata Krama"),
    issuer: "Hotel Savoy", group: "travel",
    date: label("Issued Mar 2022", "Terbit Mar 2022"),
  },
  {
    id: "adventure-digital-reservation",
    title: label("Digital Reservation", "Reservasi Digital"),
    issuer: "Adventure Travel Group", group: "travel",
    date: label("Issued Dec 2023 · Valid through Oct 2030", "Terbit Des 2023 · Berlaku hingga Okt 2030"),
    image: "/media/certificates/Reserver-Intern.webp",
  },
  {
    id: "hpi-tourism-guide",
    title: label("Tourism Guide", "Pemandu Wisata"),
    issuer: "Himpunan Pramuwisata Indonesia", group: "travel",
    date: label("Issued Apr 2024", "Terbit Apr 2024"),
  },
  {
    id: "hpi-hotel-arrangement",
    title: label("Hotel Arrangement Tourism", "Pengaturan Hotel Pariwisata"),
    issuer: "Himpunan Pramuwisata Indonesia", group: "travel",
    date: label("Issued Apr 2024", "Terbit Apr 2024"),
  },
  {
    id: "hpi-transfer-tourism",
    title: label("Transfer in Tourism", "Transfer dalam Pariwisata"),
    issuer: "Himpunan Pramuwisata Indonesia", group: "travel",
    date: label("Issued Apr 2024", "Terbit Apr 2024"),
  },
  {
    id: "travelport-galileo",
    title: label("Galileo Central System Agency Course", "Kursus Galileo Central System Agency"),
    issuer: "Travelport", group: "travel",
    date: label("Issued Apr 2024", "Terbit Apr 2024"),
  },
  {
    id: "zkjapanese-course",
    title: label("Japanese Language Course", "Kursus Bahasa Jepang"),
    issuer: "ZKJapanese",
    group: "language",
    date: label("6-month course", "Course 6 bulan"),
    kind: label("Course", "Kursus"),
  },
];

export const certificateGroups: Record<CertificateGroup, Localized> = {
  marketing: label("Digital marketing", "Digital marketing"),
  data: label("Data & analytics", "Data & analitik"),
  language: label("Language", "Bahasa"),
  travel: label("Travel & hospitality", "Travel & hospitality"),
};
