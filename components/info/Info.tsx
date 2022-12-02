import { NuboConfig, Region } from '@/lib/config';
import React, { FC } from 'react';

interface Props {
  config: NuboConfig;
  region: Region;
}

const Info: FC<Props> = ({ config, region }) => {
  const flag = `/flags/${region.flag}.svg`;
  return (
    <div>
      <div className="border-y border-y-slate-800 divide-x text-white">
        <div className="lg:flex lg:items-center lg:justify-center lg:divide-x lg:divide-slate-800">
          <div className="flex items-center p-10 gap-10">
            <div>
              <img className="w-10 lg:w-16" src={flag} alt={region.location} />
            </div>

            <div className="grid gap-2">
              <div className="uppercase text-xs text-slate-500">
                Closest edge server
              </div>

              <div className="text-lg lg:text-3xl">
                {region.location}, {region.country}
              </div>
            </div>
          </div>

          {!!config.policy && (
            <div className="grid gap-2 p-10">
              <div className="uppercase text-xs text-slate-500">
                Policy applied
              </div>
              <div>
                {config.policy.name} ({config.policy.id})
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
