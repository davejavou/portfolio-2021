export default function QuickBio() {
  return (
    <div className="w-5/6 md:w-3/4 mt-0 lg:mt-20 mx-auto">
      <img src="/images/portrait.jpg" className="w-full max-w-sm mx-auto my-10 rounded-full border-4 border-white shadow-xl" alt="A Portrait of the Artist." />
      <h1 className="my-10 mx-auto font-serif font-bold text-3xl md:text-2xl lg:text-3xl">
        Dave Cutter. <br />
        Designer &amp; <br />
        FE Developer.
      </h1>
      <h2 className="my-10 text-lg">
        Currently designing at <a href="https://www.artprocessors.net/" title="Art Processors" target="_blank">Art Processors</a>. Former designer &amp; developer at <a href="https://www.espn.com.au/" title="ESPN/Disney" target="_blank">ESPN/Disney</a> &amp; <a href="https://sports.yahoo.com/" title="Yahoo! Sports" target="_blank">Yahoo!</a>
      </h2>
    </div>
  )
}