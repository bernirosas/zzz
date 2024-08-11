/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["user-images.githubusercontent.com", "www.kindpng.com", "s.gravatar.com", "w7.pngwing.com"], // Todo: Extremely important to set the according domain once it's defined
  },
  publicRuntimeConfig: {
    SERVER_TIME_OFFSET: 0,
  },
}
