import './globals.css'
import type { Metadata } from 'next'
import Registry from '@src/registry'


import ViewBox from 'naxui/ViewBox'
import Stack from 'naxui/Stack'
import Box from 'naxui/Box'
import Header from '@src/components/Header'
import Sidebar from '@src/components/Sidebar'


export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Registry>
					<ViewBox
						header={<Header />}
						height="100%"
					>
						<Stack
							height="100%"
							direction="row"
							flexWrap="wrap"
						>
							<Sidebar />
							<Box flex={1} width={500} >
								{children}
							</Box>
						</Stack>
					</ViewBox>
				</Registry>
			</body>
		</html>
	)
}
