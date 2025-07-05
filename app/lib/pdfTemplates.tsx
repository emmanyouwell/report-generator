/** @jsxImportSource react */
import { ReactElement } from 'react';
import Format1 from '@/app/ui/Format1';
import Format2 from '@/app/ui/Format2';

export function renderFormat1(): ReactElement {
  return <Format1 />;
}

export function renderFormat2(pages: any): ReactElement {
  return <Format2 pages={pages} />;
}
