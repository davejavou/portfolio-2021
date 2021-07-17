import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFish, faFileAlt } from '@fortawesome/free-solid-svg-icons'

const iconClasses = "fill-current text-blue-500 m-5"

export default function Footer() {
  return (
    <footer className="">
      <div className="text-center">
        <a href="https://www.linkedin.com/in/davejavou/" title="Dave Cutter on LinkedIn" target="_blank"><Icon icon={faLinkedin} size="2x" className={iconClasses} /></a>
        <a href="https://cutterscove.com/" title="Relax a little. Watch the fish at Cutter's Cove." target="_blank"><Icon icon={faFish} size="2x" className={iconClasses} /></a>
        <a href="https://tinyurl.com/davecutter" title="Dave Cutter's Resume on Google Docs" target="_blank"><Icon icon={faFileAlt} size="2x" className={iconClasses} /></a>
      </div>
      <div className="p-5 text-xs text-center text-gray-500">Copyright &copy; Dave Cutter {new Date().getFullYear()}</div>
    </footer>
  )
}