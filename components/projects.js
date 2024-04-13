import Slider from 'react-slick'
import { portfolio, photography } from "./content"
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

function slideContent( {type, ssrc, psrc}, title ) {
  return (
    <div className="flex flex-col justify-center content-center my-4 h-sm-slide-height md:h-md-slide-height lg:h-lg-slide-height max-h-max-slide-height w-11/12 max-w-[960px] mx-auto">
      {(type === 'image') &&
        <img className="object-contain" src={ssrc} alt={title} />
      }
      {(type === 'video') &&
        <video controls disablePictureInPicture muted playsinline poster={psrc} className="drop-shadow-lg rounded-lg">
          <source src={ssrc} />
        </video>
      }
      {(type === 'youtube') &&
        <div className="flex flex-col justify-center content-center my-4">
          <div className="relative overflow-hidden pb-video-ratio">
            <iframe className="absolute top-0 left-0 w-full h-full drop-shadow-lg rounded-lg" src={`https://www.youtube-nocookie.com/embed/${ssrc}?rel=0&showinfo=0&autoplay=0&mute=1`} title={title} allowFullScreen />
          </div>
        </div>
      }
    </div>
  );
}

export default function Projects({ content }) {
  // Projects & Slides rendering data
  /* Data can only be projects or photos */
  const projects = (content === 'photography') ? photography : portfolio


  // Configure Carosuel
  // https://react-slick.neostack.com/
  const sliderSettings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }


  return (
    <>
      <NavSpacer bg={projects[0].color} className="hidden md:block" />

      {/* Carosuel */}
      {projects.map(({/*client,*/ location, year, title, description, link, credit, credit_link, color, slides, projectRef, sliderRef}, projectIndex) =>
        <div key={projectIndex} ref={projectRef} style={{background: color}}>

          <div className="flex justify-between text-sm md:text-md uppercase px-5 md:px-10 py-8 -mb-8">
            {/* <span>{client}</span> Hiding Client, seems less important, and usually mentioned in title */}
            <span>{location}, {year}</span>
          </div>

          {(slides.length < 2) ?
            // No Slider if only one slide  
            slides.map((slide) => slideContent(slide, title))
            :
            <Slider ref={sliderRef} {...sliderSettings} className="max-w-[1280px] mx-auto">
              {slides.map((slide, slideIndex) =>
                <div key={`${projectIndex}-${slideIndex}`}> {/* This container div will be styled by react-slick carosuel. Do not style or add classes */}
                  {slideContent(slide, title)}
                </div>
              )}
            </Slider>
          }

          <div className="pb-16 px-5 md:px-10 mx-auto w-full md:max-w-prose">
            <h2 className="text-2xl font-serif pb-2">{title}</h2>
            <p>{description}</p>
            {link && <a href={link} className="mt-2 flex items-center" target="_blank" rel="noopener"><Icon className="fill-current inline h-3 w-3 mr-2" icon={faExternalLinkAlt} />{title}</a>}
            {credit && <p className="mt-2 text-xs text-blue-lightest">{credit_link ? <a href={credit_link} target="_blank">{credit}</a> : credit}</p>}
          </div>

        </div>
      )}
    </>
  )
}