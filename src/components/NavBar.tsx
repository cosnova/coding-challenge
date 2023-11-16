import logo from '@/assets/react.svg'

function NavBar() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <nav className="flex h-16 items-center justify-between">
        <a
          href={'/'}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="logo"
            className="h-10"
          />
          <p>The Beauty List</p>
        </a>
        <a
          href={'/list'}
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          List
        </a>
      </nav>
    </div>
  )
}

export default NavBar
