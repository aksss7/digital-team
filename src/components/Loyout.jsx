import {Header} from './../components/Header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout