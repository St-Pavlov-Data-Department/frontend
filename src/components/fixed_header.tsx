import Link from "next/link";

export function FixedHeader() {
  return (
    <div className="flex fixed top-0 left-0 right-0 w-full justify-between items-center bg-gray-900 bg-opacity-50 text-white backdrop-blur-8 px-5 py-2 font-sans text-center lg:flex"
      style={{
        backdropFilter: "blur(4px)",
        zIndex: 255,
      }}
    >
      <div className="header-title flex text-2xl font-bold justify-start items-center w-full overflow-hidden whitespace-nowrap">
        St.Pavlov Data Department
      </div>
      <Link
        className="flex place-items-center py-2 px-4 rounded-2xl bg-orange-300 hover:bg-orange-200 lg:pointer-events-auto lg:p-0"
        href="https://backend.stpavlov-data.com/api/doc"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          transition: "background-color 0.2s ease",
        }}
      >
        API Document
      </Link>
    </div>
  )
}
