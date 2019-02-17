module.exports = {
  apps: [
    {
      name: 'diceos',
      script: './node_modules/nuxt/bin/nuxt-start',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      env: {
        PORT: 3333,
        TZ: 'Asia/Shanghai',
        NODE_ENV: 'production',
      },
    },
  ],
}
