"use client"; // Atau biarkan sebagai Server Component jika tidak ada interaktivitas

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>; // Terima objek JSON-LD apa pun
}

/**
 * Komponen untuk me-render script JSON-LD secara aman di dalam halaman.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/*

contoh implementasinya


const surahSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage", // Atau "Article" jika kontennya panjang
    "name": `Surat ${surah.name} (${surah.arabicName})`,
    "description": `Terjemahan, tafsir, dan detail lengkap Surat ${surah.name}.`,
    "url": `${SITE_URL}/al-quran/${params.id}`,
    "datePublished": surah.releaseDate || "2024-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/al-quran/${params.id}`
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    }
    // Anda bisa tambahkan skema spesifik seperti "QAPage" atau "FAQPage" di sini
  };

*/
