"use client"

import Image from "next/image"
import Link from "next/link"

import { itemInfoList, ItemInfo } from "@/constants/item_id_map"
import { rareToColorMap } from '@/constants/item_id_map'

function ItemDisplay(
  { itemInfo }: { itemInfo: ItemInfo },
) {
  return (
    <div
      className="mx-4 my-4 text-white rounded-sm"
      key={itemInfo.id}
      style={{
        listStyleType: "none",
        position: "relative",
        border: `1px solid ${rareToColorMap[itemInfo.rare]}`,
      }}
    >
      <Link href={`/item/${itemInfo.id}`} >
        <Image
          alt={itemInfo.name}
          src={itemInfo.image_url}
          width="100"
          height="100"
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
        // onClick={() => navigate(`/item/${itemInfo.id}`)}
        />
      </Link>
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        textAlign: "center",
        fontSize: 10,
        textShadow: "1px 2px 2px rgba(0, 0, 0, 0.5)",
        whiteSpace: "nowrap",
        backgroundColor: rareToColorMap[itemInfo.rare],
      }}>
        {itemInfo.name}
      </div>
    </div>
  )
}

export function ItemDisplayList() {
  const items = itemInfoList.map((itemInfo) =>
    <ItemDisplay itemInfo={itemInfo} key={itemInfo.id} />
  )

  return (
    <div>
      <div className="text-center">
        素材
      </div>
      <div className="w-full flex flex-wrap items-center justify-center">
        {items}
      </div>
    </div>
  )
}
