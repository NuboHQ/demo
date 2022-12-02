import Head from 'next/head';
import Map from '@/components/map/Map';
import { GetServerSideProps } from 'next';
import { getRegion, loadRegions, Region, Regions } from '@/lib/regions';

interface Props {
  regions: Regions;
  currentRegion: Region;
}

export default function Home({ regions, currentRegion }: Props) {
  return (
    <div>
      <Head>
        <title>Nubo Demo</title>
        <meta name="description" content="Nubo demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Map regions={regions} currentRegion={currentRegion} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const regions = loadRegions();
  const currentRegion = getRegion(process.env.NUBO_REGION || 'unknown');

  return {
    props: {
      regions,
      currentRegion,
    },
  };
};
