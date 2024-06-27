'use client'
import React, { Component} from 'react';
import { FacebookProvider, SendToMessenger  } from 'react-facebook';

const FBMessenger = () => {

  return (
    <div className='bg-white w-20 h-20'>
    <FacebookProvider appId="123456789">
        <SendToMessenger messengerAppId="123456789" pageId="123456789"/>
      </FacebookProvider>  
    </div>
  )
}

export default FBMessenger