
export const runtime = 'nodejs';
import { pdf } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import { renderFormat1, renderFormat2 } from '@/app/lib/pdfTemplates';

export async function GET() {
  try {
    const pdfDoc = pdf(renderFormat1());
    const pdfBuffer = await pdfDoc.toBuffer();

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="generated.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse(`Error generating PDF: ${error}`, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const pages = await req.json();
    const pdfDoc = pdf(renderFormat2(pages));
    const pdfBuffer = await pdfDoc.toBuffer();

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="generated.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse(`Error generating PDF: ${error}`, { status: 500 });
  }
}


