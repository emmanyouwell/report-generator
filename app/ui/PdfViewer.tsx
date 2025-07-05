'use client';
import {Viewer, Worker} from '@react-pdf-viewer/core';
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
export default function PdfViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js'>
      <div className="h-[80vh]">
        <Viewer fileUrl='http://localhost:3000/api/generate-pdf' plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
}
