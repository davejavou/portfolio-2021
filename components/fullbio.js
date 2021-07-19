import { NavSpacer } from './nav';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default function FullBio() {
  return (
    <div className="h-full bg-blue">
      <NavSpacer className="hidden md:block" />
      <div className="p-5 max-w-prose mx-auto">
        <img src="/images/at-work.jpg" className="w-full my-5 shadow-lg rounded-md transform rotate-3" alt="Candid at the water cooler" />
        <h2 className="mb-5 font-serif font-bold text-2xl lg:text-3xl">
          <span className="md:hidden">About </span>Dave Cutter <small className="text-xs font-light">(On Right)</small>
        </h2>
        <p className="mt-5 mb-10 text-lg leading-relaxed max-w-prose">
          I’m a designer and front-end engineer with 23 years experience in media &amp; software development for startup &amp; enterprise clients. I specialize in responsive design, intuitive UI, and elegant code. I’m a Professional Design Member of AIGA and an Adobe Certified Expert in Photoshop. (A.C.E.) In my free time I study the History &amp; Philosophy of Science and Political Economy at the University of Melbourne, and sail (ASA certified sailor).
        </p>
        <p className="mt-5 mb-10 text-lg leading-relaxed max-w-prose">
          <strong>Dev Highlights:</strong> HTML, CSS, Javascript, React, Node, Angular, Vue, PHP, XML/XSLT, JQuery, VbScript, & Coldfusion
        </p>
        <a className="btn btn-blue w-full" target="_blank" rel="noopener" href="https://www.linkedin.com/in/davejavou/" title="Dave Cutter on LinkedIn">
          <Icon className="btn-icon" icon={faLinkedin} />
          LinkedIn
        </a>
        <div className="flex my-2">
          <a className="btn btn-blue w-full flex-grow-1 mr-1" target="_blank" rel="noopener" href="https://docs.google.com/document/d/1LZtQ4O3Wjzt2EAibHtvVb8OD6I7S0T7hCHDg_aqJudY/edit?usp=sharing" title="Dave Cutter's Resume on Google Docs">
            <Icon className="btn-icon" icon={faFileAlt} />
            Resume (Doc)
          </a>
          <a className="btn btn-blue w-full flex-grow-1 ml-1" target="_blank" rel="noopener" href="https://docs.google.com/document/d/1LZtQ4O3Wjzt2EAibHtvVb8OD6I7S0T7hCHDg_aqJudY/export?format=pdf" title="Download Dave Cutter's Resume PDF">
            <Icon className="btn-icon" icon={faFilePdf} />
            Resume (PDF)
          </a>
        </div>
        <ul className="my-20 text-sm leading-relaxed text-center text-blue-lightest">
          <li className="uppercase">Made in Melbourne, July 2021</li>
          <li>During <a href="https://omny.fm/shows/triple-m-rock-interviews/triple-m-melbourne-lockdown-number-5-parody-song" target="_blank" rel="noopener">Lockdown Number Five.</a></li>
          <li className="mt-4">Design Inspired by <a href="http://charliewaite.me/" target="_blank" rel="noopener">Charlie Waite's Portfolio.</a></li>
          <li>Portrait of Dave with Tie by A. Labbett.</li>
          <li>Portrait of Dave with Monsters Inc. by C. Heldt.</li>
          <li>Icons by <a href="https://fontawesome.com/" target="_blank" rel="noopener">FontAwesome.</a></li>
        </ul>
      </div>
    </div>
  )
}