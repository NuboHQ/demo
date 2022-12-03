import Head from 'next/head';
import Map from '@/components/map/Map';
import { GetServerSideProps } from 'next';
import {
  getPolicyRegionId,
  getRegion,
  loadConfig,
  Config,
  Region,
} from '@/lib/config';
import Header from '@/components/header/Header';
import Info from '@/components/info/Info';
import { Browser, track } from '@/lib/analytics';

interface Props {
  config: Config;
  currentRegion: Region;
}

export default function Home({ config, currentRegion }: Props) {
  return (
    <>
      <Head>
        <title>Nubo Demo</title>
        <meta name="description" content="Nubo demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className="fixed z-50" />

      <Map
        className="top-32 pt-20 lg:fixed lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
        config={config}
        currentRegion={currentRegion}
      />

      <Info config={config} region={currentRegion} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  track(req);
  const config = loadConfig();
  const id = getPolicyRegionId();
  const currentRegion = getRegion(id);

  return {
    props: {
      config,
      currentRegion,
    },
  };
};
