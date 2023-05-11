import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import PainterBio from './PainterBio'
import PainterTheMostFamousPic from './PainterTheMostFamousPic'
import PainterPics from './PainterPics'
import { PainterData } from '../../../data/data'

function Painter() {
  return (
    <div>
        <h1>{PainterData.name}</h1>
        <div>
        <Link to="/bio" state={{bio: PainterData.biography}}><button>Biography</button></Link>
        <Link to="/the-most-famous-pic" state={{theMostFamousPic: PainterData.theMostFamousPicture}}><button>The Most Famous Picture</button></Link>
        <Link to="/pics" state={{pics: PainterData.pictures}}><button>Pictures</button></Link>
        <Routes>
            <Route path="/bio" Component={PainterBio}></Route>
            <Route path="/the-most-famous-pic" Component={PainterTheMostFamousPic}></Route>
            <Route path="/pics" Component={PainterPics}></Route>
        </Routes>
        </div>
    </div>
  )
}

export default Painter