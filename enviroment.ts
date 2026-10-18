import dotenv from 'dotenv'

const env = 'qa';

dotenv.config({
    path: `.env.${env}`
});

export const environment = {
    baseUrl: process.env.BASE_URL!,
    userName: process.env.USER_NAME!,
    password: process.env.PASSWORD!
};


    


//console.log("URL:", environment.baseUrl);
  