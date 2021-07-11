import Image from 'next/image'
import { projects, photosets } from "../public/content"

export default function SetList({ content }) {

  /* Data can only be projects or photos */
  const sets = (content === 'photosets') ? photosets : projects

  const imgPath = '/content-images/'

  return (
    sets.map(({id, client, location, year, title, description, credit, color}) => (
      <div key={id} id={id} className="h-portfolio-item relative" style={{background: color}}>

        {/* WIP: Could be an image or youtube video, must click to lightbox, and arrows to go through set  */}
        <Image src={`${imgPath}${id}.png`} alt="Picture of the author" layout="fill" />

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