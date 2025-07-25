import Link from "next/link"

export default function Home() {
  return (
   <>
     <div className="flex justify-center flex-col items-center h-[44vh] text-white px-5 md:px-0  text-xs md:text-base">
  <div className="font-extrabold flex md:gap-5 gap-2 md:text-5xl mb-2 text-3xl">Buy Me a Chai<span><img className="invertImg" src="/tea1.gif"width={58} alt="sorry"/></span></div>
  
  <p className="text-sm md:text-base text-centre md:text-left max-w-xl text-gray-300 mb-6 text-center">
    A crowd-funding platform to support your projects with chai.
  </p>
  <p className="text-sm md:text-base text-centre md:text-left max-w-xl text-gray-300 mb-6 text-center"> Get funded by your fans and followers.</p>
  <div>
    <Link href="/login">
    <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-md ml-4 hover:bg-white hover:text-[#121f4a] transition duration-200">
      Start Now
    </button>
    </Link>
    <Link href="/about">
    <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-md ml-4 hover:bg-white hover:text-[#121f4a] transition duration-200">
      Read More
    </button>
    </Link>
    
  </div>
  
</div>
<div className="bg-white h-1  opacity-15">
    </div>
    <div className="container mx-auto px-10 pb-32 pt-16">
      <h1 className="text-center text-3xl font-bold mb-20">
        Your fans can buy you a chai</h1>
      
      <div className="  flex gap-5 justify-around ">
         <div className="  text-white item space-y-3 flex flex-col items-center justify-centre rounded-full">
          <img width={100} src="/chai1.gif" alt="Chai 1" className="w-24 h-24 mx-auto mb-2 p-2" />
          <p className=" font-bold text-center text-white-800"> Fans want to help</p>
          <p className=" text-center">Your fans are available for you to help you</p>
        </div>
         <div className="  text-white item space-y-3 flex flex-col items-center justify-centre rounded-full">
          <img width={100} src="/coin.gif" alt="Chai 1" className="w-24 h-24 mx-auto mb-2 p-2" />
          <p className=" font-bold text-center text-white-800">Fans want to help</p>
          <p className=" text-center">Your fans are available for you to help you</p>
        </div>
        <div className="  text-white item space-y-3 flex flex-col items-center justify-centre rounded-full">
          <img width={50} src="/fans.gif" alt="Chai 1" className="w-24 h-24 mx-auto mb-2 p-2" />
          <p className=" font-bold text-center text-white-800">Fans want to help</p>
          <p className=" text-center">Your fans are available for you to help you</p>
        </div>
        
      </div>
    </div>
    <div className="bg-white h-0.5 opacity-15 ">
    </div>
    <div className="container items-center py-16 mx-auto flex flex-col justify-center">
      <h1 className="text-center text-3xl font-bold mb-20">
        Learn More About Us!! fake one <span><img width={100} src="/fake-image.jpg" alt="Fake Image" className=" flex flex-col  rounded-full w-24 h-24 mx-auto mb-2 p-2" /></span></h1>
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[60] xl:w-[50%] xl:h-[40vh]">
      <iframe className="w-full h-full"  src="https://www.youtube.com/embed/94vwZ5fyT7k?si=b1cebhVcXJIAaIA5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
      </div>
    
</>
  )
}
