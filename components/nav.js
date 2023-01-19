import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCameraRetro, faUser } from '@fortawesome/free-solid-svg-icons'

export function NavSpacer({className, bg}) {
  return <div className={`${className} h-nav-height w-full block flex-shrink-0`} style={{background: bg}}>&nbsp;</div>
}

export default function Nav() {

  const { pathname } = useRouter()

  return (
    <div className="z-20 hidden md:flex fixed -top-px h-nav-height w-full md:w-md-nav-width lg:w-lg-nav-width">
      <Link href={`/`} className={cn('tab', {'tab-active' : pathname === '/' || pathname ==='/portfolio'})}>Portfolio</Link>
      <Link href={`/photography`} className={cn('tab', {'tab-active' : pathname === '/photography'})}>Photography</Link>
      <Link href={`/about`} className={cn('tab', {'tab-active' : pathname === '/about'})}>About</Link>
    </div>
  )
}

export function MobileNav() {

  const { pathname } = useRouter()

  return (
    <div className="z-20 flex md:hidden fixed -bottom-px h-nav-height w-full">
      <Link href={`/`} className={cn('tab', {'tab-active' : pathname === '/' || pathname ==='/about'})}>
        <Icon className="tab-icon" icon={faUser} />
        David Cutter
      </Link>
      <Link href={`/portfolio`} className={cn('tab', {'tab-active' : pathname === '/portfolio'})}>
        <Icon className="tab-icon" icon={faBookOpen} />
        Portfolio
      </Link>
      <Link href={`/photography`} className={cn('tab', {'tab-active' : pathname === '/photography'})}>
        <Icon className="tab-icon" icon={faCameraRetro} />
        Photography
      </Link>
    </div>
  )
}