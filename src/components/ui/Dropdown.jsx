import { useState, useRef, useEffect } from 'react'

const Dropdown = ({ trigger, children, align = 'right' }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className={`dropdown dropdown--${align}`} ref={ref}>
      <button onClick={() => setOpen((v) => !v)}>
        {trigger}
      </button>

      {open && ( <div className="dropdown__menu"> {children} </div> )}
    </div>
  )
}

export default Dropdown
