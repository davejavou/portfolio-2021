import { useState, useRef, useEffect } from 'react';
import Router, { useRouter } from 'next/router'
import Slider from 'react-slick'
import { portfolio, photography } from "../public/content"
import FsLightbox from 'fslightbox-react';

function NextArrow({ className, onClick }) {
  return (
    <div
      className={`${className} z-10 absolute right-8 top-1/2 -translate-y-1/2 w-12 h-16 cursor-pointer opacity-25 hover:opacity-100 focus:opacity-100`}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="fill-current text-white"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>
    </div>
  );
}

function PrevArrow({ className, onClick }) {
  return (
    <div
      className={`${className} z-10 absolute left-8 top-1/2 -translate-y-1/2 w-12 h-16 cursor-pointer opacity-25 hover:opacity-100 focus:opacity-100`}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="fill-current text-white"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>
    </div>
  );
}

export default function Projects({ content }) {
  // Projects & Slides rendering data
  /* Data can only be projects or photos */
  const projects = (content === 'photography') ? photography : portfolio

  let slideglobalIndex = -1; // Index of all slides on page across all projects. Start with no slides (-1, because one slide would be index 0)
  // This map is adding ui information to the projects data, and outputting a flat list of all slides for the ligtbox
  const lightboxData = projects.map(project => {
    project.projectRef = useRef()
    project.sliderRef = useRef()
    return project.slides.map((slide, index) => {
      // Add Slide Indexes, one index for the whole page of slides, and one index for this project slider
      slideglobalIndex++
      slide.globalIndex = slideglobalIndex
      slide.sliderIndex = index
      return {
        project,
        slide,
        src: slide.zsrc,
        caption: (
          <div className="text-white py-8 px-10">
            <h2 className="text-2xl font-serif pb-2">{project.client}: {project.title}</h2>
            <p>({project.location}, {project.year}) {project.description}</p>
          </div>
        )
      }
    })
  }).flat() // Flat because the lightbox moves through all slides in all projects.


  // Configure Carosuel
  // https://react-slick.neostack.com/
  const sliderSettings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }


  // Route to Project and/or slide
  const { query, pathname } = useRouter()


  /* Configure Lightbox State */
  const [lightboxState, setLightboxState] = useState(false)
  const [lightboxIndex, setlightboxIndex] = useState(null)


  // Scroll to and show a url-queried slide, ex: "?s=7"
  useEffect(() => {
    const s = isNaN(Number(query.s)) ? null : Number(query.s)

    if (lightboxData[s]) {
      const project = lightboxData[s].project.projectRef.current || null
      const slider = lightboxData[s].project.sliderRef.current || null
      const sliderIndex = lightboxData[s].slide.sliderIndex || 0

      if (project && slider) {
        project.scrollIntoView({ behavior: 'smooth' })
        slider.slickGoTo(sliderIndex)
      }
    }
  }, [lightboxData, query])


  // Update URL when using the lightbox
  const router = useRouter()
  function setUrl(index) {
    if (typeof index === 'number' && isFinite(index)) {
      const newUrl = {
        pathname,
        query: {
          s: index
        }
      }
      setlightboxIndex(index)
      Router.push(newUrl, undefined, { shallow: false, scroll: false })
    }
  }


  return (
    <>
      {/* Carosuel */}
      {projects.map(({client, location, year, title, description, credit, color, slides, projectRef, sliderRef}, projectIndex) =>
        <div key={projectIndex} ref={projectRef} style={{background: color}}>

          <div className="flex justify-between text-white text-lg font-light uppercase p-8 pb-1">
            <span>{client}</span>
            <span>{location}, {year}</span>
          </div>

          <Slider ref={sliderRef} {...sliderSettings}>
            {/* WIP: Could be an image or youtube video, must click to lightbox, and arrows to go through set  */}
            {slides.map((slide, slideIndex) =>
              <div key={`${projectIndex}-${slideIndex}`}> {/* This container div will be styled by react-slick carosuel. Do not style or add classes */}
                <div className="w-full">
                  {(slide.stype === 'image') ?
                    <img
                      className="object-contain h-project-row max-h-max-project-row mx-auto"
                      src={slide.ssrc} alt={title}
                      onClick={() => {
                        setLightboxState(!lightboxState)
                        setlightboxIndex(slide.globalIndex)
                      }}
                    />
                  :
                    <p
                      className="text-white bg-black h-project-row max-h-max-project-row mx-auto"
                      onClick={() => {
                        setLightboxState(!lightboxState)
                        setlightboxIndex(slide.globalIndex)
                      }}
                    >
                      Not an image
                    </p>
                  }
                </div>
              </div>
            )}
          </Slider>

          <div className="text-white py-8 px-10">
            <h2 className="text-2xl font-serif pb-2">{title}</h2>
            <p>{description}</p>
          </div>

        </div>
      )}

      {/* Lightbox */}
      <FsLightbox
        sources={lightboxData.map(slide => slide.src)}
        captions={lightboxData.map(slide => slide.caption)}
        sourceIndex={lightboxIndex}
        toggler={lightboxState}
        onOpen={ e => setUrl(e.stageIndexes.current)}
        onSlideChange={ e => setUrl(e.stageIndexes.current)}
        // disableLocalStorage={true}
        // loadOnlyCurrentSource={true}
        disableThumbs={true}
        // initialAnimation="scale-in-long"
        // slideChangeAnimation="scale-in"
      />
    </>
  )
}