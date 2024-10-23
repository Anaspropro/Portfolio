import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"


const Home = () => {
  return (
    <div className="home bg-cover">
      <Navbar className="fixed" />
      <Hero className="px-6" />
    </div>
  )
}

export default Home