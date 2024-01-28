/** @type {import('next').NextConfig} */
export const eslint = {
  // Disabling on production builds because we're running checks on PRs via GitHub Actions.
  ignoreDuringBuilds: true
};
export const images = {
  // formats: ['image/png'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'xbni9cjpwjfwyjrp.public.blob.vercel-storage.com',
    }
  ]
};
export async function redirects() {
  return [
    {
      source: '/password',
      destination: '/',
      permanent: true
    }
  ];
}

