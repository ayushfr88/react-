// import { use } from "react";
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            this.account=new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount =await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
            //    call another method
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
          return  await this.account.createEmailPasswordSession()
        } catch (error) {
            
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service ::  getCurrentUser :: error", error)
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error" ,error)
        }
    }
        
}
// see to use AuthService we iwll need to make an object either way in the file we will be using AuthSerice anyway .So to mmake things easier we are declaring a object and exporting it as below.
const authService=new AuthService()

export default authService