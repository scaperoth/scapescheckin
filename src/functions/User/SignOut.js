import { Auth } from 'aws-amplify';

const SignOut = async () => {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export default SignOut;