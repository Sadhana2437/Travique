function Login() {
  return (
    <main className="page-container login-container">
      <div className="form-card">
        <h1>Welcome to Travique</h1>
        <p>Sign in to start planning your next journey.</p>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="primary-button" type="button">
          Sign In
        </button>
      </div>
    </main>
  );
}

export default Login;