import React from "react"
import books from "../books.json"
import Card from "./Card"
const Shop = ({handleClick}) => {
  return (
    <section className="max-w-screen-2xl mx-auto grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 my-16">
    {books.map(item=>{
        return <Card item={item} key={item.id} handleClick={handleClick} />
    })}
    </section>
  )
}
export default Shop