import React from 'react';
import { Toaster as SonnerToaster, toast as sonnerToast } from 'sonner';
import { useTheme } from 'tamagui';
import { CustomToast, CustomToastProps } from './CustomToast';

type ToasterProps = React.ComponentProps<typeof SonnerToaster>;

export const Toaster = ({ ...props }: ToasterProps) => {
  const theme = useTheme();
  return (
    <SonnerToaster
      theme={theme.name as 'light' | 'dark' | 'system'}
      {...props}
    />
  );
};

type ToastProps = CustomToastProps & { id?: string | number };

const showToast = (props: ToastProps) => {
  const { id, ...rest } = props;
  return sonnerToast.custom(() => <CustomToast {...rest} />, { id });
};

export const toast = (title: string, props?: Omit<ToastProps, 'title'>) => {
  return showToast({ title, ...props });
};

toast.success = (title: string, props?: Omit<ToastProps, 'title' | 'type'>) => {
  return showToast({ title, type: 'success', ...props });
};

toast.error = (title: string, props?: Omit<ToastProps, 'title' | 'type'>) => {
  return showToast({ title, type: 'error', ...props });
};

toast.warning = (title: string, props?: Omit<ToastProps, 'title' | 'type'>) => {
  return showToast({ title, type: 'warning', ...props });
};

toast.info = (title: string, props?: Omit<ToastProps, 'title' | 'type'>) => {
  return showToast({ title, type: 'info', ...props });
};

toast.loading = (title: string, props?: Omit<ToastProps, 'title' | 'loading'>) => {
  return showToast({ title, loading: true, ...props });
};

toast.dismiss = (toastId: string | number) => {
  sonnerToast.dismiss(toastId);
};
