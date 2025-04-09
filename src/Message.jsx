import React, {useEffect} from 'react'

export default function Message() {

    useEffect(() => {
        console.log('Le composant Message a été monté !');
    }, []);
  return (
    <div>
       <h2>Bienvenue sur notre site !</h2>
    </div>
  )
}
