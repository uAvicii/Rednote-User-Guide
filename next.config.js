/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出，用于GitHub Pages等静态托管
  output: 'export',
  // 禁用图片优化API
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig; 