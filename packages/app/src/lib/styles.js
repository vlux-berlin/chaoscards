import {Global, css} from '@emotion/react';
import tw, {GlobalStyles as BaseStyles, theme} from 'twin.macro';

const customStyles = css({
	body: {
		WebkitTapHighlightColor: theme`colors.purple.500`,
		...tw`antialiased`,
	},
});

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<Global styles={customStyles} />
	</>
);

export default GlobalStyles;
