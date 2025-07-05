/** @jsxImportSource react */
import { ReactElement } from 'react';
import Format1 from '@/app/ui/Format1';
import Format2 from '@/app/ui/Format2';
import { DocumentProps } from '@react-pdf/renderer';
interface ContentBlock {
  content: string;
  img?: string;
}
interface PageData {
  dateRange: string;
  contents: ContentBlock[];
}
export function renderFormat1(): ReactElement<DocumentProps> {
  return <Format1 />;
}

export function renderFormat2(pages: PageData[]): ReactElement<DocumentProps> {
  return <Format2 pages={pages} />;
}
