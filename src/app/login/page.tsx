import LoginForm from "@/components/login/login-form";

export default async function LoginPage(){
    return (
        <section>
            <h1 className="title animeLeft">Login</h1>
            <LoginForm/>
        </section>
    )
}