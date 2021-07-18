import { NavSpacer } from './nav';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default function FullBio() {
  return (
    <div className="h-full bg-blue">
      <NavSpacer className="hidden md:block" />
      <h1 className="md:hidden pt-5 text-center text-2xl uppercase font-serif font-bold">About Dave</h1>
      <div className="p-5 max-w-prose mx-auto">
        <img src="/images/at-work.jpg" className="w-full my-5 shadow-lg rounded-md transform rotate-3" alt="Candid at the water cooler" />
        <h2 className="mb-5 font-serif font-bold text-3xl md:text-2xl lg:text-3xl">
          Dave Cutter <small className="text-xs font-light">(On Right)</small>
        </h2>
        <p className="mt-5 mb-10 text-lg leading-loose max-w-prose">
          I’m a designer and front-end engineer with 23 years experience in media &amp; software development for startup &amp; enterprise clients. I specialize in responsive design, intuitive UI, and elegant code. I’m a Professional Design Member of AIGA and an Adobe Certified Expert in Photoshop. (A.C.E.) In my free time I study the History &amp; Philosophy of Science and Political Economy at the University of Melbourne, and sail (ASA certified sailor).
        </p>
        <p className="mt-5 mb-10 text-lg leading-loose max-w-prose">
          <strong>Dev Highlights:</strong> HTML, CSS, Javascript, React, Node, Angular, Vue, PHP, XML/XSLT, JQuery, VbScript, & Coldfusion
        </p>
        <a className="btn btn-blue w-full" target="_blank" href="https://www.linkedin.com/in/davejavou/" title="Dave Cutter on LinkedIn">
          <Icon className="btn-icon" icon={faLinkedin} />
          LinkedIn
        </a>
        <div className="flex my-2">
          <a className="btn btn-blue w-full flex-grow-1 mr-1" target="_blank" href="https://docs.google.com/document/d/1LZtQ4O3Wjzt2EAibHtvVb8OD6I7S0T7hCHDg_aqJudY/edit?usp=sharing" title="Dave Cutter's Resume on Google Docs">
            <Icon className="btn-icon" icon={faFileAlt} />
            Resume (Doc)
          </a>
          <a className="btn btn-blue w-full flex-grow-1 ml-1" target="_blank" href="https://docs.google.com/document/d/1LZtQ4O3Wjzt2EAibHtvVb8OD6I7S0T7hCHDg_aqJudY/export?format=pdf" title="Download Dave Cutter's Resume PDF">
            <Icon className="btn-icon" icon={faFilePdf} />
            Resume (PDF)
          </a>
        </div>
        <h3 className="mt-12 mb-2 font-serif font-bold text-lg text-center">
          Site Credits
        </h3>
        <p className="mb-10 text-sm leading-loose text-center">
          <ul>
            <li className="uppercase">Made in Melbourne, July 2021</li>
            <li>Inspired by <a href="http://charliewaite.me/" target="_blank">Charlie Waite's Portfolio</a></li>
            <li>Portrait of Dave with Tie by A. Labbett</li>
            <li>Portrait of Dave with Monsters Inc. by C. Heldt</li>
            <li>Icons by <a href="https://fontawesome.com/" target="_blank">FontAwesome</a></li>
          </ul>
        </p>

      </div>
    </div>
  )
}