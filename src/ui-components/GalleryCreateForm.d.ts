/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
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
export declare type GalleryCreateFormInputValues = {
    imageurl?: string;
    title?: string;
    description?: string;
};
export declare type GalleryCreateFormValidationValues = {
    imageurl?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GalleryCreateFormOverridesProps = {
    GalleryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    imageurl?: PrimitiveOverrideProps<StorageManagerProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GalleryCreateFormProps = React.PropsWithChildren<{
    overrides?: GalleryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GalleryCreateFormInputValues) => GalleryCreateFormInputValues;
    onSuccess?: (fields: GalleryCreateFormInputValues) => void;
    onError?: (fields: GalleryCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GalleryCreateFormInputValues) => GalleryCreateFormInputValues;
    onValidate?: GalleryCreateFormValidationValues;
} & React.CSSProperties>;
export default function GalleryCreateForm(props: GalleryCreateFormProps): React.ReactElement;
