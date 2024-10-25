import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Particle from "../Components/Particles"


const Home = () => {
  return (
    <div>
        <Particle />
      <div className="home bg-cover">
        <Navbar className="fixed" />
        <Hero className="px-6" />
      </div>

    </div>
  )
}

export default Home