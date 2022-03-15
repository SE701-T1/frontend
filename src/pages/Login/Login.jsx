import React from 'react'
import LoginButton from './LoginButton'
import Carousel from '../../components/Carousel/Carousel'

export default function Login() {
    const data = 
    [
        {
            id:1,
            title: "Online classes robbing you of the experince of making friends?",
            description: "Get partners to study with! Even Batman needs Justice league to defeat DarkSeid, just saying....Join BuddyMaker!"
        },
        {
            id:2,
            title: "Collaborative learning is better than solo learning!",
            description: "Statistics suggest that 78% of people are able to perform well in their courses if they learn with a community. Join BuddyMaker!"
        },
        {
            id:3,
            title: "Get teammates to study your courses with ollaborative learning is better than solo learning!",
            description: "Or find awesome people to form a super secret rock band with ;)  Join BuddyMaker!"
        }
    ]

    return (
    <div>
        <Carousel data={data}/>
        <LoginButton/>        
    </div>
    )
}
