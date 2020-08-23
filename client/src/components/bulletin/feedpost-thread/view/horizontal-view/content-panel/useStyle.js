const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const authorStyle = {
  fontSize: "1.1em"
}

const timestampStyle = {
  fontSize: "0.7em"
}

const footerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}

const commentInputBarStyle = {
  position: "sticky",
  marginTop: "24px",
  bottom: "8px"
}

export const useStyle = () => {
  return {
    headerStyle,
    authorStyle,
    timestampStyle,
    footerStyle,
    commentInputBarStyle
  }
}