import React, { useState } from 'react'
import { styles } from '../styles'
import Avatar from '../Avatar'
import axios from 'axios'

const EmailForm = props => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    function getOrCreateUser(callback){
        axios.put(
            'https://api.chatengine.io/users/',
            {
                "username": email,
                "secret": email,
                "email": email,
            },
            {headers: {"Private-Key": '10522cba-cd09-4a6d-8fcf-68c6c302d3bd'}}
        )
        .then(r => callback(r.data))
    }   
    
    function getOrCreateChat(callback){
        axios.put(
            'https://api.chatengine.io/chats/',
            {
                "usernames": ["Vasilis Admin", email],
                "is_direct_chat": true
            },
            {headers: {"Private-Key": '10522cba-cd09-4a6d-8fcf-68c6c302d3bd'}}
        )
        .then(r => callback(r.data))
    } 

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        console.log('Sending email', email)

        //START REST-API CALLS
        getOrCreateUser(
            user => {
                props.setUser(user)
                getOrCreateChat(
                    chat => props.setChat(chat)
                )
            }
        )
    }

    return(
        <div
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: props.visible ? '100%' : '0%',
                    opacity: props.visible ? '1' : '0%',
                }
            }}
        >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe}/>
            </div>
            <div 
               className='transition-5'
               style={{
                ...styles.loadingDiv,
                ...{
                    zIndex: loading ? '10' : '-1',
                    opacity: loading ? '0.33' : '0'
                }
               }} 
            />

            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center'}}>
                <Avatar
                        style={{
                            position: 'relative',
                            left: 'calc(50% - 44px)',
                            top: '10%'
                        }}
                />
                <div style={styles.topText}>
                    Billy, our smart support bot, is here to help.
                </div>

                <form
                    onSubmit={e => handleSubmit(e)}   
                    style={{ position: 'relative', width: '100%', top: '25%' }}    
                >
                     <input
                        style={styles.emailInput}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Your email'
                     />
                </form>        
                <div style={styles.bottomText}>
                    Enter your email here.
                </div>

            </div>
        </div>
    )
}

export default EmailForm




