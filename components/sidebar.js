export default function Sidebar({ children }) {
  return (
    <aside className="fixed top-0 left-0 h-full w-md-sidebar lg:w-lg-sidebar hidden md:block">
      <div className="flex flex-col justify-between h-full">
        {children}
      </div>
    </aside>
  )
}
