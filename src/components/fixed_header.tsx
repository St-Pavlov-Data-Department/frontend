export function FixedHeader() {
  return (
    <div className="flex fixed top-0 left-0 right-0 w-full justify-between items-center bg-gray-900 bg-opacity-50 text-white backdrop-blur-8 px-5 py-2 font-sans text-center lg:flex"
    style={{
      zIndex: 255,
    }}
    >
      <div className="header-title flex text-2xl font-bold justify-start items-center w-full">
        St.Pavlov Data Department
      </div>
      <div className="button bg-orange-300 hover:bg-orange-200 text-white font-bold py-2 px-4 rounded-2xl shadow-lg">
        <a
          className="flex place-items-center lg:pointer-events-auto lg:p-0"
          href="https://backend.stpavlov-data.com/api/doc"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Document
        </a>
      </div>
    </div>
  )
}
