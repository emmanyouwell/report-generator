'use client';
import dynamic from 'next/dynamic';

// Dynamically import the client-only component
const PdfViewer = dynamic(() => import('./PdfViewer'), {
  ssr: false,
});
export default function PdfViewerWrapper() {
  return <PdfViewer />;
}
