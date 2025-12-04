import { Toaster as SonnerToaster } from 'sonner'
import { useTheme } from 'tamagui'

type ToasterProps = React.ComponentProps<typeof SonnerToaster>

export const Toaster = ({ ...props }: ToasterProps) => {
  const theme = useTheme()
  return (
    <SonnerToaster
      theme={theme.name as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}
