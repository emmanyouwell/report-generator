'use client';
import {Viewer, Worker} from '@react-pdf-viewer/core';
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_URL;
export default function PdfViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js'>
      <div className="h-[80vh]">
        <Viewer fileUrl={`${apiUrl}/api/generate-pdf`} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
}
