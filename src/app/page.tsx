"use client"

import { FixedHeader } from '@/components/fixed_header'
import { ItemDisplayList } from '@/components/item_list'
import Router from '@/app/app_router'

import Image from 'next/image'
import { Suspense, useEffect, useState, useTransition } from 'react'

export default function PavlovDataDepartment() {
  const [headerHeight, setHeaderHeight] = useState(0)

  function adjustPadding() {
    const headerElement = document.querySelector('[data-fixed-header]') as HTMLElement
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', adjustPadding)

    adjustPadding()

    return function () {
      return window.removeEventListener('resize', adjustPadding)
    }
  })

  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  )
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
