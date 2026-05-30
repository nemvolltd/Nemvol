import Header from './Header'
import Footer from './Footer'
import BackToTop from '../ui/BackToTop'
import Breadcrumb from '../ui/Breadcrumb'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <Breadcrumb />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout