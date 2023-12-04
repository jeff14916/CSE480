/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Gallery } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GalleryUpdateFormInputValues = {
    title?: string;
    description?: string;
    dummy?: string;
};
export declare type GalleryUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    dummy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GalleryUpdateFormOverridesProps = {
    GalleryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    dummy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GalleryUpdateFormProps = React.PropsWithChildren<{
    overrides?: GalleryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    gallery?: Gallery;
    onSubmit?: (fields: GalleryUpdateFormInputValues) => GalleryUpdateFormInputValues;
    onSuccess?: (fields: GalleryUpdateFormInputValues) => void;
    onError?: (fields: GalleryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GalleryUpdateFormInputValues) => GalleryUpdateFormInputValues;
    onValidate?: GalleryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GalleryUpdateForm(props: GalleryUpdateFormProps): React.ReactElement;
