import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { IvisaInput, IvisaInputProps } from '@ivisa/ui'; // Assuming IvisaInput is exported from @ivisa/ui

export type InputRHFProps<T extends FieldValues = FieldValues> = IvisaInputProps & UseControllerProps<T>;

export function InputRHF<T extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  ...inputProps
}: InputRHFProps<T>) {
  return (
    <Controller<T>
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <IvisaInput
          {...inputProps}
          ref={ref}
          value={value ?? ''}
          onBlur={onBlur}
          onChangeText={onChange}
          error={!!error}
          helperText={error ? error.message : inputProps.helperText}
        />
      )}
    />
  );
}
