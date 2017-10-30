import React from 'react'
import {css} from 'glamor'

import {Comment, CommentActions} from '../Comment'
import CommentComposer from '../CommentComposer/CommentComposer'
import {DepthBars} from './DepthBar'

const styles = {
  root: css({
    display: 'flex'
  }),
  commentComposerContainer: css({
    marginTop: '20px'
  }),
}

const range = (n) => Array.from(new Array(n))

const Row = ({t, visualDepth, head, tail, otherChild, comment, displayAuthor, showComposer, onAnswer, onUpvote, onDownvote, dismissComposer, submitComment, timeago}) => {
  const {createdAt, score} = comment

  return (
    <div {...styles.root}>
      <DepthBars count={visualDepth} head={head} tail={tail} />
      <div style={{flexGrow: 1, padding: otherChild ? '20px 0 20px 15px' : '20px 0'}}>
        <Comment
          timeago={timeago(createdAt)}
          {...comment}
        />

        <CommentActions
          t={t}
          score={score}
          onAnswer={onAnswer}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
        />

        {showComposer &&
          <Composer
            t={t}
            displayAuthor={displayAuthor}
            onCancel={dismissComposer}
            submitComment={submitComment}
          />
        }
      </div>
    </div>
  )
}

const Composer = ({t, displayAuthor, onCancel, submitComment}) => (
  <div {...styles.commentComposerContainer}>
    <CommentComposer
      t={t}
      displayAuthor={displayAuthor}
      onCancel={onCancel}
      submitComment={submitComment}
    />
  </div>
)

export default Row
