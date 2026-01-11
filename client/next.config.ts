import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'ga5k6wfxt7.ufs.sh', pathname: '**' }],
	},
}

export default nextConfig