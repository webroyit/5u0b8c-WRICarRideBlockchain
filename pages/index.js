import Navbar from "../components/Navbar"
import Map from "../components/Map"

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        <Map />
      </div>
      
      <h1>WRI Car Ride Blockchain</h1>
    </div>
  )
}
