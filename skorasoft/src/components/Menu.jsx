import React from 'react'
import InfiniteMenu from './InfiniteMenu'

const Menu = () => {

    const items = [
  {
    image: 'https://images.pexels.com/photos/29844446/pexels-photo-29844446/free-photo-of-ancient-ruins-against-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://skorasoft.com/skorasoft-branding',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://images.pexels.com/photos/30111873/pexels-photo-30111873/free-photo-of-photographer-in-new-york-city-street-scene.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://skorasoft.com/skorasoft-branding',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://images.pexels.com/photos/6803529/pexels-photo-6803529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://skorasoft.com/skorasoft-branding',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://images.pexels.com/photos/3329488/pexels-photo-3329488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://skorasoft.com/skorasoft-branding',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];
  return (
    <div style={{ height: '600px', position: 'relative' ,color:"white" }}>
  <InfiniteMenu items={items}/>
</div>
  )
}

export default Menu
