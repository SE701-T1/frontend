import React from 'react'
import LoginButton from './LoginButton'
import Carousel from '../../components/Carousel/Carousel'
import styles from './Login.module.css'

export default function Login() {

    // Data to be displayed on carousel
    const data = 
    [
        {
            id:1,
            title: "Online classes robbing you of the experince of making friends?",
            description: "Get partners to study with! Even Batman needs Justice league to defeat DarkSeid, just saying!"
        },
        {
            id:2,
            title: "Collaborative learning is better than solo learning!",
            description: "Statistics suggest that 78% of people are able to perform well in their courses if they learn with a community."
        },
        {
            id:3,
            title: "Get teammates to study your courses with collaborative learning is better than solo learning!",
            description: "Or find awesome people to form a super secret rock band with ;)"
        }
    ]

    // Will be executed if the authentication is successful
    const onSuccess = (res) => {
        res.tokenObj();
    }

    // Will be executed if authentication is not successful
    const onFailure = (res) => {
        res.tokenObj();
    }

    return (
    <div className = {`${styles.container}`}>
        <Carousel data={data} className = {`${styles.carousel}`}/>
        <LoginButton onSuccess={onSuccess} onFailure={onFailure} onclassName = {`${styles.login}`}/>        
    </div>
    )
}
