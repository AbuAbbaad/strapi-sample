module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://https://main.d386cdzauogoix.amplifyapp.com'),
  proxy: env.bool('IS_PROXIED', true),
});
