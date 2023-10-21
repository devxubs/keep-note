"use client"

import React, { useState } from 'react'
import Stack from 'naxui/Stack'
import List from 'naxui/List'
import ListItem from 'naxui/ListItem'
import { alpha } from 'naxui-manager'

import NoteIcon from 'naxui-icons/outlined/Description'
import ReminderIcon from 'naxui-icons/outlined/Notifications'
import EditIcon from 'naxui-icons/outlined/Edit'
import ArchiveIcon from 'naxui-icons/outlined/Archive'
import TrashIcon from 'naxui-icons/outlined/Delete'

import { useRouter, usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname()
    const router = useRouter()

    const [active, setActive] = useState({
        home: pathname === '/',
        reminder: pathname === '/reminder',
        archive: pathname === '/archive',
        trash: pathname === '/trash',
    })

    return (
        <Stack
            width={290}
            height="100%"
            borderRight={1}
            borderColor="color.paper.divider"
            py={2}
        >
            <List>
                <ListItem
                    startIcon={<NoteIcon />}
                    hover={{
                        backgroundColor: (t: any) => alpha(t.colors.paper.dark, .2),
                    }}
                    p={1.5}
                    bgcolor={pathname === '/' ? (t: any) => alpha(t.colors.paper.dark, .2) : ''}

                    onClick={() => {
                        router.push('/')
                        setActive({ home: true, archive: false, reminder: false, trash: false, })
                    }}
                >
                    Notes
                </ListItem>
                <ListItem
                    startIcon={<ReminderIcon />}
                    hover={{
                        backgroundColor: (t: any) => alpha(t.colors.paper.dark, .2),
                    }}
                    p={1.5}
                    bgcolor={pathname === '/reminder' ? (t: any) => alpha(t.colors.paper.dark, .2) : ''}

                    onClick={() => {
                        router.push('/reminder')
                        setActive({ home: false, archive: false, reminder: true, trash: false, })
                    }}
                >
                    Reminder
                </ListItem>
                <ListItem
                    startIcon={<EditIcon />}
                    hover={{
                        backgroundColor: (t: any) => alpha(t.colors.paper.dark, .2),
                    }}
                    p={1.5}
                    bgcolor={'none'}
                >
                    Edit Labels
                </ListItem>
                <ListItem
                    startIcon={<ArchiveIcon />}
                    hover={{
                        backgroundColor: (t: any) => alpha(t.colors.paper.dark, .2),
                    }}
                    p={1.5}
                    bgcolor={pathname === '/archive' ? (t: any) => alpha(t.colors.paper.dark, .2) : ''}

                    onClick={() => {
                        router.push('/archive')
                        setActive({ home: false, archive: true, reminder: false, trash: false, })
                    }}
                >
                    Archive
                </ListItem>
                <ListItem
                    startIcon={<TrashIcon />}
                    hover={{
                        backgroundColor: (t: any) => alpha(t.colors.paper.dark, .2),
                    }}
                    p={1.5}
                    bgcolor={pathname === '/trash' ? (t: any) => alpha(t.colors.paper.dark, .2) : ''}

                    onClick={() => {
                        router.push('/trash')
                        setActive({ home: false, archive: false, reminder: false, trash: true, })
                    }}
                >
                    Trash
                </ListItem>
            </List>
        </Stack >
    )
}

export default Sidebar