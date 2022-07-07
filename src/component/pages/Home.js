import React from 'react'
import image from "../assets/kacang.jpeg"
import Cookies from "universal-cookie";
import { useState, useEffect } from "react"


 const Home = () => {
  let [images, setImages] = useState([])
  const loadImages = async ()=>{
    const cookie = new Cookies()
    let resultFetch = await fetch(`https://test-binar.herokuapp.com/v1/products`, {
      method: "GET",
      headers:{
        Authorization: cookie.get("token")
      }
    })
    resultFetch = await resultFetch.json()
    // console.log(resultFetch)
    setImages(resultFetch)
  }

  useEffect(()=>{
    loadImages()
  },[])
  let cards = [], card = ''
  // loadImage()
  if (images.status=="OK") {
    let result = images.result
    for(let i in result){
      card = (
        <div className='flex max-w-md '>
        <div className="max-w-sm rounded shadow-lg">
        <img src={result[i].imageurl} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{result[i].name}</div>
        <p className="text-gray-700 text-base">
          Rp. {result[i].price}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Edit</button>
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Delete</button>
      </div>
    </div>
        </div>
      )
      cards.push(card)
    }
  }

  // console.log(images)
  return cards
}

export default Home