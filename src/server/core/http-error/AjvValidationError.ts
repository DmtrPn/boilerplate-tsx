import { ErrorObject, RequiredParams, TypeParams } from 'ajv';
import { ValidationError, ValidationErrorItems } from './ValidationError';

class AjvValidationError extends ValidationError {
    constructor(errors: ErrorObject[]) {
        super(AjvValidationError.createValidationErrors(errors));
    }

    protected static createValidationErrors(ajvErrors: ErrorObject[]): ValidationErrorItems {
        const result: ValidationErrorItems = {};
        for (const error of ajvErrors) {
            const attribute = AjvValidationError.extractErrorAttribute(error);
            const message = AjvValidationError.extractErrorMessage(error);
            const messages = result[attribute];
            result[attribute] = messages ? [...messages, message] : [message];
        }
        return result;
    }

    protected static extractErrorAttribute(error: ErrorObject): string {
        const params = <RequiredParams>error.params;
        return (error.keyword == 'required')
            ? params.missingProperty
            : error.dataPath.substr(1);
    }

    protected static extractErrorMessage(error: ErrorObject): string {
        let message = error.message || 'Unknown error';
        switch (error.keyword) {
            case 'format':
                message = 'Invalid format';
                break;
            case 'required':
                message = 'Required';
                break;
            case 'type':
                const params = <TypeParams>error.params;
                if (params.type == 'integer') {
                    message = 'Must be an integer';
                }
                break;
        }
        return message;
    }
}

export { AjvValidationError };
