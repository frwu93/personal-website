import React from 'react'

const Delayed = () => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 5000)

    return () => clearTimeout(timeout)

  }, [show])

  if (!show) return null

  return <>OK, Render</>
}

export default Delayed