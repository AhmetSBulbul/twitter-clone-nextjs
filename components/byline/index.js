import React from 'react'

import cn from 'classnames'
import Stack from '../stack'
import Avatar from '../avatar'
import styles from './style.module.css'
import { ArrowBottom } from '../icons'
import Button from '../button'
import TextBody from '../text/body'

function Byline({
  name = 'Ahmet Safa Bülbül',
  slug = 'ahmetsafablbl1',
  className,
  ...props
}) {
  return (
    <Stack gap={8} {...props} className={cn([styles.body, className])}>
      <TextBody bold>{name}</TextBody>
      <TextBody className={styles.slug}>@{slug}</TextBody>
    </Stack>
  )
}

export default Byline
