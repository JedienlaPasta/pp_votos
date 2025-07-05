import Image from 'next/image';
import { getVotes } from './lib/data';
import RefreshBtn from './ui/refresh-btn';

export default async function Home() {
  const votes = await getVotes();
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-center gap-[32px] items-center sm:items-start">
        <Image
          src="/presupuestos-transparente.png"
          alt="presupuestos-participativos"
          width={200}
          height={38}
          priority
        />
        <div className="text-center w-full flex justify-center">
          <p className="text-lg">
            Votos emitidos:{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {votes ? votes : '0'}
            </code>
            .
          </p>
        </div>

        <div className="flex w-full items-center justify-center">
          <RefreshBtn />
        </div>
      </main>
    </div>
  );
}
