import Slider from 'react-slick'
import { portfolio, photography } from "../public/content"

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

  // https://react-slick.neostack.com/
  var sliderSettings = {
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

  return (
    projects.map(({id, client, location, year, title, description, credit, color, slides}) => (
      <div key={`project-${id}`} id={`project-${id}`} style={{background: color}}>

        <div className="flex justify-between text-white text-lg font-light uppercase p-8 pb-1">
          <span>{client}</span>
          <span>{location}, {year}</span>
        </div>

        <Slider {...sliderSettings}>
          {/* WIP: Could be an image or youtube video, must click to lightbox, and arrows to go through set  */}
          {slides.map( slide =>
            <div key={`${id}-${slide.id}`}> {/* This container div will be styled by react-slick carosuel. Do not style or add classNames */}
              <div className="w-full">
                <img className="object-contain h-project-row max-h-max-project-row mx-auto" src={`${imgPath}Slide-${id}-${slide.id}.png`} alt={`Slide-${id}-${slide.id}`} />
              </div>
            </div>
          )}
        </Slider>

        <div className="text-white py-8 px-10">
            <h2 className="text-2xl font-serif pb-2">{title}</h2>
            <p>{description}</p>
        </div>

        {/* Dev Helper */}
        {/*
        <div className="absolute top-4 left-4 w-3/4 text-xs bg-gray-100 bg-opacity-50 p-10">
          id: {id} <br />
          client: {client} <br />
          location: {location} <br />
          year: {year} <br />
          title: {title} <br />
          description: {description} <br />
          credit: {credit} <br />
          color: {color}
        </div>
        */}

      </div>
    ))
  )
}