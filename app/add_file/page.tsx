import CloseX from '@/components/icons/close-x'
import PlusPicture from '@/components/icons/plus-picture'
import React from 'react'

const Page = () => {
  return (
    <div className="p-8">
      <div className="flex gap-2">
        <div
          className={`w-[58px] h-[58px] cursor-pointer rounded-[18px] border dark:border-gray
       dark:bg-white/5 inline-flex justify-center items-center dark:hover:bg-white/10`}
        >
          <PlusPicture className="dark:text-whiteC" />
        </div>
        <div className="relative">
          <div
            style={{
              background:
                'linear-gradient(220deg, #2A3AEB 10.6%, #580000 89.15%)',
            }}
            className={`w-[58px] h-[58px] rounded-[18px] border dark:border-gray`}
          ></div>
          <span className="inline-flex rounded-[7px] p-[5px] dark:bg-grayB absolute -top-1 -right-1 justify-center items-center cursor-pointer">
            <CloseX className=" w-[11px] h-[11px] text-red" />
          </span>
        </div>

        <div className="relative">
          <div
            style={{
              background:
                'linear-gradient(220deg, #2AEB8A 10.6%, #4A9CBF 89.15%)',
            }}
            className={`w-[58px] h-[58px] rounded-[18px] border dark:border-gray`}
          ></div>
          <span className="inline-flex rounded-[7px] p-[5px] dark:bg-grayB absolute -top-1 -right-1 justify-center items-center cursor-pointer">
            <CloseX className=" w-[11px] h-[11px] text-red" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Page
