import { styles, useGlobalStyleSidePadding } from './styles/index.style'
import { NarrowProps } from './types/index.type'
import PageNotFound from 'modules/page-not-found'
import MediaViewer from './components/media-viewer'
import Tags from 'common/components/tags'
import { NARROW_TAG_TEXT_DISPLAY_LENGTH } from 'common/constants'
import { enableMediaVisualViewer } from './helpers'

export default function Narrow({ data, isLoading, isError }: NarrowProps) {
  const {
    id,
    author,
    recipient,
    message,
    media,
    tags,
    enableComment,
    likeCount,
    timestamp,
  } = data;

  const styleMainSection = useGlobalStyleSidePadding();

  return (
    <>
      {
        !isLoading && !isError && data.id && (
          <div>
            { enableMediaVisualViewer(media) && <MediaViewer media={media} /> }

            <div className={styleMainSection}>
              <div className={styles.header}>
                <div className={styles.author}>
                  <b>{author}</b>
                </div>
                <div className={styles.timestamp}>
                  {/* { moment(timestamp).fromNow() } */}
                  TIME
                </div>
              </div>

              { message && <div>{message}</div> }

              { tags?.length > 0 && <Tags texts={tags} textDisplayLength={NARROW_TAG_TEXT_DISPLAY_LENGTH} /> }
            </div>

            


            {/* 
                {tags && tags.length>0 && <TagList tagList={tags} displayLength={tagDisplayLength} />}
              </div>

              <div className="icon-buttons">
                <HeartButton feedPostId={feedPostId} likeCount={likeCount} setLikeCount={updateLikeCount} />

                <ShareButon url={`${path.root}${feedPostThread}/${feedPostId}`} />

                {(likeCount > 0) && <div className="number-of-likes">{likeCount} {likeCount === 1 ? "Like" : "Likes"}</div>}
              </div>
            </div>

            {
              comments && <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                <Comments comments={comments} />
              </div>
            }
            {
              commenting && (
                <div style={{ paddingLeft: "8px", paddingRight: "8px", marginTop: "24px", position: "sticky", bottom: "8px" }} >
                  <InputWithSubmit text={inputText} setText={updateInputText} loading={submitting} onSubmit={submitComment} />
                </div>
              )
            } */}
          </div>
        )
      }
      {
        // isLoading && (
        //   <LoadingOverlay size="24">
        //     <div style={{ height: "100vh" }}></div>
        //   </LoadingOverlay>
        // )
      }
      {
        // TODO: If error, show error message
      }
      {
        !isLoading && !isError && (!data || !data?.id) && <PageNotFound />
      }
    </>
  );
}
