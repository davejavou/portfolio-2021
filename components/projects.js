import Image from 'next/image'
import { portfolio, photography } from "../public/content"

export default function Projects({ content }) {

  /* Data can only be projects or photos */
  const projects = (content === 'photography') ? photography : portfolio

  const imgPath = '/content-images/'

  return (
    projects.map(({id, client, location, year, title, description, credit, color, slides}) => (
      <div key={id} id={id} className="h-portfolio-item relative" style={{background: color}}>

        {/* WIP: Could be an image or youtube video, must click to lightbox, and arrows to go through set  */}
        {slides.map( slide =>
          <Image src={`${imgPath}Slide-${id}-${slide.id}.png`} alt={`Slide-${id}-${slide.id}`} layout="fill" />
        )}

        {/* Dev Helper */}
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

      </div>
    ))
  )
}