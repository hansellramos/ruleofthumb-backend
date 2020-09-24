module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DB_URI'),
        database: env('DB_NAME')
      },
      options: {
        ssl: env('DB_SSL'),
      },
    },
  },
});
