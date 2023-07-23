import { ItemDisplayList } from '@/components/item_list'

import Image from 'next/image'

export default function PavlovItemsPage() {

  return (
    <div className="flex min-h-screen flex-col items-center">

      <div className="relative flex place-items-center z-[-1]">
        <Image
          src="https://s3api.wanz.site/image/reverse1999.jpg"
          alt="Saint Pavlov Data Department"
          width={256}
          height={256}
          priority
        />
      </div>

      <ConstructingNote />

      <ItemDisplayList />

    </div>
  )
}

function ConstructingNote() {
  return (
    <div className="w-full my-5 p-4 text-center bg-orange-400 text-white box-border top-0 z-99">
      <p>
        基金会数据部的重建工作尚未完成……
      </p>
      <p>
        This site seems under construction ... Please check back later?
      </p>
    </div>
  )
}
