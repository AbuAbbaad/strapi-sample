module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '914d967bac47729365aefae362803d3e'),
  },
});
