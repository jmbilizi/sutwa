module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3bec4c9904be5690ed41145cc1e72553'),
  },
});
