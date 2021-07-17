import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFish, faFileAlt } from '@fortawesome/free-solid-svg-icons'

const iconStyle = "fill-current text-blue-500 h-8 w-8"

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-around w-3/4 lg:w-1/2 mx-auto mb-5">
        <a className={iconStyle} target="_blank" href="https://www.linkedin.com/in/davejavou/" title="Dave Cutter on LinkedIn"><Icon icon={faLinkedin} /></a>
        <a className={iconStyle} target="_blank" href="https://cutterscove.com/" title="Relax a little. Watch the fish at Cutter's Cove."><Icon icon={faFish} /></a>
        <a className={iconStyle} target="_blank" href="https://docs.google.com/document/d/1LZtQ4O3Wjzt2EAibHtvVb8OD6I7S0T7hCHDg_aqJudY/edit?usp=sharing" title="Dave Cutter's Resume on Google Docs"><Icon icon={faFileAlt} /></a>
      </div>
      <div className="p-5 text-xs text-center text-gray-500">Copyright &copy; Dave Cutter {new Date().getFullYear()}</div>
    </footer>
  )
}