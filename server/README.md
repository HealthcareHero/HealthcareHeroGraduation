Setting up Firestore:
1. In Firebase console, set up Firestore and follow on-screen instructions
<br>
<br>

Setting up Google Cloud Functions:
1. In Firebase console, set up Functions and follow on-screen instructions 
2. In command prompt,
   <br>\> firebase login
   <br>\> firebase init
   <br>\> (x) Functions: Configure and deploy Cloud Functions
   <br>\> Use an existing project
   <br>\> JavaScript
   <br>\> Use ESLint to catch probable bugs and enforce style
   <br>\> Install dependencies with npm now
<br>
<br>

Developing functions:
1. Go to `/functions/` folder
2. `npm install appollo-server-express express graphql cors moment`
3. Connect to firestore: `firestore.js`
4. Set up GraphQL typeDef and resolvers using apollo server: 
   `src/typeDefs.js` `src/resolvers.js`
5. Set up server: `src/server.js`
6. Expose API: `index.js`
<br>
<br>

Connecting to Firestore:
1. Import firestore in `src/implementation.js`
2. Reading from firestore
   ```javascript
   const feedPost = await firestore.collection('FeedPosts').doc(id).get();
   ```
<br>
<br>

Testing GraphQL (LocalHost):
1. In `index.js`, connect to localhost 
   ```javascript
   /** For connection to localhost **/
   let port = 4000;
   server.listen(port, () => {
     console.log(`Server ready at ${port}`);
   });
   ```
2. In `src/implementation.js`, set playground to true
   ```javascript
   const server = new ApolloServer({
		typeDefs,
		resolvers,
		playground: true
	});
	```
3. To run, type `node index.js` in `/functions/` folder
4. Go to `localhost:4000/graphql`
<br>

Testing GraphQL (Production):
1. In `index.js`:
   ```javascript
   /** Connect to Google Cloud Function **/
   const api = functions.https.onRequest(server);
   module.exports = { api };
   ```
2. Go to Firebase console and view under Functions
3. Under the column 'Trigger', copy the url
4. Go to `[the url]/api/graphql`
   Inside, type the same url in the url bar in graphql (Beside the HISTORY button)
<br>
<br>

Deploying to Google Cloud Functions:
1. `firebase deploy`
<br>
<br>

Tutorials: 
- [Apollo Server, GraphQL and Google Cloud Function](https://medium.com/@choudlet/easy-configuration-graphql-server-with-apollo-server-2-and-firebase-cloud-functions-google-cloud-4c1b46dd98f6)
- [Apollo Server, GraphQL and Firestore](https://github.com/hkhamm/firestore-apollo-graphql)
- [Firestore's Increment](https://fireship.io/snippets/firestore-increment-tips/)
  Used in`src/implementation.js`
