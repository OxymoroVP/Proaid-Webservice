import React, { useState, useEffect } from 'react'

import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'

const ChatEngine = props =>{
    return (
        <div
            className='transition-5'
            style={{
                    height: props.visible ? '100%' : '0%',
                    zIndex: props.visible ? '100%' : '0%',
                    width: '100%',
                    backgroundColor: 'white',
                }}
        >
            {
                props.visible &&
                <ChatEngineWrapper>
                    <Socket
                        projectID = 'a3d5970b-2622-4d29-84d3-61f4d007df80'
                        userName={props.user.email}
                        userSecret={props.user.email}
                    />
                    <ChatFeed activeChat={props.chat.id}/>
                </ChatEngineWrapper>
            }
        </div>

    )   
}

export default ChatEngine