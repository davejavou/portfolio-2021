export default function Sidebar({ children }) {
  return (
    <aside className="fixed top-0 left-0 h-full w-md-sidebar lg:w-lg-sidebar hidden md:block">
      {children}
    </aside>
  )
}
