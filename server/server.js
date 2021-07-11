// import packages and varialbes needed
require('dotenv').config();
const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs, resolvers } = require('./schemas');
const path = require('path');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

// Intergrating apolloserver with express and subscription
async function startApolloServer() {
  const PORT = process.env.PORT || 3001;
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    subscriptions: { path: '/graphql' }
  });

  await server.start();
  server.applyMiddleware({ app })

  const httpsServer = http.createServer(app);

  server.installSubscriptionHandlers(httpsServer);

  // Bodyparser middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Make sure to call listen on httpServer, NOT on app.
  await new Promise(resolve => httpServer.listen(PORT, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at wss://localhost:${PORT}${server.subscriptionsPath}`);
  return { server, app, httpsServer };
}

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
  startApolloServer();
});

// Looks fine