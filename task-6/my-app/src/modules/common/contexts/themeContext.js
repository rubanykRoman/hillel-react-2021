import { createContext,useState,    useCallback,useMemo } from 'react';

export const themeContext = createContext('dark');

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    const changeTheme = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }, [theme]);

    const contextValue = useMemo(
        () => ({
            theme,
            changeTheme,
        }),
        [theme]
    );

    return (
        <themeContext.Provider value={contextValue}>
            <main className={theme}>
                {children}
            </main>
        </themeContext.Provider>
    );
}