import Head from 'next/head';
import superjson from 'superjson';
import { GetServerSideProps } from 'next';
import Header from '@/components/header/Header';
import { Browser } from '@/lib/analytics';
import { Request } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import moment from 'moment';

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

      <div className="grid gap-4 lg:gap-6 py-10 lg:py-20 text-white max-w-2xl m-auto">
        {requests.map((request) => {
          const browser = request.browser as Browser;

          return (
            <div
              key={request.id}
              className="flex gap-4 items-center p-4 lg:p-6 border border-slate-800 rounded-xl"
            >
              <img className="w-10" src={browser.image} alt={browser.name} />

              <div className="ml-auto">
                {moment(request.created).format('D MMM YY - h:mm a')}
              </div>
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
