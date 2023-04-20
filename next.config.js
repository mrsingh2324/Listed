/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
       CLIENT_ID: '430991806371-ujbl1t690iimt52ppjrp692ga0lt5jsq.apps.googleusercontent.com',
    CLIENT_SECRET: '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',
    NEXTAUTH_SECRET: 'secret-listed@app'
  }
  
}

module.exports = nextConfig
