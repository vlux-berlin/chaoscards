import {
	AppShell,
	AppShellProps,
	Aside,
	Burger,
	Footer,
	Header,
	MediaQuery,
	Navbar,
	Text,
	useMantineTheme,
	createStyles,
} from '@mantine/core';
import {useState} from 'react';
import tw from 'twin.macro';

const useStyles = createStyles((theme) => ({
	test: tw`text-red-500 underline`,
}));

export function App({sideBarText = 'Application sidebar', ...props}) {
	const {classes} = useStyles();
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{sm: 200, lg: 300}}
				>
					<Text>{props.navBarText}</Text>
				</Navbar>
			}
			aside={
				<MediaQuery smallerThan="sm" styles={{display: 'none'}}>
					<Aside p="md" hiddenBreakpoint="sm" width={{sm: 200, lg: 300}}>
						<Text>{sideBarText}</Text>
					</Aside>
				</MediaQuery>
			}
			footer={
				<Footer height={60} p="md">
					Application footer
				</Footer>
			}
			header={
				<Header height={70} p="md">
					<div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
						<MediaQuery largerThan="sm" styles={{display: 'none'}}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size="sm"
								mr="xl"
							/>
						</MediaQuery>
						<Text tw="text-red-500 underline">Application header</Text>
					</div>
				</Header>
			}
		>
			<h1 className={classes.test}>Hello world</h1>
			<Text>Resize app to see responsive navbar in action</Text>
		</AppShell>
	);
}
