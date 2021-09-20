import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Newsletter } from "../components/Newsletter"
import { ResourceHighlight } from "../components/ResourceHighlight"
import { ResourceList } from "../components/ResourceList"

const Home = () => {
  return (
    <>
      <Navbar />
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </>
  )
}

export default Home