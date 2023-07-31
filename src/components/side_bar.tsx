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
            <h1>SIDEBAR</h1>
            <span
              className={
                classNames("mt-2 text-lg font-medium text-text", { hidden: toggleCollapse })
              }
            >
              LOGO
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
                    <h1>{menu.label}图标</h1>
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

