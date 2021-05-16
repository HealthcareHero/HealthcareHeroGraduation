import { styleMethods } from './styles/index.style'
import { LandingProps } from "../common/types/index.type"
import { Fragment } from "react";
import LoadingSkeleton from './components/loading-skeleton'
import FeedPost from "./components/feed-post";

export default function Narrow({data, isLoading, isError}: LandingProps) {
  return (
    <>
      <div>
      {isLoading && <LoadingSkeleton />}

      {!isLoading &&
        !isError &&
        data.map((item, index) => (
          <Fragment key={index}>
            <FeedPost {...item}/>
          </Fragment>
        ))}
    </div>
    </>
  );
}
