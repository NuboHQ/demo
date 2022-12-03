import Head from 'next/head';
import Map from '@/components/map/Map';
import superjson from 'superjson';
import { GetServerSideProps } from 'next';
import {
  getPolicyRegionId,
  getRegion,
  loadConfig,
  NuboConfig,
  Region,
} from '@/lib/config';
import Header from '@/components/header/Header';
import Info from '@/components/info/Info';
import { Browser, track } from '@/lib/analytics';
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

      <div className="py-10 lg:py-20 text-white">
        {requests.map((request) => {
          const browser = request.browser as Browser;

          return (
            <div key={request.id}>
              <img className="w-10" src={browser.image} alt={browser.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const requests = await prisma.request.findMany({ take: 100 });

  return {
    props: {
      requestsString: superjson.stringify(requests),
    },
  };
};
