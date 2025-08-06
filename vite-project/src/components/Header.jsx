import React from "react"


 const Header = () => {
  return (
    <header className="h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/16129703/pexels-photo-16129703.jpeg')" }}>

        <h1 className="text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4 text-white hover:bg-black transition-transform duration-300 hover:scale-95 cursor-pointer">Welcome to WebTech</h1>
    </header>
  )
}

export default Header


