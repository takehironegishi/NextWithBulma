import { Footer } from "components/Footer"
import { Layout } from "components/Layout"
import { Newsletter } from "components/Newsletter"
import { ResourceHighlight } from "components/ResourceHighlight"
import { ResourceList } from "components/ResourceList"

const Home = ({ resources }) => {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  }
}

export default Home