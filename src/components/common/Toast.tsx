// src/components/common/Toast.tsx
import React from 'react'

type ToastProps = {
  open: boolean
  message: string
  onClose: () => void
}

const Toast: React.FC<ToastProps> = ({ open, message, onClose }) => {
  if (!open) return null
  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      <div className="rounded-xl border border-zinc-700 bg-neutral-900 text-zinc-100 shadow-lg px-4 py-3 text-sm flex items-center gap-3">
        <span className="max-w-[60vw]">{message}</span>
        <button
          className="ml-2 px-2 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
          onClick={onClose}
        >
          확인
        </button>
      </div>
    </div>
  )
}

export default Toast
