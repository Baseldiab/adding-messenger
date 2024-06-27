'use client'
import { CustomChat, FacebookProvider } from 'react-facebook';

const FBMessenger = () => {
  return (
    <div className='bg-white'>
    <FacebookProvider appId="767148212239480" chatSupport>
        <CustomChat pageId="384657458055394" minimized={true}/>
      </FacebookProvider>
    </div>
  )
}

export default FBMessenger