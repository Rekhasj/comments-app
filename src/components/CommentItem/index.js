import './index.css'

const likedImageURL =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
const likeImageURL =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

const CommentItem = props => {
  const {commentListDetails, deleteUser, likeUserComment} = props

  const {
    id,
    name,
    comment,
    date,
    isLiked,
    initialColorClassName,
  } = commentListDetails

  const imageUrl = isLiked === true ? likedImageURL : likeImageURL

  const firstLetter = name[0]

  const onDeleteUser = () => {
    deleteUser(id)
  }
  const onClickLike = () => {
    likeUserComment(id)
  }
  //  console.log(commentListDetails)
  // console.log(initialClassName)

  return (
    <li className="comment-list-container">
      <div className="name-container">
        <p className="initial" style={{backgroundColor: initialColorClassName}}>
          {firstLetter}
        </p>
        <h1 className="person-name">{name}</h1>
        <p className="date">{date}</p>
      </div>
      <p className="person-comment">{comment}</p>
      <div className="button-container">
        <img src={imageUrl} alt="like" className="like-image" />
        <button type="button" className="image-button" onClick={onClickLike}>
          Like
        </button>
        <button
          type="button"
          className="image-button"
          testid="delete"
          onClick={onDeleteUser}
        >
          <img
            alt="delete"
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
          />
        </button>
      </div>
      <hr className="separator" />
    </li>
  )
}

export default CommentItem
