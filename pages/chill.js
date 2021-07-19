import Link from 'next/link'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faFish } from '@fortawesome/free-solid-svg-icons'

export default function Chill() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-dark text-white">
      <a className="btn btn-blue w-64" rel="noopener" href="https://cutterscove.com/" title="Watch the fish at Cutter's Cove">
        <Icon className="btn-icon" icon={faFish} />
        Chill.
      </a>
    </div>
  )
}