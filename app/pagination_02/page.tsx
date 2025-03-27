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
  const [limit, setLimit] = useState(0)

  // const endOffset = itemOffset + itemsPerPage + limit
  const endOffset = currPage + itemsPerPage + limit

  console.log(`Loading items from ${currPage} to ${endOffset}`)
  const currentItems = items.slice(currPage, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  function handleClick(event: any) {
    setLimit(0)
    const newOffset = (event.selected * itemsPerPage) % items.length
    console.log({
      selected: event.selected,
      itemsPerPage,
      itemsLength: items.length,
    })
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  function addLimitHandler() {
    setLimit(prev => prev + 3)
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex justify-center mb-5">
        <Button semantic="secondary" size="s" onClick={addLimitHandler}>
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
