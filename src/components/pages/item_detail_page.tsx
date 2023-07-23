import { useParams } from "next/navigation"


export default function PavlovItemDetailPage() {

  let {item_id} = useParams()

  return (
    <div>
      {/* TODO: fill up ItemDetailPage */}
      {item_id}
    </div>
  )
}
