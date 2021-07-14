import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import { portfolio, photography } from "../public/content"
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'

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
  /* Data can only be projects or photos */
  const projects = (content === 'photography') ? photography : portfolio

  const imgPath = '/content-images/'

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

  // Configure Lightbox
  // https://github.com/michelecocuccio/simple-react-lightbox
  // Currently this works by surrounding the root <App /> with <SimpleReactLightbox>, there should be a better way - having the whole lightbox used in this file would be best.
  const { openLightbox } = useLightbox()

  const lightboxSettings = {
    settings: {
      lightboxTransitionSpeed: 0.3
    },
    thumbnails: {
      showThumbnails: false,
    }
  }

  // Route to Project and/or slide
  const { query } = useRouter()
  let targetProject = null
  let targetSlider = null
  let targetSlide = null

  // Projects & Slides rendering data
  let slideglobalIndex = -1; // Index of all slides on page across all projects. Start with no slides (-1, because one slide would be index 0)
  // This map is adding ui information to the projects data, and outputting a flat list of all slides for the ligtbox
  const lightboxElements = projects.map(project => {
    project.projectRef = useRef()
    project.sliderRef = useRef()
    // Project Query
    if (project.id == query.p) {
      targetProject = project.projectRef
    }
    return project.slides.map((slide, index) => {
      // Add Slide Indexes, one index for the whole page of slides, and one index for this project slider
      slideglobalIndex++
      slide.globalIndex = slideglobalIndex
      slide.sliderIndex = index
      // Slide query. If exists, will overrule any project query.
      if (slide.id == query.s) {
        targetProject = project.projectRef
        targetSlider = project.sliderRef
        targetSlide = slide.sliderIndex
      }
      return {
        caption: `${project.client}: ${project.title}`,
        src: `${imgPath}Zoom-${project.id}-${slide.id}.png`
      }
    })
  }).flat()

  // Scroll to target project and/or set the slide
  useEffect(() => {
    if (targetProject) {
      targetProject.current.scrollIntoView({ behavior: 'smooth' })
    }
    if (targetSlider && targetSlide) {
      targetSlider.current.slickGoTo(targetSlide)
    }
  }, [targetProject, targetSlider, targetSlide])

  return (
    <>
      {/* Carosuel */}
      {projects.map(({id, client, location, year, title, description, credit, color, slides, projectRef, sliderRef}) =>
        <div key={`project-${id}`} ref={projectRef} style={{background: color}}>

          <div className="flex justify-between text-white text-lg font-light uppercase p-8 pb-1">
            <span>{client}</span>
            <span>{location}, {year}</span>
          </div>

          <Slider ref={sliderRef} {...sliderSettings}>
            {/* WIP: Could be an image or youtube video, must click to lightbox, and arrows to go through set  */}
            {slides.map(slide =>
              <div key={`${id}-${slide.id}`}> {/* This container div will be styled by react-slick carosuel. Do not style or add classes */}
                <div className="w-full">
                  <img
                    className="object-contain h-project-row max-h-max-project-row mx-auto"
                    src={`${imgPath}Slide-${id}-${slide.id}.png`} alt={`Slide-${id}-${slide.id}`}
                    onClick={() => openLightbox(slide.globalIndex)}
                  />
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
      <SRLWrapper options={lightboxSettings} elements={lightboxElements} />
    </>
  )
}