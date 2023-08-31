import { useEffect, useState } from 'react'

import './App.css'
import { getCats, getOneCat } from './helpers/utils'
import { CatCard } from './components/catCard'
import { Cat } from './helpers/interfaces'

function App() {

  // const [oneCat, setOneCat] = useState<any>({})
    const [cats, setCats] = useState<Cat[]>([])

// useEffect for One cat
  // useEffect(() => {
  //   const _getOneCat = async () => {
  //     const cat = await getOneCat()
  //     setOneCat(cat)
  //   }

  //   _getOneCat()
  // }, [])

  // button for One Cat Image
  // const handleCatImage = async () => {
  //   const nextImage = await getOneCat()
  //   setOneCat(nextImage)
  // }
  
  useEffect(() => {
    const _getCats = async () => {
      const fetchedCats = await getCats()
      setCats(fetchedCats)
    }

    _getCats()
  }, [])

  const handleCatImages = async () => {
    const nextImages = await getCats()
    setCats(nextImages)
  }

  return (

    <div className="app">

      {/* <button onClick={handleCatImage} className="button"> Next </button> */}
      <button onClick={handleCatImages} className="button"> Next </button>
      <div className='box'> 
        {
          cats && cats.map((cat, index) => {
            return (
              <CatCard cat={cat} key={index}/>
            )
          })
          
        }

      </div>

    </div>
  )
}

export default App
