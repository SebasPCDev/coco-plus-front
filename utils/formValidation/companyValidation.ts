import ICompaniesErrorInfo from "../types/requests/companiesFormErrorInterface";
import ICompaniesInfo from "../types/requests/companiesFormInterface";

export default function companyValidation(values: ICompaniesInfo): ICompaniesErrorInfo {
    let errors: ICompaniesErrorInfo = {};
    if (!values.name) {
        errors.name = "Requerido";
    } else if (!/^(?=\S)(?!.*[^\x20-\x7E])(?=.{3,50}$)[a-zA-Z ]+$/.test(values.name)) {
        errors.name = "El nombre es inválido";
    } else if (!values.lastname) {
        errors.lastname = "Requerido";
    } else if (!/^(?=\S)(?!.*[^\x20-\x7E])(?=.{3,50}$)[a-zA-Z ]+$/.test(values.lastname)) {
        errors.lastname = "Requerido";
    } else if (!/^\s*(\+\d{1,3}\s*)?\d{11,15}\s*$/.test(values.phone)) {
        errors.phone = "Debe tener entre 11 y 15 caracteres";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Requerido";
    } else if (!/^\w{1,15}$/.test(values.identification)) {
        errors.identification = "Identificación es inválida";
    } else if (!/^.{5,50}$/.test(values.position)) {
        errors.position = "Debe tener entre 5 y 50 caracteres";
    } else if (!/^.{3,50}$/.test(values.companyName)) {
        errors.companyName = "Debe tener entre 3 y 50 caracteres";
    } else if (!/\S+@\S+\.\S+/.test(values.companyEmail)) {
        errors.companyEmail = "Requerido";
    } else if (!/^\s*(\+\d{1,3}\s*)?\d{11,15}\s*$/.test(values.companyPhone)) {
        errors.companyPhone = "Debe tener entre 11 y 15 caracteres";
        /* Implementar Agregar país y ciudades */
        /* } else if (!values.country || values.country.length > 50) {
            errors.country = "Country is required and must be at most 50 characters";
        } else if (!values.city || values.city.length > 50) {
            errors.city = "City is required and must be at most 50 characters";*/
        /* Implementar array de horas que Sebas pasó */
    } else if (!values.quantityBeneficiaries && values.quantityBeneficiaries !== 0) {
        errors.quantityBeneficiaries = "Requerido";
    } else if (isNaN(values.quantityBeneficiaries) || values.quantityBeneficiaries < 0) {
        errors.quantityBeneficiaries = "Mínimo un beneficiario";
    } else if (!values.businessSector) {
        errors.businessSector = "Requerido";
    } else if (!/^.{2,50}$/.test(values.businessSector)) {
        errors.businessSector = "Requerido";
    } else if (!values.size && values.size !== 0) {
        errors.size = "Requerido";
    } if (values.message && values.message.length > 255) {
        errors.message = "Máximo 255 caracteres";
    }
    return errors;
}