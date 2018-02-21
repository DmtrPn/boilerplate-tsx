import { ValidationError as CvError } from 'class-validator';
import { ValidationError, ValidationErrorItems } from './ValidationError';

export class CvValidationError extends ValidationError {

    constructor(errors: CvError[] = []) {
        super(CvValidationError.createValidationErrors(errors));
    }

    protected static createValidationErrors(cvErrors: CvError[]): ValidationErrorItems {
        const result: ValidationErrorItems = {};
        for (const error of cvErrors) {
            const attribute = CvValidationError.extractErrorAttribute(error);
            const messages = CvValidationError.extractErrorMessages(error);
            result[attribute] = messages;
        }
        return result;
    }

    protected static extractErrorAttribute(error: CvError): string {
        return error.property;
    }

    protected static extractErrorMessages(error: CvError): string[] {
        const constraints = error.constraints;
        const keys = Object.keys(constraints);
        return keys.map(key => constraints[key]);
    }

}
