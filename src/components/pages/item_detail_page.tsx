import { useParams } from "react-router-dom"


export default function PavlovItemDetailPage() {

  let {item_id} = useParams()

  return (
    <div>
      {/* TODO: fill up ItemDetailPage */}
      {item_id}
    </div>
  )
}
