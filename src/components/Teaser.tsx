function Teaser() {
  return (
    <div className="flex flex-col items-center gap-2 overflow-hidden rounded-lg">
      <div className="flex">
        <img
          src="https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"
          alt="teaser"
          className="w-full bg-blue-500"
        />
      </div>
      <h1 className="text-2xl font-bold">
        Maybelline Face Studio Master Hi-Light Light Booster Bronzer
      </h1>
      <p className="whitespace-pre-wrap">
        {
          'Maybelline Face Studio Master Hi-Light Light Boosting bronzer formula has an expert \nbalance of shade + shimmer illuminator for natural glow. Skin goes \nsoft-lit with zero glitz.\n\n\t\tFor Best Results: Brush over all shades in palette and gently sweep over \ncheekbones, brow bones, and temples, or anywhere light naturally touches\n the face.\n\n\t\t\n\t\n\n'
        }
      </p>
      <a
        href={'/list'}
        className="rounded-md bg-white px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        List
      </a>
    </div>
  )
}

export default Teaser
