"use client"

import PavlovItemsPage from "@/components/pages/item_list_page"
import { useState, useTransition } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PavlovItemDetailPage from "@/components/pages/item_detail_page"
import { FixedHeader } from "@/components/fixed_header"
import ItemDetail from "@/components/pages/[item_id]"

export default function Router() {

  return (
    <main>
      <FixedHeader data-fixed-header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PavlovItemsPage />} />
          <Route path="/item/:item_id" element={<PavlovItemDetailPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

