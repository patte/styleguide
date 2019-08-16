import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'
import colors from '../../theme/colors'
import { mUp } from '../../theme/mediaQueries'
import { serifBold28, serifBold38, serifRegular15 } from '../Typography/styles'

const styles = {
  body: css({
    ...serifRegular15,
    color: colors.text,
    marginBottom: 21
  }),
  highlight: css({
    ...serifBold28,
    color: colors.text,
    marginBottom: 21,
    [mUp]: {
      ...serifBold38
    }
  })
}

const DebateComment = ({ highlight, preview }) => {
  return (
    <>
      {!highlight && preview && (
        <div {...styles.body}>
          <React.Fragment>
            {preview.string}
            {/* {!endsWithPunctuation && <Fragment>&nbsp;…</Fragment>} */}
          </React.Fragment>
        </div>
      )}
      {highlight && (
        <div {...styles.highlight}>
          &#171;
          {highlight}
          &#187;
        </div>
      )}
    </>
  )
}

export default DebateComment

DebateComment.propTypes = {
  highlight: PropTypes.string,
  preview: PropTypes.shape({
    string: PropTypes.string,
    more: PropTypes.bool
  })
}
