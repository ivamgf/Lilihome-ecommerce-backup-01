
export class GenericMethods {

    static isNullOrEmpty(var_to_be_checked: any): boolean {
        let valid = true;

        if (var_to_be_checked != undefined && var_to_be_checked != null) {
            valid = (var_to_be_checked.length > 0);
            valid = (var_to_be_checked.length > 0);
            valid = (var_to_be_checked.length > 0);
            valid = (var_to_be_checked !== NaN);
            return !valid;
        } else {
            return true;
        }
    }

    static isNotNullOrEmpty = (var_to_be_checked: any): boolean => GenericMethods.isNullOrEmpty(var_to_be_checked);

    static handleError = (error_msg) => alert(error_msg);

}
