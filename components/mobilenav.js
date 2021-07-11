import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'

export default function MobileNav() {

  const { pathname } = useRouter()

  return (
    <>
      {/* Vertical Space Holder */}
      <div className="h-sm-nav w-full hidden md:hidden"></div>

      <ul className="md:hidden fixed bottom-0 h-sm-nav w-full bg-gray-100">
        <Link href={`/`}><a className={cn({'text-blue-500' : pathname === '/' || pathname ==='/about'})}>David Cutter</a></Link>
        <Link href={`/portfolio`}><a className={cn({'text-blue-500' : pathname === '/portfolio'})}>Portfolio</a></Link>
        <Link href={`/photography`}><a className={cn({'text-blue-500' : pathname === '/photography'})}>Photography</a></Link>
      </ul>
    </>
  )
}