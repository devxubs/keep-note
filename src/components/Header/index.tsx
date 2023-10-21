"use client"
import { useRef, useState } from 'react'
import Stack from 'naxui/Stack'
import IconButton from 'naxui/IconButton'
import Box from 'naxui/Box'
import Avatar from 'naxui/Avatar'
import Input from 'naxui/Input'

import MenuIcon from 'naxui-icons/filled/Menu'
import RefreshIcon from 'naxui-icons/filled/Refresh'
import GridIcon from 'naxui-icons/outlined/GridView'
import ListIcon from 'naxui-icons/outlined/ViewAgenda'
import SettingsIcon from 'naxui-icons/filled/Settings'
import SearchIcon from 'naxui-icons/filled/Search'
import Menu from './Menu'

const Header = () => {
    const [gridView, setGridView] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const settingMenu = useRef(null)

    return (
        <Stack
            height={55}
            borderBottom={1}
            borderColor="color.paper.divider"
            direction="row"
            alignItems="center"
            px={3}
        >
            <Stack
                width={150}
            >
                <IconButton color='paper' >
                    <MenuIcon />
                </IconButton>
            </Stack>
            <Stack
                flex={1}
                alignItems="center"
                sx={{
                    '& > div': {
                        display: 'flex',
                        alignItems: 'center',
                        direction: 'column',
                        width: '100%',
                    }
                }}
            >
                <Input
                    variant="outlined"
                    maxWidth={500}
                    width="100%"
                    placeholder='Search'
                    startIcon={<SearchIcon />}
                    containerProps={{
                        alignItems: 'center',
                        minWidth: 600,
                    }}
                />
            </Stack>
            <Stack
                width={250}
                direction="row"
                spacing={.5}
            >
                <Box>
                    <IconButton color='paper' >
                        <RefreshIcon />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton
                        color='paper'
                        onClick={() => { setGridView(!gridView) }}
                    >
                        {
                            gridView ? <GridIcon /> : <ListIcon />
                        }
                    </IconButton>
                    <Menu />
                </Box>
                <Box mr={1} >
                    <IconButton
                        // ref={settingMenu}
                        color='paper'
                    // onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <SettingsIcon />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton color='paper' >
                        <Avatar src={'https://avatars.githubusercontent.com/u/33804460?v=4'} />
                    </IconButton>
                </Box>
            </Stack>
        </Stack>
    )
}

export default Header