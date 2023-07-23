import Link from "next/link";

import { useParams } from "react-router-dom";

export default function ItemDetail() {
  let { item_id } = useParams()
  return (
    <>
      <h1>Item ID: {`${item_id}`}</h1>
      <h2>
        <Link href="/">
          Back
        </Link>
      </h2>
    </>
  )
}

