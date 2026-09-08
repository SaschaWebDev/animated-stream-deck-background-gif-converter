export function HeroSection() {
  return (
    <section className='hw-screen-panel hw-hero-panel'>
      <img
        className='hw-hero-logo'
        src='/stream-deck-gif-splitter-logo-big.png'
        alt='Stream Deck GIF Splitter'
      />
      <h1 className='hw-title'>
        Create backgrounds for
        <br /> your <span className='hw-title-accent'>Stream Deck</span>
      </h1>
      <p className='hw-subtitle'>
        Upload a GIF or image to create animated key tiles or a wallpaper,
        perfectly sized for your Stream Deck.
      </p>
    </section>
  );
}
