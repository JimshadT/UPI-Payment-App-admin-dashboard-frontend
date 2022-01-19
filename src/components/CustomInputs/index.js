import React, { useMemo } from "react";
import { FilledInput, TextField, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";
import Select, { components } from "react-select";
import AsyncSelect from "react-select/async";
import { useDropzone } from "react-dropzone";

const CustomLabel = (props) => {
    return (
        <label htmlFor={props.name} style={{ textTransform: "uppercase" }}>
            {props.label}
        </label>
    );
};

export const CustomTextInput = (props, { key }) => {
    return (
        <div style={{ width: "90%", marginLeft: "20px" }}>
            {CustomLabel(props)}
            <FilledInput
                key={key}
                name={props.name}
                autoComplete="off"
                type="text"
                onBlur={props.onBlur}
                placeholder={props.placeHolder}
                onChange={props.handleChange}
                value={props.values[props.name]}
                error={Boolean(props.touched[props.name] && props.errors[props.name])}
            />
            {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                    {props.errors[props.name]}
                </div>
            ) : (
                ""
            )}
            <br />
        </div>
    );
};

export const CustomNumberInput = (props, { key }) => {
    return (
        <div style={{ width: "90%", marginLeft: "20px" }}>
            {CustomLabel(props)}
            <FilledInput
                key={key}
                name={props.name}
                autoComplete="off"
                type="number"
                onBlur={props.onBlur}
                placeholder={props.placeHolder}
                onChange={props.handleChange}
                value={props.values[props.name]}
                inputProps={props.inputProps}
                error={Boolean(props.touched[props.name] && props.errors[props.name])}
            />
            {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 12 }}>
                    {props.errors[props.name]}
                </div>
            ) : (
                ""
            )}
            <br />
        </div>
    );
};

export const CustomDropdown = (props, { key }) => {
    const customStyles = {
        control: (base) => ({
            ...base,
            height: 40,
            maxHeight: 40,
        }),
    };
    const getValues = () => {
        props.values[props.name] = [...new Set(props.values[props.name])];
    };
    return (
        <div style={{ width: "90%", marginLeft: "20px" }}>
            {CustomLabel(props)}
            <Select
                key={key}
                className="basic-single"
                classNamePrefix="select"
                name={props.name}
                options={props.options}
                onBlur={props.onBlur}
                onChange={(e) => {
                    e === null ? (props.values[props.name] = []) : (props.values[props.name] = [e]);
                }}
                value={getValues()}
                closeMenuOnSelect
                placeholder={props.placeHolder}
                defaultValue={props.values[props.name]}
                isClearable={props.isClearable ?? true}
                isSearchable
                styles={customStyles}
                isDisabled={props.disabled ?? false}
            />
            {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                    {props.errors[props.name]}
                </div>
            ) : (
                ""
            )}
            <br />
        </div>
    );
};

export const CustomTextAreaInput = (props, { key }) => {
    return (
        <>
            <div style={{ width: "90%", marginLeft: "20px" }}>
                {CustomLabel(props)}
                <FilledInput
                    key={key}
                    name={props.name}
                    autoComplete="off"
                    type="text"
                    onBlur={props.onBlur}
                    placeholder={props.placeHolder}
                    onChange={props.handleChange}
                    value={props.values[props.name]}
                    error={Boolean(props.touched[props.name] && props.errors[props.name])}
                    multiline={true}
                    rows={3}
                />
                {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                    <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                        {props.errors[props.name]}
                    </div>
                ) : (
                    ""
                )}
                <br />
            </div>
        </>
    );
};

export const CustomDateTimePicker = (props, { key }) => {
    return (
        <>
            <div style={{ width: "90%", marginLeft: "20px" }}>
                {CustomLabel(props)}
                <TextField
                    key={key}
                    type="datetime-local"
                    onBlur={props.onBlur}
                    placeholder={props.placeHolder}
                    value={props.values[props.name]}
                    onChange={props.handleChange}
                    name={props.name}
                    inputProps={props.inputProps}
                    fullWidth
                />
                {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                    <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                        {props.errors[props.name]}
                    </div>
                ) : (
                    ""
                )}
            </div>
            <br />
        </>
    );
};

export const CustomDatePicker = (props, { key }) => {
    return (
        <>
            <div style={{ width: "90%", marginLeft: "20px" }}>
                {CustomLabel(props)}
                <TextField
                    key={key}
                    type="date"
                    onBlur={props.onBlur}
                    placeholder={props.placeHolder}
                    value={props.values[props.name]}
                    onChange={props.handleChange}
                    name={props.name}
                    inputProps={props.inputProps}
                    fullWidth
                />
                {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                    <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                        {props.errors[props.name]}
                    </div>
                ) : (
                    ""
                )}
            </div>
            <br />
        </>
    );
};

export const CustomRadioButton = (props, { key }) => {
    return (
        <div style={{ width: "90%", marginLeft: "20px" }}>
            {CustomLabel(props)}
            <RadioGroup
                key={key}
                name={props.name}
                value={props.values[props.name]}
                onChange={props.handleChange}
                onBlur={props.onBlur}
                row
            >
                {props.options.map((e, i) => {
                    return <FormControlLabel key={i} value={e.value} control={<Radio color="primary" />} label={e.label} />;
                })}
            </RadioGroup>
            {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                    {props.errors[props.name]}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export const CustomMultiDropdown = (props, { key }) => {
    const getValues = () => {
        props.values[props.name] = [...new Set(props.values[props.name])];
    };

    const customValueContainer = ({ children, getValue, ...props }) => {
        let maxToShow = 2;
        var length = getValue().length;
        let displayChips = React.Children.toArray(children).slice(0, maxToShow);
        let shouldBadgeShow = length > maxToShow;
        let displayLength = length - maxToShow;
        return (
            <components.ValueContainer {...props}>
                {!props.selectProps.inputValue && displayChips}
                <div style={{ fontSize: 12 }}>{shouldBadgeShow && `+ ${displayLength}`}</div>
            </components.ValueContainer>
        );
    };

    const customOption = ({ children, ...props }) => {
        return (
            <components.Option {...props}>
                <div>{props.data.optionLabel}</div>
            </components.Option>
        );
    };

    const customStyles = {
        multiValueLabel: (base) => ({
            ...base,
            width: "100%",
        }),
        control: (base) => ({
            ...base,
            height: 40,
            maxHeight: 40,
        }),
        valueContainer: (base) => ({
            ...base,
            height: 30,
        }),
    };

    return (
        <div style={{ width: "90%", marginLeft: "20px" }}>
            {CustomLabel(props)}
            <Select
                key={key}
                name={props.name}
                value={getValues()}
                onBlur={props.onBlur}
                cacheOptions
                placeholder={props.placeHolder}
                options={props.options}
                defaultOptions
                onChange={(e) => (props.values[props.name] = e)}
                closeMenuOnSelect={false}
                components={{ ValueContainer: customValueContainer, Option: customOption }}
                styles={customStyles}
                isMulti
                hideSelectedOptions={false}
                isSearchable={false}
                noOptionsMessage={({ inputValue }) => (!inputValue ? props.noOptionsMessage ?? "No options" : null)}
                isDisabled={props.disabled ?? false}
            />
            {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                    {props.errors[props.name]}
                </div>
            ) : (
                ""
            )}
            <br />
        </div>
    );
};

export const CustomAsyncMultiDropdown = (props, { key }) => {
    const getValues = () => {
        props.values[props.name] = [...new Set(props.values[props.name])];
    };

    const customValueContainer = ({ children, getValue, ...props }) => {
        let maxToShow = 2;
        var length = getValue().length;
        let displayChips = React.Children.toArray(children).slice(0, maxToShow);
        let shouldBadgeShow = length > maxToShow;
        let displayLength = length - maxToShow;
        return (
            <components.ValueContainer {...props}>
                {!props.selectProps.inputValue && displayChips}
                <div style={{ fontSize: 12 }}>{shouldBadgeShow && `+ ${displayLength}`}</div>
            </components.ValueContainer>
        );
    };

    const customOption = ({ children, ...props }) => {
        return (
            <components.Option {...props}>
                <div>{props.data.optionLabel}</div>
            </components.Option>
        );
    };

    const customStyles = {
        multiValueLabel: (base) => ({
            ...base,
            width: "100%",
        }),
        control: (base) => ({
            ...base,
            height: 40,
            maxHeight: 40,
        }),
        valueContainer: (base) => ({
            ...base,
            height: 30,
        }),
    };

    return (
        <div style={{ width: "90%", marginLeft: "20px" }}>
            {CustomLabel(props)}
            <AsyncSelect
                key={key}
                name={props.name}
                value={getValues()}
                onBlur={props.onBlur}
                cacheOptions
                placeholder={props.placeHolder}
                loadOptions={props.options}
                defaultOptions
                onChange={(e) => (props.values[props.name] = e)}
                closeMenuOnSelect={false}
                components={{ ValueContainer: customValueContainer, Option: customOption }}
                styles={customStyles}
                isMulti
                hideSelectedOptions={false}
                isSearchable={false}
                noOptionsMessage={({ inputValue }) => (!inputValue ? props.noOptionsMessage ?? "No options" : null)}
                isDisabled={props.disabled ?? false}
            />
            {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                    {props.errors[props.name]}
                </div>
            ) : (
                ""
            )}
            <br />
        </div>
    );
};

export const CustomAsyncDropdown = (props, { key }) => {
    const getValues = () => {
        props.values[props.name] = [...new Set(props.values[props.name])];
    };

    const customValueContainer = ({ children, getValue, ...props }) => {
        let maxToShow = 2;
        var length = getValue().length;
        let displayChips = React.Children.toArray(children).slice(0, maxToShow);
        let shouldBadgeShow = length > maxToShow;
        let displayLength = length - maxToShow;
        return (
            <components.ValueContainer {...props}>
                {!props.selectProps.inputValue && displayChips}
                <div style={{ fontSize: 12 }}>{shouldBadgeShow && `+ ${displayLength}`}</div>
            </components.ValueContainer>
        );
    };

    const customOption = ({ children, ...props }) => {
        return (
            <components.Option {...props}>
                <div>{props.data.optionLabel}</div>
            </components.Option>
        );
    };

    const customStyles = {
        multiValueLabel: (base) => ({
            ...base,
            width: "100%",
        }),
        control: (base) => ({
            ...base,
            height: 40,
            maxHeight: 40,
        }),
        valueContainer: (base) => ({
            ...base,
            height: 30,
        }),
    };

    return (
        <div style={{ width: "90%", marginLeft: "20px" }}>
            {CustomLabel(props)}
            <AsyncSelect
                key={key}
                name={props.name}
                value={getValues()}
                onBlur={props.onBlur}
                cacheOptions
                placeholder={props.placeHolder}
                loadOptions={props.options}
                defaultOptions
                onChange={(e) => {
                    e === null ? (props.values[props.name] = []) : (props.values[props.name] = [e]);
                }}
                closeMenuOnSelect
                components={{ ValueContainer: customValueContainer, Option: customOption }}
                styles={customStyles}
                hideSelectedOptions={false}
                isSearchable={false}
                noOptionsMessage={({ inputValue }) => (!inputValue ? props.noOptionsMessage ?? "No options" : null)}
                isDisabled={props.disabled ?? false}
            />
            {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                    {props.errors[props.name]}
                </div>
            ) : (
                ""
            )}
            <br />
        </div>
    );
};

export const CustomFileUpload = (props, { key }) => {
    const baseStyle = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#eeeeee",
        borderStyle: "dashed",
        backgroundColor: "#fafafa",
        color: "#bdbdbd",
        outline: "none",
        transition: "border .24s ease-in-out",
    };

    const activeStyle = {
        borderColor: "#2196f3",
    };

    const acceptStyle = {
        borderColor: "#00e676",
    };

    const rejectStyle = {
        borderColor: "#ff1744",
    };

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles } = useDropzone({
        accept: "image/*",
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragReject, isDragAccept]
    );

    const files = acceptedFiles.map((file) => {
        props.values[props.name] = [file];
        return (
            <li key={file.path}>
                {file.path} - {file.size} bytes
            </li>
        );
    });

    return (
        <div style={{ width: "90%", marginLeft: "20px" }}>
            {CustomLabel(props)}
            <div className="container">
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                {files.length ? (
                    <aside>
                        <h4>File</h4>
                        <ul>{files}</ul>
                    </aside>
                ) : null}
            </div>
            {Boolean(props.touched[props.name] && props.errors[props.name]) ? (
                <div style={{ display: "block", marginLeft: "10px", color: "red", fontSize: 13 }}>
                    {props.errors[props.name]}
                </div>
            ) : (
                ""
            )}
            <br />
        </div>
    );
};
