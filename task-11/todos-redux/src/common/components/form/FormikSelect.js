import React from 'react';
import FormikTextField from './FormikTextField';

export default function FormikSelect({ options, ...props }) {

    return (
        <FormikTextField
            {...props}
            select
            SelectProps={{
                native: true,
            }}
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </FormikTextField>
    )
}
