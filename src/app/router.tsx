"use client"

import PavlovItemsPage from "@/pages/item_list_page"
import { useState, useTransition } from "react"
import PavlovItemDetailPage from "@/pages/item_detail_page"
import { FixedHeader } from "@/components/fixed_header"

export default function Router() {
  const [page, setPage] = useState('/')
  const [isPending, startTransition] = useTransition()

  function navigate(url: string) {
    startTransition(() => {
      setPage(url)
    })
  }

  let pageContent
  if (page === '/') {
    pageContent = (
      <PavlovItemsPage navigate={navigate} />
    )
  } else if (page.startsWith('/item')) {
    const itemId = Number(page.split('/').pop())
    pageContent = (
      <PavlovItemDetailPage id={itemId} />
    )
  }

  return (
    <main>
      <FixedHeader data-fixed-header />
      {pageContent}
    </main>
  )
}

