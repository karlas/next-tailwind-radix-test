'use client'

import {Button} from '@/components/button'

export function Buttons() {
  const buttonProps = {
    onClick: () => console.log('Clicked!'),
    children: 'Click me!',
  }

  return (
    <div className="grid grid-cols-3 gap-3 my-4">
      <Button {...buttonProps} size="small" weight="regular" kind="primary" />
      <Button {...buttonProps} size="small" weight="regular" kind="neutral" />
      <Button {...buttonProps} size="small" weight="regular" kind="destructive" />
      <Button {...buttonProps} size="small" weight="accent" kind="primary" />
      <Button {...buttonProps} size="small" weight="accent" kind="neutral" />
      <Button {...buttonProps} size="small" weight="accent" kind="destructive" />
      <Button {...buttonProps} size="medium" weight="regular" kind="primary" />
      <Button {...buttonProps} size="medium" weight="regular" kind="neutral" />
      <Button {...buttonProps} size="medium" weight="regular" kind="destructive" />
      <Button {...buttonProps} size="medium" weight="accent" kind="primary" />
      <Button {...buttonProps} size="medium" weight="accent" kind="neutral" />
      <Button {...buttonProps} size="medium" weight="accent" kind="destructive" />
    </div>
  )
}
