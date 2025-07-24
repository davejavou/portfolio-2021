import { NavSpacer } from './nav';

export default function FullBio() {
  return (
    <div className="md:min-h-screen bg-blue">
      <NavSpacer className="hidden md:block" />
      <div className="p-5 max-w-prose mx-auto">
        <img src="/portfolio_2021/assets/images/at-work.jpg" className="w-full my-5 shadow-lg rounded-md transform rotate-3" alt="Candid at the water cooler" />
        <h2 className="mb-8 font-serif font-bold text-2xl lg:text-3xl">
          <span className="md:hidden">About </span>Dave Cutter <small className="text-xs font-light italic">(On Right)</small>
        </h2>
        <p className="mt-5 mb-10 text-lg leading-relaxed max-w-prose">
          I’m a designer and front-end engineer with 25 years experience in media &amp; software development for startup &amp; enterprise clients. I specialize in responsive design, intuitive UI, and elegant code. I’m a Professional Design Member of AIGA and an Adobe Certified Expert in Photoshop. (A.C.E.) In my free time I study the History &amp; Philosophy of Science and International Politics at the University of Melbourne.
        </p>
        <p className="mt-5 mb-10 text-lg leading-relaxed max-w-prose">
          <strong>Dev Highlights:</strong> HTML, CSS, Javascript, React, Node, Angular, Vue, PHP, XML/XSLT, JQuery, VbScript, & Coldfusion
        </p>
        <p className="mt-5 mb-10 text-lg leading-relaxed max-w-prose">
          <strong>Design Highlights:</strong> User & Humanity Centered Design, UI, UX, Research, Figma, Sketch, Adobe, & Design Systems
        </p>
        <ul className="my-20 text-sm leading-relaxed text-center text-blue-lightest">
          <li className="uppercase">Made in Melbourne, July 2021</li>
          <li className="italic">During <a href="https://omny.fm/shows/triple-m-rock-interviews/triple-m-melbourne-lockdown-number-5-parody-song" target="_blank" rel="noopener">Lockdown Number Five.</a></li>
          <li className="mt-4">Design Inspired by <a href="http://charliewaite.me/" target="_blank" rel="noopener">Charlie Waite's Portfolio.</a></li>
          <li>Portrait of Dave with Tie by A. Labbett.</li>
          <li>Portrait of Dave with Monsters Inc. by C. Heldt.</li>
          <li>Icons by <a href="https://fontawesome.com/" target="_blank" rel="noopener">FontAwesome.</a></li>
          <li className="mt-4">Last Update July 2025</li>
        </ul>
      </div>
    </div>
  )
}