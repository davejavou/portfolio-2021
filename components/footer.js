import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFish, faFileAlt } from '@fortawesome/free-solid-svg-icons'

const iconStyle = "fill-current text-blue-light h-6 w-6 hover:text-blue-lightest"

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-around w-3/4 lg:w-1/2 mx-auto pt-8 pb-5">
        <a target="_blank" href="https://www.linkedin.com/in/davejavou/" title="Dave Cutter on LinkedIn"><Icon className={iconStyle} icon={faLinkedin} /></a>
        <a target="_blank" href="https://cutterscove.com/" title="Watch the fish at Cutter's Cove"><Icon className={iconStyle} icon={faFish} /></a>
        <a target="_blank" href="https://docs.google.com/document/d/1LZtQ4O3Wjzt2EAibHtvVb8OD6I7S0T7hCHDg_aqJudY/edit?usp=sharing" title="Dave Cutter's Resume on Google Docs"><Icon className={iconStyle} icon={faFileAlt} /></a>
      </div>
      <div className="p-5 text-xs text-center text-gray-lightest">Copyright &copy; Dave Cutter {new Date().getFullYear()}</div>
    </footer>
  )
}