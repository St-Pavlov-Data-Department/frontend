'use client'

import classNames from "classnames"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"

const sideBarItems = [
  { id: 1, label: "首页", link: "/" },
  { id: 2, label: "素材统计", link: "/item" }
]

export function SideBar() {
  const [toggleCollapse, setToggleCollapse] = useState(false)
  const [isCollapsible, setIsCollapsible] = useState(false)

  const pathname = usePathname()

  const activeMenu = useMemo(
    () => sideBarItems.find((menu) => menu.link === pathname),
    [pathname]
  )

  const wrapperClasses = classNames(
    "px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  )

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  )

  function getNavItemClasses(menu: { id: number }) {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    )
  }

  function onMouseOver() {
    setIsCollapsible(!isCollapsible)
  }

  function handleSidebarToggle() {
    setToggleCollapse(!toggleCollapse)
  }

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{
        transition: "width 500ms cubic-bezier(0.2, 0, 0, 1) 0s",
        color: "#ffffff",
        textShadow: "1px 2px 4px rgba(0, 0, 0, 0.6)",
        // backgroundImage: `url("https://raw.githubusercontent.com/yuanyan3060/1999GameResource/main/Portrait/302502.png")`,
        backgroundImage: `url("https://s3api.wanz.site/1999-game-resource/Portrait/302502.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            {/* <h1>SIDEBAR</h1> */}
            <span
              className={
                classNames("mt-2 text-lg font-medium text-text", { hidden: toggleCollapse })
              }
            >
              {/* LOGO */}
              <img src="https://s3api.wanz.site/image/reverse1999.jpg" alt="" width={64} height={64}/>
            </span>
          </div>
          <button
            className={collapseIconClasses}
            onClick={handleSidebarToggle}
            style={{
              backdropFilter: "blur(4px)",
            }}
          >
            <h1>收起</h1>
          </button>
        </div>

        <div className="flex flex-col items-start mt-24">
          {sideBarItems.map((menu: { id: number, label: string, link: string }) => {
            const classes = getNavItemClasses(menu)
            return (
              <div className={classes}
                style={{
                  background: "rgba(255,255,255,0.3)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <Link href={menu.link}
                  className="flex py-4 px-3 items-center w-full h-full"
                >
                  <div style={{ width: "8rem" }}>
                    <h1><svg t="1699095646900" class="icon" viewBox="0 0 1029 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4186" width="20px" height="20px"><path d="M1001.423238 494.592q21.504 20.48 22.528 45.056t-16.384 40.96q-19.456 17.408-45.056 16.384t-40.96-14.336q-5.12-4.096-31.232-28.672t-62.464-58.88-77.824-73.728-78.336-74.24-63.488-60.416-33.792-31.744q-32.768-29.696-64.512-28.672t-62.464 28.672q-10.24 9.216-38.4 35.328t-65.024 60.928-77.824 72.704-75.776 70.656-59.904 55.808-30.208 27.136q-15.36 12.288-40.96 13.312t-44.032-15.36q-20.48-18.432-19.456-44.544t17.408-41.472q6.144-6.144 37.888-35.84t75.776-70.656 94.72-88.064 94.208-88.064 74.752-70.144 36.352-34.304q38.912-37.888 83.968-38.4t76.8 30.208q6.144 5.12 25.6 24.064t47.616 46.08 62.976 60.928 70.656 68.096 70.144 68.096 62.976 60.928 48.128 46.592zM447.439238 346.112q25.6-23.552 61.44-25.088t64.512 25.088q3.072 3.072 18.432 17.408l38.912 35.84q22.528 21.504 50.688 48.128t57.856 53.248q68.608 63.488 153.6 142.336l0 194.56q0 22.528-16.896 39.936t-45.568 18.432l-193.536 0 0-158.72q0-33.792-31.744-33.792l-195.584 0q-17.408 0-24.064 10.24t-6.656 23.552q0 6.144-0.512 31.232t-0.512 53.76l0 73.728-187.392 0q-29.696 0-47.104-13.312t-17.408-37.888l0-203.776q83.968-76.8 152.576-139.264 28.672-26.624 57.344-52.736t52.224-47.616 39.424-36.352 19.968-18.944z" p-id="4187" data-spm-anchor-id="a313x.search_index.0.i0.57293a81Hpxg9L"></path></svg></h1>
                  </div>
                  {!toggleCollapse && (
                    <span className="text-md font-medium text-text-light">
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

