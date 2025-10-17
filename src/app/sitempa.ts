import { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/seo";
// Asumsikan Anda memiliki fungsi data fetching untuk rute dinamis Anda

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Rute Statis & Folder Group (Home, Dakwah)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL, // Home Page (app/(home)/page.tsx)
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/dakwah`, // Halaman Dakwah (app/dakwah/page.tsx)
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/doa`, // Halaman Dakwah (app/dakwah/page.tsx)
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/sholat`, // Halaman Sholat (app/sholat/page.tsx)
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/quran`, // Halaman Quran (app/al-quran/page.tsx)
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Tambahkan rute statis lain di sini, seperti /about, /contact, dll.
  ];

  // 2. Rute Dinamis (Contoh: app/al-quran/[id]/page.tsx)
  // Ambil daftar semua slug atau ID surat dari database/API
  //   const surahSlugs = await getAllSurahSlugs();

  //   const surahRoutes: MetadataRoute.Sitemap = surahSlugs.map((id) => ({
  //     url: `${SITE_URL}/al-quran/${id}`,
  //     // Terapkan tanggal update terakhir jika tersedia
  //     lastModified: new Date(),
  //     changeFrequency: 'weekly',
  //     priority: 0.7,
  //   }));

  // 3. Gabungkan semua rute
  return [
    ...staticRoutes,
    // ...surahRoutes,
  ];
}
