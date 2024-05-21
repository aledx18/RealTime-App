import { type ClassValue, clsx } from 'clsx'
import { PointerEvent } from 'react'
import { twMerge } from 'tailwind-merge'

type Camera = {
  x: number
  y: number
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pointerEventToCanvasPoint(e: PointerEvent, camera: Camera) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y
  }
}
