import { ProfileSelectionProps } from './index.type'
import { routes } from 'common/utils/navigation/routes'
import Link from 'next/link'
import HtmlHead from 'common/components/html-head'

export default function ProfileSelection({children, name, description}: ProfileSelectionProps) {
  return (
    <>
      <HtmlHead title={name} description={description} />
      <div>Scroll bar</div>
      <div>{children}</div>
    </>
  )
}
