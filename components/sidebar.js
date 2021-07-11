export default function Sidebar({ children }) {
  return (
    <aside className="h-screen sticky top-0 hidden md:block">
      <div className="w-md-sidebar lg:w-lg-sidebar">
        {children}
      </div>
    </aside>
  )
}
