import { FC } from 'react';
import World from './World';
import classNames from 'classnames';

interface Props {
  className?: string;
  currentRegion: string;
}

const Map: FC<Props> = ({ className, currentRegion }) => {
  const getRegionProps = (id: string) => {
    const className = classNames('');
    const stroke = id === currentRegion ? '#00A4FF' : '#4E5064';

    return {
      className,
      stroke,
    };
  };

  return (
    <svg
      className={className}
      viewBox="0 0 906 412"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <World />

        <g>
          <g id="california">
            <circle
              cx="58.8735"
              cy="136.548"
              r="6.25106"
              strokeWidth="3.75064"
              {...getRegionProps('us-west-san-francisco')}
            />
          </g>
          <g id="virginia">
            <circle
              cx="168.653"
              cy="117.906"
              r="6.25106"
              strokeWidth="3.75064"
              {...getRegionProps('us-east-new-york')}
            />
          </g>
          <g id="sao-paulo">
            <circle
              cx="250.47"
              cy="312.609"
              r="6.25106"
              strokeWidth="3.75064"
              {...getRegionProps('south-america-east-sao-paulo')}
            />
          </g>
          <g id="london">
            <circle
              cx="377.856"
              cy="80.6223"
              r="6.25106"
              strokeWidth="3.75064"
              {...getRegionProps('europe-west-london')}
            />
          </g>
          <g id="mumbai">
            <circle
              cx="582.363"
              cy="185.66"
              r="6.25106"
              strokeWidth="3.75064"
              {...getRegionProps('asia-south-mumbai')}
            />
          </g>
          <g id="tokyo">
            <circle
              cx="748.621"
              cy="130.334"
              r="6.25106"
              strokeWidth="3.75064"
              {...getRegionProps('asia-northeast-tokyo')}
            />
          </g>
          <g id="sydney">
            <circle
              cx="784.869"
              cy="344.715"
              r="6.25106"
              strokeWidth="3.75064"
              {...getRegionProps('australia-southeast-sydney')}
            />
          </g>
          <g id="milan">
            <circle
              cx="402.711"
              cy="101.335"
              r="6.25106"
              strokeWidth="3.75064"
              {...getRegionProps('europe-west-milan')}
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_1_25"
          x="39.8337"
          y="128.421"
          width="38.0796"
          height="38.0796"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10.9134" />
          <feGaussianBlur stdDeviation="5.45671" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1_25"
          x="149.613"
          y="109.78"
          width="38.0796"
          height="38.0796"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10.9134" />
          <feGaussianBlur stdDeviation="5.45671" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_1_25"
          x="234.029"
          y="304.483"
          width="32.8824"
          height="32.8825"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8.31483" />
          <feGaussianBlur stdDeviation="4.15742" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_1_25"
          x="361.415"
          y="72.4959"
          width="32.8824"
          height="32.8824"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8.31483" />
          <feGaussianBlur stdDeviation="4.15742" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_1_25"
          x="565.921"
          y="177.534"
          width="32.8824"
          height="32.8824"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8.31483" />
          <feGaussianBlur stdDeviation="4.15742" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_1_25"
          x="732.18"
          y="122.207"
          width="32.8824"
          height="32.8824"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8.31483" />
          <feGaussianBlur stdDeviation="4.15742" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_1_25"
          x="768.428"
          y="336.588"
          width="32.8824"
          height="32.8825"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8.31483" />
          <feGaussianBlur stdDeviation="4.15742" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_1_25"
          x="386.27"
          y="93.209"
          width="32.8824"
          height="32.8824"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8.31483" />
          <feGaussianBlur stdDeviation="4.15742" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Map;
