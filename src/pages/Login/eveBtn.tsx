interface EveBtnProps {
  onClick: () => void
  className?: string
  isEve?: boolean
}
export function EveBtn({ onClick, className, isEve = false }: EveBtnProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick()
      }}
      className={className}
      type="button"
    >
      {!isEve ? (
        <img
          src="/assets/closeEve.svg"
          alt="close eve icon"
          className="w-5 h-6"
        />
      ) : (
        <img src="/assets/eve.svg" alt="eve icon" className="w-5 h-5" />
      )}
    </button>
  )
}
