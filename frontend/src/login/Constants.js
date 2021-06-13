const production  = 'https://authentication-react-project.herokuapp.com';
const development = 'http://localhost:5000';
export const HOST_URL = (process.env.NODE_ENV === "development" ? development : production );
console.log("-----------------")
console.log("HostUrl:", HOST_URL)
console.log("-----------------")
