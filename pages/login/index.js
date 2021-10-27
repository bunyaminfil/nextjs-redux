import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import Link from "next/link";

const Index = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div>
      <Link href="/users">
        <a>
          <FacebookLogin
            appId={process.env.facebookAppId}
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook"
            textButton="Continue with Facebook"
          />
        </a>
      </Link>
      <br />
      <br />
      <Link href="/users">
        <a>
          <GoogleLogin
            clientId={process.env.googleClientId}
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </a>
      </Link>
    </div>
  );
};

export default Index;
