import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        brand: {
            50: '#e6f3ff',
            100: '#b3d9ff',
            200: '#80bfff',
            300: '#4da6ff',
            400: '#1a8cff',
            500: '#0066cc',
            600: '#0052a3',
            700: '#003d7a',
            800: '#002952',
            900: '#001429',
        },
    },
    fonts: {
        heading: 'var(--font-geist-sans)',
        body: 'var(--font-geist-sans)',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.800',
            },
        },
    },
});
