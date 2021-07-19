import { useState, useRef, useEffect } from 'react';
import Router, { useRouter } from 'next/router'
import Slider from 'react-slick'
import { portfolio, photography } from "../public/content"
import FsLightbox from 'fslightbox-react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { NavSpacer } from './nav';

function NextArrow({ className, onClick }) {
  return (
    <Icon
      className={`${className} slick-arrow right-2 md:right-8`}
      onClick={onClick}
      icon={faAngleRight}
    />
  );
}

function PrevArrow({ className, onClick }) {
  return (
    <Icon
      className={`${className} slick-arrow left-2 md:left-8`}
      onClick={onClick}
      icon={faAngleLeft}
    />
  );
}

function getInt(str) {
  const num = Number(str)
  return Number.isInteger(num) ? num : null
}

export default function Projects({ content }) {
  const { query, pathname } = useRouter()

  // Projects & Slides rendering data
  /* Data can only be projects or photos */
  const projects = (content === 'photography') ? photography : portfolio

  // Build Data
  // This map is adding ui information to the projects data, and outputting a flat list of all slides for the ligtbox
  let slideglobalIndex = -1; // Index of all slides on page across all projects. Start with no slides (-1, because one slide would be index 0)
  const allSlides = projects.map(project => {
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
        src: slide.type === 'youtube' ? `https://www.youtube.com/watch?v=${slide.zsrc}&modestbranding=1&rel=0` : slide.zsrc,
        caption: (
          <div className="text-white md:py-8 md:px-10 md:max-w-prose text-left">
            <h2 className="text-lg md:text-2xl font-serif pb-2">{project.client}: {project.title}</h2>
            <p className="font-sans text-sm md:text-md">({project.location}, {project.year}) {project.description}</p>
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


  /* Configure lightbox State */
  const [lbState, setLbState] = useState(false)
  const [lbIndex, setLbIndex] = useState(null)


  // Scroll to and show a url-queried slide, ex: "?s=7"
  useEffect(() => {
    const s = getInt(query.s)
    if (s !== null) {
      goToSlide(s)
    }
  }, [query])


  // Update URL when using the lightbox
  function routeSlide(slideIndex) {
    const s = getInt(slideIndex)
    if (s !== null) {
      const newUrl = {
        pathname,
        query: { s }
      }
      setLbIndex(s)
      Router.push(newUrl, undefined, { shallow: false, scroll: false })
    }
  }

  function goToSlide(slideIndex) {
    const slideObj = allSlides[slideIndex] || null
    if (slideObj) {
      const project = slideObj.project.projectRef.current || null
      const slider = slideObj.project.sliderRef.current || null
      const sliderIndex = slideObj.slide.sliderIndex || 0
      if (project && slider) {
        project.scrollIntoView()
        slider.slickGoTo(sliderIndex)
      }
    }
  }


  return (
    <>
      <NavSpacer bg={projects[0].color} className="hidden md:block" />

      {/* Carosuel */}
      {projects.map(({client, location, year, title, description, link, credit, color, slides, projectRef, sliderRef}, projectIndex) =>
        <div key={projectIndex} ref={projectRef} style={{background: color}}>

          <div className="flex justify-between text-sm md:text-lg font-light uppercase px-5 md:px-10 py-8 -mb-8">
            <span>{client}</span>
            <span className="text-right">{location}, {year}</span>
          </div>

          <Slider ref={sliderRef} {...sliderSettings}>
            {/* WIP: Could be an image or youtube video, must click to lightbox, and arrows to go through set  */}
            {slides.map((slide, slideIndex) =>
              <div key={`${projectIndex}-${slideIndex}`}> {/* This container div will be styled by react-slick carosuel. Do not style or add classes */}
                <div
                  className="w-full flex flex-col justify-center content-center overflow-visible py-4 max-w-max-slide-width mx-auto cursor-pointer"
                  onClick={() => {
                    setLbState(!lbState)
                    setLbIndex(slide.globalIndex)
                  }}
                >
                  {(slide.type === 'image') &&
                    <img className="object-contain h-sm-slide-height md:h-md-slide-height lg:h-lg-slide-height max-h-max-slide-height drop-shadow-lg" src={slide.ssrc} alt={title} />
                  }
                  {(slide.type === 'youtube') &&
                    <div className="h-sm-slide-height md:h-md-slide-height lg:h-lg-slide-height max-h-max-slide-height flex flex-col justify-center content-center">
                      <div className="relative h-0 overflow-hidden pb-video-ratio">
                        <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube-nocookie.com/embed/${slide.ssrc}?modestbranding=1&rel=0`} title={title} frameBorder="0" allowFullScreen />
                      </div>
                    </div>
                  }
                </div>
              </div>
            )}
          </Slider>

          <div className="pb-12 px-5 md:px-10 mx-auto w-full md:max-w-prose">
            <h2 className="text-2xl font-serif pb-2">{title}</h2>
            <p>{description}</p>
            {link && <a href={link} className="mt-2 flex items-center" target="_blank"><Icon className="fill-current inline h-3 w-3 mr-2" icon={faExternalLinkAlt} />{title}</a>}
            {credit && <p className="mt-2 text-xs text-blue-lightest">{credit}</p>}
          </div>

        </div>
      )}

      {/* Lightbox */}
      <FsLightbox
        sources={allSlides.map(slide => slide.src)}
        captions={allSlides.map(slide => slide.caption)}
        sourceIndex={lbIndex}
        toggler={lbState}
        onOpen={ e => routeSlide(e.stageIndexes.current)}
        onSlideChange={ e => routeSlide(e.stageIndexes.current)}
        disableThumbs={true}
        slideshowTime={2000}
        zoomIncrement={0.75}
        UIFadeOutTime={1000000}
        slideChangeAnimation="fade-in"
        svg={{
          slideButtons: {
            previous: {
              height: '100px',
              width: '100px',
              viewBox: '0 0 256 512',
              d: 'M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'
            },
            next: {
              height: '100px',
              width: '100px',
              viewBox: '0 0 256 512',
              d: 'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'
            }
          }
        }}
      />
    </>
  )
}