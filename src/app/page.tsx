"use client"

import Router from '@/app/router'

import Image from 'next/image'
import { Suspense, useEffect, useState, useTransition } from 'react'

export default function PavlovDataDepartment() {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    function adjustPadding() {
      if (typeof window !== 'undefined') {
        const headerElement = document.querySelector('[data-fixed-header]') as HTMLElement
        if (headerElement) {
          setHeaderHeight(headerElement.offsetHeight)
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', adjustPadding)

      adjustPadding()

      return function () {
        return window.removeEventListener('resize', adjustPadding)
      }
    }
  }, [])

  return (
    <>
      {/* <Suspense fallback={<BigSpinner />}> */}
      {typeof window !== 'undefined' && <Router />}
      {/* </Suspense> */}
    </>
  )
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
