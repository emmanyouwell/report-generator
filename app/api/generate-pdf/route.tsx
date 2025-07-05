// app/api/generate-pdf/route.ts
import { pdf } from '@react-pdf/renderer';
import Format1 from '@/app/ui/Format1';
import Format2 from '@/app/ui/Format2';
import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
export async function POST(req: Request) {
  const pages = await req.json();

  const pdfBuffer = await pdf(<Format2 pages={pages} />).toBlob();

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="generated.pdf"',
    },
  });
}

export async function GET() {
  const  pdfBuffer = await pdf(<Format1 />).toBlob();

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="generated.pdf"',
    },
  });
}
