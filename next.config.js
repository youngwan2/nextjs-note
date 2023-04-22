/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns : [
      {
        protocol:'https', // http or https
        hostname : 'images.unsplash.com' //도메인 이름
      }
    ]
  },
  async redirects() {
    return [
      {
        source :'/products/deleted_forever',
        destination:'/products',
        permanent:true, // true : 해당 리다이렉션 영구적 관리
             // 반환시 301 코드를 반환하며 검색엔진 등에게 해당 주소가
              // 영구적으로 이동했음을 알린다.
      },
      {
        source :'/products/deleted_temp',
        destination:'/products',
        permanent:false, // false: 해당 리다이엑션을 일시적으로 관리
              //반환시 302 코드를 반환하며 일시적으로 해당 주소가 이동했음을 알림
      }
    ]
  },
}

module.exports = nextConfig
