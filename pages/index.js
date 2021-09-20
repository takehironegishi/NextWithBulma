import { Footer } from "components/Footer"
import { Layout } from "components/Layout"
import { Newsletter } from "components/Newsletter"
import { ResourceHighlight } from "components/ResourceHighlight"
import { ResourceList } from "components/ResourceList"
import { resources } from "api/data"

const Home = () => {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  )
}

export default Home