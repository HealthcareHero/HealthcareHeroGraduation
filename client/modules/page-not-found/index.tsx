import { styles } from './styles/index.style'
import Link from 'next/link'
import Image from 'next/image'
import HtmlHead from 'client/common/components/html-head'
import { Button } from 'antd';

export default function PageNotFound() {
  return (
    <>
      <HtmlHead title="Ward 404" description="Page Not Found" />
      
      <div className={styles.container}>
        <Image 
          src="/assets/img/404/nurse-injection.svg"
          alt="Ward 404 - Injection"
          width={500}
          height={500}
        />
      
        <div>Opps! Seems like you have entered the wrong ward. Are you here for injection?</div>
        
        <Link href={"/"}>
          <Button type="primary">Return</Button>
        </Link>
      </div>
    </>
  )
}
