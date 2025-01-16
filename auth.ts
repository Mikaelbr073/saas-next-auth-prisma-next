import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import FindUserByCredentials from "./lib/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Credentials({
        credentials: {
            email: {},
            password: {}
        },
        authorize: async (Credentials) => {
            //LOGÍCA DE AUTENTICAÇÃO
            const user = await FindUserByCredentials(Credentials.email as string, Credentials.password as string);
            //se autenticado retorna user
            // se não, retorna null
            return user
        }
    })],
})