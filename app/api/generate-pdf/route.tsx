// app/api/generate-pdf/route.ts
import { pdf } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import Format1 from '@/app/ui/Format1';
import Format2 from '@/app/ui/Format2';
export async function GET() {
  const pdfBlob = await pdf(<Format2/>).toBlob();

  return new NextResponse(pdfBlob, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="generated.pdf"',
    },
  });
}
