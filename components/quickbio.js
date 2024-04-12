import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function QuickBio() {
  return (
    <div className="bg-white text-gray max-w-prose w-5/6 lg:mt-15 mx-auto">
      <img src="https://davecutter.com/portfolio/public/images/portrait.jpg" className="max-h-72 mx-auto my-10 rounded-full border-4 border-white shadow-xl" alt="A Portrait of the Artist." />
      <h1 className="my-10 mx-auto font-serif font-bold text-3xl md:text-2xl lg:text-4xl">
        Dave Cutter. <br />
        Designer &amp; <span className="inline-block">FE Developer.</span>
      </h1>
      <h2 className="my-10 text-lg text-gray-lightest">
        Product Designer at <a className="text-blue-light hover:text-blue-lightest" href="https://www.artprocessors.net/" title="Art Processors" target="_blank" rel="noopener">Art Processors</a>. Designer &amp; developer at <a href="https://www.espn.com.au/" className="text-blue-light hover:text-blue-lightest" title="ESPN/Disney" target="_blank" rel="noopener">ESPN/Disney</a> &amp; <a className="text-blue-light hover:text-blue-lightest" rel="noopener" href="https://sports.yahoo.com/" title="Yahoo! Sports" target="_blank">Yahoo!</a>
      </h2>
      <a className="btn btn-blue w-full mb-2" target="_blank" rel="noopener" href="https://davecutter.com/portfolio/public/David-Cutter-Resume.pdf" title="Download Dave Cutter's Resume PDF">
        <Icon className="btn-icon" icon={faFilePdf} />
        Resume
      </a>
      <a className="btn btn-blue w-full mb-2" target="_blank" rel="noopener" href="https://www.linkedin.com/in/davejavou/" title="Dave Cutter on LinkedIn">
        <Icon className="btn-icon" icon={faLinkedin} />
        LinkedIn
      </a>
      <a className="btn btn-blue w-full mb-12" target="_blank" rel="noopener" href="mailto:dave@davecutter.com" title="Email Dave">
        <Icon className="btn-icon" icon={faEnvelope} />
        Email Dave
      </a>
    </div>
  )
}