// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'

interface ProviderProps {
    children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}