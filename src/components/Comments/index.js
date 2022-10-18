import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  likeUserComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteUser = id => {
    const {commentList} = this.state
    const updatedUserList = commentList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentList: updatedUserList})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const containerBackgroundClassNames = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newCommentList = {
      id: uuidv4(),
      name,
      comment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      initialColorClassName: containerBackgroundClassNames,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newCommentList],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {name, comment, commentList} = this.state
    // console.log(name)
    console.log(commentList)
    const count = commentList.length
    return (
      <div className="home-container">
        <div className="cards-container">
          <div className="card-container">
            <h1 className="heading">Comments</h1>
            <p className="details">Say something about 4.0 Technologies</p>
            <form
              className="contact-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                placeholder="Your Name"
                type="text"
                value={name}
                className="name"
                onChange={this.onChangeName}
              />
              <textarea
                rows="8"
                cols="40"
                placeholder="Your Comment"
                value={comment}
                className="your-comment"
                onChange={this.onChangeComment}
              >
                ,
              </textarea>
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="image"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <hr className="separator" />
        <div>
          <div className="comments-container">
            <p className="count">{count}</p>
            <p className="comment">Comments</p>
          </div>
          <ul className="list-container">
            {commentList.map(eachComment => (
              <CommentItem
                commentListDetails={eachComment}
                key={eachComment.id}
                deleteUser={this.deleteUser}
                likeUserComment={this.likeUserComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
