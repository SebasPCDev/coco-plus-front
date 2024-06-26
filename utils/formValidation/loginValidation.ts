import ILoginForm from "../types/auth/loginFormInterface";
import ILoginErrorForm from "../types/auth/loginFormErrorInterface";

export default function loginValidation(values: ILoginForm): ILoginErrorForm {
    let errors: ILoginErrorForm = {};
    if (!values.email) {
        errors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "El email es inválido";
    } else if (!values.password) {
        errors.password = "La contraseña es requerida";
    }
    return errors;
}

