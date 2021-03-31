export const Credentials = () => {
    return {
        ClientId: process.env.REACT_APP_API_KEY,
        ClientSecret: process.env.REACT_APP_API_PVKEY
    }
}
