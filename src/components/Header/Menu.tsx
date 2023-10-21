'use client'
import IconAdd from 'naxui-icons/round/Add'
import IconButton from 'naxui/IconButton'
import Menu from 'naxui/Menu'
import Text from 'naxui/Text'
import React, { useRef, useState } from 'react'

const MenuBox = () => {
    const [open, setOpen] = useState(false)
    const ref: any = useRef()
    console.log(ref);

    return (
        <div>
            <IconButton
                ref={ref}
                onClick={() => {
                    console.log('button click');
                    setOpen(!open)
                }}
            >
                <IconAdd />
            </IconButton>
            <Menu
                target={open ? ref.current : null}
                onClickOutside={() => {
                    setOpen(!open)
                    console.log('outside click');
                }}
            >
                <Text>Menu</Text>
            </Menu>
        </div>
    )
}

export default MenuBox