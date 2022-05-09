import Navbar from "../components/Navbar"

const style = {
  wrapper: `h-screen w-screen flex flex-col`
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <h1>WRI Car Ride Blockchain</h1>
    </div>
  )
}
