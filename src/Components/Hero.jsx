import homeLogo from '/home-main.svg'

const Hero = () => {

  return (
    <div className="grid md:grid-cols-2 py-6  md:px-32 items-center">
      <div className="text-white text-xl font-medium md:text-5xl">
        <h1 className='animate-bounce'>Hi there! 👋🏽</h1>
        <h1 className="md:py-4">I&apos;m <span className="text-[#c770f0] font-medium">Anas Abimbola Aliu</span></h1>
        <h1 className="text-[#cc70f0] py-3">Frontend Developer</h1>
      </div>
      <img src={homeLogo} alt="" />
    </div>
  )
}

export default Hero