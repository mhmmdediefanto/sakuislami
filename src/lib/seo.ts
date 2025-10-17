import { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  TWITTER_HANDLE,
} from "@/constants/seo";

// Tipe untuk argumen fungsi agar lebih mudah digunakan
interface GenerateSeoMetadataParams {
  title: string;
  description: string;
  url: string; // URL Kanonikal
  imageUrl?: string;
  authorName?: string;
  publishedTime?: string;
}

/**
 * Fungsi helper untuk menghasilkan objek Metadata yang konsisten di seluruh situs.
 * @param params - Opsi untuk metadata halaman spesifik.
 * @returns Objek Metadata untuk Next.js.
 */
export function generateSeoMetadata({
  title,
  description,
  url,
  imageUrl,
  authorName,
  publishedTime,
}: GenerateSeoMetadataParams): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const effectiveImageUrl = imageUrl || `${SITE_URL}/og-default.jpg`; // Gambar default

  return {
    // A. Metadata Dasar
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    // B. Open Graph
    openGraph: {
      title: fullTitle,
      description: description || SITE_DESCRIPTION,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: effectiveImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "id_ID",
      type: "article", // Default ke article, bisa diubah jika perlu
      authors: authorName ? [authorName] : [],
      publishedTime,
    },

    // C. Twitter Cards
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: TWITTER_HANDLE,
      images: {
        url: effectiveImageUrl,
        alt: title,
      },
    },

    // D. Lainnya
    robots: {
      index: true,
      follow: true,
    },
  };
}
