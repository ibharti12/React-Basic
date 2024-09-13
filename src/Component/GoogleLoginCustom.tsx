import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
const GoogleLoginCustom=()=>{
    const responseGoogle = (response: any) => {
        // let data = {
        //   token: response?.credential,
        //   role: "user",
        //   social_type: "google",
        // };
    
        console.log(response,"responseresponse");
        }  
          return (
        
         <div>
           <GoogleOAuthProvider clientId="1030509470490-frea0g2sdgkck6c6l02knqm90dcss00e.apps.googleusercontent.com" 
           >
            <GoogleLogin
            onSuccess={responseGoogle}
            // onError={responseGoogle}
          />
           </GoogleOAuthProvider>


        </div>
  
       
    )

}
export default GoogleLoginCustom;