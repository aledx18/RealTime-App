/* eslint-disable no-undef */
'use client'
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { AuthLoading, Authenticated, ConvexReactClient } from 'convex/react'
import Loading from '@/components/auth/loading'
import { dark } from '@clerk/themes'

interface convexProviderProps {
  children: React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!

const convex = new ConvexReactClient(convexUrl)

export function ConvexClientProvider({ children }: convexProviderProps) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
