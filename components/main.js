export default function Main({ children }) {
  return (
    <main className="relative flex flex-col md:h-screen md:ml-md-sidebar-width lg:ml-lg-sidebar-width">
      {children}
    </main>
  )
}
