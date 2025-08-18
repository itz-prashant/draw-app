"use client"

const AuthPage = ({isSignin}:{
    isSignin: boolean
}) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-6 m-2 bg-white rounded flex flex-col space-y-6 text-gray-600">
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password"/>

        <button >{isSignin ? "Sign in" : "Sign up"}</button>
      </div>
    </div>
  )
}

export default AuthPage
