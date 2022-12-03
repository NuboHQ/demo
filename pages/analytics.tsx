import Head from 'next/head';
import superjson from 'superjson';
import { GetServerSideProps } from 'next';
import Header from '@/components/header/Header';
import { Browser } from '@/lib/analytics';
import { Request } from '@prisma/client';
import { prisma } from '@/lib/prisma';

interface Props {
  requestsString: any;
}

export default function Analytics({ requestsString }: Props) {
  const requests = superjson.parse(requestsString) as Request[];

  return (
    <>
      <Head>
        <title>Nubo Demo - Analytics</title>
        <meta name="description" content="Nubo demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="grid gap-4 py-10 lg:py-20 text-white max-w-2xl m-auto divide-y divide-slate-800">
        {requests.map((request) => {
          const browser = request.browser as Browser;

          return (
            <div key={request.id} className="py-4 pt-6">
              <img className="w-10" src={browser.image} alt={browser.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const requests = await prisma.request.findMany({
    take: 100,
    orderBy: {
      created: 'desc',
    },
  });

  return {
    props: {
      requestsString: superjson.stringify(requests),
    },
  };
};
