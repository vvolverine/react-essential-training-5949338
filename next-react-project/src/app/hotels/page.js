"use client";

import HotelBlock from "./HotelBlock.js"

async function getData() {
  const response = await fetch("https://snowtooth-hotel-api.fly.dev")
  return response.json();
}

export default async function Page() {
  const data = await getData()
  return (
    <main>
      <div>
        <h1>Hotel Details</h1>
        <div>
          {data.map((hotel) => (
            <HotelBlock key={hotel.id} id={hotel.id} name={hotel.name} capacity={hotel.capacity}/>
          ))}
        </div>
      </div>
    </main>
  )
}