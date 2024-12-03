import React, { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';

const Login = () => {
    const { login } = usePrivy();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [step, setStep] = useState('options') // options --> email --> otp

    //handle signin w google
    const loginWithGoogle = () => {
        login({ loginMethods: ['google'] })
        .then((user) => {
            console.log('Successful login with Google:', user);
            alert("Successful login!");
        })
        .catch((error) => console.error())
    };

    // send email for otp login
    const sendOneTimePassword = () => {
        login({ loginMethods: ['email'], email })
        .then(() => setStep('otp'))
        .catch((error) => console.error('Error sending OTP:', error));
    }

    //handle otp login
    const loginWithOtp = () => {
        login({ loginMethods: ['email'], email, code})
        .then((user) => {
            console.log('Logged in with OTP:', user);
            alert('Successful login!');
        })
        .catch((error) => console.error('OTP Login Error:', error));
    }

    return (
        <div style={{ textAlign: 'center', maxWidth: '400px', margin: '2rem auto' }}>
            <h1>Login</h1>

            {step === 'options' && (
                <>
                    <button
                        onClick={loginWithGoogle}
                        style={{ display: 'block', margin: '1rem auto', padding: '0.5rem 1rem' }}
                    >
                        Sign in with Google   
                    </button>
                    <button
                        onClick={() => setStep('email')}
                        style={{ display: 'block', margin: '1rem auto', padding: '0.5rem 1rem' }}
                    >
                        Sign in with E-Mail
                    </button>
                </>
            )}

            {step === 'email' && (
                <>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your e-mail"
                        style={{ width: '100%', padding: '0.5rem', margin: "1rem 0" }}
                    />
                    <button onClick={sendOneTimePassword} style={{ padding: '0.5rem 1rem' }}>
                        Send OTP Code
                    </button>
                </>
            )}

            {step === 'otp' && (
                <>
                    <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter OTP Code"
                    style={{ width: '100%', padding: '0.5rem', margin: '1rem 0' }}
                    />
                    <button onClick={loginWithOtp} style={{ padding: '0.5rem 1rem'}}>
                        Log In
                    </button>
                
                </>
            )}
        </div>
    );
};

export default Login