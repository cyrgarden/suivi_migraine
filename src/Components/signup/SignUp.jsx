import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import './signup.css'
import CHEVRON from './assets/chevron-left.svg'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'

function SignUp() {
    const [signFields, setSignFieds] = useState({
        nickname:"",
        email :"",
        password : "",
        checked_password :""
    })

    function handleChange(e) {
        const {value, name} = e.target;
        console.log("The value is : " + value);

        setSignFieds(prevValue => {
            if (name === 'nickname') {
                return {
                    nickname:value,
                    email:prevValue.email,
                    password: prevValue.password,
                    checked_password: prevValue.checked_password
                }
            }
            else if (name === 'mail') {
                return {
                    nickname:prevValue.nickname,
                    email:value,
                    password: prevValue.password,
                    checked_password: prevValue.checked_password
                }
            }
            else if(name === 'password') {
                return {
                    nickname:prevValue.nickname,
                    email: prevValue.email,
                    password:value,
                    checked_password:prevValue.checked_password
                }
            }

            else if(name === 'checked_password') {
                return {
                    nickname:prevValue.nickname,
                    email: prevValue.email,
                    password:prevValue.password,
                    checked_password :value
                }
            }
        })
  
    }


    function handleSubmit(){
        if (signFields.password === signFields.checked_password){
            console.log("Tout est bon !!")

            axios.post('https://oajwhgh9.directus.app/users', {
                "first_name" : signFields.nickname,
                "email" :signFields.email,
                "password": signFields.password,
                
            }).then(res =>{
                console.log(res);
                console.log("inscription réussie !!")
                //setFirstDay();
                
            })
        }
        else{
            alert("The passwords are not the same !!")
        }
    }


    

    return (
        <body id="signup-body">
        <header id="signup-header">
            <a href="#"> <img src={CHEVRON} alt=""/> </a> 
            <h1>Créer un compte</h1>
        </header>

        <section id="signup-section">
            <div>
                <fieldset className='signup-fieldset'>
                    <label for="nickname" className='signup-label'>Pseudo</label>
                    <input type="text" id="nickname" name='nickname' onChange={handleChange}/>
                </fieldset>
                <fieldset className='signup-fieldset'>
                    <label for="mail" className='signup-label'>Adresse e-mail</label>
                    <input type="text" id="mail" name='mail' onChange={handleChange}/>
                </fieldset>
                <fieldset className='signup-fieldset'>
                    <label for="password" className='signup-label'>Mot de passe</label>
                    <input type="password" id="password" name='password' onChange={handleChange}/>
                </fieldset >
                <fieldset className='signup-fieldset'>
                    <label for="password-conf" className='signup-label'>Confirmer le mot de passe</label>
                    <input type="password" id="password-conf" name='checked_password' onChange={handleChange}/>
                </fieldset >

                <fieldset className='signup-fieldset'>
                    <button onClick={handleSubmit} class="green" >Confirmer</button>
                </fieldset>
            </div>

            <footer id='signup-footer'>
                <p>Créer un compte avec:</p>
                <section class="signup-alts-log-button">
                    <FcGoogle className='single' size={70} />
                    <BsFacebook className='single' size={70} />
                </section>
            </footer>
        </section>
        </body>
    )
}

export default SignUp;