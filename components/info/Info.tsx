import { getRegion } from '@/lib/regions';
import { FC } from 'react';

interface Props {
  regionId: string;
}

const Info: FC<Props> = ({ regionId }) => {
  const region = getRegion(regionId);
  const flag = `/flags/${region.country}.svg`;

  return (
    <div className="m-auto my-10 lg:my-0 lg:fixed lg:left-1/2 lg:bottom-10 lg:-translate-x-1/2 w-4/5 max-w-4xl border border-slate-800 rounded-2xl divide-x text-white backdrop-blur-lg">
      <div className="lg:flex lg:items-center lg:justify-center lg:divide-x lg:divide-slate-800">
        <div className="flex flex-col p-10 gap-6 lg:flex-row lg:items-center lg:gap-10">
          <div>
            <img className="w-10 lg:w-16" src={flag} alt={region.location} />
          </div>

          <div className="grid gap-2">
            <div className="uppercase text-xs text-slate-500">
              Closest edge server
            </div>

            <div className="text-lg lg:text-2xl">{region.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
