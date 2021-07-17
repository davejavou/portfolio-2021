export default function Main({ children }) {
  return (
    <main className="flex flex-col h-screen md:ml-md-sidebar lg:ml-lg-sidebar">
      {children}
    </main>
  )
}
