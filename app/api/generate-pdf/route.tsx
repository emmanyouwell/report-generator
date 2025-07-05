// app/api/generate-pdf/route.ts
import { pdf } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import PdfRenderer from '@/app/ui/PdfRenderer';

export async function GET() {
  const pdfBlob = await pdf(<PdfRenderer/>).toBlob();

  return new NextResponse(pdfBlob, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="generated.pdf"',
    },
  });
}
