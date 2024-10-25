import React from 'react';




const Login: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle registration logic here
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat Box.</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    
                    <button type="submit">Sign in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    );
};

export default Login;



