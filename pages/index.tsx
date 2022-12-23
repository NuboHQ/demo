import Head from 'next/head';
import Map from '@/components/map/Map';
import { GetServerSideProps } from 'next';
import Header from '@/components/header/Header';
import Info from '@/components/info/Info';
import { Region } from '@/lib/regions';
import { getRegion } from '@/lib/config';

interface Props {
  currentRegion: string;
}

export default function Home({ currentRegion }: Props) {
  return (
    <>
      <Head>
        <title>Nubo Demo</title>
        <meta name="description" content="Nubo demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className="fixed z-50" />

      <Map
        className="top-32 pt-20 lg:fixed lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full"
        currentRegion={currentRegion}
      />

      <Info regionId={currentRegion} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const currentRegion = process.env.NUBO_REGION;

  return {
    props: {
      currentRegion,
    },
  };
};
