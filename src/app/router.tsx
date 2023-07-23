"use client"

import PavlovItemsPage from "@/components/pages/item_list_page"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PavlovItemDetailPage from "@/components/pages/item_detail_page"
import { FixedHeader } from "@/components/fixed_header"

export default function Router() {

  return (
    <main>
      <FixedHeader data-fixed-header />
      <div style={{
        // TODO: dynamically calculate and update padding
        paddingTop: "100px",
      }}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PavlovItemsPage />} />
          <Route path="/item/:item_id" element={<PavlovItemDetailPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

