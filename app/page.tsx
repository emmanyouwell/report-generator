import PdfViewerWrapper from '@/app/ui/PdfViewerWrapper';

export default function Home() {
  return (
    <>
      <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 sm:px-20 font-[family-name:var(--font-geist-sans)]'>
        <main className='flex flex-col items-center gap-[32px] w-full'>
          <h1 className='text-5xl font-bold'>Report Generator</h1>
          <div className="w-[75%]">
            <PdfViewerWrapper />
          </div>
        </main>
      </div>
    </>
  );
}
