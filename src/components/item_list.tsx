"use client"

import { Link } from "react-router-dom"
import { itemInfoList, ItemInfo } from "@/constants/item_id_map" 

const rareToColorMap: { [level: number]: string } = {
  1: "#405939",
  2: "#4A5272",
  3: "#A27FA9",
  4: "#D6BB6E",
  5: "#DE9423",
}

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
      <Link to={`/item/${itemInfo.id}`}>
        <img
          alt={itemInfo.name}
          src={itemInfo.image_url}
          width="100"
          height="100"
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          decoding="async"
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
    <ItemDisplay itemInfo={itemInfo} />
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
