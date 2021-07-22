import IconIsland from '../components/custom-icons'

export default function Chill() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-dark text-white">
      <a className="btn btn-blue w-64" rel="noopener" href="https://cutterscove.com/" title="Watch the fish at Cutter's Cove">
        <IconIsland className="btn-icon" />
        Chill.
      </a>
    </div>
  )
}