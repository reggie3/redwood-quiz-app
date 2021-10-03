import React from 'react'
import Link from '@mui/material/Link'
import { useMatch } from '@redwoodjs/router'
import getSanitizedString from '../../../../utils/getSanitizedString'
import { Typography } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyLink = ({ children, to, ...rest }) => {
  const matchInfo = useMatch(to)

  return (
    <Link
      href={to as string}
      color={matchInfo.match ? 'secondary' : 'inherit'}
      underline={matchInfo.match ? 'always' : 'none'}
      data-testid={`link-to-${getSanitizedString(children)}`}
    >
      {typeof children === 'string' ? (
        <Typography>{children}</Typography>
      ) : (
        children
      )}
    </Link>
  )
}

export default MyLink
