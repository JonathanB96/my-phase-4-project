import React from 'react'

export default function Home({user}) {
 if (user){
  return(<div>
    Home with user
  </div>

  )
 }
 return(<div>
  Home without user
 </div>

 )
}
