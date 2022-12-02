import Head from 'next/head';
import Map from '@/components/map/Map';
import { GetServerSideProps } from 'next';
import { getRegion, loadConfig, NuboConfig, Region } from '@/lib/config';
import Header from '@/components/header/Header';
import Info from '@/components/info/Info';

interface Props {
  config: NuboConfig;
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

      <Header />

      <Info config={config} region={currentRegion} />

      <div className="py-10 lg:py-20">
        <Map config={config} currentRegion={currentRegion} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const config = loadConfig();
  const currentRegion = getRegion(process.env.NUBO_REGION || 'unknown');

  return {
    props: {
      config,
      currentRegion,
    },
  };
};
