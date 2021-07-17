import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'

export default function Nav() {

  const { pathname } = useRouter()

  return (
    <>
      {/* Vertical Space Holder*/}
      <div className="h-md-nav w-full hidden md:block flex-shrink-0"></div>

      <ul className="z-10 hidden md:block fixed top-0 h-md-nav w-full bg-gray-100">
        <Link href={`/`}><a className={cn({'text-blue-500' : pathname === '/' || pathname ==='/portfolio'})}>Portfolio</a></Link>
        <Link href={`/photography`}><a className={cn({'text-blue-500' : pathname === '/photography'})}>Photography</a></Link>
        <Link href={`/about`}><a className={cn({'text-blue-500' : pathname === '/about'})}>About</a></Link>
      </ul>
    </>
  )
}