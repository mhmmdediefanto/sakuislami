import { MetadataRoute } from 'next';

// Ambil URL dasar situs Anda dari constants (seperti yang Anda lakukan di page.tsx)
import { SITE_URL } from "@/constants/seo";

export default function robots(): MetadataRoute.Robots {
  // Aturan standar untuk semua crawler
  const rules = {
    userAgent: '*', 
    allow: '/', 
    // Contoh: Jika Anda punya folder 'internal' atau 'drafts' yang tidak mau diindeks
    disallow: [
      '/internal/', 
      '/drafts/', 
      // Karena Anda tidak memiliki folder 'admin' secara eksplisit, 
      // Anda mungkin tidak perlu baris ini, tetapi ini adalah praktik umum.
    ], 
  };
  
  return {
    rules: [rules],
    // Tautkan sitemap yang akan kita buat di langkah berikutnya
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}