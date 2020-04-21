Create Raect App:
1. `npx create-react-app healthcare-heroes-graduation`
<br>
<br>

Set up Firebase Hosting: 
1. In Firebase console, set up Firebase Hosting and follow on-screen instructions
2. In command prompt,
   <br>\> firebase login
   <br>\> firebase init
   <br>\> (x) Hosting: Configure and deploy Firebase Hosting sites
   <br>\> Use an existing project
   <br>\> Use 'public' as public directory
   <br>\> Configure as a single-app app: No
   <br>\> File public/index.html already exists. Overwrite? No
<br>
<br>

Developing the project:
1. Add neccessary firebase information to `public.html`
2. Install dependencies
   - Firebase: `npm install firebase`
   - Apollo Client: `npm install apollo-boost @apollo/react-hooks graphql`
   - Ant Design: `npm install antd @ant-design/icons`
   - Material UI: `npm install @material-ui/core @material-ui/icons`
   - Moment: `npm install moment`
<br>
<br>

Using Apollo Client, writing GraphQL queries, connecting to Google Cloud Functions:
1. Create new client and connect to endpoint in `index.js`
   uri is the endpoint from our GraphQL server (i.e. our Google Cloud Function)
2. Create queries and mutations in `src/api/`
3. Use client to help send request to server in `src/components/bulletin/new-post/NewPostPage.js`
   ```javascript
    addFeedPost({
      variables: {
        author,
        message,
        tagList,
        media,
        allowCommenting
      }
    }).then(response => {
      showSubmitSuccess();
    }, error => {
      showSubmitFailure();
      console.log(error);
    });
    ```
<br>
<br>

Connecting and Uploading to Google Cloud Storage:
1. Get firebaseConfig file from Firebase Console
2. Add it to `firebase/index.js` and export `storage`
3. Import into `src/components/bulletin/new-post/NewPostPage.js`
   - Upload to Google Cloud Storage
     ```javascript
     const task = storage.ref(`${folderName}/${file.uid}`).put(file.originFileObj);
     ```
   - Wait for async result to get file's url
     ```javascript
     let url = await storage.ref(folderName).child(file.uid).getDownloadURL();
     ```
<br>
<br>


Tutorials:
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/get-started/)
- [Tutorial on GraphQL with React and Apollo Client](https://www.youtube.com/watch?v=8Pyr82Qbjow&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=25)
- [Walkaround for Ant Design's Upload Component action requirement](https://levelup.gitconnected.com/managing-file-uploads-with-ant-design-6d78e592f2c4)
- [Upload image to Firebase Storage](https://www.youtube.com/watch?v=8r1Pb6Ja90o)
- [Share links like a native app, WebShare](https://css-tricks.com/how-to-use-the-web-share-api/)