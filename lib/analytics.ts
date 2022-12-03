import { lookup } from 'geoip-lite';
import { faUserAgent } from 'fontawesome-user-agent';
import { NextIncomingMessage } from 'next/dist/server/request-meta';

export type Browser = {
  id: string;
  name: string;
  image: string;
};

export const track = async (req: NextIncomingMessage) => {
  const ip = getIpFromRequest(req);
  const geo = getGeoFromIp(ip);
  const browser = getBrowserFromRequest(req);

  if (!geo || !browser) return;
};

export const getBrowserFromRequest = (req: NextIncomingMessage) => {
  try {
    const userAgent =
      req.headers['user-agent'] ||
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36';
    const icons = faUserAgent(userAgent);
    const name =
      icons.browser.name.charAt(0).toUpperCase() + icons.browser.name.slice(1);
    const browser: Browser = {
      id: icons.browser.name,
      name,
      image: `https://cdnjs.cloudflare.com/ajax/libs/browser-logos/73.0.0/${icons.browser.name}/${icons.browser.name}.svg`,
    };

    return browser;
  } catch (error) {
    return null;
  }
};

export const getIpFromRequest = (req: NextIncomingMessage) => {
  const xForwardedFor =
    (req.headers['x-forwarded-for'] as string) || '88.98.203.209';

  const [ip] = xForwardedFor.split(',');

  return ip;
};

export const getGeoFromIp = (ip: string) => {
  const geo = lookup(ip);

  return geo;
};
