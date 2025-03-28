'use client'

import BaseSkelet from '@/components/base-skelet/base-skelet'
import ResponsiveContainer from '@/components/responsive-container/responsive-container'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import './style.scss'
import Button from '@/components/handmade/button/button'

const items = [
  'Toyota',
  'Honda',
  'Ford',
  'Chevrolet',
  'Mercedes-Benz',
  'BMW',
  'Audi',
  'Volkswagen',
  'Nissan',
  'Hyundai',
  'Kia',
  'Subaru',
  'Lexus',
  'Porsche',
  'Tesla',
  'Lada',
  'Kopeyka',
  'B_Toyota',
  'B_Honda',
  'B_Ford',
  'B_Chevrolet',
  'B_Mercedes-Benz',
  'B_BMW',
  'B_Audi',
  'B_Volkswagen',
  'B_Nissan',
]

const Page = () => {
  return (
    <BaseSkelet className="flex justify-center items-center">
      <ResponsiveContainer>
        <Main itemsPerPage={3} />
      </ResponsiveContainer>
    </BaseSkelet>
  )
}

type TMain = {
  itemsPerPage: number
}

function Main({ itemsPerPage }: TMain) {
  const [currPage, setCurrPage] = useState(0)
  const [stateItems, setStateItems] = useState<string[]>(
    items.slice(0, itemsPerPage)
  )
  const [limit, setLimit] = useState(0)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  function handleClick(event: any) {
    const nextPage = event.selected
    const nextItemsStart = nextPage * itemsPerPage
    const nextItemsEnd = nextItemsStart + itemsPerPage

    setStateItems(items.slice(nextItemsStart, nextItemsEnd))
    setCurrPage(event.selected)
  }

  function handleLimit(event: any) {
    if (currPage === pageCount) {
      alert('you are in limit')
      return
    }
    
    setCurrPage(currPage + 1)

    setStateItems(prev => {
      const nextItemsStart = (currPage + 1) * itemsPerPage
      const nextItemsEnd = nextItemsStart + itemsPerPage
      return [...prev, ...items.slice(nextItemsStart, nextItemsEnd)]
    })
  }

  return (
    <>
      <Items currentItems={stateItems} />
      <div className="flex justify-center mb-5">
        <Button semantic="secondary" size="s" onClick={handleLimit}>
          show more
        </Button>
      </div>
      <div className="flex justify-center">
        <ReactPaginate
          className="pagination-container"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handleClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          forcePage={currPage}
        />
      </div>
    </>
  )
}

type TItems = {
  currentItems: string[]
}

function Items({ currentItems }: TItems) {
  return (
    <div className="flex gap-6 mb-6 justify-center">
      {currentItems.map((el, index) => (
        <div
          key={index}
          className="rounded-2xl duration-150 flex justify-center items-center text-2xl font-bold p-3 border-2 border-gray h-36 w-32 hover:bg-gray/30"
        >
          {el}
        </div>
      ))}
    </div>
  )
}

export default Page
