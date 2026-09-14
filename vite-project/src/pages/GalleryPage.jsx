import Gallery from '../components/Gallery.jsx'
import { galleryImages } from '../data/content.js'

function GalleryPage() {
  return (
    <div style={{ paddingTop: 8 }}>
      <div className="container" style={{ padding: '48px 24px 0' }}>
        <p className="eyebrow">Full gallery</p>
        <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 3.4rem)', color: 'var(--color-ink)', marginTop: 10 }}>
          {galleryImages.length} moments from the wash bay
        </h1>
      </div>
      <Gallery showViewAll={false} />
    </div>
  )
}

export default GalleryPage
