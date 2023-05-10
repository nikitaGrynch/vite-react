import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CityInfo from './CityInfo'
import CityLandmarks from './CityLandmarks'
import CityTheMostFamousLandmark from './CityTheMostFamousLandmark'
import CityPhotos from './CityPhotos'
import {CityData} from "../../../data/data";
import UploadPhotoForm from './UploadPhotoForm'

function City() {
    return (
        <>
        <Link to="/about" state={{cityName: CityData.name, about: CityData.about}}><button>About</button></Link>
        <Link to="/landmarks" state={{cityName: CityData.name, landmarks: CityData.landmarks}}><button>Landmarks</button></Link>
        <Link to="/the-most-famous-monument" state={{cityName: CityData.name, theMostFamousLandmark: CityData.theMostFamousLandmark}}><button>The most famous landmark</button></Link>
        <Link to="/photos" state={{cityName: CityData.name, photos: CityData.photos}}><button>Photos</button></Link>
        <Link to="/upload-photo"><button>Upload Photo</button></Link>
        <Routes>
            <Route path="/about" Component={CityInfo}></Route>
            <Route path="/landmarks" Component={CityLandmarks}></Route>
            <Route path="/the-most-famous-monument" Component={CityTheMostFamousLandmark}></Route>
            <Route path="/photos" Component={CityPhotos}></Route>
            <Route path="/upload-photo" Component={UploadPhotoForm}></Route>
        </Routes>
        </>
    )
}

export default City