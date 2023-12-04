/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getGallery } from "../graphql/queries";
import { updateGallery } from "../graphql/mutations";
const client = generateClient();
export default function GalleryUpdateForm(props) {
  const {
    id: idProp,
    gallery: galleryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nickname: "",
    imageurl: "",
    title: "",
    description: "",
    timestamp: "",
  };
  const [nickname, setNickname] = React.useState(initialValues.nickname);
  const [imageurl, setImageurl] = React.useState(initialValues.imageurl);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = galleryRecord
      ? { ...initialValues, ...galleryRecord }
      : initialValues;
    setNickname(cleanValues.nickname);
    setImageurl(cleanValues.imageurl);
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setTimestamp(cleanValues.timestamp);
    setErrors({});
  };
  const [galleryRecord, setGalleryRecord] = React.useState(galleryModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGallery.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGallery
        : galleryModelProp;
      setGalleryRecord(record);
    };
    queryData();
  }, [idProp, galleryModelProp]);
  React.useEffect(resetStateValues, [galleryRecord]);
  const validations = {
    nickname: [],
    imageurl: [{ type: "Required" }],
    title: [{ type: "Required" }],
    description: [],
    timestamp: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nickname: nickname ?? null,
          imageurl,
          title,
          description: description ?? null,
          timestamp,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateGallery.replaceAll("__typename", ""),
            variables: {
              input: {
                id: galleryRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "GalleryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nickname"
        isRequired={false}
        isReadOnly={false}
        value={nickname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nickname: value,
              imageurl,
              title,
              description,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.nickname ?? value;
          }
          if (errors.nickname?.hasError) {
            runValidationTasks("nickname", value);
          }
          setNickname(value);
        }}
        onBlur={() => runValidationTasks("nickname", nickname)}
        errorMessage={errors.nickname?.errorMessage}
        hasError={errors.nickname?.hasError}
        {...getOverrideProps(overrides, "nickname")}
      ></TextField>
      <TextField
        label="Imageurl"
        isRequired={true}
        isReadOnly={false}
        value={imageurl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nickname,
              imageurl: value,
              title,
              description,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.imageurl ?? value;
          }
          if (errors.imageurl?.hasError) {
            runValidationTasks("imageurl", value);
          }
          setImageurl(value);
        }}
        onBlur={() => runValidationTasks("imageurl", imageurl)}
        errorMessage={errors.imageurl?.errorMessage}
        hasError={errors.imageurl?.hasError}
        {...getOverrideProps(overrides, "imageurl")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nickname,
              imageurl,
              title: value,
              description,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nickname,
              imageurl,
              title,
              description: value,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        value={timestamp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nickname,
              imageurl,
              title,
              description,
              timestamp: value,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || galleryModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || galleryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
