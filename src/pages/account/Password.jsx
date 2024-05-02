const Password = () => {
  return (
    <div className="col-12 col-md-7">
        <p>Change password</p>
        <span>Your password must be at least 8 characters and should include letters and special characters(!$@%).</span>
        <form>
            <p>Current password</p>
            <input type="password" name=""  className='form-control' placeholder='Current password (Updated 09/01/2024)' />
            <p>New password</p>
            <input type="password" name="" id="password1" className='form-control' placeholder='Type new password' />
            <p>Confirm new password</p>
            <input type="password" name="" id="password2" className='form-control' placeholder='Re-type new password'/>
            <p className='forgot-btn'>Forgot password?</p>
            <button className='btn'>Update</button>
        </form>
    </div>
  )
}

export default Password