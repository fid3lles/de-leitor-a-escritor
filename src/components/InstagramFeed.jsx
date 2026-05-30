import { useEffect } from 'react'

export default function InstagramFeed() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <div className="w-full flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/jornadadoescritor/"
        data-instgrm-version="14"
      />
    </div>
  )
}
