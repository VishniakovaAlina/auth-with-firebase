import axios from "axios";
import {FIREBASE_API_KEY} from "../constants";

interface firebaseAuthWithEmailProps {
    email: string;
    password: string;
}

interface firebaseAuthWithEmailResponse {
    localId: string,
    email: string,
    displayName: string,
    idToken: string,
    registered: boolean,
    refreshToken: string,
    expiresIn: number
}

export const firebaseAuthWithEmail = ({
                                          email,
                                          password
                                      }: firebaseAuthWithEmailProps):Promise<firebaseAuthWithEmailResponse> => {
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`, {
        email,
        password
    })
}