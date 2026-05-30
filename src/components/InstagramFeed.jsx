import { useEffect } from 'react'

export default function InstagramFeed() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <div className="w-full flex justify-center shadow-[0_6px_20px_rgba(0,0,0,0.15)] rounded-sm [&_.instagram-media]:m-0!">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/DQmaR4yjj1n/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style={{ maxWidth: '540px', width: '100%' }}
      />
    </div>
  )
}
