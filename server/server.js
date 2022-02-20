const express = require('express');
const path = require('path');
const db = require('./config/connection');
const cors = require('cors');
require('dotenv').config();

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3001;


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
};

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

io.on('connection', socket => {
  console.log('socket connecting');
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message });
  });
});

db.once('open', () => {
  http.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
    console.log(`gql running on http://localhost:${PORT}${server.graphqlPath}`);
  });
});