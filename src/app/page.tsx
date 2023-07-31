'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Page() {

  return (
    <div className="w-full max-h-screen flex flex-col items-center">

      <div className="flex place-items-center">
        <Image
          src="https://s3api.wanz.site/image/reverse1999.jpg"
          alt="Saint Pavlov Data Department"
          width={256}
          height={256}
          priority
          style={{
            borderRadius: 4,
          }}
        />
      </div>

      <ConstructingNote />

      <GithubButton />

    </div >
  )
}

function ConstructingNote() {
  return (
    <div className="w-full my-5 p-4 text-center bg-orange-400 text-white box-border top-0 z-99"
    style={{
      fontSize: 14,
      textShadow: "0px 0px 5px rgb(255,255,255)"
    }}
    >
      <p>
        基金会数据部的重建工作正在进行中……
      </p>
      <p>
        Saint Pavlov Foundation Data Department is under reconstruction ...
      </p>
    </div>
  )
}

function GithubButton() {
  return (
    <Link href="https://github.com/orgs/St-Pavlov-Data-Department/repositories" target="_blank"
    className="bg-neutral-700 hover:bg-neutral-500"
      style={{
        display: "inline-flex",
        alignItems: "center",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
        transition: "background-color 0.3s ease",
      }}
    >
      <i className="fab fa-github"></i> View on GitHub
    </Link>
  )
}
