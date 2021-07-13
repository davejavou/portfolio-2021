import Slider from 'react-slick'
import Image from 'next/image'
import { portfolio, photography } from "../public/content"

export default function Projects({ content }) {

  /* Data can only be projects or photos */
  const projects = (content === 'photography') ? photography : portfolio

  const imgPath = '/content-images/'

  var sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //
    // adaptiveHeight: true
    // variableWidth: true
  }

  return (
    projects.map(({id, client, location, year, title, description, credit, color, slides}) => (
      <div key={`project-${id}`} id={`project-${id}`} style={{background: color}}>

        <Slider {...sliderSettings}>
          {/* WIP: Could be an image or youtube video, must click to lightbox, and arrows to go through set  */}
          {slides.map( slide =>
            <div key={`${id}-${slide.id}`}> {/* This container div will be styled by react-slick carosuel. Do not style or add classNames */}
              <div className="w-full h-portfolio-item max-h-screen">
                <img className="object-contain h-full mx-auto" src={`${imgPath}Slide-${id}-${slide.id}.png`} alt={`Slide-${id}-${slide.id}`} />
              </div>
            </div>
          )}
        </Slider>

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