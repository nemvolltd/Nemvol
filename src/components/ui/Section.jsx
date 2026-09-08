const Section = ({
  children,
  className = '',
  containerClassName = '',
  background = 'white',
  style = {}
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-[#002752] text-white',
    none: ''
  }

  return (
    <section className={`py-16 ${backgrounds[background]} ${className}`} style={style}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}

export default Section
