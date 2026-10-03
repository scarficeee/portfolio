import type { Project } from "./types";
// Current dates and facts confirmed by the portfolio owner. Public-safe media only.
const documentationMeta = {
  japanect: {
    "japanect 1.webp": { title: { en: "Japan Travel Social Channel", id: "Kanal Sosial Wisata Jepang" }, category: { en: "Social media", id: "Media sosial" }, alt: { en: "Japanalives travel information Instagram profile", id: "Profil Instagram Japanalives untuk informasi perjalanan" }, caption: { en: "A channel built around practical Japan travel information and destination discovery.", id: "Kanal yang berfokus pada informasi praktis dan inspirasi destinasi Jepang." }, featured: true, fit: "contain" as const },
    "japanect pict.webp": { title: { en: "Team Collaboration", id: "Kolaborasi Tim" }, category: { en: "Team", id: "Tim" }, alt: { en: "Japanect colleagues together", id: "Rekan kerja Japanect bersama" }, caption: { en: "A team moment from the travel and operations work behind the customer experience.", id: "Momen tim dari pekerjaan travel dan operasional di balik pengalaman pelanggan." }, fit: "cover" as const },
    "japanect pict 3.webp": { title: { en: "Partner Planning Session", id: "Sesi Perencanaan Bersama Partner" }, category: { en: "Operations", id: "Operasional" }, alt: { en: "Colleagues in a business meeting", id: "Rekan kerja dalam pertemuan bisnis" }, caption: { en: "Coordination and discussion support the handoff between marketing and tour operations.", id: "Koordinasi dan diskusi membantu menghubungkan pemasaran dengan operasional tur." }, featured: true, fit: "cover" as const },
    "japanect pict 4.webp": { title: { en: "Japan Destination Campaign", id: "Campaign Destinasi Jepang" }, category: { en: "Campaign creative", id: "Materi campaign" }, alt: { en: "Japanese destination photo-spots campaign artwork", id: "Materi campaign spot foto destinasi Jepang" }, caption: { en: "A destination-led social creative designed to spark interest in travel planning.", id: "Materi sosial berbasis destinasi untuk membangun minat merencanakan perjalanan." }, featured: true, fit: "cover" as const },
    "japanect pict 5.webp": { title: { en: "Team Culture", id: "Kebersamaan Tim" }, category: { en: "Team", id: "Tim" }, alt: { en: "Japanect team sharing a meal", id: "Tim Japanect sedang makan bersama" }, caption: { en: "A candid team moment from the people behind the travel experience.", id: "Momen kebersamaan tim di balik pengalaman perjalanan." }, fit: "cover" as const },
    "japanect pict 6.webp": { title: { en: "Working Together", id: "Bekerja Bersama" }, category: { en: "Team", id: "Tim" }, alt: { en: "Japanect colleagues together", id: "Rekan kerja Japanect bersama" }, caption: { en: "A behind-the-scenes look at the team supporting day-to-day work.", id: "Sekilas suasana tim yang mendukung pekerjaan sehari-hari." }, fit: "cover" as const },
    "japanect pict 7.png": { title: { en: "Japan Travel Website", id: "Website Wisata Jepang" }, category: { en: "Website", id: "Website" }, alt: { en: "J-Trip Japan travel website homepage", id: "Halaman utama website wisata J-Trip Jepang" }, caption: { en: "The landing page introduces Japan travel services and gives visitors a clear starting point to explore.", id: "Halaman utama memperkenalkan layanan wisata Jepang dan memberi pengunjung awal yang jelas untuk menjelajah." }, featured: true, fit: "contain" as const },
    "japanect pict 8.png": { title: { en: "Travel Editorial Library", id: "Kumpulan Artikel Wisata" }, category: { en: "Content strategy", id: "Strategi konten" }, alt: { en: "J-Trip latest Japan travel articles page", id: "Halaman artikel terbaru wisata Jepang J-Trip" }, caption: { en: "An editorial hub organizes destination articles to support discovery and trip research.", id: "Pusat artikel mengatur konten destinasi untuk membantu pengunjung mencari inspirasi dan informasi perjalanan." }, featured: true, fit: "contain" as const },
    "japanect pict 9.webp": { title: { en: "Social Content Calendar", id: "Kalender Konten Sosial" }, category: { en: "Content planning", id: "Perencanaan konten" }, alt: { en: "Scheduled Japan travel social posts", id: "Jadwal unggahan sosial tentang perjalanan Jepang" }, caption: { en: "A publishing schedule helps coordinate travel topics and keep channel activity organized.", id: "Jadwal publikasi membantu mengatur topik perjalanan dan menjaga aktivitas kanal tetap terencana." }, featured: true, fit: "contain" as const },
    "japanect pict 10.webp": { title: { en: "Campaign Tracking", id: "Pemantauan Campaign" }, category: { en: "Analytics", id: "Analisis" }, alt: { en: "Marketing goals and results tracking sheet", id: "Lembar pemantauan target dan hasil pemasaran" }, caption: { en: "A working scorecard brings campaign goals and progress into one review view.", id: "Lembar kerja ini menyatukan target campaign dan progres dalam satu tampilan evaluasi." }, fit: "contain" as const },
    "japanect-campaign-review.webp": { title: { en: "Paid Campaign Review", id: "Evaluasi Campaign Berbayar" }, category: { en: "Paid media", id: "Iklan berbayar" }, alt: { en: "Meta Ads engagement campaign review", id: "Evaluasi campaign engagement Meta Ads" }, caption: { en: "Campaign reporting supports a closer review of audience, creative and engagement activity.", id: "Pelaporan campaign membantu meninjau audiens, materi kreatif, dan aktivitas engagement." }, fit: "contain" as const },
  },
  jup: {
    "jayautamaperkasa-1.webp": { title: { en: "Paid Media Performance", id: "Performa Iklan Berbayar" }, category: { en: "Paid media", id: "Iklan berbayar" }, alt: { en: "Meta Ads campaign performance chart", id: "Grafik performa campaign Meta Ads" }, caption: { en: "A campaign view for monitoring delivery and reviewing paid acquisition activity.", id: "Tampilan campaign untuk memantau penayangan dan mengevaluasi aktivitas akuisisi berbayar." }, featured: true, fit: "contain" as const },
    "jayautamaperkasa-2.webp": { title: { en: "Campaign Results Report", id: "Laporan Hasil Campaign" }, category: { en: "Paid media", id: "Iklan berbayar" }, alt: { en: "Paid campaign results table", id: "Tabel hasil campaign berbayar" }, caption: { en: "A reporting snapshot used to review campaign delivery and outcomes.", id: "Cuplikan laporan untuk meninjau penayangan dan hasil campaign." }, fit: "contain" as const },
    "jayautamaperkasa-3.webp": { title: { en: "Content Performance Overview", id: "Ringkasan Performa Konten" }, category: { en: "Social analytics", id: "Analisis sosial" }, alt: { en: "Social media content analytics overview", id: "Ringkasan analitik konten media sosial" }, caption: { en: "A channel-level view helps assess how published content is performing.", id: "Tampilan tingkat kanal membantu mengevaluasi performa konten yang dipublikasikan." }, featured: true, fit: "contain" as const },
    "jayautamaperkasa-4.webp": { title: { en: "Lead Activity Review", id: "Evaluasi Aktivitas Calon Pelanggan" }, category: { en: "Lead generation", id: "Akuisisi calon pelanggan" }, alt: { en: "Marketing lead activity summary", id: "Ringkasan aktivitas calon pelanggan dari pemasaran" }, caption: { en: "A summary view for following up on inquiry and lead-generation activity.", id: "Ringkasan untuk menindaklanjuti pertanyaan dan aktivitas akuisisi calon pelanggan." }, fit: "contain" as const },
    "jayautamaperkasa-5.webp": { title: { en: "Top Content Review", id: "Evaluasi Konten Teratas" }, category: { en: "Content analytics", id: "Analisis konten" }, alt: { en: "Top-performing content analytics", id: "Analitik konten dengan performa tertinggi" }, caption: { en: "Content-level reporting helps identify which posts draw audience attention.", id: "Pelaporan per konten membantu melihat unggahan yang menarik perhatian audiens." }, fit: "contain" as const },
    "jayautamaperkasa-7.webp": { title: { en: "Brand Social Channel", id: "Kanal Sosial Brand" }, category: { en: "Social media", id: "Media sosial" }, alt: { en: "Jaya Utama Perkasa social media profile and product posts", id: "Profil media sosial Jaya Utama Perkasa dan unggahan produk" }, caption: { en: "A social storefront presents the company's knitting and product work to customers.", id: "Etalase sosial memperkenalkan produk rajut dan pekerjaan perusahaan kepada pelanggan." }, fit: "contain" as const },
    "jayautamaperkasa-8.webp": { title: { en: "Company Website", id: "Website Perusahaan" }, category: { en: "Website", id: "Website" }, alt: { en: "Jaya Utama Perkasa website homepage", id: "Halaman utama website Jaya Utama Perkasa" }, caption: { en: "A business website designed to introduce the company and guide visitors to its services.", id: "Website bisnis untuk memperkenalkan perusahaan dan mengarahkan pengunjung ke layanannya." }, featured: true, fit: "contain" as const },
    "jayautamaperkasa-9.webp": { title: { en: "From Brief to Finished Knitwear", id: "Dari Brief hingga Produk Rajut" }, category: { en: "Customer journey", id: "Perjalanan pelanggan" }, alt: { en: "Knitting production process from consultation through quality check", id: "Proses produksi rajut dari konsultasi hingga pemeriksaan kualitas" }, caption: { en: "A visual process guide explains consultation, design, sampling, approval, production and quality checks.", id: "Panduan visual ini menjelaskan konsultasi, desain, sampel, persetujuan, produksi, dan pemeriksaan kualitas." }, featured: true, fit: "contain" as const },
    "jayautamaperkasa-10.webp": { title: { en: "Front-End Website Development", id: "Pengembangan Front-End Website" }, category: { en: "Web development", id: "Pengembangan web" }, alt: { en: "Website interface and front-end code in an editor", id: "Antarmuka website dan kode front-end di editor" }, caption: { en: "A development snapshot showing hands-on work with the website's front-end structure.", id: "Cuplikan pengembangan yang menunjukkan pengerjaan langsung pada struktur front-end website." }, featured: true, fit: "contain" as const },
    "jayautamaperkasa-11.webp": { title: { en: "SEO Competitive Landscape", id: "Peta Persaingan SEO" }, category: { en: "SEO research", id: "Riset SEO" }, alt: { en: "SEO keyword and competitor positioning map", id: "Peta posisi kata kunci dan kompetitor SEO" }, caption: { en: "Search research maps keyword opportunities and competitor positioning to inform SEO priorities.", id: "Riset pencarian memetakan peluang kata kunci dan posisi kompetitor untuk membantu menentukan prioritas SEO." }, featured: true, fit: "contain" as const },
    "jayautamaperkasa-12.webp": { title: { en: "Backlink Profile Review", id: "Evaluasi Profil Backlink" }, category: { en: "SEO research", id: "Riset SEO" }, alt: { en: "SEO backlink profile report", id: "Laporan profil backlink SEO" }, caption: { en: "A link-profile snapshot supports off-page SEO review and research.", id: "Cuplikan profil tautan untuk mendukung evaluasi dan riset SEO off-page." }, fit: "contain" as const },
    "jayautamaperkasa-13.webp": { title: { en: "Organic Search Baseline", id: "Baseline Pencarian Organik" }, category: { en: "SEO analytics", id: "Analisis SEO" }, alt: { en: "Search analytics overview for organic visibility", id: "Ringkasan analitik pencarian untuk visibilitas organik" }, caption: { en: "A search visibility snapshot used to understand the site's organic starting point and areas for improvement.", id: "Cuplikan visibilitas pencarian untuk memahami kondisi awal organik website dan area yang perlu ditingkatkan." }, fit: "contain" as const },
    "jayautamaperkasa-14.webp": { title: { en: "Website Traffic by Page", id: "Trafik Website per Halaman" }, category: { en: "Web analytics", id: "Analisis web" }, alt: { en: "Google Analytics page-view report", id: "Laporan tampilan halaman Google Analytics" }, caption: { en: "Page-level analytics helps show which areas of the website visitors use.", id: "Analitik per halaman membantu melihat bagian website yang digunakan pengunjung." }, fit: "contain" as const },
    "jayautamaperkasa-15.webp": { title: { en: "Audience and Acquisition", id: "Audiens dan Akuisisi" }, category: { en: "Web analytics", id: "Analisis web" }, alt: { en: "Google Analytics users and acquisition report", id: "Laporan pengguna dan akuisisi Google Analytics" }, caption: { en: "Audience, location and acquisition views help frame how visitors reach the site.", id: "Tampilan audiens, lokasi, dan akuisisi membantu memahami cara pengunjung menemukan website." }, fit: "contain" as const },
    "jayautamaperkasa-16.webp": { title: { en: "Analytics Reporting Snapshot", id: "Cuplikan Laporan Analitik" }, category: { en: "Web analytics", id: "Analisis web" }, alt: { en: "Google Analytics website performance summary", id: "Ringkasan performa website Google Analytics" }, caption: { en: "A reporting snapshot brings core website activity into one place for review.", id: "Cuplikan laporan yang merangkum aktivitas utama website untuk dievaluasi." }, fit: "contain" as const },
    "jayautamaperkasa-17.webp": { title: { en: "Traffic and Device Mix", id: "Sumber Trafik dan Perangkat" }, category: { en: "Web analytics", id: "Analisis web" }, alt: { en: "Analytics report by device and acquisition channel", id: "Laporan analitik berdasarkan perangkat dan kanal akuisisi" }, caption: { en: "Device and channel breakdowns help inform website and campaign decisions.", id: "Rincian perangkat dan kanal membantu mengarahkan keputusan website dan campaign." }, featured: true, fit: "contain" as const },
    "jayautamaperkasa-18.webp": { title: { en: "A Clear Production Journey", id: "Alur Produksi yang Jelas" }, category: { en: "Customer experience", id: "Pengalaman pelanggan" }, alt: { en: "Knitting service workflow infographic", id: "Infografik alur layanan rajut" }, caption: { en: "A step-by-step workflow sets expectations from the first discussion to quality review.", id: "Alur bertahap menjelaskan proses sejak diskusi awal hingga pemeriksaan kualitas." }, fit: "contain" as const },
    "jayautamaperkasa-19.webp": { title: { en: "Organic Search Trend", id: "Tren Pencarian Organik" }, category: { en: "SEO analytics", id: "Analisis SEO" }, alt: { en: "Search visibility trend chart", id: "Grafik tren visibilitas pencarian" }, caption: { en: "A trend view gives context for tracking organic search visibility over time.", id: "Tampilan tren memberi konteks untuk memantau visibilitas pencarian organik dari waktu ke waktu." }, fit: "contain" as const },
    "jayautamaperkasa-20.webp": { title: { en: "Production Team", id: "Tim Produksi" }, category: { en: "Team", id: "Tim" }, alt: { en: "Jaya Utama Perkasa production team", id: "Tim produksi Jaya Utama Perkasa" }, caption: { en: "The people behind the production process and finished products.", id: "Orang-orang di balik proses produksi dan produk akhir." }, fit: "cover" as const },
  },
  casadela: {
    "casadela-1.webp": { title: { en: "Hospitality Brand Channel", id: "Kanal Brand Hospitality" }, category: { en: "Social media", id: "Media sosial" }, alt: { en: "Casadela Canggu Instagram profile and property content", id: "Profil Instagram Casadela Canggu dan konten properti" }, caption: { en: "A visual social channel introduces the property and sets the tone for guest discovery.", id: "Kanal sosial visual memperkenalkan properti dan membangun kesan awal bagi calon tamu." }, featured: true, fit: "contain" as const },
    "casadela-2.webp": { title: { en: "Content Reach Overview", id: "Ringkasan Jangkauan Konten" }, category: { en: "Social analytics", id: "Analisis sosial" }, alt: { en: "Instagram content reach and views overview", id: "Ringkasan jangkauan dan tayangan konten Instagram" }, caption: { en: "Channel insights provide a snapshot for reviewing content visibility and audience response.", id: "Insight kanal memberi gambaran untuk mengevaluasi visibilitas konten dan respons audiens." }, featured: true, fit: "contain" as const },
    "casadela-3.webp": { title: { en: "Post-Level Content Review", id: "Evaluasi Konten per Unggahan" }, category: { en: "Content analytics", id: "Analisis konten" }, alt: { en: "Instagram post performance table", id: "Tabel performa unggahan Instagram" }, caption: { en: "Post-level reporting helps compare individual content and guide future planning.", id: "Pelaporan per unggahan membantu membandingkan konten dan mengarahkan perencanaan berikutnya." }, fit: "contain" as const },
    "casadela-4.webp": { title: { en: "Hospitality Content Direction", id: "Arahan Konten Hospitality" }, category: { en: "Creative development", id: "Pengembangan kreatif" }, alt: { en: "Hospitality content and design workspace", id: "Workspace desain dan konten hospitality" }, caption: { en: "A creative workspace for developing property and stay-focused social content.", id: "Workspace kreatif untuk mengembangkan konten sosial tentang properti dan pengalaman menginap." }, featured: true, fit: "contain" as const },
  },
  japantrips: {
    "japantrips-1.webp": { title: { en: "Social Reach by Platform", id: "Jangkauan Sosial per Platform" }, category: { en: "Social analytics", id: "Analisis sosial" }, alt: { en: "Facebook and Instagram reach analytics for Japantrips", id: "Analitik jangkauan Facebook dan Instagram Japantrips" }, caption: { en: "The captured dashboard shows 26.4K Instagram reach and 7K Facebook reach; the chart spans April to August, with no year visible.", id: "Dashboard yang tertangkap menunjukkan jangkauan Instagram 26,4 ribu dan Facebook 7 ribu; grafik mencakup April sampai Agustus tanpa tahun yang terlihat." }, featured: true, orientation: "dashboard" as const, fit: "contain" as const },
    "japantrips-2.webp": { title: { en: "Travel Product Storefront", id: "Etalase Produk Perjalanan" }, category: { en: "E-commerce", id: "E-commerce" }, alt: { en: "Japantrips travel product catalog", id: "Katalog produk perjalanan Japantrips" }, caption: { en: "A catalog view displaying 151 travel products, including Japan passes and connectivity options.", id: "Tampilan katalog dengan 151 produk perjalanan, termasuk pass Jepang dan pilihan konektivitas." }, featured: true, fit: "contain" as const },
    "japantrips-3.webp": { title: { en: "Early-Booking Promotion", id: "Promosi Pemesanan Awal" }, category: { en: "Campaign creative", id: "Materi campaign" }, alt: { en: "Japan travel products promoted with a 10 percent early-planning offer", id: "Promosi produk perjalanan Jepang dengan penawaran 10 persen untuk perencanaan awal" }, caption: { en: "A 10% offer frames travel products around early planning and purchase intent.", id: "Penawaran 10% mengaitkan produk perjalanan dengan perencanaan awal dan minat membeli." }, featured: true, fit: "cover" as const },
    "japantrips-4.webp": { title: { en: "Japanalives Audience Snapshot", id: "Snapshot Audiens Japanalives" }, category: { en: "Social media", id: "Media sosial" }, alt: { en: "Japanalives Instagram profile showing 161 thousand followers", id: "Profil Instagram Japanalives dengan 161 ribu pengikut" }, caption: { en: "At the time captured, the profile listed 161K followers and 3,004 posts; this is a profile snapshot, not attributed campaign growth.", id: "Saat ditangkap, profil mencantumkan 161 ribu pengikut dan 3.004 unggahan; ini adalah snapshot profil, bukan pertumbuhan yang diatribusikan ke campaign." }, featured: true, fit: "contain" as const },
    "japantrips-5.webp": { title: { en: "Team Behind the Travel Experience", id: "Tim di Balik Pengalaman Perjalanan" }, category: { en: "Team", id: "Tim" }, alt: { en: "Japantrips colleagues gathered together", id: "Rekan kerja Japantrips berkumpul bersama" }, caption: { en: "A team moment from the people coordinating travel content, products and reservations.", id: "Momen tim yang mengoordinasikan konten perjalanan, produk, dan reservasi." }, fit: "cover" as const },
  },
  "adventure-travel": {
    "adventure-1.webp": { title: { en: "The Operations Team", id: "Tim Operasional" }, category: { en: "Team & operations", id: "Tim & operasional" }, alt: { en: "Adventure travel group team gathered in an office", id: "Tim Adventure Travel Group berkumpul di kantor" }, caption: { en: "The people behind planning, coordinating and delivering a smooth trip.", id: "Orang-orang di balik perencanaan, koordinasi, dan pelaksanaan perjalanan." }, featured: true, fit: "cover" as const },
  },
  ladela: {
    "ladela-1.webp": { title: { en: "Fashion Brand Social Presence", id: "Kehadiran Sosial Brand Fashion" }, category: { en: "Brand & content", id: "Brand & konten" }, alt: { en: "Ladela fashion social profile and product grid", id: "Profil sosial Ladela dan grid produk fashion" }, caption: { en: "A consistent product-led feed connects brand presentation with e-commerce discovery.", id: "Feed berbasis produk menghubungkan presentasi brand dengan penemuan produk e-commerce." }, featured: true, fit: "contain" as const },
    "ladela-2.webp": { title: { en: "Brand Channel Insights", id: "Insight Kanal Brand" }, category: { en: "Social analytics", id: "Analisis sosial" }, alt: { en: "Social media reach, interaction and profile activity dashboard", id: "Dashboard jangkauan, interaksi, dan aktivitas profil media sosial" }, caption: { en: "Channel insights help review reach, interactions and visits as part of brand growth.", id: "Insight kanal membantu meninjau jangkauan, interaksi, dan kunjungan sebagai bagian dari pertumbuhan brand." }, featured: true, fit: "contain" as const },
    "ladela-3.webp": { title: { en: "Creative Content Workspace", id: "Workspace Konten Kreatif" }, category: { en: "Creative direction", id: "Arahan kreatif" }, alt: { en: "Ladela product photography and social creative board", id: "Board foto produk dan materi sosial Ladela" }, caption: { en: "A design board brings product imagery and branded social assets together for planning.", id: "Board desain menyatukan foto produk dan materi sosial berbrand untuk perencanaan." }, featured: true, fit: "contain" as const },
  },
  kurnia: {
    "kurnia-1.webp": { title: { en: "Restaurant Paid Media", id: "Iklan Berbayar Restoran" }, category: { en: "Paid media", id: "Iklan berbayar" }, alt: { en: "Meta Ads restaurant campaign overview", id: "Ringkasan campaign restoran di Meta Ads" }, caption: { en: "Campaign reporting supports review of paid media activity for the restaurant brand.", id: "Pelaporan campaign membantu mengevaluasi aktivitas iklan berbayar untuk brand restoran." }, featured: true, fit: "contain" as const },
    "kurnia-2.webp": { title: { en: "Campaign Optimization Review", id: "Evaluasi Optimasi Campaign" }, category: { en: "Campaign analytics", id: "Analisis campaign" }, alt: { en: "Meta Ads campaign results and optimization view", id: "Tampilan hasil dan optimasi campaign Meta Ads" }, caption: { en: "A campaign-level review helps guide delivery and lead-generation optimization.", id: "Evaluasi tingkat campaign membantu mengarahkan penayangan dan optimasi akuisisi calon pelanggan." }, fit: "contain" as const },
    "kurnia-4.webp": { title: { en: "Restaurant Social Channel", id: "Kanal Sosial Restoran" }, category: { en: "Social media", id: "Media sosial" }, alt: { en: "Kurnia Seafood Bandung social profile and food content", id: "Profil sosial Kurnia Seafood Bandung dan konten makanan" }, caption: { en: "A food-focused channel showcases the restaurant and its menu to local audiences.", id: "Kanal yang berfokus pada makanan memperkenalkan restoran dan menunya kepada audiens lokal." }, featured: true, fit: "contain" as const },
    "kurnia-5.webp": { title: { en: "Food Campaign Creative", id: "Kreatif Campaign Kuliner" }, category: { en: "Content & creative", id: "Konten & kreatif" }, alt: { en: "Restaurant food and promotion social creative collection", id: "Kumpulan materi sosial makanan dan promosi restoran" }, caption: { en: "A collection of food-led creative assets supports the restaurant's campaign presence.", id: "Kumpulan materi kreatif berbasis makanan mendukung kehadiran campaign restoran." }, featured: true, fit: "contain" as const },
  },
};

export const projects: Project[] = [
  {
    slug: "japanect",
    number: "01",
    company: "PT Japanect Consulting Indonesia",
    mediaFolder: "japanect",
    documentationMeta: documentationMeta.japanect,
    period: "Jan 2024 – Aug 2024",
    type: "B2B + B2C",
    industry: {
      en: "Consulting & travel",
      id: "Konsultasi & perjalanan",
    },
    role: {
      en: "Digital Marketing Specialist & Tour Operations",
      id: "Spesialis Digital Marketing & Operasional Tur",
    },
    title: {
      en: "Connecting growth with the customer journey.",
      id: "Menghubungkan pemasaran dengan perjalanan pelanggan.",
    },
    summary: {
      en: "B2B and B2C growth, connected to tour operations.",
      id: "Pertumbuhan B2B dan B2C yang terhubung dengan operasional tur.",
    },
    context: {
      en: "Japanect had established B2B consulting and travel expertise, but wanted to reach travelers directly. The challenge was to translate partner-facing services into a clear consumer offer, build trust, and give new audiences a practical path from discovery to inquiry or booking.",
      id: "Japanect memiliki keahlian konsultasi dan perjalanan B2B, lalu ingin menjangkau wisatawan secara langsung. Tantangannya adalah mengubah layanan yang sebelumnya ditujukan kepada mitra menjadi penawaran konsumen yang jelas, membangun kepercayaan, dan memberi audiens baru jalur praktis dari penemuan hingga pertanyaan atau pemesanan.",
    },
    responsibility: {
      en: "I owned the B2C marketing workstream end to end: campaign direction, agency coordination, content and copy, paid and social activity, performance reviews, and alignment with tour operations.",
      id: "Saya menangani alur pemasaran B2C dari awal hingga akhir: arah campaign, koordinasi dengan agency, konten dan copy, aktivitas iklan dan sosial, evaluasi performa, serta penyelarasan dengan operasional tur.",
    },
    services: [
      {
        en: "Paid media",
        id: "Iklan berbayar",
      },
      {
        en: "SEO / SEM",
        id: "SEO / SEM",
      },
      {
        en: "Content & analytics",
        id: "Konten & analisis",
      },
      {
        en: "Tour operations",
        id: "Operasional tur",
      },
    ],
    objective: null,
    strategy: {
      en: "I structured a 30-day A/B test around awareness, traffic and sales, comparing three interest-based ad sets and nine carousel / Reels variations. CPM and CPL reviews gave the agency and me a shared basis for campaign revisions.",
      id: "Saya menyusun A/B test selama 30 hari untuk awareness, traffic, dan sales dengan membandingkan tiga ad set berbasis minat serta sembilan variasi carousel / Reels. Evaluasi CPM dan CPL memberi saya dan agency dasar yang sama untuk merevisi campaign.",
    },
    execution: {
      en: "With Momentium, I translated the brief into platform-specific creative and copy, coordinated delivery, and led performance reviews and revisions. I kept campaign messaging connected to traveler questions and tour operations, so B2C demand had a clear next step. The supplied Meta Ads summary reports +60% brand awareness and +40% leads.",
      id: "Bersama Momentium, saya menerjemahkan brief menjadi materi kreatif dan copy sesuai platform, mengoordinasikan pelaksanaan, serta memimpin evaluasi dan revisi performa. Saya menyelaraskan pesan campaign dengan pertanyaan wisatawan dan operasional tur agar minat B2C memiliki langkah selanjutnya yang jelas. Ringkasan Meta Ads yang diberikan mencatat awareness naik 60% dan leads naik 40%.",
    },
    reflection: null,
    metrics: [
      {
        value: "+60%",
        label: "awareness",
      },
      {
        value: "+40%",
        label: "leads",
      },
      {
        value: "+50%",
        label: "organic",
      },
      {
        value: "+40%",
        label: "bookings",
      },
    ],
    insights: {
      title: { en: "A campaign built around measurable signals.", id: "Campaign yang bergerak dengan sinyal terukur." },
      intro: { en: "A 30-day test connected creative, audience and media delivery. The figures below summarize the supplied brief and report; the invoice and billing details are not part of this case study.", id: "Pengujian 30 hari menghubungkan materi kreatif, audiens, dan penayangan iklan. Angka berikut merangkum brief dan laporan yang diberikan; invoice dan rincian penagihan tidak ditampilkan." },
      snapshots: [
        { value: "30 days", label: { en: "A/B test", id: "A/B testing" } },
        { value: "3", label: { en: "Campaign objectives", id: "Tujuan campaign" }, note: { en: "Awareness · traffic · sales", id: "Awareness · traffic · penjualan" } },
        { value: "3", label: { en: "Interest-based ad sets", id: "Ad set berbasis minat" } },
        { value: "9", label: { en: "Carousel & Reels variants", id: "Variasi carousel & Reels" } },
      ],
      journey: { title: { en: "How the campaign was structured", id: "Struktur campaign" }, steps: [
        { label: { en: "Plan", id: "Rencanakan" }, detail: { en: "Set awareness, traffic and sales objectives.", id: "Menetapkan tujuan awareness, traffic, dan penjualan." } },
        { label: { en: "Test", id: "Uji" }, detail: { en: "Compare interest-based audiences and creative variants.", id: "Membandingkan audiens berbasis minat dan variasi materi." } },
        { label: { en: "Optimize", id: "Optimalkan" }, detail: { en: "Review CPM and CPL, then report and revise delivery.", id: "Meninjau CPM dan CPL, lalu melaporkan serta merevisi penayangan." } },
      ] },
    },
    documentation: [],
    index: {
      capabilities: {
        en: "Paid Media · SEO · Analytics",
        id: "Iklan · SEO · Analisis",
      },
      output: {
        en: "+60% Awareness · +40% Leads",
        id: "+60% Awareness · +40% Calon pelanggan",
      },
    },
  },
  {
    slug: "jaya-utama-perkasa",
    number: "02",
    company: "PT Jaya Utama Perkasa",
    mediaFolder: "jup",
    documentationMeta: documentationMeta.jup,
    period: "Jan 2025 – present",
    type: null,
    industry: {
      en: "Growth & web development",
      id: "Pemasaran & pengembangan web",
    },
    role: {
      en: "Head of Digital Marketing & Website Development",
      id: "Kepala Digital Marketing & Pengembangan Website",
    },
    title: {
      en: "A digital presence rebuilt as one connected system.",
      id: "Membangun ulang kehadiran digital sebagai satu sistem.",
    },
    summary: {
      en: "Website, campaigns, content and measurement aligned around one customer journey.",
      id: "Website, campaign, konten, dan analitik diselaraskan dalam satu perjalanan pelanggan.",
    },
    context: {
      en: "The website, social presence, search and campaigns needed to tell one consistent story about the business. The challenge was to make the company's knitwear capabilities easier to discover, understand and take the next step with.",
      id: "Website, media sosial, pencarian, dan campaign perlu menyampaikan satu cerita yang konsisten tentang bisnis. Tantangannya adalah membuat kapabilitas produksi rajut perusahaan lebih mudah ditemukan, dipahami, dan ditindaklanjuti.",
    },
    responsibility: {
      en: "I led digital marketing and full-stack website development, spanning Meta, TikTok and Google Ads, SEO / SEM, analytics, API integration, UI / UX, site performance and server security. I also supported social content and creative production hands on.",
      id: "Saya memimpin digital marketing dan pengembangan website full-stack, mencakup Meta, TikTok, dan Google Ads, SEO / SEM, analitik, integrasi API, UI / UX, performa situs, dan keamanan server. Saya juga terlibat langsung dalam konten sosial dan produksi materi kreatif.",
    },
    services: [
      {
        en: "Website development",
        id: "Pengembangan website",
      },
      {
        en: "SEO / SEM & analytics",
        id: "SEO / SEM & analisis",
      },
      {
        en: "Meta, TikTok & Google Ads",
        id: "Meta, TikTok & Google Ads",
      },
      {
        en: "Social media & Meta Ads",
        id: "Media sosial & Meta Ads",
      },
      {
        en: "Content talent & creative support",
        id: "Konten di depan kamera & dukungan kreatif",
      },
    ],
    objective: null,
    strategy: {
      en: "I connected the journey around how a buyer evaluates a knitwear manufacturer: discover the company, understand its process and capabilities, then make an inquiry. Website, social, search and campaign work each supported that path.",
      id: "Saya menyatukan perjalanan pelanggan berdasarkan cara calon pembeli menilai produsen rajut: menemukan perusahaan, memahami proses dan kapabilitasnya, lalu mengajukan pertanyaan. Website, media sosial, pencarian, dan campaign mendukung alur tersebut.",
    },
    execution: {
      en: "I built the company website from scratch with HTML, CSS, JavaScript and Bootstrap, then improved its UI / UX, API connections, performance and server security. I aligned social and content workflows with SEO / SEM, Meta / TikTok / Google Ads and analytics, and supported creative production and editing.",
      id: "Saya membangun website perusahaan dari awal menggunakan HTML, CSS, JavaScript, dan Bootstrap, lalu meningkatkan UI / UX, integrasi API, performa, serta keamanan server. Saya menyelaraskan alur media sosial dan konten dengan SEO / SEM, Meta / TikTok / Google Ads, dan analitik, serta membantu produksi dan editing materi kreatif.",
    },
    reflection: null,
    metrics: [],
    comparison: {
      title: { en: "A digital presence rebuilt end to end.", id: "Membangun ulang kehadiran digital dari hulu ke hilir." },
      beforeLabel: { en: "1.5 years before I joined", id: "1,5 tahun sebelum saya bergabung" },
      afterLabel: { en: "2 years after I joined", id: "2 tahun setelah saya bergabung" },
      note: { en: "Owner-provided dashboard snapshots: 1.5 years before I joined and 2 years after I joined, with my integrated strategy in place. These are reported totals over different windows—not annualized growth rates—and reflect coordinated work across the website, social, search and paid media.", id: "Snapshot dashboard dari pemilik: 1,5 tahun sebelum saya bergabung dan 2 tahun setelah saya bergabung, dengan strategi terintegrasi yang saya jalankan. Angka merupakan total dari periode berbeda, bukan laju pertumbuhan tahunan, dan mencerminkan pekerjaan terkoordinasi di website, media sosial, pencarian, dan iklan berbayar." },
      metrics: [
        { label: { en: "Views", id: "Tayangan" }, before: 0, beforeDisplay: { en: "0", id: "0" }, after: 3800000, afterDisplay: { en: "3.8M", id: "3,8 jt" } },
        { label: { en: "Reach", id: "Jangkauan" }, before: 470, beforeDisplay: { en: "470", id: "470" }, after: 2600000, afterDisplay: { en: "2.6M", id: "2,6 jt" } },
        { label: { en: "Content interactions", id: "Interaksi konten" }, before: null, beforeDisplay: { en: "Not reported", id: "Tidak tercantum" }, after: 12800, afterDisplay: { en: "12.8K", id: "12,8 rb" } },
        { label: { en: "Link clicks", id: "Klik tautan" }, before: 0, beforeDisplay: { en: "0", id: "0" }, after: 10300, afterDisplay: { en: "10.3K", id: "10,3 rb" } },
        { label: { en: "Profile visits", id: "Kunjungan profil" }, before: 447, beforeDisplay: { en: "447", id: "447" }, after: 27500, afterDisplay: { en: "27.5K", id: "27,5 rb" } },
        { label: { en: "Follows", id: "Pengikut baru" }, before: null, beforeDisplay: { en: "Not reported", id: "Tidak tercantum" }, after: 2000, afterDisplay: { en: "2K", id: "2 rb" } },
      ],
    },
    insights: {
      title: { en: "Traffic, from discovery to the right page.", id: "Trafik, dari penemuan hingga halaman tujuan." },
      intro: { en: "Analytics shows a mix of search, direct, social and referral visits, alongside the pages visitors viewed. The supplied screenshots use different reporting ranges, so these are presented as separate snapshots.", id: "Analitik menunjukkan kunjungan dari pencarian, akses langsung, media sosial, dan rujukan, serta halaman yang dilihat pengunjung. Screenshot yang diberikan memakai rentang laporan berbeda, jadi datanya ditampilkan sebagai snapshot terpisah." },
      snapshots: [
        { value: "481", label: { en: "Page views in page report", id: "Tampilan halaman pada laporan" } },
        { value: "211", label: { en: "Users in page report", id: "Pengguna pada laporan halaman" } },
        { value: "191", label: { en: "Active users in overview", id: "Pengguna aktif pada ringkasan" } },
        { value: "38 min", label: { en: "Avg. engagement / user", id: "Rata-rata engagement / pengguna" } },
      ],
      charts: [
        { title: { en: "Sessions by source", id: "Sesi berdasarkan sumber" }, unit: { en: "Reported sessions", id: "Sesi yang dilaporkan" }, note: { en: "The source panel's reporting range is not visible in the supplied screenshot. Values are kept as reported and not added to other date ranges.", id: "Rentang waktu panel sumber tidak terlihat pada screenshot yang diberikan. Nilai mengikuti laporan dan tidak dijumlahkan dengan rentang tanggal lain." }, items: [
          { label: { en: "Google · organic", id: "Google · organik" }, value: 2600, display: { en: "2.6K", id: "2,6 rb" } },
          { label: { en: "Direct", id: "Langsung" }, value: 1500, display: { en: "1.5K", id: "1,5 rb" } },
          { label: { en: "Instagram · social", id: "Instagram · sosial" }, value: 1200, display: { en: "1.2K", id: "1,2 rb" } },
          { label: { en: "ChatGPT referral", id: "Rujukan ChatGPT" }, value: 382, display: { en: "382", id: "382" } },
        ] },
        { title: { en: "Most-viewed pages", id: "Halaman paling banyak dilihat" }, unit: { en: "Page views · 481 total", id: "Tampilan halaman · total 481" }, items: [
          { label: { en: "Home", id: "Beranda" }, value: 171, display: { en: "171", id: "171" } },
          { label: { en: "Catalog", id: "Katalog" }, value: 72, display: { en: "72", id: "72" } },
          { label: { en: "About", id: "Tentang" }, value: 62, display: { en: "62", id: "62" } },
          { label: { en: "Contact", id: "Kontak" }, value: 43, display: { en: "43", id: "43" } },
          { label: { en: "Women's", id: "Wanita" }, value: 25, display: { en: "25", id: "25" } },
          { label: { en: "Production", id: "Produksi" }, value: 17, display: { en: "17", id: "17" } },
          { label: { en: "Service", id: "Servis" }, value: 17, display: { en: "17", id: "17" } },
        ] },
      ],
      journey: { title: { en: "A practical path through the website", id: "Alur pengunjung di website" }, steps: [
        { label: { en: "Discovery", id: "Penemuan" }, detail: { en: "Search, social and direct visits bring people in.", id: "Pencarian, sosial, dan akses langsung mendatangkan pengunjung." } },
        { label: { en: "Evaluation", id: "Pertimbangan" }, detail: { en: "Catalog and company pages help visitors understand the offer.", id: "Halaman katalog dan perusahaan membantu pengunjung memahami penawaran." } },
        { label: { en: "Contact", id: "Kontak" }, detail: { en: "A visible contact path supports the next conversation.", id: "Jalur kontak yang jelas mendukung percakapan berikutnya." } },
      ] },
    },
    documentation: [],
    index: {
      capabilities: {
        en: "Web · SEO · Content",
        id: "Web · SEO · Konten",
      },
      output: {
        en: "Website + digital marketing execution",
        id: "Website + pelaksanaan digital marketing",
      },
    },
  },
  {
    slug: "casadela",
    number: "03",
    company: "Casadela Canggu",
    mediaFolder: "casadela",
    documentationMeta: documentationMeta.casadela,
    period: "Apr 2026 – present",
    type: "B2C",
    industry: {
      en: "Hospitality",
      id: "Hospitality",
    },
    role: {
      en: "Digital Marketing & Brand Lead",
      id: "Penanggung Jawab Digital Marketing & Brand",
    },
    title: {
      en: "Growth through the guest experience.",
      id: "Pertumbuhan melalui pengalaman tamu.",
    },
    summary: {
      en: "Digital marketing, brand and content shaped around the guest journey.",
      id: "Digital marketing, brand, dan konten yang berangkat dari perjalanan tamu.",
    },
    context: {
      en: "At Casadela Canggu, I shape hospitality marketing around the guest's first impression. Property-led social content introduces the stay, while post and channel insights help guide what to publish next.",
      id: "Di Casadela Canggu, saya menyusun pemasaran hospitality berdasarkan kesan pertama calon tamu. Konten sosial tentang properti memperkenalkan pengalaman menginap, sementara insight unggahan dan kanal membantu menentukan konten berikutnya.",
    },
    responsibility: {
      en: "I lead digital marketing and brand work, develop property-focused content, and review channel insights to support the guest journey.",
      id: "Saya menangani digital marketing dan brand, menyusun konten tentang properti, serta meninjau insight kanal untuk mendukung perjalanan tamu.",
    },
    services: [
      {
        en: "Hospitality marketing",
        id: "Pemasaran hospitality",
      },
      {
        en: "Content & brand",
        id: "Konten & brand",
      },
      {
        en: "Guest journey",
        id: "Perjalanan tamu",
      },
    ],
    objective: null,
    strategy: null,
    execution: null,
    reflection: null,
    metrics: [],
    insights: {
      title: { en: "Content visibility across the guest journey.", id: "Visibilitas konten sepanjang perjalanan calon tamu." },
      intro: { en: "A channel snapshot from 3 July to 30 September shows how organic and paid content contributed to views, reach and interactions.", id: "Snapshot kanal dari 3 Juli hingga 30 September memperlihatkan kontribusi konten organik dan berbayar terhadap tayangan, jangkauan, dan interaksi." },
      period: { en: "3 Jul — 30 Sep", id: "3 Jul — 30 Sep" },
      snapshots: [
        { value: "60,646", label: { en: "Views", id: "Tayangan" }, note: { en: "+471.9% vs. comparison period", id: "+471,9% dibanding periode pembanding" } },
        { value: "53.6K", label: { en: "Accounts reached", id: "Akun dijangkau" }, note: { en: "+2.2K% vs. comparison period", id: "+2,2 rb% dibanding periode pembanding" } },
        { value: "720", label: { en: "Content interactions", id: "Interaksi konten" }, note: { en: "+88.5% vs. comparison period", id: "+88,5% dibanding periode pembanding" } },
      ],
      charts: [{ title: { en: "Views by distribution", id: "Tayangan berdasarkan distribusi" }, unit: { en: "Views", id: "Tayangan" }, note: { en: "Paid and organic views match the 60,646 total shown in the report.", id: "Tayangan berbayar dan organik sesuai dengan total 60.646 pada laporan." }, items: [
        { label: { en: "Paid", id: "Berbayar" }, value: 49560, display: { en: "49,560", id: "49.560" } },
        { label: { en: "Organic", id: "Organik" }, value: 11086, display: { en: "11,086", id: "11.086" } },
      ] }],
      journey: { title: { en: "From property story to guest interest", id: "Dari cerita properti ke minat tamu" }, steps: [
        { label: { en: "Show the stay", id: "Tampilkan pengalaman" }, detail: { en: "Property-led content gives the audience a feel for the experience.", id: "Konten tentang properti memberi gambaran pengalaman kepada audiens." } },
        { label: { en: "Extend reach", id: "Perluas jangkauan" }, detail: { en: "Paid and organic distribution build visibility.", id: "Distribusi berbayar dan organik memperluas visibilitas." } },
        { label: { en: "Learn & refine", id: "Pelajari & sempurnakan" }, detail: { en: "Views and interactions help guide the next content decisions.", id: "Tayangan dan interaksi membantu mengarahkan keputusan konten berikutnya." } },
      ] },
    },
    documentation: [],
    index: {
      capabilities: {
        en: "Hospitality · Brand · Content",
        id: "Hospitality · Brand · Konten",
      },
      output: {
        en: "Digital marketing across the guest journey",
        id: "Digital marketing sepanjang perjalanan tamu",
      },
    },
  },
  {
    slug: "ladela",
    number: "04",
    company: "Ladela",
    mediaFolder: "ladela",
    documentationMeta: documentationMeta.ladela,
    period: "Mar 2026 – present",
    type: null,
    industry: {
      en: "Brand & growth",
      id: "Brand & pertumbuhan",
    },
    role: {
      en: "Brand & Marketing Lead",
      id: "Penanggung Jawab Brand & Pemasaran",
    },
    title: {
      en: "A brand in context. A growth role in focus.",
      id: "Memahami brand. Mengarahkan pertumbuhan.",
    },
    summary: {
      en: "Brand, content and creative direction for a consumer business.",
      id: "Brand, konten, dan arahan kreatif untuk bisnis konsumen.",
    },
    context: {
      en: "At Ladela, I lead brand and marketing for a consumer business. The work brings product presentation, social content and creative direction together, with channel insights as part of how brand activity is reviewed.",
      id: "Di Ladela, saya memimpin brand dan pemasaran untuk bisnis konsumen. Pekerjaan ini menyatukan presentasi produk, konten sosial, dan arahan kreatif, dengan insight kanal sebagai bagian dari evaluasi aktivitas brand.",
    },
    responsibility: {
      en: "I lead brand and marketing work at Ladela, with a focus on content, e-commerce and creative direction.",
      id: "Saya menangani arah brand dan pemasaran Ladela, dengan fokus pada konten, e-commerce, dan arahan kreatif.",
    },
    services: [
      {
        en: "Brand & marketing",
        id: "Brand & pemasaran",
      },
      {
        en: "Content & e-commerce",
        id: "Konten & e-commerce",
      },
      {
        en: "Creative direction",
        id: "Arahan kreatif",
      },
    ],
    objective: null,
    strategy: null,
    execution: null,
    reflection: null,
    metrics: [],
    insights: {
      title: { en: "A channel snapshot with clear next signals.", id: "Snapshot kanal dengan sinyal tindak lanjut yang jelas." },
      intro: { en: "The available insight capture brings together visibility, engagement and profile actions. Its reporting window is not shown, so these figures are presented as a snapshot without a date claim.", id: "Screenshot insight yang tersedia merangkum visibilitas, engagement, dan aktivitas profil. Rentang waktunya tidak terlihat, jadi angka ini ditampilkan sebagai snapshot tanpa klaim periode." },
      snapshots: [
        { value: "167.9K", label: { en: "Views", id: "Tayangan" } },
        { value: "317K", label: { en: "Accounts reached", id: "Akun dijangkau" } },
        { value: "15.5K", label: { en: "Link clicks", id: "Klik tautan" } },
        { value: "51.1K", label: { en: "Profile visits", id: "Kunjungan profil" } },
        { value: "355", label: { en: "Interactions", id: "Interaksi" } },
        { value: "204", label: { en: "Follows", id: "Pengikut baru" } },
      ],
      charts: [{ title: { en: "Profile actions", id: "Aktivitas profil" }, unit: { en: "Reported actions", id: "Aktivitas yang dilaporkan" }, note: { en: "These are separate action counts from one snapshot, not a conversion funnel; the report window is not visible.", id: "Angka ini adalah hitungan aktivitas terpisah dari satu snapshot, bukan funnel konversi; rentang laporan tidak terlihat." }, items: [
        { label: { en: "Profile visits", id: "Kunjungan profil" }, value: 51100, display: { en: "51.1K", id: "51,1 rb" } },
        { label: { en: "Link clicks", id: "Klik tautan" }, value: 15500, display: { en: "15.5K", id: "15,5 rb" } },
        { label: { en: "Follows", id: "Pengikut baru" }, value: 204, display: { en: "204", id: "204" } },
      ] }],
      journey: { title: { en: "Turn attention into product discovery", id: "Ubah perhatian menjadi penemuan produk" }, steps: [
        { label: { en: "Present", id: "Tampilkan" }, detail: { en: "Product-led creative makes the brand easy to recognize.", id: "Materi berbasis produk membuat brand mudah dikenali." } },
        { label: { en: "Explore", id: "Jelajahi" }, detail: { en: "Profile visits and link clicks signal deeper interest.", id: "Kunjungan profil dan klik tautan menjadi sinyal minat lebih lanjut." } },
        { label: { en: "Improve", id: "Kembangkan" }, detail: { en: "Reach and interaction data inform the next content mix.", id: "Data jangkauan dan interaksi mengarahkan komposisi konten berikutnya." } },
      ] },
    },
    documentation: [],
    index: {
      capabilities: {
        en: "Brand · E-commerce · Creative",
        id: "Brand · E-commerce · Kreatif",
      },
      output: {
        en: "Rebranding + digital brand development",
        id: "Rebranding + pengembangan brand digital",
      },
    },
  },
  {
    slug: "kurnia-group",
    number: "05",
    company: "Kurnia Group",
    mediaFolder: "kurnia",
    documentationMeta: documentationMeta.kurnia,
    period: "Oct 2024 – Dec 2024",
    type: null,
    industry: {
      en: "Campaign results",
      id: "Hasil campaign",
    },
    role: {
      en: "Digital Marketing & Web Specialist",
      id: "Spesialis Digital Marketing & Web",
    },
    title: {
      en: "From visibility to inquiries.",
      id: "Dari dikenal hingga menerima pertanyaan.",
    },
    summary: {
      en: "A closer look at awareness and lead growth.",
      id: "Melihat peningkatan awareness dan calon pelanggan.",
    },
    context: {
      en: "For Kurnia Group, I paired restaurant-focused paid campaigns with food-led social creative. Together, the work supported two stages of discovery: building awareness and generating customer inquiries.",
      id: "Untuk Kurnia Group, saya memadukan campaign berbayar bertema restoran dengan materi sosial yang berfokus pada makanan. Keduanya mendukung dua tahap penemuan: membangun awareness dan memperoleh pertanyaan dari calon pelanggan.",
    },
    responsibility: {
      en: "I managed Meta Ads and lead-generation activity, and led a KOL / influencer program from partner selection and creative coordination through campaign review.",
      id: "Saya mengelola Meta Ads dan akuisisi calon pelanggan, serta memimpin program KOL / influencer mulai dari pemilihan partner dan koordinasi materi hingga evaluasi campaign.",
    },
    services: [
      {
        en: "Paid media",
        id: "Iklan berbayar",
      },
      {
        en: "Lead generation",
        id: "Akuisisi calon pelanggan",
      },
      {
        en: "KOL / influencer marketing",
        id: "Pemasaran KOL / influencer",
      },
      {
        en: "Campaign optimization",
        id: "Optimasi campaign",
      },
    ],
    objective: null,
    strategy: {
      en: "The campaign work included an approximately IDR 12 million monthly Meta Ads budget. Targeting and creative placement supported awareness and lead acquisition.",
      id: "Pekerjaan campaign mencakup anggaran Meta Ads sekitar Rp12 juta per bulan. Target audiens dan penempatan materi kreatif mendukung awareness serta akuisisi calon pelanggan.",
    },
    execution: {
      en: "I managed a Meta Ads campaign using audience targeting and creative placement, alongside selected KOL partnerships. The campaign summary reports a 50% increase in brand awareness and a 50% increase in leads. Influencer activity focused on relevant partnerships, engaging content and reviewing audience response; individual rates are not shown.",
      id: "Saya mengelola campaign Meta Ads melalui penargetan audiens dan penempatan materi kreatif, bersama kerja sama KOL terpilih. Ringkasan campaign melaporkan peningkatan brand awareness sebesar 50% dan leads sebesar 50%. Aktivitas influencer berfokus pada partner yang relevan, konten yang menarik, serta evaluasi respons audiens; tarif individu tidak ditampilkan.",
    },
    reflection: null,
    metrics: [
      {
        value: "+50%",
        label: "awareness",
      },
      {
        value: "+50%",
        label: "leads",
      },
    ],
    insights: {
      title: { en: "Awareness and lead generation, working together.", id: "Awareness dan akuisisi calon pelanggan yang saling mendukung." },
      intro: { en: "The campaign paired targeted Meta Ads with a KOL program. Budget and reported outcomes are shown alongside the operating approach, without exposing individual partner rates.", id: "Campaign memadukan Meta Ads tertarget dengan program KOL. Anggaran dan hasil yang dilaporkan ditampilkan bersama pendekatan kerja, tanpa membuka tarif masing-masing partner." },
      snapshots: [
        { value: "Rp12M", label: { en: "Monthly Meta Ads budget", id: "Anggaran Meta Ads per bulan" } },
        { value: "+50%", label: { en: "Brand awareness", id: "Brand awareness" } },
        { value: "+50%", label: { en: "Leads", id: "Calon pelanggan" } },
      ],
      journey: { title: { en: "A two-part campaign system", id: "Sistem campaign dua bagian" }, steps: [
        { label: { en: "Reach", id: "Jangkau" }, detail: { en: "Target paid media to build local brand awareness.", id: "Menargetkan iklan berbayar untuk membangun awareness brand lokal." } },
        { label: { en: "Influence", id: "Pengaruhi" }, detail: { en: "Coordinate relevant KOL partnerships and content.", id: "Mengoordinasikan kerja sama KOL dan konten yang relevan." } },
        { label: { en: "Convert & learn", id: "Dorong respons & pelajari" }, detail: { en: "Review lead volume and audience response to guide the next cycle.", id: "Meninjau jumlah leads dan respons audiens untuk mengarahkan siklus berikutnya." } },
      ] },
    },
    documentation: [],
    index: {
      capabilities: {
        en: "Paid Media · KOL · Leads",
        id: "Iklan · KOL · Calon pelanggan",
      },
      output: {
        en: "+50% Awareness · +50% Leads",
        id: "+50% Awareness · +50% Calon pelanggan",
      },
    },
  },
  {
    slug: "japantrips",
    number: "06",
    company: "Japantrips",
    mediaFolder: "japantrips",
    documentationMeta: documentationMeta.japantrips,
    period: "Jun 2023 – Jan 2024",
    type: "B2C",
    industry: {
      en: "Travel & digital marketing",
      id: "Perjalanan & digital marketing",
    },
    role: {
      en: "Reservations Officer & Digital Marketing Intern",
      id: "Petugas Reservasi & Magang Digital Marketing",
    },
    title: {
      en: "From travel discovery to booking intent.",
      id: "Dari menemukan perjalanan hingga minat memesan.",
    },
    summary: {
      en: "Travel content, product promotion and search work connected to the booking journey.",
      id: "Konten perjalanan, promosi produk, dan pencarian yang terhubung dengan perjalanan pemesanan.",
    },
    context: {
      en: "At Japantrips, I held parallel responsibilities in travel reservations and digital marketing. My work supported the journey from discovering travel products and asking questions to researching destinations and making a booking.",
      id: "Di Japantrips, saya menjalankan tanggung jawab paralel di bagian reservasi perjalanan dan digital marketing. Pekerjaan saya mendukung perjalanan pelanggan dari menemukan produk wisata dan bertanya hingga mencari informasi destinasi dan melakukan pemesanan.",
    },
    responsibility: {
      en: "I supported reservations and customer needs while also promoting travel products through social media, content, targeted campaigns, copywriting, SEO / SEM and website support.",
      id: "Saya menangani dukungan reservasi dan kebutuhan pelanggan, sekaligus mempromosikan produk perjalanan melalui media sosial, konten, campaign tertarget, copywriting, SEO / SEM, dan dukungan website.",
    },
    services: [
      { en: "Reservations & customer journey", id: "Reservasi & perjalanan pelanggan" },
      { en: "Travel content & copywriting", id: "Konten perjalanan & copywriting" },
      { en: "SEO / SEM", id: "SEO / SEM" },
      { en: "Product campaigns", id: "Campaign produk" },
    ],
    objective: null,
    strategy: {
      en: "The supplied campaign summaries describe separate activities and reporting periods. The Brand Boost campaign reports 40% more engagement, 500 leads and 25% sales growth within three months. A travel-product promotion reports 30% more customer inquiries within two months and placement on Japantrips' e-commerce website. A separate SEO / SEM project reports a 25% increase in organic traffic and 20% more bookings within three months.",
      id: "Ringkasan campaign yang diberikan mencatat aktivitas dan periode pelaporan yang berbeda. Brand Boost Campaign melaporkan kenaikan engagement 40%, menghasilkan 500 leads, dan pertumbuhan penjualan 25% dalam tiga bulan. Promosi produk perjalanan melaporkan kenaikan pertanyaan pelanggan 30% dalam dua bulan serta penayangan di website e-commerce Japantrips. Proyek SEO / SEM terpisah melaporkan kenaikan traffic organik 25% dan pemesanan 20% dalam tiga bulan.",
    },
    execution: {
      en: "I developed travel content and social-media strategy, created copy and campaign materials for destination and product promotion, and supported SEO / SEM through keyword targeting and ongoing optimization. I also supported reservation conversations by understanding what customers needed before booking.",
      id: "Saya mengembangkan konten perjalanan dan strategi media sosial, menulis copy serta materi campaign untuk promosi destinasi dan produk, dan mendukung SEO / SEM melalui penargetan kata kunci dan optimasi berkelanjutan. Saya juga mendukung percakapan reservasi dengan memahami kebutuhan pelanggan sebelum mereka memesan.",
    },
    reflection: null,
    metrics: [
      { value: "+40%", label: "engagement" },
      { value: "+30%", label: "leads" },
      { value: "+25%", label: "sales" },
      { value: "+25%", label: "organic" },
      { value: "+20%", label: "bookings" },
    ],
    insights: {
      title: { en: "Reach, product discovery and booking signals.", id: "Jangkauan, penemuan produk, dan sinyal pemesanan." },
      intro: { en: "The available materials show social reach, a sizeable travel-product catalog and reported outcomes from separate campaigns. Each metric keeps its original meaning and timeframe.", id: "Materi yang tersedia menunjukkan jangkauan sosial, katalog produk perjalanan, dan hasil dari beberapa campaign terpisah. Setiap metrik tetap mengikuti arti dan periode aslinya." },
      snapshots: [
        { value: "161K", label: { en: "Japanalives followers", id: "Pengikut Japanalives" }, note: { en: "Profile snapshot", id: "Snapshot profil" } },
        { value: "151", label: { en: "Travel products listed", id: "Produk perjalanan terdaftar" } },
        { value: "500", label: { en: "Brand Boost leads", id: "Leads Brand Boost" }, note: { en: "Within the reported 3-month campaign", id: "Dalam campaign 3 bulan yang dilaporkan" } },
      ],
      charts: [{ title: { en: "Social reach by platform", id: "Jangkauan sosial per platform" }, unit: { en: "Accounts reached", id: "Akun dijangkau" }, note: { en: "The screenshot's chart spans April–August; its year is not visible. Platform reach is shown as captured, separately from campaign growth claims.", id: "Grafik pada screenshot mencakup April–Agustus; tahunnya tidak terlihat. Jangkauan per platform ditampilkan sesuai capture dan terpisah dari klaim pertumbuhan campaign." }, items: [
        { label: { en: "Instagram", id: "Instagram" }, value: 26400, display: { en: "26.4K", id: "26,4 rb" } },
        { label: { en: "Facebook", id: "Facebook" }, value: 7000, display: { en: "7K", id: "7 rb" } },
      ] }],
      journey: { title: { en: "From inspiration to booking intent", id: "Dari inspirasi menuju minat memesan" }, steps: [
        { label: { en: "Inspire", id: "Bangun inspirasi" }, detail: { en: "Travel content builds destination interest and social discovery.", id: "Konten perjalanan membangun minat destinasi dan penemuan lewat media sosial." } },
        { label: { en: "Explore", id: "Jelajahi" }, detail: { en: "Product pages make passes and travel essentials easier to compare.", id: "Halaman produk memudahkan perbandingan pass dan kebutuhan perjalanan." } },
        { label: { en: "Ask & book", id: "Tanya & pesan" }, detail: { en: "Reservation support helps move customer questions toward a booking.", id: "Dukungan reservasi membantu mengarahkan pertanyaan pelanggan menuju pemesanan." } },
      ] },
    },
    documentation: [],
    index: {
      capabilities: {
        en: "Travel · Content · SEO / SEM",
        id: "Perjalanan · Konten · SEO / SEM",
      },
      output: {
        en: "+40% engagement · 500 leads · +25% sales",
        id: "+40% engagement · 500 leads · +25% penjualan",
      },
    },
  },
  {
    slug: "adventure-travel-group",
    number: "07",
    company: "Adventure Travel Group",
    mediaFolder: "adventure-travel",
    documentationMeta: documentationMeta["adventure-travel"],
    period: "Dec 2023 – Jan 2024",
    type: null,
    industry: {
      en: "Travel operations",
      id: "Operasional perjalanan",
    },
    role: {
      en: "Tour Operations Coordinator",
      id: "Koordinator Operasional Tur",
    },
    title: {
      en: "The coordination behind a well-run trip.",
      id: "Koordinasi di balik perjalanan yang tertata.",
    },
    summary: {
      en: "Connecting the travel plan with its day-to-day delivery.",
      id: "Menghubungkan rencana perjalanan dengan pelaksanaan sehari-hari.",
    },
    context: {
      en: "At Adventure Travel Group, I worked in tour operations coordination. The role connected the travel plan with the practical work of delivering it day to day.",
      id: "Di Adventure Travel Group, saya bekerja sebagai koordinator operasional tur. Peran ini menghubungkan rencana perjalanan dengan pelaksanaan praktis sehari-hari.",
    },
    responsibility: {
      en: "My focus was operations and coordination: keeping travel plans connected to the work required to deliver the trip.",
      id: "Fokus saya adalah operasional dan koordinasi: memastikan rencana perjalanan tetap terhubung dengan pekerjaan yang diperlukan untuk menjalankannya.",
    },
    services: [
      { en: "Tour operations", id: "Operasional tur" },
      { en: "Travel coordination", id: "Koordinasi perjalanan" },
      { en: "Trip delivery", id: "Pelaksanaan perjalanan" },
    ],
    objective: null,
    strategy: null,
    execution: null,
    reflection: null,
    metrics: [],
    insights: {
      title: { en: "A practical route from travel plan to delivery.", id: "Alur nyata dari rencana perjalanan ke pelaksanaan." },
      intro: { en: "This case focuses on the operational work behind the trip. The available documentation is a team photograph, so no unsupported campaign or booking metrics are added.", id: "Studi kasus ini berfokus pada pekerjaan operasional di balik perjalanan. Dokumentasi yang tersedia berupa foto tim, jadi tidak ada angka campaign atau pemesanan yang tidak didukung bukti." },
      journey: { title: { en: "The operating rhythm", id: "Ritme operasional" }, steps: [
        { label: { en: "Plan", id: "Rencanakan" }, detail: { en: "Translate the trip plan into clear operational needs.", id: "Menerjemahkan rencana perjalanan menjadi kebutuhan operasional yang jelas." } },
        { label: { en: "Coordinate", id: "Koordinasikan" }, detail: { en: "Keep people, timing and travel details aligned.", id: "Menjaga keselarasan tim, jadwal, dan detail perjalanan." } },
        { label: { en: "Deliver", id: "Jalankan" }, detail: { en: "Support smooth day-to-day trip operations.", id: "Mendukung kelancaran operasional perjalanan sehari-hari." } },
      ] },
    },
    documentation: [],
    index: {
      capabilities: {
        en: "Tour Operations · Coordination",
        id: "Operasional Tur · Koordinasi",
      },
      output: {
        en: "Tour operations coordination",
        id: "Koordinasi operasional tur",
      },
    },
  },
];
