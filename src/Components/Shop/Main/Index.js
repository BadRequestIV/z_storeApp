import { useState, useEffect } from 'react'
import Card from '../Card/ShopCard'
import { trackProducts, updateProducts } from '../../../Assets/data/store'
import { trackFilter } from '../../../Assets/data/setFilter'

const Index = () => {
  const [store, setStore] = useState([])

  useEffect(() => {
    trackProducts.subscribe((el) => setStore(el))
  })
  // console.log(store)
  return (
    <div className='mainSection'>
      {store ? (
        store.map((el) => {
          const { Id, Name, Price, Img, Brand, Category, Size, Color, Width } =
            el

          return <Card key={Id} imgSrc={Img[0]} name={Name} price={Price} />
        })
      ) : (
        <></>
      )}
    </div>
  )
}

export default Index
