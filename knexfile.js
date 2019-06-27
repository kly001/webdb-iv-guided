module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/lambda.db3', // the folder will be created when we run the migrations
    },

    pool: {
      // runs after a connection is made to the sqlite engine
      afterCreate: (conn, done) => {
        // by default SQLite will not enforce Foreign Keys
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },

    migrations: {
      directory: "./data/migrations"
    },
    
    seeds: {
      directory: "./data/seeds"
    }
  },
};
