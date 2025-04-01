import Button from '@/components/handmade/button/button'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React from 'react'

import './style.scss'
import Input from '@/components/handmade/input/input'
import Heading from '@/components/handmade/typography/headings'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectGroup } from '@/components/ui/select-base'

const Page = () => {
  return (
    <main className="main p-10">
      <section className="main__buttons">
        <Heading order={2} className="mb-2">
          Buttons
        </Heading>
        <div className="data-row">
          <Button semantic="accent" mode="primary">
            Go
          </Button>
        </div>
        <div className="data-row">
          <Button semantic="neutral" mode="primary">
            Go
          </Button>
        </div>
        <div className="data-row">
          <Button semantic="neutral" mode="secondary">
            Go
          </Button>
        </div>
      </section>

      <section className="main__switches">
        <Heading order={2} className="mb-2">
          Switches
        </Heading>
        <div className="data-row flex gap-2 items-center">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane mode</Label>
        </div>
        <div className="data-row flex gap-2 items-center">
          <Switch id="sleeping-mode" />
          <Label htmlFor="sleeping-mode">Sleeping mode</Label>
        </div>
        <div className="data-row flex gap-2 items-center">
          <Switch id="snows-going" />
          <Label htmlFor="snows-going">Snow's going</Label>
        </div>
      </section>

      <section className="main__switches">
        <Heading order={2} className="mb-2">
          Inputs
        </Heading>
        <div className="data-row flex gap-1">
          <Input placeholder="Your secure password..." className="w-[400px]" />
          <Button semantic='neutral' mode='ghost'>Clear input</Button>
        </div>
        <div className="data-row flex gap-1">
          <Input placeholder="The nature travellin..." className="w-[400px]" />
          <Button semantic='accent' mode='ghost'>Search</Button>
        </div>
      </section>

      <section className="main__switches">
        <Heading order={2} className="mb-2">
          Selects
        </Heading>
        <div className="data-row flex gap-1">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Fruit' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='orange'>Orange</SelectItem>
                <SelectItem value='melon'>Melon</SelectItem>
                <SelectItem value='pear'>Pear</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

    </main>
  )
}

export default Page
