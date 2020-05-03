import React, { createContext, useReducer, useEffect } from 'react';
import { feedPostThreadReducer } from '../reducer';
import { actionType } from '../action/actionType';
import { useQuery } from '@apollo/react-hooks';
import { FEED_POST } from '../../../../api/queries';

const defaultState = {
  feedPostId: "",
  author: "",
  message: "",
  media: [],
  tags: [],
  likeCount: 0,
  timestamp: "",
  commenting: true,
  comments: [],
  inputText: "",
  submitting: false
}

const serializeData = (data) => {
  return {
    feedPostId: data.id,
    author: data.author,
    message: data.message,
    media: data.media,
    tags: data.tags,
    likeCount: data.likeCount,
    timestamp: data.timestamp,
    commenting: data.commenting,
    comments: data.comments
  }
}

const FeedPostThreadContext = createContext();

function FeedPostThreadProvider(props) {
  const { feedPostId } = { ...props };
  const [state, dispatch] = useReducer(feedPostThreadReducer, defaultState);
  const { loading, error, data } = useQuery(FEED_POST, {
    variables: {
      id: feedPostId
    }
  });

  /** MOCK DATA **/
  // let loading = false;
  // let error = undefined;
  // let data = {
  //   feedPost: {
  //     id: "FAKE_ID",
  //     author: "test author",
  //     message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  //     media: ["https://www.thetalka.com/wp-content/uploads/2019/06/Thank-You-Messages-For-Nurses-.jpg", "https://image.freepik.com/free-vector/thank-you-doctors-nurses_23-2148498508.jpg", "https://www.thetalka.com/wp-content/uploads/2019/06/Thank-You-Messages-For-Nurses.jpg"],
  //     tags: ["tag1", "tag2"],
  //     timestamp: "26 april 2020",
  //     commenting: false,
  //     comments: [
  //       {author: "Guest",message: "FLFC",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "FLFC",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "FLFC",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies auctor mi quis sodales. Nulla sollicitudin vitae tellus eu condimentum. Maecenas ut ex a arcu laoreet mollis. Integer mattis arcu urna, ut accumsan arcu dictum eget. Etiam lobortis ipsum nec risus maximus auctor. Pellentesque pretium vestibulum justo nec volutpat. Quisque ac auctor purus. Fusce odio libero, posuere cursus enim ut, tincidunt iaculis sapien. Maecenas tempor magna dui, ut dignissim magna suscipit at. ",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "In at nunc lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus enim ut quam rutrum, nec faucibus mi accumsan. In hac habitasse platea dictumst. Maecenas id egestas nunc. Vivamus lacus libero, tincidunt non ligula ut, elementum condimentum mauris. Ut sem nunc, volutpat in elementum eget, finibus porta tellus. Duis tempus rhoncus libero consequat consequat.",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "Phasellus tincidunt finibus nunc, nec vestibulum metus consectetur ac. Duis vel lectus dignissim, feugiat erat quis, gravida est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla luctus lacinia rhoncus. Vestibulum dignissim lacus nec porta convallis. Sed ac metus a leo tempor facilisis non ut nunc. In mattis tempus dui, eu aliquam diam pulvinar at. Sed vitae accumsan tortor.",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "Curabitur commodo mollis tortor, ac consequat massa lobortis consectetur. Aliquam erat volutpat. Nulla efficitur turpis id viverra venenatis. Pellentesque vestibulum sapien velit, ac maximus dolor fringilla at. Cras scelerisque elit quis scelerisque feugiat. Aenean vel ullamcorper augue. Phasellus in venenatis ligula, eu fringilla ex. ",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "Aliquam ut odio interdum, fringilla ante feugiat, vulputate nisl. Donec ullamcorper justo non turpis posuere, ut cursus ex rhoncus. Phasellus consectetur, magna et pellentesque tristique, nulla quam facilisis nisl, non semper tellus dolor ut diam. Donec facilisis lobortis magna sit amet luctus.",timestamp: "26 april 2020"},
  //       {author: "Guest",message: "Donec mattis arcu a massa imperdiet laoreet. Cras sit amet laoreet nisl. Proin elit velit, facilisis a neque sit amet, fermentum iaculis elit. Duis rhoncus justo quis egestas cursus. Vestibulum gravida faucibus dolor. Mauris lobortis lacinia tellus, id volutpat purus placerat quis. Cras aliquam, ante a imperdiet iaculis, odio metus pellentesque tortor, sit amet consequat arcu turpis eget est. ",timestamp: "26 april 2020"},
  //     ],
  //     likeCount: 1
  //   }
  // };

  useEffect(() => {
    dispatch({
      type: actionType.loadingFeedPostThread,
      payload: { loading }
    });

    if (data) {
      dispatch({
        type: actionType.initialiseFeedPostThread,
        payload: { ...serializeData(data.feedPost) }
      });
    }
  }, [loading])

  useEffect(() => {
    dispatch({
      type: actionType.errorWhileLoading,
      payload: { error }
    })
  }, [error])

  return (
    <FeedPostThreadContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FeedPostThreadContext.Provider>
  )
}

export { FeedPostThreadContext, FeedPostThreadProvider }