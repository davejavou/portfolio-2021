import { useState, useRef, useEffect } from 'react';
import Router, { useRouter } from 'next/router'
import Slider from 'react-slick'
import { portfolio, photography } from "../public/content"
import FsLightbox from 'fslightbox-react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { NavSpacer } from './nav';

const arrowStyle = "z-10 absolute top-1/2 -translate-y-1/2 text-white w-16 h-24 cursor-pointer opacity-25 hover:opacity-100 focus:opacity-100"

function NextArrow({ className, onClick }) {
  return (
    <Icon
      className={`${className} ${arrowStyle} right-8`}
      onClick={onClick}
      icon={faAngleRight}
    />
  );
}

function PrevArrow({ className, onClick }) {
  return (
    <Icon
      className={`${className} ${arrowStyle} left-8`}
      onClick={onClick}
      icon={faAngleLeft}
    />
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
      <NavSpacer bg={projects[0].color} className="hidden md:block" />

      {/* Carosuel */}
      {projects.map(({client, location, year, title, description, credit, color, slides, projectRef, sliderRef}, projectIndex) =>
        <div key={projectIndex} ref={projectRef} style={{background: color}}>

          <div className="flex justify-between text-white text-lg font-light uppercase p-8 pb-0">
            <span>{client}</span>
            <span>{location}, {year}</span>
          </div>

          <Slider ref={sliderRef} {...sliderSettings}>
            {/* WIP: Could be an image or youtube video, must click to lightbox, and arrows to go through set  */}
            {slides.map((slide, slideIndex) =>
              <div key={`${projectIndex}-${slideIndex}`}> {/* This container div will be styled by react-slick carosuel. Do not style or add classes */}
                <div
                  className="w-full flex flex-col justify-center content-center overflow-visible py-8 max-w-max-slide-width mx-auto cursor-pointer"
                  onClick={() => {
                    setLightboxState(!lightboxState)
                    setlightboxIndex(slide.globalIndex)
                  }}
                >
                  {(slide.type === 'image') &&
                    <img className="object-contain h-sm-slide-height md:h-md-slide-height lg:h-lg-slide-height max-h-max-slide-height drop-shadow-lg" src={slide.ssrc} alt={title} />
                  }
                  {(slide.type === 'youtube') &&
                    <div className="h-lg-slide-height max-h-max-slide-height flex flex-col justify-center content-center">
                      <div className="relative h-0 overflow-hidden pb-video-ratio">
                        <iframe className="absolute top-0 left-0 w-full h-full" src={slide.ssrc} title={title} frameBorder="0" allowFullScreen />
                      </div>
                    </div>
                  }
                </div>
              </div>
            )}
          </Slider>

          <div className="text-white pb-8 px-10 mx-auto max-w-prose">
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