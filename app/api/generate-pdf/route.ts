
export const runtime = 'nodejs';
import { pdf } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import { renderFormat1, renderFormat2 } from '@/app/lib/pdfTemplates';


export async function GET() {
  const pdfBuffer = await pdf(renderFormat1()).toBuffer();

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="generated.pdf"',
    },
  });
}

export async function POST(req: Request) {
  const pages = await req.json();

  const pdfBuffer = await pdf(renderFormat2(pages)).toBuffer();

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="generated.pdf"',
    },
  });
}


