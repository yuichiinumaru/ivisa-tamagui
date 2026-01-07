// src/atoms/Alert.tsx
import { Children, cloneElement, forwardRef, isValidElement } from "react";
import { styled, Text, XStack, YStack } from "tamagui";
import { X } from "@tamagui/lucide-icons";
import { jsx, jsxs } from "react/jsx-runtime";
var AlertFrame = styled(XStack, {
  name: "Alert",
  tag: "div",
  alignItems: "center",
  borderRadius: "$md",
  borderWidth: 1,
  padding: "$4",
  gap: "$4",
  variants: {
    variant: {
      default: {
        backgroundColor: "$background",
        borderColor: "$borderColor"
      },
      destructive: {
        borderColor: "$red7",
        backgroundColor: "$red2",
        color: "$red11"
      },
      success: {
        borderColor: "$green7",
        backgroundColor: "$green2",
        color: "$green11"
      },
      warning: {
        borderColor: "$yellow7",
        backgroundColor: "$yellow2",
        color: "$yellow11"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var AlertTitleFrame = styled(Text, {
  name: "AlertTitle",
  tag: "h5",
  fontWeight: "500",
  fontFamily: "$heading",
  letterSpacing: -0.5,
  color: "$color12"
  // Will inherit color from the parent AlertFrame variant
});
var AlertDescriptionFrame = styled(Text, {
  name: "AlertDescription",
  tag: "div",
  fontSize: "$3",
  fontFamily: "$body",
  color: "$color11"
  // Will inherit color from the parent AlertFrame variant
});
var AlertCloseButton = styled(XStack, {
  name: "AlertCloseButton",
  tag: "button",
  als: "flex-start",
  // Align self to the top
  p: "$1",
  borderRadius: "$2",
  opacity: 0.7,
  hoverStyle: {
    opacity: 1
  },
  focusStyle: {
    outlineWidth: 2,
    outlineStyle: "solid",
    outlineColor: "$blue8"
  },
  pressStyle: {
    opacity: 0.5
  },
  variants: {
    variant: {
      default: {
        color: "$color11"
      },
      destructive: {
        color: "$red11"
      },
      success: {
        color: "$green11"
      },
      warning: {
        color: "$yellow11"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var AlertRoot = forwardRef(
  ({ variant = "default", icon, isDismissible, onDismiss, children, ...props }, ref) => {
    const childrenWithProps = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, { variant });
      }
      return child;
    });
    return /* @__PURE__ */ jsxs(AlertFrame, { ref, variant, role: "alert", ...props, children: [
      icon,
      /* @__PURE__ */ jsx(YStack, { flex: 1, gap: "$1.5", children: childrenWithProps }),
      isDismissible && /* @__PURE__ */ jsx(
        AlertCloseButton,
        {
          variant,
          "aria-label": "Fechar",
          onPress: () => onDismiss?.(),
          children: /* @__PURE__ */ jsx(X, { size: 16 })
        }
      )
    ] });
  }
);
AlertRoot.displayName = "Alert";
var Alert = AlertRoot;
Alert.Title = AlertTitleFrame;
Alert.Description = AlertDescriptionFrame;

// src/atoms/AspectRatio.tsx
import { Stack, styled as styled3 } from "tamagui";
import { forwardRef as forwardRef2 } from "react";

// src/atoms/Skeleton.tsx
import { YStack as YStack2, styled as styled2 } from "tamagui";
import { jsx as jsx2 } from "react/jsx-runtime";
var SkeletonFrame = styled2(YStack2, {
  name: "Skeleton",
  backgroundColor: "$muted",
  borderRadius: "$sm",
  variants: {
    animationType: {
      pulse: {
        animationName: "skeleton-pulse",
        animationDuration: "2s",
        animationIterationCount: "infinite"
      },
      none: {}
    },
    round: {
      true: {
        borderRadius: "$full"
      }
    }
  },
  defaultVariants: {
    animationType: "pulse"
  }
});
var Skeleton = SkeletonFrame.styleable((props, ref) => /* @__PURE__ */ jsx2(SkeletonFrame, { ...props, ref, "aria-hidden": true, "data-testid": "skeleton" }));

// src/atoms/AspectRatio.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var AspectRatioFrame = styled3(Stack, {
  name: "AspectRatio",
  variants: {
    variant: {
      square: {
        aspectRatio: 1
      },
      video: {
        aspectRatio: 16 / 9
      },
      photo: {
        aspectRatio: 4 / 3
      }
    }
  },
  defaultVariants: {
    variant: "square"
  }
});
var AspectRatio = forwardRef2(
  ({ ratio, variant = "square", loading, children, ...props }, ref) => {
    const { animationName, animationDuration, ...safeProps } = props;
    return /* @__PURE__ */ jsx3(
      AspectRatioFrame,
      {
        ref,
        variant,
        aspectRatio: ratio,
        ...safeProps,
        children: loading ? /* @__PURE__ */ jsx3(Skeleton, { width: "100%", height: "100%", "data-testid": "skeleton-loader" }) : children
      }
    );
  }
);
AspectRatio.displayName = "AspectRatio";

// src/atoms/Avatar.tsx
import React3, { useState } from "react";
import { Avatar as TamaguiAvatar, styled as styled4, Text as Text2 } from "tamagui";
import { Fragment, jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var stringToColor = (str) => {
  if (!str) return "#ccc";
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  return `hsl(${h}, 70%, 80%)`;
};
var AvatarFrame = styled4(TamaguiAvatar, {
  name: "Avatar",
  size: "$10",
  borderWidth: 0,
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  variants: {
    shape: {
      circle: {
        borderRadius: 1e5
      },
      square: {
        borderRadius: 0
      },
      rounded: {
        borderRadius: "$4"
      }
    }
  },
  defaultVariants: {
    shape: "circle"
  }
});
var AvatarImageComponent = React3.forwardRef(
  ({ accessibilityLabel, src, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    return /* @__PURE__ */ jsxs2(Fragment, { children: [
      isLoading && /* @__PURE__ */ jsx4(Skeleton, { circular: true, width: "100%", height: "100%" }),
      /* @__PURE__ */ jsx4(
        TamaguiAvatar.Image,
        {
          ref,
          src,
          ...props,
          accessibilityLabel,
          onLoad: () => setIsLoading(false),
          onError: () => setIsLoading(false),
          "data-testid": "avatar-image",
          style: { display: isLoading ? "none" : "flex", width: "100%", height: "100%" }
        }
      )
    ] });
  }
);
AvatarImageComponent.displayName = "AvatarImage";
var AvatarFallbackView = styled4(TamaguiAvatar.Fallback, {
  name: "AvatarFallback",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background"
});
var AvatarIndicatorFrame = styled4("div", {
  name: "AvatarIndicator",
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "$4",
  height: "$4",
  borderRadius: "$round",
  backgroundColor: "$green10",
  borderWidth: 2,
  borderColor: "$background"
});
var AvatarFallback = AvatarFallbackView;
var AvatarImage = AvatarImageComponent;
var AvatarRoot = React3.forwardRef(
  ({ src, fallback, accessibilityLabel, children, ...props }, ref) => {
    if (children) {
      return /* @__PURE__ */ jsx4(AvatarFrame, { ref, ...props, "aria-label": accessibilityLabel, children });
    }
    return /* @__PURE__ */ jsxs2(AvatarFrame, { ref, ...props, "aria-label": accessibilityLabel, children: [
      /* @__PURE__ */ jsx4(AvatarImageComponent, { src, accessibilityLabel }),
      /* @__PURE__ */ jsx4(AvatarFallbackView, { children: typeof fallback === "string" ? /* @__PURE__ */ jsx4(Text2, { children: fallback }) : fallback })
    ] });
  }
);
AvatarRoot.displayName = "Avatar";
var AvatarFallbackText = ({ children }) => {
  const backgroundColor = stringToColor(typeof children === "string" ? children : "");
  return /* @__PURE__ */ jsx4(AvatarFallbackView, { style: { backgroundColor }, children: /* @__PURE__ */ jsx4(Text2, { children }) });
};
var Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImageComponent,
  Fallback: AvatarFallbackText,
  Indicator: AvatarIndicatorFrame
});

// src/molecules/Accordion.tsx
import {
  Accordion as TamaguiAccordion,
  styled as styled5,
  Paragraph,
  Square,
  YStack as YStack3
} from "tamagui";
import React4 from "react";
import { ChevronDown } from "@tamagui/lucide-icons";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var Accordion = styled5(TamaguiAccordion, {
  name: "Accordion",
  width: "100%",
  backgroundColor: "$background"
});
var AccordionItemFrame = styled5(TamaguiAccordion.Item, {
  name: "AccordionItem",
  borderBottomWidth: 1,
  borderColor: "$borderColor",
  variants: {
    hasError: {
      true: {
        borderColor: "$red10"
      }
    }
  }
});
var AccordionHeaderFrame = styled5(TamaguiAccordion.Header, {
  name: "AccordionHeader",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  gap: "$3"
});
var AccordionTriggerFrame = styled5(TamaguiAccordion.Trigger, {
  name: "AccordionTrigger",
  group: "trigger",
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: "$4",
  backgroundColor: "transparent",
  hoverStyle: {
    backgroundColor: "transparent"
  },
  focusStyle: {
    outlineColor: "$ring",
    outlineStyle: "solid",
    outlineWidth: 2
  }
});
var AccordionContentFrame = styled5(TamaguiAccordion.Content, {
  name: "AccordionContent",
  overflow: "hidden",
  paddingBottom: "$4",
  animation: "quick",
  opacity: 1,
  minHeight: 0,
  enterStyle: { opacity: 0, height: 0 },
  exitStyle: { opacity: 0, height: 0 }
});
var AccordionItem = React4.forwardRef(({ children, isLoading, hasError, ...props }, ref) => {
  const childrenWithProps = React4.Children.map(children, (child) => {
    if (React4.isValidElement(child)) {
      const type = child.type;
      if (type && type.displayName === "AccordionContent") {
        return React4.cloneElement(child, { isLoading });
      }
    }
    return child;
  });
  return /* @__PURE__ */ jsx5(AccordionItemFrame, { ref, hasError, ...props, "data-testid": "accordion-item", children: childrenWithProps });
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React4.forwardRef(({ children, rightSlot, ...props }, ref) => {
  return /* @__PURE__ */ jsxs3(AccordionHeaderFrame, { children: [
    /* @__PURE__ */ jsxs3(AccordionTriggerFrame, { ref, ...props, children: [
      /* @__PURE__ */ jsx5(Paragraph, { flex: 1, fontWeight: "500", fontSize: "$3", ellipse: true, children }),
      /* @__PURE__ */ jsx5(Square, { animation: "quick", rotate: "0deg", "$group-trigger-expanded": { rotate: "180deg" }, children: /* @__PURE__ */ jsx5(ChevronDown, { size: 16 }) })
    ] }),
    rightSlot
  ] });
});
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = React4.forwardRef(({ children, isLoading, ...props }, ref) => {
  return /* @__PURE__ */ jsx5(AccordionContentFrame, { ref, ...props, children: isLoading ? /* @__PURE__ */ jsxs3(YStack3, { gap: "$2", py: "$2", "data-testid": "skeleton-container", children: [
    /* @__PURE__ */ jsx5(Skeleton, { height: "$2", width: "90%" }),
    /* @__PURE__ */ jsx5(Skeleton, { height: "$2", width: "70%" }),
    /* @__PURE__ */ jsx5(Skeleton, { height: "$2", width: "80%" })
  ] }) : /* @__PURE__ */ jsx5(Paragraph, { fontSize: "$3", color: "$mutedForeground", children }) });
});
AccordionContent.displayName = "AccordionContent";

// src/molecules/AlertDialog/AlertDialog.tsx
import React6 from "react";
import {
  AlertDialog as TamaguiAlertDialog,
  styled as styled8,
  XStack as XStack3,
  YStack as YStack4,
  Spinner as Spinner2
} from "tamagui";

// src/atoms/Button/Button.tsx
import React5 from "react";
import { Button as TamaguiButton, styled as styled7, View, Text as Text3 } from "tamagui";

// src/atoms/Spinner/Spinner.tsx
import { Spinner as TamaguiSpinner, styled as styled6 } from "tamagui";
import { jsx as jsx6 } from "react/jsx-runtime";
var StyledSpinner = styled6(TamaguiSpinner, {
  name: "Spinner",
  color: "$primary"
});
var Spinner = ({ "aria-label": ariaLabel = "Carregando...", ...props }) => {
  return /* @__PURE__ */ jsx6(StyledSpinner, { "aria-label": ariaLabel, ...props });
};

// src/atoms/Button/Button.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var StyledButton = styled7(TamaguiButton, {
  name: "Button",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "$sm",
  // Force Cera Pro via body token
  fontFamily: "$body",
  variants: {
    variant: {
      default: {
        backgroundColor: "$primary",
        color: "$primaryForeground",
        hoverStyle: {
          backgroundColor: "$primaryHover"
        },
        pressStyle: {
          backgroundColor: "$primary",
          opacity: 0.8
        }
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$secondaryForeground",
        hoverStyle: {
          backgroundColor: "$secondaryHover"
        },
        pressStyle: {
          backgroundColor: "$secondary",
          opacity: 0.8
        }
      },
      destructive: {
        backgroundColor: "$destructive",
        color: "$destructiveForeground",
        hoverStyle: {
          opacity: 0.9
        },
        pressStyle: {
          opacity: 0.8
        }
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$borderColor",
        color: "$foreground",
        hoverStyle: {
          backgroundColor: "$muted"
        },
        pressStyle: {
          backgroundColor: "$muted",
          opacity: 0.8
        }
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$foreground",
        hoverStyle: {
          backgroundColor: "$muted"
        },
        pressStyle: {
          backgroundColor: "$muted",
          opacity: 0.8
        }
      }
    },
    size: {
      sm: {
        height: "$sm",
        px: "$md"
      },
      default: {
        height: "$md",
        px: "$lg"
      },
      lg: {
        height: "$lg",
        px: "$xl"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var renderChildren = (child) => {
  if (typeof child === "string" || typeof child === "number") {
    return /* @__PURE__ */ jsx7(Text3, { children: child });
  }
  return child;
};
var Button = React5.forwardRef(
  ({ variant = "default", size = "default", children, leftIcon, rightIcon, loading, asChild, ...props }, ref) => {
    return /* @__PURE__ */ jsxs4(
      StyledButton,
      {
        ref,
        variant,
        size,
        disabled: loading || props.disabled,
        ...props,
        asChild,
        children: [
          /* @__PURE__ */ jsxs4(View, { style: { flexDirection: "row", alignItems: "center", opacity: loading ? 0 : 1, gap: 8 }, children: [
            leftIcon,
            React5.Children.map(children, renderChildren),
            rightIcon
          ] }),
          loading && /* @__PURE__ */ jsx7(View, { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsx7(Spinner, { color: "$current", size: "small" }) })
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/molecules/AlertDialog/AlertDialog.tsx
import { Fragment as Fragment2, jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var AlertDialogOverlay = styled8(TamaguiAlertDialog.Overlay, {
  name: "AlertDialogOverlay",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  animation: "quick",
  opacity: 1,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 }
});
var AlertDialogContent = styled8(TamaguiAlertDialog.Content, {
  name: "AlertDialogContent",
  backgroundColor: "$background",
  borderRadius: "$lg",
  padding: "$lg",
  width: "90%",
  maxWidth: 512,
  borderWidth: 1,
  borderColor: "$borderColor",
  variants: {
    error: {
      true: {
        borderColor: "$red10"
      }
    }
  },
  animation: [
    "quick",
    {
      opacity: {
        overshootClamping: true
      }
    }
  ],
  enterStyle: { x: 0, y: -20, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: 10, opacity: 0, scale: 0.95 },
  x: 0,
  scale: 1,
  opacity: 1,
  y: 0
});
var AlertDialogHeader = styled8(YStack4, {
  name: "AlertDialogHeader",
  flexDirection: "column",
  marginBottom: "$md",
  gap: "$sm"
});
var AlertDialogTitle = styled8(TamaguiAlertDialog.Title, {
  name: "AlertDialogTitle",
  fontSize: "$6",
  fontWeight: "600",
  color: "$foreground",
  variants: {
    error: {
      true: {
        color: "$red10"
      }
    }
  }
});
var AlertDialogDescription = styled8(TamaguiAlertDialog.Description, {
  name: "AlertDialogDescription",
  fontSize: "$3",
  color: "$mutedForeground",
  lineHeight: "$4"
});
var AlertDialogFooter = styled8(XStack3, {
  name: "AlertDialogFooter",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "$3",
  marginTop: "$md"
});
var AlertDialogAction = TamaguiAlertDialog.Action;
var AlertDialogCancel = TamaguiAlertDialog.Cancel;
var AlertDialogTrigger = TamaguiAlertDialog.Trigger;
var AlertDialogPortal = TamaguiAlertDialog.Portal;
var AlertDialogContentComposite = React6.forwardRef(({ hasError, ...props }, ref) => {
  return /* @__PURE__ */ jsxs5(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx8(AlertDialogOverlay, {}, "overlay"),
    /* @__PURE__ */ jsx8(AlertDialogContent, { ref, error: hasError, ...props }, "content")
  ] });
});
AlertDialogContentComposite.displayName = "AlertDialogContent";
var AlertDialog = ({
  trigger,
  title,
  description,
  actions,
  onCancel,
  onAction,
  isLoading = false,
  hasError = false,
  isDisabled = false,
  actionText = "Confirmar",
  cancelText = "Cancelar"
}) => {
  return /* @__PURE__ */ jsxs5(TamaguiAlertDialog, { children: [
    /* @__PURE__ */ jsx8(TamaguiAlertDialog.Trigger, { asChild: true, children: trigger }),
    /* @__PURE__ */ jsxs5(AlertDialogContentComposite, { hasError, children: [
      /* @__PURE__ */ jsxs5(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx8(AlertDialogTitle, { error: hasError, children: title }),
        /* @__PURE__ */ jsx8(AlertDialogDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsx8(AlertDialogFooter, { children: actions || /* @__PURE__ */ jsxs5(Fragment2, { children: [
        /* @__PURE__ */ jsx8(AlertDialogCancel, { asChild: true, children: /* @__PURE__ */ jsx8(Button, { variant: "outline", onPress: onCancel, disabled: isLoading || isDisabled, children: cancelText }) }),
        /* @__PURE__ */ jsx8(AlertDialogAction, { asChild: true, children: /* @__PURE__ */ jsx8(
          Button,
          {
            variant: hasError ? "destructive" : "default",
            onPress: onAction,
            disabled: isLoading || isDisabled,
            icon: isLoading ? /* @__PURE__ */ jsx8(Spinner2, {}) : void 0,
            children: isLoading ? "Processando..." : actionText
          }
        ) })
      ] }) })
    ] })
  ] });
};

// src/atoms/Badge.tsx
import { cloneElement as cloneElement2, forwardRef as forwardRef3 } from "react";
import { styled as styled9, Text as Text4, View as View2 } from "tamagui";
import { Slot } from "@tamagui/core";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var badgeVariants = {
  variant: {
    default: {
      backgroundColor: "$primary",
      borderColor: "transparent",
      color: "$primaryForeground"
    },
    secondary: {
      backgroundColor: "$secondary",
      borderColor: "transparent",
      color: "$secondaryForeground"
    },
    destructive: {
      backgroundColor: "$destructive",
      borderColor: "transparent",
      color: "$destructiveForeground"
    },
    outline: {
      backgroundColor: "transparent",
      borderColor: "$borderColor",
      color: "$foreground"
    }
  }
};
var BadgeFrame = styled9(View2, {
  name: "Badge",
  tag: "div",
  borderRadius: "$full",
  borderWidth: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "$1.5",
  // Interactive states
  hoverStyle: {
    opacity: 0.8
  },
  focusStyle: {
    outlineColor: "$focusRingColor",
    outlineWidth: 2,
    outlineStyle: "solid"
  },
  pressStyle: {
    opacity: 0.9
  },
  variants: {
    variant: {
      ...Object.fromEntries(
        Object.entries(badgeVariants.variant).map(([key, value]) => [
          key,
          {
            backgroundColor: value.backgroundColor,
            borderColor: value.borderColor
          }
        ])
      )
    },
    size: {
      sm: {
        paddingHorizontal: "$2",
        paddingVertical: "$0.5"
      },
      md: {
        paddingHorizontal: "$2.5",
        paddingVertical: "$0.5"
      },
      lg: {
        paddingHorizontal: "$3",
        paddingVertical: "$1"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});
var BadgeText = styled9(Text4, {
  name: "BadgeText",
  fontWeight: "600",
  fontFamily: "$body",
  variants: {
    variant: {
      ...Object.fromEntries(
        Object.entries(badgeVariants.variant).map(([key, value]) => [
          key,
          {
            color: value.color
          }
        ])
      )
    },
    size: {
      sm: {
        fontSize: "$1"
      },
      md: {
        fontSize: "$2"
      },
      lg: {
        fontSize: "$3"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});
var Badge = forwardRef3(
  ({ children, asChild, variant = "default", size = "md", leftIcon, rightIcon, ...props }, ref) => {
    const Component2 = asChild ? Slot : BadgeFrame;
    const renderIcon = (icon) => {
      if (!icon) return null;
      return cloneElement2(icon, {
        size: 12
        // Consistent icon size
      });
    };
    if (asChild) {
      return /* @__PURE__ */ jsx9(Component2, { ...props, variant, size, ref, children });
    }
    return /* @__PURE__ */ jsxs6(Component2, { ...props, variant, size, ref, children: [
      renderIcon(leftIcon),
      typeof children === "string" ? /* @__PURE__ */ jsx9(BadgeText, { variant, size, children }) : children,
      renderIcon(rightIcon)
    ] });
  }
);
Badge.displayName = "Badge";

// src/atoms/Input/Input.tsx
import { Eye, EyeOff } from "@tamagui/lucide-icons";
import React7, { useContext, useState as useState2 } from "react";
import { Input as TamaguiInput, styled as styled10, XStack as XStack4, View as View3, Text as Text5 } from "tamagui";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
var InputContext = React7.createContext(null);
var useInputContext = () => {
  return useContext(InputContext);
};
var inputVariants = {
  variant: {
    default: {
      borderWidth: 1,
      borderColor: "$borderColor",
      backgroundColor: "$background",
      focusStyle: {
        borderColor: "$ring",
        outlineColor: "$ring",
        outlineStyle: "solid",
        outlineWidth: 2
      },
      focusWithinStyle: {
        borderColor: "$ring",
        outlineColor: "$ring",
        outlineStyle: "solid",
        outlineWidth: 2
      }
    },
    filled: {
      borderWidth: 1,
      borderColor: "transparent",
      backgroundColor: "$muted",
      focusStyle: {
        borderColor: "$ring",
        borderWidth: 1
      },
      focusWithinStyle: {
        borderColor: "$ring",
        borderWidth: 1
      }
    }
  },
  size: {
    sm: {
      height: "$8",
      px: "$3"
    },
    default: {
      height: "$10",
      px: "$3"
    },
    lg: {
      height: "$12",
      px: "$4"
    }
  },
  state: {
    error: {
      borderColor: "$red10",
      borderWidth: 2
    },
    success: {
      borderColor: "$green10",
      borderWidth: 2
    }
  }
};
var StyledInput = styled10(TamaguiInput, {
  name: "Input",
  color: "$foreground",
  placeholderTextColor: "$mutedForeground",
  fontFamily: "$body",
  variants: {
    variant: inputVariants.variant,
    size: {
      sm: { ...inputVariants.size.sm, fontSize: "$2" },
      default: { ...inputVariants.size.default, fontSize: "$3" },
      lg: { ...inputVariants.size.lg, fontSize: "$4" }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var InputFrame = styled10(XStack4, {
  name: "InputFrame",
  alignItems: "center",
  borderRadius: "$md",
  overflow: "hidden",
  variants: {
    variant: inputVariants.variant,
    size: inputVariants.size,
    state: inputVariants.state,
    loading: {
      true: {
        opacity: 0.7,
        pointerEvents: "none"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var SimpleInputFrame = styled10(XStack4, {
  name: "SimpleInputFrame",
  alignItems: "center",
  borderRadius: "$md",
  overflow: "hidden",
  variants: {
    variant: inputVariants.variant,
    size: inputVariants.size,
    state: inputVariants.state,
    loading: {
      true: {
        opacity: 0.7,
        pointerEvents: "none"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var UnframedInputStyled = styled10(TamaguiInput, {
  name: "InputField",
  flex: 1,
  backgroundColor: "transparent",
  borderWidth: 0,
  outlineWidth: 0,
  color: "$foreground",
  placeholderTextColor: "$mutedForeground",
  fontFamily: "$body",
  height: "100%",
  paddingHorizontal: 0,
  hoverStyle: {
    borderColor: "transparent",
    borderWidth: 0
  },
  focusStyle: {
    borderColor: "transparent",
    borderWidth: 0,
    outlineWidth: 0
  },
  variants: {
    size: {
      sm: { fontSize: "$2" },
      default: { fontSize: "$3" },
      lg: { fontSize: "$4" }
    }
  }
});
var InputField = React7.forwardRef((props, ref) => {
  const context = useInputContext();
  const size = props.size || context?.size || "default";
  return /* @__PURE__ */ jsx10(UnframedInputStyled, { ref, size, ...props });
});
InputField.displayName = "Input.Field";
var InputIcon = styled10(View3, {
  name: "InputIcon",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  paddingHorizontal: "$2"
});
var InputButton = styled10(Button, {
  name: "InputButton",
  borderRadius: 0,
  height: "100%",
  borderWidth: 0
});
var InputHint = styled10(Text5, {
  name: "InputHint",
  fontSize: "$2",
  color: "$mutedForeground",
  marginTop: "$2"
});
var InputBox = React7.forwardRef(
  ({ variant = "default", size = "default", loading = false, state, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx10(InputContext.Provider, { value: { size, loading }, children: /* @__PURE__ */ jsxs7(InputFrame, { ref, variant, size, loading, state, ...props, children: [
      children,
      loading && /* @__PURE__ */ jsx10(InputIcon, { children: /* @__PURE__ */ jsx10(Spinner, {}) })
    ] }) });
  }
);
InputBox.displayName = "Input.Box";
var InputMain = React7.forwardRef(
  ({ variant = "default", size = "default", loading = false, state, children, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState2(false);
    const isPassword = props.type === "password";
    if (children) {
      if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
        console.warn("Input: Passing 'children' to <Input /> is deprecated. Use <Input.Box> for composite inputs.");
      }
      return /* @__PURE__ */ jsx10(InputBox, { ref, variant, size, loading, state, ...props, children });
    }
    const { value, defaultValue: defaultValue2, ...restProps } = props;
    return /* @__PURE__ */ jsxs7(
      SimpleInputFrame,
      {
        ref,
        variant,
        size,
        loading,
        state,
        children: [
          /* @__PURE__ */ jsx10(
            StyledInput,
            {
              flex: 1,
              variant,
              size,
              disabled: loading,
              value,
              defaultValue: value !== void 0 ? void 0 : defaultValue2,
              ...restProps,
              type: isPassword && isPasswordVisible ? "text" : props.type
            }
          ),
          loading && /* @__PURE__ */ jsx10(InputIcon, { children: /* @__PURE__ */ jsx10(Spinner, {}) }),
          isPassword && /* @__PURE__ */ jsx10(InputIcon, { children: /* @__PURE__ */ jsx10(
            Button,
            {
              icon: isPasswordVisible ? EyeOff : Eye,
              onPress: () => setIsPasswordVisible(!isPasswordVisible),
              chromeless: true,
              size: "$2",
              p: 0,
              w: 30,
              h: "100%",
              bg: "transparent",
              hoverStyle: { bg: "transparent" },
              pressStyle: { bg: "transparent", opacity: 0.5 }
            }
          ) })
        ]
      }
    );
  }
);
InputMain.displayName = "Input";
var Input = Object.assign(InputMain, {
  Box: InputBox,
  Field: InputField,
  Icon: InputIcon,
  Button: InputButton,
  Hint: InputHint
});

// src/atoms/Label/Label.tsx
import {
  Label as TamaguiLabel,
  SizableText,
  styled as styled11
} from "tamagui";
import React8 from "react";
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
var LabelFrame = styled11(TamaguiLabel, {
  name: "Label",
  color: "$color",
  fontSize: "$4",
  fontWeight: "500",
  lineHeight: "$4",
  userSelect: "none",
  // To align the asterisk correctly
  display: "inline-flex",
  alignItems: "center",
  hoverStyle: {
    color: "$colorHover"
  },
  variants: {
    state: {
      error: {
        color: "$red10"
      }
    },
    disabled: {
      true: {
        color: "$colorDisabled",
        cursor: "not-allowed"
      }
    }
  }
});
var Label = React8.forwardRef(
  ({ children, required, ...props }, ref) => {
    return /* @__PURE__ */ jsxs8(LabelFrame, { ref, ...props, children: [
      children,
      required && /* @__PURE__ */ jsx11(SizableText, { color: "$red10", ml: "$1", "aria-hidden": "true", children: "*" })
    ] });
  }
);

// src/atoms/Switch.tsx
import React9 from "react";
import { Spinner as Spinner3, Switch as TamaguiSwitch, styled as styled12 } from "tamagui";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
var SwitchFrame = styled12(TamaguiSwitch, {
  name: "Switch",
  borderRadius: "$10",
  borderWidth: 0,
  backgroundColor: "$gray8",
  minHeight: 24,
  minWidth: 44,
  focusStyle: {
    outlineColor: "$blue10",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: 2
  },
  hoverStyle: {
    backgroundColor: "$gray9"
  },
  variants: {
    checked: {
      true: {
        backgroundColor: "$blue10",
        hoverStyle: {
          backgroundColor: "$blue11"
        }
      },
      false: {
        backgroundColor: "$gray8"
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: "$gray8",
        pointerEvents: "none"
      }
    },
    size: {
      small: {
        minHeight: 20,
        minWidth: 36
      },
      medium: {
        minHeight: 24,
        minWidth: 44
      },
      large: {
        minHeight: 28,
        minWidth: 52
      }
    }
  },
  defaultVariants: {
    checked: false,
    size: "medium"
  }
});
var SwitchThumb = styled12(TamaguiSwitch.Thumb, {
  name: "SwitchThumb",
  backgroundColor: "$background",
  borderRadius: "$10",
  animation: "quick",
  variants: {
    size: {
      small: {
        height: 16,
        width: 16
      },
      medium: {
        height: 20,
        width: 20
      },
      large: {
        height: 24,
        width: 24
      }
    }
  },
  defaultVariants: {
    size: "medium"
  }
});
var SwitchComponent = React9.forwardRef(({ loading = false, disabled, size, ...props }, ref) => {
  const isDisabled = loading || disabled;
  return /* @__PURE__ */ jsxs9(
    SwitchFrame,
    {
      ref,
      role: "switch",
      "aria-checked": props.checked,
      disabled: isDisabled,
      size,
      ...props,
      children: [
        /* @__PURE__ */ jsx12(SwitchThumb, { size }),
        loading && /* @__PURE__ */ jsx12(
          Spinner3,
          {
            size: size === "small" ? "small" : "large",
            color: "$background",
            style: { position: "absolute", margin: "auto" }
          }
        )
      ]
    }
  );
});
SwitchComponent.displayName = "Switch";
var Switch = SwitchComponent;

// src/atoms/Slider.tsx
import { Slider as TamaguiSlider, styled as styled13, Spinner as Spinner4 } from "tamagui";
import React10 from "react";
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
var SliderFrame = styled13(TamaguiSlider, {
  name: "Slider",
  defaultValue: [0],
  max: 100,
  step: 1,
  orientation: "horizontal",
  height: 20,
  // Container height
  justifyContent: "center"
});
var SliderTrack = styled13(TamaguiSlider.Track, {
  name: "SliderTrack",
  backgroundColor: "$secondary",
  height: 8,
  // h-2
  borderRadius: "$10"
  // rounded-full
});
var SliderRange = styled13(TamaguiSlider.TrackActive, {
  name: "SliderRange",
  backgroundColor: "$primary",
  borderRadius: "$10"
});
var SliderThumb = styled13(TamaguiSlider.Thumb, {
  name: "SliderThumb",
  index: 0,
  circular: true,
  size: "$5",
  // h-5 w-5 (20px)
  backgroundColor: "$background",
  borderWidth: 2,
  borderColor: "$primary",
  focusStyle: {
    outlineColor: "$ring",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: 2
  },
  hoverStyle: {
    cursor: "pointer"
  }
});
var Slider = React10.forwardRef(({
  "aria-label": ariaLabel = "Deslizante",
  disabled = false,
  loading = false,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxs10(SliderFrame, { ref, ...props, disabled: disabled || loading, "aria-label": ariaLabel, children: [
    /* @__PURE__ */ jsx13(SliderTrack, { children: /* @__PURE__ */ jsx13(SliderRange, {}) }),
    /* @__PURE__ */ jsx13(SliderThumb, { "aria-label": ariaLabel, children: loading && /* @__PURE__ */ jsx13(Spinner4, { size: "small", color: "$primary" }) })
  ] });
});
Slider.displayName = "Slider";

// src/atoms/Typography.tsx
import React13 from "react";
import { styled as styled14, H1 as TamaguiH1, H2 as TamaguiH2, H3 as TamaguiH3, H4 as TamaguiH4, H5 as TamaguiH5, H6 as TamaguiH6, Text as TamaguiText } from "tamagui";

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
import * as React12 from "react";

// ../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
import * as React11 from "react";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
import { Fragment as Fragment22, jsx as jsx14 } from "react/jsx-runtime";
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot22 = React12.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React12.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React12.Children.count(newElement) > 1) return React12.Children.only(null);
          return React12.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ jsx14(SlotClone, { ...slotProps, ref: forwardedRef, children: React12.isValidElement(newElement) ? React12.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ jsx14(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot22.displayName = `${ownerName}.Slot`;
  return Slot22;
}
var Slot2 = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React12.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React12.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React12.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React12.cloneElement(children, props2);
    }
    return React12.Children.count(children) > 1 ? React12.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable(child) {
  return React12.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// src/atoms/Typography.tsx
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
var Typography = React13.forwardRef(({ leftIcon, rightIcon, loading, children, variant, asChild, ...props }, ref) => {
  const components = {
    h1: TamaguiH1,
    h2: TamaguiH2,
    h3: TamaguiH3,
    h4: TamaguiH4,
    h5: TamaguiH5,
    h6: TamaguiH6,
    p: TamaguiText,
    span: TamaguiText
  };
  const Component2 = asChild ? Slot2 : components[variant] || TamaguiText;
  if (loading) {
    return /* @__PURE__ */ jsx15(Skeleton, { width: "100%", height: props.fontSize || 16 });
  }
  const { defaultProps, uppercase, ...safeProps } = props;
  return /* @__PURE__ */ jsxs11(Component2, { ref, ...safeProps, style: { display: "flex", alignItems: "center", gap: "0.5rem", ...props.style }, children: [
    leftIcon,
    children,
    rightIcon
  ] });
});
Typography.displayName = "Typography";
var commonStyles = {
  hoverStyle: {
    color: "$colorHover"
  },
  focusStyle: {
    color: "$colorFocus",
    outline: "2px solid $blue10"
  },
  pressStyle: {
    color: "$colorPress"
  }
};
var H1 = styled14(Typography, {
  ...commonStyles,
  fontFamily: "$heading",
  fontWeight: "900",
  color: "$color",
  variants: {
    uppercase: {
      true: {
        textTransform: "uppercase"
      }
    }
  },
  defaultProps: {
    variant: "h1"
  }
});
var H2 = styled14(Typography, {
  ...commonStyles,
  fontFamily: "$heading",
  fontWeight: "900",
  color: "$color",
  variants: {
    uppercase: {
      true: {
        textTransform: "uppercase"
      }
    }
  },
  defaultProps: {
    variant: "h2"
  }
});
var H3 = styled14(Typography, {
  ...commonStyles,
  fontFamily: "$heading",
  fontWeight: "500",
  color: "$color",
  defaultProps: {
    variant: "h3"
  }
});
var H4 = styled14(Typography, {
  ...commonStyles,
  fontFamily: "$heading",
  fontWeight: "500",
  color: "$color",
  defaultProps: {
    variant: "h4"
  }
});
var H5 = styled14(Typography, {
  ...commonStyles,
  fontFamily: "$heading",
  fontWeight: "500",
  color: "$color",
  defaultProps: {
    variant: "h5"
  }
});
var H6 = styled14(Typography, {
  ...commonStyles,
  fontFamily: "$heading",
  fontWeight: "500",
  color: "$color",
  defaultProps: {
    variant: "h6"
  }
});
var Text6 = styled14(Typography, {
  ...commonStyles,
  fontFamily: "$body",
  fontWeight: "400",
  color: "$color",
  defaultProps: {
    variant: "span"
  }
});
var Paragraph2 = styled14(Typography, {
  ...commonStyles,
  tag: "p",
  fontFamily: "$body",
  fontWeight: "400",
  color: "$color",
  marginBottom: "$2",
  defaultProps: {
    variant: "p"
  }
});
var Heading = H1;
var TypographyText = Text6;
var MutedText = styled14(Text6, {
  color: "$mutedForeground"
});
var LeadText = styled14(Text6, {
  fontSize: "$5",
  fontWeight: "300"
});
var Blockquote = styled14(Text6, {
  tag: "blockquote",
  borderLeftWidth: 2,
  borderLeftColor: "$borderColor",
  paddingLeft: "$4",
  fontStyle: "italic",
  margin: 0
});

// src/atoms/Progress/Progress.tsx
import { styled as styled18, Text as Text7, XStack as XStack6, YStack as YStack6 } from "tamagui";

// ../../node_modules/@tamagui/progress/dist/esm/Progress.mjs
import { getVariableValue as getVariableValue2, styled as styled17 } from "@tamagui/core";

// ../../node_modules/@tamagui/create-context/dist/esm/create-context.mjs
import * as React14 from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext22(rootComponentName, defaultContext) {
    const BaseContext = React14.createContext(defaultContext), index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const {
        scope,
        children,
        ...context
      } = props, Context = scope?.[scopeName]?.[index] || BaseContext, value = React14.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx16(Context.Provider, {
        value,
        children
      });
    }
    function useContext17(consumerName, scope, options) {
      const Context = scope?.[scopeName]?.[index] || BaseContext, context = React14.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      const missingContextMessage = `\`${consumerName}\` must be used within \`${rootComponentName}\``;
      if (options?.fallback) return options?.warn !== false && console.warn(missingContextMessage), options.fallback;
      throw new Error(missingContextMessage);
    }
    return [Provider, useContext17];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => React14.createContext(defaultContext));
    return function(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React14.useMemo(() => ({
        [`__scope${scopeName}`]: {
          ...scope,
          [scopeName]: contexts
        }
      }), [scope, contexts]);
    };
  };
  return createScope.scopeName = scopeName, [createContext22, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, {
        useScope,
        scopeName
      }) => {
        const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
        return {
          ...nextScopes2,
          ...currentScope
        };
      }, {});
      return React14.useMemo(() => ({
        [`__scope${baseScope.scopeName}`]: nextScopes
      }), [nextScopes]);
    };
  };
  return createScope.scopeName = baseScope.scopeName, createScope;
}

// ../../node_modules/@tamagui/is-equal-shallow/dist/esm/index.mjs
import { useCallback as useCallback2 } from "react";

// ../../node_modules/@tamagui/constants/dist/esm/constants.mjs
import React15, { useEffect, useLayoutEffect } from "react";
var IS_REACT_19 = typeof React15.use < "u";
var isWeb = true;
var isWindowDefined = typeof window < "u";
var isServer = isWeb && !isWindowDefined;
var isClient = isWeb && isWindowDefined;
var useIsomorphicLayoutEffect = isServer ? useEffect : useLayoutEffect;
var isChrome = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
var isAndroid = false;
var isIos = process.env.TEST_NATIVE_PLATFORM === "ios";

// ../../node_modules/@tamagui/web/dist/esm/constants/constants.mjs
var stackDefaultStyles = {};
var webViewFlexCompatStyles = {
  display: "flex",
  alignItems: "stretch",
  flexDirection: "column",
  flexBasis: "auto",
  boxSizing: "border-box",
  position: process.env.TAMAGUI_POSITION_STATIC === "1" ? "static" : "relative",
  minHeight: 0,
  minWidth: 0,
  flexShrink: 0
};
Object.assign(stackDefaultStyles, webViewFlexCompatStyles);
var MISSING_THEME_MESSAGE = process.env.NODE_ENV === "development" ? `Can't find Tamagui configuration.
    
99% of the time this is due to having mis-matched versions of Tamagui dependencies.
Ensure that every "tamagui" and "@tamagui/*" dependency is pinned to exactly the same version.

We have a CLI tool to help check this: 

  npx @tamagui/cli check
` : "Missing theme.";

// ../../node_modules/@tamagui/web/dist/esm/config.mjs
var conf;
var haventCalledErrorMessage = process.env.NODE_ENV === "development" ? `
Haven't called createTamagui yet. ${MISSING_THEME_MESSAGE}
` : "\u274C Error 001";
var hasWarnedAboutGlobalFallback = false;
var getConfigFromGlobalOrLocal = () => conf || (globalThis.__tamaguiConfig ? (process.env.NODE_ENV === "development" && !hasWarnedAboutGlobalFallback && (hasWarnedAboutGlobalFallback = true, console.warn(process.env.NODE_ENV === "development" ? "Tamagui: Using global config fallback. This may indicate duplicate tamagui instances (e.g., from Vite SSR bundling). This is handled automatically, but may cause issues." : "\u274C Error 002")), globalThis.__tamaguiConfig) : null);
var tokensMerged;
var getTokens = ({
  prefixed
} = {}) => {
  const config2 = getConfigFromGlobalOrLocal();
  if (process.env.NODE_ENV === "development" && !config2) throw new Error(haventCalledErrorMessage);
  const {
    tokens: tokens2,
    tokensParsed
  } = config2;
  return prefixed === false ? tokens2 : prefixed === true ? tokensParsed : tokensMerged;
};

// ../../node_modules/@tamagui/helpers/dist/esm/validStyleProps.mjs
var textColors = {
  color: true,
  textDecorationColor: true,
  textShadowColor: true
};
var tokenCategories = {
  radius: {
    borderRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    // logical
    borderStartStartRadius: true,
    borderStartEndRadius: true,
    borderEndStartRadius: true,
    borderEndEndRadius: true
  },
  size: {
    width: true,
    height: true,
    minWidth: true,
    minHeight: true,
    maxWidth: true,
    maxHeight: true,
    blockSize: true,
    minBlockSize: true,
    maxBlockSize: true,
    inlineSize: true,
    minInlineSize: true,
    maxInlineSize: true
  },
  zIndex: {
    zIndex: true
  },
  color: {
    backgroundColor: true,
    borderColor: true,
    borderBlockStartColor: true,
    borderBlockEndColor: true,
    borderBlockColor: true,
    borderBottomColor: true,
    borderInlineColor: true,
    borderInlineStartColor: true,
    borderInlineEndColor: true,
    borderTopColor: true,
    borderLeftColor: true,
    borderRightColor: true,
    borderEndColor: true,
    borderStartColor: true,
    shadowColor: true,
    ...textColors,
    outlineColor: true,
    caretColor: true
  }
};
var stylePropsUnitless = {
  WebkitLineClamp: true,
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  gridTemplateColumns: true,
  gridTemplateAreas: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  shadowOpacity: true
};
var stylePropsTransform = {
  x: true,
  y: true,
  scale: true,
  perspective: true,
  scaleX: true,
  scaleY: true,
  skewX: true,
  skewY: true,
  matrix: true,
  rotate: true,
  rotateY: true,
  rotateX: true,
  rotateZ: true
};
var stylePropsView = {
  backfaceVisibility: true,
  borderBottomEndRadius: true,
  borderBottomStartRadius: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderBlockWidth: true,
  borderBlockEndWidth: true,
  borderBlockStartWidth: true,
  borderInlineWidth: true,
  borderInlineEndWidth: true,
  borderInlineStartWidth: true,
  borderStyle: true,
  borderBlockStyle: true,
  borderBlockEndStyle: true,
  borderBlockStartStyle: true,
  borderInlineStyle: true,
  borderInlineEndStyle: true,
  borderInlineStartStyle: true,
  borderTopEndRadius: true,
  borderTopStartRadius: true,
  borderTopWidth: true,
  borderWidth: true,
  transform: true,
  transformOrigin: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  borderEndWidth: true,
  borderStartWidth: true,
  bottom: true,
  display: true,
  end: true,
  flexBasis: true,
  flexDirection: true,
  flexWrap: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  justifyContent: true,
  left: true,
  margin: true,
  marginBlock: true,
  marginBlockEnd: true,
  marginBlockStart: true,
  marginInline: true,
  marginInlineStart: true,
  marginInlineEnd: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  overflow: true,
  padding: true,
  paddingBottom: true,
  paddingInline: true,
  paddingBlock: true,
  paddingBlockStart: true,
  paddingInlineEnd: true,
  paddingInlineStart: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  position: true,
  right: true,
  start: true,
  top: true,
  inset: true,
  insetBlock: true,
  insetBlockEnd: true,
  insetBlockStart: true,
  insetInline: true,
  insetInlineEnd: true,
  insetInlineStart: true,
  direction: true,
  shadowOffset: true,
  shadowRadius: true,
  ...tokenCategories.color,
  ...tokenCategories.radius,
  ...tokenCategories.size,
  ...tokenCategories.radius,
  ...stylePropsTransform,
  ...stylePropsUnitless,
  boxShadow: true,
  filter: true,
  // RN 0.77+ style props (set REACT_NATIVE_PRE_77=1 for older RN)
  ...!process.env.REACT_NATIVE_PRE_77 && {
    boxSizing: true,
    mixBlendMode: true,
    outlineColor: true,
    outlineSpread: true,
    outlineStyle: true,
    outlineWidth: true
  },
  // RN doesn't support specific border styles per-edge
  transition: true,
  textWrap: true,
  backdropFilter: true,
  WebkitBackdropFilter: true,
  background: true,
  backgroundAttachment: true,
  backgroundBlendMode: true,
  backgroundClip: true,
  backgroundColor: true,
  backgroundImage: true,
  backgroundOrigin: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundSize: true,
  borderBottomStyle: true,
  borderImage: true,
  borderLeftStyle: true,
  borderRightStyle: true,
  borderTopStyle: true,
  caretColor: true,
  clipPath: true,
  contain: true,
  containerType: true,
  content: true,
  cursor: true,
  float: true,
  mask: true,
  maskBorder: true,
  maskBorderMode: true,
  maskBorderOutset: true,
  maskBorderRepeat: true,
  maskBorderSlice: true,
  maskBorderSource: true,
  maskBorderWidth: true,
  maskClip: true,
  maskComposite: true,
  maskImage: true,
  maskMode: true,
  maskOrigin: true,
  maskPosition: true,
  maskRepeat: true,
  maskSize: true,
  maskType: true,
  objectFit: true,
  objectPosition: true,
  outlineOffset: true,
  overflowBlock: true,
  overflowInline: true,
  overflowX: true,
  overflowY: true,
  pointerEvents: true,
  scrollbarWidth: true,
  textEmphasis: true,
  touchAction: true,
  transformStyle: true,
  userSelect: true,
  willChange: true,
  ...isAndroid ? {
    elevationAndroid: true
  } : {}
};
var stylePropsFont = {
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  fontVariant: true,
  letterSpacing: true,
  lineHeight: true,
  textTransform: true
};
var stylePropsTextOnly = {
  ...stylePropsFont,
  textAlign: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  ...textColors,
  textShadowOffset: true,
  textShadowRadius: true,
  userSelect: true,
  selectable: true,
  verticalAlign: true,
  whiteSpace: true,
  wordWrap: true,
  textOverflow: true,
  textDecorationDistance: true,
  cursor: true,
  WebkitLineClamp: true,
  WebkitBoxOrient: true
};
var stylePropsText = {
  ...stylePropsView,
  ...stylePropsTextOnly
};

// ../../node_modules/@tamagui/helpers/dist/esm/withStaticProperties.mjs
import React16 from "react";
var Decorated = /* @__PURE__ */ Symbol();
var withStaticProperties2 = (component, staticProps) => {
  const next = (() => {
    if (component[Decorated]) {
      const _ = React16.forwardRef((props, ref) => React16.createElement(component, {
        ...props,
        ref
      }));
      for (const key in component) {
        const v = component[key];
        _[key] = v && typeof v == "object" ? {
          ...v
        } : v;
      }
    }
    return component;
  })();
  return Object.assign(next, staticProps), next[Decorated] = true, next;
};

// ../../node_modules/@tamagui/web/dist/esm/createVariable.mjs
function isVariable(v) {
  return v && typeof v == "object" && "isVar" in v;
}

// ../../node_modules/@tamagui/use-did-finish-ssr/dist/esm/index.mjs
import * as React17 from "react";

// ../../node_modules/@tamagui/use-did-finish-ssr/dist/esm/ClientOnly.mjs
import { createContext as createContext2, useContext as useContext3 } from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var ClientOnlyContext = createContext2(false);

// ../../node_modules/@tamagui/use-event/dist/esm/useGet.mjs
import * as React18 from "react";
function useGet(currentValue, initialValue, forwardToFunction) {
  const curRef = React18.useRef(initialValue ?? currentValue);
  return useIsomorphicLayoutEffect(() => {
    curRef.current = currentValue;
  }), React18.useCallback(forwardToFunction ? (...args) => curRef.current?.apply(null, args) : () => curRef.current, []);
}

// ../../node_modules/@tamagui/use-event/dist/esm/useEvent.mjs
function useEvent(callback) {
  return useGet(callback, defaultValue, true);
}
var defaultValue = () => {
  throw new Error("Cannot call an event handler while rendering.");
};

// ../../node_modules/@tamagui/get-token/dist/esm/index.mjs
var defaultOptions = {
  shift: 0,
  bounds: [0]
};
var getSize = (size, options) => getTokenRelative("size", size, options);
var cacheVariables = {};
var cacheWholeVariables = {};
var cacheKeys = {};
var cacheWholeKeys = {};
var stepTokenUpOrDown = (type, current, options = defaultOptions) => {
  const tokens2 = getTokens({
    prefixed: true
  })[type];
  if (!(type in cacheVariables)) {
    cacheKeys[type] = [], cacheVariables[type] = [], cacheWholeKeys[type] = [], cacheWholeVariables[type] = [];
    const sorted = Object.keys(tokens2).map((k) => tokens2[k]).sort((a, b) => a.val - b.val);
    for (const token of sorted) cacheKeys[type].push(token.key), cacheVariables[type].push(token);
    const sortedExcludingHalfSteps = sorted.filter((x) => !x.key.endsWith(".5"));
    for (const token of sortedExcludingHalfSteps) cacheWholeKeys[type].push(token.key), cacheWholeVariables[type].push(token);
  }
  const isString = typeof current == "string", tokensOrdered = (options.excludeHalfSteps ? isString ? cacheWholeKeys : cacheWholeVariables : isString ? cacheKeys : cacheVariables)[type], min = options.bounds?.[0] ?? 0, max = options.bounds?.[1] ?? tokensOrdered.length - 1, currentIndex = tokensOrdered.indexOf(current);
  let shift = options.shift || 0;
  shift && (current === "$true" || isVariable(current) && current.name === "true") && (shift += shift > 0 ? 1 : -1);
  const index = Math.min(max, Math.max(min, currentIndex + shift)), found = tokensOrdered[index];
  return (typeof found == "string" ? tokens2[found] : found) || tokens2.$true;
};
var getTokenRelative = stepTokenUpOrDown;

// ../../node_modules/@tamagui/stacks/dist/esm/Stacks.mjs
import { View as View4, styled as styled15 } from "@tamagui/core";

// ../../node_modules/@tamagui/stacks/dist/esm/getElevation.mjs
import { getVariableValue, isAndroid as isAndroid2, isVariable as isVariable2 } from "@tamagui/core";
var getElevation = (size, extras) => {
  if (!size) return;
  const {
    tokens: tokens2
  } = extras, token = tokens2.size[size], sizeNum = isVariable2(token) ? +token.val : size;
  return getSizedElevation(sizeNum, extras);
};
var getSizedElevation = (val, {
  theme,
  tokens: tokens2
}) => {
  let num = 0;
  if (val === true) {
    const val2 = getVariableValue(tokens2.size.true);
    typeof val2 == "number" ? num = val2 : num = 10;
  } else num = +val;
  if (num === 0) return;
  const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
  return {
    shadowColor: theme.shadowColor,
    shadowRadius,
    shadowOffset: {
      height,
      width: 0
    },
    ...isAndroid2 ? {
      elevationAndroid: 2 * height
    } : {}
  };
};

// ../../node_modules/@tamagui/stacks/dist/esm/Stacks.mjs
var fullscreenStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
var getInset = (val) => val && typeof val == "object" ? val : {
  top: val,
  left: val,
  bottom: val,
  right: val
};
var variants = {
  fullscreen: {
    true: fullscreenStyle
  },
  elevation: {
    "...size": getElevation,
    ":number": getElevation
  },
  inset: getInset
};
var YStack5 = styled15(View4, {
  flexDirection: "column",
  variants
});
YStack5.displayName = "YStack";
var XStack5 = styled15(View4, {
  flexDirection: "row",
  variants
});
XStack5.displayName = "XStack";
var ZStack = styled15(YStack5, {
  position: "relative"
}, {
  neverFlatten: true,
  isZStack: true
});
ZStack.displayName = "ZStack";

// ../../node_modules/@tamagui/stacks/dist/esm/variants.mjs
var elevate = {
  true: (_, extras) => getElevation(extras.props.size, extras)
};
var bordered = (val, {
  props
}) => ({
  // TODO size it with size in '...size'
  borderWidth: typeof val == "number" ? val : 1,
  borderColor: "$borderColor",
  ...props.hoverTheme && {
    hoverStyle: {
      borderColor: "$borderColorHover"
    }
  },
  ...props.pressTheme && {
    pressStyle: {
      borderColor: "$borderColorPress"
    }
  },
  ...props.focusTheme && {
    focusStyle: {
      borderColor: "$borderColorFocus"
    }
  }
});
var padded = {
  true: (_, extras) => {
    const {
      tokens: tokens2,
      props
    } = extras;
    return {
      padding: tokens2.space[props.size] || tokens2.space.$true
    };
  }
};
var radiused = {
  true: (_, extras) => {
    const {
      tokens: tokens2,
      props
    } = extras;
    return {
      borderRadius: tokens2.radius[props.size] || tokens2.radius.$true
    };
  }
};
var circularStyle = {
  borderRadius: 1e5,
  padding: 0
};
var circular = {
  true: (_, {
    props,
    tokens: tokens2
  }) => {
    if (!("size" in props)) return circularStyle;
    const size = typeof props.size == "number" ? props.size : tokens2.size[props.size];
    return {
      ...circularStyle,
      width: size,
      height: size,
      maxWidth: size,
      maxHeight: size,
      minWidth: size,
      minHeight: size
    };
  }
};
var hoverTheme = {
  true: {
    hoverStyle: {
      backgroundColor: "$backgroundHover",
      borderColor: "$borderColorHover"
    }
  },
  false: {}
};
var pressTheme = {
  true: {
    cursor: "pointer",
    pressStyle: {
      backgroundColor: "$backgroundPress",
      borderColor: "$borderColorPress"
    }
  },
  false: {}
};
var focusTheme = {
  true: {
    focusStyle: {
      backgroundColor: "$backgroundFocus",
      borderColor: "$borderColorFocus"
    }
  },
  false: {}
};

// ../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.mjs
import { styled as styled16 } from "@tamagui/core";
var chromelessStyle = {
  backgroundColor: "transparent",
  borderColor: "transparent",
  shadowColor: "transparent",
  hoverStyle: {
    borderColor: "transparent"
  }
};
var themeableVariants = {
  backgrounded: {
    true: {
      backgroundColor: "$background"
    }
  },
  radiused,
  hoverTheme,
  pressTheme,
  focusTheme,
  circular,
  padded,
  elevate,
  bordered,
  transparent: {
    true: {
      backgroundColor: "transparent"
    }
  },
  chromeless: {
    true: chromelessStyle,
    all: {
      ...chromelessStyle,
      hoverStyle: chromelessStyle,
      pressStyle: chromelessStyle,
      focusStyle: chromelessStyle
    }
  }
};
var ThemeableStack = styled16(YStack5, {
  variants: themeableVariants
});

// ../../node_modules/@tamagui/progress/dist/esm/Progress.mjs
import * as React19 from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var PROGRESS_NAME = "Progress";
var [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicatorFrame = styled17(ThemeableStack, {
  name: INDICATOR_NAME,
  variants: {
    unstyled: {
      false: {
        height: "100%",
        width: "100%",
        backgrounded: true
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var ProgressIndicator = ProgressIndicatorFrame.styleable(function(props, forwardedRef) {
  const {
    __scopeProgress,
    animation,
    ...indicatorProps
  } = props, context = useProgressContext(INDICATOR_NAME, __scopeProgress), pct = context.max - (context.value ?? 0), x = -(context.width === 0 ? 300 : context.width) * (pct / 100);
  return /* @__PURE__ */ jsx18(ProgressIndicatorFrame, {
    "data-state": getProgressState(context.value, context.max),
    "data-value": context.value ?? void 0,
    "data-max": context.max,
    x,
    width: context.width,
    ...!props.unstyled && {
      animateOnly: ["transform"],
      opacity: context.width === 0 ? 0 : 1
    },
    ...indicatorProps,
    ref: forwardedRef,
    animation: context.width ? animation : null
  });
});
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value == "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !Number.isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !Number.isNaN(value) && value <= max && value >= 0;
}
var DEFAULT_MAX = 100;
var ProgressFrame = styled17(ThemeableStack, {
  name: "Progress",
  variants: {
    unstyled: {
      false: {
        borderRadius: 1e5,
        overflow: "hidden",
        backgrounded: true
      }
    },
    size: {
      "...size": (val) => {
        const size = Math.round(getVariableValue2(getSize(val)) * 0.25);
        return {
          height: size,
          minWidth: getVariableValue2(size) * 20,
          width: "100%"
        };
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Progress = withStaticProperties2(ProgressFrame.styleable(function(props, forwardedRef) {
  const {
    // @ts-expect-error
    __scopeProgress,
    value: valueProp,
    max: maxProp,
    getValueLabel = defaultGetValueLabel,
    size = "$true",
    ...progressProps
  } = props, max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX, value = isValidValueNumber(valueProp, max) ? valueProp : null, valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0, [width, setWidth] = React19.useState(0);
  return /* @__PURE__ */ jsx18(ProgressProvider, {
    scope: __scopeProgress,
    value,
    max,
    width,
    children: /* @__PURE__ */ jsx18(ProgressFrame, {
      "aria-valuemax": max,
      "aria-valuemin": 0,
      "aria-valuenow": isNumber(value) ? value : void 0,
      "aria-valuetext": valueLabel,
      role: "progressbar",
      "data-state": getProgressState(value, max),
      "data-value": value ?? void 0,
      "data-max": max,
      ...progressProps.unstyled !== true && {
        size
      },
      ...progressProps,
      onLayout: (e) => {
        setWidth(e.nativeEvent.layout.width), progressProps.onLayout?.(e);
      },
      ref: forwardedRef
    })
  });
}), {
  Indicator: ProgressIndicator
});

// src/atoms/Progress/Progress.tsx
import React20 from "react";
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
var ProgressIndicatorFrame2 = styled18(ProgressIndicator, {
  name: "ProgressIndicator",
  height: "100%",
  width: "100%",
  backgroundColor: "$primary",
  variants: {
    status: {
      default: { backgroundColor: "$primary" },
      success: { backgroundColor: "$green10" },
      warning: { backgroundColor: "$yellow10" },
      error: { backgroundColor: "$red10" }
    }
  },
  defaultVariants: {
    status: "default"
  }
});
var ProgressFrame2 = styled18(Progress, {
  name: "Progress",
  overflow: "hidden",
  backgroundColor: "$secondary",
  borderRadius: 1e3,
  flex: 1,
  // Allow it to fill space if in a stack
  variants: {
    size: {
      xs: { height: 2 },
      sm: { height: 4 },
      md: { height: 8 },
      lg: { height: 12 }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var ProgressLabel = styled18(Text7, {
  name: "ProgressLabel",
  color: "$color",
  fontSize: "$3",
  fontWeight: "$body"
  // Ensure readable weight
});
var ProgressComponent = React20.forwardRef(
  ({ value, showValue, label, status, size, children, ...props }, ref) => {
    if (children) {
      return /* @__PURE__ */ jsx19(ProgressFrame2, { ref, value, size, ...props, children });
    }
    let content = /* @__PURE__ */ jsx19(ProgressFrame2, { ref, value, size, ...props, children: /* @__PURE__ */ jsx19(ProgressIndicatorFrame2, { status, animation: "bouncy" }) });
    if (showValue) {
      content = /* @__PURE__ */ jsxs12(XStack6, { alignItems: "center", gap: "$3", width: "100%", children: [
        content,
        /* @__PURE__ */ jsxs12(
          Text7,
          {
            fontSize: "$1",
            color: "$color",
            minWidth: 30,
            textAlign: "right",
            children: [
              Math.round(value ?? 0),
              "%"
            ]
          }
        )
      ] });
    }
    if (label) {
      content = /* @__PURE__ */ jsxs12(YStack6, { width: "100%", gap: "$2", children: [
        /* @__PURE__ */ jsx19(ProgressLabel, { children: label }),
        content
      ] });
    }
    return content;
  }
);
ProgressComponent.displayName = "Progress";
var Progress2 = Object.assign(ProgressComponent, {
  Indicator: ProgressIndicatorFrame2,
  Label: ProgressLabel,
  Root: ProgressFrame2
  // Exposed as Root to match Compound pattern expectation (should be the Frame)
});

// src/atoms/Separator.tsx
import { Separator as TamaguiSeparator, styled as styled19 } from "tamagui";
var SeparatorFrame = styled19(TamaguiSeparator, {
  name: "Separator",
  backgroundColor: "$border",
  // bg-border
  fontFamily: "$body",
  variants: {
    orientation: {
      horizontal: {
        height: 1,
        width: "100%"
      },
      vertical: {
        height: "100%",
        width: 1
      }
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
var Separator = SeparatorFrame;

// src/atoms/Toggle/Toggle.tsx
import { styled as styled20, Button as Button2 } from "tamagui";
import React21 from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
var ToggleFrame = styled20(Button2, {
  name: "Toggle",
  backgroundColor: "transparent",
  borderRadius: "$4",
  paddingHorizontal: "$3",
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 0,
  hoverStyle: {
    backgroundColor: "$muted",
    color: "$mutedForeground"
  },
  variants: {
    pressed: {
      true: {
        backgroundColor: "$accent",
        color: "$accentForeground"
      }
    }
  }
});
var Toggle = React21.forwardRef(
  (props, ref) => {
    const { pressed, onPressedChange, onPress, leftIcon, rightIcon, ...rest } = props;
    return /* @__PURE__ */ jsx20(
      ToggleFrame,
      {
        ref,
        "aria-pressed": pressed,
        pressed,
        onPress: (e) => {
          onPress?.(e);
          onPressedChange?.(!pressed);
        },
        icon: leftIcon,
        iconAfter: rightIcon,
        ...rest
      }
    );
  }
);
Toggle.displayName = "Toggle";

// src/atoms/ScrollArea.tsx
import { ScrollView as TamaguiScrollView, styled as styled21 } from "tamagui";
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx21 } from "react/jsx-runtime";
var ScrollAreaFrame = styled21(TamaguiScrollView, {
  name: "ScrollArea",
  width: "100%",
  height: "100%",
  variants: {
    scrollbar: {
      default: {
        // @ts-expect-error - Tamagui CSS syntax
        "&::-webkit-scrollbar": {
          width: 8,
          height: 8
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "$background"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "$borderColor",
          borderRadius: 100
        }
      },
      subtle: {
        // @ts-ignore
        "&::-webkit-scrollbar": {
          width: 4,
          height: 4
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "$borderColor",
          borderRadius: 100
        }
      },
      hidden: {
        // @ts-ignore
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }
    }
  },
  defaultVariants: {
    scrollbar: "default"
  }
});
var ScrollArea = forwardRef5((props, ref) => {
  return /* @__PURE__ */ jsx21(ScrollAreaFrame, { ...props, ref });
});
ScrollArea.displayName = "ScrollArea";

// src/atoms/Textarea/Textarea.tsx
import React23 from "react";
import {
  TextArea as TamaguiTextArea,
  styled as styled22,
  XStack as XStack7,
  YStack as YStack7
} from "tamagui";

// src/utils/withErrorLogging.tsx
import React22 from "react";

// src/utils/logging.ts
function logComponentError(componentName, error, componentStack) {
  const timestamp = (/* @__PURE__ */ new Date()).toISOString();
  const details = error instanceof Error ? `${error.name}: ${error.message}` : String(error);
  if (componentStack) {
    console.error(`[${timestamp}] [${componentName}] render failure -> ${details}
${componentStack}`);
  } else {
    console.error(`[${timestamp}] [${componentName}] render failure -> ${details}`);
  }
}

// src/utils/withErrorLogging.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
function withErrorLogging(componentName, Component2) {
  const Wrapped = React22.forwardRef((props, ref) => {
    try {
      return /* @__PURE__ */ jsx22(Component2, { ...props, ref });
    } catch (error) {
      logComponentError(componentName, error);
      throw error;
    }
  });
  Wrapped.displayName = componentName;
  return Wrapped;
}

// src/atoms/Textarea/Textarea.tsx
import { jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
var StyledTextarea = styled22(TamaguiTextArea, {
  name: "Textarea",
  fontFamily: "$body",
  color: "$foreground",
  backgroundColor: "transparent",
  placeholderTextColor: "$color.gray10",
  borderColor: "transparent",
  borderWidth: 0,
  width: "100%",
  minHeight: 120,
  px: "$0",
  py: "$0",
  focusStyle: {
    borderColor: "transparent",
    borderWidth: 0
  },
  disabledStyle: {
    opacity: 0.6
  },
  variants: {
    variant: {
      default: {},
      filled: {
        backgroundColor: "$muted",
        borderColor: "transparent",
        focusStyle: {
          borderColor: "$ring"
        }
      },
      subtle: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderBottomColor: "$borderColor",
        borderBottomWidth: 1,
        borderRadius: 0,
        px: 0,
        focusStyle: {
          borderBottomColor: "$ring"
        }
      }
    },
    size: {
      sm: {
        minHeight: 96,
        fontSize: "$2",
        px: "$2",
        py: "$2"
      },
      default: {
        minHeight: 124,
        fontSize: "$3"
      },
      lg: {
        minHeight: 156,
        fontSize: "$4",
        px: "$4",
        py: "$3"
      }
    },
    invalid: {
      true: {
        borderColor: "$destructive"
      }
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var TextareaImpl = React23.forwardRef(
  ({
    variant = "default",
    size = "default",
    invalid = false,
    style,
    label,
    leftIcon,
    rightIcon,
    loading = false,
    ...props
  }, ref) => {
    const defaultStyle = { resize: "vertical" };
    const id = React23.useId();
    return /* @__PURE__ */ jsxs13(YStack7, { width: "100%", space: "$2", children: [
      label && /* @__PURE__ */ jsx23(Label, { htmlFor: id, children: label }),
      /* @__PURE__ */ jsxs13(
        XStack7,
        {
          alignItems: "center",
          space: "$2",
          borderColor: invalid ? "$destructive" : "$borderColor",
          borderWidth: 1,
          borderRadius: "$sm",
          px: "$3",
          py: "$2",
          focusStyle: {
            borderColor: "$ring",
            borderWidth: 2
          },
          hoverStyle: {
            borderColor: "$borderColorHover"
          },
          pressStyle: {
            borderColor: "$borderColorPress"
          },
          children: [
            leftIcon,
            /* @__PURE__ */ jsx23(
              StyledTextarea,
              {
                ref,
                id,
                variant,
                size,
                invalid: invalid || void 0,
                "aria-invalid": invalid,
                style: [defaultStyle, style],
                disabled: loading || props.disabled,
                ...props
              }
            ),
            loading ? /* @__PURE__ */ jsx23(Spinner, {}) : rightIcon
          ]
        }
      )
    ] });
  }
);
TextareaImpl.displayName = "Textarea";
var Textarea = withErrorLogging(
  "Textarea",
  TextareaImpl
);

// src/atoms/Checkbox/Checkbox.tsx
import React25 from "react";
import { Checkbox as TamaguiCheckbox, styled as styled23, Label as Label2, XStack as XStack8, YStack as YStack8, Text as Text8 } from "tamagui";
import { Check, Minus } from "@tamagui/lucide-icons";

// ../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.mjs
import * as React24 from "react";

// ../../node_modules/@tamagui/start-transition/dist/esm/index.mjs
import { startTransition as reactStartTransition } from "react";
var startTransition = (callback) => {
  reactStartTransition(callback);
};

// ../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.mjs
var emptyCallbackFn = (_) => _();
function useControllableState({
  prop,
  defaultProp,
  onChange,
  strategy = "prop-wins",
  preventUpdate,
  transition
}) {
  const [state, setState] = React24.useState(prop ?? defaultProp), previous = React24.useRef(state), propWins = strategy === "prop-wins" && prop !== void 0, value = propWins ? prop : state, onChangeCb = useEvent(onChange || idFn), transitionFn = transition ? startTransition : emptyCallbackFn;
  React24.useEffect(() => {
    prop !== void 0 && (previous.current = prop, transitionFn(() => {
      setState(prop);
    }));
  }, [prop]), React24.useEffect(() => {
    propWins || state !== previous.current && (previous.current = state, onChangeCb(state));
  }, [onChangeCb, state, propWins]);
  const setter = useEvent((next) => {
    if (!preventUpdate) if (propWins) {
      const nextValue = typeof next == "function" ? next(previous.current) : next;
      onChangeCb(nextValue);
    } else transitionFn(() => {
      setState(next);
    });
  });
  return [value, setter];
}
var idFn = () => {
};

// src/atoms/Checkbox/Checkbox.tsx
import { jsx as jsx24, jsxs as jsxs14 } from "react/jsx-runtime";
var StyledCheckbox = styled23(TamaguiCheckbox, {
  name: "Checkbox",
  borderWidth: 2,
  borderColor: "$borderColor",
  borderRadius: "$sm",
  backgroundColor: "$background",
  alignItems: "center",
  justifyContent: "center",
  hoverStyle: {
    borderColor: "$primary"
  },
  focusStyle: {
    borderColor: "$blue10",
    outlineColor: "$blue10",
    outlineWidth: 2,
    outlineStyle: "solid"
  },
  variants: {
    size: {
      "...size": (val, { props: _props }) => {
        return {
          width: val,
          height: val
        };
      }
    },
    checked: {
      true: {
        backgroundColor: "$primary",
        borderColor: "$primary"
      },
      indeterminate: {
        backgroundColor: "$primary",
        borderColor: "$primary"
      },
      false: {
        backgroundColor: "transparent"
      }
    },
    error: {
      true: {
        borderColor: "$red10",
        hoverStyle: {
          borderColor: "$red10"
        },
        focusStyle: {
          borderColor: "$red10",
          outlineColor: "$red10"
        }
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: "$background",
        borderColor: "$borderColor",
        hoverStyle: {
          borderColor: "$borderColor"
        }
      }
    }
  },
  defaultVariants: {
    size: "$4"
  }
});
var StyledIndicator = styled23(TamaguiCheckbox.Indicator, {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%"
});
var CheckboxImpl = React25.forwardRef(
  ({
    checked: checkedProp,
    defaultChecked,
    onCheckedChange,
    id,
    label,
    disabled,
    error,
    errorMessage,
    size,
    ...props
  }, ref) => {
    const realId = id || React25.useId();
    const errorId = errorMessage ? `${realId}-error` : void 0;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked || false,
      onChange: onCheckedChange,
      strategy: "prop-wins"
    });
    return /* @__PURE__ */ jsxs14(YStack8, { space: "$1.5", children: [
      /* @__PURE__ */ jsxs14(XStack8, { alignItems: "center", space: "$2", children: [
        /* @__PURE__ */ jsx24(
          StyledCheckbox,
          {
            ref,
            id: realId,
            checked,
            onCheckedChange: (val) => setChecked(val),
            disabled,
            error: error || !!errorMessage,
            size,
            role: "checkbox",
            "aria-checked": checked === "indeterminate" ? "mixed" : !!checked,
            "aria-label": label ? void 0 : "checkbox",
            "aria-describedby": errorId,
            ...props,
            children: /* @__PURE__ */ jsx24(StyledIndicator, { children: checked === "indeterminate" ? /* @__PURE__ */ jsx24(Minus, { size: 16, color: "$background" }) : checked ? /* @__PURE__ */ jsx24(Check, { size: 16, color: "$background" }) : null })
          }
        ),
        label && /* @__PURE__ */ jsx24(Label2, { htmlFor: realId, disabled, children: label })
      ] }),
      errorMessage && /* @__PURE__ */ jsx24(Text8, { id: errorId, color: "$red10", fontSize: "$2", pl: "$1", role: "alert", children: errorMessage })
    ] });
  }
);
CheckboxImpl.displayName = "Checkbox";
var Checkbox = withErrorLogging(
  "Checkbox",
  CheckboxImpl
);

// src/atoms/Kbd/Kbd.tsx
import React26 from "react";
import { styled as styled24, Text as Text9, Slot as Slot3, XStack as XStack9 } from "tamagui";
import { jsx as jsx25, jsxs as jsxs15 } from "react/jsx-runtime";
var StyledKbd = styled24(XStack9, {
  name: "Kbd",
  tag: "kbd",
  fontFamily: "$body",
  backgroundColor: "$background",
  color: "$color",
  borderRadius: "$2",
  borderWidth: 1,
  borderColor: "$borderColor",
  justifyContent: "center",
  alignItems: "center",
  hoverStyle: {
    backgroundColor: "$backgroundHover"
  },
  pressStyle: {
    backgroundColor: "$backgroundPress"
  },
  variants: {
    variant: {
      default: {
        backgroundColor: "$background",
        color: "$color",
        borderColor: "$borderColor"
      },
      subtle: {
        backgroundColor: "$backgroundFocus",
        color: "$color",
        borderColor: "$backgroundFocus"
      }
    },
    size: {
      sm: {
        paddingHorizontal: 4,
        paddingVertical: 1,
        minWidth: 16
      },
      default: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        minWidth: 20
      },
      lg: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        minWidth: 24
      }
    }
  },
  defaultVariants: {
    size: "default",
    variant: "default"
  }
});
var KbdText = styled24(Text9, {
  fontFamily: "$body",
  color: "$color",
  variants: {
    size: {
      sm: { fontSize: 10, fontWeight: "400" },
      default: { fontSize: 12, fontWeight: "500" },
      lg: { fontSize: 14, fontWeight: "600" }
    }
  },
  defaultVariants: {
    size: "default"
  }
});
var Kbd = React26.forwardRef(
  ({
    size = "default",
    variant = "default",
    asChild = false,
    iconBefore,
    iconAfter,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot3 : StyledKbd;
    return /* @__PURE__ */ jsxs15(Comp, { ref, size, variant, ...props, tag: "kbd", children: [
      iconBefore,
      /* @__PURE__ */ jsx25(KbdText, { size, children }),
      iconAfter
    ] });
  }
);
Kbd.displayName = "Kbd";

// src/molecules/Card/Card.tsx
import { styled as styled25, Text as Text10, XStack as XStack10, YStack as YStack9, Image } from "tamagui";
import React27 from "react";
import { jsx as jsx26, jsxs as jsxs16 } from "react/jsx-runtime";
var CardFrame = styled25(YStack9, {
  name: "Card",
  role: "article",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$lg",
  p: "$lg",
  gap: "$4",
  variants: {
    variant: {
      default: {
        backgroundColor: "$background"
      },
      elevated: {
        backgroundColor: "$background",
        shadowColor: "$shadowColor",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2
      }
    },
    hasError: {
      true: {
        borderColor: "$red10"
      }
    },
    disabled: {
      true: {
        opacity: 0.65,
        pointerEvents: "none"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var CardHeader = styled25(YStack9, {
  name: "CardHeader",
  gap: "$1.5"
});
var CardTitle = styled25(Text10, {
  name: "CardTitle",
  fontSize: "$6",
  fontWeight: "600",
  color: "$foreground",
  ellipse: true
});
var CardDescription = styled25(Text10, {
  name: "CardDescription",
  fontSize: "$3",
  color: "$mutedForeground",
  lineHeight: "$3"
});
var CardContent = styled25(YStack9, {
  name: "CardContent",
  gap: "$4"
});
var CardFooter = styled25(XStack10, {
  name: "CardFooter",
  borderTopWidth: 1,
  borderTopColor: "$borderColor",
  pt: "$4",
  gap: "$3",
  justifyContent: "flex-end",
  alignItems: "center"
});
var Card = React27.forwardRef(({
  children,
  isLoading,
  isDisabled,
  data,
  actions,
  ...rest
}, ref) => {
  const { animationName, animationDuration, ...otherProps } = rest;
  const cardProps = {
    ...otherProps,
    disabled: isDisabled,
    "data-testid": "card",
    "data-has-error": otherProps.hasError,
    "data-disabled": isDisabled,
    ref
  };
  if (data) {
    return /* @__PURE__ */ jsxs16(CardFrame, { ...cardProps, p: 0, overflow: "hidden", children: [
      data.heroImage && /* @__PURE__ */ jsx26(
        Image,
        {
          source: { uri: data.heroImage },
          width: "100%",
          height: 200,
          resizeMode: "cover",
          borderTopLeftRadius: "$lg",
          borderTopRightRadius: "$lg",
          accessibilityLabel: "Hero image"
        }
      ),
      /* @__PURE__ */ jsxs16(YStack9, { p: "$lg", gap: "$4", children: [
        /* @__PURE__ */ jsxs16(CardHeader, { children: [
          /* @__PURE__ */ jsx26(CardTitle, { children: data.title }),
          data.description && /* @__PURE__ */ jsx26(CardDescription, { children: data.description })
        ] }),
        /* @__PURE__ */ jsx26(CardContent, { children: isLoading ? /* @__PURE__ */ jsxs16(YStack9, { gap: "$2", f: 1, p: "$1", children: [
          /* @__PURE__ */ jsx26(Skeleton, { h: "$4", w: "75%" }),
          /* @__PURE__ */ jsx26(Skeleton, { h: "$2.5", w: "100%" }),
          /* @__PURE__ */ jsx26(Skeleton, { h: "$2.5", w: "90%" })
        ] }) : data.content }),
        actions && /* @__PURE__ */ jsx26(CardFooter, { children: actions })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx26(CardFrame, { ...cardProps, children: isLoading ? /* @__PURE__ */ jsxs16(YStack9, { gap: "$2", f: 1, p: "$1", children: [
    /* @__PURE__ */ jsx26(Skeleton, { h: "$4", w: "75%" }),
    /* @__PURE__ */ jsx26(Skeleton, { h: "$2.5", w: "100%" }),
    /* @__PURE__ */ jsx26(Skeleton, { h: "$2.5", w: "90%" })
  ] }) : children });
});
Card.displayName = "Card";

// src/molecules/Collapsible.tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDown as ChevronDown2 } from "@tamagui/lucide-icons";
import React28, { useContext as useContext5, useState as useState5 } from "react";
import { Button as Button3, Text as Text11, XStack as XStack11, YStack as YStack10, styled as styled26 } from "tamagui";
import { jsx as jsx27, jsxs as jsxs17 } from "react/jsx-runtime";
var CollapsibleContext = React28.createContext({ open: false });
var useCollapsibleContext = () => useContext5(CollapsibleContext);
var CollapsibleRoot = styled26(CollapsiblePrimitive.Root, {
  name: "Collapsible",
  width: "100%"
});
var CollapsibleTrigger = styled26(XStack11, {
  name: "CollapsibleTrigger",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$4",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4",
  variants: {
    hasError: {
      true: {
        borderColor: "$red10"
      }
    },
    disabled: {
      true: {
        opacity: 0.5
      }
    }
  }
});
var CollapsibleContent = styled26(CollapsiblePrimitive.Content, {
  name: "CollapsibleContent",
  overflow: "hidden",
  paddingTop: "$4"
  // animation: 'quick',
  // enterStyle: { opacity: 0, height: 0 },
  // exitStyle: { opacity: 0, height: 0 },
});
var Collapsible = React28.forwardRef(
  ({
    children,
    isLoading = false,
    hasError = false,
    isDisabled = false,
    title,
    rightSlot,
    open: openProp,
    defaultOpen,
    onOpenChange,
    ...props
  }, ref) => {
    const [openState, setOpenState] = useState5(defaultOpen || false);
    const open = openProp !== void 0 ? openProp : openState;
    const handleOpenChange = (newOpen) => {
      if (openProp === void 0) {
        setOpenState(newOpen);
      }
      onOpenChange?.(newOpen);
    };
    return /* @__PURE__ */ jsx27(CollapsibleContext.Provider, { value: { open }, children: /* @__PURE__ */ jsxs17(
      CollapsibleRoot,
      {
        ...props,
        ref,
        open,
        onOpenChange: handleOpenChange,
        defaultOpen,
        children: [
          /* @__PURE__ */ jsx27(CollapsiblePrimitive.Trigger, { asChild: true, disabled: isDisabled || isLoading, children: /* @__PURE__ */ jsxs17(
            CollapsibleTrigger,
            {
              hasError,
              disabled: isDisabled || isLoading,
              "data-has-error": hasError,
              "aria-invalid": hasError,
              children: [
                /* @__PURE__ */ jsx27(Text11, { fontSize: "$4", fontWeight: "bold", ellipse: true, children: title }),
                /* @__PURE__ */ jsxs17(XStack11, { gap: "$2", alignItems: "center", flexShrink: 0, children: [
                  rightSlot,
                  /* @__PURE__ */ jsx27(Button3, { size: "$3", chromeless: true, icon: ChevronDown2 })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx27(CollapsibleContent, { children: isLoading ? /* @__PURE__ */ jsxs17(YStack10, { space: "$2", "data-testid": "skeleton-container", children: [
            /* @__PURE__ */ jsx27(Skeleton, { height: 40 }),
            /* @__PURE__ */ jsx27(Skeleton, { height: 40 })
          ] }) : children })
        ]
      }
    ) });
  }
);

// src/molecules/Dialog/Dialog.tsx
import { X as X2 } from "@tamagui/lucide-icons";
import React29 from "react";
import {
  Button as Button4,
  Dialog as TamaguiDialog,
  styled as styled27,
  Unspaced,
  XStack as XStack12,
  YStack as YStack11
} from "tamagui";
import { jsx as jsx28, jsxs as jsxs18 } from "react/jsx-runtime";
var DialogOverlay = styled27(TamaguiDialog.Overlay, {
  name: "DialogOverlay",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  animation: "quick",
  opacity: 1,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 }
});
var DialogContent = styled27(TamaguiDialog.Content, {
  name: "DialogContent",
  backgroundColor: "$background",
  borderRadius: "$lg",
  padding: "$lg",
  width: "90%",
  maxWidth: 512,
  borderWidth: 1,
  borderColor: "$borderColor",
  // Animation
  animation: [
    "quick",
    {
      opacity: {
        overshootClamping: true
      }
    }
  ],
  enterStyle: { x: 0, y: -20, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: 10, opacity: 0, scale: 0.95 },
  x: 0,
  scale: 1,
  opacity: 1,
  y: 0,
  variants: {
    hasError: {
      true: {
        borderColor: "$red10"
      }
    }
  }
});
var DialogHeader = styled27(YStack11, {
  name: "DialogHeader",
  marginBottom: "$md",
  gap: "$sm"
});
var DialogTitle = styled27(TamaguiDialog.Title, {
  name: "DialogTitle",
  fontSize: "$6",
  fontWeight: "600",
  color: "$foreground",
  ellipse: true
});
var DialogDescription = styled27(TamaguiDialog.Description, {
  name: "DialogDescription",
  fontSize: "$3",
  color: "$mutedForeground",
  lineHeight: "$4"
});
var DialogFooterComponent = React29.forwardRef(
  ({ actions, children, ...props }, ref) => /* @__PURE__ */ jsx28(XStack12, { ...props, ref, children: actions ?? children })
);
var DialogFooter = styled27(DialogFooterComponent, {
  name: "DialogFooter",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "$3",
  marginTop: "$md"
});
var Dialog = TamaguiDialog;
var DialogTrigger = TamaguiDialog.Trigger;
var DialogPortal = TamaguiDialog.Portal;
var DialogClose = TamaguiDialog.Close;
var DialogContentComposite = React29.forwardRef(({ children, isLoading = false, hasError = false, ...props }, ref) => {
  return /* @__PURE__ */ jsxs18(DialogPortal, { children: [
    /* @__PURE__ */ jsx28(DialogOverlay, {}, "overlay"),
    /* @__PURE__ */ jsxs18(DialogContent, { ref, hasError, ...props, children: [
      isLoading ? /* @__PURE__ */ jsx28(Skeleton, { height: 250 }) : children,
      /* @__PURE__ */ jsx28(Unspaced, { children: /* @__PURE__ */ jsx28(TamaguiDialog.Close, { asChild: true, children: /* @__PURE__ */ jsx28(
        Button4,
        {
          "aria-label": "Fechar",
          position: "absolute",
          top: "$3",
          right: "$3",
          size: "$2",
          circular: true,
          icon: X2,
          backgroundColor: "transparent",
          pressStyle: { backgroundColor: "$backgroundHover" }
        }
      ) }) })
    ] }, "content")
  ] });
});
DialogContentComposite.displayName = "DialogContent";

// src/molecules/Drawer.tsx
import React31, { useState as useState6 } from "react";

// src/molecules/Sheet/Sheet.tsx
import {
  styled as styled29,
  H2 as H22,
  Paragraph as Paragraph3,
  withStaticProperties as withStaticProperties3,
  Portal
} from "tamagui";
import { Sheet as TamaguiSheet, useSheet } from "@tamagui/sheet";
import { createContext as createContext3, useContext as useContext6, forwardRef as forwardRef7 } from "react";

// src/atoms/Stack.tsx
import { forwardRef as forwardRef6 } from "react";
import { Stack as TamaguiStack, styled as styled28 } from "tamagui";
import { jsx as jsx29 } from "react/jsx-runtime";
var Stack2 = forwardRef6((props, ref) => {
  return /* @__PURE__ */ jsx29(TamaguiStack, { ref, ...props });
});
Stack2.displayName = "Stack";
var HStack = styled28(TamaguiStack, {
  name: "HStack",
  flexDirection: "row"
});
var VStack = styled28(TamaguiStack, {
  name: "VStack",
  flexDirection: "column"
});

// src/molecules/Sheet/Sheet.tsx
import { Fragment as Fragment4, jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
var Skeleton2 = Skeleton;
var HStack2 = HStack;
var VStack2 = VStack;
var SheetContext = createContext3({
  isLoading: false,
  hasError: false
});
var useSheetCustomContext = () => useContext6(SheetContext);
var SheetComponent = ({ isLoading = false, hasError = false, children, ...props }) => /* @__PURE__ */ jsx30(SheetContext.Provider, { value: { isLoading, hasError }, children: /* @__PURE__ */ jsx30(TamaguiSheet, { ...props, children }) });
var SheetOverlay = styled29(TamaguiSheet.Overlay, {
  backgroundColor: "$black",
  opacity: 0.5,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 }
});
var SheetHandle = styled29(TamaguiSheet.Handle, {
  backgroundColor: "$borderColor",
  opacity: 0.8
});
var SheetContentFrame = styled29(TamaguiSheet.Frame, {
  backgroundColor: "$background",
  padding: "$4",
  borderTopLeftRadius: "$4",
  borderTopRightRadius: "$4",
  shadowColor: "$shadowColor",
  shadowOpacity: 0.2,
  shadowRadius: 10,
  variants: {
    hasError: {
      true: {
        borderColor: "$red10",
        borderWidth: 1,
        borderBottomWidth: 0
      }
    }
  }
});
var SheetContent = forwardRef7(
  ({ children, ...props }, ref) => {
    const { isLoading, hasError } = useSheetCustomContext();
    const sheet = useSheet();
    return /* @__PURE__ */ jsxs19(Portal, { children: [
      /* @__PURE__ */ jsx30(SheetOverlay, {}),
      /* @__PURE__ */ jsx30(SheetContentFrame, { ref, ...props, hasError, children: /* @__PURE__ */ jsxs19(Fragment4, { children: [
        /* @__PURE__ */ jsx30(SheetHandle, {}),
        isLoading ? /* @__PURE__ */ jsxs19(VStack2, { gap: "$4", py: "$4", children: [
          /* @__PURE__ */ jsxs19(VStack2, { gap: "$2", marginBottom: "$4", children: [
            /* @__PURE__ */ jsx30(Skeleton2, { height: 30, width: "60%" }),
            /* @__PURE__ */ jsx30(Skeleton2, { height: 20, width: "90%" })
          ] }),
          /* @__PURE__ */ jsxs19(VStack2, { gap: "$4", py: "$4", children: [
            /* @__PURE__ */ jsxs19(VStack2, { gap: "$2", children: [
              /* @__PURE__ */ jsx30(Skeleton2, { height: 16, width: "30%" }),
              /* @__PURE__ */ jsx30(Skeleton2, { height: 40 })
            ] }),
            /* @__PURE__ */ jsxs19(VStack2, { gap: "$2", children: [
              /* @__PURE__ */ jsx30(Skeleton2, { height: 16, width: "30%" }),
              /* @__PURE__ */ jsx30(Skeleton2, { height: 40 })
            ] })
          ] }),
          /* @__PURE__ */ jsx30(HStack2, { justifyContent: "flex-end", marginTop: "$4", children: /* @__PURE__ */ jsx30(Skeleton2, { height: 44, width: 120 }) })
        ] }) : children
      ] }) })
    ] });
  }
);
SheetContent.displayName = "SheetContent";
var SheetHeader = styled29(VStack, {
  gap: "$2",
  marginBottom: "$4"
});
var SheetFooterComponent = forwardRef7(
  ({ children, actions, ...props }, ref) => {
    return /* @__PURE__ */ jsxs19(HStack2, { ref, ...props, children: [
      children,
      actions
    ] });
  }
);
var SheetFooter = styled29(SheetFooterComponent, {
  justifyContent: "flex-end",
  gap: "$2",
  marginTop: "$4"
});
var SheetTitle = styled29(H22, {
  fontWeight: "bold",
  fontSize: "$6",
  color: "$foreground"
});
var SheetDescription = styled29(Paragraph3, {
  fontSize: "$3",
  color: "$mutedForeground"
});
var SheetCloseFrame = styled29(Button, {});
var SheetClose = SheetCloseFrame.styleable((props, ref) => {
  const context = useSheet();
  return /* @__PURE__ */ jsx30(
    SheetCloseFrame,
    {
      ref,
      onPress: () => context.setOpen(false),
      ...props
    }
  );
});
var SheetTriggerFrame = styled29(VStack, {});
var SheetTrigger = SheetTriggerFrame.styleable((props, ref) => {
  const context = useSheet();
  return /* @__PURE__ */ jsx30(
    SheetTriggerFrame,
    {
      ref,
      onPress: () => context.setOpen(true),
      ...props
    }
  );
});
var Sheet = withStaticProperties3(SheetComponent, {
  Portal,
  Overlay: SheetOverlay,
  Frame: SheetContentFrame,
  Handle: SheetHandle,
  Content: SheetContent,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription,
  Close: SheetClose,
  Trigger: SheetTrigger,
  ScrollView: TamaguiSheet.ScrollView
});

// src/molecules/Drawer.tsx
import { YStack as YStack12 } from "tamagui";
import { Fragment as Fragment5, jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";
function DrawerComponent({
  trigger,
  title,
  description,
  children,
  footer,
  isLoading = false,
  hasError = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen
}) {
  const [internalOpen, setInternalOpen] = useState6(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = setControlledOpen ?? setInternalOpen;
  const triggerWithPress = trigger ? React31.cloneElement(trigger, {
    onPress: () => setOpen(true)
  }) : null;
  return /* @__PURE__ */ jsxs20(Fragment5, { children: [
    triggerWithPress,
    /* @__PURE__ */ jsx31(Sheet, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxs20(Sheet.Content, { animation: "medium", enterStyle: { y: 300 }, exitStyle: { y: 300 }, children: [
      /* @__PURE__ */ jsx31(Sheet.Handle, {}),
      /* @__PURE__ */ jsxs20(Sheet.Header, { children: [
        /* @__PURE__ */ jsx31(Sheet.Title, { color: hasError ? "$red10" : void 0, children: title }),
        description && /* @__PURE__ */ jsx31(Sheet.Description, { children: description })
      ] }),
      /* @__PURE__ */ jsx31(YStack12, { flex: 1, paddingVertical: "$4", children: isLoading ? /* @__PURE__ */ jsxs20(YStack12, { space: true, children: [
        /* @__PURE__ */ jsx31(Skeleton, { height: 40 }),
        /* @__PURE__ */ jsx31(Skeleton, { height: 20, width: "75%" })
      ] }) : children }),
      footer && /* @__PURE__ */ jsx31(Sheet.Footer, { children: footer })
    ] }) })
  ] });
}
var Drawer = Object.assign(DrawerComponent, {
  Portal: Sheet.Portal,
  Overlay: Sheet.Overlay,
  Handle: Sheet.Handle,
  Frame: Sheet.Frame,
  Content: Sheet.Content,
  Header: Sheet.Header,
  Footer: Sheet.Footer,
  Title: Sheet.Title,
  Description: Sheet.Description,
  Close: Sheet.Close
});
var DrawerPortal = Sheet.Portal;
var DrawerOverlay = Sheet.Overlay;
var DrawerHandle = Sheet.Handle;
var DrawerFrame = Sheet.Frame;
var DrawerContent = Sheet.Content;
var DrawerHeader = Sheet.Header;
var DrawerFooter = Sheet.Footer;
var DrawerTitle = Sheet.Title;
var DrawerDescription = Sheet.Description;
var DrawerClose = Sheet.Close;

// src/molecules/DropdownMenu/DropdownMenu.tsx
import * as React32 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { styled as styled30, View as View5, Text as Text12 } from "tamagui";
import { Check as Check2, ChevronRight, Circle } from "@tamagui/lucide-icons";
import { jsx as jsx32, jsxs as jsxs21 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTriggerFrame = styled30(DropdownMenuPrimitive.SubTrigger, {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: "$2",
  paddingHorizontal: "$2",
  borderRadius: "$sm",
  cursor: "default",
  outlineStyle: "none",
  hoverStyle: {
    backgroundColor: "$accent"
  },
  focusStyle: {
    backgroundColor: "$accent"
  }
});
var DropdownMenuSubTrigger = React32.forwardRef(({ className: _className, children, inset, ...props }, ref) => /* @__PURE__ */ jsxs21(
  DropdownMenuSubTriggerFrame,
  {
    ref,
    paddingLeft: inset ? "$8" : "$2",
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx32(View5, { marginLeft: "auto", children: /* @__PURE__ */ jsx32(ChevronRight, { size: 16 }) })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContentFrame = styled30(DropdownMenuPrimitive.SubContent, {
  minWidth: 180,
  // roughly 8rem
  backgroundColor: "$background",
  borderRadius: "$md",
  borderWidth: 1,
  borderColor: "$borderColor",
  padding: "$1",
  shadowColor: "$shadowColor",
  shadowRadius: 5,
  elevation: 5,
  animation: "quick",
  zIndex: 2e5
});
var DropdownMenuSubContent = React32.forwardRef(({ className: _className, ...props }, ref) => /* @__PURE__ */ jsx32(DropdownMenuSubContentFrame, { ref, ...props }));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContentFrame = styled30(DropdownMenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: "$background",
  borderRadius: "$md",
  borderWidth: 1,
  borderColor: "$borderColor",
  padding: "$1",
  shadowColor: "$shadowColor",
  shadowRadius: 10,
  shadowOpacity: 0.2,
  elevation: 10,
  zIndex: 2e5
  // animation handled by radix/css? or we assume Tamagui handles it?
});
var DropdownMenuContent = React32.forwardRef(({ className: _className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx32(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx32(
  DropdownMenuContentFrame,
  {
    ref,
    sideOffset,
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItemFrame = styled30(DropdownMenuPrimitive.Item, {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: "$2",
  paddingHorizontal: "$2",
  borderRadius: "$sm",
  cursor: "pointer",
  outlineStyle: "none",
  userSelect: "none",
  hoverStyle: {
    backgroundColor: "$accent"
    // color is handled by children usually, or inheritable
  },
  focusStyle: {
    backgroundColor: "$accent"
  }
});
var DropdownMenuItem = React32.forwardRef(({ className: _className, inset, ...props }, ref) => /* @__PURE__ */ jsx32(
  DropdownMenuItemFrame,
  {
    ref,
    paddingLeft: inset ? "$8" : "$2",
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItemFrame = styled30(DropdownMenuPrimitive.CheckboxItem, {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: "$2",
  paddingLeft: "$8",
  paddingRight: "$2",
  borderRadius: "$sm",
  outlineStyle: "none",
  cursor: "default",
  hoverStyle: { backgroundColor: "$accent" },
  focusStyle: { backgroundColor: "$accent" }
});
var DropdownMenuCheckboxItem = React32.forwardRef(({ className: _className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs21(
  DropdownMenuCheckboxItemFrame,
  {
    ref,
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx32(View5, { position: "absolute", left: "$2", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsx32(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx32(Check2, { size: 16 }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItemFrame = styled30(DropdownMenuPrimitive.RadioItem, {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: "$2",
  paddingLeft: "$8",
  paddingRight: "$2",
  borderRadius: "$sm",
  outlineStyle: "none",
  cursor: "default",
  hoverStyle: { backgroundColor: "$accent" },
  focusStyle: { backgroundColor: "$accent" }
});
var DropdownMenuRadioItem = React32.forwardRef(({ className: _className, children, ...props }, ref) => /* @__PURE__ */ jsxs21(DropdownMenuRadioItemFrame, { ref, ...props, children: [
  /* @__PURE__ */ jsx32(View5, { position: "absolute", left: "$2", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsx32(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx32(Circle, { size: 8, fill: "currentColor" }) }) }),
  children
] }));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = styled30(DropdownMenuPrimitive.Label, {
  paddingHorizontal: "$2",
  paddingVertical: "$1.5",
  fontSize: "$3",
  fontWeight: "600",
  color: "$foreground"
  // Ensure visibility
});
var DropdownMenuSeparator = styled30(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: "$muted",
  marginVertical: "$1"
});
var DropdownMenuShortcut = styled30(Text12, {
  marginLeft: "auto",
  fontSize: "$2",
  color: "$mutedForeground",
  letterSpacing: 1
});

// src/molecules/Popover/Popover.tsx
import {
  Popover as TamaguiPopover,
  styled as styled31,
  YStack as YStack13
} from "tamagui";
import { forwardRef as forwardRef9, createContext as createContext4, useContext as useContext7, useMemo as useMemo2 } from "react";
import { jsx as jsx33, jsxs as jsxs22 } from "react/jsx-runtime";
var PopoverContext = createContext4({});
var usePopoverContext = () => {
  const context = useContext7(PopoverContext);
  if (!context) {
    throw new Error("usePopoverContext must be used within a Popover");
  }
  return context;
};
var PopoverContentFrame = styled31(TamaguiPopover.Content, {
  name: "PopoverContent",
  backgroundColor: "$background",
  borderColor: "$borderColor",
  borderWidth: 1,
  padding: "$4",
  borderRadius: "$2",
  shadowColor: "$shadowColor",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
  animation: [
    "quick",
    {
      opacity: {
        overshootClamping: true
      }
    }
  ],
  enterStyle: { y: -10, opacity: 0 },
  exitStyle: { y: -10, opacity: 0 },
  y: 0,
  opacity: 1,
  variants: {
    hasError: {
      true: {
        borderColor: "$red10"
      }
    }
  }
});
var PopoverArrow = styled31(TamaguiPopover.Arrow, {
  name: "PopoverArrow",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background"
});
var PopoverContent = forwardRef9(
  ({ children, actions, ...props }, ref) => {
    const { isLoading, hasError } = usePopoverContext();
    return /* @__PURE__ */ jsxs22(PopoverContentFrame, { ref, ...props, hasError, children: [
      /* @__PURE__ */ jsx33(PopoverArrow, { size: "$3" }),
      /* @__PURE__ */ jsxs22(YStack13, { gap: "$3", children: [
        children,
        actions && /* @__PURE__ */ jsx33(YStack13, { children: actions })
      ] })
    ] });
  }
);
PopoverContent.displayName = "PopoverContent";
var Popover = ({
  children,
  isLoading,
  hasError,
  isDisabled,
  ...props
}) => {
  const contextValue = useMemo2(
    () => ({ isLoading, hasError, isDisabled }),
    [isLoading, hasError, isDisabled]
  );
  return /* @__PURE__ */ jsx33(PopoverContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx33(TamaguiPopover, { ...props, children }) });
};
var PopoverTrigger = forwardRef9(
  (props, ref) => {
    const { isDisabled, isLoading } = usePopoverContext();
    return /* @__PURE__ */ jsx33(TamaguiPopover.Trigger, { ref, ...props, disabled: isDisabled || isLoading });
  }
);
PopoverTrigger.displayName = "PopoverTrigger";
var PopoverAnchor = TamaguiPopover.Anchor;
var PopoverClose = TamaguiPopover.Close;

// src/molecules/HoverCard/HoverCard.tsx
import { Paragraph as Paragraph4, XStack as XStack13, YStack as YStack14, Text as Text13 } from "tamagui";
import { AlertTriangle } from "@tamagui/lucide-icons";
import { jsx as jsx34, jsxs as jsxs23 } from "react/jsx-runtime";
var HoverCard = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx34(Popover, { placement: "top", hoverable: true, ...rest, children });
};
var HoverCardTrigger = PopoverTrigger;
var HoverCardContent = PopoverContent;
var HoverCardAnchor = PopoverAnchor;
var HoverCardClose = PopoverClose;
var HoverCardProfileContent = ({
  user,
  isLoading,
  hasError,
  actions
}) => {
  const containerProps = {
    w: 280,
    p: "$4",
    space: true,
    ...hasError && {
      borderColor: "$red10",
      borderWidth: 1
    }
  };
  if (hasError) {
    return /* @__PURE__ */ jsx34(YStack14, { ...containerProps, children: /* @__PURE__ */ jsxs23(XStack13, { space: "$2", ai: "center", jc: "center", children: [
      /* @__PURE__ */ jsx34(AlertTriangle, { color: "$red10", size: "$1" }),
      /* @__PURE__ */ jsx34(Text13, { color: "$red10", fontSize: "$2", children: "N\xE3o foi poss\xEDvel carregar o perfil." })
    ] }) });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxs23(YStack14, { ...containerProps, children: [
      /* @__PURE__ */ jsxs23(XStack13, { space: "$4", ai: "center", children: [
        /* @__PURE__ */ jsx34(Skeleton, { br: "$12", w: "$10", h: "$10" }),
        /* @__PURE__ */ jsxs23(YStack14, { space: "$1", children: [
          /* @__PURE__ */ jsx34(Skeleton, { h: "$2", w: "$12" }),
          /* @__PURE__ */ jsx34(Skeleton, { h: "$2", w: "$8" })
        ] })
      ] }),
      /* @__PURE__ */ jsx34(Skeleton, { h: "$2" }),
      /* @__PURE__ */ jsx34(Skeleton, { h: "$2" }),
      /* @__PURE__ */ jsxs23(XStack13, { space: "$4", children: [
        /* @__PURE__ */ jsx34(Skeleton, { h: "$2", w: "$12" }),
        /* @__PURE__ */ jsx34(Skeleton, { h: "$2", w: "$12" })
      ] }),
      actions && /* @__PURE__ */ jsx34(XStack13, { jc: "flex-end", children: actions })
    ] });
  }
  return /* @__PURE__ */ jsxs23(YStack14, { ...containerProps, children: [
    /* @__PURE__ */ jsxs23(XStack13, { space: "$4", ai: "center", children: [
      /* @__PURE__ */ jsx34(Avatar, { circular: true, size: "$10", children: /* @__PURE__ */ jsx34(Avatar.Image, { source: { uri: user.avatar } }) }),
      /* @__PURE__ */ jsxs23(YStack14, { space: "$1", f: 1, children: [
        /* @__PURE__ */ jsx34(Paragraph4, { size: "$3", fontWeight: "bold", ellipse: true, children: user.name }),
        /* @__PURE__ */ jsx34(Paragraph4, { size: "$2", color: "$gray11", ellipse: true, children: user.handle })
      ] })
    ] }),
    user.bio && /* @__PURE__ */ jsx34(Paragraph4, { size: "$2", ellipse: true, children: user.bio }),
    /* @__PURE__ */ jsxs23(XStack13, { space: "$4", children: [
      /* @__PURE__ */ jsxs23(Paragraph4, { size: "$2", children: [
        /* @__PURE__ */ jsx34(Paragraph4, { fontWeight: "bold", children: user.following }),
        " Seguindo"
      ] }),
      /* @__PURE__ */ jsxs23(Paragraph4, { size: "$2", children: [
        /* @__PURE__ */ jsx34(Paragraph4, { fontWeight: "bold", children: user.followers }),
        " Seguidores"
      ] })
    ] }),
    actions && /* @__PURE__ */ jsx34(XStack13, { jc: "flex-end", children: actions })
  ] });
};

// src/molecules/RadioGroup.tsx
import React33 from "react";
import {
  Label as Label4,
  RadioGroup as TamaguiRadioGroup,
  styled as styled32,
  Text as Text14,
  XStack as XStack14,
  YStack as YStack15
} from "tamagui";
import { jsx as jsx35, jsxs as jsxs24 } from "react/jsx-runtime";
var RadioGroupItemFrame = styled32(TamaguiRadioGroup.Item, {
  name: "RadioGroupItem",
  width: 16,
  height: 16,
  borderRadius: "$10",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  alignItems: "center",
  justifyContent: "center",
  focusStyle: {
    outlineColor: "$blue10",
    outlineStyle: "solid",
    outlineWidth: 2
  },
  hoverStyle: {
    borderColor: "$borderColorHover"
  },
  pressStyle: {
    borderColor: "$blue10",
    backgroundColor: "$backgroundPress"
  },
  variants: {
    hasError: {
      true: {
        borderColor: "$red10"
      }
    },
    disabled: {
      true: {
        backgroundColor: "$background",
        borderColor: "$gray8",
        opacity: 0.5
      }
    }
  }
});
var RadioGroupIndicator = styled32(TamaguiRadioGroup.Indicator, {
  name: "RadioGroupIndicator",
  backgroundColor: "$blue10",
  width: 8,
  height: 8,
  borderRadius: "$10",
  variants: {
    disabled: {
      true: {
        backgroundColor: "$gray8"
      }
    }
  }
});
var RadioGroupItem = React33.forwardRef((props, ref) => {
  return /* @__PURE__ */ jsx35(RadioGroupItemFrame, { ref, ...props, children: /* @__PURE__ */ jsx35(RadioGroupIndicator, { disabled: props.disabled }) });
});
RadioGroupItem.displayName = "RadioGroupItem";
var RadioGroup2 = React33.forwardRef(
  ({
    options,
    orientation = "vertical",
    isLoading = false,
    hasError = false,
    errorMessage,
    ...props
  }, ref) => {
    const Container = orientation === "vertical" ? YStack15 : XStack14;
    if (isLoading) {
      return /* @__PURE__ */ jsx35(Container, { gap: "$2", "aria-busy": "true", "aria-live": "polite", children: options.map((option) => /* @__PURE__ */ jsxs24(XStack14, { alignItems: "center", space: "$2", children: [
        /* @__PURE__ */ jsx35(Skeleton, { width: 16, height: 16, borderRadius: "$10" }),
        /* @__PURE__ */ jsx35(Skeleton, { width: 100, height: 16 })
      ] }, option.value)) });
    }
    return /* @__PURE__ */ jsxs24(YStack15, { children: [
      /* @__PURE__ */ jsx35(TamaguiRadioGroup, { ref, ...props, children: /* @__PURE__ */ jsx35(Container, { gap: "$2", children: options.map((option) => /* @__PURE__ */ jsxs24(XStack14, { alignItems: "center", space: "$2", children: [
        /* @__PURE__ */ jsx35(
          RadioGroupItem,
          {
            value: option.value,
            id: option.value,
            hasError,
            disabled: option.disabled || props.disabled
          }
        ),
        /* @__PURE__ */ jsx35(
          Label4,
          {
            htmlFor: option.value,
            disabled: option.disabled || props.disabled,
            ellipse: true,
            numberOfLines: 1,
            children: option.label
          }
        )
      ] }, option.value)) }) }),
      hasError && errorMessage && /* @__PURE__ */ jsx35(Text14, { color: "$red10", fontSize: "$2", marginTop: "$2", children: errorMessage })
    ] });
  }
);
RadioGroup2.displayName = "RadioGroup";

// src/molecules/Resizable.tsx
import {
  styled as styled33,
  YStack as YStack16,
  XStack as XStack15,
  Separator as Separator3,
  Theme
} from "tamagui";
import React34, {
  createContext as createContext5,
  useContext as useContext8,
  useState as useState7,
  useRef as useRef3,
  useCallback as useCallback4,
  Children as Children3,
  isValidElement as isValidElement3,
  cloneElement as cloneElement4,
  useId
} from "react";
import { GripVertical } from "@tamagui/lucide-icons";
import { jsx as jsx36, jsxs as jsxs25 } from "react/jsx-runtime";
var ResizablePanelGroupContext = createContext5(null);
var useResizablePanelGroup = () => {
  const context = useContext8(ResizablePanelGroupContext);
  if (!context) {
    throw new Error("useResizablePanelGroup must be used within a ResizablePanelGroup");
  }
  return context;
};
var ResizablePanelGroupFrame = styled33(XStack15, {
  name: "ResizablePanelGroup",
  flex: 1,
  width: "100%",
  height: "100%",
  variants: {
    direction: {
      vertical: {
        flexDirection: "column"
      },
      horizontal: {
        flexDirection: "row"
      }
    },
    isDisabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none"
      }
    },
    hasError: {
      true: {
        // Theme-based error state
      }
    }
  },
  defaultVariants: {
    direction: "horizontal"
  }
});
var ResizablePanelGroup = React34.forwardRef(({
  direction = "horizontal",
  children,
  isDisabled: disabledProp = false,
  isLoading = false,
  hasError = false,
  keyboardStep = 5,
  ...props
}, ref) => {
  const groupRef = useRef3(null);
  const isDisabled = disabledProp || isLoading;
  const childArray = Children3.toArray(children);
  const panelIds = Children3.map(childArray, (child) => {
    return isValidElement3(child) && child.type === ResizablePanel ? useId() : null;
  }).filter(Boolean);
  const [panelSizes, setPanelSizes] = useState7(() => {
    const sizes = [];
    Children3.forEach(childArray, (child) => {
      if (isValidElement3(child) && child.type === ResizablePanel) {
        sizes.push(child.props.defaultSize || 50);
      }
    });
    return sizes;
  });
  const panelMinSizes = useRef3([]);
  Children3.forEach(childArray, (child) => {
    if (isValidElement3(child) && child.type === ResizablePanel) {
      panelMinSizes.current.push(child.props.minSize || 10);
    }
  });
  const adjustPanelSize = useCallback4((handleIndex2, delta) => {
    setPanelSizes((prevSizes) => {
      const newSizes = [...prevSizes];
      const leftPanelIndex = handleIndex2;
      const rightPanelIndex = handleIndex2 + 1;
      const minLeftSize = panelMinSizes.current[leftPanelIndex];
      const minRightSize = panelMinSizes.current[rightPanelIndex];
      let newLeftSize = newSizes[leftPanelIndex] + delta;
      let newRightSize = newSizes[rightPanelIndex] - delta;
      if (newLeftSize < minLeftSize) {
        newLeftSize = minLeftSize;
        newRightSize = newSizes[leftPanelIndex] + newSizes[rightPanelIndex] - newLeftSize;
      }
      if (newRightSize < minRightSize) {
        newRightSize = minRightSize;
        newLeftSize = newSizes[leftPanelIndex] + newSizes[rightPanelIndex] - newRightSize;
      }
      newSizes[leftPanelIndex] = newLeftSize;
      newSizes[rightPanelIndex] = newRightSize;
      return newSizes;
    });
  }, []);
  const activeHandleIndex = useRef3(null);
  const dragStartPositions = useRef3(null);
  const onDragging = useCallback4((event) => {
    if (activeHandleIndex.current === null || !dragStartPositions.current) return;
    const groupElement = groupRef.current;
    if (!groupElement) return;
    const { left, top, width, height } = groupElement.getBoundingClientRect();
    const totalSize = direction === "horizontal" ? width : height;
    const cursorPosition = direction === "horizontal" ? event.clientX - left : event.clientY - top;
    const delta = cursorPosition - dragStartPositions.current.cursor;
    const deltaPercent = delta / totalSize * 100;
    const initialSizes = dragStartPositions.current.sizes;
    const newSizes = [...initialSizes];
    const leftPanelIndex = activeHandleIndex.current;
    const rightPanelIndex = activeHandleIndex.current + 1;
    const minLeftSize = panelMinSizes.current[leftPanelIndex];
    const minRightSize = panelMinSizes.current[rightPanelIndex];
    let newLeftSize = newSizes[leftPanelIndex] + deltaPercent;
    let newRightSize = newSizes[rightPanelIndex] - deltaPercent;
    if (newLeftSize < minLeftSize) {
      newLeftSize = minLeftSize;
      newRightSize = initialSizes[leftPanelIndex] + initialSizes[rightPanelIndex] - newLeftSize;
    }
    if (newRightSize < minRightSize) {
      newRightSize = minRightSize;
      newLeftSize = initialSizes[leftPanelIndex] + initialSizes[rightPanelIndex] - newRightSize;
    }
    setPanelSizes([
      ...newSizes.slice(0, leftPanelIndex),
      newLeftSize,
      newRightSize,
      ...newSizes.slice(rightPanelIndex + 1)
    ]);
  }, [direction]);
  const stopDragging = useCallback4(() => {
    activeHandleIndex.current = null;
    dragStartPositions.current = null;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
    window.removeEventListener("pointermove", onDragging);
    window.removeEventListener("pointerup", stopDragging);
  }, [onDragging]);
  const startDragging = useCallback4((handleIndex2, event) => {
    event.preventDefault();
    activeHandleIndex.current = handleIndex2;
    const groupElement = groupRef.current;
    if (!groupElement) return;
    const { left, top } = groupElement.getBoundingClientRect();
    const cursorPosition = direction === "horizontal" ? event.clientX - left : event.clientY - top;
    dragStartPositions.current = {
      cursor: cursorPosition,
      sizes: [...panelSizes]
    };
    document.body.style.cursor = direction === "horizontal" ? "col-resize" : "row-resize";
    document.body.style.userSelect = "none";
    window.addEventListener("pointermove", onDragging);
    window.addEventListener("pointerup", stopDragging);
  }, [direction, panelSizes, onDragging, stopDragging]);
  const handleKeyDown = (handleIndex2, event) => {
    if (event.isDefaultPrevented()) return;
    const { key } = event;
    const isHorizontal = direction === "horizontal";
    const moveLeft = isHorizontal && key === "ArrowLeft";
    const moveRight = isHorizontal && key === "ArrowRight";
    const moveUp = !isHorizontal && key === "ArrowUp";
    const moveDown = !isHorizontal && key === "ArrowDown";
    if (moveLeft || moveUp) {
      event.preventDefault();
      adjustPanelSize(handleIndex2, -keyboardStep);
    } else if (moveRight || moveDown) {
      event.preventDefault();
      adjustPanelSize(handleIndex2, keyboardStep);
    } else if (key === "Home") {
      event.preventDefault();
      const minSize = panelMinSizes.current[handleIndex2];
      const currentSize = panelSizes[handleIndex2];
      adjustPanelSize(handleIndex2, minSize - currentSize);
    } else if (key === "End") {
      event.preventDefault();
      const minSize = panelMinSizes.current[handleIndex2 + 1];
      const currentSize = panelSizes[handleIndex2 + 1];
      adjustPanelSize(handleIndex2, currentSize - minSize);
    }
  };
  let panelIndex = 0;
  let handleIndex = 0;
  const contextValue = {
    direction,
    startDragging,
    adjustPanelSize: handleKeyDown,
    getPanelSize: (index) => panelSizes[index],
    getPanelMinSize: (index) => panelMinSizes.current[index],
    isDisabled,
    panelIds
  };
  const content = /* @__PURE__ */ jsx36(
    ResizablePanelGroupFrame,
    {
      ref: groupRef,
      direction,
      isDisabled,
      hasError,
      ...props,
      children: Children3.map(childArray, (child) => {
        if (isValidElement3(child)) {
          if (child.type === ResizablePanel) {
            const index = panelIndex++;
            return cloneElement4(child, {
              id: panelIds[index],
              size: panelSizes[index]
            });
          }
          if (child.type === ResizableHandle) {
            const index = handleIndex++;
            return cloneElement4(child, {
              handleIndex: index
            });
          }
        }
        return child;
      })
    }
  );
  return /* @__PURE__ */ jsx36(ResizablePanelGroupContext.Provider, { value: contextValue, children: hasError ? /* @__PURE__ */ jsx36(Theme, { name: "red", children: content }) : content });
});
ResizablePanelGroup.displayName = "ResizablePanelGroup";
var ResizablePanelFrame = styled33(YStack16, {
  name: "ResizablePanel"
});
var ResizablePanel = React34.forwardRef(({ children, size, ...props }, ref) => {
  return /* @__PURE__ */ jsx36(ResizablePanelFrame, { ref, flexBasis: `${size}%`, ...props, children });
});
ResizablePanel.displayName = "ResizablePanel";
var ResizableHandleFrame = styled33(YStack16, {
  name: "ResizableHandle",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  outline: 0,
  focusStyle: {
    outlineColor: "$focusRing",
    outlineWidth: 2,
    outlineStyle: "solid"
  },
  variants: {
    direction: {
      vertical: {
        height: "$3",
        width: "100%",
        cursor: "row-resize"
      },
      horizontal: {
        width: "$3",
        height: "100%",
        cursor: "col-resize"
      }
    }
  }
});
var ResizableHandleIndicator = styled33(Separator3, {
  // Explicitly set background color to ensure visibility
  borderColor: "$borderColor",
  borderWidth: 1,
  variants: {
    direction: {
      vertical: {
        width: "100%",
        height: 1
      },
      horizontal: {
        height: "100%",
        width: 1
      }
    }
  }
});
var ResizableHandle = React34.forwardRef(({ withHandle, handleIndex, ...props }, ref) => {
  const {
    direction,
    startDragging,
    adjustPanelSize,
    getPanelSize,
    getPanelMinSize,
    isDisabled,
    panelIds
  } = useResizablePanelGroup();
  const onPointerDown = (event) => {
    if (handleIndex !== void 0) {
      startDragging(handleIndex, event);
    }
  };
  const onKeyDown = (event) => {
    if (handleIndex !== void 0) {
      adjustPanelSize(handleIndex, event);
    }
  };
  const leftPanelIndex = handleIndex ?? 0;
  const rightPanelIndex = (handleIndex ?? 0) + 1;
  const valueNow = getPanelSize(leftPanelIndex);
  const minSize = getPanelMinSize(leftPanelIndex);
  const totalSize = getPanelSize(leftPanelIndex) + getPanelSize(rightPanelIndex);
  const maxSize = totalSize - getPanelMinSize(rightPanelIndex);
  return /* @__PURE__ */ jsxs25(
    ResizableHandleFrame,
    {
      ref,
      direction,
      onPointerDown: isDisabled ? void 0 : onPointerDown,
      onKeyDown: isDisabled ? void 0 : onKeyDown,
      ...props,
      "aria-disabled": isDisabled,
      role: "separator",
      tabIndex: isDisabled ? -1 : 0,
      "aria-valuenow": valueNow,
      "aria-valuemin": minSize,
      "aria-valuemax": maxSize,
      "aria-controls": panelIds[leftPanelIndex],
      children: [
        /* @__PURE__ */ jsx36(ResizableHandleIndicator, { direction }),
        withHandle && /* @__PURE__ */ jsx36(
          YStack16,
          {
            position: "absolute",
            padding: "$1.5",
            borderRadius: "$10",
            backgroundColor: "$background",
            borderWidth: 1,
            borderColor: "$borderColor",
            children: /* @__PURE__ */ jsx36(GripVertical, { size: 16, color: "$color", "aria-label": "Arrastar para redimensionar" })
          }
        )
      ]
    }
  );
});
ResizableHandle.displayName = "ResizableHandle";

// src/molecules/Select/Select.tsx
import { Check as Check3, ChevronDown as ChevronDown3 } from "@tamagui/lucide-icons";
import React35 from "react";
import {
  Adapt,
  isWeb as isWeb2,
  Select as TamaguiSelect,
  Sheet as Sheet2,
  styled as styled34,
  XStack as XStack16,
  YStack as YStack17
} from "tamagui";
import { jsx as jsx37, jsxs as jsxs26 } from "react/jsx-runtime";
var SelectRoot = (props) => /* @__PURE__ */ jsx37(TamaguiSelect, { ...props });
var SelectTriggerFrame = styled34(XStack16, {
  name: "SelectTrigger",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  paddingHorizontal: "$3",
  height: "$10",
  borderRadius: "$2",
  gap: "$2",
  hoverStyle: {
    backgroundColor: "$backgroundHover"
  },
  focusStyle: {
    borderColor: "$ring",
    borderWidth: 2
  },
  variants: {
    isError: {
      true: {
        borderColor: "$red10"
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: "$background"
      }
    },
    isLoading: {
      true: {
        opacity: 0.5,
        backgroundColor: "$background"
      }
    }
  }
});
var SelectTrigger = React35.forwardRef(
  ({ children, hasError, disabled, isLoading, rightSlot, ...props }, ref) => {
    return /* @__PURE__ */ jsx37(TamaguiSelect.Trigger, { asChild: true, disabled: disabled || isLoading, ref, children: /* @__PURE__ */ jsxs26(SelectTriggerFrame, { tabIndex: 0, isError: hasError, disabled: disabled || isLoading, ...props, children: [
      children,
      isLoading ? /* @__PURE__ */ jsx37(Spinner, {}) : rightSlot || /* @__PURE__ */ jsx37(ChevronDown3, { size: 12, color: "$mutedForeground" })
    ] }) });
  }
);
var SelectContent = (props) => /* @__PURE__ */ jsxs26(TamaguiSelect.Content, { zIndex: 2e5, ...props, children: [
  /* @__PURE__ */ jsx37(
    TamaguiSelect.ScrollUpButton,
    {
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      width: "100%",
      height: "$3",
      children: /* @__PURE__ */ jsx37(YStack17, { zIndex: 10, children: /* @__PURE__ */ jsx37(ChevronDown3, { size: 12 }) })
    }
  ),
  /* @__PURE__ */ jsx37(TamaguiSelect.Viewport, { minWidth: 200, children: props.children }),
  /* @__PURE__ */ jsx37(
    TamaguiSelect.ScrollDownButton,
    {
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      width: "100%",
      height: "$3",
      children: /* @__PURE__ */ jsx37(YStack17, { zIndex: 10, children: /* @__PURE__ */ jsx37(ChevronDown3, { size: 12 }) })
    }
  )
] });
var SelectItem = styled34(TamaguiSelect.Item, {
  name: "SelectItem",
  paddingHorizontal: "$3",
  paddingVertical: "$2",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "$2",
  height: "$10",
  variants: {
    disabled: {
      true: {
        color: "$colorDisabled",
        pointerEvents: "none"
      }
    }
  }
});
var SelectItemIndicator = (props) => /* @__PURE__ */ jsx37(TamaguiSelect.ItemIndicator, { marginLeft: "auto", ...props, children: /* @__PURE__ */ jsx37(Check3, { size: 16 }) });
var SelectSheet = (props) => /* @__PURE__ */ jsx37(Adapt, { when: "sm", platform: "touch", children: /* @__PURE__ */ jsxs26(
  Sheet2,
  {
    native: !isWeb2,
    modal: true,
    dismissOnSnapToBottom: true,
    animationConfig: {
      type: "spring",
      damping: 20,
      mass: 1.2,
      stiffness: 250
    },
    ...props,
    children: [
      /* @__PURE__ */ jsx37(Sheet2.Frame, { children: /* @__PURE__ */ jsx37(Sheet2.ScrollView, { children: /* @__PURE__ */ jsx37(Adapt.Contents, {}) }) }),
      /* @__PURE__ */ jsx37(Sheet2.Overlay, { animation: "lazy", enterStyle: { opacity: 0 }, exitStyle: { opacity: 0 } })
    ]
  }
) });
var SelectValue = TamaguiSelect.Value;
var SelectItemText = TamaguiSelect.ItemText;
var SelectGroup = TamaguiSelect.Group;
var SelectLabel = TamaguiSelect.Label;
var SelectViewport = TamaguiSelect.Viewport;
var SelectPortal = TamaguiSelect.Portal;
SelectRoot.Trigger = SelectTrigger;
SelectRoot.Value = SelectValue;
SelectRoot.Content = SelectContent;
SelectRoot.Item = SelectItem;
SelectRoot.ItemText = SelectItemText;
SelectRoot.ItemIndicator = SelectItemIndicator;
SelectRoot.Group = SelectGroup;
SelectRoot.Label = SelectLabel;
SelectRoot.Sheet = SelectSheet;
SelectRoot.Portal = SelectPortal;
SelectRoot.Viewport = SelectViewport;

// src/molecules/StarRating/StarRating.tsx
import { Star } from "@tamagui/lucide-icons";
import { forwardRef as forwardRef10, useState as useState8 } from "react";
import {
  XStack as XStack17,
  getVariableValue as getVariableValue3,
  styled as styled35,
  withStaticProperties as withStaticProperties4
} from "tamagui";
import { jsx as jsx38, jsxs as jsxs27 } from "react/jsx-runtime";
var StarRatingFrame = styled35(XStack17, {
  name: "StarRating",
  gap: "$1",
  variants: {
    hasError: {
      true: {
        // You can define error styles for the container if needed,
        // but for now, we'll handle color on the icon itself.
      }
    }
  }
});
var StarIconContainer = styled35(XStack17, {
  name: "StarIconContainer",
  cursor: "pointer",
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.5
      }
    }
  }
});
var StarRatingComponent = forwardRef10(
  ({
    count = 5,
    onChange,
    value,
    defaultValue: defaultValue2 = null,
    disabled,
    hasError,
    isLoading,
    iconProps,
    Icon = Star,
    size = "$2",
    colorActive: colorActiveProp = "$yellow10",
    colorInactive: colorInactiveProp = "$gray7",
    rightSlot,
    ...frameProps
  }, ref) => {
    const [internalRating, setInternalRating] = useState8(defaultValue2);
    const [hoverRating, setHoverRating] = useState8(null);
    const isControlled = value !== void 0;
    const currentRating = isControlled ? value : internalRating;
    const colorActive = getVariableValue3(colorActiveProp);
    const colorError = getVariableValue3("$red10");
    const colorInactive = getVariableValue3(colorInactiveProp);
    const handlePress = (ratingToSet) => {
      if (disabled || isLoading) return;
      const newRating = currentRating === ratingToSet ? null : ratingToSet;
      if (!isControlled) {
        setInternalRating(newRating);
      }
      onChange?.(newRating);
    };
    if (isLoading) {
      return /* @__PURE__ */ jsx38(StarRatingFrame, { ...frameProps, ref, children: Array.from({ length: count }, (_, i) => /* @__PURE__ */ jsx38(Skeleton, { width: size, height: size, br: "$10" }, i)) });
    }
    return /* @__PURE__ */ jsxs27(StarRatingFrame, { ...frameProps, ref, children: [
      Array.from({ length: count }, (_, i) => {
        const ratingValue = i + 1;
        const isFilled = ratingValue <= (hoverRating ?? currentRating ?? 0);
        const starColor = hasError ? colorError : isFilled ? colorActive : colorInactive;
        return /* @__PURE__ */ jsx38(
          StarIconContainer,
          {
            disabled,
            onHoverIn: () => !disabled && setHoverRating(ratingValue),
            onHoverOut: () => !disabled && setHoverRating(null),
            onPress: () => handlePress(ratingValue),
            "aria-label": `Avalia\xE7\xE3o ${ratingValue} de ${count}`,
            "data-testid": `star-${ratingValue}`,
            children: /* @__PURE__ */ jsx38(
              Icon,
              {
                ...iconProps,
                size,
                color: starColor,
                fill: isFilled ? starColor : "transparent"
              }
            )
          },
          ratingValue
        );
      }),
      rightSlot
    ] });
  }
);
StarRatingComponent.displayName = "StarRating";
var StarRating = withStaticProperties4(StarRatingComponent, {});

// src/molecules/Toast.tsx
import { createContext as createContext6, useContext as useContext9, useState as useState9, useCallback as useCallback5 } from "react";
import { styled as styled36, XStack as XStack18, YStack as YStack18, Text as Text15, AnimatePresence } from "tamagui";
import { Portal as Portal4 } from "@tamagui/portal";
import { X as X3 } from "@tamagui/lucide-icons";
import { jsx as jsx39, jsxs as jsxs28 } from "react/jsx-runtime";
var ToastContext = createContext6(void 0);
var useToast = () => {
  const context = useContext9(ToastContext);
  if (!context) {
    throw new Error("useToast deve ser usado dentro de um ToastProvider");
  }
  return context;
};
var ToastViewportFrame = styled36(YStack18, {
  name: "ToastViewport",
  position: "absolute",
  bottom: "$4",
  right: "$4",
  padding: "$4",
  gap: "$2",
  width: 420,
  maxWidth: "100%",
  zIndex: 1e4,
  pointerEvents: "box-none"
});
var ToastFrame = styled36(XStack18, {
  name: "Toast",
  backgroundColor: "$background",
  borderRadius: "$6",
  borderWidth: 1,
  borderColor: "$borderColor",
  padding: "$4",
  gap: "$3",
  alignItems: "center",
  shadowColor: "$shadowColor",
  shadowRadius: 10,
  shadowOpacity: 0.1,
  elevation: 5,
  minHeight: 64,
  variants: {
    variant: {
      default: {
        borderColor: "$borderColor"
      },
      destructive: {
        borderColor: "$red9",
        backgroundColor: "$red2"
      },
      success: {
        borderColor: "$green9",
        backgroundColor: "$green2"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var ToastTitleComponent = styled36(Text15, {
  name: "ToastTitle",
  fontWeight: "600",
  fontSize: "$4",
  color: "$color",
  ellipse: true,
  numberOfLines: 1,
  variants: {
    variant: {
      default: {
        color: "$color"
      },
      destructive: {
        color: "$red11"
      },
      success: {
        color: "$green11"
      }
    }
  }
});
var ToastDescriptionComponent = styled36(Text15, {
  name: "ToastDescription",
  fontSize: "$2",
  color: "$colorPress",
  opacity: 0.9,
  ellipse: true,
  numberOfLines: 1,
  variants: {
    variant: {
      default: {
        color: "$colorPress"
      },
      destructive: {
        color: "$red10"
      },
      success: {
        color: "$green10"
      }
    }
  }
});
var ToastCloseButton = styled36(Button, {
  size: "$2",
  circular: true,
  chromeless: true,
  position: "absolute",
  top: "$3",
  right: "$3",
  opacity: 0.6,
  hoverStyle: { opacity: 1 },
  focusStyle: { opacity: 1, outlineWidth: 2, outlineColor: "$blue8" }
});
var ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState9([]);
  const toast = useCallback5(({ duration = 5e3, isLoading = false, ...props }) => {
    const id = Math.random().toString(36).substring(2, 9);
    const effectiveDuration = isLoading ? 0 : duration;
    const newToast = { ...props, id, duration: effectiveDuration, isLoading };
    setToasts((prev) => [newToast, ...prev]);
    if (effectiveDuration > 0) {
      setTimeout(() => {
        dismiss(id);
      }, effectiveDuration);
    }
  }, []);
  const dismiss = useCallback5((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return /* @__PURE__ */ jsxs28(ToastContext.Provider, { value: { toasts, toast, dismiss }, children: [
    children,
    /* @__PURE__ */ jsx39(Portal4, { children: /* @__PURE__ */ jsx39(ToastViewportFrame, { role: "status", "aria-live": "polite", children: /* @__PURE__ */ jsx39(AnimatePresence, { children: toasts.map((t) => /* @__PURE__ */ jsx39(ToastItem, { toast: t, onDismiss: () => dismiss(t.id) }, t.id)) }) }) })
  ] });
};
var ToastItem = ({ toast, onDismiss }) => {
  if (toast.isLoading) {
    return /* @__PURE__ */ jsx39(
      ToastFrame,
      {
        animation: "quick",
        enterStyle: { opacity: 0, scale: 0.95, y: 10 },
        opacity: 1,
        scale: 1,
        y: 0,
        children: /* @__PURE__ */ jsxs28(YStack18, { flex: 1, gap: "$2", children: [
          /* @__PURE__ */ jsx39(Skeleton, { width: 150, height: 20 }),
          /* @__PURE__ */ jsx39(Skeleton, { width: 250, height: 15 })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxs28(
    ToastFrame,
    {
      variant: toast.variant,
      animation: "quick",
      enterStyle: { opacity: 0, scale: 0.95, y: 10 },
      exitStyle: { opacity: 0, scale: 0.95, y: -10 },
      opacity: 1,
      scale: 1,
      y: 0,
      children: [
        /* @__PURE__ */ jsxs28(YStack18, { flex: 1, gap: "$1", children: [
          toast.title && /* @__PURE__ */ jsx39(ToastTitleComponent, { variant: toast.variant, children: toast.title }),
          toast.description && /* @__PURE__ */ jsx39(ToastDescriptionComponent, { variant: toast.variant, children: toast.description })
        ] }),
        toast.action,
        /* @__PURE__ */ jsx39(ToastCloseButton, { onPress: onDismiss, "aria-label": "Fechar", children: /* @__PURE__ */ jsx39(X3, { size: "$1" }) })
      ]
    }
  );
};
var Toast = ToastFrame;
var ToastViewport = ToastViewportFrame;
var ToastTitle = ToastTitleComponent;
var ToastDescription = ToastDescriptionComponent;

// src/molecules/Tabs.tsx
import { createContext as createContext7, useContext as useContext10 } from "react";
import { Tabs as TamaguiTabs, styled as styled37, YStack as YStack19, XStack as XStack19 } from "tamagui";
import { Fragment as Fragment6, jsx as jsx40, jsxs as jsxs29 } from "react/jsx-runtime";
var TabsContext = createContext7({});
var useTabsContext = () => {
  const context = useContext10(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a Tabs component");
  }
  return context;
};
var TabsFrame = styled37(TamaguiTabs, {
  name: "Tabs",
  flexDirection: "column",
  gap: "$2"
});
var InnerTabsList = styled37(TamaguiTabs.List, {
  name: "TabsList",
  flexDirection: "row",
  gap: "$1",
  flexShrink: 1,
  backgroundColor: "transparent"
});
var StyledTabsTrigger = styled37(TamaguiTabs.Tab, {
  name: "TabsTrigger",
  backgroundColor: "transparent",
  borderRadius: "$3",
  paddingVertical: "$1.5",
  paddingHorizontal: "$3",
  justifyContent: "center",
  alignItems: "center",
  hoverStyle: {
    backgroundColor: "$backgroundHover"
  },
  variants: {
    active: {
      true: {
        backgroundColor: "$background",
        color: "$foreground",
        shadowColor: "$shadowColor",
        shadowRadius: "$xs",
        shadowOpacity: 0.1,
        elevation: 2
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed"
      }
    }
  }
});
var StyledTabsContent = styled37(TamaguiTabs.Content, {
  name: "TabsContent",
  backgroundColor: "$background",
  padding: "$4",
  borderRadius: "$4",
  borderWidth: 1,
  borderColor: "$borderColor",
  key: "tab-content",
  animation: "quick",
  enterStyle: { opacity: 0, scale: 0.95, y: "$2" },
  exitStyle: { opacity: 0, scale: 0.95, y: "$2" },
  opacity: 1,
  scale: 1,
  y: 0
});
var Tabs = ({
  isLoading,
  hasError,
  isDisabled,
  tabs,
  actions,
  children,
  ...props
}) => {
  const content = tabs ? /* @__PURE__ */ jsxs29(Fragment6, { children: [
    /* @__PURE__ */ jsx40(TabsList, { actions, children: tabs.map((tab) => /* @__PURE__ */ jsx40(TabsTrigger, { value: tab.value, children: tab.label }, tab.value)) }),
    tabs.map((tab) => /* @__PURE__ */ jsx40(TabsContent, { value: tab.value, children: tab.content }, tab.value))
  ] }) : children;
  return /* @__PURE__ */ jsx40(TabsContext.Provider, { value: { isLoading, hasError, isDisabled }, children: /* @__PURE__ */ jsx40(TabsFrame, { ...props, children: content }) });
};
var TabsList = ({
  actions,
  children,
  ...props
}) => {
  const { hasError } = useTabsContext();
  return /* @__PURE__ */ jsxs29(
    XStack19,
    {
      backgroundColor: "$muted",
      borderRadius: "$4",
      padding: "$1",
      alignItems: "center",
      gap: "$2",
      borderColor: hasError ? "$destructive" : void 0,
      borderWidth: hasError ? 1 : 0,
      children: [
        /* @__PURE__ */ jsx40(InnerTabsList, { ...props, children }),
        actions && /* @__PURE__ */ jsx40(YStack19, { ml: "auto", children: actions })
      ]
    }
  );
};
var TabsTrigger = (props) => {
  const { isDisabled } = useTabsContext();
  return /* @__PURE__ */ jsx40(StyledTabsTrigger, { disabled: isDisabled, ...props });
};
var TabsContent = (props) => {
  const { isLoading } = useTabsContext();
  return isLoading ? /* @__PURE__ */ jsxs29(YStack19, { space: true, children: [
    /* @__PURE__ */ jsx40(Skeleton, { height: 40 }),
    /* @__PURE__ */ jsx40(Skeleton, { height: 20 }),
    /* @__PURE__ */ jsx40(Skeleton, { height: 20 })
  ] }) : /* @__PURE__ */ jsx40(StyledTabsContent, { ...props });
};

// src/molecules/Calendar/Calendar.tsx
import { useState as useState10 } from "react";
import { useDatePicker } from "@rehookify/datepicker";
import { YStack as YStack20, XStack as XStack20, Text as Text16, styled as styled38 } from "tamagui";
import { ChevronLeft, ChevronRight as ChevronRight2 } from "@tamagui/lucide-icons";
import { jsx as jsx41, jsxs as jsxs30 } from "react/jsx-runtime";
var MONTHS_PT_BR = [
  "Janeiro",
  "Fevereiro",
  "Mar\xE7o",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
var WEEK_DAYS_PT_BR = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xE1b"];
var CalendarContainer = styled38(YStack20, {
  name: "Calendar",
  padding: "$4",
  borderRadius: "$6",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  gap: "$4",
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none"
      }
    },
    hasError: {
      true: {
        borderColor: "$red10",
        borderWidth: 2
      }
    }
  }
});
var CalendarHeader = styled38(XStack20, {
  justifyContent: "space-between",
  alignItems: "center"
});
var CalendarTitle = styled38(Text16, {
  fontSize: "$5",
  fontWeight: "600",
  textAlign: "center",
  flex: 1
});
var CalendarGrid = styled38(YStack20, {
  gap: "$2"
});
var WeekDaysGrid = styled38(XStack20, {
  gap: "$2"
});
var WeekDayText = styled38(Text16, {
  flex: 1,
  textAlign: "center",
  color: "$mutedForeground",
  fontSize: "$2",
  fontWeight: "600"
});
var DaysGrid = styled38(XStack20, {
  flexWrap: "wrap",
  gap: "$2"
});
var DayButtonFrame = styled38(Button, {
  width: 40,
  height: 40,
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "$4",
  borderWidth: 1,
  borderColor: "transparent",
  tag: "button",
  variants: {
    selected: {
      true: {
        backgroundColor: "$primary",
        borderColor: "$primary",
        "&:hover": {
          backgroundColor: "$primary",
          opacity: 0.9
        }
      }
    },
    today: {
      true: {
        borderColor: "$primary"
      }
    },
    outside: {
      true: {
        opacity: 0.5
      }
    },
    disabled: {
      true: {
        opacity: 0.3,
        pointerEvents: "none"
      }
    }
  },
  defaultVariants: {
    variant: "ghost"
  }
});
var DayText = styled38(Text16, {
  fontSize: "$4",
  color: "$foreground",
  variants: {
    selected: {
      true: {
        color: "$primaryForeground"
      }
    }
  }
});
var SkeletonGrid = () => /* @__PURE__ */ jsxs30(YStack20, { gap: "$2", "data-testid": "calendar-skeleton", children: [
  /* @__PURE__ */ jsx41(XStack20, { gap: "$2", justifyContent: "space-around", children: Array.from({ length: 7 }).map((_, i) => /* @__PURE__ */ jsx41(Skeleton, { width: 40, height: 20, borderRadius: "$2" }, i)) }),
  /* @__PURE__ */ jsx41(XStack20, { flexWrap: "wrap", gap: "$2", justifyContent: "space-around", children: Array.from({ length: 35 }).map((_, i) => /* @__PURE__ */ jsx41(Skeleton, { width: 40, height: 40, borderRadius: "$4" }, i)) })
] });
var Calendar = ({
  selectedDate,
  onDateChange,
  minDate,
  maxDate,
  isLoading = false,
  isDisabled = false,
  hasError = false
}) => {
  const [selectedDates, onDatesChange] = useState10(selectedDate ? [selectedDate] : []);
  const dp = useDatePicker({
    selectedDates,
    onDatesChange: (dates) => {
      onDatesChange(dates);
      if (dates[0] && onDateChange) {
        onDateChange(dates[0]);
      }
    },
    calendar: {
      startDay: 0
      // Sunday
    },
    dates: {
      minDate,
      maxDate
    },
    locale: {
      month: MONTHS_PT_BR,
      weekdays: WEEK_DAYS_PT_BR
    }
  });
  const calendars = dp.data?.calendars ?? [];
  const currentMonth = calendars[0];
  if (!currentMonth && !isLoading) {
    return null;
  }
  const { onClick: onPrevClick } = dp.propGetters.subtractOffset({ months: 1 });
  const { onClick: onNextClick } = dp.propGetters.addOffset({ months: 1 });
  return /* @__PURE__ */ jsxs30(CalendarContainer, { disabled: isDisabled, hasError, "data-testid": "calendar-container", "data-has-error": hasError, children: [
    /* @__PURE__ */ jsxs30(CalendarHeader, { children: [
      /* @__PURE__ */ jsx41(Button, { icon: ChevronLeft, circular: true, variant: "ghost", onPress: onPrevClick, disabled: isLoading }),
      /* @__PURE__ */ jsx41(CalendarTitle, { children: isLoading ? /* @__PURE__ */ jsx41(Skeleton, { width: 120, height: 24 }) : currentMonth ? `${currentMonth.month} ${currentMonth.year}` : "" }),
      /* @__PURE__ */ jsx41(Button, { icon: ChevronRight2, circular: true, variant: "ghost", onPress: onNextClick, disabled: isLoading })
    ] }),
    isLoading ? /* @__PURE__ */ jsx41(SkeletonGrid, {}) : currentMonth ? /* @__PURE__ */ jsxs30(CalendarGrid, { "data-testid": "calendar-grid", children: [
      /* @__PURE__ */ jsx41(WeekDaysGrid, { children: WEEK_DAYS_PT_BR.map((day) => /* @__PURE__ */ jsx41(WeekDayText, { children: day.substring(0, 3) }, day)) }),
      /* @__PURE__ */ jsx41(DaysGrid, { children: (currentMonth?.days || []).map((day, index) => {
        const { onClick: onDayClick, ...dayProps } = dp.propGetters.dayButton(day);
        return /* @__PURE__ */ jsx41(
          DayButtonFrame,
          {
            selected: day.selected,
            today: day.now,
            outside: !day.inCurrentMonth,
            disabled: day.disabled,
            onPress: onDayClick,
            ...dayProps,
            children: /* @__PURE__ */ jsx41(DayText, { selected: day.selected, children: day.day })
          },
          index
        );
      }) })
    ] }) : null
  ] });
};

// src/molecules/DatePicker.tsx
import { Calendar as CalendarIcon } from "@tamagui/lucide-icons";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import React40 from "react";
import { Adapt as Adapt2, styled as styled39, XStack as XStack21 } from "tamagui";
import { jsx as jsx42, jsxs as jsxs31 } from "react/jsx-runtime";
var DatePickerFrame = styled39(XStack21, {
  name: "DatePickerFrame",
  alignItems: "center",
  borderRadius: "$md",
  overflow: "hidden",
  width: "100%",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  focusWithinStyle: {
    borderColor: "$ring",
    outlineColor: "$ring",
    outlineStyle: "solid",
    outlineWidth: 2
  },
  variants: {
    variant: {
      filled: {
        backgroundColor: "$muted"
      }
    },
    state: {
      error: {
        borderColor: "$red10"
      },
      success: {
        borderColor: "$green10"
      },
      default: {
        borderColor: "$borderColor"
      }
    },
    disabled: {
      true: {
        opacity: 0.5
      }
    }
  }
});
var DatePicker = React40.forwardRef(
  ({
    date,
    onDateChange,
    variant = "default",
    size = "default",
    loading = false,
    state = "default",
    disabled = false,
    placeholder = "Selecione uma data",
    inputProps,
    buttonProps,
    ...props
  }, ref) => {
    const [open, setOpen] = React40.useState(false);
    const handleDateSelect = (selectedDate) => {
      onDateChange?.(selectedDate);
      setOpen(false);
    };
    if (loading) {
      return /* @__PURE__ */ jsx42(Skeleton, { height: 40, borderRadius: "$md" });
    }
    const trigger = /* @__PURE__ */ jsxs31(DatePickerFrame, { variant, state, disabled, children: [
      /* @__PURE__ */ jsx42(
        Input.Box,
        {
          flex: 1,
          borderWidth: 0,
          backgroundColor: "transparent",
          focusStyle: {
            borderWidth: 0,
            outlineWidth: 0
          },
          children: /* @__PURE__ */ jsx42(
            Input.Field,
            {
              size,
              value: date ? format(date, "PPP", { locale: ptBR }) : "",
              placeholder,
              disabled,
              readOnly: true,
              ...inputProps
            }
          )
        }
      ),
      /* @__PURE__ */ jsx42(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx42(
        Button,
        {
          ref,
          icon: CalendarIcon,
          variant: "ghost",
          size,
          disabled,
          ...buttonProps
        }
      ) })
    ] });
    return /* @__PURE__ */ jsxs31(Popover, { open, onOpenChange: setOpen, ...props, children: [
      trigger,
      /* @__PURE__ */ jsx42(Adapt2, { when: "sm", platform: "touch", children: /* @__PURE__ */ jsxs31(Sheet, { modal: true, dismissOnSnapToBottom: true, children: [
        /* @__PURE__ */ jsx42(Sheet.Frame, { padding: "$4", children: /* @__PURE__ */ jsx42(Adapt2.Contents, {}) }),
        /* @__PURE__ */ jsx42(Sheet.Overlay, {})
      ] }) }),
      /* @__PURE__ */ jsx42(PopoverContent, { p: 0, children: /* @__PURE__ */ jsx42(Calendar, { selectedDate: date, onDateChange: handleDateSelect }) })
    ] });
  }
);
DatePicker.displayName = "DatePicker";

// src/molecules/OTPInput/OTPInput.tsx
import React41 from "react";
import { YStack as YStack22, isWeb as isWeb3, styled as styled40 } from "tamagui";
import { jsx as jsx43 } from "react/jsx-runtime";
var OTPInputFrame = styled40(YStack22, {
  name: "OTPInputFrame",
  flexDirection: "row",
  gap: "$sm",
  alignItems: "center"
});
var OTPCellInput = styled40(Input, {
  name: "OTPInputCell",
  width: 48,
  height: "$2xl",
  textAlign: "center",
  fontSize: "$5",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$md",
  backgroundColor: "$background",
  focusStyle: {
    borderColor: "$ring",
    borderWidth: 2
  },
  variants: {
    hasError: {
      true: {
        borderColor: "$red10",
        focusStyle: {
          borderColor: "$red10",
          borderWidth: 2
        }
      }
    }
  }
});
var sanitizeChar = (value, allowed) => {
  const regex = allowed === "alphanumeric" ? /[a-z0-9]/i : /\d/;
  const match = value.match(regex);
  return match ? match[match.length - 1] : "";
};
var sanitizeToLength = (value, allowed, length) => {
  const regex = allowed === "alphanumeric" ? /[a-z0-9]/gi : /\d/g;
  const matches = value.match(regex);
  if (!matches) return "";
  return matches.join("").slice(0, length);
};
var valueToArray = (value, length) => {
  const chars = value.split("").slice(0, length);
  while (chars.length < length) {
    chars.push("");
  }
  return chars;
};
var OTPInputImpl = React41.forwardRef(
  ({
    length: lengthProp = 6,
    value: valueProp,
    defaultValue: defaultValue2 = "",
    onChange,
    onComplete,
    allowedCharacters = "numeric",
    mask = false,
    autoFocus = false,
    disabled = false,
    isLoading = false,
    hasError = false,
    inputProps,
    ...frameProps
  }, ref) => {
    const length = React41.useMemo(() => Math.max(1, Math.floor(lengthProp)), [lengthProp]);
    const [internalValue, setInternalValue] = React41.useState(
      () => sanitizeToLength(defaultValue2 ?? "", allowedCharacters, length)
    );
    const isControlled = valueProp !== void 0;
    const resolvedValue = React41.useMemo(
      () => sanitizeToLength((valueProp ?? internalValue) || "", allowedCharacters, length),
      [allowedCharacters, internalValue, length, valueProp]
    );
    React41.useEffect(() => {
      if (!isControlled) {
        setInternalValue((prev) => sanitizeToLength(prev, allowedCharacters, length));
      }
    }, [allowedCharacters, isControlled, length]);
    const inputRefs = React41.useRef([]);
    const setValue = React41.useCallback(
      (next) => {
        const sanitized = sanitizeToLength(next, allowedCharacters, length);
        if (!isControlled) {
          setInternalValue(sanitized);
        }
        onChange?.(sanitized);
        return sanitized;
      },
      [allowedCharacters, isControlled, length, onChange]
    );
    const valueArray = React41.useMemo(() => valueToArray(resolvedValue, length), [resolvedValue, length]);
    const focusInput = React41.useCallback((index) => {
      const node = inputRefs.current[index];
      if (node && typeof node.focus === "function") {
        node.focus();
      }
    }, []);
    const selectInput = React41.useCallback((index) => {
      if (!isWeb3) return;
      const node = inputRefs.current[index];
      if (node && typeof node.select === "function") {
        node.select();
      } else if (node && typeof node.setSelectionRange === "function") {
        node.setSelectionRange(0, node.value?.length ?? 0);
      }
    }, []);
    const notifyCompletion = React41.useCallback(
      (chars) => {
        if (chars.every(Boolean)) {
          onComplete?.(chars.join(""));
        }
      },
      [onComplete]
    );
    const setCharacterAtIndex = React41.useCallback(
      (index, char) => {
        const chars = valueToArray(resolvedValue, length);
        chars[index] = char;
        setValue(chars.join(""));
        notifyCompletion(chars);
      },
      [length, notifyCompletion, resolvedValue, setValue]
    );
    const handleInputChange = React41.useCallback(
      (index, rawValue) => {
        const sanitized = sanitizeChar(rawValue.slice(-1), allowedCharacters);
        if (!sanitized) {
          setCharacterAtIndex(index, "");
          return;
        }
        setCharacterAtIndex(index, sanitized);
        if (index < length - 1) {
          focusInput(index + 1);
        }
      },
      [allowedCharacters, focusInput, length, setCharacterAtIndex]
    );
    const handlePaste = React41.useCallback(
      (index, event) => {
        if (!isWeb3) return;
        event.preventDefault?.();
        const data = event.clipboardData?.getData("text") ?? "";
        const sanitized = sanitizeToLength(data, allowedCharacters, length - index);
        if (!sanitized) return;
        const chars = valueToArray(resolvedValue, length);
        sanitized.split("").forEach((char, offset) => {
          if (index + offset < length) {
            chars[index + offset] = char;
          }
        });
        setValue(chars.join(""));
        notifyCompletion(chars);
        const nextIndex = Math.min(index + sanitized.length, length - 1);
        focusInput(nextIndex);
        selectInput(nextIndex);
      },
      [allowedCharacters, focusInput, length, notifyCompletion, resolvedValue, selectInput, setValue]
    );
    const handleKeyDown = React41.useCallback(
      (index, event) => {
        if (event.key === "Backspace") {
          const hasValue = valueArray[index];
          if (hasValue) {
            event.preventDefault();
            setCharacterAtIndex(index, "");
          } else if (index > 0) {
            event.preventDefault();
            focusInput(index - 1);
            setCharacterAtIndex(index - 1, "");
          }
        }
        if (event.key === "ArrowLeft" && index > 0) {
          event.preventDefault();
          focusInput(index - 1);
        }
        if (event.key === "ArrowRight" && index < length - 1) {
          event.preventDefault();
          focusInput(index + 1);
        }
      },
      [focusInput, length, setCharacterAtIndex, valueArray]
    );
    React41.useEffect(() => {
      if (autoFocus) {
        focusInput(0);
        selectInput(0);
      }
    }, [autoFocus, focusInput, selectInput]);
    if (isLoading) {
      return /* @__PURE__ */ jsx43(OTPInputFrame, { ref, ...frameProps, children: Array.from({ length }, (_, index) => /* @__PURE__ */ jsx43(Skeleton, { width: 48, height: 48 }, `otp-skeleton-${index}`)) });
    }
    return /* @__PURE__ */ jsx43(OTPInputFrame, { ref, ...frameProps, children: valueArray.map((char, index) => /* @__PURE__ */ jsx43(
      OTPCellInput,
      {
        ref: (node) => {
          inputRefs.current[index] = node;
        },
        value: char,
        hasError,
        "aria-label": `D\xEDgito ${index + 1} do c\xF3digo de verifica\xE7\xE3o`,
        onChange: (event) => {
          const e = event;
          handleInputChange(index, e.target?.value ?? "");
        },
        onChangeText: (text) => handleInputChange(index, text ?? ""),
        ...isWeb3 ? {
          onKeyDown: (event) => handleKeyDown(index, event),
          onPaste: (event) => handlePaste(index, event),
          type: mask ? "password" : "text",
          inputMode: allowedCharacters === "numeric" ? "numeric" : "text"
        } : {
          keyboardType: allowedCharacters === "numeric" ? "number-pad" : "default",
          secureTextEntry: mask,
          editable: !disabled
        },
        onFocus: () => selectInput(index),
        autoFocus: autoFocus && index === 0,
        autoCorrect: false,
        autoCapitalize: "none",
        disabled: isWeb3 ? disabled : void 0,
        ...inputProps
      },
      `otp-input-${index}`
    )) });
  }
);
OTPInputImpl.displayName = "OTPInput";
var OTPInput = withErrorLogging("OTPInput", OTPInputImpl);

// src/molecules/Pagination/Pagination.tsx
import {
  ChevronLeft as ChevronLeft2,
  ChevronRight as ChevronRight3,
  ChevronsLeft,
  ChevronsRight
} from "@tamagui/lucide-icons";
import { useMemo as useMemo3 } from "react";
import { Text as Text17, VisuallyHidden, XStack as XStack22, styled as styled41 } from "tamagui";
import { jsx as jsx44, jsxs as jsxs32 } from "react/jsx-runtime";
var PaginationRoot = styled41(XStack22, {
  name: "PaginationRoot",
  alignItems: "center",
  gap: "$sm",
  variants: {
    hasError: {
      true: {
        borderWidth: 1,
        borderColor: "$red10",
        borderRadius: "$radius",
        padding: "$2"
      }
    }
  }
});
var PaginationButton = styled41(Button, {
  name: "PaginationButton",
  unstyled: true,
  borderRadius: "$full",
  borderWidth: 1,
  borderColor: "$borderColor",
  minWidth: 40,
  height: "$xl",
  paddingHorizontal: "$md",
  alignItems: "center",
  justifyContent: "center",
  color: "$foreground",
  backgroundColor: "transparent",
  hoverStyle: {
    backgroundColor: "$muted"
  },
  pressStyle: {
    backgroundColor: "$muted",
    opacity: 0.85
  },
  disabledStyle: {
    opacity: 0.4,
    backgroundColor: "transparent"
  },
  variants: {
    active: {
      true: {
        backgroundColor: "$primary",
        color: "$background",
        borderColor: "$primary",
        hoverStyle: {
          backgroundColor: "$primaryHover"
        }
      }
    },
    size: {
      sm: {
        height: "$lg",
        minWidth: 32,
        paddingHorizontal: "$sm",
        fontSize: "$2"
      },
      md: {
        height: "$xl",
        fontSize: "$3"
      },
      lg: {
        height: "$2xl",
        fontSize: "$4"
      }
    }
  },
  defaultVariants: {
    size: "md",
    active: false
  }
});
var PaginationEllipsis = styled41(Text17, {
  name: "PaginationEllipsis",
  color: "$mutedForeground",
  px: "$sm",
  fontSize: "$3"
});
var DOTS = "DOTS";
var range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => start + index);
};
var usePaginationRange = ({ currentPage, totalPages, siblingCount }) => {
  return useMemo3(() => {
    if (totalPages <= 0) return [];
    const totalPageNumbers = siblingCount * 2 + 5;
    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPages];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
    return range(1, totalPages);
  }, [currentPage, siblingCount, totalPages]);
};
var Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showEdges = true,
  disabled = false,
  isLoading = false,
  hasError = false,
  size = "md",
  ariaLabel = "Pagina\xE7\xE3o",
  leftSlot,
  rightSlot
}) => {
  const paginationRange = usePaginationRange({
    currentPage,
    totalPages,
    siblingCount
  });
  const handleChange = (page) => {
    if (disabled || isLoading) return;
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange?.(page);
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxs32(
      XStack22,
      {
        alignItems: "center",
        gap: "$sm",
        "aria-label": "Carregando pagina\xE7\xE3o",
        children: [
          /* @__PURE__ */ jsx44(
            Skeleton,
            {
              width: 32,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ jsx44(
            Skeleton,
            {
              width: 32,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ jsx44(
            Skeleton,
            {
              width: 40,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ jsx44(
            Skeleton,
            {
              width: 40,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ jsx44(
            Skeleton,
            {
              width: 40,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ jsx44(
            Skeleton,
            {
              width: 32,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ jsx44(
            Skeleton,
            {
              width: 32,
              height: 32,
              borderRadius: "$full"
            }
          )
        ]
      }
    );
  }
  if (totalPages <= 1 || paginationRange.length === 0) {
    return null;
  }
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  return /* @__PURE__ */ jsxs32(
    PaginationRoot,
    {
      role: "navigation",
      "aria-label": ariaLabel,
      hasError,
      children: [
        leftSlot,
        showEdges && /* @__PURE__ */ jsxs32(
          PaginationButton,
          {
            size,
            disabled: disabled || isFirstPage,
            "aria-label": "Primeira p\xE1gina",
            onPress: () => handleChange(1),
            children: [
              /* @__PURE__ */ jsx44(VisuallyHidden, { children: "Primeira p\xE1gina" }),
              /* @__PURE__ */ jsx44(ChevronsLeft, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxs32(
          PaginationButton,
          {
            size,
            disabled: disabled || isFirstPage,
            "aria-label": "P\xE1gina anterior",
            onPress: () => handleChange(currentPage - 1),
            children: [
              /* @__PURE__ */ jsx44(VisuallyHidden, { children: "P\xE1gina anterior" }),
              /* @__PURE__ */ jsx44(ChevronLeft2, {})
            ]
          }
        ),
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return /* @__PURE__ */ jsx44(
              PaginationEllipsis,
              {
                "aria-hidden": true,
                children: "\u2026"
              },
              `dots-${index}`
            );
          }
          const pageValue = pageNumber;
          const isActive = pageValue === currentPage;
          return /* @__PURE__ */ jsx44(
            PaginationButton,
            {
              size,
              active: isActive,
              "aria-current": isActive ? "page" : void 0,
              "aria-label": `Ir para a p\xE1gina ${pageValue}`,
              disabled,
              onPress: () => handleChange(pageValue),
              children: pageValue
            },
            pageValue
          );
        }),
        /* @__PURE__ */ jsxs32(
          PaginationButton,
          {
            size,
            disabled: disabled || isLastPage,
            "aria-label": "Pr\xF3xima p\xE1gina",
            onPress: () => handleChange(currentPage + 1),
            children: [
              /* @__PURE__ */ jsx44(VisuallyHidden, { children: "Pr\xF3xima p\xE1gina" }),
              /* @__PURE__ */ jsx44(ChevronRight3, {})
            ]
          }
        ),
        showEdges && /* @__PURE__ */ jsxs32(
          PaginationButton,
          {
            size,
            disabled: disabled || isLastPage,
            "aria-label": "\xDAltima p\xE1gina",
            onPress: () => handleChange(totalPages),
            children: [
              /* @__PURE__ */ jsx44(VisuallyHidden, { children: "\xDAltima p\xE1gina" }),
              /* @__PURE__ */ jsx44(ChevronsRight, {})
            ]
          }
        ),
        rightSlot
      ]
    }
  );
};
Pagination.displayName = "Pagination";

// src/molecules/Breadcrumb/Breadcrumb.tsx
import { Anchor, Text as Text18, XStack as XStack23, styled as styled42 } from "tamagui";
import { jsx as jsx45, jsxs as jsxs33 } from "react/jsx-runtime";
var BreadcrumbRoot = styled42(XStack23, {
  name: "BreadcrumbRoot",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$4",
  width: "100%"
});
var BreadcrumbList = styled42(XStack23, {
  name: "BreadcrumbList",
  gap: "$sm",
  alignItems: "center",
  flexWrap: "nowrap",
  overflow: "hidden"
});
var BreadcrumbItemWrapper = styled42(XStack23, {
  name: "BreadcrumbItem",
  alignItems: "center",
  gap: "$sm"
});
var BreadcrumbSeparator = styled42(Text18, {
  name: "BreadcrumbSeparator",
  color: "$mutedForeground",
  fontSize: "$2"
});
var BreadcrumbLink = styled42(Anchor, {
  name: "BreadcrumbLink",
  color: "$foreground",
  fontWeight: "500",
  hoverStyle: {
    color: "$primary"
  },
  ellipse: true
});
var BreadcrumbButton = styled42(Button, {
  name: "BreadcrumbButton",
  unstyled: true,
  padding: 0,
  minWidth: 0,
  backgroundColor: "transparent",
  hoverStyle: {
    opacity: 0.8
  }
});
var BreadcrumbButtonLabel = styled42(Text18, {
  name: "BreadcrumbButtonLabel",
  color: "$foreground",
  fontWeight: "500",
  ellipse: true
});
var BreadcrumbCurrent = styled42(Text18, {
  name: "BreadcrumbCurrent",
  color: "$mutedForeground",
  fontWeight: "600",
  ellipse: true
});
var Breadcrumb = ({
  items,
  separator = "/",
  ariaLabel = "Navega\xE7\xE3o",
  isLoading = false,
  rightSlot = null
}) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx45(BreadcrumbRoot, { "data-testid": "breadcrumb-skeleton", children: /* @__PURE__ */ jsxs33(BreadcrumbList, { children: [
      /* @__PURE__ */ jsx45(Skeleton, { height: 20, width: 80 }),
      /* @__PURE__ */ jsx45(Skeleton, { height: 20, width: 100 }),
      /* @__PURE__ */ jsx45(Skeleton, { height: 20, width: 120 })
    ] }) });
  }
  if (!items || items.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs33(BreadcrumbRoot, { role: "navigation", "aria-label": ariaLabel, children: [
    /* @__PURE__ */ jsx45(BreadcrumbList, { role: "list", children: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const linkRel = item.rel ?? (item.target === "_blank" ? "noreferrer noopener" : void 0);
      return /* @__PURE__ */ jsxs33(BreadcrumbItemWrapper, { role: "listitem", children: [
        isLast ? /* @__PURE__ */ jsx45(BreadcrumbCurrent, { "aria-current": "page", children: item.label }) : item.href ? /* @__PURE__ */ jsx45(
          BreadcrumbLink,
          {
            href: item.href,
            target: item.target,
            rel: linkRel,
            onPress: item.onPress,
            children: item.label
          }
        ) : /* @__PURE__ */ jsx45(BreadcrumbButton, { onPress: item.onPress, children: /* @__PURE__ */ jsx45(BreadcrumbButtonLabel, { children: item.label }) }),
        !isLast && /* @__PURE__ */ jsx45(BreadcrumbSeparator, { "aria-hidden": true, children: separator })
      ] }, `${item.label}-${index}`);
    }) }),
    rightSlot && /* @__PURE__ */ jsx45(XStack23, { children: rightSlot })
  ] });
};
Breadcrumb.displayName = "Breadcrumb";

// src/molecules/PageHeader/PageHeader.tsx
import React43 from "react";
import { styled as styled43, XStack as XStack24, YStack as YStack23, H3 as H32, Paragraph as Paragraph5 } from "tamagui";
import { jsx as jsx46, jsxs as jsxs34 } from "react/jsx-runtime";
var PageHeaderFrame = styled43(YStack23, {
  name: "PageHeader",
  gap: "$4",
  paddingBottom: "$4",
  width: "100%"
});
var HeaderTop = styled43(XStack24, {
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
  gap: "$4"
});
var HeaderContent = styled43(YStack23, {
  gap: "$1",
  flex: 1
});
var PageTitle = styled43(H32, {
  color: "$foreground"
});
var PageDescription = styled43(Paragraph5, {
  color: "$mutedForeground"
});
var PageActions = styled43(XStack24, {
  gap: "$2",
  alignItems: "center"
});
var PageHeader = React43.forwardRef(
  ({ title, description, actions, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs34(PageHeaderFrame, { ref, ...props, children: [
      /* @__PURE__ */ jsxs34(HeaderTop, { children: [
        /* @__PURE__ */ jsxs34(HeaderContent, { children: [
          /* @__PURE__ */ jsx46(PageTitle, { children: title }),
          description && /* @__PURE__ */ jsx46(PageDescription, { children: description })
        ] }),
        actions && /* @__PURE__ */ jsx46(PageActions, { children: actions })
      ] }),
      children,
      /* @__PURE__ */ jsx46(Separator, {})
    ] });
  }
);
PageHeader.displayName = "PageHeader";

// src/molecules/NotificationCard/NotificationCard.tsx
import React44 from "react";
import { styled as styled44, XStack as XStack25, YStack as YStack24, Paragraph as Paragraph6 } from "tamagui";
import { Bell, X as X4 } from "@tamagui/lucide-icons";
import { jsx as jsx47, jsxs as jsxs35 } from "react/jsx-runtime";
var NotificationCardFrame = styled44(Card, {
  name: "NotificationCard",
  padding: "$4",
  width: "100%",
  flexDirection: "row",
  gap: "$3",
  alignItems: "flex-start",
  position: "relative"
});
var NotificationContent = styled44(YStack24, {
  flex: 1,
  gap: "$1"
});
var NotificationTitle = styled44(Paragraph6, {
  fontWeight: "600",
  fontSize: "$3",
  color: "$foreground"
});
var NotificationDescription = styled44(Paragraph6, {
  fontSize: "$3",
  color: "$mutedForeground",
  lineHeight: "$4"
});
var NotificationTime = styled44(Paragraph6, {
  fontSize: "$2",
  color: "$mutedForeground",
  marginTop: "$1"
});
var UnreadIndicator = styled44(XStack25, {
  width: 8,
  height: 8,
  borderRadius: "$full",
  backgroundColor: "$primary",
  position: "absolute",
  top: "$4",
  right: "$4"
});
var NotificationCard = React44.forwardRef(
  ({ title, description, time, unread, avatarSrc, avatarFallback, onDismiss, onPress, ...props }, ref) => {
    return /* @__PURE__ */ jsxs35(NotificationCardFrame, { ref, ...props, onPress, hoverStyle: { backgroundColor: "$muted" }, pressStyle: { opacity: 0.8 }, children: [
      unread && /* @__PURE__ */ jsx47(UnreadIndicator, {}),
      /* @__PURE__ */ jsxs35(Avatar, { size: "$4", circular: true, children: [
        /* @__PURE__ */ jsx47(Avatar.Image, { src: avatarSrc }),
        /* @__PURE__ */ jsx47(Avatar.Fallback, { backgroundColor: "$muted", alignItems: "center", justifyContent: "center", children: avatarFallback ? /* @__PURE__ */ jsx47(Paragraph6, { children: avatarFallback }) : /* @__PURE__ */ jsx47(Bell, { size: 16, color: "$mutedForeground" }) })
      ] }),
      /* @__PURE__ */ jsxs35(NotificationContent, { children: [
        /* @__PURE__ */ jsx47(NotificationTitle, { children: title }),
        /* @__PURE__ */ jsx47(NotificationDescription, { children: description }),
        time && /* @__PURE__ */ jsx47(NotificationTime, { children: time })
      ] }),
      onDismiss && /* @__PURE__ */ jsx47(
        Button,
        {
          size: "$2",
          variant: "ghost",
          borderRadius: "$full",
          icon: X4,
          onPress: (e) => {
            e.stopPropagation();
            onDismiss();
          }
        }
      )
    ] });
  }
);
NotificationCard.displayName = "NotificationCard";

// src/molecules/ComponentErrorBoundary.tsx
import { AlertTriangle as AlertTriangle2 } from "@tamagui/lucide-icons";
import { Component } from "react";
import { Button as Button5, H4 as H42, Paragraph as Paragraph7, Separator as Separator4, YStack as YStack25 } from "tamagui";
import { Fragment as Fragment7, jsx as jsx48, jsxs as jsxs36 } from "react/jsx-runtime";
var initialState = {
  hasError: false,
  error: void 0
};
var ErrorBoundary = class extends Component {
  state = initialState;
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    logComponentError(this.props.componentName, error, errorInfo.componentStack);
  }
  resetBoundary = () => {
    this.props.onReset?.();
    this.setState(initialState);
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return /* @__PURE__ */ jsx48(Fragment7, { children: this.props.fallback });
      }
      return /* @__PURE__ */ jsxs36(
        YStack25,
        {
          gap: "$4",
          p: "$6",
          m: "$4",
          borderRadius: "$4",
          backgroundColor: "$background",
          borderColor: "$borderColor",
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          testID: "component-error-boundary-fallback",
          children: [
            /* @__PURE__ */ jsx48(AlertTriangle2, { size: "$3", color: "$red10" }),
            /* @__PURE__ */ jsxs36(YStack25, { gap: "$2", alignItems: "center", children: [
              /* @__PURE__ */ jsx48(H42, { color: "$red10", children: "Algo deu errado" }),
              /* @__PURE__ */ jsx48(Paragraph7, { textAlign: "center", color: "$gray11", children: "Ocorreu um erro inesperado neste componente. Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte." })
            ] }),
            typeof process !== "undefined" && process.env.NODE_ENV === "development" && this.state.error && /* @__PURE__ */ jsx48(
              YStack25,
              {
                gap: "$2",
                p: "$3",
                borderRadius: "$2",
                backgroundColor: "$backgroundPress",
                alignSelf: "stretch",
                children: /* @__PURE__ */ jsx48(Paragraph7, { size: "$2", fontFamily: "$mono", children: this.state.error.message })
              }
            ),
            this.props.onReset && /* @__PURE__ */ jsxs36(Fragment7, { children: [
              /* @__PURE__ */ jsx48(Separator4, {}),
              /* @__PURE__ */ jsx48(Button5, { theme: "primary", onPress: this.resetBoundary, children: "Tentar Novamente" })
            ] })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsx48(Fragment7, { children: this.props.children });
  }
};
function withErrorBoundary(WrappedComponent, errorBoundaryProps) {
  const ComponentWithErrorBoundary = (props) => /* @__PURE__ */ jsx48(ErrorBoundary, { ...errorBoundaryProps, children: /* @__PURE__ */ jsx48(WrappedComponent, { ...props }) });
  const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
  ComponentWithErrorBoundary.displayName = `withErrorBoundary(${componentName})`;
  return ComponentWithErrorBoundary;
}

// src/molecules/ContextMenu/ContextMenu.tsx
import React46 from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check as Check4, ChevronRight as ChevronRight4, Circle as Circle2 } from "@tamagui/lucide-icons";
import { styled as styled45, XStack as XStack26, Text as Text19, YStack as YStack26 } from "tamagui";
import { jsx as jsx49, jsxs as jsxs37 } from "react/jsx-runtime";
var StyledContent = styled45(ContextMenuPrimitive.Content, {
  name: "ContextMenuContent",
  minWidth: 220,
  zIndex: 200,
  overflow: "hidden",
  padding: "$1",
  backgroundColor: "$background",
  borderRadius: "$4",
  borderWidth: 1,
  borderColor: "$borderColor",
  shadowColor: "$shadowColor",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 12
});
var ContextMenuContent = React46.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ jsx49(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx49(StyledContent, { ref, ...props, children }) }));
ContextMenuContent.displayName = "ContextMenuContent";
var StyledItem = styled45(ContextMenuPrimitive.Item, {
  name: "ContextMenuItem",
  fontSize: "$2",
  lineHeight: "$2",
  borderRadius: "$2",
  display: "flex",
  alignItems: "center",
  position: "relative",
  padding: "$2",
  paddingLeft: "$6",
  cursor: "pointer",
  outline: "none",
  userSelect: "none",
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none"
      }
    }
  },
  hoverStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  focusStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  }
});
var StyledCheckboxItem = styled45(ContextMenuPrimitive.CheckboxItem, {
  name: "ContextMenuCheckboxItem",
  fontSize: "$2",
  lineHeight: "$2",
  borderRadius: "$2",
  display: "flex",
  alignItems: "center",
  position: "relative",
  padding: "$2",
  paddingLeft: "$6",
  cursor: "pointer",
  outline: "none",
  userSelect: "none",
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none"
      }
    }
  },
  hoverStyle: {
    backgroundColor: "$accent"
  },
  focusStyle: {
    backgroundColor: "$accent"
  }
});
var StyledRadioItem = styled45(ContextMenuPrimitive.RadioItem, {
  name: "ContextMenuRadioItem",
  fontSize: "$2",
  lineHeight: "$2",
  borderRadius: "$2",
  display: "flex",
  alignItems: "center",
  position: "relative",
  padding: "$2",
  paddingLeft: "$6",
  cursor: "pointer",
  outline: "none",
  userSelect: "none",
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none"
      }
    }
  },
  hoverStyle: {
    backgroundColor: "$accent"
  },
  focusStyle: {
    backgroundColor: "$accent"
  }
});
var StyledSubTrigger = styled45(ContextMenuPrimitive.SubTrigger, {
  name: "ContextMenuSubTrigger",
  fontSize: "$2",
  lineHeight: "$2",
  borderRadius: "$2",
  display: "flex",
  alignItems: "center",
  position: "relative",
  padding: "$2",
  paddingLeft: "$6",
  cursor: "pointer",
  outline: "none",
  userSelect: "none",
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none"
      }
    }
  },
  hoverStyle: {
    backgroundColor: "$accent"
  },
  focusStyle: {
    backgroundColor: "$accent"
  }
});
var StyledSubContent = styled45(ContextMenuPrimitive.SubContent, {
  name: "ContextMenuSubContent",
  minWidth: 220,
  zIndex: 200,
  overflow: "hidden",
  padding: "$1",
  backgroundColor: "$background",
  borderRadius: "$4",
  borderWidth: 1,
  borderColor: "$borderColor",
  shadowColor: "$shadowColor",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 12
});
var ContextMenuSubContent = React46.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ jsx49(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx49(StyledSubContent, { ref, ...props, children }) }));
ContextMenuSubContent.displayName = "ContextMenuSubContent";
var ContextMenuItemIndicator = styled45(ContextMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: "$2",
  width: "$3.5",
  height: "$3.5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
var StyledLabel = styled45(ContextMenuPrimitive.Label, {
  name: "ContextMenuLabel",
  padding: "$2",
  paddingLeft: "$6",
  fontSize: "$2",
  lineHeight: "$2.5",
  fontWeight: "600",
  color: "$color"
});
var StyledSeparator = styled45(ContextMenuPrimitive.Separator, {
  name: "ContextMenuSeparator",
  height: 1,
  margin: "$1",
  backgroundColor: "$borderColor"
});
var ContextMenuShortcut = styled45(Text19, {
  name: "ContextMenuShortcut",
  marginLeft: "auto",
  fontSize: "$2",
  letterSpacing: 0.5,
  color: "$color",
  opacity: 0.6
});
var ContextMenuComponent = ({
  children,
  items,
  isLoading,
  isDisabled,
  hasError,
  radioGroupValue,
  onRadioGroupChange,
  ...props
}) => {
  const renderItems = (menuItems) => menuItems.map((item, index) => {
    const key = `context-menu-item-${item.label}-${index}`;
    if (item.isSeparator) {
      return /* @__PURE__ */ jsx49(StyledSeparator, {}, key);
    }
    if (item.isLabel) {
      return /* @__PURE__ */ jsx49(StyledLabel, { children: /* @__PURE__ */ jsx49(Text19, { ellipse: true, children: item.label }) }, key);
    }
    if (item.items && item.items.length > 0) {
      return /* @__PURE__ */ jsxs37(ContextMenuPrimitive.Sub, { children: [
        /* @__PURE__ */ jsxs37(StyledSubTrigger, { disabled: item.disabled, children: [
          /* @__PURE__ */ jsxs37(XStack26, { gap: "$2", alignItems: "center", children: [
            item.icon,
            /* @__PURE__ */ jsx49(Text19, { ellipse: true, children: item.label })
          ] }),
          /* @__PURE__ */ jsx49(ChevronRight4, { size: "$1", marginLeft: "auto" })
        ] }),
        /* @__PURE__ */ jsx49(ContextMenuSubContent, { children: renderItems(item.items) })
      ] }, key);
    }
    if (item.isCheckbox) {
      return /* @__PURE__ */ jsxs37(
        StyledCheckboxItem,
        {
          checked: item.checked,
          onCheckedChange: item.onCheckedChange,
          disabled: item.disabled,
          children: [
            /* @__PURE__ */ jsx49(ContextMenuItemIndicator, { children: /* @__PURE__ */ jsx49(Check4, { size: "$1" }) }),
            /* @__PURE__ */ jsx49(Text19, { ellipse: true, children: item.label })
          ]
        },
        key
      );
    }
    if (item.isRadio) {
      return /* @__PURE__ */ jsxs37(StyledRadioItem, { value: item.value, disabled: item.disabled, children: [
        /* @__PURE__ */ jsx49(ContextMenuItemIndicator, { children: /* @__PURE__ */ jsx49(Circle2, { size: "$1" }) }),
        /* @__PURE__ */ jsx49(Text19, { ellipse: true, children: item.label })
      ] }, key);
    }
    return /* @__PURE__ */ jsxs37(StyledItem, { disabled: item.disabled, onSelect: item.onSelect, children: [
      /* @__PURE__ */ jsxs37(XStack26, { gap: "$2", alignItems: "center", children: [
        item.icon,
        /* @__PURE__ */ jsx49(Text19, { ellipse: true, children: item.label })
      ] }),
      item.shortcut && /* @__PURE__ */ jsx49(ContextMenuShortcut, { children: item.shortcut })
    ] }, key);
  });
  const radioItems = items.filter((item) => item.isRadio);
  return /* @__PURE__ */ jsxs37(ContextMenuPrimitive.Root, { ...props, children: [
    /* @__PURE__ */ jsx49(ContextMenuPrimitive.Trigger, { asChild: true, disabled: isDisabled, children: React46.cloneElement(children, {
      ...children.props,
      disabled: isDisabled,
      ...hasError && {
        borderColor: "$red10",
        borderWidth: 2
      }
    }) }),
    /* @__PURE__ */ jsx49(ContextMenuContent, { children: isLoading ? /* @__PURE__ */ jsxs37(YStack26, { gap: "$2", padding: "$2", children: [
      /* @__PURE__ */ jsx49(Skeleton, { height: 20 }),
      /* @__PURE__ */ jsx49(Skeleton, { height: 20 }),
      /* @__PURE__ */ jsx49(Skeleton, { height: 20 })
    ] }) : radioItems.length > 0 ? /* @__PURE__ */ jsx49(ContextMenuPrimitive.RadioGroup, { value: radioGroupValue, onValueChange: onRadioGroupChange, children: renderItems(items) }) : renderItems(items) })
  ] });
};
ContextMenuComponent.displayName = "ContextMenu";
var ContextMenu = ContextMenuComponent;

// src/molecules/NavigationMenu.tsx
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { styled as styled46, YStack as YStack27, XStack as XStack27 } from "tamagui";
import { jsx as jsx50, jsxs as jsxs38 } from "react/jsx-runtime";
var NavigationMenu = styled46(NavigationMenuPrimitive.Root, {
  name: "NavigationMenu",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  variants: {
    hasError: {
      true: {
        borderColor: "$red10",
        borderWidth: 1,
        borderRadius: "$4"
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
        pointerEvents: "none"
      }
    }
  }
});
var NavigationMenuList = styled46(NavigationMenuPrimitive.List, {
  name: "NavigationMenuList",
  display: "flex",
  gap: "$2",
  m: 0,
  px: "$1",
  py: "$1",
  borderRadius: "$lg",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor"
});
var NavigationMenuItem = styled46(NavigationMenuPrimitive.Item, {
  name: "NavigationMenuItem",
  tag: "li"
});
var NavigationMenuTrigger = styled46(NavigationMenuPrimitive.Trigger, {
  name: "NavigationMenuTrigger",
  ellipse: true,
  borderRadius: "$md",
  paddingHorizontal: "$4",
  paddingVertical: "$2",
  color: "$foreground",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "transparent",
  transition: "all 150ms ease",
  hoverStyle: {
    backgroundColor: "$muted"
  },
  pressStyle: {
    backgroundColor: "$muted"
  },
  focusVisibleStyle: {
    borderColor: "$primary"
  }
});
var NavigationMenuContent = styled46(NavigationMenuPrimitive.Content, {
  name: "NavigationMenuContent",
  position: "absolute",
  top: "calc(100% + 0.5rem)",
  left: 0,
  backgroundColor: "$background",
  borderRadius: "$xl",
  borderWidth: 1,
  borderColor: "$borderColor",
  padding: "$4",
  minWidth: 320,
  zIndex: 20
});
var NavigationMenuLink = styled46(NavigationMenuPrimitive.Link, {
  name: "NavigationMenuLink",
  ellipse: true,
  display: "block",
  borderRadius: "$lg",
  padding: "$4",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$muted"
  },
  focusVisibleStyle: {
    outlineWidth: 2,
    outlineStyle: "solid",
    outlineColor: "$primary"
  }
});
var NavigationMenuIndicator = styled46(NavigationMenuPrimitive.Indicator, {
  name: "NavigationMenuIndicator",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  transition: "width, transform 200ms ease"
});
var IndicatorArrow = styled46(YStack27, {
  width: 20,
  height: 20,
  backgroundColor: "$background",
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderTopWidth: 1,
  borderColor: "$borderColor",
  transform: "rotate(45deg)",
  marginTop: -8
});
var NavigationMenuViewport = styled46(NavigationMenuPrimitive.Viewport, {
  name: "NavigationMenuViewport",
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  backgroundColor: "$background",
  borderRadius: "$xl",
  borderWidth: 1,
  borderColor: "$borderColor",
  marginTop: "$2",
  overflow: "hidden"
});
var NavigationMenuComponent = ({
  children,
  isLoading,
  rightSlot,
  ...props
}) => {
  if (isLoading) {
    return /* @__PURE__ */ jsxs38(XStack27, { alignItems: "center", gap: "$4", children: [
      /* @__PURE__ */ jsx50(Skeleton, { height: 32, width: 120 }),
      /* @__PURE__ */ jsx50(Skeleton, { height: 32, width: 120 }),
      /* @__PURE__ */ jsx50(Skeleton, { height: 32, width: 120 })
    ] });
  }
  return /* @__PURE__ */ jsx50(NavigationMenu, { ...props, children: /* @__PURE__ */ jsxs38(NavigationMenuList, { children: [
    children,
    rightSlot
  ] }) });
};

// src/molecules/Menubar/Menubar.tsx
import {
  Root as Root5,
  Menu,
  Group as Group2,
  Portal as Portal6,
  Trigger as Trigger5,
  Content as Content5,
  Item as Item4,
  CheckboxItem as CheckboxItem3,
  ItemIndicator as ItemIndicator3,
  RadioItem as RadioItem3,
  Label as Label6,
  Separator as Separator6,
  SubTrigger as SubTrigger3,
  SubContent as SubContent3,
  Sub as Sub3,
  RadioGroup as RadioGroup4
} from "@radix-ui/react-menubar";
import { Check as Check5, ChevronRight as ChevronRight5, Circle as Circle3 } from "@tamagui/lucide-icons";
import React47 from "react";
import { styled as styled47, Paragraph as Paragraph8, YStack as YStack28 } from "tamagui";
import { Spacer } from "tamagui";
import { Fragment as Fragment8, jsx as jsx51, jsxs as jsxs39 } from "react/jsx-runtime";
var MenubarFrame = styled47(Root5, {
  name: "Menubar",
  display: "flex",
  flexDirection: "row",
  height: "auto",
  alignItems: "center",
  gap: "$1",
  borderRadius: "$md",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  padding: "$1"
});
var MenubarMenu = Menu;
var MenubarGroup = Group2;
var MenubarPortal = Portal6;
var MenubarTriggerFrame = styled47(Trigger5, {
  name: "MenubarTrigger",
  display: "flex",
  alignItems: "center",
  paddingVertical: "$1.5",
  paddingHorizontal: "$3",
  borderRadius: "$sm",
  outlineWidth: 0,
  cursor: "default",
  userSelect: "none",
  fontSize: "$3",
  fontWeight: "500",
  color: "$foreground",
  backgroundColor: "transparent",
  borderWidth: 0,
  hoverStyle: {
    backgroundColor: "$muted",
    color: "$foreground"
  },
  focusStyle: {
    backgroundColor: "$muted",
    color: "$foreground"
  },
  pressStyle: {
    backgroundColor: "$muted",
    color: "$foreground"
  },
  "$platform-web": {
    '&[data-state="open"]': {
      backgroundColor: "$muted",
      color: "$foreground"
    }
  }
});
var MenubarTrigger = React47.forwardRef((props, ref) => /* @__PURE__ */ jsx51(MenubarTriggerFrame, { ref, ...props }));
MenubarTrigger.displayName = Trigger5.displayName;
var MenubarContentFrame = styled47(Content5, {
  name: "MenubarContent",
  minWidth: 192,
  overflow: "hidden",
  borderRadius: "$md",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  padding: "$1",
  zIndex: 50,
  shadowColor: "$shadowColor",
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  display: "flex",
  flexDirection: "column",
  gap: "$1"
});
var MenubarContent = React47.forwardRef(({ align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx51(Portal6, { children: /* @__PURE__ */ jsx51(
  MenubarContentFrame,
  {
    ref,
    align,
    alignOffset,
    sideOffset,
    ...props
  }
) }));
MenubarContent.displayName = Content5.displayName;
var MenubarItemFrame = styled47(Item4, {
  name: "MenubarItem",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "$sm",
  paddingVertical: "$1.5",
  paddingHorizontal: "$2",
  outlineWidth: 0,
  userSelect: "none",
  cursor: "default",
  fontSize: "$3",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  focusStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  "$platform-web": {
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5
    }
  }
});
var MenubarItem = React47.forwardRef(({ inset, ...props }, ref) => /* @__PURE__ */ jsx51(
  MenubarItemFrame,
  {
    ref,
    paddingLeft: inset ? "$8" : "$2",
    ...props
  }
));
MenubarItem.displayName = Item4.displayName;
var MenubarCheckboxItemFrame = styled47(CheckboxItem3, {
  name: "MenubarCheckboxItem",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "$sm",
  paddingVertical: "$1.5",
  paddingLeft: "$8",
  paddingRight: "$2",
  outlineWidth: 0,
  userSelect: "none",
  cursor: "default",
  fontSize: "$3",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  focusStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  "$platform-web": {
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5
    }
  }
});
var MenubarItemIndicatorFrame = styled47(ItemIndicator3, {
  position: "absolute",
  left: "$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "$4",
  height: "$4"
});
var MenubarCheckboxItem = React47.forwardRef(({ children, checked, ...props }, ref) => /* @__PURE__ */ jsxs39(MenubarCheckboxItemFrame, { ref, checked, ...props, children: [
  /* @__PURE__ */ jsx51(MenubarItemIndicatorFrame, { children: /* @__PURE__ */ jsx51(Check5, { size: 14 }) }),
  children
] }));
MenubarCheckboxItem.displayName = CheckboxItem3.displayName;
var MenubarRadioItemFrame = styled47(RadioItem3, {
  name: "MenubarRadioItem",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "$sm",
  paddingVertical: "$1.5",
  paddingLeft: "$8",
  paddingRight: "$2",
  outlineWidth: 0,
  userSelect: "none",
  cursor: "default",
  fontSize: "$3",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  focusStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  "$platform-web": {
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5
    }
  }
});
var MenubarRadioItem = React47.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ jsxs39(MenubarRadioItemFrame, { ref, ...props, children: [
  /* @__PURE__ */ jsx51(MenubarItemIndicatorFrame, { children: /* @__PURE__ */ jsx51(Circle3, { size: 8, fill: "currentColor" }) }),
  children
] }));
MenubarRadioItem.displayName = RadioItem3.displayName;
var MenubarLabelFrame = styled47(Label6, {
  name: "MenubarLabel",
  paddingHorizontal: "$2",
  paddingVertical: "$1.5",
  fontSize: "$3",
  fontWeight: "600",
  color: "$foreground",
  paddingLeft: "$2"
});
var MenubarLabel = React47.forwardRef(({ inset, ...props }, ref) => /* @__PURE__ */ jsx51(MenubarLabelFrame, { ref, paddingLeft: inset ? "$8" : "$2", ...props }));
MenubarLabel.displayName = Label6.displayName;
var MenubarSeparator = styled47(Separator6, {
  name: "MenubarSeparator",
  height: 1,
  backgroundColor: "$muted",
  marginHorizontal: "-$1"
});
var MenubarShortcut = styled47(Paragraph8, {
  name: "MenubarShortcut",
  marginLeft: "auto",
  fontSize: "$1",
  color: "$mutedForeground",
  letterSpacing: "$1"
});
var MenubarSubTriggerFrame = styled47(SubTrigger3, {
  name: "MenubarSubTrigger",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "$sm",
  paddingVertical: "$1.5",
  paddingHorizontal: "$2",
  outlineWidth: 0,
  userSelect: "none",
  cursor: "default",
  fontSize: "$3",
  color: "$foreground",
  hoverStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  focusStyle: {
    backgroundColor: "$accent",
    color: "$accentForeground"
  },
  "$platform-web": {
    '&[data-state="open"]': {
      backgroundColor: "$accent",
      color: "$accentForeground"
    }
  }
});
var MenubarSubTrigger = React47.forwardRef(({ children, inset, ...props }, ref) => /* @__PURE__ */ jsxs39(
  MenubarSubTriggerFrame,
  {
    ref,
    paddingLeft: inset ? "$8" : "$2",
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx51(ChevronRight5, { size: 14, style: { marginLeft: "auto" } })
    ]
  }
));
MenubarSubTrigger.displayName = SubTrigger3.displayName;
var MenubarSubContentFrame = styled47(SubContent3, {
  name: "MenubarSubContent",
  minWidth: 128,
  overflow: "hidden",
  borderRadius: "$md",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",
  padding: "$1",
  shadowColor: "$shadowColor",
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  zIndex: 50
});
var MenubarSubContent = React47.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx51(MenubarSubContentFrame, { ref, ...props }));
MenubarSubContent.displayName = SubContent3.displayName;
var MenubarSub = Sub3;
var MenubarRadioGroup = RadioGroup4;
var MenubarRoot = MenubarFrame;
var Menubar = ({
  isLoading,
  hasError,
  isDisabled,
  rightSlot,
  children,
  ...props
}) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx51(YStack28, { width: "100%", space: "$2", children: /* @__PURE__ */ jsx51(Skeleton, { height: "$4", width: "100%" }) });
  }
  return /* @__PURE__ */ jsxs39(
    MenubarRoot,
    {
      ...props,
      opacity: isDisabled ? 0.5 : 1,
      borderColor: hasError ? "$red10" : "$borderColor",
      children: [
        children,
        rightSlot && /* @__PURE__ */ jsxs39(Fragment8, { children: [
          /* @__PURE__ */ jsx51(Spacer, {}),
          rightSlot
        ] })
      ]
    }
  );
};

// src/molecules/MonthsPicker/MonthsPicker.tsx
import { ChevronDown as ChevronDown4 } from "@tamagui/lucide-icons";
import { useMemo as useMemo4 } from "react";
import { Adapt as Adapt3, styled as styled48 } from "tamagui";
import { jsx as jsx52, jsxs as jsxs40 } from "react/jsx-runtime";
var MonthsPickerTrigger = styled48(SelectTrigger, {
  name: "MonthsPickerTrigger",
  width: 200,
  variants: {
    error: {
      true: {
        borderColor: "$red10"
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: "$gray5"
      }
    }
  }
});
var MonthsPicker = ({
  value,
  onValueChange,
  placeholder = "Selecione o M\xEAs",
  isLoading = false,
  hasError = false,
  isDisabled = false
}) => {
  const meses = useMemo4(
    () => [
      "Janeiro",
      "Fevereiro",
      "Mar\xE7o",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ],
    []
  );
  if (isLoading) {
    return /* @__PURE__ */ jsx52(Skeleton, { width: 200, height: 35 });
  }
  return /* @__PURE__ */ jsxs40(SelectRoot, { value, onValueChange, disabled: isDisabled, children: [
    /* @__PURE__ */ jsx52(MonthsPickerTrigger, { error: hasError, disabled: isDisabled, iconAfter: ChevronDown4, children: /* @__PURE__ */ jsx52(SelectValue, { placeholder }) }),
    /* @__PURE__ */ jsx52(Adapt3, { when: "sm", platform: "touch", children: /* @__PURE__ */ jsxs40(Sheet, { modal: true, dismissOnSnapToBottom: true, children: [
      /* @__PURE__ */ jsx52(Sheet.Frame, { children: /* @__PURE__ */ jsx52(Sheet.ScrollView, { children: /* @__PURE__ */ jsx52(Adapt3.Contents, {}) }) }),
      /* @__PURE__ */ jsx52(Sheet.Overlay, {})
    ] }) }),
    /* @__PURE__ */ jsx52(SelectContent, { children: /* @__PURE__ */ jsx52(SelectViewport, { children: meses.map((mes, index) => /* @__PURE__ */ jsx52(SelectItem, { index, value: mes, children: mes }, mes)) }) })
  ] });
};

// src/molecules/ToggleGroup/ToggleGroup.tsx
import { createContext as createContext8, useContext as useContext11, useMemo as useMemo5, Children as Children4, forwardRef as forwardRef11 } from "react";
import { ToggleGroup as TamaguiToggleGroup, styled as styled49, YStack as YStack29, withStaticProperties as withStaticProperties5 } from "tamagui";
import { jsx as jsx53 } from "react/jsx-runtime";
var ToggleGroupContext = createContext8({
  disabled: false,
  error: false,
  loading: false
});
var useToggleGroupContext = () => {
  const context = useContext11(ToggleGroupContext);
  if (!context) {
    throw new Error("useToggleGroupContext must be used within a ToggleGroupProvider");
  }
  return context;
};
var ToggleGroupItemFrame = styled49(TamaguiToggleGroup.Item, {
  name: "ToggleGroupItem",
  backgroundColor: "transparent",
  borderRadius: "$4",
  paddingHorizontal: "$3",
  height: "$10",
  alignItems: "center",
  justifyContent: "center",
  hoverStyle: {
    backgroundColor: "$muted",
    color: "$mutedForeground"
  },
  focusStyle: {
    outlineColor: "$ring",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: 2
  },
  variants: {
    active: {
      true: {
        backgroundColor: "$accent",
        color: "$accentForeground"
      }
    },
    error: {
      true: {
        color: "$red10",
        hoverStyle: {
          backgroundColor: "$red5",
          color: "$red11"
        }
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none"
      }
    }
  }
});
var ToggleGroupItem = forwardRef11((props, ref) => {
  const { disabled, error } = useToggleGroupContext();
  return /* @__PURE__ */ jsx53(ToggleGroupItemFrame, { ref, ...props, disabled: disabled || props.disabled, error });
});
var ToggleGroupFrame = styled49(TamaguiToggleGroup, {
  name: "ToggleGroup",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "$1",
  variants: {
    error: {
      true: {
        borderColor: "$red10",
        borderWidth: 1,
        borderRadius: "$4",
        padding: 1
      }
    }
  }
});
var ToggleGroupRoot = forwardRef11((props, ref) => {
  const { children, disabled, error, loading, ...rest } = props;
  const contextValue = useMemo5(() => ({ disabled, error, loading }), [disabled, error, loading]);
  if (loading) {
    const childCount = Children4.count(children);
    return /* @__PURE__ */ jsx53(YStack29, { flexDirection: "row", gap: "$1", alignItems: "center", children: Array.from({ length: childCount > 0 ? childCount : 3 }).map((_, i) => /* @__PURE__ */ jsx53(Skeleton, { height: "$10", width: "$10", borderRadius: "$4" }, i)) });
  }
  return /* @__PURE__ */ jsx53(ToggleGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx53(ToggleGroupFrame, { ref, ...rest, disabled, error, children }) });
});
var ToggleGroup = withStaticProperties5(ToggleGroupRoot, {
  Item: ToggleGroupItem
});

// src/molecules/Tooltip/Tooltip.tsx
import { Tooltip as TamaguiTooltip, styled as styled50, Paragraph as Paragraph9, YStack as YStack30, XStack as XStack28, Portal as Portal7 } from "tamagui";
import React49 from "react";
import { jsx as jsx54, jsxs as jsxs41 } from "react/jsx-runtime";
var TooltipContent = styled50(TamaguiTooltip.Content, {
  name: "TooltipContent",
  enterStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
  scale: 1,
  x: 0,
  y: 0,
  opacity: 1,
  animation: "quick",
  maxWidth: 350,
  padding: "$2",
  backgroundColor: "$background",
  borderColor: "$borderColor",
  borderWidth: 1,
  borderRadius: "$md",
  zIndex: 1e5,
  // Increased zIndex
  variants: {
    hasError: {
      true: {
        borderColor: "$destructive"
      }
    }
  }
});
var TooltipArrow = styled50(TamaguiTooltip.Arrow, {
  name: "TooltipArrow",
  borderColor: "$borderColor",
  borderWidth: 1,
  backgroundColor: "$background",
  variants: {
    hasError: {
      true: {
        borderColor: "$destructive"
      }
    }
  }
});
var TooltipTrigger = TamaguiTooltip.Trigger;
var Tooltip = React49.forwardRef(({ children, content, isLoading = false, hasError = false, isDisabled = false, actions, ...props }, _ref) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx54(Skeleton, {});
  }
  return /* @__PURE__ */ jsxs41(TamaguiTooltip, { ...props, disabled: isDisabled, children: [
    /* @__PURE__ */ jsx54(TooltipTrigger, { asChild: true, children }),
    /* @__PURE__ */ jsx54(Portal7, { children: /* @__PURE__ */ jsxs41(TooltipContent, { hasError, children: [
      /* @__PURE__ */ jsx54(TooltipArrow, { hasError }),
      /* @__PURE__ */ jsxs41(YStack30, { gap: "$2", children: [
        typeof content === "string" ? /* @__PURE__ */ jsx54(Paragraph9, { size: "$2", children: content }) : content,
        actions && /* @__PURE__ */ jsx54(XStack28, { gap: "$2", children: actions })
      ] })
    ] }) })
  ] });
});
Tooltip.displayName = "Tooltip";

// src/molecules/Stepper/Stepper.tsx
import { Text as Text20, XStack as XStack29, YStack as YStack32 } from "tamagui";

// src/molecules/Stepper/Stepper.context.tsx
import { createContext as createContext9, useContext as useContext12, useState as useState11 } from "react";
import { YStack as YStack31 } from "tamagui";
import { jsx as jsx55 } from "react/jsx-runtime";
var StepperContext = createContext9(null);
var StepperContextProvider = ({
  steps,
  isLoading,
  hasError,
  isDisabled,
  children,
  actions,
  currentStep: currentStepProp,
  onStepChange
}) => {
  const [internalStep, setInternalStep] = useState11(0);
  const isControlled = currentStepProp !== void 0;
  const currentStep = isControlled ? currentStepProp : internalStep;
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      if (isControlled && onStepChange) {
        onStepChange(currentStep + 1);
      } else {
        setInternalStep(currentStep + 1);
      }
    }
  };
  const prevStep = () => {
    if (currentStep > 0) {
      if (isControlled && onStepChange) {
        onStepChange(currentStep - 1);
      } else {
        setInternalStep(currentStep - 1);
      }
    }
  };
  const value = {
    currentStep,
    steps,
    nextStep,
    prevStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    isLoading,
    hasError,
    isDisabled,
    actions
  };
  return /* @__PURE__ */ jsx55(StepperContext.Provider, { value, children });
};
var useStepper = () => {
  const context = useContext12(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperContextProvider");
  }
  return context;
};
var Stepper = ({ children }) => {
  return /* @__PURE__ */ jsx55(YStack31, { children });
};

// src/molecules/Stepper/Stepper.tsx
import { jsx as jsx56, jsxs as jsxs42 } from "react/jsx-runtime";
var StepperContent = () => {
  const {
    currentStep,
    steps,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    isLoading,
    isDisabled,
    hasError,
    actions
  } = useStepper();
  if (isLoading) {
    return /* @__PURE__ */ jsxs42(YStack32, { space: "$2", "data-testid": "skeleton-container", children: [
      /* @__PURE__ */ jsx56(Skeleton, { height: 28, width: 250 }),
      /* @__PURE__ */ jsx56(Skeleton, { height: 120 }),
      /* @__PURE__ */ jsxs42(XStack29, { justifyContent: "space-between", children: [
        /* @__PURE__ */ jsx56(Skeleton, { height: 44, width: 110 }),
        /* @__PURE__ */ jsx56(Skeleton, { height: 44, width: 110 })
      ] })
    ] });
  }
  if (!steps || steps.length === 0) {
    return /* @__PURE__ */ jsx56(Text20, { children: "N\xE3o h\xE1 passos para exibir." });
  }
  return /* @__PURE__ */ jsxs42(YStack32, { space: "$4", children: [
    /* @__PURE__ */ jsx56(
      Text20,
      {
        color: hasError ? "$red10" : "$color",
        fontSize: "$6",
        fontWeight: "bold",
        textAlign: "center",
        "data-testid": "stepper-title",
        "data-has-error": hasError,
        children: steps[currentStep].title
      }
    ),
    /* @__PURE__ */ jsx56(
      YStack32,
      {
        borderWidth: 1,
        borderColor: hasError ? "$red10" : "$borderColor",
        borderRadius: "$4",
        padding: "$4",
        minHeight: 100,
        justifyContent: "center",
        alignItems: "center",
        children: steps[currentStep].content
      }
    ),
    /* @__PURE__ */ jsx56(XStack29, { justifyContent: "space-between", children: actions(nextStep, prevStep, isFirstStep, isLastStep, isDisabled) })
  ] });
};
var Stepper2 = ({
  steps,
  isLoading = false,
  hasError = false,
  isDisabled = false,
  actions,
  currentStep,
  onStepChange
}) => {
  return /* @__PURE__ */ jsx56(
    StepperContextProvider,
    {
      steps,
      isLoading,
      hasError,
      isDisabled,
      actions,
      currentStep,
      onStepChange,
      children: /* @__PURE__ */ jsx56(Stepper, { children: /* @__PURE__ */ jsx56(StepperContent, {}) })
    }
  );
};

// src/molecules/AvatarGroup/AvatarGroup.tsx
import { Text as Text21, XStack as XStack30, styled as styled51 } from "tamagui";
import { jsx as jsx57, jsxs as jsxs43 } from "react/jsx-runtime";
var AVATAR_GROUP_ITEM_BORDER_WIDTH = 2;
var AvatarGroupFrame = styled51(XStack30, {
  name: "AvatarGroup",
  alignItems: "center",
  flexDirection: "row",
  variants: {
    size: {
      "...size": (val, { tokens: tokens2 }) => {
        return {
          height: tokens2.size[val] ?? val
        };
      }
    }
  },
  defaultVariants: {
    size: "$10"
  }
});
var AvatarGroupItemFrame = styled51(XStack30, {
  name: "AvatarGroupItem",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  borderColor: "$background",
  borderWidth: AVATAR_GROUP_ITEM_BORDER_WIDTH,
  borderRadius: "$round",
  variants: {
    size: {
      "...size": (val, { tokens: tokens2 }) => {
        return {
          width: tokens2.size[val] ?? val,
          height: tokens2.size[val] ?? val,
          // Overlap by 40% of the avatar's size
          marginLeft: (tokens2.size[val] ?? val) * -0.4,
          // Explicitly clear zIndex for children to avoid prop leakage
          zIndex: void 0
        };
      }
    },
    hasError: {
      true: {
        borderColor: "$red10"
      }
    }
  },
  defaultVariants: {
    size: "$10"
  }
});
var AvatarGroup = ({
  items = [],
  limit = 3,
  isLoading = false,
  hasError = false,
  size = "$10",
  ...rest
}) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx57(AvatarGroupFrame, { size, ...rest, "data-testid": "avatar-group-frame", children: Array.from({ length: limit }).map((_, index) => /* @__PURE__ */ jsx57(
      AvatarGroupItemFrame,
      {
        size,
        zIndex: limit - index,
        "data-testid": `avatar-group-skeleton-${index}`,
        children: /* @__PURE__ */ jsx57(Skeleton, { circular: true, width: "100%", height: "100%" })
      },
      `skeleton-${index}`
    )) });
  }
  if (items.length === 0) {
    return null;
  }
  const visibleItems = items.slice(0, limit);
  const remainingCount = Math.max(0, items.length - limit);
  return /* @__PURE__ */ jsxs43(AvatarGroupFrame, { size, ...rest, "data-testid": "avatar-group-frame", children: [
    visibleItems.map((item, index) => /* @__PURE__ */ jsx57(
      AvatarGroupItemFrame,
      {
        size,
        zIndex: visibleItems.length - index,
        hasError,
        "data-testid": `avatar-group-item-${index}`,
        "data-haserror": hasError,
        children: /* @__PURE__ */ jsxs43(Avatar, { size, children: [
          /* @__PURE__ */ jsx57(AvatarImage, { alt: item.alt ?? item.fallback, src: item.src }),
          /* @__PURE__ */ jsx57(AvatarFallback, { children: /* @__PURE__ */ jsx57(Text21, { children: item.fallback }) })
        ] })
      },
      `avatar-${index}`
    )),
    remainingCount > 0 && /* @__PURE__ */ jsx57(
      AvatarGroupItemFrame,
      {
        size,
        zIndex: 0,
        hasError,
        "data-testid": "avatar-group-remainder",
        "data-haserror": hasError,
        children: /* @__PURE__ */ jsx57(Avatar, { size, children: /* @__PURE__ */ jsx57(AvatarFallback, { children: /* @__PURE__ */ jsxs43(Text21, { size: "$4", fontWeight: "bold", children: [
          "+",
          remainingCount
        ] }) }) })
      }
    )
  ] });
};

// src/molecules/BadgeCounter/BadgeCounter.tsx
import { forwardRef as forwardRef12 } from "react";
import { styled as styled52, XStack as XStack31, YStack as YStack33 } from "tamagui";
import { jsx as jsx58, jsxs as jsxs44 } from "react/jsx-runtime";
var BadgeCounterFrame = styled52(XStack31, {
  name: "BadgeCounter",
  tag: "div",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    hasError: {
      true: {
        borderColor: "$red10",
        borderWidth: 2,
        borderRadius: "$4"
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none"
      }
    }
  }
});
var BadgeCounterContent = styled52(YStack33, {
  name: "BadgeCounterContent",
  flex: 1
});
var BadgePosition = styled52(YStack33, {
  name: "BadgePosition",
  position: "absolute",
  zIndex: 1,
  top: -5,
  right: -5
});
var BadgeCounter = forwardRef12(
  ({
    children,
    count = 0,
    max = 99,
    showZero = false,
    isLoading = false,
    hasError = false,
    disabled = false,
    ...props
  }, ref) => {
    if (isLoading) {
      return /* @__PURE__ */ jsx58(Skeleton, { width: "$10", height: "$10", borderRadius: "$10" });
    }
    const shouldShowBadge = showZero || count > 0;
    const displayCount = count > max ? `${max}+` : count;
    return /* @__PURE__ */ jsxs44(BadgeCounterFrame, { ref, hasError, disabled, ...props, children: [
      /* @__PURE__ */ jsx58(BadgeCounterContent, { children }),
      shouldShowBadge && /* @__PURE__ */ jsx58(BadgePosition, { children: /* @__PURE__ */ jsx58(Badge, { variant: "destructive", size: "sm", children: /* @__PURE__ */ jsx58(BadgeText, { variant: "destructive", size: "sm", children: displayCount }) }) })
    ] });
  }
);
BadgeCounter.displayName = "BadgeCounter";

// src/organisms/Autocomplete/Autocomplete.tsx
import { Check as Check6, ChevronDown as ChevronDown5, XCircle } from "@tamagui/lucide-icons";
import { useMemo as useMemo6, useState as useState12 } from "react";
import { ListItem, ScrollView, Text as Text22, YGroup, YStack as YStack34 } from "tamagui";
import { jsx as jsx59, jsxs as jsxs45 } from "react/jsx-runtime";
var Autocomplete = ({
  options,
  value,
  onValueChange,
  placeholder = "Selecione...",
  emptyMessage = "Nenhuma op\xE7\xE3o encontrada.",
  errorMessage = "Ocorreu um erro.",
  isLoading = false,
  hasError = false
}) => {
  const [open, setOpen] = useState12(false);
  const [search, setSearch] = useState12("");
  const filteredOptions = useMemo6(() => {
    if (!search) return options;
    return options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()));
  }, [options, search]);
  const handleSelect = (option) => {
    onValueChange?.(option);
    setOpen(false);
    setSearch("");
  };
  if (isLoading) {
    return /* @__PURE__ */ jsx59(Skeleton, { width: "100%", height: 40 });
  }
  if (hasError) {
    return /* @__PURE__ */ jsxs45(YStack34, { gap: "$2", alignItems: "center", padding: "$4", backgroundColor: "$red2", borderRadius: "$4", children: [
      /* @__PURE__ */ jsx59(XCircle, { color: "$red10" }),
      /* @__PURE__ */ jsx59(Text22, { color: "$red10", children: errorMessage })
    ] });
  }
  return /* @__PURE__ */ jsxs45(Popover, { open, onOpenChange: setOpen, placement: "bottom-start", children: [
    /* @__PURE__ */ jsx59(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx59(
      Button,
      {
        role: "combobox",
        "aria-expanded": open,
        justifyContent: "space-between",
        width: "100%",
        iconAfter: ChevronDown5,
        flex: 1,
        children: /* @__PURE__ */ jsx59(Text22, { numberOfLines: 1, ellipse: true, children: value ? value.label : placeholder })
      }
    ) }),
    /* @__PURE__ */ jsxs45(PopoverContent, { padding: 0, width: "100%", minWidth: 200, children: [
      /* @__PURE__ */ jsx59(YStack34, { padding: "$2", borderBottomWidth: 1, borderBottomColor: "$borderColor", children: /* @__PURE__ */ jsx59(Input, { placeholder: "Buscar...", value: search, onChangeText: setSearch }) }),
      /* @__PURE__ */ jsx59(ScrollView, { maxHeight: 200, keyboardShouldPersistTaps: "handled", children: filteredOptions.length === 0 ? /* @__PURE__ */ jsx59(YStack34, { gap: "$2", padding: "$4", alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ jsx59(Text22, { color: "$color11", children: emptyMessage }) }) : /* @__PURE__ */ jsx59(YGroup, { children: filteredOptions.map((option) => /* @__PURE__ */ jsx59(YGroup.Item, { children: /* @__PURE__ */ jsx59(
        ListItem,
        {
          hoverTheme: true,
          pressTheme: true,
          onPress: () => handleSelect(option),
          icon: value?.value === option.value ? Check6 : void 0,
          children: /* @__PURE__ */ jsx59(Text22, { children: option.label })
        }
      ) }, option.value)) }) })
    ] })
  ] });
};

// src/organisms/Form/Form.tsx
import * as React52 from "react";
import {
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";
import { Text as Text23, styled as styled53, YStack as YStack35 } from "tamagui";
import { Slot as Slot4 } from "@tamagui/core";
import { jsx as jsx60 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React52.createContext(null);
var FormField = ({
  ...props
}) => {
  const contextValue = React52.useMemo(() => ({ name: props.name }), [props.name]);
  return /* @__PURE__ */ jsx60(FormFieldContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx60(Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React52.useContext(FormFieldContext);
  const itemContext = React52.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }
  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React52.createContext(null);
var FormRoot = styled53(YStack35, {
  gap: "$4"
});
var FormFooter = styled53(YStack35, {
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "$2"
});
var FormItemFrame = styled53(YStack35, {
  space: "$sm"
});
var FormItem = React52.forwardRef(
  ({ ...props }, ref) => {
    const id = React52.useId();
    const contextValue = React52.useMemo(() => ({ id }), [id]);
    return /* @__PURE__ */ jsx60(FormItemContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx60(FormItemFrame, { ref, ...props }) });
  }
);
FormItem.displayName = "FormItem";
var FormLabelFrame = styled53(Label, {
  color: "$color",
  fontWeight: "500",
  fontSize: "$3",
  variants: {
    error: {
      true: {
        color: "$destructive"
      }
    }
  }
});
var FormLabel = React52.forwardRef(
  ({ ...props }, ref) => {
    const { error, formItemId } = useFormField();
    return /* @__PURE__ */ jsx60(
      FormLabelFrame,
      {
        ref,
        htmlFor: formItemId,
        error: !!error,
        ...props
      }
    );
  }
);
FormLabel.displayName = "FormLabel";
var FormControl = React52.forwardRef(
  ({ children, ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /* @__PURE__ */ jsx60(
      Slot4,
      {
        ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props,
        children
      }
    );
  }
);
FormControl.displayName = "FormControl";
var FormDescriptionFrame = styled53(Text23, {
  fontSize: "$2",
  color: "$mutedForeground"
});
var FormDescription = React52.forwardRef(
  ({ ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return /* @__PURE__ */ jsx60(
      FormDescriptionFrame,
      {
        ref,
        id: formDescriptionId,
        ...props
      }
    );
  }
);
FormDescription.displayName = "FormDescription";
var FormMessageFrame = styled53(Text23, {
  fontSize: "$2",
  color: "$red10",
  marginTop: "$2"
});
var FormMessage = React52.forwardRef(({ className, children, name: propName, error: propError, ...props }, ref) => {
  const fieldInfo = useFormField();
  const { formState } = useFormContext();
  const name = propName || fieldInfo.name;
  const castErrors = formState.errors;
  const fieldError = castErrors[name] || fieldInfo.error || propError;
  const body = fieldError ? String(fieldError?.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx60(
    FormMessageFrame,
    {
      ref,
      id: fieldInfo.formMessageId,
      "data-testid": `form-message-${name}`,
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";

// src/organisms/RichText/RichText.tsx
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Strikethrough
} from "@tamagui/lucide-icons";
import {
  ScrollView as ScrollView2,
  styled as styled54,
  withStaticProperties as withStaticProperties6,
  XStack as XStack32,
  YStack as YStack36
} from "tamagui";
import DOMPurify from "isomorphic-dompurify";
import { jsx as jsx61, jsxs as jsxs46 } from "react/jsx-runtime";
var EditorContainer = styled54(YStack36, {
  name: "RichTextEditor",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$borderRadius",
  variants: {
    hasError: {
      true: {
        borderColor: "$red10"
      }
    }
  }
});
var EditorContentContainer = styled54(ScrollView2, {
  name: "EditorContentContainer",
  minHeight: 150,
  padding: "$3"
});
var Toolbar = styled54(XStack32, {
  name: "RichTextToolbar",
  padding: "$2",
  borderBottomWidth: 1,
  borderBottomColor: "$borderColor",
  flexWrap: "wrap",
  gap: "$2"
});
var RichTextToolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  const toggleGroupItems = [
    { name: "bold", icon: Bold, label: "Negrito" },
    { name: "italic", icon: Italic, label: "It\xE1lico" },
    { name: "strike", icon: Strikethrough, label: "Riscado" }
  ];
  const headingItems = [
    { level: 1, icon: Heading1, label: "T\xEDtulo 1" },
    { level: 2, icon: Heading2, label: "T\xEDtulo 2" },
    { level: 3, icon: Heading3, label: "T\xEDtulo 3" }
  ];
  return /* @__PURE__ */ jsxs46(Toolbar, { children: [
    /* @__PURE__ */ jsx61(
      ToggleGroup,
      {
        type: "multiple",
        value: toggleGroupItems.filter((item) => editor.isActive(item.name)).map((item) => item.name),
        onValueChange: (values) => {
          toggleGroupItems.forEach((item) => {
            if (values.includes(item.name) !== editor.isActive(item.name)) {
              editor.chain().focus()[`toggle${item.name.charAt(0).toUpperCase() + item.name.slice(1)}`]().run();
            }
          });
        },
        children: toggleGroupItems.map(({ name, icon: Icon, label }) => /* @__PURE__ */ jsx61(Tooltip, { placement: "top", content: label, children: /* @__PURE__ */ jsx61(ToggleGroupItem, { value: name, "aria-label": label, children: /* @__PURE__ */ jsx61(Icon, { size: 16 }) }) }, name))
      }
    ),
    headingItems.map(({ level, icon: Icon, label }) => /* @__PURE__ */ jsx61(Tooltip, { placement: "top", content: label, children: /* @__PURE__ */ jsx61(
      Button,
      {
        variant: editor.isActive("heading", { level }) ? "secondary" : "ghost",
        onPress: () => editor.chain().focus().toggleHeading({ level }).run(),
        "aria-label": label,
        children: /* @__PURE__ */ jsx61(Icon, { size: 16 })
      }
    ) }, level))
  ] });
};
var RichTextFrame = ({
  value,
  onChange,
  editable = true,
  isLoading = false,
  hasError = false,
  headerActions,
  ...props
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editable: !isLoading && editable,
    onUpdate: ({ editor: editor2 }) => {
      if (onChange) {
        const rawHtml = editor2.getHTML();
        const cleanHtml = DOMPurify.sanitize(rawHtml);
        onChange(cleanHtml);
      }
    }
  });
  if (isLoading) {
    return /* @__PURE__ */ jsxs46(YStack36, { gap: "$2", ...props, children: [
      /* @__PURE__ */ jsx61(Skeleton, { height: 40 }),
      /* @__PURE__ */ jsx61(Skeleton, { height: 150 })
    ] });
  }
  return /* @__PURE__ */ jsxs46(EditorContainer, { hasError, ...props, children: [
    /* @__PURE__ */ jsx61(RichTextToolbar, { editor }),
    headerActions,
    /* @__PURE__ */ jsx61(EditorContentContainer, { children: /* @__PURE__ */ jsx61(EditorContent, { editor }) })
  ] });
};
var RichText = withStaticProperties6(RichTextFrame, {});

// src/organisms/DataTable/DataTable.tsx
import { AlertCircle, Inbox } from "@tamagui/lucide-icons";
import { useMemo as useMemo8, useState as useState13, isValidElement as isValidElement5 } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { ScrollView as ScrollView3, Text as Text26, XStack as XStack35, YStack as YStack39 } from "tamagui";

// src/molecules/Empty/Empty.tsx
import { Ban } from "@tamagui/lucide-icons";
import { YStack as YStack37, Text as Text24, styled as styled55, Image as Image2 } from "tamagui";
import { cloneElement as cloneElement6 } from "react";
import { XStack as XStack33 } from "tamagui";
import { jsx as jsx62, jsxs as jsxs47 } from "react/jsx-runtime";
var EmptyFrame = styled55(YStack37, {
  name: "Empty",
  alignItems: "center",
  justifyContent: "center",
  padding: "$4",
  gap: "$2"
});
var EmptyIconFrame = styled55(YStack37, {
  name: "EmptyIcon",
  padding: "$3",
  borderRadius: 100,
  backgroundColor: "$background",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    hasError: {
      true: {
        backgroundColor: "$red2"
      }
    }
  }
});
var EmptyTitle = styled55(Text24, {
  name: "EmptyTitle",
  fontSize: "$5",
  fontWeight: "600",
  textAlign: "center",
  ellipse: true,
  variants: {
    hasError: {
      true: {
        color: "$red10"
      }
    }
  }
});
var EmptyDescription = styled55(Text24, {
  name: "EmptyDescription",
  fontSize: "$3",
  color: "$gray10",
  textAlign: "center",
  ellipse: true,
  variants: {
    hasError: {
      true: {
        color: "$red10"
      }
    }
  }
});
var EmptySkeleton = () => /* @__PURE__ */ jsxs47(EmptyFrame, { "data-testid": "empty-skeleton", children: [
  /* @__PURE__ */ jsx62(Skeleton, { width: 64, height: 64, borderRadius: 100 }),
  /* @__PURE__ */ jsxs47(YStack37, { gap: "$1", alignItems: "center", children: [
    /* @__PURE__ */ jsx62(Skeleton, { width: 120, height: 20 }),
    /* @__PURE__ */ jsx62(Skeleton, { width: 240, height: 15 })
  ] }),
  /* @__PURE__ */ jsx62(Skeleton, { width: 100, height: 40, marginTop: "$2" })
] });
var Empty = ({
  icon,
  image,
  imageProps,
  title,
  description,
  actions,
  isLoading = false,
  hasError = false,
  ...props
}) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx62(EmptySkeleton, {});
  }
  let content;
  if (image) {
    content = /* @__PURE__ */ jsx62(
      Image2,
      {
        source: { uri: image },
        width: 200,
        height: 150,
        resizeMode: "contain",
        ...imageProps
      }
    );
  } else {
    const iconElement = icon ? cloneElement6(icon, {
      size: 32,
      color: hasError ? "$red10" : "$gray10"
    }) : /* @__PURE__ */ jsx62(Ban, { size: 32, color: hasError ? "$red10" : "$gray10" });
    content = /* @__PURE__ */ jsx62(EmptyIconFrame, { hasError, "data-testid": "empty-icon-frame", "data-has-error": hasError, children: iconElement });
  }
  return /* @__PURE__ */ jsxs47(EmptyFrame, { ...props, children: [
    content,
    /* @__PURE__ */ jsxs47(YStack37, { gap: "$1", alignItems: "center", children: [
      title && /* @__PURE__ */ jsx62(EmptyTitle, { hasError, children: title }),
      description && /* @__PURE__ */ jsx62(EmptyDescription, { hasError, children: description })
    ] }),
    actions && /* @__PURE__ */ jsx62(XStack33, { marginTop: "$2", children: actions })
  ] });
};

// src/organisms/DataTable/DataTable.parts.tsx
import { Text as Text25, View as View7, XStack as XStack34, YStack as YStack38, styled as styled56 } from "tamagui";
var MIN_COLUMN_WIDTH = 100;
var BORDER_WIDTH = 1;
var TableContainer = styled56(YStack38, {
  name: "TableContainer",
  borderColor: "$borderColor",
  borderWidth: BORDER_WIDTH,
  borderRadius: "$4",
  overflow: "hidden"
});
var TableHeader = styled56(YStack38, {
  name: "TableHeader",
  backgroundColor: "$background",
  borderBottomWidth: BORDER_WIDTH,
  borderColor: "$borderColor"
});
var TableRow = styled56(XStack34, {
  name: "TableRow",
  borderBottomWidth: BORDER_WIDTH,
  borderColor: "$borderColor",
  paddingVertical: "$3",
  paddingHorizontal: "$4",
  alignItems: "center",
  hoverStyle: {
    backgroundColor: "$backgroundHover"
  },
  pressStyle: {
    backgroundColor: "$backgroundPress"
  }
});
var TableHeadText = styled56(Text25, {
  name: "TableHeadText",
  color: "$color",
  fontSize: "$2",
  fontWeight: "600"
});
var TableCellText = styled56(Text25, {
  name: "TableCellText",
  color: "$color",
  fontSize: "$2"
});
var TableCellFrame = styled56(View7, {
  name: "TableCellFrame",
  flex: 1,
  minWidth: MIN_COLUMN_WIDTH
});
var NoResultsCell = styled56(View7, {
  name: "NoResultsCell",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: "$4"
});
var HeaderActionsContainer = styled56(XStack34, {
  name: "HeaderActionsContainer",
  paddingHorizontal: "$4",
  paddingBottom: "$3",
  justifyContent: "flex-end"
});

// src/organisms/DataTable/DataTable.tsx
import { jsx as jsx63, jsxs as jsxs48 } from "react/jsx-runtime";
var DEFAULT_PAGE_SIZE = 10;
var MAX_ROWS_WITHOUT_PAGINATION = 100;
var DEFAULT_LOCALIZATION = {
  noResults: "Nenhum resultado encontrado.",
  previousPage: "Anterior",
  nextPage: "Pr\xF3ximo",
  pageOf: (currentPage, pageCount) => `P\xE1gina ${currentPage} de ${pageCount}`,
  errorTitle: "Algo deu errado",
  errorBody: "Houve um erro ao carregar os dados. Por favor, tente novamente.",
  retry: "Tentar novamente"
};
var renderCellContent = (content, isHeader) => {
  if (isValidElement5(content)) return content;
  const Wrapper = isHeader ? TableHeadText : TableCellText;
  return /* @__PURE__ */ jsx63(Wrapper, { children: content });
};
function DataTable({
  columns,
  data,
  showPagination: initialShowPagination = true,
  isLoading = false,
  error = null,
  onRetry,
  emptyState,
  headerActions,
  localization: customLocalization
}) {
  const [sorting, setSorting] = useState13([]);
  const [columnFilters, setColumnFilters] = useState13([]);
  const localization = { ...DEFAULT_LOCALIZATION, ...customLocalization };
  let showPagination = initialShowPagination;
  if (!showPagination && data.length > MAX_ROWS_WITHOUT_PAGINATION) {
    if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
      console.warn(
        `DataTable: Rendering ${data.length} rows without pagination is a performance hazard. Pagination has been forcibly enabled.`
      );
    }
    showPagination = true;
  }
  const safeData = useMemo8(() => [...data ?? []], [data]);
  const safeColumns = useMemo8(() => columns, [columns]);
  const table = useReactTable({
    data: safeData,
    columns: safeColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: DEFAULT_PAGE_SIZE
      }
    },
    state: {
      sorting,
      columnFilters
    }
  });
  const rows = showPagination ? table.getRowModel().rows : table.getRowModel().rows.slice(0, MAX_ROWS_WITHOUT_PAGINATION);
  const renderTableBody = () => {
    if (isLoading) {
      return Array.from({ length: table.getState().pagination.pageSize }).map((_, i) => /* @__PURE__ */ jsx63(TableRow, { tag: "tr", children: columns.map((_2, j) => /* @__PURE__ */ jsx63(TableCellFrame, { tag: "td", children: /* @__PURE__ */ jsx63(Skeleton, { height: "$4" }) }, `skeleton-cell-${j}`)) }, `skeleton-${i}`));
    }
    if (error) {
      return /* @__PURE__ */ jsx63(TableRow, { tag: "tr", children: /* @__PURE__ */ jsx63(NoResultsCell, { tag: "td", ...{ colSpan: columns.length }, children: /* @__PURE__ */ jsx63(
        Empty,
        {
          icon: /* @__PURE__ */ jsx63(AlertCircle, { size: "$5", color: "$red10" }),
          title: localization.errorTitle,
          body: localization.errorBody,
          action: onRetry && /* @__PURE__ */ jsx63(Button, { variant: "outline", onPress: onRetry, children: localization.retry })
        }
      ) }) });
    }
    if (rows.length === 0) {
      return /* @__PURE__ */ jsx63(TableRow, { tag: "tr", children: /* @__PURE__ */ jsx63(NoResultsCell, { tag: "td", ...{ colSpan: columns.length }, children: emptyState || /* @__PURE__ */ jsx63(
        Empty,
        {
          icon: /* @__PURE__ */ jsx63(Inbox, { size: "$5", color: "$gray10" }),
          title: localization.noResults
        }
      ) }) });
    }
    return rows.map((row) => /* @__PURE__ */ jsx63(TableRow, { "data-state": row.getIsSelected() && "selected", tag: "tr", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx63(TableCellFrame, { tag: "td", children: renderCellContent(flexRender(cell.column.columnDef.cell, cell.getContext()), false) }, cell.id)) }, row.id));
  };
  return /* @__PURE__ */ jsxs48(YStack39, { gap: "$3", children: [
    headerActions && /* @__PURE__ */ jsx63(HeaderActionsContainer, { children: headerActions }),
    /* @__PURE__ */ jsx63(TableContainer, { children: /* @__PURE__ */ jsx63(ScrollView3, { horizontal: true, showsHorizontalScrollIndicator: true, children: /* @__PURE__ */ jsxs48(YStack39, { minWidth: "100%", tag: "table", "aria-label": "Data table", children: [
      /* @__PURE__ */ jsx63(TableHeader, { tag: "thead", children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx63(TableRow, { tag: "tr", children: headerGroup.headers.map((header) => /* @__PURE__ */ jsx63(TableCellFrame, { tag: "th", children: header.isPlaceholder ? null : renderCellContent(flexRender(header.column.columnDef.header, header.getContext()), true) }, header.id)) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx63(YStack39, { tag: "tbody", children: renderTableBody() })
    ] }) }) }),
    showPagination && table.getPageCount() > 1 && /* @__PURE__ */ jsxs48(XStack35, { paddingVertical: "$3", paddingHorizontal: "$4", alignItems: "center", children: [
      /* @__PURE__ */ jsx63(YStack39, { flex: 1 }),
      /* @__PURE__ */ jsxs48(XStack35, { alignItems: "center", justifyContent: "flex-end", gap: "$2", children: [
        /* @__PURE__ */ jsx63(Text26, { fontSize: "$2", color: "$color", children: localization.pageOf(
          table.getState().pagination.pageIndex + 1,
          table.getPageCount()
        ) }),
        /* @__PURE__ */ jsx63(
          Button,
          {
            variant: "outline",
            size: "$2",
            onPress: () => table.previousPage(),
            disabled: !table.getCanPreviousPage(),
            children: localization.previousPage
          }
        ),
        /* @__PURE__ */ jsx63(
          Button,
          {
            variant: "outline",
            size: "$2",
            onPress: () => table.nextPage(),
            disabled: !table.getCanNextPage(),
            children: localization.nextPage
          }
        )
      ] })
    ] })
  ] });
}

// src/organisms/Carousel/Carousel.tsx
import {
  ChevronLeft as ChevronLeft3,
  ChevronRight as ChevronRight6,
  HelpCircle
} from "@tamagui/lucide-icons";
import useEmblaCarousel from "embla-carousel-react";
import React54, { useCallback as useCallback6, useEffect as useEffect3, useState as useState14 } from "react";
import { styled as styled57, Text as Text27, View as View8, XStack as XStack36, YStack as YStack40 } from "tamagui";
import { jsx as jsx64, jsxs as jsxs49 } from "react/jsx-runtime";
var CarouselContext = React54.createContext(null);
function useCarousel() {
  const context = React54.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var CarouselFrame = styled57(YStack40, {
  name: "CarouselFrame",
  position: "relative",
  width: "100%"
});
var CarouselContentFrame = styled57(XStack36, {
  name: "CarouselContent"
  // Negative margin is applied here to counteract item padding
});
var CarouselItemFrame = styled57(YStack40, {
  name: "CarouselItem",
  minWidth: 0,
  flex: "0 0 100%",
  position: "relative"
});
var CarouselNavButton = styled57(Button, {
  name: "CarouselNavButton",
  circular: true,
  size: "$4",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  backgroundColor: "$background",
  opacity: 0.8,
  pressStyle: {
    backgroundColor: "$background",
    opacity: 1
  },
  variants: {
    side: {
      prev: { left: "$2" },
      next: { right: "$2" }
    }
  }
});
var StateContainer = styled57(YStack40, {
  name: "StateContainer",
  alignItems: "center",
  justifyContent: "center",
  gap: "$4",
  padding: "$8",
  borderRadius: "$4",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  minHeight: 200
});
var Carousel = ({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  data = [],
  isLoading = false,
  error = null,
  emptyState = null,
  children,
  ...props
}) => {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState14(false);
  const [canScrollNext, setCanScrollNext] = useState14(false);
  const onSelect = useCallback6((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = useCallback6(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback6(() => api?.scrollNext(), [api]);
  useEffect3(() => {
    if (!api) return;
    if (setApi) setApi(api);
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api, setApi, onSelect]);
  const contextValue = {
    carouselRef,
    api,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
    orientation,
    data,
    isLoading,
    error,
    emptyState
  };
  return /* @__PURE__ */ jsx64(CarouselContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx64(CarouselFrame, { role: "region", "aria-roledescription": "carousel", ...props, children }) });
};
Carousel.displayName = "Carousel";
var CarouselContent = React54.forwardRef(
  ({ renderItem, ...props }, ref) => {
    const {
      carouselRef,
      orientation,
      data,
      isLoading,
      error,
      emptyState
    } = useCarousel();
    const renderChildren2 = () => {
      if (isLoading) {
        return /* @__PURE__ */ jsx64(XStack36, { space: "$2", width: "100%", pl: "$2", children: Array.from({ length: 3 }).map((_, index) => /* @__PURE__ */ jsx64(CarouselItem, { flexBasis: "33.33%", children: /* @__PURE__ */ jsxs49(YStack40, { flex: 1, space: "$2", children: [
          /* @__PURE__ */ jsx64(Skeleton, { height: 150 }),
          /* @__PURE__ */ jsx64(Skeleton, { height: 20 }),
          /* @__PURE__ */ jsx64(Skeleton, { height: 20, width: "75%" })
        ] }) }, index)) });
      }
      if (error) {
        return /* @__PURE__ */ jsxs49(StateContainer, { children: [
          /* @__PURE__ */ jsx64(HelpCircle, { size: "$4", color: "$red10" }),
          /* @__PURE__ */ jsx64(Text27, { color: "$red10", textAlign: "center", children: error })
        ] });
      }
      if (!data || data.length === 0) {
        return emptyState || /* @__PURE__ */ jsxs49(StateContainer, { children: [
          /* @__PURE__ */ jsx64(HelpCircle, { size: "$4", color: "$gray10" }),
          /* @__PURE__ */ jsx64(Text27, { color: "$gray10", textAlign: "center", children: "Nenhum item para exibir." })
        ] });
      }
      return data.map((item, index) => renderItem(item, index));
    };
    return /* @__PURE__ */ jsx64(View8, { ref: carouselRef, overflow: "hidden", children: /* @__PURE__ */ jsx64(
      CarouselContentFrame,
      {
        ref,
        flexDirection: orientation === "horizontal" ? "row" : "column",
        marginLeft: orientation === "horizontal" ? "-$2" : "$0",
        marginTop: orientation === "vertical" ? "-$2" : "$0",
        ...props,
        children: renderChildren2()
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React54.forwardRef(
  (props, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx64(
      CarouselItemFrame,
      {
        ref,
        paddingLeft: orientation === "horizontal" ? "$2" : "$0",
        paddingTop: orientation === "vertical" ? "$2" : "$0",
        role: "group",
        "aria-roledescription": "slide",
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React54.forwardRef((props, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsx64(
    CarouselNavButton,
    {
      ref,
      side: "prev",
      disabled: !canScrollPrev,
      onPress: scrollPrev,
      icon: ChevronLeft3,
      "aria-label": "Slide anterior",
      ...props
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React54.forwardRef((props, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsx64(
    CarouselNavButton,
    {
      ref,
      side: "next",
      disabled: !canScrollNext,
      onPress: scrollNext,
      icon: ChevronRight6,
      "aria-label": "Pr\xF3ximo slide",
      ...props
    }
  );
});
CarouselNext.displayName = "CarouselNext";

// src/organisms/Command/Command.tsx
import React55 from "react";
import { Command as CommandPrimitive } from "cmdk";
import { styled as styled58, Text as Text28, XStack as XStack37, YStack as YStack41 } from "tamagui";
import { Search, PackageSearch, AlertTriangle as AlertTriangle3 } from "@tamagui/lucide-icons";
import { jsx as jsx65, jsxs as jsxs50 } from "react/jsx-runtime";
var CommandFrame = styled58(YStack41, {
  name: "Command",
  overflow: "hidden",
  backgroundColor: "$background",
  borderRadius: "$md",
  width: "100%",
  height: "100%"
});
var Command = React55.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx65(CommandFrame, { ref, asChild: true, children: /* @__PURE__ */ jsx65(CommandPrimitive, { className, ...props }) });
  }
);
Command.displayName = CommandPrimitive.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx65(Dialog, { ...props, children: /* @__PURE__ */ jsx65(DialogContentComposite, { p: "$0", overflow: "hidden", maw: 600, children: /* @__PURE__ */ jsx65(Command, { children }) }) });
};
var CommandInputFrame = styled58(XStack37, {
  name: "CommandInput",
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: "$borderColor",
  paddingHorizontal: "$3",
  gap: "$2"
});
var StyledCommandInput = styled58(CommandPrimitive.Input, {
  flex: 1,
  height: "$11",
  fontSize: "$4",
  outlineStyle: "none",
  borderWidth: 0,
  backgroundColor: "transparent",
  color: "$color"
});
var CommandInput = React55.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxs50(CommandInputFrame, { children: [
      /* @__PURE__ */ jsx65(Search, { size: "$1", color: "$color10" }),
      /* @__PURE__ */ jsx65(StyledCommandInput, { ref, ...props })
    ] });
  }
);
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandSkeleton = () => /* @__PURE__ */ jsxs50(YStack41, { gap: "$2", p: "$1", children: [
  /* @__PURE__ */ jsx65(Skeleton, { height: "$4", width: "80%" }),
  /* @__PURE__ */ jsx65(Skeleton, { height: "$4", width: "60%" }),
  /* @__PURE__ */ jsx65(Skeleton, { height: "$4", width: "90%" })
] });
var CommandError = ({ message }) => /* @__PURE__ */ jsxs50(YStack41, { ai: "center", jc: "center", gap: "$2", p: "$4", children: [
  /* @__PURE__ */ jsx65(AlertTriangle3, { color: "$red10" }),
  /* @__PURE__ */ jsx65(Text28, { color: "$red10", fontSize: "$4", children: message })
] });
var CommandListFrame = styled58(YStack41, {
  name: "CommandList",
  maxHeight: "$15",
  // 300px
  overflowY: "auto",
  overflowX: "hidden"
});
var CommandList = React55.forwardRef(
  ({ children, isLoading = false, error = null, ...props }, ref) => /* @__PURE__ */ jsx65(CommandListFrame, { ref, children: isLoading ? /* @__PURE__ */ jsx65(CommandSkeleton, {}) : error ? /* @__PURE__ */ jsx65(CommandError, { message: error }) : /* @__PURE__ */ jsx65(CommandPrimitive.List, { ...props, children }) })
);
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmptyContainer = styled58(YStack41, {
  padding: "$6",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2"
});
var CommandEmptyText = styled58(Text28, {
  fontSize: "$4",
  color: "$color10"
});
var CommandEmpty = React55.forwardRef(
  ({ title = "Nenhum resultado encontrado.", icon = /* @__PURE__ */ jsx65(PackageSearch, {}), ...props }, ref) => /* @__PURE__ */ jsx65(CommandPrimitive.Empty, { ref, asChild: true, ...props, children: /* @__PURE__ */ jsxs50(CommandEmptyContainer, { children: [
    icon,
    /* @__PURE__ */ jsx65(CommandEmptyText, { children: title })
  ] }) })
);
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroupFrame = styled58(YStack41, {
  overflow: "hidden",
  padding: "$1"
});
var CommandGroup = React55.forwardRef(({ heading, ...props }, ref) => /* @__PURE__ */ jsx65(CommandGroupFrame, { ref, asChild: true, children: /* @__PURE__ */ jsx65(CommandPrimitive.Group, { heading, ...props }) }));
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparatorFrame = styled58(YStack41, {
  height: "$px",
  backgroundColor: "$borderColor",
  margin: "-$1"
});
var CommandSeparator = React55.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsx65(CommandSeparatorFrame, { ref, asChild: true, children: /* @__PURE__ */ jsx65(CommandPrimitive.Separator, { ...props }) })
);
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItemFrame = styled58(XStack37, {
  name: "CommandItem",
  alignItems: "center",
  paddingVertical: "$2",
  paddingHorizontal: "$3",
  borderRadius: "$sm",
  cursor: "pointer",
  userSelect: "none",
  hoverStyle: {
    backgroundColor: "$backgroundHover"
  },
  focusStyle: {
    backgroundColor: "$backgroundFocus"
  },
  disabledStyle: {
    opacity: 0.5,
    pointerEvents: "none"
  }
});
var CommandItem = React55.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsx65(CommandItemFrame, { ref, asChild: true, children: /* @__PURE__ */ jsx65(CommandPrimitive.Item, { ...props }) })
);
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = styled58(Text28, {
  marginLeft: "auto",
  fontSize: "$2",
  color: "$color11"
});

// src/organisms/Sidebar/Sidebar.tsx
import { useState as useState15 } from "react";
import { ScrollView as ScrollViewOriginal, Separator as Separator7, Text as TextOriginal, YStack as YStackOriginal, styled as styled59 } from "tamagui";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, MenuSquare as MenuSquareIcon, AlertCircle as AlertCircleIcon, Inbox as InboxIcon } from "@tamagui/lucide-icons";
import { Fragment as Fragment9, jsx as jsx66, jsxs as jsxs51 } from "react/jsx-runtime";
var Button6 = Button;
var YStack42 = YStackOriginal;
var ScrollView4 = ScrollViewOriginal;
var Text29 = TextOriginal;
var Skeleton3 = Skeleton;
var ChevronLeft4 = ChevronLeftIcon;
var ChevronRight7 = ChevronRightIcon;
var MenuSquare = MenuSquareIcon;
var AlertCircle2 = AlertCircleIcon;
var Inbox2 = InboxIcon;
var SidebarContainer = styled59(YStack42, {
  name: "SidebarContainer",
  tag: "aside",
  borderRightWidth: 1,
  borderColor: "$borderColor",
  padding: "$4",
  gap: "$4",
  width: "100%",
  backgroundColor: "$background",
  // Collapsible variant styles
  variants: {
    collapsible: {
      true: {
        animation: "bouncy"
      }
    },
    collapsed: {
      true: {
        width: 72,
        paddingHorizontal: "$2",
        alignItems: "center"
      },
      false: {
        width: 280
      }
    }
  }
});
var SidebarHeader = styled59(YStack42, {
  name: "SidebarHeader"
});
var SidebarContent = styled59(YStack42, {
  name: "SidebarContent",
  f: 1
});
var SidebarFooter = styled59(YStack42, {
  name: "SidebarFooter"
});
var SidebarSkeleton = () => /* @__PURE__ */ jsxs51(YStack42, { gap: "$4", padding: "$4", width: "100%", children: [
  /* @__PURE__ */ jsx66(Skeleton3, { height: "$10" }),
  /* @__PURE__ */ jsxs51(YStack42, { gap: "$3", children: [
    /* @__PURE__ */ jsx66(Skeleton3, { height: "$8" }),
    /* @__PURE__ */ jsx66(Skeleton3, { height: "$8" }),
    /* @__PURE__ */ jsx66(Skeleton3, { height: "$8" })
  ] }),
  /* @__PURE__ */ jsx66(YStack42, { flex: 1 }),
  /* @__PURE__ */ jsx66(Skeleton3, { height: "$10" })
] });
var EmptyState = ({ message }) => /* @__PURE__ */ jsxs51(YStack42, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", children: [
  /* @__PURE__ */ jsx66(Inbox2, { size: "$2", color: "$gray10" }),
  /* @__PURE__ */ jsx66(Text29, { color: "$gray11", fontSize: "$3", children: message })
] });
var ErrorState = ({ message }) => /* @__PURE__ */ jsxs51(YStack42, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", children: [
  /* @__PURE__ */ jsx66(AlertCircle2, { size: "$2", color: "$red10" }),
  /* @__PURE__ */ jsx66(Text29, { color: "$red10", fontSize: "$3", textAlign: "center", children: message })
] });
var DesktopSidebar = ({
  header,
  children,
  footer,
  isCollapsed: isCollapsedProp,
  onCollapsedChange,
  variant,
  isLoading,
  isEmpty,
  emptyMessage = "Sem conte\xFAdo",
  error
}) => {
  const [isCollapsedInternal, setIsCollapsedInternal] = useState15(false);
  const isControlled = isCollapsedProp !== void 0;
  const isCollapsed = isControlled ? isCollapsedProp : isCollapsedInternal;
  const toggleSidebar = () => {
    if (isControlled) {
      onCollapsedChange?.(!isCollapsed);
    } else {
      setIsCollapsedInternal(!isCollapsedInternal);
    }
  };
  const isCollapsible = variant === "collapsible";
  if (isLoading) {
    return /* @__PURE__ */ jsx66(SidebarContainer, { collapsed: isCollapsible && isCollapsed, children: /* @__PURE__ */ jsx66(SidebarSkeleton, {}) });
  }
  return /* @__PURE__ */ jsxs51(
    SidebarContainer,
    {
      collapsible: isCollapsible,
      collapsed: isCollapsible && isCollapsed,
      ...variant === "floating" && {
        position: "absolute",
        height: "100%",
        zIndex: 10
      },
      children: [
        header && /* @__PURE__ */ jsx66(SidebarHeader, { children: header }),
        /* @__PURE__ */ jsx66(Separator7, {}),
        /* @__PURE__ */ jsx66(SidebarContent, { children: error ? /* @__PURE__ */ jsx66(ErrorState, { message: error }) : isEmpty ? /* @__PURE__ */ jsx66(EmptyState, { message: emptyMessage }) : /* @__PURE__ */ jsx66(ScrollView4, { children: /* @__PURE__ */ jsx66(YStack42, { gap: "$2", children }) }) }),
        footer && /* @__PURE__ */ jsxs51(Fragment9, { children: [
          /* @__PURE__ */ jsx66(Separator7, {}),
          /* @__PURE__ */ jsx66(SidebarFooter, { children: footer })
        ] }),
        isCollapsible && /* @__PURE__ */ jsx66(
          Button6,
          {
            onPress: toggleSidebar,
            circular: true,
            size: "sm",
            position: "absolute",
            top: 20,
            right: -15,
            zIndex: 20,
            children: isCollapsed ? /* @__PURE__ */ jsx66(ChevronRight7, { size: "$1.5" }) : /* @__PURE__ */ jsx66(ChevronLeft4, { size: "$1.5" })
          }
        )
      ]
    }
  );
};
var MobileSidebar = ({ children, header, footer, isLoading, isEmpty, emptyMessage = "Sem conte\xFAdo", error }) => {
  const [open, setOpen] = useState15(false);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx66(SidebarSkeleton, {});
    }
    if (error) {
      return /* @__PURE__ */ jsx66(ErrorState, { message: error });
    }
    if (isEmpty) {
      return /* @__PURE__ */ jsx66(EmptyState, { message: emptyMessage });
    }
    return /* @__PURE__ */ jsxs51(Fragment9, { children: [
      header && /* @__PURE__ */ jsx66(SidebarHeader, { children: header }),
      /* @__PURE__ */ jsx66(ScrollView4, { children: /* @__PURE__ */ jsx66(YStack42, { gap: "$2", children }) }),
      /* @__PURE__ */ jsx66(YStack42, { flex: 1 }),
      footer && /* @__PURE__ */ jsx66(SidebarFooter, { children: footer })
    ] });
  };
  return /* @__PURE__ */ jsxs51(Sheet, { open, onOpenChange: setOpen, modal: true, snapPoints: [90], children: [
    /* @__PURE__ */ jsx66(Sheet.Trigger, { asChild: true, children: /* @__PURE__ */ jsx66(Button6, { circular: true, children: /* @__PURE__ */ jsx66(MenuSquare, { size: "$1.5" }) }) }),
    /* @__PURE__ */ jsx66(Sheet.Content, { alignItems: "flex-start", justifyContent: "flex-start", children: /* @__PURE__ */ jsxs51(YStack42, { gap: "$4", paddingTop: "$6", paddingHorizontal: "$4", flex: 1, height: "100%", width: 300, backgroundColor: "$background", children: [
      renderContent(),
      /* @__PURE__ */ jsx66(Button6, { onPress: () => setOpen(false), chromeless: true, children: "Fechar" })
    ] }) })
  ] });
};
var Sidebar = (props) => {
  return /* @__PURE__ */ jsxs51(Fragment9, { children: [
    /* @__PURE__ */ jsx66(YStack42, { display: "none", $sm: { display: "flex" }, children: /* @__PURE__ */ jsx66(MobileSidebar, { ...props }) }),
    /* @__PURE__ */ jsx66(YStack42, { display: "flex", $sm: { display: "none" }, children: /* @__PURE__ */ jsx66(DesktopSidebar, { ...props }) })
  ] });
};

// src/organisms/BarChart/BarChart.tsx
import { YStack as YStack43, Text as Text30, useTheme } from "tamagui";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as Tooltip2,
  ResponsiveContainer
} from "recharts";
import { AlertTriangle as AlertTriangle4, BarChart3 } from "@tamagui/lucide-icons";
import React57 from "react";
import { jsx as jsx67, jsxs as jsxs52 } from "react/jsx-runtime";
var BarChart = ({
  data,
  xKey,
  yKey,
  color = "$primary",
  height = 300,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme();
  const themeColor = theme[color];
  const barColor = themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const chartData = React57.useMemo(() => data ? [...data] : [], [data]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx67(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs52(YStack43, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx67(AlertTriangle4, { color: "$red10" }),
        /* @__PURE__ */ jsx67(Text30, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!chartData || chartData.length === 0) {
      return /* @__PURE__ */ jsxs52(YStack43, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, backgroundColor: "$background", children: [
        /* @__PURE__ */ jsx67(BarChart3, { color: "$gray8", size: 32 }),
        /* @__PURE__ */ jsx67(Text30, { color: "$gray10", children: "Nenhum dado dispon\xEDvel" })
      ] });
    }
    return /* @__PURE__ */ jsx67(YStack43, { width: "100%", height, children: /* @__PURE__ */ jsx67(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs52(RechartsBarChart, { data: chartData, margin: { top: 20, right: 30, left: 20, bottom: 5 }, children: [
      /* @__PURE__ */ jsx67(CartesianGrid, { strokeDasharray: "3 3", vertical: false, stroke: gridColor }),
      /* @__PURE__ */ jsx67(
        XAxis,
        {
          dataKey: xKey,
          stroke: axisColor,
          tick: { fill: textColor, fontSize: 12 },
          tickLine: false,
          axisLine: { stroke: axisColor }
        }
      ),
      /* @__PURE__ */ jsx67(
        YAxis,
        {
          stroke: axisColor,
          tick: { fill: textColor, fontSize: 12 },
          tickLine: false,
          axisLine: false
        }
      ),
      /* @__PURE__ */ jsx67(
        Tooltip2,
        {
          cursor: { fill: "transparent" },
          contentStyle: { borderRadius: "8px", border: `1px solid ${gridColor}` }
        }
      ),
      /* @__PURE__ */ jsx67(Bar, { dataKey: yKey, fill: barColor, radius: [4, 4, 0, 0] })
    ] }) }) });
  };
  return /* @__PURE__ */ jsxs52(YStack43, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};
var ColumnChart = BarChart;
var Charts = BarChart;

// src/organisms/LineChart/LineChart.tsx
import React58 from "react";
import { YStack as YStack44, styled as styled60, Text as Text31, useTheme as useTheme2, XStack as XStack38 } from "tamagui";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis as XAxis2,
  YAxis as YAxis2,
  CartesianGrid as CartesianGrid2,
  Tooltip as Tooltip3,
  ResponsiveContainer as ResponsiveContainer2
} from "recharts";
import { AlertCircle as AlertCircle3, Inbox as Inbox3 } from "@tamagui/lucide-icons";
import { jsx as jsx68, jsxs as jsxs53 } from "react/jsx-runtime";
var LineChartContainer = styled60(YStack44, {
  name: "LineChart",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  tag: "section"
});
var Header = styled60(XStack38, {
  justifyContent: "space-between",
  alignItems: "center",
  gap: "$2"
});
var ChartContainer = styled60(YStack44, {
  flex: 1,
  minHeight: 300,
  justifyContent: "center",
  alignItems: "center"
});
var StateContainer2 = styled60(YStack44, {
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  flex: 1,
  padding: "$4"
});
var LineChart = ({
  title,
  data,
  xKey,
  yKey,
  color = "$primary",
  isLoading = false,
  error,
  headerActions,
  footerContent
}) => {
  const theme = useTheme2();
  const themeColor = theme[color];
  const lineColor = themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const chartData = React58.useMemo(() => data ? [...data] : [], [data]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx68(Skeleton, { width: "100%", height: 300 });
    }
    if (error) {
      return /* @__PURE__ */ jsxs53(StateContainer2, { children: [
        /* @__PURE__ */ jsx68(AlertCircle3, { color: "$red10", size: "$2" }),
        /* @__PURE__ */ jsx68(Text31, { color: "$red10", children: "Erro ao carregar os dados." }),
        /* @__PURE__ */ jsx68(Text31, { fontSize: "$2", color: "$color11", children: error })
      ] });
    }
    if (!chartData || chartData.length === 0) {
      return /* @__PURE__ */ jsxs53(StateContainer2, { children: [
        /* @__PURE__ */ jsx68(Inbox3, { size: "$2" }),
        /* @__PURE__ */ jsx68(Text31, { children: "Sem dados para exibir" })
      ] });
    }
    return /* @__PURE__ */ jsx68(ChartContainer, { children: /* @__PURE__ */ jsx68(ResponsiveContainer2, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs53(
      RechartsLineChart,
      {
        data: chartData,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        },
        children: [
          /* @__PURE__ */ jsx68(CartesianGrid2, { strokeDasharray: "3 3", stroke: gridColor, vertical: false }),
          /* @__PURE__ */ jsx68(
            XAxis2,
            {
              dataKey: xKey,
              stroke: axisColor,
              tick: { fill: textColor },
              tickLine: false,
              axisLine: false
            }
          ),
          /* @__PURE__ */ jsx68(
            YAxis2,
            {
              stroke: axisColor,
              tick: { fill: textColor },
              tickLine: false,
              axisLine: false
            }
          ),
          /* @__PURE__ */ jsx68(
            Tooltip3,
            {
              contentStyle: {
                backgroundColor: theme.background?.get() || "#fff",
                borderColor: gridColor,
                borderRadius: 8
              }
            }
          ),
          /* @__PURE__ */ jsx68(
            Line,
            {
              type: "monotone",
              dataKey: yKey,
              stroke: lineColor,
              activeDot: { r: 8 },
              strokeWidth: 2
            }
          )
        ]
      }
    ) }) });
  };
  return /* @__PURE__ */ jsxs53(LineChartContainer, { children: [
    /* @__PURE__ */ jsxs53(Header, { children: [
      title && /* @__PURE__ */ jsx68(Text31, { fontSize: "$5", children: title }),
      headerActions
    ] }),
    /* @__PURE__ */ jsx68(ChartContainer, { children: renderContent() }),
    footerContent
  ] });
};
var TimeSeriesChart = LineChart;

// src/organisms/PieChart/PieChart.tsx
import React59 from "react";
import { YStack as YStack45, styled as styled61, Text as Text32, useTheme as useTheme3 } from "tamagui";
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip as Tooltip4, ResponsiveContainer as ResponsiveContainer3 } from "recharts";
import { AlertCircle as AlertCircle4, Inbox as Inbox4 } from "@tamagui/lucide-icons";
import { jsx as jsx69, jsxs as jsxs54 } from "react/jsx-runtime";
var PieChartContainer = styled61(YStack45, {
  name: "PieChart",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  alignItems: "center",
  tag: "section"
});
var ChartWrapper = styled61(YStack45, {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: 300
});
var StateContainer3 = styled61(YStack45, {
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  flex: 1,
  padding: "$4"
});
var PieChart = ({
  title,
  data,
  xKey,
  yKey,
  variant = "pie",
  colors,
  height = 300,
  isLoading = false,
  error,
  footerContent
}) => {
  const theme = useTheme3();
  const defaultColor = theme.blue10?.get() || "#007BFF";
  const colorScale = colors || [
    defaultColor,
    theme.green10?.get() || "#28A745",
    theme.orange10?.get() || "#FD7E14",
    theme.red10?.get() || "#DC3545",
    theme.purple10?.get() || "#6F42C1"
  ];
  const innerRadius = variant === "donut" ? "60%" : "0%";
  const outerRadius = "80%";
  const chartData = React59.useMemo(() => data ? [...data] : [], [data]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx69(Skeleton, { width: "100%", height });
    }
    if (error) {
      return /* @__PURE__ */ jsxs54(StateContainer3, { children: [
        /* @__PURE__ */ jsx69(AlertCircle4, { color: "$red10", size: "$2" }),
        /* @__PURE__ */ jsx69(Text32, { color: "$red10", children: "Erro ao carregar os dados." }),
        /* @__PURE__ */ jsx69(Text32, { fontSize: "$2", color: "$color11", children: error })
      ] });
    }
    if (!chartData || chartData.length === 0) {
      return /* @__PURE__ */ jsxs54(StateContainer3, { children: [
        /* @__PURE__ */ jsx69(Inbox4, { size: "$2" }),
        /* @__PURE__ */ jsx69(Text32, { children: "Sem dados para exibir" })
      ] });
    }
    return /* @__PURE__ */ jsx69(YStack45, { width: "100%", height, children: /* @__PURE__ */ jsx69(ResponsiveContainer3, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs54(RechartsPieChart, { children: [
      /* @__PURE__ */ jsx69(
        Pie,
        {
          data: chartData,
          dataKey: yKey,
          nameKey: xKey,
          cx: "50%",
          cy: "50%",
          innerRadius,
          outerRadius,
          paddingAngle: 2,
          children: chartData.map((_, index) => /* @__PURE__ */ jsx69(Cell, { fill: colorScale[index % colorScale.length] }, `cell-${index}`))
        }
      ),
      /* @__PURE__ */ jsx69(
        Tooltip4,
        {
          contentStyle: {
            borderRadius: "8px",
            border: `1px solid ${theme.borderColor?.get() || "#eee"}`,
            backgroundColor: theme.background?.get() || "white"
          },
          itemStyle: { color: theme.color?.get() || "#000" }
        }
      )
    ] }) }) });
  };
  return /* @__PURE__ */ jsxs54(PieChartContainer, { children: [
    title && /* @__PURE__ */ jsx69(Text32, { fontSize: "$5", fontWeight: "bold", children: title }),
    /* @__PURE__ */ jsx69(ChartWrapper, { children: renderContent() }),
    footerContent
  ] });
};
var DonutChart = (props) => /* @__PURE__ */ jsx69(PieChart, { ...props, variant: "donut" });

// src/organisms/AreaChart/AreaChart.tsx
import React60 from "react";
import { YStack as YStack46, styled as styled62, Text as Text33, useTheme as useTheme4 } from "tamagui";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis as XAxis3,
  YAxis as YAxis3,
  CartesianGrid as CartesianGrid3,
  Tooltip as Tooltip5,
  ResponsiveContainer as ResponsiveContainer4
} from "recharts";
import { AlertCircle as AlertCircle5, Inbox as Inbox5 } from "@tamagui/lucide-icons";
import { jsx as jsx70, jsxs as jsxs55 } from "react/jsx-runtime";
var AreaChartContainer = styled62(YStack46, {
  name: "AreaChart",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  tag: "section"
});
var ChartWrapper2 = styled62(YStack46, {
  flex: 1,
  minHeight: 300,
  justifyContent: "center",
  alignItems: "center"
});
var StateContainer4 = styled62(YStack46, {
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  flex: 1,
  padding: "$4"
});
var AreaChart = ({
  title,
  data,
  xKey,
  yKey,
  stacked = false,
  colors,
  height = 300,
  isLoading = false,
  error,
  footerContent
}) => {
  const theme = useTheme4();
  const defaultColor = theme.blue10?.get() || "#007BFF";
  const colorScale = colors || [
    defaultColor,
    theme.green10?.get() || "#28A745",
    theme.orange10?.get() || "#FD7E14"
  ];
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const { chartData, seriesKeys } = React60.useMemo(() => {
    let processedChartData = [];
    const processedSeriesKeys = [];
    if (!data) return { chartData: [], seriesKeys: [] };
    const isMultiSeries = Array.isArray(data) && Array.isArray(data[0]);
    if (isMultiSeries) {
      const seriesData = data;
      if (seriesData.length > 0) {
        seriesData.forEach((_, sIndex) => processedSeriesKeys.push(`series_${sIndex}`));
        processedChartData = seriesData[0].map((item, index) => {
          const mergedItem = { [xKey]: item[xKey] };
          seriesData.forEach((series, sIndex) => {
            const key = `series_${sIndex}`;
            mergedItem[key] = series[index]?.[yKey];
          });
          return mergedItem;
        });
      }
    } else {
      processedChartData = [...data];
      processedSeriesKeys.push(yKey);
    }
    return { chartData: processedChartData, seriesKeys: processedSeriesKeys };
  }, [data, xKey, yKey]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx70(Skeleton, { width: "100%", height });
    }
    if (error) {
      return /* @__PURE__ */ jsxs55(StateContainer4, { children: [
        /* @__PURE__ */ jsx70(AlertCircle5, { color: "$red10", size: "$2" }),
        /* @__PURE__ */ jsx70(Text33, { color: "$red10", children: "Erro ao carregar os dados." }),
        /* @__PURE__ */ jsx70(Text33, { fontSize: "$2", color: "$color11", children: error })
      ] });
    }
    if (!chartData || chartData.length === 0) {
      return /* @__PURE__ */ jsxs55(StateContainer4, { children: [
        /* @__PURE__ */ jsx70(Inbox5, { size: "$2" }),
        /* @__PURE__ */ jsx70(Text33, { children: "Sem dados para exibir" })
      ] });
    }
    return /* @__PURE__ */ jsx70(YStack46, { width: "100%", height, children: /* @__PURE__ */ jsx70(ResponsiveContainer4, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs55(
      RechartsAreaChart,
      {
        data: chartData,
        margin: { top: 20, right: 30, left: 20, bottom: 5 },
        children: [
          /* @__PURE__ */ jsx70(CartesianGrid3, { strokeDasharray: "3 3", stroke: gridColor, vertical: false }),
          /* @__PURE__ */ jsx70(
            XAxis3,
            {
              dataKey: xKey,
              stroke: axisColor,
              tick: { fill: textColor, fontSize: 12 },
              tickLine: false,
              axisLine: { stroke: axisColor }
            }
          ),
          /* @__PURE__ */ jsx70(
            YAxis3,
            {
              stroke: axisColor,
              tick: { fill: textColor, fontSize: 12 },
              tickLine: false,
              axisLine: false
            }
          ),
          /* @__PURE__ */ jsx70(
            Tooltip5,
            {
              contentStyle: {
                borderRadius: "8px",
                border: `1px solid ${gridColor}`,
                backgroundColor: theme.background?.get() || "white"
              }
            }
          ),
          seriesKeys.map((key, index) => /* @__PURE__ */ jsx70(
            Area,
            {
              type: "monotone",
              dataKey: key,
              stackId: stacked ? "1" : void 0,
              stroke: colorScale[index % colorScale.length],
              fill: colorScale[index % colorScale.length],
              fillOpacity: 0.6
            },
            key
          ))
        ]
      }
    ) }) });
  };
  return /* @__PURE__ */ jsxs55(AreaChartContainer, { children: [
    title && /* @__PURE__ */ jsx70(Text33, { fontSize: "$5", fontWeight: "bold", children: title }),
    /* @__PURE__ */ jsx70(ChartWrapper2, { children: renderContent() }),
    footerContent
  ] });
};

// src/organisms/ScatterChart/ScatterChart.tsx
import React61 from "react";
import { YStack as YStack47, styled as styled63, Text as Text34, useTheme as useTheme5 } from "tamagui";
import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip
} from "victory";
import { AlertCircle as AlertCircle6, Inbox as Inbox6 } from "@tamagui/lucide-icons";
import { jsx as jsx71, jsxs as jsxs56 } from "react/jsx-runtime";
var ScatterChartContainer = styled63(YStack47, {
  name: "ScatterChart",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  tag: "section"
});
var ChartWrapper3 = styled63(YStack47, {
  flex: 1,
  minHeight: 300,
  justifyContent: "center",
  alignItems: "center"
});
var StateContainer5 = styled63(YStack47, {
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  flex: 1,
  padding: "$4"
});
var ScatterChart = ({
  title,
  data,
  xKey,
  yKey,
  bubbleKey,
  color,
  height = 300,
  isLoading = false,
  error,
  footerContent
}) => {
  const theme = useTheme5();
  const defaultColor = theme.blue10?.get() || "#007BFF";
  const scatterColor = color ? theme[color]?.get() || color : defaultColor;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const chartData = React61.useMemo(() => data ? [...data] : [], [data]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx71(Skeleton, { width: "100%", height });
    }
    if (error) {
      return /* @__PURE__ */ jsxs56(StateContainer5, { children: [
        /* @__PURE__ */ jsx71(AlertCircle6, { color: "$red10", size: "$2" }),
        /* @__PURE__ */ jsx71(Text34, { color: "$red10", children: "Erro ao carregar os dados." }),
        /* @__PURE__ */ jsx71(Text34, { fontSize: "$2", color: "$color11", children: error })
      ] });
    }
    if (!chartData || chartData.length === 0) {
      return /* @__PURE__ */ jsxs56(StateContainer5, { children: [
        /* @__PURE__ */ jsx71(Inbox6, { size: "$2" }),
        /* @__PURE__ */ jsx71(Text34, { children: "Sem dados para exibir" })
      ] });
    }
    return /* @__PURE__ */ jsxs56(
      VictoryChart,
      {
        height,
        padding: { top: 20, bottom: 50, left: 50, right: 20 },
        containerComponent: /* @__PURE__ */ jsx71(
          VictoryVoronoiContainer,
          {
            voronoiDimension: "x",
            labels: ({ datum }) => `${datum[yKey]}`,
            labelComponent: /* @__PURE__ */ jsx71(VictoryTooltip, {})
          }
        ),
        children: [
          /* @__PURE__ */ jsx71(
            VictoryAxis,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 }
              }
            }
          ),
          /* @__PURE__ */ jsx71(
            VictoryAxis,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 },
                grid: { stroke: gridColor, strokeDasharray: "4, 4" }
              }
            }
          ),
          /* @__PURE__ */ jsx71(
            VictoryScatter,
            {
              data: chartData,
              x: xKey,
              y: yKey,
              size: bubbleKey ? ({ datum }) => Math.max(3, datum[bubbleKey] / 2) : 5,
              style: { data: { fill: scatterColor } }
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs56(ScatterChartContainer, { children: [
    title && /* @__PURE__ */ jsx71(Text34, { fontSize: "$5", fontWeight: "bold", children: title }),
    /* @__PURE__ */ jsx71(ChartWrapper3, { children: renderContent() }),
    footerContent
  ] });
};

// src/organisms/ComboChart/ComboChart.tsx
import { YStack as YStack48, styled as styled64, Text as Text35, useTheme as useTheme6 } from "tamagui";
import {
  VictoryChart as VictoryChart2,
  VictoryAxis as VictoryAxis2,
  VictoryVoronoiContainer as VictoryVoronoiContainer2,
  VictoryTooltip as VictoryTooltip2,
  VictoryGroup
} from "victory";
import { AlertCircle as AlertCircle7, Inbox as Inbox7 } from "@tamagui/lucide-icons";
import { jsx as jsx72, jsxs as jsxs57 } from "react/jsx-runtime";
var ComboChartContainer = styled64(YStack48, {
  name: "ComboChart",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  tag: "section"
});
var ChartWrapper4 = styled64(YStack48, {
  flex: 1,
  minHeight: 300,
  justifyContent: "center",
  alignItems: "center"
});
var StateContainer6 = styled64(YStack48, {
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  flex: 1,
  padding: "$4"
});
var ComboChart = ({
  title,
  children,
  height = 300,
  isLoading = false,
  error,
  footerContent
}) => {
  const theme = useTheme6();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx72(Skeleton, { width: "100%", height });
    }
    if (error) {
      return /* @__PURE__ */ jsxs57(StateContainer6, { children: [
        /* @__PURE__ */ jsx72(AlertCircle7, { color: "$red10", size: "$2" }),
        /* @__PURE__ */ jsx72(Text35, { color: "$red10", children: "Erro ao carregar os dados." }),
        /* @__PURE__ */ jsx72(Text35, { fontSize: "$2", color: "$color11", children: error })
      ] });
    }
    if (!children) {
      return /* @__PURE__ */ jsxs57(StateContainer6, { children: [
        /* @__PURE__ */ jsx72(Inbox7, { size: "$2" }),
        /* @__PURE__ */ jsx72(Text35, { children: "Sem dados para exibir" })
      ] });
    }
    return /* @__PURE__ */ jsxs57(
      VictoryChart2,
      {
        height,
        padding: { top: 20, bottom: 50, left: 50, right: 20 },
        containerComponent: /* @__PURE__ */ jsx72(VictoryVoronoiContainer2, { labelComponent: /* @__PURE__ */ jsx72(VictoryTooltip2, {}) }),
        children: [
          /* @__PURE__ */ jsx72(
            VictoryAxis2,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 }
              }
            }
          ),
          /* @__PURE__ */ jsx72(
            VictoryAxis2,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 },
                grid: { stroke: gridColor, strokeDasharray: "4, 4" }
              }
            }
          ),
          /* @__PURE__ */ jsx72(VictoryGroup, { children })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs57(ComboChartContainer, { children: [
    title && /* @__PURE__ */ jsx72(Text35, { fontSize: "$5", fontWeight: "bold", children: title }),
    /* @__PURE__ */ jsx72(ChartWrapper4, { children: renderContent() }),
    footerContent
  ] });
};

// src/organisms/BoxPlotChart/BoxPlotChart.tsx
import { YStack as YStack49, Text as Text36, useTheme as useTheme7 } from "tamagui";
import { VictoryChart as VictoryChart3, VictoryBoxPlot, VictoryAxis as VictoryAxis3, VictoryContainer } from "victory";
import { AlertTriangle as AlertTriangle5, BarChart as BoxPlotIcon } from "@tamagui/lucide-icons";
import { jsx as jsx73, jsxs as jsxs58 } from "react/jsx-runtime";
var BoxPlotChart = ({
  data,
  xKey = "x",
  minKey = "min",
  maxKey = "max",
  q1Key = "q1",
  q3Key = "q3",
  medianKey = "median",
  color = "$primary",
  height = 300,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme7();
  const themeColor = theme[color];
  const boxColor = themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx73(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs58(YStack49, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx73(AlertTriangle5, { color: "$red10" }),
        /* @__PURE__ */ jsx73(Text36, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ jsxs58(YStack49, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx73(BoxPlotIcon, { color: "$gray10" }),
        /* @__PURE__ */ jsx73(Text36, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ jsxs58(
      VictoryChart3,
      {
        domainPadding: { x: 20, y: 20 },
        height,
        containerComponent: /* @__PURE__ */ jsx73(VictoryContainer, { responsive: true }),
        children: [
          /* @__PURE__ */ jsx73(
            VictoryAxis3,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ jsx73(
            VictoryAxis3,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" },
                grid: { stroke: gridColor, strokeDasharray: "4, 4" }
              }
            }
          ),
          /* @__PURE__ */ jsx73(
            VictoryBoxPlot,
            {
              data,
              x: xKey,
              min: minKey,
              max: maxKey,
              q1: q1Key,
              q3: q3Key,
              median: medianKey,
              style: {
                min: { stroke: boxColor, strokeWidth: 2 },
                max: { stroke: boxColor, strokeWidth: 2 },
                q1: { fill: boxColor, fillOpacity: 0.5, stroke: boxColor, strokeWidth: 2 },
                q3: { fill: boxColor, fillOpacity: 0.5, stroke: boxColor, strokeWidth: 2 },
                median: { stroke: textColor, strokeWidth: 2 }
              }
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs58(YStack49, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/RadarChart/RadarChart.tsx
import { YStack as YStack50, Text as Text37, useTheme as useTheme8 } from "tamagui";
import { VictoryChart as VictoryChart4, VictoryPolarAxis, VictoryArea, VictoryGroup as VictoryGroup2, VictoryContainer as VictoryContainer2 } from "victory";
import { AlertTriangle as AlertTriangle6, Activity as RadarIcon } from "@tamagui/lucide-icons";
import React62 from "react";
import { jsx as jsx74, jsxs as jsxs59 } from "react/jsx-runtime";
var RadarChart = ({
  data,
  keys,
  color = "$primary",
  height = 300,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme8();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const getColor = (c) => {
    const themeColor = theme[c];
    return themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : c;
  };
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx74(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs59(YStack50, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx74(AlertTriangle6, { color: "$red10" }),
        /* @__PURE__ */ jsx74(Text37, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0 || !keys) {
      return /* @__PURE__ */ jsxs59(YStack50, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx74(RadarIcon, { color: "$gray10" }),
        /* @__PURE__ */ jsx74(Text37, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    const chartData = React62.useMemo(() => data ? [...data] : [], [data]);
    const datasets = Array.isArray(chartData[0]) ? chartData : [chartData];
    const colors = Array.isArray(color) ? color : [color];
    return /* @__PURE__ */ jsxs59(
      VictoryChart4,
      {
        polar: true,
        height,
        domainPadding: { x: 20, y: 20 },
        containerComponent: /* @__PURE__ */ jsx74(VictoryContainer2, { responsive: true }),
        children: [
          /* @__PURE__ */ jsx74(
            VictoryGroup2,
            {
              colorScale: colors.map((c) => getColor(c)),
              style: { data: { fillOpacity: 0.2, strokeWidth: 2 } },
              children: datasets.map((dataset, i) => /* @__PURE__ */ jsx74(VictoryArea, { data: dataset }, i))
            }
          ),
          datasets[0]?.map((d, i) => {
            return /* @__PURE__ */ jsx74(VictoryPolarAxis, { dependentAxis: true, style: { axisLabel: { padding: 10 } }, labelPlacement: "vertical" }, i);
          }),
          /* @__PURE__ */ jsx74(
            VictoryPolarAxis,
            {
              labelPlacement: "parallel",
              tickFormat: () => "",
              style: {
                axis: { stroke: axisColor },
                grid: { stroke: axisColor, opacity: 0.5 }
              }
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs59(YStack50, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/PolarChart/PolarChart.tsx
import { YStack as YStack51, Text as Text38, useTheme as useTheme9 } from "tamagui";
import { VictoryChart as VictoryChart5, VictoryPolarAxis as VictoryPolarAxis2, VictoryBar, VictoryContainer as VictoryContainer3, VictoryTheme } from "victory";
import { AlertTriangle as AlertTriangle7, PieChart as PolarIcon } from "@tamagui/lucide-icons";
import { jsx as jsx75, jsxs as jsxs60 } from "react/jsx-runtime";
var PolarChart = ({
  data,
  xKey,
  yKey,
  color = "$primary",
  height = 300,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme9();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const getColor = (c) => {
    const themeColor = theme[c];
    return themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : c;
  };
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx75(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs60(YStack51, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx75(AlertTriangle7, { color: "$red10" }),
        /* @__PURE__ */ jsx75(Text38, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ jsxs60(YStack51, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx75(PolarIcon, { color: "$gray10" }),
        /* @__PURE__ */ jsx75(Text38, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    const colors = Array.isArray(color) ? color : [color];
    return /* @__PURE__ */ jsxs60(
      VictoryChart5,
      {
        polar: true,
        height,
        domainPadding: { x: 20, y: 20 },
        theme: VictoryTheme.material,
        containerComponent: /* @__PURE__ */ jsx75(VictoryContainer3, { responsive: true }),
        children: [
          /* @__PURE__ */ jsx75(
            VictoryPolarAxis2,
            {
              style: {
                axis: { stroke: axisColor },
                grid: { stroke: axisColor, opacity: 0.5 },
                tickLabels: { fill: textColor, fontSize: 12 }
              }
            }
          ),
          /* @__PURE__ */ jsx75(
            VictoryBar,
            {
              data,
              x: xKey,
              y: yKey,
              style: {
                data: {
                  fill: (d) => {
                    return getColor(colors[d.index % colors.length] || colors[0]);
                  },
                  width: 30
                }
              }
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs60(YStack51, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/WaterfallChart/WaterfallChart.tsx
import { YStack as YStack52, Text as Text39, useTheme as useTheme10 } from "tamagui";
import { VictoryChart as VictoryChart6, VictoryBar as VictoryBar2, VictoryAxis as VictoryAxis4, VictoryContainer as VictoryContainer4 } from "victory";
import { AlertTriangle as AlertTriangle8, BarChart as WaterfallIcon } from "@tamagui/lucide-icons";
import { jsx as jsx76, jsxs as jsxs61 } from "react/jsx-runtime";
var WaterfallChart = ({
  data,
  xKey,
  yKey,
  color = "$green10",
  negativeColor = "$red10",
  totalColor = "$blue10",
  height = 300,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme10();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const getColor = (c) => {
    const themeColor = theme[c];
    return themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : c;
  };
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx76(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs61(YStack52, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx76(AlertTriangle8, { color: "$red10" }),
        /* @__PURE__ */ jsx76(Text39, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ jsxs61(YStack52, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx76(WaterfallIcon, { color: "$gray10" }),
        /* @__PURE__ */ jsx76(Text39, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    let runningTotal = 0;
    const processedData = data.map((d) => {
      const val = d[yKey];
      const isTotal = d.isTotal;
      let y0 = runningTotal;
      let y = runningTotal + val;
      if (isTotal) {
        y0 = 0;
        y = runningTotal;
        if (val !== void 0 && val !== null) {
          y = val;
        }
      } else {
        runningTotal += val;
      }
      return {
        ...d,
        _y0: y0,
        _y: y,
        _val: val,
        _isTotal: isTotal
      };
    });
    return /* @__PURE__ */ jsxs61(
      VictoryChart6,
      {
        domainPadding: { x: 20 },
        height,
        containerComponent: /* @__PURE__ */ jsx76(VictoryContainer4, { responsive: true }),
        children: [
          /* @__PURE__ */ jsx76(
            VictoryAxis4,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ jsx76(
            VictoryAxis4,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" },
                grid: { stroke: gridColor, strokeDasharray: "4, 4" }
              }
            }
          ),
          /* @__PURE__ */ jsx76(
            VictoryBar2,
            {
              data: processedData,
              x: xKey,
              y: "_y",
              y0: "_y0",
              style: {
                data: {
                  fill: (d) => {
                    if (d.datum._isTotal) return getColor(totalColor);
                    if (d.datum._val < 0) return getColor(negativeColor);
                    return getColor(color);
                  }
                }
              },
              cornerRadius: { top: 2, bottom: 2 }
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs61(YStack52, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/FunnelChart/FunnelChart.tsx
import { YStack as YStack53, Text as Text40, useTheme as useTheme11 } from "tamagui";
import { VictoryChart as VictoryChart7, VictoryBar as VictoryBar3, VictoryAxis as VictoryAxis5, VictoryContainer as VictoryContainer5, VictoryLabel as VictoryLabel2 } from "victory";
import { AlertTriangle as AlertTriangle9, Filter as FunnelIcon } from "@tamagui/lucide-icons";
import { jsx as jsx77, jsxs as jsxs62 } from "react/jsx-runtime";
var FunnelChart = ({
  data,
  xKey,
  yKey,
  color = "$primary",
  height = 300,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme11();
  const themeColor = theme[color];
  const barColor = themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx77(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs62(YStack53, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx77(AlertTriangle9, { color: "$red10" }),
        /* @__PURE__ */ jsx77(Text40, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ jsxs62(YStack53, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx77(FunnelIcon, { color: "$gray10" }),
        /* @__PURE__ */ jsx77(Text40, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    const processedData = data.map((d) => {
      const val = Number(d[yKey]) || 0;
      return {
        ...d,
        _y0: -val / 2,
        _y: val / 2,
        _label: val
      };
    });
    return /* @__PURE__ */ jsxs62(
      VictoryChart7,
      {
        domainPadding: { x: 20, y: 20 },
        height,
        containerComponent: /* @__PURE__ */ jsx77(VictoryContainer5, { responsive: true }),
        children: [
          /* @__PURE__ */ jsx77(
            VictoryAxis5,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: "transparent" },
                grid: { stroke: "transparent" }
              }
            }
          ),
          /* @__PURE__ */ jsx77(
            VictoryAxis5,
            {
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 }
              }
            }
          ),
          /* @__PURE__ */ jsx77(
            VictoryBar3,
            {
              horizontal: true,
              data: processedData,
              x: xKey,
              y: "_y",
              y0: "_y0",
              style: {
                data: { fill: barColor, width: 30 },
                labels: { fill: textColor }
              },
              labels: ({ datum }) => datum._label,
              labelComponent: /* @__PURE__ */ jsx77(VictoryLabel2, {})
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs62(YStack53, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/BulletChart/BulletChart.tsx
import { YStack as YStack54, Text as Text41, useTheme as useTheme12 } from "tamagui";
import { VictoryChart as VictoryChart8, VictoryBar as VictoryBar4, VictoryAxis as VictoryAxis6, VictoryContainer as VictoryContainer6, VictoryScatter as VictoryScatter2 } from "victory";
import { AlertTriangle as AlertTriangle10, BarChart as BulletIcon } from "@tamagui/lucide-icons";
import { jsx as jsx78, jsxs as jsxs63 } from "react/jsx-runtime";
var BulletChart = ({
  data,
  xKey,
  yKey,
  targetKey,
  rangeKey,
  color = "$primary",
  targetColor = "$red10",
  rangeColor = "$gray5",
  height = 300,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme12();
  const themeColor = theme[color];
  const barColor = themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : color;
  const themeTargetColor = theme[targetColor];
  const targetMarkColor = themeTargetColor && typeof themeTargetColor === "object" && "get" in themeTargetColor ? themeTargetColor.get() : targetColor;
  const themeRangeColor = theme[rangeColor];
  const rangeBarColor = themeRangeColor && typeof themeRangeColor === "object" && "get" in themeRangeColor ? themeRangeColor.get() : rangeColor;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx78(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs63(YStack54, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx78(AlertTriangle10, { color: "$red10" }),
        /* @__PURE__ */ jsx78(Text41, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ jsxs63(YStack54, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx78(BulletIcon, { color: "$gray10" }),
        /* @__PURE__ */ jsx78(Text41, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ jsxs63(
      VictoryChart8,
      {
        domainPadding: { x: 20, y: 20 },
        height,
        containerComponent: /* @__PURE__ */ jsx78(VictoryContainer6, { responsive: true }),
        children: [
          /* @__PURE__ */ jsx78(
            VictoryAxis6,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ jsx78(
            VictoryAxis6,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ jsx78(
            VictoryBar4,
            {
              data,
              x: xKey,
              y: rangeKey,
              style: { data: { fill: rangeBarColor, width: 40 } },
              cornerRadius: { top: 2 }
            }
          ),
          /* @__PURE__ */ jsx78(
            VictoryBar4,
            {
              data,
              x: xKey,
              y: yKey,
              style: { data: { fill: barColor, width: 15 } },
              cornerRadius: { top: 2 }
            }
          ),
          /* @__PURE__ */ jsx78(
            VictoryScatter2,
            {
              data,
              x: xKey,
              y: targetKey,
              size: 8,
              symbol: "minus",
              style: { data: { fill: targetMarkColor, strokeWidth: 2 } }
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs63(YStack54, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/SunburstChart/SunburstChart.tsx
import { useMemo as useMemo9 } from "react";
import { YStack as YStack55, Text as Text42, useTheme as useTheme13 } from "tamagui";
import { Svg, Path, G } from "react-native-svg";
import { AlertTriangle as AlertTriangle11, PieChart as PieChart2 } from "@tamagui/lucide-icons";
import { jsx as jsx79, jsxs as jsxs64 } from "react/jsx-runtime";
var calculateSunburst = (data, radius, centerX, centerY) => {
  const arcs = [];
  const calculateValues = (node) => {
    if (!node.children || node.children.length === 0) {
      return node.value || 0;
    }
    const sum = node.children.reduce((acc, child) => acc + calculateValues(child), 0);
    node.value = sum;
    return sum;
  };
  const root = JSON.parse(JSON.stringify(data));
  const totalValue = calculateValues(root);
  if (totalValue === 0) return [];
  const maxDepth = 4;
  const levelThickness = radius / (maxDepth + 1);
  const processNode = (node, startAngle, endAngle, depth) => {
    if (depth > maxDepth) return;
    const innerRadius = depth * levelThickness;
    const outerRadius = (depth + 1) * levelThickness;
    const startRad = startAngle - Math.PI / 2;
    const endRad = endAngle - Math.PI / 2;
    const x1 = centerX + innerRadius * Math.cos(startRad);
    const y1 = centerY + innerRadius * Math.sin(startRad);
    const x2 = centerX + outerRadius * Math.cos(startRad);
    const y2 = centerY + outerRadius * Math.sin(startRad);
    const x3 = centerX + outerRadius * Math.cos(endRad);
    const y3 = centerY + outerRadius * Math.sin(endRad);
    const x4 = centerX + innerRadius * Math.cos(endRad);
    const y4 = centerY + innerRadius * Math.sin(endRad);
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    let path = "";
    if (depth === 0) {
      path = `M ${centerX} ${centerY - outerRadius} A ${outerRadius} ${outerRadius} 0 1 1 ${centerX} ${centerY + outerRadius} A ${outerRadius} ${outerRadius} 0 1 1 ${centerX} ${centerY - outerRadius} Z`;
    } else {
      path = `
            M ${x1} ${y1}
            L ${x2} ${y2}
            A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3}
            L ${x4} ${y4}
            A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}
            Z
        `;
    }
    const nodeColor = node.color || "#ccc";
    arcs.push({
      path,
      color: nodeColor,
      data: node,
      depth,
      value: node.value || 0
    });
    if (node.children) {
      let currentAngle = startAngle;
      node.children.forEach((child) => {
        const childValue = child.value || 0;
        const sliceAngle = childValue / (node.value || 1) * (endAngle - startAngle);
        processNode(child, currentAngle, currentAngle + sliceAngle, depth + 1);
        currentAngle += sliceAngle;
      });
    }
  };
  processNode(root, 0, 2 * Math.PI, 0);
  return arcs;
};
var SunburstChart = ({
  data,
  width = 300,
  height = 300,
  color = "$primary",
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme13();
  const themeColor = theme[color];
  const radius = Math.min(width, height) / 2;
  const centerX = width / 2;
  const centerY = height / 2;
  const arcs = useMemo9(() => {
    if (!data) return [];
    const colorPalette = [
      theme.blue9?.get() || "#3b82f6",
      theme.green9?.get() || "#22c55e",
      theme.yellow9?.get() || "#eab308",
      theme.red9?.get() || "#ef4444",
      theme.purple9?.get() || "#a855f7"
    ];
    const enrichData = (node, index, depth) => {
      return {
        ...node,
        color: node.color || colorPalette[(index + depth) % colorPalette.length],
        children: node.children?.map((child, i) => enrichData(child, i, depth + 1))
      };
    };
    const enrichedData = enrichData(data, 0, 0);
    return calculateSunburst(enrichedData, radius, centerX, centerY);
  }, [data, radius, centerX, centerY, theme]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx79(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs64(YStack55, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx79(AlertTriangle11, { color: "$red10" }),
        /* @__PURE__ */ jsx79(Text42, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data) {
      return /* @__PURE__ */ jsxs64(YStack55, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx79(PieChart2, { color: "$gray10" }),
        /* @__PURE__ */ jsx79(Text42, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ jsx79(Svg, { width, height, children: /* @__PURE__ */ jsx79(G, { children: arcs.map((arc, i) => /* @__PURE__ */ jsx79(
      Path,
      {
        d: arc.path,
        fill: arc.color,
        stroke: theme.background?.get() || "white",
        strokeWidth: 1
      },
      i
    )) }) });
  };
  return /* @__PURE__ */ jsxs64(YStack55, { width: "100%", gap: "$4", paddingHorizontal: "$4", alignItems: "center", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/ParallelCoordinates/ParallelCoordinates.tsx
import { useMemo as useMemo10 } from "react";
import { YStack as YStack56, Text as Text43, useTheme as useTheme14 } from "tamagui";
import { VictoryChart as VictoryChart9, VictoryLine, VictoryAxis as VictoryAxis7, VictoryGroup as VictoryGroup4 } from "victory";
import { AlertTriangle as AlertTriangle12, Activity } from "@tamagui/lucide-icons";
import { jsx as jsx80, jsxs as jsxs65 } from "react/jsx-runtime";
var ParallelCoordinates = ({
  data,
  attributes,
  width = 600,
  height = 400,
  color = "$primary",
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme14();
  const themeColor = theme[color];
  const lineColor = themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const normalizedData = useMemo10(() => {
    if (!data || data.length === 0) return [];
    const bounds = attributes.reduce((acc, attr) => {
      const values = data.map((d) => d[attr]);
      acc[attr] = {
        min: Math.min(...values),
        max: Math.max(...values)
      };
      return acc;
    }, {});
    return data.map((d) => {
      const points = attributes.map((attr, i) => {
        const { min, max } = bounds[attr];
        const val = d[attr];
        const range2 = max - min;
        const y = range2 === 0 ? 0.5 : (val - min) / range2;
        return { x: i + 1, y, val };
      });
      return points;
    });
  }, [data, attributes]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx80(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs65(YStack56, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx80(AlertTriangle12, { color: "$red10" }),
        /* @__PURE__ */ jsx80(Text43, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ jsxs65(YStack56, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx80(Activity, { color: "$gray10" }),
        /* @__PURE__ */ jsx80(Text43, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ jsxs65(
      VictoryChart9,
      {
        domain: { x: [0, attributes.length + 1], y: [0, 1] },
        height,
        width,
        children: [
          attributes.map((attr, i) => /* @__PURE__ */ jsx80(
            VictoryAxis7,
            {
              dependentAxis: true,
              label: attr,
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: "inherit" },
                axisLabel: { padding: 30, fontSize: 12, fill: textColor },
                grid: { stroke: "none" }
              },
              offsetX: (i + 1) / (attributes.length + 1) * width
            },
            attr
          )),
          /* @__PURE__ */ jsx80(VictoryGroup4, { children: normalizedData.map((series, i) => /* @__PURE__ */ jsx80(
            VictoryLine,
            {
              data: series,
              style: {
                data: { stroke: lineColor, opacity: 0.7, strokeWidth: 1 }
              }
            },
            i
          )) })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs65(YStack56, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/MarimekkoChart/MarimekkoChart.tsx
import { useMemo as useMemo11 } from "react";
import { YStack as YStack57, Text as Text44, useTheme as useTheme15 } from "tamagui";
import { VictoryChart as VictoryChart10, VictoryBar as VictoryBar5, VictoryAxis as VictoryAxis8, VictoryContainer as VictoryContainer7 } from "victory";
import { AlertTriangle as AlertTriangle13, BarChart2 } from "@tamagui/lucide-icons";
import { jsx as jsx81, jsxs as jsxs66 } from "react/jsx-runtime";
var MarimekkoChart = ({
  data,
  xKey,
  yKey,
  widthKey,
  color = "$primary",
  width = 600,
  height = 400,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme15();
  const themeColor = theme[color];
  const barColor = themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const processedData = useMemo11(() => {
    if (!data || data.length === 0) return [];
    let currentX = 0;
    return data.map((d) => {
      const w = Number(d[widthKey]) || 0;
      const midpoint = currentX + w / 2;
      currentX += w;
      return {
        ...d,
        _x: midpoint,
        _width: w,
        _y: Number(d[yKey]),
        label: d[xKey]
        // for tooltip or axis
      };
    });
  }, [data, xKey, yKey, widthKey]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx81(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs66(YStack57, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx81(AlertTriangle13, { color: "$red10" }),
        /* @__PURE__ */ jsx81(Text44, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ jsxs66(YStack57, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx81(BarChart2, { color: "$gray10" }),
        /* @__PURE__ */ jsx81(Text44, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ jsxs66(
      VictoryChart10,
      {
        domainPadding: { x: 0 },
        height,
        width,
        containerComponent: /* @__PURE__ */ jsx81(VictoryContainer7, { responsive: true }),
        children: [
          /* @__PURE__ */ jsx81(
            VictoryAxis8,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ jsx81(
            VictoryAxis8,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" },
                grid: { stroke: theme.borderColor?.get() || "#eee", strokeDasharray: "4, 4" }
              }
            }
          ),
          /* @__PURE__ */ jsx81(
            VictoryBar5,
            {
              data: processedData,
              x: "_x",
              y: "_y",
              style: {
                data: {
                  fill: barColor,
                  stroke: theme.background?.get() || "white",
                  strokeWidth: 1
                }
              },
              barWidth: ({ datum }) => {
                const totalWidth = processedData.reduce((acc, d) => acc + d._width, 0);
                const chartInnerWidth = width - 100;
                return datum._width / totalWidth * chartInnerWidth;
              }
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs66(YStack57, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/RidgelinePlot/RidgelinePlot.tsx
import { useMemo as useMemo12 } from "react";
import { YStack as YStack58, Text as Text45, useTheme as useTheme16 } from "tamagui";
import { VictoryChart as VictoryChart11, VictoryArea as VictoryArea2, VictoryAxis as VictoryAxis9 } from "victory";
import { AlertTriangle as AlertTriangle14, Activity as Activity2 } from "@tamagui/lucide-icons";
import { jsx as jsx82, jsxs as jsxs67 } from "react/jsx-runtime";
var RidgelinePlot = ({
  series,
  width = 600,
  height = 400,
  overlap = 0.5,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme16();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const processedSeries = useMemo12(() => {
    if (!series || series.length === 0) return [];
    const numSeries = series.length;
    const rowHeight = 100;
    const maxY = Math.max(...series.flatMap((s) => s.data.map((d) => d.y))) || 1;
    return series.map((s, i) => {
      const yOffset = i * (rowHeight * (1 - overlap));
      const data = s.data.map((d) => ({
        x: d.x,
        y: yOffset + d.y / maxY * rowHeight,
        y0: yOffset
        // Baseline for area
      }));
      return {
        ...s,
        processedData: data,
        yOffset
      };
    }).reverse();
  }, [series, overlap]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx82(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs67(YStack58, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx82(AlertTriangle14, { color: "$red10" }),
        /* @__PURE__ */ jsx82(Text45, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!series || series.length === 0) {
      return /* @__PURE__ */ jsxs67(YStack58, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx82(Activity2, { color: "$gray10" }),
        /* @__PURE__ */ jsx82(Text45, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ jsxs67(
      VictoryChart11,
      {
        height,
        width,
        domainPadding: { x: 20, y: 10 },
        children: [
          /* @__PURE__ */ jsx82(
            VictoryAxis9,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: "inherit" }
              }
            }
          ),
          processedSeries.map((s, i) => /* @__PURE__ */ jsx82(
            VictoryArea2,
            {
              data: s.processedData,
              style: {
                data: {
                  fill: s.color || theme.blue9?.get() || "#3b82f6",
                  fillOpacity: 0.8,
                  stroke: theme.background?.get() || "white",
                  strokeWidth: 1
                }
              }
            },
            s.id
          ))
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs67(YStack58, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/DecompositionTree/DecompositionTree.tsx
import { useMemo as useMemo13 } from "react";
import { YStack as YStack59, Text as Text46, useTheme as useTheme17 } from "tamagui";
import { Svg as Svg2, Path as Path2, G as G2, Rect, Text as SvgText2 } from "react-native-svg";
import { AlertTriangle as AlertTriangle15, GitMerge } from "@tamagui/lucide-icons";
import { jsx as jsx83, jsxs as jsxs68 } from "react/jsx-runtime";
var calculateTreeLayout = (data, width, height, nodeWidth = 100, nodeHeight = 40, gapX = 50, gapY = 20) => {
  let nextY = 0;
  const computeSize = (node) => {
    if (!node.children || node.children.length === 0) {
      return nodeHeight + gapY;
    }
    const childrenSize = node.children.reduce((acc, child) => acc + computeSize(child), 0);
    return childrenSize;
  };
  const layout2 = (node, depth, startY) => {
    const myHeight = computeSize(node);
    const x = depth * (nodeWidth + gapX) + 20;
    let childStartY = startY;
    const children = [];
    if (node.children) {
      node.children.forEach((child) => {
        const childH = computeSize(child);
        children.push(layout2(child, depth + 1, childStartY));
        childStartY += childH;
      });
    }
    let y = startY + myHeight / 2 - nodeHeight / 2;
    if (children.length > 0) {
      const firstChildY = children[0].y;
      const lastChildY = children[children.length - 1].y;
      y = (firstChildY + lastChildY) / 2;
    } else {
      y = startY + (myHeight - gapY) / 2;
    }
    return {
      x,
      y,
      width: nodeWidth,
      height: nodeHeight,
      data: node,
      children
    };
  };
  return layout2(data, 0, 0);
};
var flattenTree = (root) => {
  const nodes = [];
  const links = [];
  const traverse = (node) => {
    nodes.push(node);
    if (node.children) {
      node.children.forEach((child) => {
        links.push({
          x1: node.x + node.width,
          y1: node.y + node.height / 2,
          x2: child.x,
          y2: child.y + child.height / 2
        });
        traverse(child);
      });
    }
  };
  traverse(root);
  return { nodes, links };
};
var DecompositionTree = ({
  data,
  width = 800,
  height = 500,
  color = "$primary",
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme17();
  const { nodes, links } = useMemo13(() => {
    if (!data) return { nodes: [], links: [] };
    const root = calculateTreeLayout(data, width, height);
    return flattenTree(root);
  }, [data, width, height]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx83(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs68(YStack59, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx83(AlertTriangle15, { color: "$red10" }),
        /* @__PURE__ */ jsx83(Text46, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data) {
      return /* @__PURE__ */ jsxs68(YStack59, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx83(GitMerge, { color: "$gray10" }),
        /* @__PURE__ */ jsx83(Text46, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ jsx83(Svg2, { width, height, viewBox: `0 0 ${width} ${height}`, children: /* @__PURE__ */ jsxs68(G2, { children: [
      links.map((link, i) => {
        const midX = (link.x1 + link.x2) / 2;
        const d = `M ${link.x1} ${link.y1} C ${midX} ${link.y1}, ${midX} ${link.y2}, ${link.x2} ${link.y2}`;
        return /* @__PURE__ */ jsx83(
          Path2,
          {
            d,
            stroke: theme.borderColor?.get() || "#ccc",
            strokeWidth: 2,
            fill: "none"
          },
          `link-${i}`
        );
      }),
      nodes.map((node, i) => /* @__PURE__ */ jsxs68(G2, { x: node.x, y: node.y, children: [
        /* @__PURE__ */ jsx83(
          Rect,
          {
            width: node.width,
            height: node.height,
            rx: 4,
            fill: node.data.color || theme.background?.get() || "white",
            stroke: theme.blue9?.get() || "#3b82f6",
            strokeWidth: 2
          }
        ),
        /* @__PURE__ */ jsx83(
          SvgText2,
          {
            x: node.width / 2,
            y: node.height / 2 - 5,
            textAnchor: "middle",
            fontSize: 12,
            fontWeight: "bold",
            fill: theme.color?.get() || "black",
            children: node.data.label
          }
        ),
        /* @__PURE__ */ jsx83(
          SvgText2,
          {
            x: node.width / 2,
            y: node.height / 2 + 10,
            textAnchor: "middle",
            fontSize: 10,
            fill: theme.color10?.get() || "#666",
            children: node.data.value
          }
        )
      ] }, `node-${i}`))
    ] }) });
  };
  return /* @__PURE__ */ jsxs68(YStack59, { width: "100%", gap: "$4", paddingHorizontal: "$4", overflow: "scroll", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/Map/Map.tsx
import { createContext as createContext11, useContext as useContext14, useState as useState16, useRef as useRef4, useEffect as useEffect4 } from "react";
import { YStack as YStack60, Button as Button7 } from "tamagui";
import { Plus, Minus as Minus2 } from "@tamagui/lucide-icons";
import MapLibreGL from "@maplibre/maplibre-react-native";
import { jsx as jsx84, jsxs as jsxs69 } from "react/jsx-runtime";
var MapContext = createContext11(null);
var useMap = () => {
  const context = useContext14(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a Map component");
  }
  return context;
};
var Map2 = ({
  data,
  children,
  width = "100%",
  height = 400,
  initialZoom = 10,
  styleURL = "https://demotiles.maplibre.org/style.json"
}) => {
  const mapRef = useRef4(null);
  const cameraRef = useRef4(null);
  const [zoom, setZoom] = useState16(initialZoom);
  const onRegionDidChange = async (feature) => {
  };
  useEffect4(() => {
    cameraRef.current?.zoomTo(zoom);
  }, [zoom]);
  return /* @__PURE__ */ jsx84(MapContext.Provider, { value: {
    mapRef,
    cameraRef,
    zoom,
    setZoom
  }, children: /* @__PURE__ */ jsxs69(
    YStack60,
    {
      width,
      height,
      overflow: "hidden",
      position: "relative",
      borderRadius: "$4",
      children: [
        /* @__PURE__ */ jsxs69(
          MapLibreGL.MapView,
          {
            ref: mapRef,
            style: { flex: 1 },
            styleURL,
            onRegionDidChange,
            logoEnabled: false,
            attributionEnabled: false,
            children: [
              /* @__PURE__ */ jsx84(
                MapLibreGL.Camera,
                {
                  ref: cameraRef,
                  defaultSettings: {
                    zoomLevel: initialZoom,
                    centerCoordinate: [-43.1729, -22.9068]
                    // Rio default
                  }
                }
              ),
              children,
              data && /* @__PURE__ */ jsxs69(MapLibreGL.ShapeSource, { id: "mapSource", shape: data, children: [
                /* @__PURE__ */ jsx84(MapLibreGL.FillLayer, { id: "mapFill", style: { fillColor: "#3b82f6", fillOpacity: 0.5, fillOutlineColor: "#ffffff" } }),
                /* @__PURE__ */ jsx84(MapLibreGL.LineLayer, { id: "mapLine", style: { lineColor: "#ffffff", lineWidth: 1 } })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx84(MapControls, {})
      ]
    }
  ) });
};
var MapControls = ({ showZoom = true }) => {
  const { zoom, setZoom } = useMap();
  return /* @__PURE__ */ jsx84(YStack60, { position: "absolute", bottom: "$4", right: "$4", gap: "$2", children: showZoom && /* @__PURE__ */ jsxs69(YStack60, { borderRadius: "$4", overflow: "hidden", elevation: "$2", backgroundColor: "$background", borderWidth: 1, borderColor: "$borderColor", children: [
    /* @__PURE__ */ jsx84(
      Button7,
      {
        size: "$3",
        chromeless: true,
        icon: Plus,
        onPress: () => setZoom(zoom + 1),
        borderRadius: 0,
        borderBottomWidth: 1,
        borderColor: "$borderColor"
      }
    ),
    /* @__PURE__ */ jsx84(
      Button7,
      {
        size: "$3",
        chromeless: true,
        icon: Minus2,
        onPress: () => setZoom(zoom - 1),
        borderRadius: 0
      }
    )
  ] }) });
};
var MapMarker = ({ longitude, latitude, children, id }) => {
  return /* @__PURE__ */ jsx84(
    MapLibreGL.PointAnnotation,
    {
      id,
      coordinate: [longitude, latitude],
      children: children || /* @__PURE__ */ jsx84(YStack60, { width: 10, height: 10, backgroundColor: "$red10", borderRadius: 10 })
    }
  );
};
var MapPopup = ({ children }) => {
  return /* @__PURE__ */ jsx84(MapLibreGL.Callout, { children: /* @__PURE__ */ jsx84(YStack60, { padding: "$2", backgroundColor: "$background", borderRadius: "$2", elevation: "$2", children }) });
};
var GeoMap = Object.assign(Map2, {
  Marker: MapMarker,
  Popup: MapPopup,
  Controls: MapControls
});

// src/organisms/Timeline/Timeline.tsx
import { YStack as YStack61, XStack as XStack40, styled as styled65, View as View9, Text as Text47 } from "tamagui";
import { jsx as jsx85, jsxs as jsxs70 } from "react/jsx-runtime";
var TimelineFrame = styled65(YStack61, {
  name: "Timeline",
  tag: "ul",
  width: "100%",
  gap: "$4"
});
var TimelineItemFrame = styled65(XStack40, {
  name: "TimelineItem",
  tag: "li",
  gap: "$4"
});
var TimelineConnectorWrapper = styled65(YStack61, {
  alignItems: "center",
  width: 20,
  position: "relative"
});
var TimelineConnector = styled65(View9, {
  width: 2,
  backgroundColor: "$borderColor",
  position: "absolute",
  top: 24,
  bottom: -24,
  zIndex: 0
});
var TimelineDot = styled65(View9, {
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: "$background",
  borderWidth: 2,
  borderColor: "$primary",
  zIndex: 1
});
var TimelineContent = styled65(YStack61, {
  flex: 1,
  gap: "$1"
});
var TimelineTime = styled65(Text47, {
  fontSize: "$2",
  color: "$mutedForeground"
});
var TimelineTitle = styled65(Text47, {
  fontSize: "$3",
  fontWeight: "bold",
  color: "$foreground"
});
var TimelineDescription = styled65(Text47, {
  fontSize: "$3",
  color: "$foreground"
});
var TimelineItem = ({ title, description, time, isLast, children }) => {
  return /* @__PURE__ */ jsxs70(TimelineItemFrame, { children: [
    /* @__PURE__ */ jsxs70(TimelineConnectorWrapper, { children: [
      /* @__PURE__ */ jsx85(TimelineDot, {}),
      !isLast && /* @__PURE__ */ jsx85(TimelineConnector, {})
    ] }),
    /* @__PURE__ */ jsxs70(TimelineContent, { children: [
      time && /* @__PURE__ */ jsx85(TimelineTime, { children: time }),
      title && /* @__PURE__ */ jsx85(TimelineTitle, { children: title }),
      description && /* @__PURE__ */ jsx85(TimelineDescription, { children: description }),
      children
    ] })
  ] });
};
var TimelineSkeleton = () => /* @__PURE__ */ jsx85(TimelineFrame, { "data-testid": "timeline-skeleton", children: [...Array(3)].map((_, index) => /* @__PURE__ */ jsxs70(TimelineItemFrame, { children: [
  /* @__PURE__ */ jsx85(TimelineConnectorWrapper, { children: /* @__PURE__ */ jsx85(Skeleton, { width: 20, height: 20, borderRadius: 10 }) }),
  /* @__PURE__ */ jsxs70(TimelineContent, { children: [
    /* @__PURE__ */ jsx85(Skeleton, { width: "50%", height: 15 }),
    /* @__PURE__ */ jsx85(Skeleton, { width: "80%", height: 15 })
  ] })
] }, index)) });
var Timeline = ({ items, children, isLoading, isEmpty, hasError }) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx85(TimelineSkeleton, {});
  }
  if (hasError) {
    return /* @__PURE__ */ jsxs70(Alert, { variant: "destructive", children: [
      /* @__PURE__ */ jsx85(Alert.Title, { children: "Erro" }),
      /* @__PURE__ */ jsx85(Alert.Description, { children: "Ocorreu um erro ao carregar os dados. Por favor, tente novamente." })
    ] });
  }
  if (isEmpty || items && items.length === 0 && !children) {
    return /* @__PURE__ */ jsx85(Empty, { title: "Nenhum item encontrado", description: "N\xE3o h\xE1 itens para serem exibidos no momento." });
  }
  if (items) {
    return /* @__PURE__ */ jsx85(TimelineFrame, { children: items.map((item, index) => /* @__PURE__ */ jsx85(TimelineItem, { ...item, isLast: index === items.length - 1 }, index)) });
  }
  return /* @__PURE__ */ jsx85(TimelineFrame, { children });
};

// src/organisms/LocationStatus/LocationStatus.tsx
import { YStack as YStack62, XStack as XStack41, styled as styled66, Text as Text48 } from "tamagui";
import { MapPin, Navigation, Clock } from "@tamagui/lucide-icons";
import { jsx as jsx86, jsxs as jsxs71 } from "react/jsx-runtime";
var LocationStatusFrame = styled66(YStack62, {
  name: "LocationStatus",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  gap: "$3"
});
var HeaderRow = styled66(XStack41, {
  justifyContent: "space-between",
  alignItems: "center"
});
var Title = styled66(Text48, {
  fontSize: "$4",
  fontWeight: "bold",
  color: "$foreground"
});
var InfoRow = styled66(XStack41, {
  gap: "$4",
  alignItems: "center",
  flexWrap: "wrap"
});
var InfoItem = styled66(XStack41, {
  gap: "$2",
  alignItems: "center"
});
var Label7 = styled66(Text48, {
  fontSize: "$2",
  color: "$mutedForeground"
});
var Value = styled66(Text48, {
  fontSize: "$3",
  fontWeight: "500",
  color: "$foreground"
});
var getAccuracyLevel = (accuracy) => {
  if (accuracy === void 0) return { label: "Desconhecido", color: "$gray10" };
  if (accuracy <= 10) return { label: "Alta", color: "$green10" };
  if (accuracy <= 30) return { label: "M\xE9dia", color: "$yellow10" };
  return { label: "Baixa", color: "$red10" };
};
var LocationStatus = ({
  latitude,
  longitude,
  accuracy,
  timestamp,
  isSearching,
  error,
  ...props
}) => {
  const accuracyLevel = getAccuracyLevel(accuracy);
  const formattedTime = timestamp ? new Date(timestamp).toLocaleTimeString("pt-BR") : "-";
  return /* @__PURE__ */ jsxs71(LocationStatusFrame, { ...props, children: [
    /* @__PURE__ */ jsxs71(HeaderRow, { children: [
      /* @__PURE__ */ jsxs71(XStack41, { gap: "$2", alignItems: "center", children: [
        /* @__PURE__ */ jsx86(MapPin, { size: "$1" }),
        /* @__PURE__ */ jsx86(Title, { children: "Status da Localiza\xE7\xE3o" })
      ] }),
      isSearching && /* @__PURE__ */ jsx86(Badge, { variant: "outline", children: "Buscando..." }),
      error && /* @__PURE__ */ jsx86(Badge, { variant: "destructive", children: "Erro" }),
      !isSearching && !error && accuracy !== void 0 && /* @__PURE__ */ jsxs71(Badge, { style: { backgroundColor: accuracyLevel.color, color: "white" }, children: [
        "Precis\xE3o: ",
        accuracyLevel.label,
        " (",
        accuracy?.toFixed(0),
        "m)"
      ] })
    ] }),
    /* @__PURE__ */ jsxs71(InfoRow, { children: [
      /* @__PURE__ */ jsxs71(InfoItem, { children: [
        /* @__PURE__ */ jsx86(Navigation, { size: "$1", color: "$mutedForeground" }),
        /* @__PURE__ */ jsxs71(YStack62, { children: [
          /* @__PURE__ */ jsx86(Label7, { children: "Coordenadas" }),
          /* @__PURE__ */ jsxs71(Value, { children: [
            latitude?.toFixed(6) ?? "-",
            ", ",
            longitude?.toFixed(6) ?? "-"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs71(InfoItem, { children: [
        /* @__PURE__ */ jsx86(Clock, { size: "$1", color: "$mutedForeground" }),
        /* @__PURE__ */ jsxs71(YStack62, { children: [
          /* @__PURE__ */ jsx86(Label7, { children: "Atualizado em" }),
          /* @__PURE__ */ jsx86(Value, { children: formattedTime })
        ] })
      ] })
    ] }),
    error && /* @__PURE__ */ jsx86(Text48, { color: "$destructive", fontSize: "$2", children: error })
  ] });
};

// src/organisms/ScannerView/ScannerView.tsx
import React69 from "react";
import { YStack as YStack63, XStack as XStack42, styled as styled67, Text as Text49 } from "tamagui";
import { Camera, Maximize, X as X5 } from "@tamagui/lucide-icons";
import { Fragment as Fragment10, jsx as jsx87, jsxs as jsxs72 } from "react/jsx-runtime";
var ScannerFrame = styled67(YStack63, {
  name: "ScannerView",
  position: "relative",
  width: "100%",
  height: 500,
  backgroundColor: "#000",
  borderRadius: "$4",
  overflow: "hidden"
});
var CameraPlaceholder = styled67(YStack63, {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1a1a1a"
});
var Overlay = styled67(YStack63, {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10
});
var ScanFrame = styled67(YStack63, {
  width: 250,
  height: 250,
  borderWidth: 2,
  borderColor: "#fff",
  borderRadius: "$4",
  position: "relative",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center"
});
var ScanLine = styled67(YStack63, {
  width: "100%",
  height: 2,
  backgroundColor: "$green10",
  position: "absolute",
  top: "50%"
});
var Controls = styled67(XStack42, {
  position: "absolute",
  bottom: "$4",
  left: 0,
  right: 0,
  justifyContent: "center",
  gap: "$4",
  zIndex: 20
});
var StatusText = styled67(Text49, {
  color: "#fff",
  marginTop: "$4",
  fontSize: "$3",
  fontWeight: "600",
  textAlign: "center",
  backgroundColor: "rgba(0,0,0,0.5)",
  padding: "$2",
  borderRadius: "$2"
});
var ScannerView = ({
  isActive = true,
  onScan,
  onClose,
  mockData,
  ...props
}) => {
  const [scanned, setScanned] = React69.useState(false);
  const handleScan = () => {
    setScanned(true);
    if (onScan && mockData) {
      onScan(mockData);
    }
    setTimeout(() => setScanned(false), 2e3);
  };
  return /* @__PURE__ */ jsx87(ScannerFrame, { ...props, children: !isActive ? /* @__PURE__ */ jsxs72(CameraPlaceholder, { children: [
    /* @__PURE__ */ jsx87(Camera, { size: "$6", color: "$gray10" }),
    /* @__PURE__ */ jsx87(Text49, { color: "$gray10", marginTop: "$4", children: "C\xE2mera desativada" })
  ] }) : /* @__PURE__ */ jsxs72(Fragment10, { children: [
    /* @__PURE__ */ jsx87(CameraPlaceholder, { children: /* @__PURE__ */ jsx87(Maximize, { size: "$8", color: "#333" }) }),
    /* @__PURE__ */ jsxs72(Overlay, { children: [
      /* @__PURE__ */ jsx87(ScanFrame, { children: /* @__PURE__ */ jsx87(ScanLine, { style: { opacity: scanned ? 0 : 1 } }) }),
      /* @__PURE__ */ jsx87(StatusText, { children: "Posicione o c\xF3digo no quadro" })
    ] }),
    /* @__PURE__ */ jsxs72(Controls, { children: [
      mockData && /* @__PURE__ */ jsx87(Button, { onPress: handleScan, variant: "default", children: "Simular Scan" }),
      onClose && /* @__PURE__ */ jsx87(Button, { onPress: onClose, variant: "destructive", icon: X5, circular: true })
    ] })
  ] }) });
};

// src/organisms/SignaturePad/SignaturePad.tsx
import { useRef as useRef5, useState as useState17 } from "react";
import { styled as styled68, YStack as YStack64, XStack as XStack43 } from "tamagui";
import { Svg as Svg3, Path as Path3 } from "react-native-svg";
import { Eraser, Check as Check7 } from "@tamagui/lucide-icons";
import { Text as Text50 } from "tamagui";
import { jsx as jsx88, jsxs as jsxs73 } from "react/jsx-runtime";
var SignatureContainer = styled68(YStack64, {
  name: "SignaturePad",
  width: "100%",
  height: 200,
  backgroundColor: "$background",
  borderColor: "$borderColor",
  borderWidth: 1,
  borderRadius: "$4",
  overflow: "hidden",
  position: "relative",
  cursor: "crosshair"
});
var Controls2 = styled68(XStack43, {
  padding: "$2",
  justifyContent: "flex-end",
  gap: "$2",
  backgroundColor: "$background",
  borderTopWidth: 1,
  borderColor: "$borderColor"
});
var HelperText = styled68(YStack64, {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  zIndex: 0
});
var SignaturePad = ({
  onSave,
  onClear,
  strokeColor = "#000",
  strokeWidth = 3,
  ...props
}) => {
  const [currentPath, setCurrentPath] = useState17([]);
  const [paths, setPaths] = useState17([]);
  const isDrawing = useRef5(false);
  const getPoint = (e) => {
    if (e.nativeEvent) {
      const x = e.nativeEvent.offsetX ?? e.nativeEvent.locationX ?? 0;
      const y = e.nativeEvent.offsetY ?? e.nativeEvent.locationY ?? 0;
      return { x, y };
    }
    return { x: 0, y: 0 };
  };
  const pointsToPath = (points) => {
    if (points.length === 0) return "";
    const start = points[0];
    let path = `M ${start.x} ${start.y}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].x} ${points[i].y}`;
    }
    return path;
  };
  const handleStart = (e) => {
    isDrawing.current = true;
    const point = getPoint(e);
    setCurrentPath([point]);
  };
  const handleMove = (e) => {
    if (!isDrawing.current) return;
    const point = getPoint(e);
    setCurrentPath((prev) => [...prev, point]);
  };
  const handleEnd = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    if (currentPath.length > 0) {
      setPaths((prev) => [...prev, pointsToPath(currentPath)]);
      setCurrentPath([]);
    }
  };
  const handleClear = () => {
    setPaths([]);
    setCurrentPath([]);
    if (onClear) onClear();
  };
  const handleSave = () => {
    const fullSvg = paths.join(" ");
    if (onSave) onSave(fullSvg);
  };
  return /* @__PURE__ */ jsxs73(YStack64, { width: "100%", gap: "$2", children: [
    /* @__PURE__ */ jsxs73(
      SignatureContainer,
      {
        ...props,
        onMouseDown: handleStart,
        onMouseMove: handleMove,
        onMouseUp: handleEnd,
        onMouseLeave: handleEnd,
        children: [
          /* @__PURE__ */ jsxs73(Svg3, { height: "100%", width: "100%", viewBox: "0 0 500 200", style: { position: "absolute", top: 0, left: 0, zIndex: 10 }, children: [
            paths.map((d, i) => /* @__PURE__ */ jsx88(
              Path3,
              {
                d,
                stroke: strokeColor,
                strokeWidth,
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              },
              i
            )),
            currentPath.length > 0 && /* @__PURE__ */ jsx88(
              Path3,
              {
                d: pointsToPath(currentPath),
                stroke: strokeColor,
                strokeWidth,
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          ] }),
          paths.length === 0 && currentPath.length === 0 && /* @__PURE__ */ jsx88(HelperText, { children: /* @__PURE__ */ jsx88(Text50, { color: "$gray8", children: "Assine aqui" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs73(Controls2, { children: [
      /* @__PURE__ */ jsx88(Button, { variant: "outline", icon: Eraser, onPress: handleClear, children: "Limpar" }),
      /* @__PURE__ */ jsx88(Button, { variant: "default", icon: Check7, onPress: handleSave, children: "Salvar" })
    ] })
  ] });
};

// src/organisms/ImageAnnotator/ImageAnnotator.tsx
import { YStack as YStack65, styled as styled69, Image as Image3 } from "tamagui";
import { jsx as jsx89, jsxs as jsxs74 } from "react/jsx-runtime";
var AnnotatorContainer = styled69(YStack65, {
  name: "ImageAnnotator",
  width: "100%",
  position: "relative",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4",
  overflow: "hidden",
  backgroundColor: "$background"
});
var ImageLayer = styled69(YStack65, {
  width: "100%",
  height: 400,
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 0
});
var DrawingLayer = styled69(YStack65, {
  width: "100%",
  height: 400,
  zIndex: 10
});
var ImageAnnotator = ({
  imageUrl,
  imageProps,
  onSave,
  strokeColor = "$red10",
  // Red by default for annotations
  ...props
}) => {
  return /* @__PURE__ */ jsxs74(AnnotatorContainer, { ...props, children: [
    /* @__PURE__ */ jsx89(ImageLayer, { children: /* @__PURE__ */ jsx89(
      Image3,
      {
        source: { uri: imageUrl },
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        ...imageProps
      }
    ) }),
    /* @__PURE__ */ jsx89(DrawingLayer, { children: /* @__PURE__ */ jsx89(
      SignaturePad,
      {
        height: "100%",
        backgroundColor: "transparent",
        strokeColor,
        onSave,
        borderWidth: 0
      }
    ) })
  ] });
};

// src/organisms/PDFPreview/PDFPreview.tsx
import { YStack as YStack66, styled as styled70, Text as Text51, Spinner as Spinner5 } from "tamagui";
import { FileText } from "@tamagui/lucide-icons";
import { jsx as jsx90, jsxs as jsxs75 } from "react/jsx-runtime";
var PDFContainer = styled70(YStack66, {
  name: "PDFPreview",
  width: "100%",
  height: 500,
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4",
  overflow: "hidden",
  position: "relative"
});
var PDFFrame = styled70(YStack66, {
  tag: "iframe",
  width: "100%",
  height: "100%",
  borderWidth: 0
});
var Placeholder = styled70(YStack66, {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: "$4"
});
var PDFPreview = ({
  fileUrl,
  title = "PDF Document",
  isLoading = false,
  error,
  ...props
}) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx90(PDFContainer, { ...props, alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ jsx90(Spinner5, { size: "large" }) });
  }
  if (error || !fileUrl) {
    return /* @__PURE__ */ jsx90(PDFContainer, { ...props, children: /* @__PURE__ */ jsxs75(Placeholder, { children: [
      /* @__PURE__ */ jsx90(FileText, { size: "$6", color: "$gray8" }),
      /* @__PURE__ */ jsx90(Text51, { color: "$gray10", children: error || "Nenhum documento selecionado" })
    ] }) });
  }
  return /* @__PURE__ */ jsx90(PDFContainer, { ...props, children: /* @__PURE__ */ jsx90(
    PDFFrame,
    {
      src: `${fileUrl}#toolbar=0`,
      title,
      allowFullScreen: true
    }
  ) });
};

// src/organisms/DiffViewer/DiffViewer.tsx
import { YStack as YStack67, XStack as XStack44, styled as styled71, Text as Text52, ScrollView as ScrollView5 } from "tamagui";
import { jsx as jsx91, jsxs as jsxs76 } from "react/jsx-runtime";
var DiffContainer = styled71(YStack67, {
  name: "DiffViewer",
  width: "100%",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4",
  overflow: "hidden",
  backgroundColor: "$background"
});
var Header2 = styled71(XStack44, {
  backgroundColor: "$muted",
  padding: "$2",
  borderBottomWidth: 1,
  borderColor: "$borderColor",
  justifyContent: "space-between"
});
var DiffContent = styled71(XStack44, {
  width: "100%",
  height: 400
  // Fixed height for scrolling
});
var Pane = styled71(YStack67, {
  flex: 1,
  height: "100%",
  borderRightWidth: 1,
  borderColor: "$borderColor",
  variants: {
    last: {
      true: {
        borderRightWidth: 0
      }
    }
  }
});
var Line2 = styled71(XStack44, {
  width: "100%",
  minHeight: 24,
  paddingHorizontal: "$2",
  alignItems: "center",
  variants: {
    type: {
      added: { backgroundColor: "$green2" },
      removed: { backgroundColor: "$red2" },
      neutral: { backgroundColor: "transparent" }
    }
  }
});
var LineNumber = styled71(Text52, {
  width: 40,
  color: "$mutedForeground",
  fontSize: "$2",
  userSelect: "none",
  textAlign: "right",
  paddingRight: "$2",
  borderRightWidth: 1,
  borderColor: "$borderColor",
  marginRight: "$2"
});
var LineText = styled71(Text52, {
  fontSize: "$3",
  fontFamily: "$mono",
  color: "$foreground",
  whiteSpace: "pre-wrap",
  flex: 1
});
var computeDiff = (oldText, newText) => {
  const oldLines = oldText.split("\n");
  const newLines = newText.split("\n");
  const maxLines = Math.max(oldLines.length, newLines.length);
  const lines = [];
  for (let i = 0; i < maxLines; i++) {
    const oldL = oldLines[i] || "";
    const newL = newLines[i] || "";
    let type = "neutral";
    if (oldL !== newL) {
      if (!oldL && newL) type = "added";
      else if (oldL && !newL) type = "removed";
      else type = "modified";
    }
    lines.push({ num: i + 1, oldL, newL, type });
  }
  return lines;
};
var DiffViewer = ({
  oldText,
  newText,
  oldTitle = "Original",
  newTitle = "Modificado",
  ...props
}) => {
  const diffs = computeDiff(oldText, newText);
  return /* @__PURE__ */ jsxs76(DiffContainer, { ...props, children: [
    /* @__PURE__ */ jsxs76(Header2, { children: [
      /* @__PURE__ */ jsx91(Text52, { fontWeight: "bold", flex: 1, textAlign: "center", children: oldTitle }),
      /* @__PURE__ */ jsx91(Text52, { fontWeight: "bold", flex: 1, textAlign: "center", children: newTitle })
    ] }),
    /* @__PURE__ */ jsx91(ScrollView5, { children: /* @__PURE__ */ jsxs76(DiffContent, { children: [
      /* @__PURE__ */ jsx91(Pane, { children: diffs.map((line, i) => /* @__PURE__ */ jsxs76(Line2, { type: line.type === "removed" || line.type === "modified" ? "removed" : "neutral", children: [
        /* @__PURE__ */ jsx91(LineNumber, { children: line.num }),
        /* @__PURE__ */ jsx91(LineText, { children: line.oldL })
      ] }, `old-${i}`)) }),
      /* @__PURE__ */ jsx91(Pane, { last: true, children: diffs.map((line, i) => /* @__PURE__ */ jsxs76(Line2, { type: line.type === "added" || line.type === "modified" ? "added" : "neutral", children: [
        /* @__PURE__ */ jsx91(LineNumber, { children: line.num }),
        /* @__PURE__ */ jsx91(LineText, { children: line.newL })
      ] }, `new-${i}`)) })
    ] }) })
  ] });
};

// src/organisms/TimelineAudit/TimelineAudit.tsx
import { YStack as YStack68, XStack as XStack45, styled as styled72, Text as Text53, Circle as Circle4 } from "tamagui";
import { jsx as jsx92, jsxs as jsxs77 } from "react/jsx-runtime";
var AuditContainer = styled72(YStack68, {
  name: "TimelineAudit",
  width: "100%",
  gap: "$4",
  padding: "$4",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4"
});
var AuditItem = styled72(XStack45, {
  gap: "$3",
  position: "relative"
});
var Line3 = styled72(YStack68, {
  position: "absolute",
  left: 11,
  // Center of circle (24/2) - (2/2)
  top: 24,
  bottom: -16,
  // Connect to next
  width: 2,
  backgroundColor: "$borderColor",
  zIndex: 0
});
var AvatarCircle = styled72(Circle4, {
  width: 24,
  height: 24,
  backgroundColor: "$primary",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1
});
var AvatarText = styled72(Text53, {
  color: "white",
  fontSize: 10,
  fontWeight: "bold"
});
var Content6 = styled72(YStack68, {
  flex: 1,
  gap: "$1",
  paddingBottom: "$4"
});
var HeaderRow2 = styled72(XStack45, {
  alignItems: "center",
  gap: "$2",
  flexWrap: "wrap"
});
var UserText = styled72(Text53, {
  fontWeight: "bold",
  color: "$foreground",
  fontSize: "$3"
});
var ActionText = styled72(Text53, {
  color: "$mutedForeground",
  fontSize: "$3"
});
var TimeText = styled72(Text53, {
  color: "$gray10",
  fontSize: "$2",
  marginLeft: "auto"
});
var DiffBox = styled72(YStack68, {
  backgroundColor: "$muted",
  padding: "$2",
  borderRadius: "$2",
  marginTop: "$2"
});
var DiffText = styled72(Text53, {
  fontFamily: "$mono",
  fontSize: "$2",
  color: "$foreground"
});
var TimelineAudit = ({ events, ...props }) => {
  return /* @__PURE__ */ jsx92(AuditContainer, { ...props, children: events.map((event, index) => {
    const isLast = index === events.length - 1;
    return /* @__PURE__ */ jsxs77(AuditItem, { children: [
      !isLast && /* @__PURE__ */ jsx92(Line3, {}),
      /* @__PURE__ */ jsx92(AvatarCircle, { children: /* @__PURE__ */ jsx92(AvatarText, { children: event.userInitials || event.user.substring(0, 2).toUpperCase() }) }),
      /* @__PURE__ */ jsxs77(Content6, { children: [
        /* @__PURE__ */ jsxs77(HeaderRow2, { children: [
          /* @__PURE__ */ jsx92(UserText, { children: event.user }),
          /* @__PURE__ */ jsx92(ActionText, { children: event.action }),
          /* @__PURE__ */ jsx92(TimeText, { children: new Date(event.timestamp).toLocaleString() })
        ] }),
        event.details && /* @__PURE__ */ jsx92(Text53, { fontSize: "$3", children: event.details }),
        event.diff && /* @__PURE__ */ jsx92(DiffBox, { children: /* @__PURE__ */ jsx92(DiffText, { children: event.diff }) })
      ] })
    ] }, event.id);
  }) });
};

// src/organisms/A11yToolbar/A11yToolbar.tsx
import { YStack as YStack69, XStack as XStack46, styled as styled73, Text as Text54 } from "tamagui";
import { ZoomIn, ZoomOut, Moon, Sun, Type } from "@tamagui/lucide-icons";
import { jsx as jsx93, jsxs as jsxs78 } from "react/jsx-runtime";
var ToolbarContainer = styled73(XStack46, {
  name: "A11yToolbar",
  padding: "$2",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4",
  gap: "$2",
  alignItems: "center"
});
var Separator8 = styled73(YStack69, {
  width: 1,
  height: 24,
  backgroundColor: "$borderColor",
  marginHorizontal: "$1"
});
var A11yToolbar = ({
  onZoomIn,
  onZoomOut,
  onToggleTheme,
  onToggleHighContrast,
  isDark = false,
  ...props
}) => {
  return /* @__PURE__ */ jsxs78(ToolbarContainer, { ...props, children: [
    /* @__PURE__ */ jsx93(Text54, { fontSize: "$2", fontWeight: "bold", marginRight: "$2", children: "Acessibilidade:" }),
    /* @__PURE__ */ jsx93(Button, { icon: ZoomOut, size: "sm", variant: "outline", onPress: onZoomOut, "aria-label": "Diminuir fonte" }),
    /* @__PURE__ */ jsx93(Button, { icon: Type, size: "sm", variant: "ghost", disabled: true, "aria-label": "Tamanho da fonte" }),
    /* @__PURE__ */ jsx93(Button, { icon: ZoomIn, size: "sm", variant: "outline", onPress: onZoomIn, "aria-label": "Aumentar fonte" }),
    /* @__PURE__ */ jsx93(Separator8, {}),
    /* @__PURE__ */ jsx93(
      Button,
      {
        icon: isDark ? Sun : Moon,
        size: "sm",
        variant: "outline",
        onPress: onToggleTheme,
        "aria-label": isDark ? "Modo Claro" : "Modo Escuro"
      }
    ),
    /* @__PURE__ */ jsx93(
      Button,
      {
        size: "sm",
        variant: "outline",
        onPress: onToggleHighContrast,
        children: "Alto Contraste"
      }
    )
  ] });
};

// src/organisms/FileUpload/FileUpload.tsx
import { useRef as useRef6 } from "react";
import { YStack as YStack70, styled as styled74, Text as Text55 } from "tamagui";
import { Upload } from "@tamagui/lucide-icons";
import { jsx as jsx94, jsxs as jsxs79 } from "react/jsx-runtime";
var FileUploadFrame = styled74(YStack70, {
  name: "FileUpload",
  borderWidth: 2,
  borderColor: "$borderColor",
  borderStyle: "dashed",
  borderRadius: "$md",
  padding: "$6",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  variants: {
    hasError: {
      true: {
        borderColor: "$red10",
        backgroundColor: "$red2"
      }
    }
  }
});
var FileUpload = ({
  onFileSelect,
  accept,
  title = "Clique para enviar um arquivo",
  subtitle = "SVG, PNG, JPG ou GIF (MAX. 800x400px)",
  isLoading = false,
  hasError = false,
  errorMessage = "Ocorreu um erro. Tente novamente.",
  ...props
}) => {
  const inputRef = useRef6(null);
  const handlePress = () => {
    if (isLoading) return;
    if (typeof document !== "undefined" && inputRef.current) {
      inputRef.current.click();
    } else {
      console.warn("Native file picker not implemented");
      onFileSelect?.({ name: "demo.jpg", size: 1024 });
    }
  };
  const handleWebChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect?.(e.target.files[0]);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxs79(FileUploadFrame, { ...props, children: [
      /* @__PURE__ */ jsx94(Skeleton, { height: 32, width: 32, borderRadius: "$12" }),
      /* @__PURE__ */ jsxs79(YStack70, { gap: "$1", alignItems: "center", width: "100%", children: [
        /* @__PURE__ */ jsx94(Skeleton, { height: 20, width: "60%" }),
        /* @__PURE__ */ jsx94(Skeleton, { height: 16, width: "80%" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs79(FileUploadFrame, { hasError, ...props, children: [
    /* @__PURE__ */ jsxs79(
      Button,
      {
        variant: "ghost",
        onPress: handlePress,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "$4",
        disabled: isLoading,
        "aria-label": title,
        children: [
          /* @__PURE__ */ jsx94(Upload, { size: 32, color: hasError ? "$red10" : "$gray10" }),
          /* @__PURE__ */ jsxs79(YStack70, { gap: "$1", alignItems: "center", children: [
            /* @__PURE__ */ jsx94(Text55, { fontWeight: "bold", color: hasError ? "$red11" : void 0, children: title }),
            /* @__PURE__ */ jsx94(Text55, { fontSize: "$2", color: hasError ? "$red10" : "$gray11", children: subtitle })
          ] })
        ]
      }
    ),
    hasError && errorMessage && /* @__PURE__ */ jsx94(Text55, { fontSize: "$2", color: "$red11", textAlign: "center", children: errorMessage }),
    typeof document !== "undefined" && /* @__PURE__ */ jsx94(
      "input",
      {
        type: "file",
        ref: inputRef,
        style: { display: "none" },
        onChange: handleWebChange,
        accept,
        "data-testid": "file-input"
      }
    )
  ] });
};

// src/organisms/SchemaForm/SchemaForm.tsx
import { useForm } from "react-hook-form";
import { YStack as YStack71 } from "tamagui";
import { jsx as jsx95, jsxs as jsxs80 } from "react/jsx-runtime";
var renderFieldInput = (field, formField) => {
  const commonProps = {
    disabled: field.disabled,
    id: field.name
  };
  switch (field.type) {
    case "text":
    case "email":
    case "password":
    case "number":
      return /* @__PURE__ */ jsx95(
        Input,
        {
          ...formField,
          ...commonProps,
          placeholder: field.placeholder,
          type: field.type === "number" ? "number" : field.type
        }
      );
    case "textarea":
      return /* @__PURE__ */ jsx95(Textarea, { ...formField, ...commonProps, placeholder: field.placeholder });
    case "switch":
      return /* @__PURE__ */ jsx95(
        Switch,
        {
          checked: formField.value,
          onCheckedChange: formField.onChange,
          disabled: field.disabled
        }
      );
    case "checkbox":
      return /* @__PURE__ */ jsx95(
        Checkbox,
        {
          checked: formField.value,
          onCheckedChange: formField.onChange,
          disabled: field.disabled
        }
      );
    case "date":
      return /* @__PURE__ */ jsx95(
        DatePicker,
        {
          date: formField.value,
          onDateChange: formField.onChange,
          placeholder: field.placeholder,
          disabled: field.disabled
        }
      );
    case "select":
      return /* @__PURE__ */ jsxs80(
        SelectRoot,
        {
          value: formField.value,
          onValueChange: formField.onChange,
          disabled: field.disabled,
          children: [
            /* @__PURE__ */ jsx95(SelectRoot.Trigger, { placeholder: field.placeholder, children: /* @__PURE__ */ jsx95(SelectRoot.Value, { placeholder: field.placeholder }) }),
            /* @__PURE__ */ jsx95(SelectRoot.Sheet, {}),
            /* @__PURE__ */ jsx95(SelectRoot.Content, { children: /* @__PURE__ */ jsx95(SelectRoot.Viewport, { children: /* @__PURE__ */ jsx95(SelectRoot.Group, { children: field.options?.map((opt, i) => /* @__PURE__ */ jsxs80(SelectRoot.Item, { index: i, value: opt.value, children: [
              /* @__PURE__ */ jsx95(SelectRoot.ItemText, { children: opt.label }),
              /* @__PURE__ */ jsx95(SelectRoot.ItemIndicator, { marginLeft: "auto" })
            ] }, opt.value)) }) }) })
          ]
        }
      );
    default:
      return null;
  }
};
function SchemaForm({
  schema,
  defaultValues,
  onSubmit,
  submitText = "Enviar",
  isLoading
}) {
  const form = useForm({ defaultValues });
  return /* @__PURE__ */ jsx95(Form, { ...form, children: /* @__PURE__ */ jsx95(FormRoot, { tag: "form", onSubmit: form.handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs80(YStack71, { gap: "$4", children: [
    schema.map((field) => /* @__PURE__ */ jsx95(
      FormField,
      {
        control: form.control,
        name: field.name,
        rules: { required: field.required ? "Campo obrigat\xF3rio" : false },
        render: ({ field: formField }) => /* @__PURE__ */ jsxs80(FormItem, { children: [
          /* @__PURE__ */ jsx95(FormLabel, { children: field.label }),
          /* @__PURE__ */ jsx95(FormControl, { children: renderFieldInput(field, formField) }),
          field.description && /* @__PURE__ */ jsx95(FormDescription, { children: field.description }),
          /* @__PURE__ */ jsx95(FormMessage, {})
        ] })
      },
      field.name
    )),
    /* @__PURE__ */ jsx95(Button, { type: "submit", loading: isLoading, theme: "active", children: submitText })
  ] }) }) });
}

// src/organisms/HeatmapChart/HeatmapChart.tsx
import { YStack as YStack72, Text as Text56, useTheme as useTheme19 } from "tamagui";
import { VictoryScatter as VictoryScatter3, VictoryChart as VictoryChart12, VictoryAxis as VictoryAxis10, VictoryContainer as VictoryContainer8 } from "victory";
import { AlertTriangle as AlertTriangle16, Grid } from "@tamagui/lucide-icons";
import { useMemo as useMemo15 } from "react";
import { jsx as jsx96, jsxs as jsxs81 } from "react/jsx-runtime";
var HeatmapChart = ({
  data,
  xKey,
  yKey,
  valueKey,
  height = 300,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme19();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const processedData = useMemo15(() => {
    if (!data) return [];
    const values = data.map((d) => Number(d[valueKey]));
    const min = Math.min(...values);
    const max = Math.max(...values);
    return data.map((d) => ({
      x: d[xKey],
      y: d[yKey],
      value: Number(d[valueKey]),
      min,
      max
    }));
  }, [data, xKey, yKey, valueKey]);
  const getColor = (value, min, max) => {
    const ratio = max === min ? 1 : (value - min) / (max - min);
    const startColor = { r: 227, g: 242, b: 253 };
    const endColor = { r: 13, g: 71, b: 161 };
    const r = Math.round(startColor.r + (endColor.r - startColor.r) * ratio);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * ratio);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * ratio);
    return `rgb(${r},${g},${b})`;
  };
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx96(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs81(YStack72, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx96(AlertTriangle16, { color: "$red10" }),
        /* @__PURE__ */ jsx96(Text56, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ jsxs81(YStack72, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx96(Grid, { color: "$gray10" }),
        /* @__PURE__ */ jsx96(Text56, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ jsxs81(
      VictoryChart12,
      {
        domainPadding: { x: 20, y: 20 },
        height,
        containerComponent: /* @__PURE__ */ jsx96(VictoryContainer8, { responsive: true }),
        children: [
          /* @__PURE__ */ jsx96(
            VictoryAxis10,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ jsx96(
            VictoryAxis10,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ jsx96(
            VictoryScatter3,
            {
              data: processedData,
              symbol: "square",
              size: 15,
              style: {
                data: {
                  fill: ({ datum }) => getColor(datum.value, datum.min, datum.max)
                }
              }
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs81(YStack72, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/TreemapChart/TreemapChart.tsx
import { YStack as YStack73, Text as Text57, useTheme as useTheme20 } from "tamagui";
import { AlertTriangle as AlertTriangle17, Grid as Grid2 } from "@tamagui/lucide-icons";
import { useMemo as useMemo16 } from "react";
import Svg4, { Rect as SvgRect, Text as SvgText3, G as G3 } from "react-native-svg";
import { jsx as jsx97, jsxs as jsxs82 } from "react/jsx-runtime";
var layout = (nodes, container) => {
  if (nodes.length === 0) return [];
  if (nodes.length === 1) {
    return [{ ...nodes[0], rect: container }];
  }
  const total = nodes.reduce((s, n) => s + n.value, 0);
  if (total === 0) return nodes;
  const mid = total / 2;
  let currentSum = 0;
  let splitIndex = 0;
  for (let i = 0; i < nodes.length; i++) {
    const v = nodes[i].value;
    if (currentSum + v >= mid) {
      if (i > 0 && Math.abs(currentSum - mid) < Math.abs(currentSum + v - mid)) {
        splitIndex = i;
      } else {
        splitIndex = i + 1;
      }
      break;
    }
    currentSum += v;
    splitIndex = i + 1;
  }
  if (splitIndex === 0) splitIndex = 1;
  if (splitIndex === nodes.length) splitIndex = nodes.length - 1;
  const group1 = nodes.slice(0, splitIndex);
  const group2 = nodes.slice(splitIndex);
  const sum1 = group1.reduce((s, n) => s + n.value, 0);
  const isHorizontal = container.w > container.h;
  let rect1, rect2;
  if (isHorizontal) {
    const w1 = container.w * (sum1 / total);
    rect1 = { x: container.x, y: container.y, w: w1, h: container.h };
    rect2 = { x: container.x + w1, y: container.y, w: container.w - w1, h: container.h };
  } else {
    const h1 = container.h * (sum1 / total);
    rect1 = { x: container.x, y: container.y, w: container.w, h: h1 };
    rect2 = { x: container.x, y: container.y + h1, w: container.w, h: container.h - h1 };
  }
  return [
    ...layout(group1, rect1),
    ...layout(group2, rect2)
  ];
};
var TreemapChart = ({
  data,
  labelKey,
  valueKey,
  height = 300,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme20();
  const textColor = theme.color?.get() || "#fff";
  const processedNodes = useMemo16(() => {
    if (!data) return [];
    const nodes = data.map((d) => ({
      value: Number(d[valueKey]),
      label: String(d[labelKey]),
      originalData: d
    })).sort((a, b) => b.value - a.value);
    return layout(nodes, { x: 0, y: 0, w: 500, h: height });
  }, [data, labelKey, valueKey, height]);
  const colors = [
    "#e63946",
    "#f1faee",
    "#a8dadc",
    "#457b9d",
    "#1d3557",
    "#2a9d8f",
    "#e9c46a",
    "#f4a261",
    "#e76f51",
    "#264653"
  ];
  const getColor = (index) => colors[index % colors.length];
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx97(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs82(YStack73, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx97(AlertTriangle17, { color: "$red10" }),
        /* @__PURE__ */ jsx97(Text57, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ jsxs82(YStack73, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx97(Grid2, { color: "$gray10" }),
        /* @__PURE__ */ jsx97(Text57, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ jsx97(Svg4, { width: "100%", height, viewBox: `0 0 500 ${height}`, children: processedNodes.map((node, i) => /* @__PURE__ */ jsxs82(G3, { children: [
      /* @__PURE__ */ jsx97(
        SvgRect,
        {
          x: node.rect?.x,
          y: node.rect?.y,
          width: node.rect?.w,
          height: node.rect?.h,
          fill: getColor(i),
          stroke: "white",
          strokeWidth: "1"
        }
      ),
      node.rect && node.rect.w > 20 && node.rect.h > 15 && /* @__PURE__ */ jsx97(
        SvgText3,
        {
          x: (node.rect.x || 0) + (node.rect.w || 0) / 2,
          y: (node.rect.y || 0) + (node.rect.h || 0) / 2,
          fontSize: "12",
          fill: "white",
          textAnchor: "middle",
          alignmentBaseline: "middle",
          children: node.label
        }
      )
    ] }, i)) });
  };
  return /* @__PURE__ */ jsxs82(YStack73, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/SankeyDiagram/SankeyDiagram.tsx
import { YStack as YStack74, Text as Text58, useTheme as useTheme21 } from "tamagui";
import { AlertTriangle as AlertTriangle18, Activity as Activity3 } from "@tamagui/lucide-icons";
import { useMemo as useMemo17 } from "react";
import Svg5, { Rect as Rect2, Text as SvgText4, Path as Path4, G as G4 } from "react-native-svg";
import { jsx as jsx98, jsxs as jsxs83 } from "react/jsx-runtime";
var computeLayout = (data, width, height) => {
  const { nodes: rawNodes, links: rawLinks } = data;
  const nodes = rawNodes.map((n) => ({
    ...n,
    x: 0,
    y: 0,
    dy: 0,
    value: 0,
    depth: 0,
    sourceLinks: [],
    targetLinks: []
  }));
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const links = rawLinks.map((l) => ({
    ...l,
    sourceNode: nodeMap.get(l.source),
    targetNode: nodeMap.get(l.target),
    y0: 0,
    y1: 0,
    width: 0
  })).filter((l) => l.sourceNode && l.targetNode);
  links.forEach((l) => {
    l.sourceNode.sourceLinks.push(l);
    l.targetNode.targetLinks.push(l);
  });
  let changed = true;
  let iter = 0;
  while (changed && iter < 10) {
    changed = false;
    links.forEach((l) => {
      if (l.targetNode.depth <= l.sourceNode.depth) {
        l.targetNode.depth = l.sourceNode.depth + 1;
        changed = true;
      }
    });
    iter++;
  }
  const maxDepth = Math.max(...nodes.map((n) => n.depth), 1);
  nodes.forEach((n) => {
    const inputSum = n.targetLinks.reduce((s, l) => s + l.value, 0);
    const outputSum = n.sourceLinks.reduce((s, l) => s + l.value, 0);
    n.value = Math.max(inputSum, outputSum);
  });
  const nodeWidth = 20;
  const widthPerDepth = (width - nodeWidth) / maxDepth;
  nodes.forEach((n) => {
    n.x = n.depth * widthPerDepth;
  });
  const layers = Array.from({ length: maxDepth + 1 }, () => []);
  nodes.forEach((n) => layers[n.depth].push(n));
  const maxLayerValue = Math.max(...layers.map((layer) => layer.reduce((s, n) => s + n.value, 0)));
  const nodePadding = 10;
  const maxItems = Math.max(...layers.map((l) => l.length));
  const ky = (height - maxItems * nodePadding) / maxLayerValue;
  layers.forEach((layer) => {
    let y = 0;
    layer.forEach((n) => {
      n.dy = Math.max(n.value * ky, 5);
      n.y = y;
      y += n.dy + nodePadding;
    });
  });
  nodes.forEach((n) => {
    let sy = 0;
    n.sourceLinks.sort((a, b) => a.targetNode.y - b.targetNode.y).forEach((l) => {
      l.width = Math.max(l.value * ky, 1);
      l.y0 = n.y + sy + l.width / 2;
      sy += l.width;
    });
    let ty = 0;
    n.targetLinks.sort((a, b) => a.sourceNode.y - b.sourceNode.y).forEach((l) => {
      l.width = Math.max(l.value * ky, 1);
      l.y1 = n.y + ty + l.width / 2;
      ty += l.width;
    });
  });
  return { nodes, links };
};
var SankeyDiagram = ({
  data,
  width = 600,
  height = 400,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme21();
  const primaryColor = theme.primary?.get() || "#0070f3";
  const layout2 = useMemo17(() => {
    if (!data || data.nodes.length === 0) return null;
    return computeLayout(data, width, height);
  }, [data, width, height]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx98(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs83(YStack74, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx98(AlertTriangle18, { color: "$red10" }),
        /* @__PURE__ */ jsx98(Text58, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!layout2 || layout2.nodes.length === 0) {
      return /* @__PURE__ */ jsxs83(YStack74, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx98(Activity3, { color: "$gray10" }),
        /* @__PURE__ */ jsx98(Text58, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    const { nodes, links } = layout2;
    return /* @__PURE__ */ jsxs83(Svg5, { width: "100%", height, viewBox: `0 0 ${width} ${height}`, children: [
      links.map((link, i) => {
        const x0 = link.sourceNode.x + 20;
        const x1 = link.targetNode.x;
        const y0 = link.y0;
        const y1 = link.y1;
        const midX = (x0 + x1) / 2;
        const d = `M ${x0} ${y0} C ${midX} ${y0}, ${midX} ${y1}, ${x1} ${y1}`;
        return /* @__PURE__ */ jsx98(
          Path4,
          {
            d,
            stroke: primaryColor,
            strokeOpacity: 0.2,
            strokeWidth: link.width,
            fill: "none"
          },
          `link-${i}`
        );
      }),
      nodes.map((node, i) => /* @__PURE__ */ jsxs83(G4, { children: [
        /* @__PURE__ */ jsx98(
          Rect2,
          {
            x: node.x,
            y: node.y,
            width: 20,
            height: node.dy,
            fill: primaryColor,
            fillOpacity: 0.8
          }
        ),
        /* @__PURE__ */ jsx98(
          SvgText4,
          {
            x: node.x + 25,
            y: node.y + node.dy / 2,
            fontSize: "12",
            fill: theme.color?.get() || "black",
            alignmentBaseline: "middle",
            children: node.label
          }
        )
      ] }, `node-${i}`))
    ] });
  };
  return /* @__PURE__ */ jsxs83(YStack74, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/ChordDiagram/ChordDiagram.tsx
import { YStack as YStack75, Text as Text59, useTheme as useTheme22 } from "tamagui";
import { AlertTriangle as AlertTriangle19, Circle as Circle5 } from "@tamagui/lucide-icons";
import { useMemo as useMemo18 } from "react";
import Svg6, { Path as Path5, G as G5, Text as SvgText5 } from "react-native-svg";
import { jsx as jsx99, jsxs as jsxs84 } from "react/jsx-runtime";
var polarToCartesian = (centerX, centerY, radius, angleInRadians) => {
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};
var describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";
  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(" ");
};
var computeLayout2 = (matrix, labels, width, height) => {
  const size = Math.min(width, height);
  const outerRadius = size / 2 - 40;
  const innerRadius = outerRadius - 20;
  const cx = width / 2;
  const cy = height / 2;
  const n = matrix.length;
  const rowSums = matrix.map((row) => row.reduce((a, b) => a + b, 0));
  const total = rowSums.reduce((a, b) => a + b, 0);
  if (total === 0) return { groups: [], ribbons: [] };
  const padding = 0.05;
  const k = (2 * Math.PI - n * padding) / total;
  const groups = [];
  let currentAngle = 0;
  const groupAngles = [];
  for (let i = 0; i < n; i++) {
    const value = rowSums[i];
    const startAngle = currentAngle;
    const endAngle = currentAngle + value * k;
    const midAngle = (startAngle + endAngle) / 2;
    groupAngles.push({ startAngle, endAngle, current: startAngle });
    groups.push({
      index: i,
      label: labels[i] || `Node ${i}`,
      startAngle,
      endAngle,
      midAngle,
      color: `hsl(${i * 360 / n}, 70%, 50%)`,
      path: describeArc(cx, cy, outerRadius, startAngle, endAngle)
    });
    currentAngle = endAngle + padding;
  }
  const ribbons = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const value = matrix[i][j];
      if (value > 0) {
        const sourceGroup = groupAngles[i];
        const targetGroup = groupAngles[j];
        const sa1 = sourceGroup.current;
        const ea1 = sa1 + value * k;
        sourceGroup.current = ea1;
        const targetMid = (targetGroup.startAngle + targetGroup.endAngle) / 2;
        const tp = polarToCartesian(cx, cy, innerRadius * 0.2, targetMid);
        const p1 = polarToCartesian(cx, cy, innerRadius, sa1);
        const p2 = polarToCartesian(cx, cy, innerRadius, ea1);
        const tp2 = polarToCartesian(cx, cy, innerRadius, targetMid);
        const d = [
          "M",
          p1.x,
          p1.y,
          "A",
          innerRadius,
          innerRadius,
          0,
          0,
          1,
          p2.x,
          p2.y,
          "Q",
          cx,
          cy,
          tp2.x,
          tp2.y,
          // To target group mid
          "Q",
          cx,
          cy,
          p1.x,
          p1.y
        ].join(" ");
        ribbons.push({
          sourceIndex: i,
          targetIndex: j,
          d,
          color: groups[i].color
        });
      }
    }
  }
  return { groups, ribbons, cx, cy, outerRadius };
};
var ChordDiagram = ({
  matrix,
  labels,
  width = 400,
  height = 400,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme22();
  const layout2 = useMemo18(() => {
    if (!matrix || matrix.length === 0) return null;
    return computeLayout2(matrix, labels || [], width, height);
  }, [matrix, labels, width, height]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx99(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs84(YStack75, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx99(AlertTriangle19, { color: "$red10" }),
        /* @__PURE__ */ jsx99(Text59, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!layout2 || layout2.groups.length === 0) {
      return /* @__PURE__ */ jsxs84(YStack75, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx99(Circle5, { color: "$gray10" }),
        /* @__PURE__ */ jsx99(Text59, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    const { groups, ribbons, cx, cy, outerRadius } = layout2;
    return /* @__PURE__ */ jsx99(Svg6, { width: "100%", height, viewBox: `0 0 ${width} ${height}`, children: /* @__PURE__ */ jsxs84(G5, { children: [
      ribbons.map((ribbon, i) => /* @__PURE__ */ jsx99(
        Path5,
        {
          d: ribbon.d,
          fill: ribbon.color,
          fillOpacity: 0.5,
          stroke: "none"
        },
        `ribbon-${i}`
      )),
      groups.map((group, i) => {
        const labelPos = polarToCartesian(cx, cy, outerRadius + 20, group.midAngle);
        return /* @__PURE__ */ jsxs84(G5, { children: [
          /* @__PURE__ */ jsx99(
            Path5,
            {
              d: group.path,
              fill: group.color,
              stroke: theme.borderColor?.get() || "white"
            }
          ),
          /* @__PURE__ */ jsx99(
            SvgText5,
            {
              x: labelPos.x,
              y: labelPos.y,
              fill: theme.color?.get() || "black",
              fontSize: "12",
              textAnchor: "middle",
              alignmentBaseline: "middle",
              children: group.label
            }
          )
        ] }, `group-${i}`);
      })
    ] }) });
  };
  return /* @__PURE__ */ jsxs84(YStack75, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/NetworkGraph/NetworkGraph.tsx
import { YStack as YStack76, Text as Text60, useTheme as useTheme23 } from "tamagui";
import { AlertTriangle as AlertTriangle20, Share2 } from "@tamagui/lucide-icons";
import { useMemo as useMemo19 } from "react";
import Svg7, { Circle as Circle6, Line as Line4, Text as SvgText6, G as G6 } from "react-native-svg";
import { jsx as jsx100, jsxs as jsxs85 } from "react/jsx-runtime";
var runSimulation = (nodes, links, width, height) => {
  const simNodes = nodes.map((n, i) => ({
    ...n,
    x: width / 2 + (Math.random() - 0.5) * 50,
    y: height / 2 + (Math.random() - 0.5) * 50,
    vx: 0,
    vy: 0
  }));
  const nodeMap = new Map(simNodes.map((n) => [n.id, n]));
  const simLinks = links.map((l) => ({
    source: nodeMap.get(l.source),
    target: nodeMap.get(l.target)
  })).filter((l) => l.source && l.target);
  const repulsion = 500;
  const springLength = 100;
  const springStrength = 0.1;
  const centerStrength = 0.05;
  const damping = 0.9;
  for (let i = 0; i < 300; i++) {
    for (let j = 0; j < simNodes.length; j++) {
      for (let k = j + 1; k < simNodes.length; k++) {
        const n1 = simNodes[j];
        const n2 = simNodes[k];
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const distSq = dx * dx + dy * dy || 1;
        const dist = Math.sqrt(distSq);
        const f = repulsion / distSq;
        const fx = dx / dist * f;
        const fy = dy / dist * f;
        n1.vx += fx;
        n1.vy += fy;
        n2.vx -= fx;
        n2.vy -= fy;
      }
    }
    simLinks.forEach((link) => {
      const { source, target } = link;
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = (dist - springLength) * springStrength;
      const fx = dx / dist * force;
      const fy = dy / dist * force;
      source.vx += fx;
      source.vy += fy;
      target.vx -= fx;
      target.vy -= fy;
    });
    const cx = width / 2;
    const cy = height / 2;
    simNodes.forEach((n) => {
      n.vx += (cx - n.x) * centerStrength;
      n.vy += (cy - n.y) * centerStrength;
    });
    simNodes.forEach((n) => {
      n.vx *= damping;
      n.vy *= damping;
      n.x += n.vx;
      n.y += n.vy;
      const r = 20;
      n.x = Math.max(r, Math.min(width - r, n.x));
      n.y = Math.max(r, Math.min(height - r, n.y));
    });
  }
  return { nodes: simNodes, links: simLinks };
};
var NetworkGraph = ({
  data,
  width = 600,
  height = 400,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = useTheme23();
  const primaryColor = theme.primary?.get() || "#0070f3";
  const layout2 = useMemo19(() => {
    if (!data || data.nodes.length === 0) return null;
    return runSimulation(data.nodes, data.links, width, height);
  }, [data, width, height]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ jsx100(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ jsxs85(YStack76, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx100(AlertTriangle20, { color: "$red10" }),
        /* @__PURE__ */ jsx100(Text60, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!layout2 || layout2.nodes.length === 0) {
      return /* @__PURE__ */ jsxs85(YStack76, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ jsx100(Share2, { color: "$gray10" }),
        /* @__PURE__ */ jsx100(Text60, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ jsx100(Svg7, { width: "100%", height, viewBox: `0 0 ${width} ${height}`, children: /* @__PURE__ */ jsxs85(G6, { children: [
      layout2.links.map((link, i) => /* @__PURE__ */ jsx100(
        Line4,
        {
          x1: link.source.x,
          y1: link.source.y,
          x2: link.target.x,
          y2: link.target.y,
          stroke: theme.borderColor?.get() || "#ccc",
          strokeWidth: "2"
        },
        `link-${i}`
      )),
      layout2.nodes.map((node, i) => /* @__PURE__ */ jsxs85(G6, { children: [
        /* @__PURE__ */ jsx100(
          Circle6,
          {
            cx: node.x,
            cy: node.y,
            r: 20,
            fill: primaryColor,
            stroke: "white",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ jsx100(
          SvgText6,
          {
            x: node.x,
            y: node.y + 5,
            fill: "white",
            fontSize: "10",
            textAnchor: "middle",
            alignmentBaseline: "middle",
            children: node.label
          }
        )
      ] }, `node-${i}`))
    ] }) });
  };
  return /* @__PURE__ */ jsxs85(YStack76, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/MediaGrid/MediaGrid.tsx
import { useState as useState18 } from "react";
import { YStack as YStack77, XStack as XStack47, Text as Text61, Image as Image4, Button as Button8, ScrollView as ScrollView6, Stack as Stack3 } from "tamagui";
import { Check as Check8, Trash2, Upload as Upload2, Grip, List as ListIcon } from "@tamagui/lucide-icons";
import { jsx as jsx101, jsxs as jsxs86 } from "react/jsx-runtime";
var MediaGrid = ({
  items,
  selectedIds = [],
  onSelect,
  onMultiSelect,
  onDelete,
  onUpload,
  isLoading = false,
  viewMode = "grid",
  onViewModeChange,
  acceptedTypes
}) => {
  const [internalViewMode, setInternalViewMode] = useState18(viewMode);
  const currentViewMode = onViewModeChange ? viewMode : internalViewMode;
  const handleViewModeChange = (mode) => {
    if (onViewModeChange) {
      onViewModeChange(mode);
    } else {
      setInternalViewMode(mode);
    }
  };
  return /* @__PURE__ */ jsxs86(YStack77, { gap: "$4", f: 1, children: [
    /* @__PURE__ */ jsxs86(XStack47, { justifyContent: "space-between", alignItems: "center", children: [
      /* @__PURE__ */ jsxs86(XStack47, { gap: "$2", children: [
        onUpload && /* @__PURE__ */ jsx101(Button8, { icon: Upload2, onPress: onUpload, children: "Upload" }),
        selectedIds.length > 0 && onDelete && /* @__PURE__ */ jsxs86(
          Button8,
          {
            theme: "red",
            icon: Trash2,
            onPress: () => onDelete(selectedIds),
            children: [
              "Delete (",
              selectedIds.length,
              ")"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs86(XStack47, { gap: "$2", backgroundColor: "$background", padding: "$1", borderRadius: "$4", children: [
        /* @__PURE__ */ jsx101(
          Button8,
          {
            size: "$3",
            chromeless: currentViewMode !== "grid",
            theme: currentViewMode === "grid" ? "active" : void 0,
            icon: Grip,
            onPress: () => handleViewModeChange("grid")
          }
        ),
        /* @__PURE__ */ jsx101(
          Button8,
          {
            size: "$3",
            chromeless: currentViewMode !== "list",
            theme: currentViewMode === "list" ? "active" : void 0,
            icon: ListIcon,
            onPress: () => handleViewModeChange("list")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx101(ScrollView6, { children: /* @__PURE__ */ jsxs86(XStack47, { flexWrap: "wrap", gap: "$4", children: [
      items.map((item) => /* @__PURE__ */ jsx101(
        MediaItemCard,
        {
          item,
          selected: selectedIds.includes(item.id),
          onSelect: onSelect ? () => onSelect(item.id) : void 0,
          viewMode: currentViewMode
        },
        item.id
      )),
      items.length === 0 && !isLoading && /* @__PURE__ */ jsx101(YStack77, { f: 1, alignItems: "center", justifyContent: "center", padding: "$10", children: /* @__PURE__ */ jsx101(Text61, { color: "$color10", children: "No media found" }) })
    ] }) })
  ] });
};
var MediaItemCard = ({
  item,
  selected,
  onSelect,
  viewMode
}) => {
  if (viewMode === "list") {
    return /* @__PURE__ */ jsxs86(
      XStack47,
      {
        width: "100%",
        backgroundColor: "$background",
        padding: "$2",
        gap: "$4",
        alignItems: "center",
        hoverStyle: { backgroundColor: "$backgroundHover" },
        onPress: onSelect,
        cursor: "pointer",
        borderWidth: 1,
        borderColor: selected ? "$blue10" : "$borderColor",
        borderRadius: "$4",
        children: [
          /* @__PURE__ */ jsx101(
            Image4,
            {
              source: { uri: item.thumbnailUrl || item.url },
              width: 40,
              height: 40,
              borderRadius: "$2",
              objectFit: "cover"
            }
          ),
          /* @__PURE__ */ jsxs86(YStack77, { f: 1, children: [
            /* @__PURE__ */ jsx101(Text61, { fontWeight: "bold", children: item.title }),
            /* @__PURE__ */ jsxs86(Text61, { fontSize: "$2", color: "$color10", children: [
              item.type,
              " \u2022 ",
              formatBytes(item.size)
            ] })
          ] }),
          selected && /* @__PURE__ */ jsx101(Check8, { color: "$blue10" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs86(
    Card,
    {
      width: 180,
      height: 180,
      padding: 0,
      overflow: "hidden",
      onPress: onSelect,
      borderWidth: 2,
      borderColor: selected ? "$blue10" : "transparent",
      hoverStyle: { scale: 1.02 },
      pressStyle: { scale: 0.98 },
      animation: "quick",
      children: [
        /* @__PURE__ */ jsx101(
          Image4,
          {
            source: { uri: item.thumbnailUrl || item.url },
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        ),
        selected && /* @__PURE__ */ jsx101(
          Stack3,
          {
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "$blue10",
            padding: 4,
            borderRadius: 100,
            children: /* @__PURE__ */ jsx101(Check8, { size: 12, color: "white" })
          }
        ),
        /* @__PURE__ */ jsx101(
          YStack77,
          {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "$2",
            children: /* @__PURE__ */ jsx101(Text61, { color: "white", numberOfLines: 1, fontSize: "$2", children: item.title })
          }
        )
      ]
    }
  );
};
function formatBytes(bytes, decimals = 2) {
  if (!bytes) return "-";
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

// src/organisms/AuthScreen/AuthScreen.tsx
import { useState as useState19 } from "react";
import { YStack as YStack78, XStack as XStack48, Text as Text62, Image as Image5 } from "tamagui";
import { jsx as jsx102, jsxs as jsxs87 } from "react/jsx-runtime";
var AuthScreen = ({
  logo,
  title,
  subtitle,
  onLogin,
  onRegister,
  onForgotPassword,
  socialProviders,
  isLoading,
  defaultView = "login",
  error
}) => {
  const [view, setView] = useState19(defaultView);
  const [email, setEmail] = useState19("");
  const [password, setPassword] = useState19("");
  const [confirmPassword, setConfirmPassword] = useState19("");
  const [name, setName] = useState19("");
  const handleSubmit = () => {
    if (view === "login" && onLogin) {
      onLogin({ email, password });
    } else if (view === "register" && onRegister) {
      onRegister({ email, password, confirmPassword, name });
    } else if (view === "forgot-password" && onForgotPassword) {
      onForgotPassword(email);
    }
  };
  return /* @__PURE__ */ jsx102(YStack78, { f: 1, alignItems: "center", justifyContent: "center", padding: "$4", backgroundColor: "$background", children: /* @__PURE__ */ jsxs87(Card, { width: "100%", maxWidth: 400, padding: "$6", gap: "$4", elevation: "$2", children: [
    /* @__PURE__ */ jsxs87(YStack78, { alignItems: "center", gap: "$2", marginBottom: "$4", children: [
      typeof logo === "string" ? /* @__PURE__ */ jsx102(Image5, { source: { uri: logo }, width: 60, height: 60, borderRadius: "$2" }) : logo,
      /* @__PURE__ */ jsx102(Text62, { fontSize: "$6", fontWeight: "bold", children: title || (view === "login" ? "Welcome Back" : "Create Account") }),
      subtitle && /* @__PURE__ */ jsx102(Text62, { color: "$color10", textAlign: "center", children: subtitle })
    ] }),
    error && /* @__PURE__ */ jsx102(YStack78, { backgroundColor: "$red2", padding: "$2", borderRadius: "$2", children: /* @__PURE__ */ jsx102(Text62, { color: "$red10", children: error }) }),
    /* @__PURE__ */ jsxs87(YStack78, { gap: "$3", children: [
      view === "register" && /* @__PURE__ */ jsx102(
        Input,
        {
          placeholder: "Name",
          value: name,
          onChangeText: setName
        }
      ),
      /* @__PURE__ */ jsx102(
        Input,
        {
          placeholder: "Email",
          value: email,
          onChangeText: setEmail,
          autoCapitalize: "none"
        }
      ),
      view !== "forgot-password" && /* @__PURE__ */ jsx102(
        Input,
        {
          placeholder: "Password",
          value: password,
          onChangeText: setPassword,
          secureTextEntry: true
        }
      ),
      view === "register" && /* @__PURE__ */ jsx102(
        Input,
        {
          placeholder: "Confirm Password",
          value: confirmPassword,
          onChangeText: setConfirmPassword,
          secureTextEntry: true
        }
      ),
      view === "login" && onForgotPassword && /* @__PURE__ */ jsx102(
        Text62,
        {
          fontSize: "$2",
          color: "$blue10",
          alignSelf: "flex-end",
          onPress: () => setView("forgot-password"),
          cursor: "pointer",
          children: "Forgot password?"
        }
      ),
      /* @__PURE__ */ jsx102(
        Button,
        {
          themeInverse: true,
          onPress: handleSubmit,
          disabled: isLoading,
          icon: isLoading ? /* @__PURE__ */ jsx102(Spinner, {}) : void 0,
          children: view === "login" ? "Sign In" : view === "register" ? "Sign Up" : "Reset Password"
        }
      )
    ] }),
    socialProviders && socialProviders.length > 0 && view === "login" && /* @__PURE__ */ jsxs87(YStack78, { gap: "$3", marginTop: "$2", children: [
      /* @__PURE__ */ jsxs87(XStack48, { alignItems: "center", gap: "$2", children: [
        /* @__PURE__ */ jsx102(Separator, {}),
        /* @__PURE__ */ jsx102(Text62, { fontSize: "$2", color: "$color10", children: "Or continue with" }),
        /* @__PURE__ */ jsx102(Separator, {})
      ] }),
      /* @__PURE__ */ jsx102(XStack48, { gap: "$2", justifyContent: "center", children: socialProviders.map((provider) => /* @__PURE__ */ jsx102(
        Button,
        {
          icon: provider.icon,
          onPress: provider.onClick,
          variant: "outlined",
          children: provider.name
        },
        provider.name
      )) })
    ] }),
    /* @__PURE__ */ jsx102(YStack78, { alignItems: "center", marginTop: "$4", children: view === "login" ? /* @__PURE__ */ jsxs87(Text62, { fontSize: "$2", color: "$color10", children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ jsx102(
        Text62,
        {
          color: "$blue10",
          fontWeight: "bold",
          onPress: () => setView("register"),
          cursor: "pointer",
          children: "Sign Up"
        }
      )
    ] }) : /* @__PURE__ */ jsxs87(Text62, { fontSize: "$2", color: "$color10", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ jsx102(
        Text62,
        {
          color: "$blue10",
          fontWeight: "bold",
          onPress: () => setView("login"),
          cursor: "pointer",
          children: "Sign In"
        }
      )
    ] }) })
  ] }) });
};

// src/molecules/Field/Field.tsx
import React79 from "react";
import { styled as styled75, Text as Text63, XStack as XStack49, YStack as YStack79 } from "tamagui";
import { jsx as jsx103, jsxs as jsxs88 } from "react/jsx-runtime";
var FieldFrame = styled75(YStack79, {
  name: "Field",
  gap: "$2"
});
var FieldLabel = Label;
var FieldControlFrame = styled75(YStack79, {
  name: "FieldControl",
  flex: 1
});
var FieldErrorFrame = styled75(Text63, {
  name: "FieldError",
  color: "$destructive",
  fontSize: "$2"
});
var FieldRoot = ({
  isLoading = false,
  hasError = false,
  isDisabled = false,
  rightSlot,
  children,
  ...props
}) => {
  if (isLoading) {
    return /* @__PURE__ */ jsxs88(FieldFrame, { ...props, children: [
      /* @__PURE__ */ jsx103(Skeleton, { height: "$4", width: "$20" }),
      /* @__PURE__ */ jsx103(Skeleton, { height: "$10" })
    ] });
  }
  const childrenArray = React79.Children.toArray(children);
  const finalChildren = childrenArray.map((child, index) => {
    if (!React79.isValidElement(child)) {
      return child;
    }
    if (child.type === FieldLabel) {
      return React79.cloneElement(child, {
        key: `field-child-${index}`,
        state: hasError ? "error" : void 0,
        disabled: isDisabled
      });
    }
    if (child.type === FieldControlFrame) {
      const inputChild = React79.Children.only(child.props.children);
      const clonedInput = React79.cloneElement(
        inputChild,
        {
          state: hasError ? "error" : void 0,
          disabled: isDisabled
        }
      );
      const finalControl = React79.cloneElement(
        child,
        { key: `field-child-${index}` },
        clonedInput
      );
      if (rightSlot) {
        return /* @__PURE__ */ jsxs88(XStack49, { gap: "$2", alignItems: "center", children: [
          finalControl,
          rightSlot
        ] }, `field-child-${index}`);
      }
      return finalControl;
    }
    return child;
  });
  return /* @__PURE__ */ jsx103(FieldFrame, { ...props, children: finalChildren });
};
FieldRoot.displayName = "Field";
var Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
  Control: FieldControlFrame,
  Error: FieldErrorFrame
});

// src/molecules/InputGroup/InputGroup.tsx
import { Spinner as Spinner6, XStack as XStack50, styled as styled76 } from "tamagui";
import { cloneElement as cloneElement7, Children as Children5 } from "react";
import { jsx as jsx104, jsxs as jsxs89 } from "react/jsx-runtime";
var InputGroupFrame = styled76(XStack50, {
  name: "InputGroup",
  alignItems: "center",
  borderWidth: 1,
  borderRadius: "$2",
  borderColor: "$borderColor",
  paddingHorizontal: "$3",
  variants: {
    hasError: {
      true: {
        borderColor: "$red10"
      }
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: "$background"
      }
    }
  }
});
var InputGroup = ({
  children,
  isLoading,
  hasError,
  isDisabled
}) => {
  const childrenArray = Children5.toArray(children);
  return /* @__PURE__ */ jsxs89(InputGroupFrame, { hasError, disabled: isDisabled, gap: "$2", children: [
    Children5.map(childrenArray, (child) => {
      if (child.type === Input) {
        return cloneElement7(child, {
          disabled: isDisabled,
          borderWidth: 0,
          backgroundColor: "transparent",
          flex: 1,
          focusStyle: {
            borderWidth: 0,
            outlineWidth: 0
          }
        });
      }
      if (child.type === Button) {
        return cloneElement7(child, {
          disabled: isDisabled || isLoading,
          variant: "ghost"
        });
      }
      return child;
    }),
    isLoading && /* @__PURE__ */ jsx104(Spinner6, {})
  ] });
};

// src/molecules/NativeSelect/NativeSelect.tsx
import { ChevronDown as ChevronDown6, AlertCircle as AlertCircle8 } from "@tamagui/lucide-icons";
import { forwardRef as forwardRef14, useId as useId3 } from "react";
import { YStack as YStack81 } from "tamagui";

// src/molecules/NativeSelect/NativeSelect.styles.ts
import { Label as TamaguiLabel2, styled as styled77, XStack as XStack51, YStack as YStack80 } from "tamagui";
var SelectContainer = styled77(YStack80, {
  name: "SelectContainer",
  gap: "$2"
});
var SelectTrigger2 = styled77(XStack51, {
  name: "SelectTrigger",
  alignItems: "center",
  justifyContent: "space-between",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4",
  height: 40,
  paddingHorizontal: "$3",
  backgroundColor: "$background",
  variants: {
    hasError: {
      true: {
        borderColor: "$red10"
      }
    },
    disabled: {
      true: {
        backgroundColor: "$gray5",
        opacity: 0.5
      }
    }
  }
});
var SelectElement = styled77("select", {
  name: "Select",
  flex: 1,
  height: "100%",
  backgroundColor: "transparent",
  borderWidth: 0,
  outlineWidth: 0,
  color: "$color",
  fontSize: "$4",
  // Reset native styles
  appearance: "none"
});
var Label8 = styled77(TamaguiLabel2, {
  name: "Label",
  color: "$color",
  fontSize: "$4",
  variants: {
    hasError: {
      true: {
        color: "$red10"
      }
    }
  }
});

// src/molecules/NativeSelect/NativeSelect.tsx
import { jsx as jsx105, jsxs as jsxs90 } from "react/jsx-runtime";
var NativeSelect = forwardRef14(
  ({ children, label, id, hasError = false, isLoading = false, disabled = false, ...props }, ref) => {
    const internalId = useId3();
    const selectId = id || internalId;
    if (isLoading) {
      return /* @__PURE__ */ jsxs90(SelectContainer, { children: [
        label && /* @__PURE__ */ jsx105(Skeleton, { height: 20, width: 100 }),
        /* @__PURE__ */ jsx105(Skeleton, { height: 40 })
      ] });
    }
    return /* @__PURE__ */ jsxs90(SelectContainer, { children: [
      label && /* @__PURE__ */ jsx105(Label8, { htmlFor: selectId, hasError, children: label }),
      /* @__PURE__ */ jsxs90(SelectTrigger2, { hasError, disabled, children: [
        /* @__PURE__ */ jsx105(SelectElement, { id: selectId, ref, disabled, ...props, children }),
        /* @__PURE__ */ jsx105(YStack81, { pointerEvents: "none", position: "absolute", right: "$3", alignItems: "center", children: hasError ? /* @__PURE__ */ jsx105(AlertCircle8, { size: 16, color: "$red10" }) : /* @__PURE__ */ jsx105(ChevronDown6, { size: 16, color: "$color10" }) })
      ] })
    ] });
  }
);
NativeSelect.displayName = "NativeSelect";

// src/providers/AppProviders.tsx
import { TamaguiProvider } from "tamagui";
import { PortalProvider } from "@tamagui/portal";

// src/tamagui.config.ts
import { createTamagui, createFont } from "tamagui";

// ../../node_modules/@tamagui/use-presence/dist/esm/PresenceContext.mjs
import * as React81 from "react";
import { jsx as jsx106 } from "react/jsx-runtime";
var PresenceContext = React81.createContext(null);
var ResetPresence = (props) => {
  const parent = React81.useContext(PresenceContext);
  return /* @__PURE__ */ jsx106(PresenceContext.Provider, {
    value: props.disable ? parent : null,
    children: props.children
  });
};

// ../../node_modules/@tamagui/use-presence/dist/esm/usePresence.mjs
import * as React82 from "react";
function usePresence() {
  const context = React82.useContext(PresenceContext);
  if (!context) return [true, null, context];
  const {
    id,
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context;
  return React82.useEffect(() => register(id), []), !isPresent2 && onExitComplete ? [false, () => onExitComplete?.(id), context] : [true, void 0, context];
}

// ../../node_modules/@tamagui/animations-react-native/dist/esm/createAnimations.mjs
import React83 from "react";
import { Animated } from "react-native-web";
var animatedStyleKey = {
  transform: true,
  opacity: true
};
var colorStyleKey = {
  backgroundColor: true,
  color: true,
  borderColor: true,
  borderLeftColor: true,
  borderRightColor: true,
  borderTopColor: true,
  borderBottomColor: true
};
var costlyToAnimateStyleKey = {
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderTopWidth: true,
  borderBottomWidth: true,
  ...colorStyleKey
  // TODO for other keys like height or width, it's better to not add them here till layout animations are ready
};
var AnimatedView = Animated.View;
var AnimatedText = Animated.Text;
function useAnimatedNumber(initial) {
  const state = React83.useRef(null);
  return state.current || (state.current = {
    composite: null,
    val: new Animated.Value(initial),
    strategy: {
      type: "spring"
    }
  }), {
    getInstance() {
      return state.current.val;
    },
    getValue() {
      return state.current.val._value;
    },
    stop() {
      state.current.composite?.stop(), state.current.composite = null;
    },
    setValue(next, {
      type,
      ...config2
    } = {
      type: "spring"
    }, onFinish) {
      const val = state.current.val, handleFinish = onFinish ? ({
        finished
      }) => finished ? onFinish() : null : void 0;
      if (type === "direct") val.setValue(next);
      else if (type === "spring") {
        state.current.composite?.stop();
        const composite = Animated.spring(val, {
          ...config2,
          toValue: next,
          useNativeDriver: !isWeb
        });
        composite.start(handleFinish), state.current.composite = composite;
      } else {
        state.current.composite?.stop();
        const composite = Animated.timing(val, {
          ...config2,
          toValue: next,
          useNativeDriver: !isWeb
        });
        composite.start(handleFinish), state.current.composite = composite;
      }
    }
  };
}
var useAnimatedNumberReaction = ({
  value
}, onValue) => {
  const onChange = useEvent((current) => {
    onValue(current.value);
  });
  React83.useEffect(() => {
    const id = value.getInstance().addListener(onChange);
    return () => {
      value.getInstance().removeListener(id);
    };
  }, [value, onChange]);
};
var useAnimatedNumberStyle = (value, getStyle) => getStyle(value.getInstance());
function createAnimations(animations2) {
  return {
    isReactNative: true,
    animations: animations2,
    View: AnimatedView,
    Text: AnimatedText,
    useAnimatedNumber,
    useAnimatedNumberReaction,
    useAnimatedNumberStyle,
    usePresence,
    ResetPresence,
    useAnimations: ({
      props,
      onDidAnimate,
      style,
      componentState,
      presence
    }) => {
      const isDisabled = isWeb && componentState.unmounted === true, isExiting = presence?.[0] === false, sendExitComplete = presence?.[1], animateStyles = React83.useRef({}), animatedTranforms = React83.useRef([]), animationsState = React83.useRef(/* @__PURE__ */ new WeakMap()), animateOnly = props.animateOnly || [], hasAnimateOnly = !!props.animateOnly, args = [JSON.stringify(style), componentState, isExiting, !!onDidAnimate], isThereNoNativeStyleKeys = React83.useMemo(() => isWeb ? true : Object.keys(style).some((key) => animateOnly ? !animatedStyleKey[key] && animateOnly.indexOf(key) === -1 : !animatedStyleKey[key]), args), res = React83.useMemo(() => {
        const runners = [], completions = [], nonAnimatedStyle = {};
        for (const key in style) {
          const val = style[key];
          if (!isDisabled) {
            if (animatedStyleKey[key] == null && !costlyToAnimateStyleKey[key]) {
              nonAnimatedStyle[key] = val;
              continue;
            }
            if (hasAnimateOnly && !animateOnly.includes(key)) {
              nonAnimatedStyle[key] = val;
              continue;
            }
            if (key !== "transform") {
              animateStyles.current[key] = update(key, animateStyles.current[key], val);
              continue;
            }
            if (val) {
              if (typeof val == "string") {
                console.warn("Warning: Tamagui can't animate string transforms yet!");
                continue;
              }
              for (const [index, transform] of val.entries()) {
                if (!transform) continue;
                const tkey = Object.keys(transform)[0], currentTransform = animatedTranforms.current[index]?.[tkey];
                animatedTranforms.current[index] = {
                  [tkey]: update(tkey, currentTransform, transform[tkey])
                }, animatedTranforms.current = [...animatedTranforms.current];
              }
            }
          }
        }
        const animatedStyle = {
          ...Object.fromEntries(Object.entries(animateStyles.current).map(([k, v]) => [k, animationsState.current.get(v)?.interpolation || v])),
          transform: animatedTranforms.current.map((r) => {
            const key = Object.keys(r)[0], val = animationsState.current.get(r[key])?.interpolation || r[key];
            return {
              [key]: val
            };
          })
        };
        return {
          runners,
          completions,
          style: [nonAnimatedStyle, animatedStyle]
        };
        function update(key, animated, valIn) {
          const isColorStyleKey = colorStyleKey[key], [val, type] = isColorStyleKey ? [0, void 0] : getValue(valIn);
          let animateToValue = val;
          const value = animated || new Animated.Value(val), curInterpolation = animationsState.current.get(value);
          let interpolateArgs;
          if (type && (interpolateArgs = getInterpolated(curInterpolation?.current ?? value._value, val, type), animationsState.current.set(value, {
            interpolation: value.interpolate(interpolateArgs),
            current: val
          })), isColorStyleKey && (animateToValue = curInterpolation?.animateToValue ? 0 : 1, interpolateArgs = getColorInterpolated(
            curInterpolation?.current,
            // valIn is the next color
            valIn,
            animateToValue
          ), animationsState.current.set(value, {
            current: valIn,
            interpolation: value.interpolate(interpolateArgs),
            animateToValue: curInterpolation?.animateToValue ? 0 : 1
          })), value) {
            const animationConfig = getAnimationConfig(key, animations2, props.animation);
            let resolve;
            const promise = new Promise((res2) => {
              resolve = res2;
            });
            completions.push(promise), runners.push(() => {
              value.stopAnimation();
              function getAnimation() {
                return Animated[animationConfig.type || "spring"](value, {
                  toValue: animateToValue,
                  useNativeDriver: !isWeb && !isThereNoNativeStyleKeys,
                  ...animationConfig
                });
              }
              (animationConfig.delay ? Animated.sequence([Animated.delay(animationConfig.delay), getAnimation()]) : getAnimation()).start(({
                finished
              }) => {
                finished && resolve();
              });
            });
          }
          return process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info(" \u{1F4A0} animate", key, `from (${value._value}) to`, valIn, `(${val})`, "type", type, "interpolate", interpolateArgs), value;
        }
      }, args);
      return useIsomorphicLayoutEffect(() => {
        res.runners.forEach((r) => r());
        let cancel = false;
        return Promise.all(res.completions).then(() => {
          cancel || (onDidAnimate?.(), isExiting && sendExitComplete?.());
        }), () => {
          cancel = true;
        };
      }, args), process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info("Animated", {
        response: res,
        inputStyle: style,
        isExiting
      }), res;
    }
  };
}
function getColorInterpolated(currentColor, nextColor, animateToValue) {
  const inputRange = [0, 1], outputRange = [currentColor || nextColor, nextColor];
  return animateToValue === 0 && outputRange.reverse(), {
    inputRange,
    outputRange
  };
}
function getInterpolated(current, next, postfix = "deg") {
  next === current && (current = next - 1e-9);
  const inputRange = [current, next], outputRange = [`${current}${postfix}`, `${next}${postfix}`];
  return next < current && (inputRange.reverse(), outputRange.reverse()), {
    inputRange,
    outputRange
  };
}
function getAnimationConfig(key, animations2, animation) {
  if (typeof animation == "string") return animations2[animation];
  let type = "", extraConf;
  const shortKey = transformShorthands[key];
  if (Array.isArray(animation)) {
    type = animation[0];
    const conf2 = animation[1]?.[key] ?? animation[1]?.[shortKey];
    conf2 && (typeof conf2 == "string" ? type = conf2 : (type = conf2.type || type, extraConf = conf2));
  } else {
    const val = animation?.[key] ?? animation?.[shortKey];
    type = val?.type, extraConf = val;
  }
  return {
    ...animations2[type],
    ...extraConf
  };
}
var transformShorthands = {
  x: "translateX",
  y: "translateY",
  translateX: "x",
  translateY: "y"
};
function getValue(input, isColor = false) {
  if (typeof input != "string") return [input];
  const [_, number, after] = input.match(/([-0-9]+)(deg|%|px)/) ?? [];
  return [+number, after];
}

// src/theme/tokens.ts
import { createTokens } from "tamagui";
var palette = {
  transparent: "transparent",
  white: "#FFFFFF",
  black: "#000000",
  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5F5",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate600: "#475569",
  slate700: "#334155",
  slate800: "#1E293B",
  slate900: "#0F172A",
  violet400: "#A78BFA",
  violet500: "#8B5CF6",
  violet600: "#7C3AED",
  violet700: "#6D28D9",
  green500: "#22C55E",
  green600: "#16A34A",
  green700: "#15803D",
  amber500: "#F59E0B",
  amber600: "#D97706",
  amber700: "#B45309",
  red500: "#EF4444",
  red600: "#DC2626",
  red700: "#B91C1C",
  sky500: "#0EA5E9",
  sky600: "#0284C7",
  sky700: "#0369A1",
  // Rio Brand Palette
  rioDeepBlue: "#13335A",
  rioLightGray: "#ECEDED",
  rioGradientStart: "#2A688F",
  rioGradientEnd: "#42B9EB",
  // IVISA Brand Palette (Legacy/Mapped)
  // Primary (Rio Deep Blue based)
  ivisaPrimary50: "#E0E5EB",
  // Lighter version
  ivisaPrimary100: "#B3C0CF",
  ivisaPrimary200: "#809AB3",
  ivisaPrimary300: "#4D7596",
  ivisaPrimary400: "#265980",
  ivisaPrimary500: "#13335A",
  // Base Color
  ivisaPrimary600: "#112E51",
  ivisaPrimary700: "#0E2643",
  ivisaPrimary800: "#0B1F36",
  ivisaPrimary900: "#081728",
  ivisaPrimary950: "#050E19",
  // Secondary (Rio Light Gray / Gradient Blue)
  ivisaSecondary50: "#F9F9F9",
  ivisaSecondary100: "#ECEDED",
  // Base Light Gray
  ivisaSecondary200: "#D1D3D3",
  ivisaSecondary300: "#B6BABA",
  ivisaSecondary400: "#9CA0A0",
  ivisaSecondary500: "#2A688F",
  // Gradient Start
  ivisaSecondary600: "#255D80",
  ivisaSecondary700: "#205170",
  ivisaSecondary800: "#1A4560",
  ivisaSecondary900: "#153A50",
  // Semantic: Success (Green)
  ivisaSuccess50: "#E9FFE6",
  ivisaSuccess100: "#CCFFC8",
  ivisaSuccess200: "#9DFF97",
  ivisaSuccess300: "#60FB5B",
  ivisaSuccess400: "#2FF12A",
  ivisaSuccess500: "#0CDC0B",
  ivisaSuccess600: "#04AC06",
  ivisaSuccess700: "#08830C",
  ivisaSuccess800: "#105715",
  ivisaSuccess900: "#023106",
  // Semantic: Error (Red)
  ivisaError50: "#FFF0F0",
  ivisaError100: "#FFDDDD",
  ivisaError200: "#FFC0C0",
  ivisaError300: "#FF9494",
  ivisaError400: "#FF5757",
  ivisaError500: "#FF2323",
  ivisaError600: "#FF0000",
  ivisaError700: "#D70000",
  ivisaError800: "#B10303",
  ivisaError900: "#920A0A",
  ivisaError950: "#500000",
  // Semantic: Warning (Yellow/Gold)
  ivisaWarning50: "#FAFEE8",
  ivisaWarning100: "#F4FFC2",
  ivisaWarning200: "#EDFF87",
  ivisaWarning300: "#EBFF43",
  ivisaWarning400: "#F2FF0E",
  ivisaWarning500: "#ECEF03",
  ivisaWarning600: "#CEC000",
  ivisaWarning700: "#A48C04",
  ivisaWarning800: "#886D0B",
  ivisaWarning900: "#735810",
  ivisaWarning950: "#433005",
  // Gray (Alternative)
  ivisaGray50: "#F6F6F6",
  ivisaGray100: "#E7E7E7",
  ivisaGray200: "#D1D1D1",
  ivisaGray300: "#B0B0B0",
  ivisaGray400: "#888888",
  ivisaGray500: "#6D6D6D",
  ivisaGray600: "#5D5D5D",
  ivisaGray700: "#4F4F4F",
  ivisaGray800: "#454545",
  ivisaGray900: "#3D3D3D",
  ivisaGray950: "#262626",
  // Dark Blue Gray (Dark)
  ivisaDarkBlueGray100: "#DDEDF0",
  ivisaDarkBlueGray300: "#91C1CF",
  ivisaDarkBlueGray500: "#418199",
  ivisaDarkBlueGray700: "#314B59",
  ivisaDarkBlueGray900: "#263742",
  ivisaDarkBlueGray950: "#192833"
};
var sizeScale = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  // matches xs
  7: 28,
  8: 32,
  // matches sm
  9: 36,
  10: 40,
  // matches md
  11: 44,
  12: 48,
  // matches lg
  13: 52,
  14: 56,
  // matches xl
  15: 60,
  16: 64,
  // matches 2xl
  17: 72,
  18: 80,
  // matches 3xl
  19: 88,
  20: 96,
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  "2xl": 64,
  "3xl": 80,
  true: 40
  // default (md)
};
var spaceScale = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  xs: 8,
  // was 4
  sm: 12,
  // was 8
  md: 16,
  // was 12
  lg: 24,
  // was 16
  xl: 32,
  // was 24
  "2xl": 40,
  // was 32
  "3xl": 48,
  // was 40
  "4xl": 64,
  // was 48
  true: 16
  // default (md)
};
var radiusScale = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50,
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  // ShadCN default (0.5rem)
  lg: 12,
  xl: 24,
  full: 9999,
  true: 8
  // default (md)
};
var zIndexScale = {
  base: 0,
  dropdown: 1e3,
  sticky: 1020,
  modal: 1100,
  popover: 1200,
  toast: 1300,
  true: 0
  // default (base)
};
var tokens = createTokens({
  color: {
    ...palette,
    // Standard Tamagui / Radix Grays (Mapped to IVISA Grays)
    gray1: palette.ivisaGray50,
    gray2: palette.ivisaGray100,
    gray3: palette.ivisaGray200,
    gray4: palette.ivisaGray300,
    gray5: palette.ivisaGray400,
    gray6: palette.ivisaGray500,
    gray7: palette.ivisaGray600,
    gray8: palette.ivisaGray700,
    gray9: palette.ivisaGray800,
    gray10: palette.ivisaGray900,
    gray11: palette.ivisaGray950,
    gray12: palette.black,
    // Semantic Colors (Mappings for consistency)
    color1: palette.ivisaGray50,
    color2: palette.ivisaGray100,
    color3: palette.ivisaGray200,
    color4: palette.ivisaGray300,
    color5: palette.ivisaGray400,
    color6: palette.ivisaGray500,
    color7: palette.ivisaGray600,
    color8: palette.ivisaGray700,
    color9: palette.ivisaGray800,
    color10: palette.ivisaGray900,
    color11: palette.ivisaGray950,
    color12: palette.black,
    // Fix missing tokens
    red10: palette.red700,
    outlineColor: palette.rioDeepBlue,
    mutedForeground: palette.slate500
    // Zinc 500 equivalent
  },
  space: spaceScale,
  size: sizeScale,
  radius: radiusScale,
  zIndex: zIndexScale
});
var lightColors = {
  background: palette.white,
  backgroundHover: palette.slate50,
  backgroundPress: palette.slate100,
  backgroundFocus: palette.slate100,
  backgroundStrong: palette.slate200,
  backgroundTransparent: palette.transparent,
  borderColor: palette.slate200,
  borderColorHover: palette.slate300,
  borderColorPress: palette.slate300,
  borderColorFocus: palette.violet500,
  color: palette.slate900,
  colorHover: palette.slate900,
  colorPress: palette.slate900,
  colorFocus: palette.slate900,
  colorTransparent: palette.transparent,
  placeholderColor: palette.slate500,
  shadowColor: "rgba(15,23,42,0.08)",
  shadowColorHover: "rgba(15,23,42,0.12)",
  primary: palette.rioDeepBlue,
  primaryHover: palette.rioGradientStart,
  primaryPress: palette.rioGradientEnd,
  primaryFocus: palette.rioGradientStart,
  primaryForeground: palette.white,
  secondary: palette.rioLightGray,
  secondaryHover: palette.slate200,
  secondaryPress: palette.slate200,
  secondaryFocus: palette.slate300,
  secondaryForeground: palette.rioDeepBlue,
  accent: "#EEF2FF",
  accentHover: "#E0E7FF",
  accentPress: "#C7D2FE",
  accentFocus: "#C7D2FE",
  accentForeground: "#312E81",
  destructive: palette.red500,
  destructiveHover: palette.red600,
  destructivePress: palette.red600,
  destructiveFocus: palette.red700,
  destructiveForeground: palette.white,
  success: palette.green500,
  successHover: palette.green600,
  successPress: palette.green600,
  successFocus: palette.green700,
  successForeground: palette.white,
  warning: palette.amber500,
  warningHover: palette.amber600,
  warningPress: palette.amber600,
  warningFocus: palette.amber700,
  warningForeground: palette.slate900,
  info: palette.sky500,
  infoHover: palette.sky600,
  infoPress: palette.sky600,
  infoFocus: palette.sky700,
  infoForeground: palette.white,
  muted: palette.slate100,
  mutedForeground: palette.slate500,
  ring: palette.rioDeepBlue,
  outlineColor: palette.rioDeepBlue
};
var darkColors = {
  background: palette.slate900,
  backgroundHover: palette.slate800,
  backgroundPress: palette.slate800,
  backgroundFocus: palette.slate700,
  backgroundStrong: palette.slate800,
  backgroundTransparent: palette.transparent,
  borderColor: palette.slate700,
  borderColorHover: palette.slate600,
  borderColorPress: palette.slate600,
  borderColorFocus: palette.rioDeepBlue,
  color: palette.slate100,
  colorHover: palette.white,
  colorPress: palette.white,
  colorFocus: palette.white,
  colorTransparent: palette.transparent,
  placeholderColor: palette.slate400,
  shadowColor: "rgba(15,23,42,0.45)",
  shadowColorHover: "rgba(15,23,42,0.55)",
  primary: palette.rioGradientEnd,
  primaryHover: palette.rioGradientStart,
  primaryPress: palette.rioGradientStart,
  primaryFocus: palette.rioGradientStart,
  primaryForeground: palette.slate900,
  secondary: palette.slate800,
  secondaryHover: palette.slate700,
  secondaryPress: palette.slate700,
  secondaryFocus: palette.slate600,
  secondaryForeground: palette.slate100,
  accent: "#1E1B4B",
  accentHover: "#312E81",
  accentPress: "#3730A3",
  accentFocus: "#4338CA",
  accentForeground: palette.white,
  destructive: palette.red600,
  destructiveHover: palette.red500,
  destructivePress: palette.red500,
  destructiveFocus: palette.red700,
  destructiveForeground: palette.white,
  success: palette.green500,
  successHover: palette.green600,
  successPress: palette.green600,
  successFocus: palette.green700,
  successForeground: palette.white,
  warning: palette.amber500,
  warningHover: palette.amber600,
  warningPress: palette.amber600,
  warningFocus: palette.amber700,
  warningForeground: palette.slate900,
  info: palette.sky500,
  infoHover: palette.sky600,
  infoPress: palette.sky600,
  infoFocus: palette.sky700,
  infoForeground: palette.white,
  muted: palette.slate800,
  mutedForeground: palette.slate400,
  ring: palette.rioGradientEnd,
  outlineColor: palette.rioGradientEnd
};

// src/theme/themes.ts
import { createThemes, defaultComponentThemes } from "@tamagui/theme-builder";
import * as Colors from "@tamagui/colors";

// src/theme/escuro.ts
var escuroColors = {
  ...darkColors,
  // Base Backgrounds (Zinc 950/900)
  background: "#09090b",
  backgroundHover: "#18181b",
  backgroundPress: "#27272a",
  backgroundFocus: "#27272a",
  backgroundStrong: "#09090b",
  // Borders (Zinc 800)
  borderColor: "#27272a",
  borderColorHover: "#3f3f46",
  borderColorFocus: "#52525b",
  // Text (Zinc 50)
  color: "#fafafa",
  colorHover: "#f4f4f5",
  colorPress: "#e4e4e7",
  colorFocus: "#fafafa",
  // Primary Action (High Contrast Zinc 50)
  primary: "#fafafa",
  primaryHover: "#f4f4f5",
  primaryPress: "#e4e4e7",
  primaryFocus: "#fafafa",
  primaryForeground: "#18181b",
  // Zinc 900 for text on primary
  // Secondary (Zinc 900)
  secondary: "#18181b",
  secondaryHover: "#27272a",
  secondaryPress: "#3f3f46",
  secondaryForeground: "#fafafa",
  mutedForeground: "#a1a1aa",
  // Zinc 400
  // Glassmorphism hints
  shadowColor: "rgba(0, 0, 0, 0.4)",
  shadowColorHover: "rgba(0, 0, 0, 0.6)"
};

// src/theme/themes.ts
var darkPalette = [
  "hsla(208, 72%, 8%, 1)",
  "hsla(206, 74%, 16%, 1)",
  "hsla(205, 77%, 25%, 1)",
  "hsla(204, 79%, 33%, 1)",
  "hsla(203, 82%, 41%, 1)",
  "hsla(201, 85%, 50%, 1)",
  "hsla(200, 87%, 58%, 1)",
  "hsla(199, 90%, 67%, 1)",
  "hsla(198, 92%, 75%, 1)",
  "hsla(196, 95%, 83%, 1)",
  "hsla(195, 97%, 92%, 1)",
  "hsla(194, 100%, 100%, 1)"
];
var lightPalette = [
  "hsla(208, 72%, 100%, 1)",
  "hsla(208, 66%, 93%, 1)",
  "hsla(209, 60%, 85%, 1)",
  "hsla(209, 54%, 78%, 1)",
  "hsla(210, 47%, 71%, 1)",
  "hsla(210, 41%, 63%, 1)",
  "hsla(211, 35%, 56%, 1)",
  "hsla(211, 29%, 48%, 1)",
  "hsla(212, 23%, 41%, 1)",
  "hsla(212, 17%, 34%, 1)",
  "hsla(213, 11%, 26%, 1)",
  "hsla(213, 5%, 19%, 1)"
];
var lightShadows = {
  shadow1: "rgba(0,0,0,0.04)",
  shadow2: "rgba(0,0,0,0.08)",
  shadow3: "rgba(0,0,0,0.16)",
  shadow4: "rgba(0,0,0,0.24)",
  shadow5: "rgba(0,0,0,0.32)",
  shadow6: "rgba(0,0,0,0.4)"
};
var darkShadows = {
  shadow1: "rgba(0,0,0,0.2)",
  shadow2: "rgba(0,0,0,0.3)",
  shadow3: "rgba(0,0,0,0.4)",
  shadow4: "rgba(0,0,0,0.5)",
  shadow5: "rgba(0,0,0,0.6)",
  shadow6: "rgba(0,0,0,0.7)"
};
var builtThemes = createThemes({
  componentThemes: defaultComponentThemes,
  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette
    },
    extra: {
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
        // Semantic Tokens Mapping (Light)
        primary: lightPalette[8],
        // Strong blue
        primaryHover: lightPalette[9],
        primaryPress: lightPalette[10],
        primaryForeground: lightPalette[0],
        // White-ish
        secondary: lightPalette[2],
        // Light gray/blue
        secondaryHover: lightPalette[3],
        secondaryPress: lightPalette[3],
        secondaryForeground: lightPalette[11],
        // Dark
        muted: lightPalette[1],
        mutedForeground: lightPalette[6],
        accent: lightPalette[2],
        accentForeground: lightPalette[11],
        destructive: Colors.red.red10,
        destructiveHover: Colors.red.red11,
        destructivePress: Colors.red.red12,
        destructiveForeground: "#FFFFFF",
        border: lightPalette[4],
        input: lightPalette[4],
        ring: lightPalette[8],
        background: lightPalette[0],
        foreground: lightPalette[11]
      },
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        ...escuroColors,
        shadowColor: darkShadows.shadow1,
        border: escuroColors.borderColor,
        input: escuroColors.borderColor,
        ring: escuroColors.primary,
        foreground: escuroColors.color
      },
      claro: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        ...lightColors,
        shadowColor: lightShadows.shadow1,
        border: lightColors.borderColor,
        input: lightColors.borderColor,
        ring: lightColors.primary,
        foreground: lightColors.color
      },
      escuro: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        ...escuroColors,
        shadowColor: darkShadows.shadow1,
        border: escuroColors.borderColor,
        input: escuroColors.borderColor,
        ring: escuroColors.primary,
        foreground: escuroColors.color
      }
    }
  },
  accent: {
    palette: {
      dark: [
        "hsla(220, 60%, 23%, 1)",
        "hsla(216, 60%, 30%, 1)",
        "hsla(213, 59%, 37%, 1)",
        "hsla(209, 59%, 44%, 1)",
        "hsla(205, 59%, 51%, 1)",
        "hsla(202, 58%, 58%, 1)",
        "hsla(198, 58%, 65%, 1)",
        "hsla(195, 57%, 72%, 1)",
        "hsla(191, 57%, 79%, 1)",
        "hsla(187, 57%, 86%, 1)",
        "hsla(184, 56%, 93%, 1)",
        "hsla(180, 56%, 100%, 1)",
        "hsla(180, 56%, 74%, 1)"
      ],
      light: [
        "hsla(220, 60%, 23%, 1)",
        "hsla(218, 60%, 30%, 1)",
        "hsla(215, 59%, 37%, 1)",
        "hsla(213, 59%, 44%, 1)",
        "hsla(210, 59%, 51%, 1)",
        "hsla(208, 58%, 58%, 1)",
        "hsla(205, 58%, 65%, 1)",
        "hsla(203, 57%, 72%, 1)",
        "hsla(200, 57%, 79%, 1)",
        "hsla(198, 57%, 86%, 1)",
        "hsla(195, 56%, 93%, 1)",
        "hsla(193, 56%, 100%, 1)",
        "hsla(193, 56%, 74%, 1)"
      ]
    }
  },
  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow)
      }
    },
    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red)
      }
    },
    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green)
      }
    }
  }
});
var themes = builtThemes;

// src/tamagui.config.ts
var baseThemes = themes;
var themes2 = {
  ...baseThemes,
  claro: baseThemes.light,
  escuro: baseThemes.dark
};
var ceraProFont = createFont({
  family: "Cera Pro",
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 32,
    8: 48,
    9: 64,
    // Named tokens to match `size` prop usage
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
    "4xl": 48,
    "5xl": 64,
    // Aliases for safety
    default: 16,
    true: 16,
    "$3": 16
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 28,
    5: 32,
    6: 40,
    7: 48,
    8: 64,
    9: 80
  },
  weight: {
    4: "400",
    // Regular
    5: "500",
    // Medium
    9: "900"
    // Black
  },
  letterSpacing: {
    4: 0,
    7: -0.5,
    // Tighter for large titles
    9: -1
  },
  face: {
    400: { normal: "CeraPro-Regular" },
    500: { normal: "CeraPro-Medium" },
    900: { normal: "CeraPro-Black" }
  }
});
var animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250
  },
  medium: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100
  }
});
var config = createTamagui({
  // Animations
  animations,
  // Fonts
  fonts: {
    heading: ceraProFont,
    body: ceraProFont,
    brandHeading: ceraProFont,
    brandBody: ceraProFont
  },
  // Tokens
  tokens,
  // Themes
  themes: themes2,
  // Media queries
  // These are the default media queries, useful for responsive design
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 661 },
    gtSm: { minWidth: 801 },
    gtMd: { minWidth: 1021 },
    gtLg: { minWidth: 1281 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" }
  },
  // Shorthands
  // These are CSS-like shorthands for common style properties
  shorthands: {
    ac: "alignContent",
    ai: "alignItems",
    als: "alignSelf",
    f: "flex",
    fb: "flexBasis",
    fd: "flexDirection",
    fg: "flexGrow",
    fs: "flexShrink",
    fw: "flexWrap",
    jc: "justifyContent",
    h: "height",
    m: "margin",
    mb: "marginBottom",
    ml: "marginLeft",
    mr: "marginRight",
    mt: "marginTop",
    mx: "marginHorizontal",
    my: "marginVertical",
    p: "padding",
    pb: "paddingBottom",
    pl: "paddingLeft",
    pr: "paddingRight",
    pt: "paddingTop",
    px: "paddingHorizontal",
    py: "paddingVertical",
    w: "width"
  }
});
var tamagui_config_default = config;

// src/providers/AppProviders.tsx
import { jsx as jsx107 } from "react/jsx-runtime";
var AppProviders = ({ theme = "claro", children }) => /* @__PURE__ */ jsx107(TamaguiProvider, { config: tamagui_config_default, defaultTheme: theme, children: /* @__PURE__ */ jsx107(PortalProvider, { shouldAddRootHost: true, children: /* @__PURE__ */ jsx107(ErrorBoundary, { componentName: "AppProviders", children }) }) });

// src/fonts.ts
var fonts = {
  CeraProRegular: null,
  CeraProMedium: null,
  CeraProBlack: null
};

// src/organisms/AgentAnimationPanel/AgentAnimationPanel.tsx
import { styled as styled78, YStack as YStack82, XStack as XStack52, ScrollView as ScrollView7 } from "tamagui";
import { Activity as Activity4, AlertCircle as AlertCircle9, CheckCircle, Info } from "@tamagui/lucide-icons";
import { jsx as jsx108, jsxs as jsxs91 } from "react/jsx-runtime";
var EventList = styled78(YStack82, {
  gap: "$3",
  padding: "$2"
});
var EventItem = styled78(XStack52, {
  backgroundColor: "$background",
  padding: "$3",
  borderRadius: "$md",
  borderWidth: 1,
  borderColor: "$borderColor",
  alignItems: "center",
  gap: "$3",
  animation: "quick",
  enterStyle: { opacity: 0, y: 10 }
});
var Timestamp = styled78(Typography, {
  fontSize: "$2",
  color: "$mutedForeground",
  minWidth: 50
});
var StatusIcon = ({ type }) => {
  switch (type) {
    case "error":
      return /* @__PURE__ */ jsx108(AlertCircle9, { size: 16, color: "$red10" });
    case "success":
      return /* @__PURE__ */ jsx108(CheckCircle, { size: 16, color: "$green10" });
    case "working":
      return /* @__PURE__ */ jsx108(Activity4, { size: 16, color: "$blue10" });
    case "warning":
      return /* @__PURE__ */ jsx108(AlertCircle9, { size: 16, color: "$yellow10" });
    default:
      return /* @__PURE__ */ jsx108(Info, { size: 16, color: "$gray10" });
  }
};
var AgentAnimationPanel = ({
  agentName,
  agentStatus,
  events
}) => {
  return /* @__PURE__ */ jsxs91(Card, { width: "100%", height: "100%", maxHeight: 600, children: [
    /* @__PURE__ */ jsx108(CardHeader, { children: /* @__PURE__ */ jsxs91(XStack52, { justifyContent: "space-between", alignItems: "center", children: [
      /* @__PURE__ */ jsx108(CardTitle, { children: agentName }),
      /* @__PURE__ */ jsx108(Badge, { variant: agentStatus === "error" ? "destructive" : "default", children: agentStatus.toUpperCase() })
    ] }) }),
    /* @__PURE__ */ jsx108(CardContent, { children: /* @__PURE__ */ jsx108(ScrollView7, { maxHeight: 400, children: events.length === 0 ? /* @__PURE__ */ jsx108(
      Empty,
      {
        title: "Nenhum evento registrado",
        description: "Aguardando atividades do agente..."
      }
    ) : /* @__PURE__ */ jsx108(EventList, { children: events.map((event) => /* @__PURE__ */ jsxs91(EventItem, { children: [
      /* @__PURE__ */ jsx108(StatusIcon, { type: event.type }),
      /* @__PURE__ */ jsxs91(YStack82, { flex: 1, children: [
        /* @__PURE__ */ jsx108(Typography, { children: event.message }),
        /* @__PURE__ */ jsx108(Timestamp, { children: new Date(event.timestamp).toLocaleTimeString() })
      ] })
    ] }, event.id)) }) }) })
  ] });
};

// src/organisms/AgentAnimationModal/AgentAnimationModal.tsx
import { jsx as jsx109 } from "react/jsx-runtime";
var AgentAnimationModal = ({
  open,
  onOpenChange,
  ...panelProps
}) => {
  return /* @__PURE__ */ jsx109(Dialog, { modal: true, open, onOpenChange, children: /* @__PURE__ */ jsx109(DialogContentComposite, { padding: 0, maxWidth: 600, maxHeight: "80vh", children: /* @__PURE__ */ jsx109(AgentAnimationPanel, { ...panelProps }) }) });
};

// src/atoms/StatusLight/StatusLight.tsx
import React84 from "react";
import { styled as styled79, XStack as XStack53, Circle as Circle7, Text as Text64 } from "tamagui";
import { jsx as jsx110, jsxs as jsxs92 } from "react/jsx-runtime";
var StatusLightFrame = styled79(XStack53, {
  name: "StatusLight",
  alignItems: "center",
  gap: "$2",
  variants: {
    variant: {
      neutral: {},
      positive: {},
      notice: {},
      negative: {},
      info: {}
    },
    disabled: {
      true: {
        opacity: 0.5
      }
    }
  },
  defaultVariants: {
    variant: "neutral"
  }
});
var StatusDot = styled79(Circle7, {
  name: "StatusDot",
  size: 8,
  variants: {
    variant: {
      neutral: { backgroundColor: "$gray10" },
      positive: { backgroundColor: "$green10" },
      notice: { backgroundColor: "$yellow10" },
      negative: { backgroundColor: "$red10" },
      info: { backgroundColor: "$blue10" }
    }
  },
  defaultVariants: {
    variant: "neutral"
  }
});
var StatusText2 = styled79(Text64, {
  name: "StatusText",
  color: "$foreground",
  fontSize: "$3",
  fontFamily: "$body"
});
var StatusLight = React84.forwardRef(
  ({ children, variant = "neutral", ...props }, ref) => {
    return /* @__PURE__ */ jsxs92(StatusLightFrame, { ref, variant, ...props, children: [
      /* @__PURE__ */ jsx110(StatusDot, { variant }),
      /* @__PURE__ */ jsx110(StatusText2, { children })
    ] });
  }
);
StatusLight.displayName = "StatusLight";

// src/atoms/Meter/Meter.tsx
import React85 from "react";
import { styled as styled80, XStack as XStack54, YStack as YStack83, Text as Text65, View as View10 } from "tamagui";
import { jsx as jsx111, jsxs as jsxs93 } from "react/jsx-runtime";
var MeterFrame = styled80(YStack83, {
  name: "Meter",
  width: "100%",
  gap: "$2"
});
var MeterHeader = styled80(XStack54, {
  justifyContent: "space-between",
  alignItems: "center"
});
var MeterLabel = styled80(Text65, {
  fontSize: "$3",
  fontWeight: "600",
  color: "$foreground"
});
var MeterValueLabel = styled80(Text65, {
  fontSize: "$3",
  color: "$mutedForeground"
});
var MeterTrack = styled80(View10, {
  height: 8,
  borderRadius: 4,
  backgroundColor: "$gray5",
  overflow: "hidden",
  position: "relative"
});
var MeterFill = styled80(View10, {
  height: "100%",
  borderRadius: 4,
  backgroundColor: "$primary",
  variants: {
    variant: {
      positive: { backgroundColor: "$green10" },
      notice: { backgroundColor: "$yellow10" },
      negative: { backgroundColor: "$red10" },
      info: { backgroundColor: "$blue10" }
    }
  }
});
var Meter = React85.forwardRef(
  ({ value, min = 0, max = 100, label, valueLabel, variant, ...props }, ref) => {
    const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1) * 100;
    return /* @__PURE__ */ jsxs93(MeterFrame, { ref, ...props, children: [
      (label || valueLabel) && /* @__PURE__ */ jsxs93(MeterHeader, { children: [
        label && /* @__PURE__ */ jsx111(MeterLabel, { children: label }),
        valueLabel && /* @__PURE__ */ jsx111(MeterValueLabel, { children: valueLabel })
      ] }),
      /* @__PURE__ */ jsx111(MeterTrack, { children: /* @__PURE__ */ jsx111(MeterFill, { width: `${percentage}%`, variant }) })
    ] });
  }
);
Meter.displayName = "Meter";
export {
  A11yToolbar,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AgentAnimationModal,
  AgentAnimationPanel,
  Alert,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AppProviders,
  AreaChart,
  AspectRatio,
  AuthScreen,
  Autocomplete,
  Avatar,
  AvatarFallback,
  AvatarFrame,
  AvatarGroup,
  AvatarImage,
  Badge,
  BadgeCounter,
  BadgeText,
  BarChart,
  Blockquote,
  BoxPlotChart,
  Breadcrumb,
  BulletChart,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Charts,
  Checkbox,
  ChordDiagram,
  Collapsible,
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
  ColumnChart,
  ComboChart,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ErrorBoundary as ComponentErrorBoundary,
  ContextMenu,
  DataTable,
  DatePicker,
  DecompositionTree,
  Dialog,
  DialogClose,
  DialogContentComposite as DialogContent,
  DialogContentComposite,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DiffViewer,
  DonutChart,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerFrame,
  DrawerHandle,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Field,
  FileUpload,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
  FormRoot,
  FunnelChart,
  GeoMap,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Heading,
  HeatmapChart,
  HoverCard,
  HoverCardAnchor,
  HoverCardClose,
  HoverCardContent,
  HoverCardProfileContent,
  HoverCardTrigger,
  ImageAnnotator,
  IndicatorArrow,
  Input,
  InputGroup,
  Kbd,
  Label,
  LeadText,
  LineChart,
  LocationStatus,
  Map2 as Map,
  MapControls,
  MapMarker,
  MapPopup,
  MarimekkoChart,
  MediaGrid,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Meter,
  MonthsPicker,
  MutedText,
  NativeSelect,
  NavigationMenuComponent as NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NetworkGraph,
  NotificationCard,
  OTPInput,
  PDFPreview,
  PageHeader,
  Pagination,
  Paragraph2 as Paragraph,
  ParallelCoordinates,
  PieChart,
  PolarChart,
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Progress2 as Progress,
  RadarChart,
  RadioGroup2 as RadioGroup,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  RichText,
  RidgelinePlot,
  SankeyDiagram,
  ScannerView,
  ScatterChart,
  SchemaForm,
  ScrollArea,
  SelectRoot as Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectSheet,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  Separator,
  Sheet,
  SheetClose,
  SheetComponent,
  SheetContent,
  SheetContentFrame,
  SheetDescription,
  SheetFooter,
  SheetHandle,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SignaturePad,
  Skeleton,
  Slider,
  SliderFrame,
  SliderRange,
  SliderThumb,
  SliderTrack,
  Spinner,
  StarRating,
  StatusLight,
  Stepper2 as Stepper,
  SunburstChart,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text6 as Text,
  Textarea,
  TimeSeriesChart,
  Timeline,
  TimelineAudit,
  TimelineItem,
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
  TreemapChart,
  Typography,
  TypographyText,
  WaterfallChart,
  tamagui_config_default as config,
  fonts,
  useCollapsibleContext,
  useFormField,
  useMap,
  usePopoverContext,
  useSheetCustomContext,
  useToast,
  withErrorBoundary
};
