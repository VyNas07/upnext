import { createSystem, defaultConfig } from '@chakra-ui/react';

export const theme = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                blue: {
                    50: { value: '#EBF8FF' },
                    100: { value: '#BEE3F8' },
                    200: { value: '#90CDF4' },
                    300: { value: '#63B3ED' },
                    400: { value: '#4299E1' },
                    500: { value: '#2F80ED' },
                    600: { value: '#2B77CB' },
                    700: { value: '#2C5282' },
                    800: { value: '#2A4365' },
                    900: { value: '#1A365D' },
                },
                orange: {
                    50: { value: '#FFFAF0' },
                    100: { value: '#FEEBC8' },
                    200: { value: '#FBD38D' },
                    300: { value: '#F6AD55' },
                    400: { value: '#ED8936' },
                    500: { value: '#F2994A' },
                    600: { value: '#DD6B20' },
                    700: { value: '#C05621' },
                    800: { value: '#9C4221' },
                    900: { value: '#7B341E' },
                },
            },
            fonts: {
                body: { value: 'Inter, system-ui, sans-serif' },
                heading: { value: 'Inter, system-ui, sans-serif' },
            },
        },
    },
});
