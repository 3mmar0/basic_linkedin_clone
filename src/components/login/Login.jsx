import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../firebase';
import "./Login.css"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const dispatch = useDispatch()

    const register = () => {
        if (!name) {
            return alert("Please enter a full name")
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
            user.user.updateProfile({
                displayName: name,
                photoURL: img
            }).then(() => {
                dispatch(login({
                    displayName: name,
                    photoURL: img,
                    email: user.user.email,
                    uid: user.user.uid,
                }))
            })
        })
    }
    const loginTo = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            dispatch(login({
                displayName: user.user.displayName,
                email: user.user.email,
                uid: user.user.uid,
                photoURL: user.user.photoURL,
            }))
        })
    }

    return (
        <div className="login">
            <form>
                <input type="text" placeholder="Full name (required if registering)" 
                    value={name} onChange={e => setName(e.target.value)}
                />
                <input type="text" placeholder="Profile img URL" 
                    value={img} onChange={e => setImg(e.target.value)}
                />
                <input type="email" placeholder="Email"
                    value={email} onChange={e => setEmail(e.target.value)} 
                />
                <input type="password" placeholder="Pass" 
                    value={password} onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" onClick={loginTo}>Sign in</button>
            </form>
            <p>Not a member? <span onClick={register}>Register now</span></p>
        </div>
    )
}

export default Login
