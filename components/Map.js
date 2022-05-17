import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  useEffect(() => {
    // Create a new instance of the map
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29211, 39.39171],
      zoom: 3
    })
  }, [])
  
  return <div className={style.wrapper} id='map' />
}

export default Map