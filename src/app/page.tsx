import Image from 'next/image'

let FixedHeader = function() {
  return (
  <div className="flex fixed top-0 left-0 w-full justify-between items-center bg-gray-900 bg-opacity-50 text-white backdrop-blur-8 px-4 py-2 font-sans text-center z-255 lg:flex">
        <div className="header-title flex justify-start items-center w-full">
        St.Pavlov Data Department
        </div>
        <div className="button bg-orange-300 hover:bg-orange-200 text-white font-bold py-2 px-4 rounded-2xl shadow-lg">
          <a
            className="pointer-events-none flex place-items-center lg:pointer-events-auto lg:p-0"
            href="https://stpavlov-data.com/api/doc"
            target="_blank"
            rel="noopener noreferrer"
          >
          API Document
          </a>
        </div>
      </div>
)}

export default function PavlovMainPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FixedHeader/>

      <div></div>
      
      <div className="relative flex place-items-center z-[-1]">
        <Image
          src="https://s3api.wanz.site/image/reverse1999.jpg"
          alt="Saint Pavlov Data Department"
          width={256}
          height={256}
          priority
        />     
      </div>

      <div className="w-full p-4 text-center bg-orange-400 text-white box-border top-0 z-99">
          <p>
              This site is under construction. Please check back later.
          </p>
      </div>

    </main>
  )
}
