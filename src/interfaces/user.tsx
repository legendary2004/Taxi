export interface user {
    id: number;
    f_name: string;
    l_name: string;
    email: string;
    password: string;
    phone: string;
    profile_img: string;
    isAdmin: boolean;
}

export interface loginContext {
    user: user;
    msg: string;
    handleLogin: Function;
    signOut: Function;
}