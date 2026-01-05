"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  A11yToolbar: () => A11yToolbar,
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  AgentAnimationModal: () => AgentAnimationModal,
  AgentAnimationPanel: () => AgentAnimationPanel,
  Alert: () => Alert,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogFooter: () => AlertDialogFooter,
  AlertDialogHeader: () => AlertDialogHeader,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  AppProviders: () => AppProviders,
  AreaChart: () => AreaChart,
  AspectRatio: () => AspectRatio,
  AuthScreen: () => AuthScreen,
  Autocomplete: () => Autocomplete,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarFrame: () => AvatarFrame,
  AvatarGroup: () => AvatarGroup,
  AvatarImage: () => AvatarImage,
  Badge: () => Badge,
  BadgeCounter: () => BadgeCounter,
  BadgeText: () => BadgeText,
  BarChart: () => BarChart,
  Blockquote: () => Blockquote,
  BoxPlotChart: () => BoxPlotChart,
  Breadcrumb: () => Breadcrumb,
  BulletChart: () => BulletChart,
  Button: () => Button,
  Calendar: () => Calendar,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Carousel: () => Carousel,
  CarouselContent: () => CarouselContent,
  CarouselItem: () => CarouselItem,
  CarouselNext: () => CarouselNext,
  CarouselPrevious: () => CarouselPrevious,
  Charts: () => Charts,
  Checkbox: () => Checkbox,
  ChordDiagram: () => ChordDiagram,
  Collapsible: () => Collapsible,
  CollapsibleContent: () => CollapsibleContent,
  CollapsibleRoot: () => CollapsibleRoot,
  CollapsibleTrigger: () => CollapsibleTrigger,
  ColumnChart: () => ColumnChart,
  ComboChart: () => ComboChart,
  Command: () => Command,
  CommandDialog: () => CommandDialog,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut,
  ComponentErrorBoundary: () => ErrorBoundary,
  ContextMenu: () => ContextMenu,
  DataTable: () => DataTable,
  DatePicker: () => DatePicker,
  DecompositionTree: () => DecompositionTree,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContentComposite,
  DialogContentComposite: () => DialogContentComposite,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DiffViewer: () => DiffViewer,
  DonutChart: () => DonutChart,
  Drawer: () => Drawer,
  DrawerClose: () => DrawerClose,
  DrawerContent: () => DrawerContent,
  DrawerDescription: () => DrawerDescription,
  DrawerFooter: () => DrawerFooter,
  DrawerFrame: () => DrawerFrame,
  DrawerHandle: () => DrawerHandle,
  DrawerHeader: () => DrawerHeader,
  DrawerOverlay: () => DrawerOverlay,
  DrawerPortal: () => DrawerPortal,
  DrawerTitle: () => DrawerTitle,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Field: () => Field,
  FileUpload: () => FileUpload,
  Form: () => Form,
  FormControl: () => FormControl,
  FormDescription: () => FormDescription,
  FormField: () => FormField,
  FormFooter: () => FormFooter,
  FormItem: () => FormItem,
  FormLabel: () => FormLabel,
  FormMessage: () => FormMessage,
  FormRoot: () => FormRoot,
  FunnelChart: () => FunnelChart,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  H5: () => H5,
  H6: () => H6,
  Heading: () => Heading,
  HeatmapChart: () => HeatmapChart,
  HoverCard: () => HoverCard,
  HoverCardContent: () => HoverCardContent,
  HoverCardProfileContent: () => HoverCardProfileContent,
  HoverCardTrigger: () => HoverCardTrigger,
  ImageAnnotator: () => ImageAnnotator,
  IndicatorArrow: () => IndicatorArrow,
  Input: () => Input,
  InputGroup: () => InputGroup,
  Kbd: () => Kbd,
  Label: () => Label,
  LeadText: () => LeadText,
  LineChart: () => LineChart,
  LocationStatus: () => LocationStatus,
  Maps: () => Maps,
  MarimekkoChart: () => MarimekkoChart,
  MediaGrid: () => MediaGrid,
  Menubar: () => Menubar,
  MenubarCheckboxItem: () => MenubarCheckboxItem,
  MenubarContent: () => MenubarContent,
  MenubarGroup: () => MenubarGroup,
  MenubarItem: () => MenubarItem,
  MenubarLabel: () => MenubarLabel,
  MenubarMenu: () => MenubarMenu,
  MenubarPortal: () => MenubarPortal,
  MenubarRadioGroup: () => MenubarRadioGroup,
  MenubarRadioItem: () => MenubarRadioItem,
  MenubarSeparator: () => MenubarSeparator,
  MenubarShortcut: () => MenubarShortcut,
  MenubarSub: () => MenubarSub,
  MenubarSubContent: () => MenubarSubContent,
  MenubarSubTrigger: () => MenubarSubTrigger,
  MenubarTrigger: () => MenubarTrigger,
  Meter: () => Meter,
  MonthsPicker: () => MonthsPicker,
  MutedText: () => MutedText,
  NativeSelect: () => NativeSelect,
  NavigationMenu: () => NavigationMenuComponent,
  NavigationMenuContent: () => NavigationMenuContent,
  NavigationMenuIndicator: () => NavigationMenuIndicator,
  NavigationMenuItem: () => NavigationMenuItem,
  NavigationMenuLink: () => NavigationMenuLink,
  NavigationMenuList: () => NavigationMenuList,
  NavigationMenuTrigger: () => NavigationMenuTrigger,
  NavigationMenuViewport: () => NavigationMenuViewport,
  NetworkGraph: () => NetworkGraph,
  NotificationCard: () => NotificationCard,
  OTPInput: () => OTPInput,
  PDFPreview: () => PDFPreview,
  PageHeader: () => PageHeader,
  Pagination: () => Pagination,
  Paragraph: () => Paragraph2,
  ParallelCoordinates: () => ParallelCoordinates,
  PieChart: () => PieChart,
  PolarChart: () => PolarChart,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverClose: () => PopoverClose,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  Progress: () => Progress2,
  RadarChart: () => RadarChart,
  RadioGroup: () => RadioGroup2,
  ResizableHandle: () => ResizableHandle,
  ResizablePanel: () => ResizablePanel,
  ResizablePanelGroup: () => ResizablePanelGroup,
  RichText: () => RichText,
  RidgelinePlot: () => RidgelinePlot,
  SankeyDiagram: () => SankeyDiagram,
  ScannerView: () => ScannerView,
  ScatterChart: () => ScatterChart,
  SchemaForm: () => SchemaForm,
  ScrollArea: () => ScrollArea,
  Select: () => SelectRoot,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectItemIndicator: () => SelectItemIndicator,
  SelectItemText: () => SelectItemText,
  SelectLabel: () => SelectLabel,
  SelectPortal: () => SelectPortal,
  SelectSheet: () => SelectSheet,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  SelectViewport: () => SelectViewport,
  Separator: () => Separator,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetComponent: () => SheetComponent,
  SheetContent: () => SheetContent,
  SheetContentFrame: () => SheetContentFrame,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHandle: () => SheetHandle,
  SheetHeader: () => SheetHeader,
  SheetOverlay: () => SheetOverlay,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  Sidebar: () => Sidebar,
  SignaturePad: () => SignaturePad,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  SliderFrame: () => SliderFrame,
  SliderRange: () => SliderRange,
  SliderThumb: () => SliderThumb,
  SliderTrack: () => SliderTrack,
  Spinner: () => Spinner,
  StarRating: () => StarRating,
  StatusLight: () => StatusLight,
  Stepper: () => Stepper2,
  SunburstChart: () => SunburstChart,
  Switch: () => Switch,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Text: () => Text6,
  Textarea: () => Textarea,
  TimeSeriesChart: () => TimeSeriesChart,
  Timeline: () => Timeline,
  TimelineAudit: () => TimelineAudit,
  TimelineItem: () => TimelineItem,
  Toast: () => Toast,
  ToastDescription: () => ToastDescription,
  ToastProvider: () => ToastProvider,
  ToastTitle: () => ToastTitle,
  ToastViewport: () => ToastViewport,
  Toggle: () => Toggle,
  ToggleGroup: () => ToggleGroup,
  ToggleGroupItem: () => ToggleGroupItem,
  Tooltip: () => Tooltip,
  TooltipArrow: () => TooltipArrow,
  TooltipContent: () => TooltipContent,
  TooltipTrigger: () => TooltipTrigger,
  TreemapChart: () => TreemapChart,
  Typography: () => Typography,
  TypographyText: () => TypographyText,
  WaterfallChart: () => WaterfallChart,
  config: () => tamagui_config_default,
  fonts: () => fonts,
  useCollapsibleContext: () => useCollapsibleContext,
  useFormField: () => useFormField,
  usePopoverContext: () => usePopoverContext,
  useSheetCustomContext: () => useSheetCustomContext,
  useToast: () => useToast,
  withErrorBoundary: () => withErrorBoundary
});
module.exports = __toCommonJS(index_exports);

// src/atoms/Alert.tsx
var import_react = require("react");
var import_tamagui = require("tamagui");
var import_lucide_icons = require("@tamagui/lucide-icons");
var import_jsx_runtime = require("react/jsx-runtime");
var AlertFrame = (0, import_tamagui.styled)(import_tamagui.XStack, {
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
var AlertTitleFrame = (0, import_tamagui.styled)(import_tamagui.Text, {
  name: "AlertTitle",
  tag: "h5",
  fontWeight: "500",
  fontFamily: "$heading",
  letterSpacing: -0.5,
  color: "$color12"
  // Will inherit color from the parent AlertFrame variant
});
var AlertDescriptionFrame = (0, import_tamagui.styled)(import_tamagui.Text, {
  name: "AlertDescription",
  tag: "div",
  fontSize: "$3",
  fontFamily: "$body",
  color: "$color11"
  // Will inherit color from the parent AlertFrame variant
});
var AlertCloseButton = (0, import_tamagui.styled)(import_tamagui.XStack, {
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
var AlertRoot = (0, import_react.forwardRef)(
  ({ variant = "default", icon, isDismissible, onDismiss, children, ...props }, ref) => {
    const childrenWithProps = import_react.Children.map(children, (child) => {
      if ((0, import_react.isValidElement)(child)) {
        return (0, import_react.cloneElement)(child, { variant });
      }
      return child;
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertFrame, { ref, variant, role: "alert", ...props, children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YStack, { flex: 1, gap: "$1.5", children: childrenWithProps }),
      isDismissible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        AlertCloseButton,
        {
          variant,
          "aria-label": "Fechar",
          onPress: () => onDismiss?.(),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_icons.X, { size: 16 })
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
var import_tamagui3 = require("tamagui");
var import_react2 = require("react");

// src/atoms/Skeleton.tsx
var import_tamagui2 = require("tamagui");
var import_jsx_runtime2 = require("react/jsx-runtime");
var SkeletonFrame = (0, import_tamagui2.styled)(import_tamagui2.YStack, {
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
var Skeleton = SkeletonFrame.styleable((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SkeletonFrame, { ...props, ref, "aria-hidden": true, "data-testid": "skeleton" }));

// src/atoms/AspectRatio.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var AspectRatioFrame = (0, import_tamagui3.styled)(import_tamagui3.Stack, {
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
var AspectRatio = (0, import_react2.forwardRef)(
  ({ ratio, variant = "square", loading, children, ...props }, ref) => {
    const { animationName, animationDuration, ...safeProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      AspectRatioFrame,
      {
        ref,
        variant,
        aspectRatio: ratio,
        ...safeProps,
        children: loading ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Skeleton, { width: "100%", height: "100%", "data-testid": "skeleton-loader" }) : children
      }
    );
  }
);
AspectRatio.displayName = "AspectRatio";

// src/atoms/Avatar.tsx
var import_react3 = __toESM(require("react"));
var import_tamagui4 = require("tamagui");
var import_jsx_runtime4 = require("react/jsx-runtime");
var stringToColor = (str) => {
  if (!str) return "#ccc";
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  return `hsl(${h}, 70%, 80%)`;
};
var AvatarFrame = (0, import_tamagui4.styled)(import_tamagui4.Avatar, {
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
var AvatarImageComponent = import_react3.default.forwardRef(
  ({ accessibilityLabel, src, ...props }, ref) => {
    const [isLoading, setIsLoading] = (0, import_react3.useState)(true);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      isLoading && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Skeleton, { circular: true, width: "100%", height: "100%" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_tamagui4.Avatar.Image,
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
var AvatarFallbackView = (0, import_tamagui4.styled)(import_tamagui4.Avatar.Fallback, {
  name: "AvatarFallback",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background"
});
var AvatarIndicatorFrame = (0, import_tamagui4.styled)("div", {
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
var AvatarRoot = import_react3.default.forwardRef(
  ({ src, fallback, accessibilityLabel, children, ...props }, ref) => {
    if (children) {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AvatarFrame, { ref, ...props, "aria-label": accessibilityLabel, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(AvatarFrame, { ref, ...props, "aria-label": accessibilityLabel, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AvatarImageComponent, { src, accessibilityLabel }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AvatarFallbackView, { children: typeof fallback === "string" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_tamagui4.Text, { children: fallback }) : fallback })
    ] });
  }
);
AvatarRoot.displayName = "Avatar";
var AvatarFallbackText = ({ children }) => {
  const backgroundColor = stringToColor(typeof children === "string" ? children : "");
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AvatarFallbackView, { style: { backgroundColor }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_tamagui4.Text, { children }) });
};
var Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImageComponent,
  Fallback: AvatarFallbackText,
  Indicator: AvatarIndicatorFrame
});

// src/molecules/Accordion.tsx
var import_tamagui5 = require("tamagui");
var import_react4 = __toESM(require("react"));
var import_lucide_icons2 = require("@tamagui/lucide-icons");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Accordion = (0, import_tamagui5.styled)(import_tamagui5.Accordion, {
  name: "Accordion",
  width: "100%",
  backgroundColor: "$background"
});
var AccordionItemFrame = (0, import_tamagui5.styled)(import_tamagui5.Accordion.Item, {
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
var AccordionHeaderFrame = (0, import_tamagui5.styled)(import_tamagui5.Accordion.Header, {
  name: "AccordionHeader",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  gap: "$3"
});
var AccordionTriggerFrame = (0, import_tamagui5.styled)(import_tamagui5.Accordion.Trigger, {
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
var AccordionContentFrame = (0, import_tamagui5.styled)(import_tamagui5.Accordion.Content, {
  name: "AccordionContent",
  overflow: "hidden",
  paddingBottom: "$4",
  animation: "quick",
  enterStyle: { opacity: 0, height: 0 },
  exitStyle: { opacity: 0, height: 0 }
});
var AccordionItem = import_react4.default.forwardRef(({ children, isLoading, hasError, ...props }, ref) => {
  const childrenWithProps = import_react4.default.Children.map(children, (child) => {
    if (import_react4.default.isValidElement(child)) {
      const type = child.type;
      if (type && type.displayName === "AccordionContent") {
        return import_react4.default.cloneElement(child, { isLoading });
      }
    }
    return child;
  });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(AccordionItemFrame, { ref, hasError, ...props, "data-testid": "accordion-item", children: childrenWithProps });
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react4.default.forwardRef(({ children, rightSlot, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(AccordionHeaderFrame, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(AccordionTriggerFrame, { ref, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_tamagui5.Paragraph, { flex: 1, fontWeight: "500", fontSize: "$3", ellipse: true, children }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_tamagui5.Square, { animation: "quick", rotate: "0deg", "$group-trigger-expanded": { rotate: "180deg" }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_icons2.ChevronDown, { size: 16 }) })
    ] }),
    rightSlot
  ] });
});
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = import_react4.default.forwardRef(({ children, isLoading, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(AccordionContentFrame, { ref, ...props, children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_tamagui5.YStack, { gap: "$2", py: "$2", "data-testid": "skeleton-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Skeleton, { height: "$2", width: "90%" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Skeleton, { height: "$2", width: "70%" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Skeleton, { height: "$2", width: "80%" })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_tamagui5.Paragraph, { fontSize: "$3", color: "$mutedForeground", children }) });
});
AccordionContent.displayName = "AccordionContent";

// src/molecules/AlertDialog/AlertDialog.tsx
var import_react6 = __toESM(require("react"));
var import_tamagui8 = require("tamagui");

// src/atoms/Button/Button.tsx
var import_react5 = __toESM(require("react"));
var import_tamagui7 = require("tamagui");

// src/atoms/Spinner/Spinner.tsx
var import_tamagui6 = require("tamagui");
var import_jsx_runtime6 = require("react/jsx-runtime");
var StyledSpinner = (0, import_tamagui6.styled)(import_tamagui6.Spinner, {
  name: "Spinner",
  color: "$primary"
});
var Spinner = ({ "aria-label": ariaLabel = "Carregando...", ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StyledSpinner, { "aria-label": ariaLabel, ...props });
};

// src/atoms/Button/Button.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var StyledButton = (0, import_tamagui7.styled)(import_tamagui7.Button, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_tamagui7.Text, { children: child });
  }
  return child;
};
var Button = import_react5.default.forwardRef(
  ({ variant = "default", size = "default", children, leftIcon, rightIcon, loading, asChild, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      StyledButton,
      {
        ref,
        variant,
        size,
        disabled: loading || props.disabled,
        ...props,
        asChild,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_tamagui7.View, { style: { flexDirection: "row", alignItems: "center", opacity: loading ? 0 : 1, gap: 8 }, children: [
            leftIcon,
            import_react5.default.Children.map(children, renderChildren),
            rightIcon
          ] }),
          loading && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_tamagui7.View, { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Spinner, { color: "$current", size: "small" }) })
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/molecules/AlertDialog/AlertDialog.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var AlertDialogOverlay = (0, import_tamagui8.styled)(import_tamagui8.AlertDialog.Overlay, {
  name: "AlertDialogOverlay",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  animation: "quick",
  opacity: 1,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 }
});
var AlertDialogContent = (0, import_tamagui8.styled)(import_tamagui8.AlertDialog.Content, {
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
var AlertDialogHeader = (0, import_tamagui8.styled)(import_tamagui8.YStack, {
  name: "AlertDialogHeader",
  flexDirection: "column",
  marginBottom: "$md",
  gap: "$sm"
});
var AlertDialogTitle = (0, import_tamagui8.styled)(import_tamagui8.AlertDialog.Title, {
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
var AlertDialogDescription = (0, import_tamagui8.styled)(import_tamagui8.AlertDialog.Description, {
  name: "AlertDialogDescription",
  fontSize: "$3",
  color: "$mutedForeground",
  lineHeight: "$4"
});
var AlertDialogFooter = (0, import_tamagui8.styled)(import_tamagui8.XStack, {
  name: "AlertDialogFooter",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "$3",
  marginTop: "$md"
});
var AlertDialogAction = import_tamagui8.AlertDialog.Action;
var AlertDialogCancel = import_tamagui8.AlertDialog.Cancel;
var AlertDialogTrigger = import_tamagui8.AlertDialog.Trigger;
var AlertDialogPortal = import_tamagui8.AlertDialog.Portal;
var AlertDialogContentComposite = import_react6.default.forwardRef(({ hasError, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(AlertDialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AlertDialogOverlay, {}, "overlay"),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AlertDialogContent, { ref, error: hasError, ...props }, "content")
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_tamagui8.AlertDialog, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_tamagui8.AlertDialog.Trigger, { asChild: true, children: trigger }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(AlertDialogContentComposite, { hasError, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(AlertDialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AlertDialogTitle, { error: hasError, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AlertDialogDescription, { children: description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AlertDialogFooter, { children: actions || /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AlertDialogCancel, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "outline", onPress: onCancel, disabled: isLoading || isDisabled, children: cancelText }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AlertDialogAction, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          Button,
          {
            variant: hasError ? "destructive" : "default",
            onPress: onAction,
            disabled: isLoading || isDisabled,
            icon: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_tamagui8.Spinner, {}) : void 0,
            children: isLoading ? "Processando..." : actionText
          }
        ) })
      ] }) })
    ] })
  ] });
};

// src/atoms/Badge.tsx
var import_react7 = require("react");
var import_tamagui9 = require("tamagui");
var import_core = require("@tamagui/core");
var import_jsx_runtime9 = require("react/jsx-runtime");
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
var BadgeFrame = (0, import_tamagui9.styled)(import_tamagui9.View, {
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
var BadgeText = (0, import_tamagui9.styled)(import_tamagui9.Text, {
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
var Badge = (0, import_react7.forwardRef)(
  ({ children, asChild, variant = "default", size = "md", leftIcon, rightIcon, ...props }, ref) => {
    const Component2 = asChild ? import_core.Slot : BadgeFrame;
    const renderIcon = (icon) => {
      if (!icon) return null;
      return (0, import_react7.cloneElement)(icon, {
        size: 12
        // Consistent icon size
      });
    };
    if (asChild) {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Component2, { ...props, variant, size, ref, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Component2, { ...props, variant, size, ref, children: [
      renderIcon(leftIcon),
      typeof children === "string" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BadgeText, { variant, size, children }) : children,
      renderIcon(rightIcon)
    ] });
  }
);
Badge.displayName = "Badge";

// src/atoms/Input/Input.tsx
var import_lucide_icons3 = require("@tamagui/lucide-icons");
var import_react8 = __toESM(require("react"));
var import_tamagui10 = require("tamagui");
var import_jsx_runtime10 = require("react/jsx-runtime");
var InputContext = import_react8.default.createContext(null);
var useInputContext = () => {
  return (0, import_react8.useContext)(InputContext);
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
var StyledInput = (0, import_tamagui10.styled)(import_tamagui10.Input, {
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
var InputFrame = (0, import_tamagui10.styled)(import_tamagui10.XStack, {
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
var SimpleInputFrame = (0, import_tamagui10.styled)(import_tamagui10.XStack, {
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
var UnframedInputStyled = (0, import_tamagui10.styled)(import_tamagui10.Input, {
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
var InputField = import_react8.default.forwardRef((props, ref) => {
  const context = useInputContext();
  const size = props.size || context?.size || "default";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(UnframedInputStyled, { ref, size, ...props });
});
InputField.displayName = "Input.Field";
var InputIcon = (0, import_tamagui10.styled)(import_tamagui10.View, {
  name: "InputIcon",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  paddingHorizontal: "$2"
});
var InputButton = (0, import_tamagui10.styled)(Button, {
  name: "InputButton",
  borderRadius: 0,
  height: "100%",
  borderWidth: 0
});
var InputHint = (0, import_tamagui10.styled)(import_tamagui10.Text, {
  name: "InputHint",
  fontSize: "$2",
  color: "$mutedForeground",
  marginTop: "$2"
});
var InputBox = import_react8.default.forwardRef(
  ({ variant = "default", size = "default", loading = false, state, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(InputContext.Provider, { value: { size, loading }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(InputFrame, { ref, variant, size, loading, state, ...props, children: [
      children,
      loading && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(InputIcon, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Spinner, {}) })
    ] }) });
  }
);
InputBox.displayName = "Input.Box";
var InputMain = import_react8.default.forwardRef(
  ({ variant = "default", size = "default", loading = false, state, children, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = (0, import_react8.useState)(false);
    const isPassword = props.type === "password";
    if (children) {
      if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
        console.warn("Input: Passing 'children' to <Input /> is deprecated. Use <Input.Box> for composite inputs.");
      }
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(InputBox, { ref, variant, size, loading, state, ...props, children });
    }
    const { value, defaultValue: defaultValue2, ...restProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      SimpleInputFrame,
      {
        ref,
        variant,
        size,
        loading,
        state,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
          loading && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(InputIcon, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Spinner, {}) }),
          isPassword && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(InputIcon, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Button,
            {
              icon: isPasswordVisible ? import_lucide_icons3.EyeOff : import_lucide_icons3.Eye,
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
var import_tamagui11 = require("tamagui");
var import_react9 = __toESM(require("react"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var LabelFrame = (0, import_tamagui11.styled)(import_tamagui11.Label, {
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
var Label = import_react9.default.forwardRef(
  ({ children, required, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(LabelFrame, { ref, ...props, children: [
      children,
      required && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_tamagui11.SizableText, { color: "$red10", ml: "$1", "aria-hidden": "true", children: "*" })
    ] });
  }
);

// src/atoms/Switch.tsx
var import_react10 = __toESM(require("react"));
var import_tamagui12 = require("tamagui");
var import_jsx_runtime12 = require("react/jsx-runtime");
var SwitchFrame = (0, import_tamagui12.styled)(import_tamagui12.Switch, {
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
var SwitchThumb = (0, import_tamagui12.styled)(import_tamagui12.Switch.Thumb, {
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
var SwitchComponent = import_react10.default.forwardRef(({ loading = false, disabled, size, ...props }, ref) => {
  const isDisabled = loading || disabled;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    SwitchFrame,
    {
      ref,
      role: "switch",
      "aria-checked": props.checked,
      disabled: isDisabled,
      size,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SwitchThumb, { size }),
        loading && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_tamagui12.Spinner,
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
var import_tamagui13 = require("tamagui");
var import_react11 = __toESM(require("react"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var SliderFrame = (0, import_tamagui13.styled)(import_tamagui13.Slider, {
  name: "Slider",
  defaultValue: [0],
  max: 100,
  step: 1,
  orientation: "horizontal",
  height: 20,
  // Container height
  justifyContent: "center"
});
var SliderTrack = (0, import_tamagui13.styled)(import_tamagui13.Slider.Track, {
  name: "SliderTrack",
  backgroundColor: "$secondary",
  height: 8,
  // h-2
  borderRadius: "$10"
  // rounded-full
});
var SliderRange = (0, import_tamagui13.styled)(import_tamagui13.Slider.TrackActive, {
  name: "SliderRange",
  backgroundColor: "$primary",
  borderRadius: "$10"
});
var SliderThumb = (0, import_tamagui13.styled)(import_tamagui13.Slider.Thumb, {
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
var Slider = import_react11.default.forwardRef(({
  "aria-label": ariaLabel = "Deslizante",
  disabled = false,
  loading = false,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(SliderFrame, { ref, ...props, disabled: disabled || loading, "aria-label": ariaLabel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SliderTrack, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SliderRange, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SliderThumb, { "aria-label": ariaLabel, children: loading && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_tamagui13.Spinner, { size: "small", color: "$primary" }) })
  ] });
});
Slider.displayName = "Slider";

// src/atoms/Typography.tsx
var import_react12 = __toESM(require("react"));
var import_tamagui14 = require("tamagui");

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
var React12 = __toESM(require("react"), 1);

// ../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React11 = __toESM(require("react"), 1);
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
var import_jsx_runtime14 = require("react/jsx-runtime");
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
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React12.isValidElement(newElement) ? React12.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
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
var import_jsx_runtime15 = require("react/jsx-runtime");
var Typography = import_react12.default.forwardRef(({ leftIcon, rightIcon, loading, children, variant, asChild, ...props }, ref) => {
  const components = {
    h1: import_tamagui14.H1,
    h2: import_tamagui14.H2,
    h3: import_tamagui14.H3,
    h4: import_tamagui14.H4,
    h5: import_tamagui14.H5,
    h6: import_tamagui14.H6,
    p: import_tamagui14.Text,
    span: import_tamagui14.Text
  };
  const Component2 = asChild ? Slot2 : components[variant] || import_tamagui14.Text;
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Skeleton, { width: "100%", height: props.fontSize || 16 });
  }
  const { defaultProps, uppercase, ...safeProps } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Component2, { ref, ...safeProps, style: { display: "flex", alignItems: "center", gap: "0.5rem", ...props.style }, children: [
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
var H1 = (0, import_tamagui14.styled)(Typography, {
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
var H2 = (0, import_tamagui14.styled)(Typography, {
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
var H3 = (0, import_tamagui14.styled)(Typography, {
  ...commonStyles,
  fontFamily: "$heading",
  fontWeight: "500",
  color: "$color",
  defaultProps: {
    variant: "h3"
  }
});
var H4 = (0, import_tamagui14.styled)(Typography, {
  ...commonStyles,
  fontFamily: "$heading",
  fontWeight: "500",
  color: "$color",
  defaultProps: {
    variant: "h4"
  }
});
var H5 = (0, import_tamagui14.styled)(Typography, {
  ...commonStyles,
  fontFamily: "$heading",
  fontWeight: "500",
  color: "$color",
  defaultProps: {
    variant: "h5"
  }
});
var H6 = (0, import_tamagui14.styled)(Typography, {
  ...commonStyles,
  fontFamily: "$heading",
  fontWeight: "500",
  color: "$color",
  defaultProps: {
    variant: "h6"
  }
});
var Text6 = (0, import_tamagui14.styled)(Typography, {
  ...commonStyles,
  fontFamily: "$body",
  fontWeight: "400",
  color: "$color",
  defaultProps: {
    variant: "span"
  }
});
var Paragraph2 = (0, import_tamagui14.styled)(Typography, {
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
var MutedText = (0, import_tamagui14.styled)(Text6, {
  color: "$mutedForeground"
});
var LeadText = (0, import_tamagui14.styled)(Text6, {
  fontSize: "$5",
  fontWeight: "300"
});
var Blockquote = (0, import_tamagui14.styled)(Text6, {
  tag: "blockquote",
  borderLeftWidth: 2,
  borderLeftColor: "$borderColor",
  paddingLeft: "$4",
  fontStyle: "italic",
  margin: 0
});

// src/atoms/Progress/Progress.tsx
var import_tamagui15 = require("tamagui");

// ../../node_modules/@tamagui/progress/dist/esm/Progress.mjs
var import_core5 = require("@tamagui/core");

// ../../node_modules/@tamagui/create-context/dist/esm/create-context.mjs
var React14 = __toESM(require("react"), 1);
var import_jsx_runtime16 = require("react/jsx-runtime");
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
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Context.Provider, {
        value,
        children
      });
    }
    function useContext16(consumerName, scope, options) {
      const Context = scope?.[scopeName]?.[index] || BaseContext, context = React14.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      const missingContextMessage = `\`${consumerName}\` must be used within \`${rootComponentName}\``;
      if (options?.fallback) return options?.warn !== false && console.warn(missingContextMessage), options.fallback;
      throw new Error(missingContextMessage);
    }
    return [Provider, useContext16];
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
var import_react13 = require("react");

// ../../node_modules/@tamagui/constants/dist/esm/constants.mjs
var import_react14 = __toESM(require("react"), 1);
var IS_REACT_19 = typeof import_react14.default.use < "u";
var isWeb = true;
var isWindowDefined = typeof window < "u";
var isServer = isWeb && !isWindowDefined;
var isClient = isWeb && isWindowDefined;
var useIsomorphicLayoutEffect = isServer ? import_react14.useEffect : import_react14.useLayoutEffect;
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
var import_react15 = __toESM(require("react"), 1);
var Decorated = /* @__PURE__ */ Symbol();
var withStaticProperties2 = (component, staticProps) => {
  const next = (() => {
    if (component[Decorated]) {
      const _ = import_react15.default.forwardRef((props, ref) => import_react15.default.createElement(component, {
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
var React17 = __toESM(require("react"), 1);

// ../../node_modules/@tamagui/use-did-finish-ssr/dist/esm/ClientOnly.mjs
var import_react16 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var ClientOnlyContext = (0, import_react16.createContext)(false);

// ../../node_modules/@tamagui/use-event/dist/esm/useGet.mjs
var React18 = __toESM(require("react"), 1);
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
var import_core3 = require("@tamagui/core");

// ../../node_modules/@tamagui/stacks/dist/esm/getElevation.mjs
var import_core2 = require("@tamagui/core");
var getElevation = (size, extras) => {
  if (!size) return;
  const {
    tokens: tokens2
  } = extras, token = tokens2.size[size], sizeNum = (0, import_core2.isVariable)(token) ? +token.val : size;
  return getSizedElevation(sizeNum, extras);
};
var getSizedElevation = (val, {
  theme,
  tokens: tokens2
}) => {
  let num = 0;
  if (val === true) {
    const val2 = (0, import_core2.getVariableValue)(tokens2.size.true);
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
    ...import_core2.isAndroid ? {
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
var YStack5 = (0, import_core3.styled)(import_core3.View, {
  flexDirection: "column",
  variants
});
YStack5.displayName = "YStack";
var XStack5 = (0, import_core3.styled)(import_core3.View, {
  flexDirection: "row",
  variants
});
XStack5.displayName = "XStack";
var ZStack = (0, import_core3.styled)(YStack5, {
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
var import_core4 = require("@tamagui/core");
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
var ThemeableStack = (0, import_core4.styled)(YStack5, {
  variants: themeableVariants
});

// ../../node_modules/@tamagui/progress/dist/esm/Progress.mjs
var React19 = __toESM(require("react"), 1);
var import_jsx_runtime18 = require("react/jsx-runtime");
var PROGRESS_NAME = "Progress";
var [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicatorFrame = (0, import_core5.styled)(ThemeableStack, {
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ProgressIndicatorFrame, {
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
var ProgressFrame = (0, import_core5.styled)(ThemeableStack, {
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
        const size = Math.round((0, import_core5.getVariableValue)(getSize(val)) * 0.25);
        return {
          height: size,
          minWidth: (0, import_core5.getVariableValue)(size) * 20,
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
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ProgressProvider, {
    scope: __scopeProgress,
    value,
    max,
    width,
    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ProgressFrame, {
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
var import_react17 = __toESM(require("react"));
var import_jsx_runtime19 = require("react/jsx-runtime");
var ProgressIndicatorFrame2 = (0, import_tamagui15.styled)(ProgressIndicator, {
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
var ProgressFrame2 = (0, import_tamagui15.styled)(Progress, {
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
var ProgressLabel = (0, import_tamagui15.styled)(import_tamagui15.Text, {
  name: "ProgressLabel",
  color: "$color",
  fontSize: "$3",
  fontWeight: "$body"
  // Ensure readable weight
});
var ProgressComponent = import_react17.default.forwardRef(
  ({ value, showValue, label, status, size, children, ...props }, ref) => {
    if (children) {
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ProgressFrame2, { ref, value, size, ...props, children });
    }
    let content = /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ProgressFrame2, { ref, value, size, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ProgressIndicatorFrame2, { status, animation: "bouncy" }) });
    if (showValue) {
      content = /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_tamagui15.XStack, { alignItems: "center", gap: "$3", width: "100%", children: [
        content,
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
          import_tamagui15.Text,
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
      content = /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_tamagui15.YStack, { width: "100%", gap: "$2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ProgressLabel, { children: label }),
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
var import_tamagui16 = require("tamagui");
var SeparatorFrame = (0, import_tamagui16.styled)(import_tamagui16.Separator, {
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
var import_tamagui17 = require("tamagui");
var import_react18 = __toESM(require("react"));
var import_jsx_runtime20 = require("react/jsx-runtime");
var ToggleFrame = (0, import_tamagui17.styled)(import_tamagui17.Button, {
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
var Toggle = import_react18.default.forwardRef(
  (props, ref) => {
    const { pressed, onPressedChange, onPress, leftIcon, rightIcon, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
var import_tamagui18 = require("tamagui");
var import_react19 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var ScrollAreaFrame = (0, import_tamagui18.styled)(import_tamagui18.ScrollView, {
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
var ScrollArea = (0, import_react19.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ScrollAreaFrame, { ...props, ref });
});
ScrollArea.displayName = "ScrollArea";

// src/atoms/Textarea/Textarea.tsx
var import_react21 = __toESM(require("react"));
var import_tamagui19 = require("tamagui");

// src/utils/withErrorLogging.tsx
var import_react20 = __toESM(require("react"));

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
var import_jsx_runtime22 = require("react/jsx-runtime");
function withErrorLogging(componentName, Component2) {
  const Wrapped = import_react20.default.forwardRef((props, ref) => {
    try {
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Component2, { ...props, ref });
    } catch (error) {
      logComponentError(componentName, error);
      throw error;
    }
  });
  Wrapped.displayName = componentName;
  return Wrapped;
}

// src/atoms/Textarea/Textarea.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var StyledTextarea = (0, import_tamagui19.styled)(import_tamagui19.TextArea, {
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
var TextareaImpl = import_react21.default.forwardRef(
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
    const id = import_react21.default.useId();
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_tamagui19.YStack, { width: "100%", space: "$2", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Label, { htmlFor: id, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
        import_tamagui19.XStack,
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
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
            loading ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Spinner, {}) : rightIcon
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
var import_react23 = __toESM(require("react"));
var import_tamagui20 = require("tamagui");
var import_lucide_icons4 = require("@tamagui/lucide-icons");

// ../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.mjs
var React24 = __toESM(require("react"), 1);

// ../../node_modules/@tamagui/start-transition/dist/esm/index.mjs
var import_react22 = require("react");
var startTransition = (callback) => {
  (0, import_react22.startTransition)(callback);
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
var import_jsx_runtime24 = require("react/jsx-runtime");
var StyledCheckbox = (0, import_tamagui20.styled)(import_tamagui20.Checkbox, {
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
var StyledIndicator = (0, import_tamagui20.styled)(import_tamagui20.Checkbox.Indicator, {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%"
});
var CheckboxImpl = import_react23.default.forwardRef(
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
    const realId = id || import_react23.default.useId();
    const errorId = errorMessage ? `${realId}-error` : void 0;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked || false,
      onChange: onCheckedChange,
      strategy: "prop-wins"
    });
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_tamagui20.YStack, { space: "$1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_tamagui20.XStack, { alignItems: "center", space: "$2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(StyledIndicator, { children: checked === "indeterminate" ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_icons4.Minus, { size: 16, color: "$background" }) : checked ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_icons4.Check, { size: 16, color: "$background" }) : null })
          }
        ),
        label && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_tamagui20.Label, { htmlFor: realId, disabled, children: label })
      ] }),
      errorMessage && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_tamagui20.Text, { id: errorId, color: "$red10", fontSize: "$2", pl: "$1", role: "alert", children: errorMessage })
    ] });
  }
);
CheckboxImpl.displayName = "Checkbox";
var Checkbox = withErrorLogging(
  "Checkbox",
  CheckboxImpl
);

// src/atoms/Kbd/Kbd.tsx
var import_react24 = __toESM(require("react"));
var import_tamagui21 = require("tamagui");
var import_jsx_runtime25 = require("react/jsx-runtime");
var StyledKbd = (0, import_tamagui21.styled)(import_tamagui21.XStack, {
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
var KbdText = (0, import_tamagui21.styled)(import_tamagui21.Text, {
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
var Kbd = import_react24.default.forwardRef(
  ({
    size = "default",
    variant = "default",
    asChild = false,
    iconBefore,
    iconAfter,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? import_tamagui21.Slot : StyledKbd;
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Comp, { ref, size, variant, ...props, tag: "kbd", children: [
      iconBefore,
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(KbdText, { size, children }),
      iconAfter
    ] });
  }
);
Kbd.displayName = "Kbd";

// src/molecules/Card/Card.tsx
var import_tamagui22 = require("tamagui");
var import_react25 = __toESM(require("react"));
var import_jsx_runtime26 = require("react/jsx-runtime");
var CardFrame = (0, import_tamagui22.styled)(import_tamagui22.YStack, {
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
var CardHeader = (0, import_tamagui22.styled)(import_tamagui22.YStack, {
  name: "CardHeader",
  gap: "$1.5"
});
var CardTitle = (0, import_tamagui22.styled)(import_tamagui22.Text, {
  name: "CardTitle",
  fontSize: "$6",
  fontWeight: "600",
  color: "$foreground",
  ellipse: true
});
var CardDescription = (0, import_tamagui22.styled)(import_tamagui22.Text, {
  name: "CardDescription",
  fontSize: "$3",
  color: "$mutedForeground",
  lineHeight: "$3"
});
var CardContent = (0, import_tamagui22.styled)(import_tamagui22.YStack, {
  name: "CardContent",
  gap: "$4"
});
var CardFooter = (0, import_tamagui22.styled)(import_tamagui22.XStack, {
  name: "CardFooter",
  borderTopWidth: 1,
  borderTopColor: "$borderColor",
  pt: "$4",
  gap: "$3",
  justifyContent: "flex-end",
  alignItems: "center"
});
var Card = import_react25.default.forwardRef(({
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
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(CardFrame, { ...cardProps, p: 0, overflow: "hidden", children: [
      data.heroImage && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        import_tamagui22.Image,
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
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_tamagui22.YStack, { p: "$lg", gap: "$4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(CardHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(CardTitle, { children: data.title }),
          data.description && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(CardDescription, { children: data.description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(CardContent, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_tamagui22.YStack, { gap: "$2", f: 1, p: "$1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Skeleton, { h: "$4", w: "75%" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Skeleton, { h: "$2.5", w: "100%" }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Skeleton, { h: "$2.5", w: "90%" })
        ] }) : data.content }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(CardFooter, { children: actions })
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(CardFrame, { ...cardProps, children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_tamagui22.YStack, { gap: "$2", f: 1, p: "$1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Skeleton, { h: "$4", w: "75%" }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Skeleton, { h: "$2.5", w: "100%" }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Skeleton, { h: "$2.5", w: "90%" })
  ] }) : children });
});
Card.displayName = "Card";

// src/molecules/Collapsible.tsx
var CollapsiblePrimitive = __toESM(require("@radix-ui/react-collapsible"));
var import_lucide_icons5 = require("@tamagui/lucide-icons");
var import_react26 = __toESM(require("react"));
var import_tamagui23 = require("tamagui");
var import_jsx_runtime27 = require("react/jsx-runtime");
var CollapsibleContext = import_react26.default.createContext({ open: false });
var useCollapsibleContext = () => (0, import_react26.useContext)(CollapsibleContext);
var CollapsibleRoot = (0, import_tamagui23.styled)(CollapsiblePrimitive.Root, {
  name: "Collapsible",
  width: "100%"
});
var CollapsibleTrigger = (0, import_tamagui23.styled)(import_tamagui23.XStack, {
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
var CollapsibleContent = (0, import_tamagui23.styled)(CollapsiblePrimitive.Content, {
  name: "CollapsibleContent",
  overflow: "hidden",
  paddingTop: "$4"
  // animation: 'quick',
  // enterStyle: { opacity: 0, height: 0 },
  // exitStyle: { opacity: 0, height: 0 },
});
var Collapsible = import_react26.default.forwardRef(
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
    const [openState, setOpenState] = (0, import_react26.useState)(defaultOpen || false);
    const open = openProp !== void 0 ? openProp : openState;
    const handleOpenChange = (newOpen) => {
      if (openProp === void 0) {
        setOpenState(newOpen);
      }
      onOpenChange?.(newOpen);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CollapsibleContext.Provider, { value: { open }, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      CollapsibleRoot,
      {
        ...props,
        ref,
        open,
        onOpenChange: handleOpenChange,
        defaultOpen,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CollapsiblePrimitive.Trigger, { asChild: true, disabled: isDisabled || isLoading, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
            CollapsibleTrigger,
            {
              hasError,
              disabled: isDisabled || isLoading,
              "data-has-error": hasError,
              "aria-invalid": hasError,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_tamagui23.Text, { fontSize: "$4", fontWeight: "bold", ellipse: true, children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_tamagui23.XStack, { gap: "$2", alignItems: "center", flexShrink: 0, children: [
                  rightSlot,
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_tamagui23.Button, { size: "$3", chromeless: true, icon: import_lucide_icons5.ChevronDown })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CollapsibleContent, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_tamagui23.YStack, { space: "$2", "data-testid": "skeleton-container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Skeleton, { height: 40 }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Skeleton, { height: 40 })
          ] }) : children })
        ]
      }
    ) });
  }
);

// src/molecules/Dialog/Dialog.tsx
var import_lucide_icons6 = require("@tamagui/lucide-icons");
var import_react27 = __toESM(require("react"));
var import_tamagui24 = require("tamagui");
var import_jsx_runtime28 = require("react/jsx-runtime");
var DialogOverlay = (0, import_tamagui24.styled)(import_tamagui24.Dialog.Overlay, {
  name: "DialogOverlay",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  animation: "quick",
  opacity: 1,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 }
});
var DialogContent = (0, import_tamagui24.styled)(import_tamagui24.Dialog.Content, {
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
var DialogHeader = (0, import_tamagui24.styled)(import_tamagui24.YStack, {
  name: "DialogHeader",
  marginBottom: "$md",
  gap: "$sm"
});
var DialogTitle = (0, import_tamagui24.styled)(import_tamagui24.Dialog.Title, {
  name: "DialogTitle",
  fontSize: "$6",
  fontWeight: "600",
  color: "$foreground",
  ellipse: true
});
var DialogDescription = (0, import_tamagui24.styled)(import_tamagui24.Dialog.Description, {
  name: "DialogDescription",
  fontSize: "$3",
  color: "$mutedForeground",
  lineHeight: "$4"
});
var DialogFooterComponent = import_react27.default.forwardRef(
  ({ actions, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_tamagui24.XStack, { ...props, ref, children: actions ?? children })
);
var DialogFooter = (0, import_tamagui24.styled)(DialogFooterComponent, {
  name: "DialogFooter",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "$3",
  marginTop: "$md"
});
var Dialog = import_tamagui24.Dialog;
var DialogTrigger = import_tamagui24.Dialog.Trigger;
var DialogPortal = import_tamagui24.Dialog.Portal;
var DialogClose = import_tamagui24.Dialog.Close;
var DialogContentComposite = import_react27.default.forwardRef(({ children, isLoading = false, hasError = false, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(DialogOverlay, {}, "overlay"),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(DialogContent, { ref, hasError, ...props, children: [
      isLoading ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Skeleton, { height: 250 }) : children,
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_tamagui24.Unspaced, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_tamagui24.Dialog.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        import_tamagui24.Button,
        {
          "aria-label": "Fechar",
          position: "absolute",
          top: "$3",
          right: "$3",
          size: "$2",
          circular: true,
          icon: import_lucide_icons6.X,
          backgroundColor: "transparent",
          pressStyle: { backgroundColor: "$backgroundHover" }
        }
      ) }) })
    ] }, "content")
  ] });
});
DialogContentComposite.displayName = "DialogContent";

// src/molecules/Drawer.tsx
var import_react30 = __toESM(require("react"));

// src/molecules/Sheet/Sheet.tsx
var import_tamagui26 = require("tamagui");
var import_sheet = require("@tamagui/sheet");
var import_react29 = require("react");

// src/atoms/Stack.tsx
var import_react28 = require("react");
var import_tamagui25 = require("tamagui");
var import_jsx_runtime29 = require("react/jsx-runtime");
var Stack2 = (0, import_react28.forwardRef)((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_tamagui25.Stack, { ref, ...props });
});
Stack2.displayName = "Stack";
var HStack = (0, import_tamagui25.styled)(import_tamagui25.Stack, {
  name: "HStack",
  flexDirection: "row"
});
var VStack = (0, import_tamagui25.styled)(import_tamagui25.Stack, {
  name: "VStack",
  flexDirection: "column"
});

// src/molecules/Sheet/Sheet.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var Skeleton2 = Skeleton;
var HStack2 = HStack;
var VStack2 = VStack;
var SheetContext = (0, import_react29.createContext)({
  isLoading: false,
  hasError: false
});
var useSheetCustomContext = () => (0, import_react29.useContext)(SheetContext);
var SheetComponent = ({ isLoading = false, hasError = false, children, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SheetContext.Provider, { value: { isLoading, hasError }, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_sheet.Sheet, { ...props, children }) });
var SheetOverlay = (0, import_tamagui26.styled)(import_sheet.Sheet.Overlay, {
  backgroundColor: "$black",
  opacity: 0.5,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 }
});
var SheetHandle = (0, import_tamagui26.styled)(import_sheet.Sheet.Handle, {
  backgroundColor: "$borderColor",
  opacity: 0.8
});
var SheetContentFrame = (0, import_tamagui26.styled)(import_sheet.Sheet.Frame, {
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
var SheetContent = (0, import_react29.forwardRef)(
  ({ children, ...props }, ref) => {
    const { isLoading, hasError } = useSheetCustomContext();
    const sheet = (0, import_sheet.useSheet)();
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_tamagui26.Portal, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SheetOverlay, {}),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SheetContentFrame, { ref, ...props, hasError, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SheetHandle, {}),
        isLoading ? /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(VStack2, { gap: "$4", py: "$4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(VStack2, { gap: "$2", marginBottom: "$4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Skeleton2, { height: 30, width: "60%" }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Skeleton2, { height: 20, width: "90%" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(VStack2, { gap: "$4", py: "$4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(VStack2, { gap: "$2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Skeleton2, { height: 16, width: "30%" }),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Skeleton2, { height: 40 })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(VStack2, { gap: "$2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Skeleton2, { height: 16, width: "30%" }),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Skeleton2, { height: 40 })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(HStack2, { justifyContent: "flex-end", marginTop: "$4", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Skeleton2, { height: 44, width: 120 }) })
        ] }) : children
      ] }) })
    ] });
  }
);
SheetContent.displayName = "SheetContent";
var SheetHeader = (0, import_tamagui26.styled)(VStack, {
  gap: "$2",
  marginBottom: "$4"
});
var SheetFooterComponent = (0, import_react29.forwardRef)(
  ({ children, actions, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(HStack2, { ref, ...props, children: [
      children,
      actions
    ] });
  }
);
var SheetFooter = (0, import_tamagui26.styled)(SheetFooterComponent, {
  justifyContent: "flex-end",
  gap: "$2",
  marginTop: "$4"
});
var SheetTitle = (0, import_tamagui26.styled)(import_tamagui26.H2, {
  fontWeight: "bold",
  fontSize: "$6",
  color: "$foreground"
});
var SheetDescription = (0, import_tamagui26.styled)(import_tamagui26.Paragraph, {
  fontSize: "$3",
  color: "$mutedForeground"
});
var SheetCloseFrame = (0, import_tamagui26.styled)(Button, {});
var SheetClose = SheetCloseFrame.styleable((props, ref) => {
  const context = (0, import_sheet.useSheet)();
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    SheetCloseFrame,
    {
      ref,
      onPress: () => context.setOpen(false),
      ...props
    }
  );
});
var SheetTriggerFrame = (0, import_tamagui26.styled)(VStack, {});
var SheetTrigger = SheetTriggerFrame.styleable((props, ref) => {
  const context = (0, import_sheet.useSheet)();
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    SheetTriggerFrame,
    {
      ref,
      onPress: () => context.setOpen(true),
      ...props
    }
  );
});
var Sheet = (0, import_tamagui26.withStaticProperties)(SheetComponent, {
  Portal: import_tamagui26.Portal,
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
  ScrollView: import_sheet.Sheet.ScrollView
});

// src/molecules/Drawer.tsx
var import_tamagui27 = require("tamagui");
var import_jsx_runtime31 = require("react/jsx-runtime");
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
  const [internalOpen, setInternalOpen] = (0, import_react30.useState)(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = setControlledOpen ?? setInternalOpen;
  const triggerWithPress = trigger ? import_react30.default.cloneElement(trigger, {
    onPress: () => setOpen(true)
  }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
    triggerWithPress,
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Sheet, { open, onOpenChange: setOpen, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(Sheet.Content, { animation: "medium", enterStyle: { y: 300 }, exitStyle: { y: 300 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Sheet.Handle, {}),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(Sheet.Header, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Sheet.Title, { color: hasError ? "$red10" : void 0, children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Sheet.Description, { children: description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_tamagui27.YStack, { flex: 1, paddingVertical: "$4", children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_tamagui27.YStack, { space: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Skeleton, { height: 40 }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Skeleton, { height: 20, width: "75%" })
      ] }) : children }),
      footer && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Sheet.Footer, { children: footer })
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
var React32 = __toESM(require("react"));
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_tamagui28 = require("tamagui");
var import_lucide_icons7 = require("@tamagui/lucide-icons");
var import_jsx_runtime32 = require("react/jsx-runtime");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTriggerFrame = (0, import_tamagui28.styled)(DropdownMenuPrimitive.SubTrigger, {
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
var DropdownMenuSubTrigger = React32.forwardRef(({ className: _className, children, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
  DropdownMenuSubTriggerFrame,
  {
    ref,
    paddingLeft: inset ? "$8" : "$2",
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_tamagui28.View, { marginLeft: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_lucide_icons7.ChevronRight, { size: 16 }) })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContentFrame = (0, import_tamagui28.styled)(DropdownMenuPrimitive.SubContent, {
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
var DropdownMenuSubContent = React32.forwardRef(({ className: _className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(DropdownMenuSubContentFrame, { ref, ...props }));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContentFrame = (0, import_tamagui28.styled)(DropdownMenuPrimitive.Content, {
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
var DropdownMenuContent = React32.forwardRef(({ className: _className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
  DropdownMenuContentFrame,
  {
    ref,
    sideOffset,
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItemFrame = (0, import_tamagui28.styled)(DropdownMenuPrimitive.Item, {
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
var DropdownMenuItem = React32.forwardRef(({ className: _className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
  DropdownMenuItemFrame,
  {
    ref,
    paddingLeft: inset ? "$8" : "$2",
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItemFrame = (0, import_tamagui28.styled)(DropdownMenuPrimitive.CheckboxItem, {
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
var DropdownMenuCheckboxItem = React32.forwardRef(({ className: _className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
  DropdownMenuCheckboxItemFrame,
  {
    ref,
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_tamagui28.View, { position: "absolute", left: "$2", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_lucide_icons7.Check, { size: 16 }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItemFrame = (0, import_tamagui28.styled)(DropdownMenuPrimitive.RadioItem, {
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
var DropdownMenuRadioItem = React32.forwardRef(({ className: _className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(DropdownMenuRadioItemFrame, { ref, ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_tamagui28.View, { position: "absolute", left: "$2", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_lucide_icons7.Circle, { size: 8, fill: "currentColor" }) }) }),
  children
] }));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = (0, import_tamagui28.styled)(DropdownMenuPrimitive.Label, {
  paddingHorizontal: "$2",
  paddingVertical: "$1.5",
  fontSize: "$3",
  fontWeight: "600",
  color: "$foreground"
  // Ensure visibility
});
var DropdownMenuSeparator = (0, import_tamagui28.styled)(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: "$muted",
  marginVertical: "$1"
});
var DropdownMenuShortcut = (0, import_tamagui28.styled)(import_tamagui28.Text, {
  marginLeft: "auto",
  fontSize: "$2",
  color: "$mutedForeground",
  letterSpacing: 1
});

// src/molecules/Popover/Popover.tsx
var import_tamagui29 = require("tamagui");
var import_react31 = require("react");
var import_jsx_runtime33 = require("react/jsx-runtime");
var PopoverContext = (0, import_react31.createContext)({});
var usePopoverContext = () => {
  const context = (0, import_react31.useContext)(PopoverContext);
  if (!context) {
    throw new Error("usePopoverContext must be used within a Popover");
  }
  return context;
};
var PopoverContentFrame = (0, import_tamagui29.styled)(import_tamagui29.Popover.Content, {
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
var PopoverArrow = (0, import_tamagui29.styled)(import_tamagui29.Popover.Arrow, {
  name: "PopoverArrow",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background"
});
var PopoverContent = (0, import_react31.forwardRef)(
  ({ children, actions, ...props }, ref) => {
    const { isLoading, hasError } = usePopoverContext();
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(PopoverContentFrame, { ref, ...props, hasError, children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(PopoverArrow, { size: "$3" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_tamagui29.YStack, { gap: "$3", children: [
        children,
        actions && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_tamagui29.YStack, { children: actions })
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
  const contextValue = (0, import_react31.useMemo)(
    () => ({ isLoading, hasError, isDisabled }),
    [isLoading, hasError, isDisabled]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(PopoverContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_tamagui29.Popover, { ...props, children }) });
};
var PopoverTrigger = (0, import_react31.forwardRef)(
  (props, ref) => {
    const { isDisabled, isLoading } = usePopoverContext();
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_tamagui29.Popover.Trigger, { ref, ...props, disabled: isDisabled || isLoading });
  }
);
PopoverTrigger.displayName = "PopoverTrigger";
var PopoverAnchor = import_tamagui29.Popover.Anchor;
var PopoverClose = import_tamagui29.Popover.Close;

// src/molecules/HoverCard/HoverCard.tsx
var import_tamagui30 = require("tamagui");
var import_lucide_icons8 = require("@tamagui/lucide-icons");
var import_jsx_runtime34 = require("react/jsx-runtime");
var HoverCard = ({ children, ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Popover, { placement: "top", hoverable: true, ...rest, children });
};
var HoverCardTrigger = Popover.Trigger;
var HoverCardContent = Popover.Content;
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
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_tamagui30.YStack, { ...containerProps, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.XStack, { space: "$2", ai: "center", jc: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_icons8.AlertTriangle, { color: "$red10", size: "$1" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_tamagui30.Text, { color: "$red10", fontSize: "$2", children: "N\xE3o foi poss\xEDvel carregar o perfil." })
    ] }) });
  }
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.YStack, { ...containerProps, children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.XStack, { space: "$4", ai: "center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Skeleton, { br: "$12", w: "$10", h: "$10" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.YStack, { space: "$1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Skeleton, { h: "$2", w: "$12" }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Skeleton, { h: "$2", w: "$8" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Skeleton, { h: "$2" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Skeleton, { h: "$2" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.XStack, { space: "$4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Skeleton, { h: "$2", w: "$12" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Skeleton, { h: "$2", w: "$12" })
      ] }),
      actions && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_tamagui30.XStack, { jc: "flex-end", children: actions })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.YStack, { ...containerProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.XStack, { space: "$4", ai: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Avatar, { circular: true, size: "$10", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Avatar.Image, { source: { uri: user.avatar } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.YStack, { space: "$1", f: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_tamagui30.Paragraph, { size: "$3", fontWeight: "bold", ellipse: true, children: user.name }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_tamagui30.Paragraph, { size: "$2", color: "$gray11", ellipse: true, children: user.handle })
      ] })
    ] }),
    user.bio && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_tamagui30.Paragraph, { size: "$2", ellipse: true, children: user.bio }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.XStack, { space: "$4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.Paragraph, { size: "$2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_tamagui30.Paragraph, { fontWeight: "bold", children: user.following }),
        " Seguindo"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_tamagui30.Paragraph, { size: "$2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_tamagui30.Paragraph, { fontWeight: "bold", children: user.followers }),
        " Seguidores"
      ] })
    ] }),
    actions && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_tamagui30.XStack, { jc: "flex-end", children: actions })
  ] });
};

// src/molecules/RadioGroup.tsx
var import_react32 = __toESM(require("react"));
var import_tamagui31 = require("tamagui");
var import_jsx_runtime35 = require("react/jsx-runtime");
var RadioGroupItemFrame = (0, import_tamagui31.styled)(import_tamagui31.RadioGroup.Item, {
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
var RadioGroupIndicator = (0, import_tamagui31.styled)(import_tamagui31.RadioGroup.Indicator, {
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
var RadioGroupItem = import_react32.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(RadioGroupItemFrame, { ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(RadioGroupIndicator, { disabled: props.disabled }) });
});
RadioGroupItem.displayName = "RadioGroupItem";
var RadioGroup2 = import_react32.default.forwardRef(
  ({
    options,
    orientation = "vertical",
    isLoading = false,
    hasError = false,
    errorMessage,
    ...props
  }, ref) => {
    const Container = orientation === "vertical" ? import_tamagui31.YStack : import_tamagui31.XStack;
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Container, { gap: "$2", "aria-busy": "true", "aria-live": "polite", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_tamagui31.XStack, { alignItems: "center", space: "$2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Skeleton, { width: 16, height: 16, borderRadius: "$10" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Skeleton, { width: 100, height: 16 })
      ] }, option.value)) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_tamagui31.YStack, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_tamagui31.RadioGroup, { ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Container, { gap: "$2", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_tamagui31.XStack, { alignItems: "center", space: "$2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          RadioGroupItem,
          {
            value: option.value,
            id: option.value,
            hasError,
            disabled: option.disabled || props.disabled
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          import_tamagui31.Label,
          {
            htmlFor: option.value,
            disabled: option.disabled || props.disabled,
            ellipse: true,
            numberOfLines: 1,
            children: option.label
          }
        )
      ] }, option.value)) }) }),
      hasError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_tamagui31.Text, { color: "$red10", fontSize: "$2", marginTop: "$2", children: errorMessage })
    ] });
  }
);
RadioGroup2.displayName = "RadioGroup";

// src/molecules/Resizable.tsx
var import_tamagui32 = require("tamagui");
var import_react33 = __toESM(require("react"));
var import_lucide_icons9 = require("@tamagui/lucide-icons");
var import_jsx_runtime36 = require("react/jsx-runtime");
var ResizablePanelGroupContext = (0, import_react33.createContext)(null);
var useResizablePanelGroup = () => {
  const context = (0, import_react33.useContext)(ResizablePanelGroupContext);
  if (!context) {
    throw new Error("useResizablePanelGroup must be used within a ResizablePanelGroup");
  }
  return context;
};
var ResizablePanelGroupFrame = (0, import_tamagui32.styled)(import_tamagui32.XStack, {
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
var ResizablePanelGroup = import_react33.default.forwardRef(({
  direction = "horizontal",
  children,
  isDisabled: disabledProp = false,
  isLoading = false,
  hasError = false,
  keyboardStep = 5,
  ...props
}, ref) => {
  const groupRef = (0, import_react33.useRef)(null);
  const isDisabled = disabledProp || isLoading;
  const childArray = import_react33.Children.toArray(children);
  const panelIds = import_react33.Children.map(childArray, (child) => {
    return (0, import_react33.isValidElement)(child) && child.type === ResizablePanel ? (0, import_react33.useId)() : null;
  }).filter(Boolean);
  const [panelSizes, setPanelSizes] = (0, import_react33.useState)(() => {
    const sizes = [];
    import_react33.Children.forEach(childArray, (child) => {
      if ((0, import_react33.isValidElement)(child) && child.type === ResizablePanel) {
        sizes.push(child.props.defaultSize || 50);
      }
    });
    return sizes;
  });
  const panelMinSizes = (0, import_react33.useRef)([]);
  import_react33.Children.forEach(childArray, (child) => {
    if ((0, import_react33.isValidElement)(child) && child.type === ResizablePanel) {
      panelMinSizes.current.push(child.props.minSize || 10);
    }
  });
  const adjustPanelSize = (0, import_react33.useCallback)((handleIndex2, delta) => {
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
  const activeHandleIndex = (0, import_react33.useRef)(null);
  const dragStartPositions = (0, import_react33.useRef)(null);
  const onDragging = (0, import_react33.useCallback)((event) => {
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
  const stopDragging = (0, import_react33.useCallback)(() => {
    activeHandleIndex.current = null;
    dragStartPositions.current = null;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
    window.removeEventListener("pointermove", onDragging);
    window.removeEventListener("pointerup", stopDragging);
  }, [onDragging]);
  const startDragging = (0, import_react33.useCallback)((handleIndex2, event) => {
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
  const content = /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    ResizablePanelGroupFrame,
    {
      ref: groupRef,
      direction,
      isDisabled,
      hasError,
      ...props,
      children: import_react33.Children.map(childArray, (child) => {
        if ((0, import_react33.isValidElement)(child)) {
          if (child.type === ResizablePanel) {
            const index = panelIndex++;
            return (0, import_react33.cloneElement)(child, {
              id: panelIds[index],
              size: panelSizes[index]
            });
          }
          if (child.type === ResizableHandle) {
            const index = handleIndex++;
            return (0, import_react33.cloneElement)(child, {
              handleIndex: index
            });
          }
        }
        return child;
      })
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ResizablePanelGroupContext.Provider, { value: contextValue, children: hasError ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_tamagui32.Theme, { name: "red", children: content }) : content });
});
ResizablePanelGroup.displayName = "ResizablePanelGroup";
var ResizablePanelFrame = (0, import_tamagui32.styled)(import_tamagui32.YStack, {
  name: "ResizablePanel"
});
var ResizablePanel = import_react33.default.forwardRef(({ children, size, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ResizablePanelFrame, { ref, flexBasis: `${size}%`, ...props, children });
});
ResizablePanel.displayName = "ResizablePanel";
var ResizableHandleFrame = (0, import_tamagui32.styled)(import_tamagui32.YStack, {
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
var ResizableHandleIndicator = (0, import_tamagui32.styled)(import_tamagui32.Separator, {
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
var ResizableHandle = import_react33.default.forwardRef(({ withHandle, handleIndex, ...props }, ref) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(ResizableHandleIndicator, { direction }),
        withHandle && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          import_tamagui32.YStack,
          {
            position: "absolute",
            padding: "$1.5",
            borderRadius: "$10",
            backgroundColor: "$background",
            borderWidth: 1,
            borderColor: "$borderColor",
            children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_lucide_icons9.GripVertical, { size: 16, color: "$color", "aria-label": "Arrastar para redimensionar" })
          }
        )
      ]
    }
  );
});
ResizableHandle.displayName = "ResizableHandle";

// src/molecules/Select/Select.tsx
var import_lucide_icons10 = require("@tamagui/lucide-icons");
var import_react34 = __toESM(require("react"));
var import_tamagui33 = require("tamagui");
var import_jsx_runtime37 = require("react/jsx-runtime");
var SelectRoot = (props) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.Select, { ...props });
var SelectTriggerFrame = (0, import_tamagui33.styled)(import_tamagui33.XStack, {
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
var SelectTrigger = import_react34.default.forwardRef(
  ({ children, hasError, disabled, isLoading, rightSlot, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.Select.Trigger, { asChild: true, disabled: disabled || isLoading, ref, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(SelectTriggerFrame, { tabIndex: 0, isError: hasError, disabled: disabled || isLoading, ...props, children: [
      children,
      isLoading ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Spinner, {}) : rightSlot || /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_icons10.ChevronDown, { size: 12, color: "$mutedForeground" })
    ] }) });
  }
);
var SelectContent = (props) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_tamagui33.Select.Content, { zIndex: 2e5, ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    import_tamagui33.Select.ScrollUpButton,
    {
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      width: "100%",
      height: "$3",
      children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.YStack, { zIndex: 10, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_icons10.ChevronDown, { size: 12 }) })
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.Select.Viewport, { minWidth: 200, children: props.children }),
  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    import_tamagui33.Select.ScrollDownButton,
    {
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      width: "100%",
      height: "$3",
      children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.YStack, { zIndex: 10, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_icons10.ChevronDown, { size: 12 }) })
    }
  )
] });
var SelectItem = (0, import_tamagui33.styled)(import_tamagui33.Select.Item, {
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
var SelectItemIndicator = (props) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.Select.ItemIndicator, { marginLeft: "auto", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_lucide_icons10.Check, { size: 16 }) });
var SelectSheet = (props) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.Adapt, { when: "sm", platform: "touch", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
  import_tamagui33.Sheet,
  {
    native: !import_tamagui33.isWeb,
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
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.Sheet.Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.Sheet.ScrollView, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.Adapt.Contents, {}) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_tamagui33.Sheet.Overlay, { animation: "lazy", enterStyle: { opacity: 0 }, exitStyle: { opacity: 0 } })
    ]
  }
) });
var SelectValue = import_tamagui33.Select.Value;
var SelectItemText = import_tamagui33.Select.ItemText;
var SelectGroup = import_tamagui33.Select.Group;
var SelectLabel = import_tamagui33.Select.Label;
var SelectViewport = import_tamagui33.Select.Viewport;
var SelectPortal = import_tamagui33.Select.Portal;
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
var import_lucide_icons11 = require("@tamagui/lucide-icons");
var import_react35 = require("react");
var import_tamagui34 = require("tamagui");
var import_jsx_runtime38 = require("react/jsx-runtime");
var StarRatingFrame = (0, import_tamagui34.styled)(import_tamagui34.XStack, {
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
var StarIconContainer = (0, import_tamagui34.styled)(import_tamagui34.XStack, {
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
var StarRatingComponent = (0, import_react35.forwardRef)(
  ({
    count = 5,
    onChange,
    value,
    defaultValue: defaultValue2 = null,
    disabled,
    hasError,
    isLoading,
    iconProps,
    Icon = import_lucide_icons11.Star,
    size = "$2",
    colorActive: colorActiveProp = "$yellow10",
    colorInactive: colorInactiveProp = "$gray7",
    rightSlot,
    ...frameProps
  }, ref) => {
    const [internalRating, setInternalRating] = (0, import_react35.useState)(defaultValue2);
    const [hoverRating, setHoverRating] = (0, import_react35.useState)(null);
    const isControlled = value !== void 0;
    const currentRating = isControlled ? value : internalRating;
    const colorActive = (0, import_tamagui34.getVariableValue)(colorActiveProp);
    const colorError = (0, import_tamagui34.getVariableValue)("$red10");
    const colorInactive = (0, import_tamagui34.getVariableValue)(colorInactiveProp);
    const handlePress = (ratingToSet) => {
      if (disabled || isLoading) return;
      const newRating = currentRating === ratingToSet ? null : ratingToSet;
      if (!isControlled) {
        setInternalRating(newRating);
      }
      onChange?.(newRating);
    };
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(StarRatingFrame, { ...frameProps, ref, children: Array.from({ length: count }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Skeleton, { width: size, height: size, br: "$10" }, i)) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(StarRatingFrame, { ...frameProps, ref, children: [
      Array.from({ length: count }, (_, i) => {
        const ratingValue = i + 1;
        const isFilled = ratingValue <= (hoverRating ?? currentRating ?? 0);
        const starColor = hasError ? colorError : isFilled ? colorActive : colorInactive;
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          StarIconContainer,
          {
            disabled,
            onHoverIn: () => !disabled && setHoverRating(ratingValue),
            onHoverOut: () => !disabled && setHoverRating(null),
            onPress: () => handlePress(ratingValue),
            "aria-label": `Avalia\xE7\xE3o ${ratingValue} de ${count}`,
            "data-testid": `star-${ratingValue}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
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
var StarRating = (0, import_tamagui34.withStaticProperties)(StarRatingComponent, {});

// src/molecules/Toast.tsx
var import_react36 = require("react");
var import_tamagui35 = require("tamagui");
var import_portal = require("@tamagui/portal");
var import_lucide_icons12 = require("@tamagui/lucide-icons");
var import_jsx_runtime39 = require("react/jsx-runtime");
var ToastContext = (0, import_react36.createContext)(void 0);
var useToast = () => {
  const context = (0, import_react36.useContext)(ToastContext);
  if (!context) {
    throw new Error("useToast deve ser usado dentro de um ToastProvider");
  }
  return context;
};
var ToastViewportFrame = (0, import_tamagui35.styled)(import_tamagui35.YStack, {
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
var ToastFrame = (0, import_tamagui35.styled)(import_tamagui35.XStack, {
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
var ToastTitleComponent = (0, import_tamagui35.styled)(import_tamagui35.Text, {
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
var ToastDescriptionComponent = (0, import_tamagui35.styled)(import_tamagui35.Text, {
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
var ToastCloseButton = (0, import_tamagui35.styled)(Button, {
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
  const [toasts, setToasts] = (0, import_react36.useState)([]);
  const toast = (0, import_react36.useCallback)(({ duration = 5e3, isLoading = false, ...props }) => {
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
  const dismiss = (0, import_react36.useCallback)((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(ToastContext.Provider, { value: { toasts, toast, dismiss }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_portal.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ToastViewportFrame, { role: "status", "aria-live": "polite", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_tamagui35.AnimatePresence, { children: toasts.map((t) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ToastItem, { toast: t, onDismiss: () => dismiss(t.id) }, t.id)) }) }) })
  ] });
};
var ToastItem = ({ toast, onDismiss }) => {
  if (toast.isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      ToastFrame,
      {
        animation: "quick",
        enterStyle: { opacity: 0, scale: 0.95, y: 10 },
        opacity: 1,
        scale: 1,
        y: 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_tamagui35.YStack, { flex: 1, gap: "$2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Skeleton, { width: 150, height: 20 }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Skeleton, { width: 250, height: 15 })
        ] })
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_tamagui35.YStack, { flex: 1, gap: "$1", children: [
          toast.title && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ToastTitleComponent, { variant: toast.variant, children: toast.title }),
          toast.description && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ToastDescriptionComponent, { variant: toast.variant, children: toast.description })
        ] }),
        toast.action,
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ToastCloseButton, { onPress: onDismiss, "aria-label": "Fechar", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_icons12.X, { size: "$1" }) })
      ]
    }
  );
};
var Toast = ToastFrame;
var ToastViewport = ToastViewportFrame;
var ToastTitle = ToastTitleComponent;
var ToastDescription = ToastDescriptionComponent;

// src/molecules/Tabs.tsx
var import_react37 = require("react");
var import_tamagui36 = require("tamagui");
var import_jsx_runtime40 = require("react/jsx-runtime");
var TabsContext = (0, import_react37.createContext)({});
var useTabsContext = () => {
  const context = (0, import_react37.useContext)(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a Tabs component");
  }
  return context;
};
var TabsFrame = (0, import_tamagui36.styled)(import_tamagui36.Tabs, {
  name: "Tabs",
  flexDirection: "column",
  gap: "$2"
});
var InnerTabsList = (0, import_tamagui36.styled)(import_tamagui36.Tabs.List, {
  name: "TabsList",
  flexDirection: "row",
  gap: "$1",
  flexShrink: 1,
  backgroundColor: "transparent"
});
var StyledTabsTrigger = (0, import_tamagui36.styled)(import_tamagui36.Tabs.Tab, {
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
var StyledTabsContent = (0, import_tamagui36.styled)(import_tamagui36.Tabs.Content, {
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
  const content = tabs ? /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TabsList, { actions, children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TabsTrigger, { value: tab.value, children: tab.label }, tab.value)) }),
    tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TabsContent, { value: tab.value, children: tab.content }, tab.value))
  ] }) : children;
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TabsContext.Provider, { value: { isLoading, hasError, isDisabled }, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TabsFrame, { ...props, children: content }) });
};
var TabsList = ({
  actions,
  children,
  ...props
}) => {
  const { hasError } = useTabsContext();
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    import_tamagui36.XStack,
    {
      backgroundColor: "$muted",
      borderRadius: "$4",
      padding: "$1",
      alignItems: "center",
      gap: "$2",
      borderColor: hasError ? "$destructive" : void 0,
      borderWidth: hasError ? 1 : 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(InnerTabsList, { ...props, children }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_tamagui36.YStack, { ml: "auto", children: actions })
      ]
    }
  );
};
var TabsTrigger = (props) => {
  const { isDisabled } = useTabsContext();
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(StyledTabsTrigger, { disabled: isDisabled, ...props });
};
var TabsContent = (props) => {
  const { isLoading } = useTabsContext();
  return isLoading ? /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_tamagui36.YStack, { space: true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Skeleton, { height: 40 }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Skeleton, { height: 20 }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Skeleton, { height: 20 })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(StyledTabsContent, { ...props });
};

// src/molecules/Calendar/Calendar.tsx
var import_react38 = require("react");
var import_datepicker = require("@rehookify/datepicker");
var import_tamagui37 = require("tamagui");
var import_lucide_icons13 = require("@tamagui/lucide-icons");
var import_jsx_runtime41 = require("react/jsx-runtime");
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
var CalendarContainer = (0, import_tamagui37.styled)(import_tamagui37.YStack, {
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
var CalendarHeader = (0, import_tamagui37.styled)(import_tamagui37.XStack, {
  justifyContent: "space-between",
  alignItems: "center"
});
var CalendarTitle = (0, import_tamagui37.styled)(import_tamagui37.Text, {
  fontSize: "$5",
  fontWeight: "600",
  textAlign: "center",
  flex: 1
});
var CalendarGrid = (0, import_tamagui37.styled)(import_tamagui37.YStack, {
  gap: "$2"
});
var WeekDaysGrid = (0, import_tamagui37.styled)(import_tamagui37.XStack, {
  gap: "$2"
});
var WeekDayText = (0, import_tamagui37.styled)(import_tamagui37.Text, {
  flex: 1,
  textAlign: "center",
  color: "$mutedForeground",
  fontSize: "$2",
  fontWeight: "600"
});
var DaysGrid = (0, import_tamagui37.styled)(import_tamagui37.XStack, {
  flexWrap: "wrap",
  gap: "$2"
});
var DayButtonFrame = (0, import_tamagui37.styled)(Button, {
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
var DayText = (0, import_tamagui37.styled)(import_tamagui37.Text, {
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
var SkeletonGrid = () => /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_tamagui37.YStack, { gap: "$2", "data-testid": "calendar-skeleton", children: [
  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_tamagui37.XStack, { gap: "$2", justifyContent: "space-around", children: Array.from({ length: 7 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Skeleton, { width: 40, height: 20, borderRadius: "$2" }, i)) }),
  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_tamagui37.XStack, { flexWrap: "wrap", gap: "$2", justifyContent: "space-around", children: Array.from({ length: 35 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Skeleton, { width: 40, height: 40, borderRadius: "$4" }, i)) })
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
  const [selectedDates, onDatesChange] = (0, import_react38.useState)(selectedDate ? [selectedDate] : []);
  const dp = (0, import_datepicker.useDatePicker)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(CalendarContainer, { disabled: isDisabled, hasError, "data-testid": "calendar-container", "data-has-error": hasError, children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(CalendarHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Button, { icon: import_lucide_icons13.ChevronLeft, circular: true, variant: "ghost", onPress: onPrevClick, disabled: isLoading }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(CalendarTitle, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Skeleton, { width: 120, height: 24 }) : currentMonth ? `${currentMonth.month} ${currentMonth.year}` : "" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(Button, { icon: import_lucide_icons13.ChevronRight, circular: true, variant: "ghost", onPress: onNextClick, disabled: isLoading })
    ] }),
    isLoading ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(SkeletonGrid, {}) : currentMonth ? /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(CalendarGrid, { "data-testid": "calendar-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(WeekDaysGrid, { children: WEEK_DAYS_PT_BR.map((day) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(WeekDayText, { children: day.substring(0, 3) }, day)) }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(DaysGrid, { children: (currentMonth?.days || []).map((day, index) => {
        const { onClick: onDayClick, ...dayProps } = dp.propGetters.dayButton(day);
        return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          DayButtonFrame,
          {
            selected: day.selected,
            today: day.now,
            outside: !day.inCurrentMonth,
            disabled: day.disabled,
            onPress: onDayClick,
            ...dayProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(DayText, { selected: day.selected, children: day.day })
          },
          index
        );
      }) })
    ] }) : null
  ] });
};

// src/molecules/DatePicker.tsx
var import_lucide_icons14 = require("@tamagui/lucide-icons");
var import_date_fns = require("date-fns");
var import_locale = require("date-fns/locale");
var import_react39 = __toESM(require("react"));
var import_tamagui38 = require("tamagui");
var import_jsx_runtime42 = require("react/jsx-runtime");
var DatePickerFrame = (0, import_tamagui38.styled)(import_tamagui38.XStack, {
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
var DatePicker = import_react39.default.forwardRef(
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
    const [open, setOpen] = import_react39.default.useState(false);
    const handleDateSelect = (selectedDate) => {
      onDateChange?.(selectedDate);
      setOpen(false);
    };
    if (loading) {
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Skeleton, { height: 40, borderRadius: "$md" });
    }
    const trigger = /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(DatePickerFrame, { variant, state, disabled, children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        Input.Box,
        {
          flex: 1,
          borderWidth: 0,
          backgroundColor: "transparent",
          focusStyle: {
            borderWidth: 0,
            outlineWidth: 0
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            Input.Field,
            {
              size,
              value: date ? (0, import_date_fns.format)(date, "PPP", { locale: import_locale.ptBR }) : "",
              placeholder,
              disabled,
              readOnly: true,
              ...inputProps
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        Button,
        {
          ref,
          icon: import_lucide_icons14.Calendar,
          variant: "ghost",
          size,
          disabled,
          ...buttonProps
        }
      ) })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Popover, { open, onOpenChange: setOpen, ...props, children: [
      trigger,
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_tamagui38.Adapt, { when: "sm", platform: "touch", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Sheet, { modal: true, dismissOnSnapToBottom: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Sheet.Frame, { padding: "$4", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_tamagui38.Adapt.Contents, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Sheet.Overlay, {})
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(PopoverContent, { p: 0, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Calendar, { selectedDate: date, onDateChange: handleDateSelect }) })
    ] });
  }
);
DatePicker.displayName = "DatePicker";

// src/molecules/OTPInput/OTPInput.tsx
var import_react40 = __toESM(require("react"));
var import_tamagui39 = require("tamagui");
var import_jsx_runtime43 = require("react/jsx-runtime");
var OTPInputFrame = (0, import_tamagui39.styled)(import_tamagui39.YStack, {
  name: "OTPInputFrame",
  flexDirection: "row",
  gap: "$sm",
  alignItems: "center"
});
var OTPCellInput = (0, import_tamagui39.styled)(Input, {
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
var OTPInputImpl = import_react40.default.forwardRef(
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
    const length = import_react40.default.useMemo(() => Math.max(1, Math.floor(lengthProp)), [lengthProp]);
    const [internalValue, setInternalValue] = import_react40.default.useState(
      () => sanitizeToLength(defaultValue2 ?? "", allowedCharacters, length)
    );
    const isControlled = valueProp !== void 0;
    const resolvedValue = import_react40.default.useMemo(
      () => sanitizeToLength((valueProp ?? internalValue) || "", allowedCharacters, length),
      [allowedCharacters, internalValue, length, valueProp]
    );
    import_react40.default.useEffect(() => {
      if (!isControlled) {
        setInternalValue((prev) => sanitizeToLength(prev, allowedCharacters, length));
      }
    }, [allowedCharacters, isControlled, length]);
    const inputRefs = import_react40.default.useRef([]);
    const setValue = import_react40.default.useCallback(
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
    const valueArray = import_react40.default.useMemo(() => valueToArray(resolvedValue, length), [resolvedValue, length]);
    const focusInput = import_react40.default.useCallback((index) => {
      const node = inputRefs.current[index];
      if (node && typeof node.focus === "function") {
        node.focus();
      }
    }, []);
    const selectInput = import_react40.default.useCallback((index) => {
      if (!import_tamagui39.isWeb) return;
      const node = inputRefs.current[index];
      if (node && typeof node.select === "function") {
        node.select();
      } else if (node && typeof node.setSelectionRange === "function") {
        node.setSelectionRange(0, node.value?.length ?? 0);
      }
    }, []);
    const notifyCompletion = import_react40.default.useCallback(
      (chars) => {
        if (chars.every(Boolean)) {
          onComplete?.(chars.join(""));
        }
      },
      [onComplete]
    );
    const setCharacterAtIndex = import_react40.default.useCallback(
      (index, char) => {
        const chars = valueToArray(resolvedValue, length);
        chars[index] = char;
        setValue(chars.join(""));
        notifyCompletion(chars);
      },
      [length, notifyCompletion, resolvedValue, setValue]
    );
    const handleInputChange = import_react40.default.useCallback(
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
    const handlePaste = import_react40.default.useCallback(
      (index, event) => {
        if (!import_tamagui39.isWeb) return;
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
    const handleKeyDown = import_react40.default.useCallback(
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
    import_react40.default.useEffect(() => {
      if (autoFocus) {
        focusInput(0);
        selectInput(0);
      }
    }, [autoFocus, focusInput, selectInput]);
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(OTPInputFrame, { ref, ...frameProps, children: Array.from({ length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Skeleton, { width: 48, height: 48 }, `otp-skeleton-${index}`)) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(OTPInputFrame, { ref, ...frameProps, children: valueArray.map((char, index) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
        ...import_tamagui39.isWeb ? {
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
        disabled: import_tamagui39.isWeb ? disabled : void 0,
        ...inputProps
      },
      `otp-input-${index}`
    )) });
  }
);
OTPInputImpl.displayName = "OTPInput";
var OTPInput = withErrorLogging("OTPInput", OTPInputImpl);

// src/molecules/Pagination/Pagination.tsx
var import_lucide_icons15 = require("@tamagui/lucide-icons");
var import_react41 = require("react");
var import_tamagui40 = require("tamagui");
var import_jsx_runtime44 = require("react/jsx-runtime");
var PaginationRoot = (0, import_tamagui40.styled)(import_tamagui40.XStack, {
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
var PaginationButton = (0, import_tamagui40.styled)(Button, {
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
var PaginationEllipsis = (0, import_tamagui40.styled)(import_tamagui40.Text, {
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
  return (0, import_react41.useMemo)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
      import_tamagui40.XStack,
      {
        alignItems: "center",
        gap: "$sm",
        "aria-label": "Carregando pagina\xE7\xE3o",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Skeleton,
            {
              width: 32,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Skeleton,
            {
              width: 32,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Skeleton,
            {
              width: 40,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Skeleton,
            {
              width: 40,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Skeleton,
            {
              width: 40,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            Skeleton,
            {
              width: 32,
              height: 32,
              borderRadius: "$full"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    PaginationRoot,
    {
      role: "navigation",
      "aria-label": ariaLabel,
      hasError,
      children: [
        leftSlot,
        showEdges && /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
          PaginationButton,
          {
            size,
            disabled: disabled || isFirstPage,
            "aria-label": "Primeira p\xE1gina",
            onPress: () => handleChange(1),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_tamagui40.VisuallyHidden, { children: "Primeira p\xE1gina" }),
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_lucide_icons15.ChevronsLeft, {})
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
          PaginationButton,
          {
            size,
            disabled: disabled || isFirstPage,
            "aria-label": "P\xE1gina anterior",
            onPress: () => handleChange(currentPage - 1),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_tamagui40.VisuallyHidden, { children: "P\xE1gina anterior" }),
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_lucide_icons15.ChevronLeft, {})
            ]
          }
        ),
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
          PaginationButton,
          {
            size,
            disabled: disabled || isLastPage,
            "aria-label": "Pr\xF3xima p\xE1gina",
            onPress: () => handleChange(currentPage + 1),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_tamagui40.VisuallyHidden, { children: "Pr\xF3xima p\xE1gina" }),
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_lucide_icons15.ChevronRight, {})
            ]
          }
        ),
        showEdges && /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
          PaginationButton,
          {
            size,
            disabled: disabled || isLastPage,
            "aria-label": "\xDAltima p\xE1gina",
            onPress: () => handleChange(totalPages),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_tamagui40.VisuallyHidden, { children: "\xDAltima p\xE1gina" }),
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_lucide_icons15.ChevronsRight, {})
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
var import_tamagui41 = require("tamagui");
var import_jsx_runtime45 = require("react/jsx-runtime");
var BreadcrumbRoot = (0, import_tamagui41.styled)(import_tamagui41.XStack, {
  name: "BreadcrumbRoot",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$4",
  width: "100%"
});
var BreadcrumbList = (0, import_tamagui41.styled)(import_tamagui41.XStack, {
  name: "BreadcrumbList",
  gap: "$sm",
  alignItems: "center",
  flexWrap: "nowrap",
  overflow: "hidden"
});
var BreadcrumbItemWrapper = (0, import_tamagui41.styled)(import_tamagui41.XStack, {
  name: "BreadcrumbItem",
  alignItems: "center",
  gap: "$sm"
});
var BreadcrumbSeparator = (0, import_tamagui41.styled)(import_tamagui41.Text, {
  name: "BreadcrumbSeparator",
  color: "$mutedForeground",
  fontSize: "$2"
});
var BreadcrumbLink = (0, import_tamagui41.styled)(import_tamagui41.Anchor, {
  name: "BreadcrumbLink",
  color: "$foreground",
  fontWeight: "500",
  hoverStyle: {
    color: "$primary"
  },
  ellipse: true
});
var BreadcrumbButton = (0, import_tamagui41.styled)(Button, {
  name: "BreadcrumbButton",
  unstyled: true,
  padding: 0,
  minWidth: 0,
  backgroundColor: "transparent",
  hoverStyle: {
    opacity: 0.8
  }
});
var BreadcrumbButtonLabel = (0, import_tamagui41.styled)(import_tamagui41.Text, {
  name: "BreadcrumbButtonLabel",
  color: "$foreground",
  fontWeight: "500",
  ellipse: true
});
var BreadcrumbCurrent = (0, import_tamagui41.styled)(import_tamagui41.Text, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(BreadcrumbRoot, { "data-testid": "breadcrumb-skeleton", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(BreadcrumbList, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Skeleton, { height: 20, width: 80 }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Skeleton, { height: 20, width: 100 }),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Skeleton, { height: 20, width: 120 })
    ] }) });
  }
  if (!items || items.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(BreadcrumbRoot, { role: "navigation", "aria-label": ariaLabel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(BreadcrumbList, { role: "list", children: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const linkRel = item.rel ?? (item.target === "_blank" ? "noreferrer noopener" : void 0);
      return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(BreadcrumbItemWrapper, { role: "listitem", children: [
        isLast ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(BreadcrumbCurrent, { "aria-current": "page", children: item.label }) : item.href ? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
          BreadcrumbLink,
          {
            href: item.href,
            target: item.target,
            rel: linkRel,
            onPress: item.onPress,
            children: item.label
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(BreadcrumbButton, { onPress: item.onPress, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(BreadcrumbButtonLabel, { children: item.label }) }),
        !isLast && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(BreadcrumbSeparator, { "aria-hidden": true, children: separator })
      ] }, `${item.label}-${index}`);
    }) }),
    rightSlot && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_tamagui41.XStack, { children: rightSlot })
  ] });
};
Breadcrumb.displayName = "Breadcrumb";

// src/molecules/PageHeader/PageHeader.tsx
var import_react42 = __toESM(require("react"));
var import_tamagui42 = require("tamagui");
var import_jsx_runtime46 = require("react/jsx-runtime");
var PageHeaderFrame = (0, import_tamagui42.styled)(import_tamagui42.YStack, {
  name: "PageHeader",
  gap: "$4",
  paddingBottom: "$4",
  width: "100%"
});
var HeaderTop = (0, import_tamagui42.styled)(import_tamagui42.XStack, {
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
  gap: "$4"
});
var HeaderContent = (0, import_tamagui42.styled)(import_tamagui42.YStack, {
  gap: "$1",
  flex: 1
});
var PageTitle = (0, import_tamagui42.styled)(import_tamagui42.H3, {
  color: "$foreground"
});
var PageDescription = (0, import_tamagui42.styled)(import_tamagui42.Paragraph, {
  color: "$mutedForeground"
});
var PageActions = (0, import_tamagui42.styled)(import_tamagui42.XStack, {
  gap: "$2",
  alignItems: "center"
});
var PageHeader = import_react42.default.forwardRef(
  ({ title, description, actions, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(PageHeaderFrame, { ref, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(HeaderTop, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(HeaderContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(PageTitle, { children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(PageDescription, { children: description })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(PageActions, { children: actions })
      ] }),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Separator, {})
    ] });
  }
);
PageHeader.displayName = "PageHeader";

// src/molecules/NotificationCard/NotificationCard.tsx
var import_react43 = __toESM(require("react"));
var import_tamagui43 = require("tamagui");
var import_lucide_icons16 = require("@tamagui/lucide-icons");
var import_jsx_runtime47 = require("react/jsx-runtime");
var NotificationCardFrame = (0, import_tamagui43.styled)(Card, {
  name: "NotificationCard",
  padding: "$4",
  width: "100%",
  flexDirection: "row",
  gap: "$3",
  alignItems: "flex-start",
  position: "relative"
});
var NotificationContent = (0, import_tamagui43.styled)(import_tamagui43.YStack, {
  flex: 1,
  gap: "$1"
});
var NotificationTitle = (0, import_tamagui43.styled)(import_tamagui43.Paragraph, {
  fontWeight: "600",
  fontSize: "$3",
  color: "$foreground"
});
var NotificationDescription = (0, import_tamagui43.styled)(import_tamagui43.Paragraph, {
  fontSize: "$3",
  color: "$mutedForeground",
  lineHeight: "$4"
});
var NotificationTime = (0, import_tamagui43.styled)(import_tamagui43.Paragraph, {
  fontSize: "$2",
  color: "$mutedForeground",
  marginTop: "$1"
});
var UnreadIndicator = (0, import_tamagui43.styled)(import_tamagui43.XStack, {
  width: 8,
  height: 8,
  borderRadius: "$full",
  backgroundColor: "$primary",
  position: "absolute",
  top: "$4",
  right: "$4"
});
var NotificationCard = import_react43.default.forwardRef(
  ({ title, description, time, unread, avatarSrc, avatarFallback, onDismiss, onPress, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(NotificationCardFrame, { ref, ...props, onPress, hoverStyle: { backgroundColor: "$muted" }, pressStyle: { opacity: 0.8 }, children: [
      unread && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(UnreadIndicator, {}),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(Avatar, { size: "$4", circular: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Avatar.Image, { src: avatarSrc }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Avatar.Fallback, { backgroundColor: "$muted", alignItems: "center", justifyContent: "center", children: avatarFallback ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_tamagui43.Paragraph, { children: avatarFallback }) : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_lucide_icons16.Bell, { size: 16, color: "$mutedForeground" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(NotificationContent, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(NotificationTitle, { children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(NotificationDescription, { children: description }),
        time && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(NotificationTime, { children: time })
      ] }),
      onDismiss && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        Button,
        {
          size: "$2",
          variant: "ghost",
          borderRadius: "$full",
          icon: import_lucide_icons16.X,
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
var import_lucide_icons17 = require("@tamagui/lucide-icons");
var import_react44 = require("react");
var import_tamagui44 = require("tamagui");
var import_jsx_runtime48 = require("react/jsx-runtime");
var initialState = {
  hasError: false,
  error: void 0
};
var ErrorBoundary = class extends import_react44.Component {
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
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, { children: this.props.fallback });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
        import_tamagui44.YStack,
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
            /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_lucide_icons17.AlertTriangle, { size: "$3", color: "$red10" }),
            /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_tamagui44.YStack, { gap: "$2", alignItems: "center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_tamagui44.H4, { color: "$red10", children: "Algo deu errado" }),
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_tamagui44.Paragraph, { textAlign: "center", color: "$gray11", children: "Ocorreu um erro inesperado neste componente. Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte." })
            ] }),
            typeof process !== "undefined" && process.env.NODE_ENV === "development" && this.state.error && /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
              import_tamagui44.YStack,
              {
                gap: "$2",
                p: "$3",
                borderRadius: "$2",
                backgroundColor: "$backgroundPress",
                alignSelf: "stretch",
                children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_tamagui44.Paragraph, { size: "$2", fontFamily: "$mono", children: this.state.error.message })
              }
            ),
            this.props.onReset && /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_tamagui44.Separator, {}),
              /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_tamagui44.Button, { theme: "primary", onPress: this.resetBoundary, children: "Tentar Novamente" })
            ] })
          ]
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, { children: this.props.children });
  }
};
function withErrorBoundary(WrappedComponent, errorBoundaryProps) {
  const ComponentWithErrorBoundary = (props) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(ErrorBoundary, { ...errorBoundaryProps, children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(WrappedComponent, { ...props }) });
  const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
  ComponentWithErrorBoundary.displayName = `withErrorBoundary(${componentName})`;
  return ComponentWithErrorBoundary;
}

// src/molecules/ContextMenu/ContextMenu.tsx
var import_react45 = __toESM(require("react"));
var ContextMenuPrimitive = __toESM(require("@radix-ui/react-context-menu"));
var import_lucide_icons18 = require("@tamagui/lucide-icons");
var import_tamagui45 = require("tamagui");
var import_jsx_runtime49 = require("react/jsx-runtime");
var StyledContent = (0, import_tamagui45.styled)(ContextMenuPrimitive.Content, {
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
var ContextMenuContent = import_react45.default.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(StyledContent, { ref, ...props, children }) }));
ContextMenuContent.displayName = "ContextMenuContent";
var StyledItem = (0, import_tamagui45.styled)(ContextMenuPrimitive.Item, {
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
var StyledCheckboxItem = (0, import_tamagui45.styled)(ContextMenuPrimitive.CheckboxItem, {
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
var StyledRadioItem = (0, import_tamagui45.styled)(ContextMenuPrimitive.RadioItem, {
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
var StyledSubTrigger = (0, import_tamagui45.styled)(ContextMenuPrimitive.SubTrigger, {
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
var StyledSubContent = (0, import_tamagui45.styled)(ContextMenuPrimitive.SubContent, {
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
var ContextMenuSubContent = import_react45.default.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(StyledSubContent, { ref, ...props, children }) }));
ContextMenuSubContent.displayName = "ContextMenuSubContent";
var ContextMenuItemIndicator = (0, import_tamagui45.styled)(ContextMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: "$2",
  width: "$3.5",
  height: "$3.5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
var StyledLabel = (0, import_tamagui45.styled)(ContextMenuPrimitive.Label, {
  name: "ContextMenuLabel",
  padding: "$2",
  paddingLeft: "$6",
  fontSize: "$2",
  lineHeight: "$2.5",
  fontWeight: "600",
  color: "$color"
});
var StyledSeparator = (0, import_tamagui45.styled)(ContextMenuPrimitive.Separator, {
  name: "ContextMenuSeparator",
  height: 1,
  margin: "$1",
  backgroundColor: "$borderColor"
});
var ContextMenuShortcut = (0, import_tamagui45.styled)(import_tamagui45.Text, {
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
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(StyledSeparator, {}, key);
    }
    if (item.isLabel) {
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(StyledLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_tamagui45.Text, { ellipse: true, children: item.label }) }, key);
    }
    if (item.items && item.items.length > 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(ContextMenuPrimitive.Sub, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(StyledSubTrigger, { disabled: item.disabled, children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_tamagui45.XStack, { gap: "$2", alignItems: "center", children: [
            item.icon,
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_tamagui45.Text, { ellipse: true, children: item.label })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_lucide_icons18.ChevronRight, { size: "$1", marginLeft: "auto" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ContextMenuSubContent, { children: renderItems(item.items) })
      ] }, key);
    }
    if (item.isCheckbox) {
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
        StyledCheckboxItem,
        {
          checked: item.checked,
          onCheckedChange: item.onCheckedChange,
          disabled: item.disabled,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ContextMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_lucide_icons18.Check, { size: "$1" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_tamagui45.Text, { ellipse: true, children: item.label })
          ]
        },
        key
      );
    }
    if (item.isRadio) {
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(StyledRadioItem, { value: item.value, disabled: item.disabled, children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ContextMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_lucide_icons18.Circle, { size: "$1" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_tamagui45.Text, { ellipse: true, children: item.label })
      ] }, key);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(StyledItem, { disabled: item.disabled, onSelect: item.onSelect, children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_tamagui45.XStack, { gap: "$2", alignItems: "center", children: [
        item.icon,
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_tamagui45.Text, { ellipse: true, children: item.label })
      ] }),
      item.shortcut && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ContextMenuShortcut, { children: item.shortcut })
    ] }, key);
  });
  const radioItems = items.filter((item) => item.isRadio);
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(ContextMenuPrimitive.Root, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ContextMenuPrimitive.Trigger, { asChild: true, disabled: isDisabled, children: import_react45.default.cloneElement(children, {
      ...children.props,
      disabled: isDisabled,
      ...hasError && {
        borderColor: "$red10",
        borderWidth: 2
      }
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ContextMenuContent, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_tamagui45.YStack, { gap: "$2", padding: "$2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Skeleton, { height: 20 }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Skeleton, { height: 20 }),
      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Skeleton, { height: 20 })
    ] }) : radioItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ContextMenuPrimitive.RadioGroup, { value: radioGroupValue, onValueChange: onRadioGroupChange, children: renderItems(items) }) : renderItems(items) })
  ] });
};
ContextMenuComponent.displayName = "ContextMenu";
var ContextMenu = ContextMenuComponent;

// src/molecules/NavigationMenu.tsx
var NavigationMenuPrimitive = __toESM(require("@radix-ui/react-navigation-menu"));
var import_tamagui46 = require("tamagui");
var import_jsx_runtime50 = require("react/jsx-runtime");
var NavigationMenu = (0, import_tamagui46.styled)(NavigationMenuPrimitive.Root, {
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
var NavigationMenuList = (0, import_tamagui46.styled)(NavigationMenuPrimitive.List, {
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
var NavigationMenuItem = (0, import_tamagui46.styled)(NavigationMenuPrimitive.Item, {
  name: "NavigationMenuItem",
  tag: "li"
});
var NavigationMenuTrigger = (0, import_tamagui46.styled)(NavigationMenuPrimitive.Trigger, {
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
var NavigationMenuContent = (0, import_tamagui46.styled)(NavigationMenuPrimitive.Content, {
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
var NavigationMenuLink = (0, import_tamagui46.styled)(NavigationMenuPrimitive.Link, {
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
var NavigationMenuIndicator = (0, import_tamagui46.styled)(NavigationMenuPrimitive.Indicator, {
  name: "NavigationMenuIndicator",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  transition: "width, transform 200ms ease"
});
var IndicatorArrow = (0, import_tamagui46.styled)(import_tamagui46.YStack, {
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
var NavigationMenuViewport = (0, import_tamagui46.styled)(NavigationMenuPrimitive.Viewport, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_tamagui46.XStack, { alignItems: "center", gap: "$4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Skeleton, { height: 32, width: 120 }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Skeleton, { height: 32, width: 120 }),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Skeleton, { height: 32, width: 120 })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(NavigationMenu, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(NavigationMenuList, { children: [
    children,
    rightSlot
  ] }) });
};

// src/molecules/Menubar/Menubar.tsx
var import_react_menubar = require("@radix-ui/react-menubar");
var import_lucide_icons19 = require("@tamagui/lucide-icons");
var import_react46 = __toESM(require("react"));
var import_tamagui47 = require("tamagui");
var import_tamagui48 = require("tamagui");
var import_jsx_runtime51 = require("react/jsx-runtime");
var MenubarFrame = (0, import_tamagui47.styled)(import_react_menubar.Root, {
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
var MenubarMenu = import_react_menubar.Menu;
var MenubarGroup = import_react_menubar.Group;
var MenubarPortal = import_react_menubar.Portal;
var MenubarTriggerFrame = (0, import_tamagui47.styled)(import_react_menubar.Trigger, {
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
var MenubarTrigger = import_react46.default.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(MenubarTriggerFrame, { ref, ...props }));
MenubarTrigger.displayName = import_react_menubar.Trigger.displayName;
var MenubarContentFrame = (0, import_tamagui47.styled)(import_react_menubar.Content, {
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
var MenubarContent = import_react46.default.forwardRef(({ align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react_menubar.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
  MenubarContentFrame,
  {
    ref,
    align,
    alignOffset,
    sideOffset,
    ...props
  }
) }));
MenubarContent.displayName = import_react_menubar.Content.displayName;
var MenubarItemFrame = (0, import_tamagui47.styled)(import_react_menubar.Item, {
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
var MenubarItem = import_react46.default.forwardRef(({ inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
  MenubarItemFrame,
  {
    ref,
    paddingLeft: inset ? "$8" : "$2",
    ...props
  }
));
MenubarItem.displayName = import_react_menubar.Item.displayName;
var MenubarCheckboxItemFrame = (0, import_tamagui47.styled)(import_react_menubar.CheckboxItem, {
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
var MenubarItemIndicatorFrame = (0, import_tamagui47.styled)(import_react_menubar.ItemIndicator, {
  position: "absolute",
  left: "$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "$4",
  height: "$4"
});
var MenubarCheckboxItem = import_react46.default.forwardRef(({ children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(MenubarCheckboxItemFrame, { ref, checked, ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(MenubarItemIndicatorFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_icons19.Check, { size: 14 }) }),
  children
] }));
MenubarCheckboxItem.displayName = import_react_menubar.CheckboxItem.displayName;
var MenubarRadioItemFrame = (0, import_tamagui47.styled)(import_react_menubar.RadioItem, {
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
var MenubarRadioItem = import_react46.default.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(MenubarRadioItemFrame, { ref, ...props, children: [
  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(MenubarItemIndicatorFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_icons19.Circle, { size: 8, fill: "currentColor" }) }),
  children
] }));
MenubarRadioItem.displayName = import_react_menubar.RadioItem.displayName;
var MenubarLabelFrame = (0, import_tamagui47.styled)(import_react_menubar.Label, {
  name: "MenubarLabel",
  paddingHorizontal: "$2",
  paddingVertical: "$1.5",
  fontSize: "$3",
  fontWeight: "600",
  color: "$foreground",
  paddingLeft: "$2"
});
var MenubarLabel = import_react46.default.forwardRef(({ inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(MenubarLabelFrame, { ref, paddingLeft: inset ? "$8" : "$2", ...props }));
MenubarLabel.displayName = import_react_menubar.Label.displayName;
var MenubarSeparator = (0, import_tamagui47.styled)(import_react_menubar.Separator, {
  name: "MenubarSeparator",
  height: 1,
  backgroundColor: "$muted",
  marginHorizontal: "-$1"
});
var MenubarShortcut = (0, import_tamagui47.styled)(import_tamagui47.Paragraph, {
  name: "MenubarShortcut",
  marginLeft: "auto",
  fontSize: "$1",
  color: "$mutedForeground",
  letterSpacing: "$1"
});
var MenubarSubTriggerFrame = (0, import_tamagui47.styled)(import_react_menubar.SubTrigger, {
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
var MenubarSubTrigger = import_react46.default.forwardRef(({ children, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
  MenubarSubTriggerFrame,
  {
    ref,
    paddingLeft: inset ? "$8" : "$2",
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_lucide_icons19.ChevronRight, { size: 14, style: { marginLeft: "auto" } })
    ]
  }
));
MenubarSubTrigger.displayName = import_react_menubar.SubTrigger.displayName;
var MenubarSubContentFrame = (0, import_tamagui47.styled)(import_react_menubar.SubContent, {
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
var MenubarSubContent = import_react46.default.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(MenubarSubContentFrame, { ref, ...props }));
MenubarSubContent.displayName = import_react_menubar.SubContent.displayName;
var MenubarSub = import_react_menubar.Sub;
var MenubarRadioGroup = import_react_menubar.RadioGroup;
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
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_tamagui47.YStack, { width: "100%", space: "$2", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Skeleton, { height: "$4", width: "100%" }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
    MenubarRoot,
    {
      ...props,
      opacity: isDisabled ? 0.5 : 1,
      borderColor: hasError ? "$red10" : "$borderColor",
      children: [
        children,
        rightSlot && /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_tamagui48.Spacer, {}),
          rightSlot
        ] })
      ]
    }
  );
};

// src/molecules/MonthsPicker/MonthsPicker.tsx
var import_lucide_icons20 = require("@tamagui/lucide-icons");
var import_react47 = require("react");
var import_tamagui49 = require("tamagui");
var import_jsx_runtime52 = require("react/jsx-runtime");
var MonthsPickerTrigger = (0, import_tamagui49.styled)(SelectTrigger, {
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
  const meses = (0, import_react47.useMemo)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Skeleton, { width: 200, height: 35 });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(SelectRoot, { value, onValueChange, disabled: isDisabled, children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(MonthsPickerTrigger, { error: hasError, disabled: isDisabled, iconAfter: import_lucide_icons20.ChevronDown, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SelectValue, { placeholder }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_tamagui49.Adapt, { when: "sm", platform: "touch", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Sheet, { modal: true, dismissOnSnapToBottom: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Sheet.Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Sheet.ScrollView, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_tamagui49.Adapt.Contents, {}) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Sheet.Overlay, {})
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SelectViewport, { children: meses.map((mes, index) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(SelectItem, { index, value: mes, children: mes }, mes)) }) })
  ] });
};

// src/molecules/ToggleGroup/ToggleGroup.tsx
var import_react48 = require("react");
var import_tamagui50 = require("tamagui");
var import_jsx_runtime53 = require("react/jsx-runtime");
var ToggleGroupContext = (0, import_react48.createContext)({
  disabled: false,
  error: false,
  loading: false
});
var useToggleGroupContext = () => {
  const context = (0, import_react48.useContext)(ToggleGroupContext);
  if (!context) {
    throw new Error("useToggleGroupContext must be used within a ToggleGroupProvider");
  }
  return context;
};
var ToggleGroupItemFrame = (0, import_tamagui50.styled)(import_tamagui50.ToggleGroup.Item, {
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
var ToggleGroupItem = (0, import_react48.forwardRef)((props, ref) => {
  const { disabled, error } = useToggleGroupContext();
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(ToggleGroupItemFrame, { ref, ...props, disabled: disabled || props.disabled, error });
});
var ToggleGroupFrame = (0, import_tamagui50.styled)(import_tamagui50.ToggleGroup, {
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
var ToggleGroupRoot = (0, import_react48.forwardRef)((props, ref) => {
  const { children, disabled, error, loading, ...rest } = props;
  const contextValue = (0, import_react48.useMemo)(() => ({ disabled, error, loading }), [disabled, error, loading]);
  if (loading) {
    const childCount = import_react48.Children.count(children);
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_tamagui50.YStack, { flexDirection: "row", gap: "$1", alignItems: "center", children: Array.from({ length: childCount > 0 ? childCount : 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Skeleton, { height: "$10", width: "$10", borderRadius: "$4" }, i)) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(ToggleGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(ToggleGroupFrame, { ref, ...rest, disabled, error, children }) });
});
var ToggleGroup = (0, import_tamagui50.withStaticProperties)(ToggleGroupRoot, {
  Item: ToggleGroupItem
});

// src/molecules/Tooltip/Tooltip.tsx
var import_tamagui51 = require("tamagui");
var import_react49 = __toESM(require("react"));
var import_jsx_runtime54 = require("react/jsx-runtime");
var TooltipContent = (0, import_tamagui51.styled)(import_tamagui51.Tooltip.Content, {
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
var TooltipArrow = (0, import_tamagui51.styled)(import_tamagui51.Tooltip.Arrow, {
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
var TooltipTrigger = import_tamagui51.Tooltip.Trigger;
var Tooltip = import_react49.default.forwardRef(({ children, content, isLoading = false, hasError = false, isDisabled = false, actions, ...props }, _ref) => {
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Skeleton, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(import_tamagui51.Tooltip, { ...props, disabled: isDisabled, children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(TooltipTrigger, { asChild: true, children }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_tamagui51.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(TooltipContent, { hasError, children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(TooltipArrow, { hasError }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(import_tamagui51.YStack, { gap: "$2", children: [
        typeof content === "string" ? /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_tamagui51.Paragraph, { size: "$2", children: content }) : content,
        actions && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_tamagui51.XStack, { gap: "$2", children: actions })
      ] })
    ] }) })
  ] });
});
Tooltip.displayName = "Tooltip";

// src/molecules/Stepper/Stepper.tsx
var import_tamagui53 = require("tamagui");

// src/molecules/Stepper/Stepper.context.tsx
var import_react50 = require("react");
var import_tamagui52 = require("tamagui");
var import_jsx_runtime55 = require("react/jsx-runtime");
var StepperContext = (0, import_react50.createContext)(null);
var StepperContextProvider = ({
  steps,
  isLoading,
  hasError,
  isDisabled,
  children,
  actions
}) => {
  const [currentStep, setCurrentStep] = (0, import_react50.useState)(0);
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
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
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(StepperContext.Provider, { value, children });
};
var useStepper = () => {
  const context = (0, import_react50.useContext)(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperContextProvider");
  }
  return context;
};
var Stepper = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_tamagui52.YStack, { children });
};

// src/molecules/Stepper/Stepper.tsx
var import_jsx_runtime56 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_tamagui53.YStack, { space: "$2", "data-testid": "skeleton-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Skeleton, { height: 28, width: 250 }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Skeleton, { height: 120 }),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_tamagui53.XStack, { justifyContent: "space-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Skeleton, { height: 44, width: 110 }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Skeleton, { height: 44, width: 110 })
      ] })
    ] });
  }
  if (!steps || steps.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_tamagui53.Text, { children: "N\xE3o h\xE1 passos para exibir." });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_tamagui53.YStack, { space: "$4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      import_tamagui53.Text,
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
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      import_tamagui53.YStack,
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
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_tamagui53.XStack, { justifyContent: "space-between", children: actions(nextStep, prevStep, isFirstStep, isLastStep, isDisabled) })
  ] });
};
var Stepper2 = ({
  steps,
  isLoading = false,
  hasError = false,
  isDisabled = false,
  actions
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    StepperContextProvider,
    {
      steps,
      isLoading,
      hasError,
      isDisabled,
      actions,
      children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Stepper, { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(StepperContent, {}) })
    }
  );
};

// src/molecules/AvatarGroup/AvatarGroup.tsx
var import_tamagui54 = require("tamagui");
var import_jsx_runtime57 = require("react/jsx-runtime");
var AVATAR_GROUP_ITEM_BORDER_WIDTH = 2;
var AvatarGroupFrame = (0, import_tamagui54.styled)(import_tamagui54.XStack, {
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
var AvatarGroupItemFrame = (0, import_tamagui54.styled)(import_tamagui54.XStack, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AvatarGroupFrame, { size, ...rest, "data-testid": "avatar-group-frame", children: Array.from({ length: limit }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
      AvatarGroupItemFrame,
      {
        size,
        zIndex: limit - index,
        "data-testid": `avatar-group-skeleton-${index}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Skeleton, { circular: true, width: "100%", height: "100%" })
      },
      `skeleton-${index}`
    )) });
  }
  if (items.length === 0) {
    return null;
  }
  const visibleItems = items.slice(0, limit);
  const remainingCount = Math.max(0, items.length - limit);
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(AvatarGroupFrame, { size, ...rest, "data-testid": "avatar-group-frame", children: [
    visibleItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
      AvatarGroupItemFrame,
      {
        size,
        zIndex: visibleItems.length - index,
        hasError,
        "data-testid": `avatar-group-item-${index}`,
        "data-haserror": hasError,
        children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(Avatar, { size, children: [
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AvatarImage, { alt: item.alt ?? item.fallback, src: item.src }),
          /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AvatarFallback, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_tamagui54.Text, { children: item.fallback }) })
        ] })
      },
      `avatar-${index}`
    )),
    remainingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
      AvatarGroupItemFrame,
      {
        size,
        zIndex: 0,
        hasError,
        "data-testid": "avatar-group-remainder",
        "data-haserror": hasError,
        children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Avatar, { size, children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(AvatarFallback, { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(import_tamagui54.Text, { size: "$4", fontWeight: "bold", children: [
          "+",
          remainingCount
        ] }) }) })
      }
    )
  ] });
};

// src/molecules/BadgeCounter/BadgeCounter.tsx
var import_react51 = require("react");
var import_tamagui55 = require("tamagui");
var import_jsx_runtime58 = require("react/jsx-runtime");
var BadgeCounterFrame = (0, import_tamagui55.styled)(import_tamagui55.XStack, {
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
var BadgeCounterContent = (0, import_tamagui55.styled)(import_tamagui55.YStack, {
  name: "BadgeCounterContent",
  flex: 1
});
var BadgePosition = (0, import_tamagui55.styled)(import_tamagui55.YStack, {
  name: "BadgePosition",
  position: "absolute",
  zIndex: 1,
  top: -5,
  right: -5
});
var BadgeCounter = (0, import_react51.forwardRef)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Skeleton, { width: "$10", height: "$10", borderRadius: "$10" });
    }
    const shouldShowBadge = showZero || count > 0;
    const displayCount = count > max ? `${max}+` : count;
    return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(BadgeCounterFrame, { ref, hasError, disabled, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(BadgeCounterContent, { children }),
      shouldShowBadge && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(BadgePosition, { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Badge, { variant: "destructive", size: "sm", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(BadgeText, { variant: "destructive", size: "sm", children: displayCount }) }) })
    ] });
  }
);
BadgeCounter.displayName = "BadgeCounter";

// src/organisms/Autocomplete/Autocomplete.tsx
var import_lucide_icons21 = require("@tamagui/lucide-icons");
var import_react52 = require("react");
var import_tamagui56 = require("tamagui");
var import_jsx_runtime59 = require("react/jsx-runtime");
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
  const [open, setOpen] = (0, import_react52.useState)(false);
  const [search, setSearch] = (0, import_react52.useState)("");
  const filteredOptions = (0, import_react52.useMemo)(() => {
    if (!search) return options;
    return options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()));
  }, [options, search]);
  const handleSelect = (option) => {
    onValueChange?.(option);
    setOpen(false);
    setSearch("");
  };
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Skeleton, { width: "100%", height: 40 });
  }
  if (hasError) {
    return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_tamagui56.YStack, { gap: "$2", alignItems: "center", padding: "$4", backgroundColor: "$red2", borderRadius: "$4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_lucide_icons21.XCircle, { color: "$red10" }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_tamagui56.Text, { color: "$red10", children: errorMessage })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(Popover, { open, onOpenChange: setOpen, placement: "bottom-start", children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
      Button,
      {
        role: "combobox",
        "aria-expanded": open,
        justifyContent: "space-between",
        width: "100%",
        iconAfter: import_lucide_icons21.ChevronDown,
        flex: 1,
        children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_tamagui56.Text, { numberOfLines: 1, ellipse: true, children: value ? value.label : placeholder })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(PopoverContent, { padding: 0, width: "100%", minWidth: 200, children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_tamagui56.YStack, { padding: "$2", borderBottomWidth: 1, borderBottomColor: "$borderColor", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Input, { placeholder: "Buscar...", value: search, onChangeText: setSearch }) }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_tamagui56.ScrollView, { maxHeight: 200, keyboardShouldPersistTaps: "handled", children: filteredOptions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_tamagui56.YStack, { gap: "$2", padding: "$4", alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_tamagui56.Text, { color: "$color11", children: emptyMessage }) }) : /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_tamagui56.YGroup, { children: filteredOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_tamagui56.YGroup.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
        import_tamagui56.ListItem,
        {
          hoverTheme: true,
          pressTheme: true,
          onPress: () => handleSelect(option),
          icon: value?.value === option.value ? import_lucide_icons21.Check : void 0,
          children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_tamagui56.Text, { children: option.label })
        }
      ) }, option.value)) }) })
    ] })
  ] });
};

// src/organisms/Form/Form.tsx
var React52 = __toESM(require("react"));
var import_react_hook_form = require("react-hook-form");
var import_tamagui57 = require("tamagui");
var import_jsx_runtime60 = require("react/jsx-runtime");
var Form = import_react_hook_form.FormProvider;
var FormFieldContext = React52.createContext(null);
var FormField = ({
  ...props
}) => {
  const contextValue = React52.useMemo(() => ({ name: props.name }), [props.name]);
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(FormFieldContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react_hook_form.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React52.useContext(FormFieldContext);
  const itemContext = React52.useContext(FormItemContext);
  const { getFieldState, formState } = (0, import_react_hook_form.useFormContext)();
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
var FormRoot = (0, import_tamagui57.styled)(import_tamagui57.YStack, {
  name: "FormRoot",
  gap: "$4"
});
var FormFooter = (0, import_tamagui57.styled)(import_tamagui57.YStack, {
  name: "FormFooter",
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: "$2"
});
var FormItemFrame = (0, import_tamagui57.styled)(import_tamagui57.YStack, {
  name: "FormItem",
  space: "$sm"
});
var FormItem = React52.forwardRef(
  ({ ...props }, ref) => {
    const id = React52.useId();
    const contextValue = React52.useMemo(() => ({ id }), [id]);
    return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(FormItemContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(FormItemFrame, { ref, ...props }) });
  }
);
FormItem.displayName = "FormItem";
var FormLabelFrame = (0, import_tamagui57.styled)(Label, {
  name: "FormLabel",
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
    return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
      import_tamagui57.View,
      {
        ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
      }
    );
  }
);
FormControl.displayName = "FormControl";
var FormDescriptionFrame = (0, import_tamagui57.styled)(import_tamagui57.Text, {
  name: "FormDescription",
  fontSize: "$2",
  color: "$mutedForeground"
});
var FormDescription = React52.forwardRef(
  ({ ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
var FormMessageFrame = (0, import_tamagui57.styled)(import_tamagui57.Text, {
  name: "FormMessage",
  fontSize: "$2",
  fontWeight: "500",
  color: "$destructive"
});
var FormMessage = React52.forwardRef(
  ({ children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
      FormMessageFrame,
      {
        ref,
        id: formMessageId,
        ...props,
        children: body
      }
    );
  }
);
FormMessage.displayName = "FormMessage";

// src/organisms/RichText/RichText.tsx
var import_react53 = require("@tiptap/react");
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
var import_lucide_icons22 = require("@tamagui/lucide-icons");
var import_tamagui58 = require("tamagui");
var import_isomorphic_dompurify = __toESM(require("isomorphic-dompurify"));
var import_jsx_runtime61 = require("react/jsx-runtime");
var EditorContainer = (0, import_tamagui58.styled)(import_tamagui58.YStack, {
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
var EditorContentContainer = (0, import_tamagui58.styled)(import_tamagui58.ScrollView, {
  name: "EditorContentContainer",
  minHeight: 150,
  padding: "$3"
});
var Toolbar = (0, import_tamagui58.styled)(import_tamagui58.XStack, {
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
    { name: "bold", icon: import_lucide_icons22.Bold, label: "Negrito" },
    { name: "italic", icon: import_lucide_icons22.Italic, label: "It\xE1lico" },
    { name: "strike", icon: import_lucide_icons22.Strikethrough, label: "Riscado" }
  ];
  const headingItems = [
    { level: 1, icon: import_lucide_icons22.Heading1, label: "T\xEDtulo 1" },
    { level: 2, icon: import_lucide_icons22.Heading2, label: "T\xEDtulo 2" },
    { level: 3, icon: import_lucide_icons22.Heading3, label: "T\xEDtulo 3" }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(Toolbar, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
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
        children: toggleGroupItems.map(({ name, icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Tooltip, { placement: "top", content: label, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(ToggleGroupItem, { value: name, "aria-label": label, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Icon, { size: 16 }) }) }, name))
      }
    ),
    headingItems.map(({ level, icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Tooltip, { placement: "top", content: label, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
      Button,
      {
        variant: editor.isActive("heading", { level }) ? "secondary" : "ghost",
        onPress: () => editor.chain().focus().toggleHeading({ level }).run(),
        "aria-label": label,
        children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Icon, { size: 16 })
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
  const editor = (0, import_react53.useEditor)({
    extensions: [import_starter_kit.default],
    content: value,
    editable: !isLoading && editable,
    onUpdate: ({ editor: editor2 }) => {
      if (onChange) {
        const rawHtml = editor2.getHTML();
        const cleanHtml = import_isomorphic_dompurify.default.sanitize(rawHtml);
        onChange(cleanHtml);
      }
    }
  });
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_tamagui58.YStack, { gap: "$2", ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Skeleton, { height: 40 }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Skeleton, { height: 150 })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(EditorContainer, { hasError, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(RichTextToolbar, { editor }),
    headerActions,
    /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(EditorContentContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_react53.EditorContent, { editor }) })
  ] });
};
var RichText = (0, import_tamagui58.withStaticProperties)(RichTextFrame, {});

// src/organisms/DataTable/DataTable.tsx
var import_lucide_icons24 = require("@tamagui/lucide-icons");
var import_react55 = require("react");
var import_react_table = require("@tanstack/react-table");
var import_tamagui62 = require("tamagui");

// src/molecules/Empty/Empty.tsx
var import_lucide_icons23 = require("@tamagui/lucide-icons");
var import_tamagui59 = require("tamagui");
var import_react54 = require("react");
var import_tamagui60 = require("tamagui");
var import_jsx_runtime62 = require("react/jsx-runtime");
var EmptyFrame = (0, import_tamagui59.styled)(import_tamagui59.YStack, {
  name: "Empty",
  alignItems: "center",
  justifyContent: "center",
  padding: "$4",
  gap: "$2"
});
var EmptyIconFrame = (0, import_tamagui59.styled)(import_tamagui59.YStack, {
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
var EmptyTitle = (0, import_tamagui59.styled)(import_tamagui59.Text, {
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
var EmptyDescription = (0, import_tamagui59.styled)(import_tamagui59.Text, {
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
var EmptySkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(EmptyFrame, { "data-testid": "empty-skeleton", children: [
  /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Skeleton, { width: 64, height: 64, borderRadius: 100 }),
  /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_tamagui59.YStack, { gap: "$1", alignItems: "center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Skeleton, { width: 120, height: 20 }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Skeleton, { width: 240, height: 15 })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Skeleton, { width: 100, height: 40, marginTop: "$2" })
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
    return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(EmptySkeleton, {});
  }
  let content;
  if (image) {
    content = /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
      import_tamagui59.Image,
      {
        source: { uri: image },
        width: 200,
        height: 150,
        resizeMode: "contain",
        ...imageProps
      }
    );
  } else {
    const iconElement = icon ? (0, import_react54.cloneElement)(icon, {
      size: 32,
      color: hasError ? "$red10" : "$gray10"
    }) : /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_lucide_icons23.Ban, { size: 32, color: hasError ? "$red10" : "$gray10" });
    content = /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(EmptyIconFrame, { hasError, "data-testid": "empty-icon-frame", "data-has-error": hasError, children: iconElement });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(EmptyFrame, { ...props, children: [
    content,
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_tamagui59.YStack, { gap: "$1", alignItems: "center", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(EmptyTitle, { hasError, children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(EmptyDescription, { hasError, children: description })
    ] }),
    actions && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_tamagui60.XStack, { marginTop: "$2", children: actions })
  ] });
};

// src/organisms/DataTable/DataTable.parts.tsx
var import_tamagui61 = require("tamagui");
var MIN_COLUMN_WIDTH = 100;
var BORDER_WIDTH = 1;
var TableContainer = (0, import_tamagui61.styled)(import_tamagui61.YStack, {
  name: "TableContainer",
  borderColor: "$borderColor",
  borderWidth: BORDER_WIDTH,
  borderRadius: "$4",
  overflow: "hidden"
});
var TableHeader = (0, import_tamagui61.styled)(import_tamagui61.YStack, {
  name: "TableHeader",
  backgroundColor: "$background",
  borderBottomWidth: BORDER_WIDTH,
  borderColor: "$borderColor"
});
var TableRow = (0, import_tamagui61.styled)(import_tamagui61.XStack, {
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
var TableHeadText = (0, import_tamagui61.styled)(import_tamagui61.Text, {
  name: "TableHeadText",
  color: "$color",
  fontSize: "$2",
  fontWeight: "600"
});
var TableCellText = (0, import_tamagui61.styled)(import_tamagui61.Text, {
  name: "TableCellText",
  color: "$color",
  fontSize: "$2"
});
var TableCellFrame = (0, import_tamagui61.styled)(import_tamagui61.View, {
  name: "TableCellFrame",
  flex: 1,
  minWidth: MIN_COLUMN_WIDTH
});
var NoResultsCell = (0, import_tamagui61.styled)(import_tamagui61.View, {
  name: "NoResultsCell",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: "$4"
});
var HeaderActionsContainer = (0, import_tamagui61.styled)(import_tamagui61.XStack, {
  name: "HeaderActionsContainer",
  paddingHorizontal: "$4",
  paddingBottom: "$3",
  justifyContent: "flex-end"
});

// src/organisms/DataTable/DataTable.tsx
var import_jsx_runtime63 = require("react/jsx-runtime");
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
  if ((0, import_react55.isValidElement)(content)) return content;
  const Wrapper = isHeader ? TableHeadText : TableCellText;
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(Wrapper, { children: content });
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
  const [sorting, setSorting] = (0, import_react55.useState)([]);
  const [columnFilters, setColumnFilters] = (0, import_react55.useState)([]);
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
  const safeData = (0, import_react55.useMemo)(() => [...data ?? []], [data]);
  const safeColumns = (0, import_react55.useMemo)(() => columns, [columns]);
  const table = (0, import_react_table.useReactTable)({
    data: safeData,
    columns: safeColumns,
    getCoreRowModel: (0, import_react_table.getCoreRowModel)(),
    getPaginationRowModel: (0, import_react_table.getPaginationRowModel)(),
    onSortingChange: setSorting,
    getSortedRowModel: (0, import_react_table.getSortedRowModel)(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: (0, import_react_table.getFilteredRowModel)(),
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
      return Array.from({ length: table.getState().pagination.pageSize }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(TableRow, { tag: "tr", children: columns.map((_2, j) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(TableCellFrame, { tag: "td", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(Skeleton, { height: "$4" }) }, `skeleton-cell-${j}`)) }, `skeleton-${i}`));
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(TableRow, { tag: "tr", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(NoResultsCell, { tag: "td", ...{ colSpan: columns.length }, children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
        Empty,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_lucide_icons24.AlertCircle, { size: "$5", color: "$red10" }),
          title: localization.errorTitle,
          body: localization.errorBody,
          action: onRetry && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(Button, { variant: "outline", onPress: onRetry, children: localization.retry })
        }
      ) }) });
    }
    if (rows.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(TableRow, { tag: "tr", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(NoResultsCell, { tag: "td", ...{ colSpan: columns.length }, children: emptyState || /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
        Empty,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_lucide_icons24.Inbox, { size: "$5", color: "$gray10" }),
          title: localization.noResults
        }
      ) }) });
    }
    return rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(TableRow, { "data-state": row.getIsSelected() && "selected", tag: "tr", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(TableCellFrame, { tag: "td", children: renderCellContent((0, import_react_table.flexRender)(cell.column.columnDef.cell, cell.getContext()), false) }, cell.id)) }, row.id));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(import_tamagui62.YStack, { gap: "$3", children: [
    headerActions && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(HeaderActionsContainer, { children: headerActions }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(TableContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_tamagui62.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: true, children: /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(import_tamagui62.YStack, { minWidth: "100%", tag: "table", "aria-label": "Data table", children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(TableHeader, { tag: "thead", children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(TableRow, { tag: "tr", children: headerGroup.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(TableCellFrame, { tag: "th", children: header.isPlaceholder ? null : renderCellContent((0, import_react_table.flexRender)(header.column.columnDef.header, header.getContext()), true) }, header.id)) }, headerGroup.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_tamagui62.YStack, { tag: "tbody", children: renderTableBody() })
    ] }) }) }),
    showPagination && table.getPageCount() > 1 && /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(import_tamagui62.XStack, { paddingVertical: "$3", paddingHorizontal: "$4", alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_tamagui62.YStack, { flex: 1 }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(import_tamagui62.XStack, { alignItems: "center", justifyContent: "flex-end", gap: "$2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_tamagui62.Text, { fontSize: "$2", color: "$color", children: localization.pageOf(
          table.getState().pagination.pageIndex + 1,
          table.getPageCount()
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
          Button,
          {
            variant: "outline",
            size: "$2",
            onPress: () => table.previousPage(),
            disabled: !table.getCanPreviousPage(),
            children: localization.previousPage
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
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
var import_lucide_icons25 = require("@tamagui/lucide-icons");
var import_embla_carousel_react = __toESM(require("embla-carousel-react"));
var import_react56 = __toESM(require("react"));
var import_tamagui63 = require("tamagui");
var import_jsx_runtime64 = require("react/jsx-runtime");
var CarouselContext = import_react56.default.createContext(null);
function useCarousel() {
  const context = import_react56.default.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var CarouselFrame = (0, import_tamagui63.styled)(import_tamagui63.YStack, {
  name: "CarouselFrame",
  position: "relative",
  width: "100%"
});
var CarouselContentFrame = (0, import_tamagui63.styled)(import_tamagui63.XStack, {
  name: "CarouselContent"
  // Negative margin is applied here to counteract item padding
});
var CarouselItemFrame = (0, import_tamagui63.styled)(import_tamagui63.YStack, {
  name: "CarouselItem",
  minWidth: 0,
  flex: "0 0 100%",
  position: "relative"
});
var CarouselNavButton = (0, import_tamagui63.styled)(Button, {
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
var StateContainer = (0, import_tamagui63.styled)(import_tamagui63.YStack, {
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
  const [carouselRef, api] = (0, import_embla_carousel_react.default)(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = (0, import_react56.useState)(false);
  const [canScrollNext, setCanScrollNext] = (0, import_react56.useState)(false);
  const onSelect = (0, import_react56.useCallback)((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = (0, import_react56.useCallback)(() => api?.scrollPrev(), [api]);
  const scrollNext = (0, import_react56.useCallback)(() => api?.scrollNext(), [api]);
  (0, import_react56.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(CarouselContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(CarouselFrame, { role: "region", "aria-roledescription": "carousel", ...props, children }) });
};
Carousel.displayName = "Carousel";
var CarouselContent = import_react56.default.forwardRef(
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
        return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_tamagui63.XStack, { space: "$2", width: "100%", pl: "$2", children: Array.from({ length: 3 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(CarouselItem, { flexBasis: "33.33%", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(import_tamagui63.YStack, { flex: 1, space: "$2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(Skeleton, { height: 150 }),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(Skeleton, { height: 20 }),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(Skeleton, { height: 20, width: "75%" })
        ] }) }, index)) });
      }
      if (error) {
        return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(StateContainer, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_lucide_icons25.HelpCircle, { size: "$4", color: "$red10" }),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_tamagui63.Text, { color: "$red10", textAlign: "center", children: error })
        ] });
      }
      if (!data || data.length === 0) {
        return emptyState || /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(StateContainer, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_lucide_icons25.HelpCircle, { size: "$4", color: "$gray10" }),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_tamagui63.Text, { color: "$gray10", textAlign: "center", children: "Nenhum item para exibir." })
        ] });
      }
      return data.map((item, index) => renderItem(item, index));
    };
    return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_tamagui63.View, { ref: carouselRef, overflow: "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
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
var CarouselItem = import_react56.default.forwardRef(
  (props, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
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
var CarouselPrevious = import_react56.default.forwardRef((props, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
    CarouselNavButton,
    {
      ref,
      side: "prev",
      disabled: !canScrollPrev,
      onPress: scrollPrev,
      icon: import_lucide_icons25.ChevronLeft,
      "aria-label": "Slide anterior",
      ...props
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react56.default.forwardRef((props, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
    CarouselNavButton,
    {
      ref,
      side: "next",
      disabled: !canScrollNext,
      onPress: scrollNext,
      icon: import_lucide_icons25.ChevronRight,
      "aria-label": "Pr\xF3ximo slide",
      ...props
    }
  );
});
CarouselNext.displayName = "CarouselNext";

// src/organisms/Command/Command.tsx
var import_react57 = __toESM(require("react"));
var import_cmdk = require("cmdk");
var import_tamagui64 = require("tamagui");
var import_lucide_icons26 = require("@tamagui/lucide-icons");
var import_jsx_runtime65 = require("react/jsx-runtime");
var CommandFrame = (0, import_tamagui64.styled)(import_tamagui64.YStack, {
  name: "Command",
  overflow: "hidden",
  backgroundColor: "$background",
  borderRadius: "$md",
  width: "100%",
  height: "100%"
});
var Command = import_react57.default.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(CommandFrame, { ref, asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_cmdk.Command, { className, ...props }) });
  }
);
Command.displayName = import_cmdk.Command.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Dialog, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(DialogContentComposite, { p: "$0", overflow: "hidden", maw: 600, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Command, { children }) }) });
};
var CommandInputFrame = (0, import_tamagui64.styled)(import_tamagui64.XStack, {
  name: "CommandInput",
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: "$borderColor",
  paddingHorizontal: "$3",
  gap: "$2"
});
var StyledCommandInput = (0, import_tamagui64.styled)(import_cmdk.Command.Input, {
  flex: 1,
  height: "$11",
  fontSize: "$4",
  outlineStyle: "none",
  borderWidth: 0,
  backgroundColor: "transparent",
  color: "$color"
});
var CommandInput = import_react57.default.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(CommandInputFrame, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_lucide_icons26.Search, { size: "$1", color: "$color10" }),
      /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(StyledCommandInput, { ref, ...props })
    ] });
  }
);
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_tamagui64.YStack, { gap: "$2", p: "$1", children: [
  /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Skeleton, { height: "$4", width: "80%" }),
  /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Skeleton, { height: "$4", width: "60%" }),
  /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(Skeleton, { height: "$4", width: "90%" })
] });
var CommandError = ({ message }) => /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_tamagui64.YStack, { ai: "center", jc: "center", gap: "$2", p: "$4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_lucide_icons26.AlertTriangle, { color: "$red10" }),
  /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_tamagui64.Text, { color: "$red10", fontSize: "$4", children: message })
] });
var CommandListFrame = (0, import_tamagui64.styled)(import_tamagui64.YStack, {
  name: "CommandList",
  maxHeight: "$15",
  // 300px
  overflowY: "auto",
  overflowX: "hidden"
});
var CommandList = import_react57.default.forwardRef(
  ({ children, isLoading = false, error = null, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(CommandListFrame, { ref, children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(CommandSkeleton, {}) : error ? /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(CommandError, { message: error }) : /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_cmdk.Command.List, { ...props, children }) })
);
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmptyContainer = (0, import_tamagui64.styled)(import_tamagui64.YStack, {
  padding: "$6",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2"
});
var CommandEmptyText = (0, import_tamagui64.styled)(import_tamagui64.Text, {
  fontSize: "$4",
  color: "$color10"
});
var CommandEmpty = import_react57.default.forwardRef(
  ({ title = "Nenhum resultado encontrado.", icon = /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_lucide_icons26.PackageSearch, {}), ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_cmdk.Command.Empty, { ref, asChild: true, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(CommandEmptyContainer, { children: [
    icon,
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(CommandEmptyText, { children: title })
  ] }) })
);
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroupFrame = (0, import_tamagui64.styled)(import_tamagui64.YStack, {
  overflow: "hidden",
  padding: "$1"
});
var CommandGroup = import_react57.default.forwardRef(({ heading, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(CommandGroupFrame, { ref, asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_cmdk.Command.Group, { heading, ...props }) }));
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparatorFrame = (0, import_tamagui64.styled)(import_tamagui64.YStack, {
  height: "$px",
  backgroundColor: "$borderColor",
  margin: "-$1"
});
var CommandSeparator = import_react57.default.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(CommandSeparatorFrame, { ref, asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_cmdk.Command.Separator, { ...props }) })
);
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItemFrame = (0, import_tamagui64.styled)(import_tamagui64.XStack, {
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
var CommandItem = import_react57.default.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(CommandItemFrame, { ref, asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_cmdk.Command.Item, { ...props }) })
);
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = (0, import_tamagui64.styled)(import_tamagui64.Text, {
  marginLeft: "auto",
  fontSize: "$2",
  color: "$color11"
});

// src/organisms/Sidebar/Sidebar.tsx
var import_react58 = require("react");
var import_tamagui65 = require("tamagui");
var import_lucide_icons27 = require("@tamagui/lucide-icons");
var import_jsx_runtime66 = require("react/jsx-runtime");
var Button6 = Button;
var YStack42 = import_tamagui65.YStack;
var ScrollView4 = import_tamagui65.ScrollView;
var Text29 = import_tamagui65.Text;
var Skeleton3 = Skeleton;
var ChevronLeft4 = import_lucide_icons27.ChevronLeft;
var ChevronRight7 = import_lucide_icons27.ChevronRight;
var MenuSquare = import_lucide_icons27.MenuSquare;
var AlertCircle2 = import_lucide_icons27.AlertCircle;
var Inbox2 = import_lucide_icons27.Inbox;
var SidebarContainer = (0, import_tamagui65.styled)(YStack42, {
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
var SidebarHeader = (0, import_tamagui65.styled)(YStack42, {
  name: "SidebarHeader"
});
var SidebarContent = (0, import_tamagui65.styled)(YStack42, {
  name: "SidebarContent",
  f: 1
});
var SidebarFooter = (0, import_tamagui65.styled)(YStack42, {
  name: "SidebarFooter"
});
var SidebarSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(YStack42, { gap: "$4", padding: "$4", width: "100%", children: [
  /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Skeleton3, { height: "$10" }),
  /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(YStack42, { gap: "$3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Skeleton3, { height: "$8" }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Skeleton3, { height: "$8" }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Skeleton3, { height: "$8" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(YStack42, { flex: 1 }),
  /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Skeleton3, { height: "$10" })
] });
var EmptyState = ({ message }) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(YStack42, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Inbox2, { size: "$2", color: "$gray10" }),
  /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Text29, { color: "$gray11", fontSize: "$3", children: message })
] });
var ErrorState = ({ message }) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(YStack42, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", children: [
  /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(AlertCircle2, { size: "$2", color: "$red10" }),
  /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Text29, { color: "$red10", fontSize: "$3", textAlign: "center", children: message })
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
  const [isCollapsedInternal, setIsCollapsedInternal] = (0, import_react58.useState)(false);
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
    return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(SidebarContainer, { collapsed: isCollapsible && isCollapsed, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(SidebarSkeleton, {}) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
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
        header && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(SidebarHeader, { children: header }),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_tamagui65.Separator, {}),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(SidebarContent, { children: error ? /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ErrorState, { message: error }) : isEmpty ? /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(EmptyState, { message: emptyMessage }) : /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ScrollView4, { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(YStack42, { gap: "$2", children }) }) }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(import_jsx_runtime66.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_tamagui65.Separator, {}),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(SidebarFooter, { children: footer })
        ] }),
        isCollapsible && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          Button6,
          {
            onPress: toggleSidebar,
            circular: true,
            size: "sm",
            position: "absolute",
            top: 20,
            right: -15,
            zIndex: 20,
            children: isCollapsed ? /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ChevronRight7, { size: "$1.5" }) : /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ChevronLeft4, { size: "$1.5" })
          }
        )
      ]
    }
  );
};
var MobileSidebar = ({ children, header, footer, isLoading, isEmpty, emptyMessage = "Sem conte\xFAdo", error }) => {
  const [open, setOpen] = (0, import_react58.useState)(false);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(SidebarSkeleton, {});
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ErrorState, { message: error });
    }
    if (isEmpty) {
      return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(EmptyState, { message: emptyMessage });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(import_jsx_runtime66.Fragment, { children: [
      header && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(SidebarHeader, { children: header }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(ScrollView4, { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(YStack42, { gap: "$2", children }) }),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(YStack42, { flex: 1 }),
      footer && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(SidebarFooter, { children: footer })
    ] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(Sheet, { open, onOpenChange: setOpen, modal: true, snapPoints: [90], children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Sheet.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Button6, { circular: true, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(MenuSquare, { size: "$1.5" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Sheet.Content, { alignItems: "flex-start", justifyContent: "flex-start", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(YStack42, { gap: "$4", paddingTop: "$6", paddingHorizontal: "$4", flex: 1, height: "100%", width: 300, backgroundColor: "$background", children: [
      renderContent(),
      /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Button6, { onPress: () => setOpen(false), chromeless: true, children: "Fechar" })
    ] }) })
  ] });
};
var Sidebar = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(import_jsx_runtime66.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(YStack42, { display: "none", $sm: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(MobileSidebar, { ...props }) }),
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(YStack42, { display: "flex", $sm: { display: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(DesktopSidebar, { ...props }) })
  ] });
};

// src/organisms/BarChart/BarChart.tsx
var import_tamagui66 = require("tamagui");
var import_recharts = require("recharts");
var import_lucide_icons28 = require("@tamagui/lucide-icons");
var import_react59 = __toESM(require("react"));
var import_jsx_runtime67 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui66.useTheme)();
  const themeColor = theme[color];
  const barColor = themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const chartData = import_react59.default.useMemo(() => data ? [...data] : [], [data]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(import_tamagui66.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_lucide_icons28.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_tamagui66.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!chartData || chartData.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(import_tamagui66.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, backgroundColor: "$background", children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_lucide_icons28.BarChart3, { color: "$gray8", size: 32 }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_tamagui66.Text, { color: "$gray10", children: "Nenhum dado dispon\xEDvel" })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_tamagui66.YStack, { width: "100%", height, children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_recharts.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(import_recharts.BarChart, { data: chartData, margin: { top: 20, right: 30, left: 20, bottom: 5 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_recharts.CartesianGrid, { strokeDasharray: "3 3", vertical: false, stroke: gridColor }),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
        import_recharts.XAxis,
        {
          dataKey: xKey,
          stroke: axisColor,
          tick: { fill: textColor, fontSize: 12 },
          tickLine: false,
          axisLine: { stroke: axisColor }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
        import_recharts.YAxis,
        {
          stroke: axisColor,
          tick: { fill: textColor, fontSize: 12 },
          tickLine: false,
          axisLine: false
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
        import_recharts.Tooltip,
        {
          cursor: { fill: "transparent" },
          contentStyle: { borderRadius: "8px", border: `1px solid ${gridColor}` }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_recharts.Bar, { dataKey: yKey, fill: barColor, radius: [4, 4, 0, 0] })
    ] }) }) });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(import_tamagui66.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};
var ColumnChart = BarChart;
var Charts = BarChart;

// src/organisms/LineChart/LineChart.tsx
var import_react60 = __toESM(require("react"));
var import_tamagui67 = require("tamagui");
var import_recharts2 = require("recharts");
var import_lucide_icons29 = require("@tamagui/lucide-icons");
var import_jsx_runtime68 = require("react/jsx-runtime");
var LineChartContainer = (0, import_tamagui67.styled)(import_tamagui67.YStack, {
  name: "LineChart",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  tag: "section"
});
var Header = (0, import_tamagui67.styled)(import_tamagui67.XStack, {
  justifyContent: "space-between",
  alignItems: "center",
  gap: "$2"
});
var ChartContainer = (0, import_tamagui67.styled)(import_tamagui67.YStack, {
  flex: 1,
  minHeight: 300,
  justifyContent: "center",
  alignItems: "center"
});
var StateContainer2 = (0, import_tamagui67.styled)(import_tamagui67.YStack, {
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
  const theme = (0, import_tamagui67.useTheme)();
  const themeColor = theme[color];
  const lineColor = themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const chartData = import_react60.default.useMemo(() => data ? [...data] : [], [data]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(Skeleton, { width: "100%", height: 300 });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(StateContainer2, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_lucide_icons29.AlertCircle, { color: "$red10", size: "$2" }),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_tamagui67.Text, { color: "$red10", children: "Erro ao carregar os dados." }),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_tamagui67.Text, { fontSize: "$2", color: "$color11", children: error })
      ] });
    }
    if (!chartData || chartData.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(StateContainer2, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_lucide_icons29.Inbox, { size: "$2" }),
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_tamagui67.Text, { children: "Sem dados para exibir" })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(ChartContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_recharts2.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
      import_recharts2.LineChart,
      {
        data: chartData,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_recharts2.CartesianGrid, { strokeDasharray: "3 3", stroke: gridColor, vertical: false }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
            import_recharts2.XAxis,
            {
              dataKey: xKey,
              stroke: axisColor,
              tick: { fill: textColor },
              tickLine: false,
              axisLine: false
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
            import_recharts2.YAxis,
            {
              stroke: axisColor,
              tick: { fill: textColor },
              tickLine: false,
              axisLine: false
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
            import_recharts2.Tooltip,
            {
              contentStyle: {
                backgroundColor: theme.background?.get() || "#fff",
                borderColor: gridColor,
                borderRadius: 8
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
            import_recharts2.Line,
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
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(LineChartContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(Header, { children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_tamagui67.Text, { fontSize: "$5", children: title }),
      headerActions
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(ChartContainer, { children: renderContent() }),
    footerContent
  ] });
};
var TimeSeriesChart = LineChart;

// src/organisms/PieChart/PieChart.tsx
var import_react61 = __toESM(require("react"));
var import_tamagui68 = require("tamagui");
var import_recharts3 = require("recharts");
var import_lucide_icons30 = require("@tamagui/lucide-icons");
var import_jsx_runtime69 = require("react/jsx-runtime");
var PieChartContainer = (0, import_tamagui68.styled)(import_tamagui68.YStack, {
  name: "PieChart",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  alignItems: "center",
  tag: "section"
});
var ChartWrapper = (0, import_tamagui68.styled)(import_tamagui68.YStack, {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: 300
});
var StateContainer3 = (0, import_tamagui68.styled)(import_tamagui68.YStack, {
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
  const theme = (0, import_tamagui68.useTheme)();
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
  const chartData = import_react61.default.useMemo(() => data ? [...data] : [], [data]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(Skeleton, { width: "100%", height });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(StateContainer3, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_lucide_icons30.AlertCircle, { color: "$red10", size: "$2" }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_tamagui68.Text, { color: "$red10", children: "Erro ao carregar os dados." }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_tamagui68.Text, { fontSize: "$2", color: "$color11", children: error })
      ] });
    }
    if (!chartData || chartData.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(StateContainer3, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_lucide_icons30.Inbox, { size: "$2" }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_tamagui68.Text, { children: "Sem dados para exibir" })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_tamagui68.YStack, { width: "100%", height, children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_recharts3.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(import_recharts3.PieChart, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
        import_recharts3.Pie,
        {
          data: chartData,
          dataKey: yKey,
          nameKey: xKey,
          cx: "50%",
          cy: "50%",
          innerRadius,
          outerRadius,
          paddingAngle: 2,
          children: chartData.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_recharts3.Cell, { fill: colorScale[index % colorScale.length] }, `cell-${index}`))
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
        import_recharts3.Tooltip,
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
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(PieChartContainer, { children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_tamagui68.Text, { fontSize: "$5", fontWeight: "bold", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(ChartWrapper, { children: renderContent() }),
    footerContent
  ] });
};
var DonutChart = (props) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(PieChart, { ...props, variant: "donut" });

// src/organisms/AreaChart/AreaChart.tsx
var import_react62 = __toESM(require("react"));
var import_tamagui69 = require("tamagui");
var import_recharts4 = require("recharts");
var import_lucide_icons31 = require("@tamagui/lucide-icons");
var import_jsx_runtime70 = require("react/jsx-runtime");
var AreaChartContainer = (0, import_tamagui69.styled)(import_tamagui69.YStack, {
  name: "AreaChart",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  tag: "section"
});
var ChartWrapper2 = (0, import_tamagui69.styled)(import_tamagui69.YStack, {
  flex: 1,
  minHeight: 300,
  justifyContent: "center",
  alignItems: "center"
});
var StateContainer4 = (0, import_tamagui69.styled)(import_tamagui69.YStack, {
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
  const theme = (0, import_tamagui69.useTheme)();
  const defaultColor = theme.blue10?.get() || "#007BFF";
  const colorScale = colors || [
    defaultColor,
    theme.green10?.get() || "#28A745",
    theme.orange10?.get() || "#FD7E14"
  ];
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const { chartData, seriesKeys } = import_react62.default.useMemo(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(Skeleton, { width: "100%", height });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(StateContainer4, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_lucide_icons31.AlertCircle, { color: "$red10", size: "$2" }),
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_tamagui69.Text, { color: "$red10", children: "Erro ao carregar os dados." }),
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_tamagui69.Text, { fontSize: "$2", color: "$color11", children: error })
      ] });
    }
    if (!chartData || chartData.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(StateContainer4, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_lucide_icons31.Inbox, { size: "$2" }),
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_tamagui69.Text, { children: "Sem dados para exibir" })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_tamagui69.YStack, { width: "100%", height, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_recharts4.ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
      import_recharts4.AreaChart,
      {
        data: chartData,
        margin: { top: 20, right: 30, left: 20, bottom: 5 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_recharts4.CartesianGrid, { strokeDasharray: "3 3", stroke: gridColor, vertical: false }),
          /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
            import_recharts4.XAxis,
            {
              dataKey: xKey,
              stroke: axisColor,
              tick: { fill: textColor, fontSize: 12 },
              tickLine: false,
              axisLine: { stroke: axisColor }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
            import_recharts4.YAxis,
            {
              stroke: axisColor,
              tick: { fill: textColor, fontSize: 12 },
              tickLine: false,
              axisLine: false
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
            import_recharts4.Tooltip,
            {
              contentStyle: {
                borderRadius: "8px",
                border: `1px solid ${gridColor}`,
                backgroundColor: theme.background?.get() || "white"
              }
            }
          ),
          seriesKeys.map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
            import_recharts4.Area,
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
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(AreaChartContainer, { children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_tamagui69.Text, { fontSize: "$5", fontWeight: "bold", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(ChartWrapper2, { children: renderContent() }),
    footerContent
  ] });
};

// src/organisms/ScatterChart/ScatterChart.tsx
var import_react63 = __toESM(require("react"));
var import_tamagui70 = require("tamagui");
var import_victory = require("victory");
var import_lucide_icons32 = require("@tamagui/lucide-icons");
var import_jsx_runtime71 = require("react/jsx-runtime");
var ScatterChartContainer = (0, import_tamagui70.styled)(import_tamagui70.YStack, {
  name: "ScatterChart",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  tag: "section"
});
var ChartWrapper3 = (0, import_tamagui70.styled)(import_tamagui70.YStack, {
  flex: 1,
  minHeight: 300,
  justifyContent: "center",
  alignItems: "center"
});
var StateContainer5 = (0, import_tamagui70.styled)(import_tamagui70.YStack, {
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
  const theme = (0, import_tamagui70.useTheme)();
  const defaultColor = theme.blue10?.get() || "#007BFF";
  const scatterColor = color ? theme[color]?.get() || color : defaultColor;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const chartData = import_react63.default.useMemo(() => data ? [...data] : [], [data]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Skeleton, { width: "100%", height });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(StateContainer5, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_lucide_icons32.AlertCircle, { color: "$red10", size: "$2" }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_tamagui70.Text, { color: "$red10", children: "Erro ao carregar os dados." }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_tamagui70.Text, { fontSize: "$2", color: "$color11", children: error })
      ] });
    }
    if (!chartData || chartData.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(StateContainer5, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_lucide_icons32.Inbox, { size: "$2" }),
        /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_tamagui70.Text, { children: "Sem dados para exibir" })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
      import_victory.VictoryChart,
      {
        height,
        padding: { top: 20, bottom: 50, left: 50, right: 20 },
        containerComponent: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
          import_victory.VictoryVoronoiContainer,
          {
            voronoiDimension: "x",
            labels: ({ datum }) => `${datum[yKey]}`,
            labelComponent: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_victory.VictoryTooltip, {})
          }
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
            import_victory.VictoryAxis,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
            import_victory.VictoryAxis,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 },
                grid: { stroke: gridColor, strokeDasharray: "4, 4" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
            import_victory.VictoryScatter,
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
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(ScatterChartContainer, { children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_tamagui70.Text, { fontSize: "$5", fontWeight: "bold", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(ChartWrapper3, { children: renderContent() }),
    footerContent
  ] });
};

// src/organisms/ComboChart/ComboChart.tsx
var import_tamagui71 = require("tamagui");
var import_victory2 = require("victory");
var import_lucide_icons33 = require("@tamagui/lucide-icons");
var import_jsx_runtime72 = require("react/jsx-runtime");
var ComboChartContainer = (0, import_tamagui71.styled)(import_tamagui71.YStack, {
  name: "ComboChart",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  gap: "$4",
  width: "100%",
  tag: "section"
});
var ChartWrapper4 = (0, import_tamagui71.styled)(import_tamagui71.YStack, {
  flex: 1,
  minHeight: 300,
  justifyContent: "center",
  alignItems: "center"
});
var StateContainer6 = (0, import_tamagui71.styled)(import_tamagui71.YStack, {
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
  const theme = (0, import_tamagui71.useTheme)();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(Skeleton, { width: "100%", height });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(StateContainer6, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_lucide_icons33.AlertCircle, { color: "$red10", size: "$2" }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_tamagui71.Text, { color: "$red10", children: "Erro ao carregar os dados." }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_tamagui71.Text, { fontSize: "$2", color: "$color11", children: error })
      ] });
    }
    if (!children) {
      return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(StateContainer6, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_lucide_icons33.Inbox, { size: "$2" }),
        /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_tamagui71.Text, { children: "Sem dados para exibir" })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(
      import_victory2.VictoryChart,
      {
        height,
        padding: { top: 20, bottom: 50, left: 50, right: 20 },
        containerComponent: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_victory2.VictoryVoronoiContainer, { labelComponent: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_victory2.VictoryTooltip, {}) }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            import_victory2.VictoryAxis,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            import_victory2.VictoryAxis,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 },
                grid: { stroke: gridColor, strokeDasharray: "4, 4" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_victory2.VictoryGroup, { children })
        ]
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(ComboChartContainer, { children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_tamagui71.Text, { fontSize: "$5", fontWeight: "bold", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(ChartWrapper4, { children: renderContent() }),
    footerContent
  ] });
};

// src/organisms/BoxPlotChart/BoxPlotChart.tsx
var import_tamagui72 = require("tamagui");
var import_victory3 = require("victory");
var import_lucide_icons34 = require("@tamagui/lucide-icons");
var import_jsx_runtime73 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui72.useTheme)();
  const themeColor = theme[color];
  const boxColor = themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(import_tamagui72.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_lucide_icons34.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_tamagui72.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(import_tamagui72.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_lucide_icons34.BarChart, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_tamagui72.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
      import_victory3.VictoryChart,
      {
        domainPadding: { x: 20, y: 20 },
        height,
        containerComponent: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(import_victory3.VictoryContainer, { responsive: true }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
            import_victory3.VictoryAxis,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
            import_victory3.VictoryAxis,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" },
                grid: { stroke: gridColor, strokeDasharray: "4, 4" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
            import_victory3.VictoryBoxPlot,
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
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(import_tamagui72.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/RadarChart/RadarChart.tsx
var import_tamagui73 = require("tamagui");
var import_victory4 = require("victory");
var import_lucide_icons35 = require("@tamagui/lucide-icons");
var import_react64 = __toESM(require("react"));
var import_jsx_runtime74 = require("react/jsx-runtime");
var RadarChart = ({
  data,
  keys,
  color = "$primary",
  height = 300,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = (0, import_tamagui73.useTheme)();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const getColor = (c) => {
    const themeColor = theme[c];
    return themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : c;
  };
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(import_tamagui73.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_lucide_icons35.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_tamagui73.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0 || !keys) {
      return /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(import_tamagui73.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_lucide_icons35.Activity, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_tamagui73.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    const chartData = import_react64.default.useMemo(() => data ? [...data] : [], [data]);
    const datasets = Array.isArray(chartData[0]) ? chartData : [chartData];
    const colors = Array.isArray(color) ? color : [color];
    return /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(
      import_victory4.VictoryChart,
      {
        polar: true,
        height,
        domainPadding: { x: 20, y: 20 },
        containerComponent: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_victory4.VictoryContainer, { responsive: true }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
            import_victory4.VictoryGroup,
            {
              colorScale: colors.map((c) => getColor(c)),
              style: { data: { fillOpacity: 0.2, strokeWidth: 2 } },
              children: datasets.map((dataset, i) => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_victory4.VictoryArea, { data: dataset }, i))
            }
          ),
          datasets[0]?.map((d, i) => {
            return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_victory4.VictoryPolarAxis, { dependentAxis: true, style: { axisLabel: { padding: 10 } }, labelPlacement: "vertical" }, i);
          }),
          /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
            import_victory4.VictoryPolarAxis,
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
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(import_tamagui73.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/PolarChart/PolarChart.tsx
var import_tamagui74 = require("tamagui");
var import_victory5 = require("victory");
var import_lucide_icons36 = require("@tamagui/lucide-icons");
var import_jsx_runtime75 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui74.useTheme)();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const getColor = (c) => {
    const themeColor = theme[c];
    return themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : c;
  };
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_tamagui74.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_lucide_icons36.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_tamagui74.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_tamagui74.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_lucide_icons36.PieChart, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_tamagui74.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    const colors = Array.isArray(color) ? color : [color];
    return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(
      import_victory5.VictoryChart,
      {
        polar: true,
        height,
        domainPadding: { x: 20, y: 20 },
        theme: import_victory5.VictoryTheme.material,
        containerComponent: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_victory5.VictoryContainer, { responsive: true }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
            import_victory5.VictoryPolarAxis,
            {
              style: {
                axis: { stroke: axisColor },
                grid: { stroke: axisColor, opacity: 0.5 },
                tickLabels: { fill: textColor, fontSize: 12 }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
            import_victory5.VictoryBar,
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
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(import_tamagui74.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/WaterfallChart/WaterfallChart.tsx
var import_tamagui75 = require("tamagui");
var import_victory6 = require("victory");
var import_lucide_icons37 = require("@tamagui/lucide-icons");
var import_jsx_runtime76 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui75.useTheme)();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const gridColor = theme.borderColor?.get() || "#eee";
  const getColor = (c) => {
    const themeColor = theme[c];
    return themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : c;
  };
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(import_tamagui75.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_lucide_icons37.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_tamagui75.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(import_tamagui75.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_lucide_icons37.BarChart, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_tamagui75.Text, { children: "N\xE3o h\xE1 dados para exibir." })
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
    return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(
      import_victory6.VictoryChart,
      {
        domainPadding: { x: 20 },
        height,
        containerComponent: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_victory6.VictoryContainer, { responsive: true }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
            import_victory6.VictoryAxis,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
            import_victory6.VictoryAxis,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" },
                grid: { stroke: gridColor, strokeDasharray: "4, 4" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
            import_victory6.VictoryBar,
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
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(import_tamagui75.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/FunnelChart/FunnelChart.tsx
var import_tamagui76 = require("tamagui");
var import_victory7 = require("victory");
var import_lucide_icons38 = require("@tamagui/lucide-icons");
var import_jsx_runtime77 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui76.useTheme)();
  const themeColor = theme[color];
  const barColor = themeColor && typeof themeColor === "object" && "get" in themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(import_tamagui76.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_icons38.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_tamagui76.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(import_tamagui76.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_lucide_icons38.Filter, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_tamagui76.Text, { children: "N\xE3o h\xE1 dados para exibir." })
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
    return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
      import_victory7.VictoryChart,
      {
        domainPadding: { x: 20, y: 20 },
        height,
        containerComponent: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_victory7.VictoryContainer, { responsive: true }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
            import_victory7.VictoryAxis,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: "transparent" },
                grid: { stroke: "transparent" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
            import_victory7.VictoryAxis,
            {
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12 }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
            import_victory7.VictoryBar,
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
              labelComponent: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_victory7.VictoryLabel, {})
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(import_tamagui76.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/BulletChart/BulletChart.tsx
var import_tamagui77 = require("tamagui");
var import_victory8 = require("victory");
var import_lucide_icons39 = require("@tamagui/lucide-icons");
var import_jsx_runtime78 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui77.useTheme)();
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
      return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(import_tamagui77.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_icons39.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_tamagui77.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(import_tamagui77.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_icons39.BarChart, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_tamagui77.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
      import_victory8.VictoryChart,
      {
        domainPadding: { x: 20, y: 20 },
        height,
        containerComponent: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_victory8.VictoryContainer, { responsive: true }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
            import_victory8.VictoryAxis,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
            import_victory8.VictoryAxis,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
            import_victory8.VictoryBar,
            {
              data,
              x: xKey,
              y: rangeKey,
              style: { data: { fill: rangeBarColor, width: 40 } },
              cornerRadius: { top: 2 }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
            import_victory8.VictoryBar,
            {
              data,
              x: xKey,
              y: yKey,
              style: { data: { fill: barColor, width: 15 } },
              cornerRadius: { top: 2 }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
            import_victory8.VictoryScatter,
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
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(import_tamagui77.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/SunburstChart/SunburstChart.tsx
var import_react65 = require("react");
var import_tamagui78 = require("tamagui");
var import_react_native_svg = require("react-native-svg");
var import_lucide_icons40 = require("@tamagui/lucide-icons");
var import_jsx_runtime79 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui78.useTheme)();
  const themeColor = theme[color];
  const radius = Math.min(width, height) / 2;
  const centerX = width / 2;
  const centerY = height / 2;
  const arcs = (0, import_react65.useMemo)(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(import_tamagui78.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_icons40.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_tamagui78.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data) {
      return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(import_tamagui78.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_lucide_icons40.PieChart, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_tamagui78.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_react_native_svg.Svg, { width, height, children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_react_native_svg.G, { children: arcs.map((arc, i) => /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
      import_react_native_svg.Path,
      {
        d: arc.path,
        fill: arc.color,
        stroke: theme.background?.get() || "white",
        strokeWidth: 1
      },
      i
    )) }) });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(import_tamagui78.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", alignItems: "center", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/ParallelCoordinates/ParallelCoordinates.tsx
var import_react66 = require("react");
var import_tamagui79 = require("tamagui");
var import_victory9 = require("victory");
var import_lucide_icons41 = require("@tamagui/lucide-icons");
var import_jsx_runtime80 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui79.useTheme)();
  const themeColor = theme[color];
  const lineColor = themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const normalizedData = (0, import_react66.useMemo)(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(import_tamagui79.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(import_lucide_icons41.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(import_tamagui79.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(import_tamagui79.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(import_lucide_icons41.Activity, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(import_tamagui79.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(
      import_victory9.VictoryChart,
      {
        domain: { x: [0, attributes.length + 1], y: [0, 1] },
        height,
        width,
        children: [
          attributes.map((attr, i) => /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
            import_victory9.VictoryAxis,
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
          /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(import_victory9.VictoryGroup, { children: normalizedData.map((series, i) => /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
            import_victory9.VictoryLine,
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
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(import_tamagui79.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/MarimekkoChart/MarimekkoChart.tsx
var import_react67 = require("react");
var import_tamagui80 = require("tamagui");
var import_victory10 = require("victory");
var import_lucide_icons42 = require("@tamagui/lucide-icons");
var import_jsx_runtime81 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui80.useTheme)();
  const themeColor = theme[color];
  const barColor = themeColor ? themeColor.get() : color;
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const processedData = (0, import_react67.useMemo)(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(import_tamagui80.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_lucide_icons42.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_tamagui80.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(import_tamagui80.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_lucide_icons42.BarChart2, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_tamagui80.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(
      import_victory10.VictoryChart,
      {
        domainPadding: { x: 0 },
        height,
        width,
        containerComponent: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(import_victory10.VictoryContainer, { responsive: true }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
            import_victory10.VictoryAxis,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
            import_victory10.VictoryAxis,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: "transparent" },
                tickLabels: { fill: textColor, padding: 5, fontSize: 12, fontFamily: "inherit" },
                grid: { stroke: theme.borderColor?.get() || "#eee", strokeDasharray: "4, 4" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
            import_victory10.VictoryBar,
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
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(import_tamagui80.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/RidgelinePlot/RidgelinePlot.tsx
var import_react68 = require("react");
var import_tamagui81 = require("tamagui");
var import_victory11 = require("victory");
var import_lucide_icons43 = require("@tamagui/lucide-icons");
var import_jsx_runtime82 = require("react/jsx-runtime");
var RidgelinePlot = ({
  series,
  width = 600,
  height = 400,
  overlap = 0.5,
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = (0, import_tamagui81.useTheme)();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const processedSeries = (0, import_react68.useMemo)(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(import_tamagui81.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_lucide_icons43.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_tamagui81.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!series || series.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(import_tamagui81.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_lucide_icons43.Activity, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_tamagui81.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(
      import_victory11.VictoryChart,
      {
        height,
        width,
        domainPadding: { x: 20, y: 10 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
            import_victory11.VictoryAxis,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: "inherit" }
              }
            }
          ),
          processedSeries.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
            import_victory11.VictoryArea,
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
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(import_tamagui81.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/DecompositionTree/DecompositionTree.tsx
var import_react69 = require("react");
var import_tamagui82 = require("tamagui");
var import_react_native_svg2 = require("react-native-svg");
var import_lucide_icons44 = require("@tamagui/lucide-icons");
var import_jsx_runtime83 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui82.useTheme)();
  const { nodes, links } = (0, import_react69.useMemo)(() => {
    if (!data) return { nodes: [], links: [] };
    const root = calculateTreeLayout(data, width, height);
    return flattenTree(root);
  }, [data, width, height]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(import_tamagui82.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_lucide_icons44.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_tamagui82.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data) {
      return /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(import_tamagui82.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_lucide_icons44.GitMerge, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_tamagui82.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_react_native_svg2.Svg, { width, height, viewBox: `0 0 ${width} ${height}`, children: /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(import_react_native_svg2.G, { children: [
      links.map((link, i) => {
        const midX = (link.x1 + link.x2) / 2;
        const d = `M ${link.x1} ${link.y1} C ${midX} ${link.y1}, ${midX} ${link.y2}, ${link.x2} ${link.y2}`;
        return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
          import_react_native_svg2.Path,
          {
            d,
            stroke: theme.borderColor?.get() || "#ccc",
            strokeWidth: 2,
            fill: "none"
          },
          `link-${i}`
        );
      }),
      nodes.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(import_react_native_svg2.G, { x: node.x, y: node.y, children: [
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
          import_react_native_svg2.Rect,
          {
            width: node.width,
            height: node.height,
            rx: 4,
            fill: node.data.color || theme.background?.get() || "white",
            stroke: theme.blue9?.get() || "#3b82f6",
            strokeWidth: 2
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
          import_react_native_svg2.Text,
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
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
          import_react_native_svg2.Text,
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
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(import_tamagui82.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", overflow: "scroll", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/Maps/Maps.tsx
var import_react70 = require("react");
var import_tamagui83 = require("tamagui");
var import_react_native_svg3 = require("react-native-svg");
var import_lucide_icons45 = require("@tamagui/lucide-icons");
var import_jsx_runtime84 = require("react/jsx-runtime");
var project = (lon, lat, width, height, bounds) => {
  const [minLon, minLat, maxLon, maxLat] = bounds;
  const xPct = (lon - minLon) / (maxLon - minLon);
  const yPct = (lat - minLat) / (maxLat - minLat);
  const x = xPct * width;
  const y = height - yPct * height;
  return [x, y];
};
var getBounds = (features) => {
  let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity;
  const visit = (coords) => {
    if (typeof coords[0] === "number") {
      const [lon, lat] = coords;
      minLon = Math.min(minLon, lon);
      minLat = Math.min(minLat, lat);
      maxLon = Math.max(maxLon, lon);
      maxLat = Math.max(maxLat, lat);
    } else {
      coords.forEach(visit);
    }
  };
  features.forEach((f) => visit(f.geometry.coordinates));
  return [minLon, minLat, maxLon, maxLat];
};
var geoPath = (feature, width, height, bounds) => {
  const { geometry } = feature;
  const drawRing = (ring) => {
    return ring.map((pt, i) => {
      const [x, y] = project(pt[0], pt[1], width, height, bounds);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    }).join(" ") + "Z";
  };
  if (geometry.type === "Polygon") {
    return geometry.coordinates.map(drawRing).join(" ");
  } else if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.map((poly) => poly.map(drawRing).join(" ")).join(" ");
  }
  return "";
};
var Maps = ({
  data,
  type = "choropleth",
  valueKey = "value",
  width = 600,
  height = 400,
  color = "$primary",
  isLoading = false,
  error = null,
  headerContent
}) => {
  const theme = (0, import_tamagui83.useTheme)();
  const themeColor = theme[color];
  const { paths, circles } = (0, import_react70.useMemo)(() => {
    if (!data || !data.features) return { paths: [], circles: [] };
    const bounds = getBounds(data.features);
    const values = data.features.map((f) => f.properties[valueKey]).filter((v) => typeof v === "number");
    const maxVal = Math.max(...values) || 1;
    const minVal = Math.min(...values) || 0;
    const paths2 = data.features.map((f) => {
      const d = geoPath(f, width, height, bounds);
      let fill = theme.background?.get() || "#eee";
      if (type === "choropleth") {
        const val = f.properties[valueKey];
        if (typeof val === "number") {
          const intensity = (val - minVal) / (maxVal - minVal);
          fill = `rgba(59, 130, 246, ${0.2 + 0.8 * intensity})`;
        }
      } else {
        fill = "#e5e7eb";
      }
      return { d, fill, feature: f };
    });
    const circles2 = [];
    if (type === "dotDensity") {
      data.features.forEach((f) => {
        const coords = f.geometry.type === "Polygon" ? f.geometry.coordinates[0] : f.geometry.coordinates[0][0];
        let sumX = 0, sumY = 0, count = 0;
        coords.forEach((pt) => {
          sumX += pt[0];
          sumY += pt[1];
          count++;
        });
        const cx = sumX / count;
        const cy = sumY / count;
        const [x, y] = project(cx, cy, width, height, bounds);
        const val = f.properties[valueKey];
        if (val) {
          circles2.push({
            cx: x,
            cy: y,
            r: Math.sqrt(val) / 2,
            // scale size
            fill: theme.red9?.get() || "#ef4444"
          });
        }
      });
    }
    return { paths: paths2, circles: circles2 };
  }, [data, width, height, type, valueKey, theme]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(import_tamagui83.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_lucide_icons45.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_tamagui83.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data) {
      return /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(import_tamagui83.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_lucide_icons45.Map, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_tamagui83.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_react_native_svg3.Svg, { width, height, viewBox: `0 0 ${width} ${height}`, children: /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(import_react_native_svg3.G, { children: [
      paths.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
        import_react_native_svg3.Path,
        {
          d: p.d,
          fill: p.fill,
          stroke: theme.background?.get() || "white",
          strokeWidth: 0.5
        },
        i
      )),
      circles.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
        import_react_native_svg3.Circle,
        {
          cx: c.cx,
          cy: c.cy,
          r: c.r,
          fill: c.fill,
          opacity: 0.6
        },
        `c-${i}`
      ))
    ] }) });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsxs)(import_tamagui83.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/Timeline/Timeline.tsx
var import_tamagui84 = require("tamagui");
var import_jsx_runtime85 = require("react/jsx-runtime");
var TimelineFrame = (0, import_tamagui84.styled)(import_tamagui84.YStack, {
  name: "Timeline",
  tag: "ul",
  width: "100%",
  gap: "$4"
});
var TimelineItemFrame = (0, import_tamagui84.styled)(import_tamagui84.XStack, {
  name: "TimelineItem",
  tag: "li",
  gap: "$4"
});
var TimelineConnectorWrapper = (0, import_tamagui84.styled)(import_tamagui84.YStack, {
  alignItems: "center",
  width: 20,
  position: "relative"
});
var TimelineConnector = (0, import_tamagui84.styled)(import_tamagui84.View, {
  width: 2,
  backgroundColor: "$borderColor",
  position: "absolute",
  top: 24,
  bottom: -24,
  zIndex: 0
});
var TimelineDot = (0, import_tamagui84.styled)(import_tamagui84.View, {
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: "$background",
  borderWidth: 2,
  borderColor: "$primary",
  zIndex: 1
});
var TimelineContent = (0, import_tamagui84.styled)(import_tamagui84.YStack, {
  flex: 1,
  gap: "$1"
});
var TimelineTime = (0, import_tamagui84.styled)(import_tamagui84.Text, {
  fontSize: "$2",
  color: "$mutedForeground"
});
var TimelineTitle = (0, import_tamagui84.styled)(import_tamagui84.Text, {
  fontSize: "$3",
  fontWeight: "bold",
  color: "$foreground"
});
var TimelineDescription = (0, import_tamagui84.styled)(import_tamagui84.Text, {
  fontSize: "$3",
  color: "$foreground"
});
var TimelineItem = ({ title, description, time, isLast, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(TimelineItemFrame, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(TimelineConnectorWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineDot, {}),
      !isLast && /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineConnector, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(TimelineContent, { children: [
      time && /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineTime, { children: time }),
      title && /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineTitle, { children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineDescription, { children: description }),
      children
    ] })
  ] });
};
var TimelineSkeleton = () => /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineFrame, { "data-testid": "timeline-skeleton", children: [...Array(3)].map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(TimelineItemFrame, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineConnectorWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Skeleton, { width: 20, height: 20, borderRadius: 10 }) }),
  /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(TimelineContent, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Skeleton, { width: "50%", height: 15 }),
    /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Skeleton, { width: "80%", height: 15 })
  ] })
] }, index)) });
var Timeline = ({ items, children, isLoading, isEmpty, hasError }) => {
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineSkeleton, {});
  }
  if (hasError) {
    return /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(Alert, { variant: "destructive", children: [
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Alert.Title, { children: "Erro" }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Alert.Description, { children: "Ocorreu um erro ao carregar os dados. Por favor, tente novamente." })
    ] });
  }
  if (isEmpty || items && items.length === 0 && !children) {
    return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Empty, { title: "Nenhum item encontrado", description: "N\xE3o h\xE1 itens para serem exibidos no momento." });
  }
  if (items) {
    return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineFrame, { children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineItem, { ...item, isLast: index === items.length - 1 }, index)) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(TimelineFrame, { children });
};

// src/organisms/LocationStatus/LocationStatus.tsx
var import_tamagui85 = require("tamagui");
var import_lucide_icons46 = require("@tamagui/lucide-icons");
var import_jsx_runtime86 = require("react/jsx-runtime");
var LocationStatusFrame = (0, import_tamagui85.styled)(import_tamagui85.YStack, {
  name: "LocationStatus",
  padding: "$4",
  borderRadius: "$4",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  gap: "$3"
});
var HeaderRow = (0, import_tamagui85.styled)(import_tamagui85.XStack, {
  justifyContent: "space-between",
  alignItems: "center"
});
var Title = (0, import_tamagui85.styled)(import_tamagui85.Text, {
  fontSize: "$4",
  fontWeight: "bold",
  color: "$foreground"
});
var InfoRow = (0, import_tamagui85.styled)(import_tamagui85.XStack, {
  gap: "$4",
  alignItems: "center",
  flexWrap: "wrap"
});
var InfoItem = (0, import_tamagui85.styled)(import_tamagui85.XStack, {
  gap: "$2",
  alignItems: "center"
});
var Label7 = (0, import_tamagui85.styled)(import_tamagui85.Text, {
  fontSize: "$2",
  color: "$mutedForeground"
});
var Value = (0, import_tamagui85.styled)(import_tamagui85.Text, {
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
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(LocationStatusFrame, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(HeaderRow, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(import_tamagui85.XStack, { gap: "$2", alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_lucide_icons46.MapPin, { size: "$1" }),
        /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Title, { children: "Status da Localiza\xE7\xE3o" })
      ] }),
      isSearching && /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Badge, { variant: "outline", children: "Buscando..." }),
      error && /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Badge, { variant: "destructive", children: "Erro" }),
      !isSearching && !error && accuracy !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(Badge, { style: { backgroundColor: accuracyLevel.color, color: "white" }, children: [
        "Precis\xE3o: ",
        accuracyLevel.label,
        " (",
        accuracy?.toFixed(0),
        "m)"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(InfoRow, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(InfoItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_lucide_icons46.Navigation, { size: "$1", color: "$mutedForeground" }),
        /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(import_tamagui85.YStack, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Label7, { children: "Coordenadas" }),
          /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(Value, { children: [
            latitude?.toFixed(6) ?? "-",
            ", ",
            longitude?.toFixed(6) ?? "-"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(InfoItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_lucide_icons46.Clock, { size: "$1", color: "$mutedForeground" }),
        /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(import_tamagui85.YStack, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Label7, { children: "Atualizado em" }),
          /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(Value, { children: formattedTime })
        ] })
      ] })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_tamagui85.Text, { color: "$destructive", fontSize: "$2", children: error })
  ] });
};

// src/organisms/ScannerView/ScannerView.tsx
var import_react71 = __toESM(require("react"));
var import_tamagui86 = require("tamagui");
var import_lucide_icons47 = require("@tamagui/lucide-icons");
var import_jsx_runtime87 = require("react/jsx-runtime");
var ScannerFrame = (0, import_tamagui86.styled)(import_tamagui86.YStack, {
  name: "ScannerView",
  position: "relative",
  width: "100%",
  height: 500,
  backgroundColor: "#000",
  borderRadius: "$4",
  overflow: "hidden"
});
var CameraPlaceholder = (0, import_tamagui86.styled)(import_tamagui86.YStack, {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1a1a1a"
});
var Overlay = (0, import_tamagui86.styled)(import_tamagui86.YStack, {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10
});
var ScanFrame = (0, import_tamagui86.styled)(import_tamagui86.YStack, {
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
var ScanLine = (0, import_tamagui86.styled)(import_tamagui86.YStack, {
  width: "100%",
  height: 2,
  backgroundColor: "$green10",
  position: "absolute",
  top: "50%"
});
var Controls = (0, import_tamagui86.styled)(import_tamagui86.XStack, {
  position: "absolute",
  bottom: "$4",
  left: 0,
  right: 0,
  justifyContent: "center",
  gap: "$4",
  zIndex: 20
});
var StatusText = (0, import_tamagui86.styled)(import_tamagui86.Text, {
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
  const [scanned, setScanned] = import_react71.default.useState(false);
  const handleScan = () => {
    setScanned(true);
    if (onScan && mockData) {
      onScan(mockData);
    }
    setTimeout(() => setScanned(false), 2e3);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(ScannerFrame, { ...props, children: !isActive ? /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(CameraPlaceholder, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_lucide_icons47.Camera, { size: "$6", color: "$gray10" }),
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_tamagui86.Text, { color: "$gray10", marginTop: "$4", children: "C\xE2mera desativada" })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(import_jsx_runtime87.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(CameraPlaceholder, { children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_lucide_icons47.Maximize, { size: "$8", color: "#333" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(Overlay, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(ScanFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(ScanLine, { style: { opacity: scanned ? 0 : 1 } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(StatusText, { children: "Posicione o c\xF3digo no quadro" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(Controls, { children: [
      mockData && /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(Button, { onPress: handleScan, variant: "default", children: "Simular Scan" }),
      onClose && /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(Button, { onPress: onClose, variant: "destructive", icon: import_lucide_icons47.X, circular: true })
    ] })
  ] }) });
};

// src/organisms/SignaturePad/SignaturePad.tsx
var import_react72 = require("react");
var import_tamagui87 = require("tamagui");
var import_react_native_svg4 = require("react-native-svg");
var import_lucide_icons48 = require("@tamagui/lucide-icons");
var import_tamagui88 = require("tamagui");
var import_jsx_runtime88 = require("react/jsx-runtime");
var SignatureContainer = (0, import_tamagui87.styled)(import_tamagui87.YStack, {
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
var Controls2 = (0, import_tamagui87.styled)(import_tamagui87.XStack, {
  padding: "$2",
  justifyContent: "flex-end",
  gap: "$2",
  backgroundColor: "$background",
  borderTopWidth: 1,
  borderColor: "$borderColor"
});
var HelperText = (0, import_tamagui87.styled)(import_tamagui87.YStack, {
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
  const [currentPath, setCurrentPath] = (0, import_react72.useState)([]);
  const [paths, setPaths] = (0, import_react72.useState)([]);
  const isDrawing = (0, import_react72.useRef)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)(import_tamagui87.YStack, { width: "100%", gap: "$2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)(
      SignatureContainer,
      {
        ...props,
        onMouseDown: handleStart,
        onMouseMove: handleMove,
        onMouseUp: handleEnd,
        onMouseLeave: handleEnd,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)(import_react_native_svg4.Svg, { height: "100%", width: "100%", viewBox: "0 0 500 200", style: { position: "absolute", top: 0, left: 0, zIndex: 10 }, children: [
            paths.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
              import_react_native_svg4.Path,
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
            currentPath.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
              import_react_native_svg4.Path,
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
          paths.length === 0 && currentPath.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(HelperText, { children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(import_tamagui88.Text, { color: "$gray8", children: "Assine aqui" }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)(Controls2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(Button, { variant: "outline", icon: import_lucide_icons48.Eraser, onPress: handleClear, children: "Limpar" }),
      /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(Button, { variant: "default", icon: import_lucide_icons48.Check, onPress: handleSave, children: "Salvar" })
    ] })
  ] });
};

// src/organisms/ImageAnnotator/ImageAnnotator.tsx
var import_tamagui89 = require("tamagui");
var import_jsx_runtime89 = require("react/jsx-runtime");
var AnnotatorContainer = (0, import_tamagui89.styled)(import_tamagui89.YStack, {
  name: "ImageAnnotator",
  width: "100%",
  position: "relative",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4",
  overflow: "hidden",
  backgroundColor: "$background"
});
var ImageLayer = (0, import_tamagui89.styled)(import_tamagui89.YStack, {
  width: "100%",
  height: 400,
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 0
});
var DrawingLayer = (0, import_tamagui89.styled)(import_tamagui89.YStack, {
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
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)(AnnotatorContainer, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(ImageLayer, { children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
      import_tamagui89.Image,
      {
        source: { uri: imageUrl },
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        ...imageProps
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(DrawingLayer, { children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
var import_tamagui90 = require("tamagui");
var import_lucide_icons49 = require("@tamagui/lucide-icons");
var import_jsx_runtime90 = require("react/jsx-runtime");
var PDFContainer = (0, import_tamagui90.styled)(import_tamagui90.YStack, {
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
var PDFFrame = (0, import_tamagui90.styled)(import_tamagui90.YStack, {
  tag: "iframe",
  width: "100%",
  height: "100%",
  borderWidth: 0
});
var Placeholder = (0, import_tamagui90.styled)(import_tamagui90.YStack, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(PDFContainer, { ...props, alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_tamagui90.Spinner, { size: "large" }) });
  }
  if (error || !fileUrl) {
    return /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(PDFContainer, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)(Placeholder, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_lucide_icons49.FileText, { size: "$6", color: "$gray8" }),
      /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_tamagui90.Text, { color: "$gray10", children: error || "Nenhum documento selecionado" })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(PDFContainer, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
    PDFFrame,
    {
      src: `${fileUrl}#toolbar=0`,
      title,
      allowFullScreen: true
    }
  ) });
};

// src/organisms/DiffViewer/DiffViewer.tsx
var import_tamagui91 = require("tamagui");
var import_jsx_runtime91 = require("react/jsx-runtime");
var DiffContainer = (0, import_tamagui91.styled)(import_tamagui91.YStack, {
  name: "DiffViewer",
  width: "100%",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4",
  overflow: "hidden",
  backgroundColor: "$background"
});
var Header2 = (0, import_tamagui91.styled)(import_tamagui91.XStack, {
  backgroundColor: "$muted",
  padding: "$2",
  borderBottomWidth: 1,
  borderColor: "$borderColor",
  justifyContent: "space-between"
});
var DiffContent = (0, import_tamagui91.styled)(import_tamagui91.XStack, {
  width: "100%",
  height: 400
  // Fixed height for scrolling
});
var Pane = (0, import_tamagui91.styled)(import_tamagui91.YStack, {
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
var Line2 = (0, import_tamagui91.styled)(import_tamagui91.XStack, {
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
var LineNumber = (0, import_tamagui91.styled)(import_tamagui91.Text, {
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
var LineText = (0, import_tamagui91.styled)(import_tamagui91.Text, {
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
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)(DiffContainer, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)(Header2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(import_tamagui91.Text, { fontWeight: "bold", flex: 1, textAlign: "center", children: oldTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(import_tamagui91.Text, { fontWeight: "bold", flex: 1, textAlign: "center", children: newTitle })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(import_tamagui91.ScrollView, { children: /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)(DiffContent, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(Pane, { children: diffs.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)(Line2, { type: line.type === "removed" || line.type === "modified" ? "removed" : "neutral", children: [
        /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(LineNumber, { children: line.num }),
        /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(LineText, { children: line.oldL })
      ] }, `old-${i}`)) }),
      /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(Pane, { last: true, children: diffs.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)(Line2, { type: line.type === "added" || line.type === "modified" ? "added" : "neutral", children: [
        /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(LineNumber, { children: line.num }),
        /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(LineText, { children: line.newL })
      ] }, `new-${i}`)) })
    ] }) })
  ] });
};

// src/organisms/TimelineAudit/TimelineAudit.tsx
var import_tamagui92 = require("tamagui");
var import_jsx_runtime92 = require("react/jsx-runtime");
var AuditContainer = (0, import_tamagui92.styled)(import_tamagui92.YStack, {
  name: "TimelineAudit",
  width: "100%",
  gap: "$4",
  padding: "$4",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4"
});
var AuditItem = (0, import_tamagui92.styled)(import_tamagui92.XStack, {
  gap: "$3",
  position: "relative"
});
var Line3 = (0, import_tamagui92.styled)(import_tamagui92.YStack, {
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
var AvatarCircle = (0, import_tamagui92.styled)(import_tamagui92.Circle, {
  width: 24,
  height: 24,
  backgroundColor: "$primary",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1
});
var AvatarText = (0, import_tamagui92.styled)(import_tamagui92.Text, {
  color: "white",
  fontSize: 10,
  fontWeight: "bold"
});
var Content6 = (0, import_tamagui92.styled)(import_tamagui92.YStack, {
  flex: 1,
  gap: "$1",
  paddingBottom: "$4"
});
var HeaderRow2 = (0, import_tamagui92.styled)(import_tamagui92.XStack, {
  alignItems: "center",
  gap: "$2",
  flexWrap: "wrap"
});
var UserText = (0, import_tamagui92.styled)(import_tamagui92.Text, {
  fontWeight: "bold",
  color: "$foreground",
  fontSize: "$3"
});
var ActionText = (0, import_tamagui92.styled)(import_tamagui92.Text, {
  color: "$mutedForeground",
  fontSize: "$3"
});
var TimeText = (0, import_tamagui92.styled)(import_tamagui92.Text, {
  color: "$gray10",
  fontSize: "$2",
  marginLeft: "auto"
});
var DiffBox = (0, import_tamagui92.styled)(import_tamagui92.YStack, {
  backgroundColor: "$muted",
  padding: "$2",
  borderRadius: "$2",
  marginTop: "$2"
});
var DiffText = (0, import_tamagui92.styled)(import_tamagui92.Text, {
  fontFamily: "$mono",
  fontSize: "$2",
  color: "$foreground"
});
var TimelineAudit = ({ events, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(AuditContainer, { ...props, children: events.map((event, index) => {
    const isLast = index === events.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(AuditItem, { children: [
      !isLast && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Line3, {}),
      /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(AvatarCircle, { children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(AvatarText, { children: event.userInitials || event.user.substring(0, 2).toUpperCase() }) }),
      /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(Content6, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(HeaderRow2, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(UserText, { children: event.user }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(ActionText, { children: event.action }),
          /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(TimeText, { children: new Date(event.timestamp).toLocaleString() })
        ] }),
        event.details && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_tamagui92.Text, { fontSize: "$3", children: event.details }),
        event.diff && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(DiffBox, { children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(DiffText, { children: event.diff }) })
      ] })
    ] }, event.id);
  }) });
};

// src/organisms/A11yToolbar/A11yToolbar.tsx
var import_tamagui93 = require("tamagui");
var import_lucide_icons50 = require("@tamagui/lucide-icons");
var import_jsx_runtime93 = require("react/jsx-runtime");
var ToolbarContainer = (0, import_tamagui93.styled)(import_tamagui93.XStack, {
  name: "A11yToolbar",
  padding: "$2",
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$4",
  gap: "$2",
  alignItems: "center"
});
var Separator8 = (0, import_tamagui93.styled)(import_tamagui93.YStack, {
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
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsxs)(ToolbarContainer, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_tamagui93.Text, { fontSize: "$2", fontWeight: "bold", marginRight: "$2", children: "Acessibilidade:" }),
    /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(Button, { icon: import_lucide_icons50.ZoomOut, size: "sm", variant: "outline", onPress: onZoomOut, "aria-label": "Diminuir fonte" }),
    /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(Button, { icon: import_lucide_icons50.Type, size: "sm", variant: "ghost", disabled: true, "aria-label": "Tamanho da fonte" }),
    /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(Button, { icon: import_lucide_icons50.ZoomIn, size: "sm", variant: "outline", onPress: onZoomIn, "aria-label": "Aumentar fonte" }),
    /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(Separator8, {}),
    /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
      Button,
      {
        icon: isDark ? import_lucide_icons50.Sun : import_lucide_icons50.Moon,
        size: "sm",
        variant: "outline",
        onPress: onToggleTheme,
        "aria-label": isDark ? "Modo Claro" : "Modo Escuro"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
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
var import_react73 = require("react");
var import_tamagui94 = require("tamagui");
var import_lucide_icons51 = require("@tamagui/lucide-icons");
var import_jsx_runtime94 = require("react/jsx-runtime");
var FileUploadFrame = (0, import_tamagui94.styled)(import_tamagui94.YStack, {
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
  const inputRef = (0, import_react73.useRef)(null);
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
    return /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(FileUploadFrame, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Skeleton, { height: 32, width: 32, borderRadius: "$12" }),
      /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(import_tamagui94.YStack, { gap: "$1", alignItems: "center", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Skeleton, { height: 20, width: "60%" }),
        /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Skeleton, { height: 16, width: "80%" })
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(FileUploadFrame, { hasError, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_lucide_icons51.Upload, { size: 32, color: hasError ? "$red10" : "$gray10" }),
          /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)(import_tamagui94.YStack, { gap: "$1", alignItems: "center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_tamagui94.Text, { fontWeight: "bold", color: hasError ? "$red11" : void 0, children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_tamagui94.Text, { fontSize: "$2", color: hasError ? "$red10" : "$gray11", children: subtitle })
          ] })
        ]
      }
    ),
    hasError && errorMessage && /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_tamagui94.Text, { fontSize: "$2", color: "$red11", textAlign: "center", children: errorMessage }),
    typeof document !== "undefined" && /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
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
var import_react_hook_form2 = require("react-hook-form");
var import_tamagui95 = require("tamagui");
var import_jsx_runtime95 = require("react/jsx-runtime");
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
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
        Input,
        {
          ...formField,
          ...commonProps,
          placeholder: field.placeholder,
          type: field.type === "number" ? "number" : field.type
        }
      );
    case "textarea":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Textarea, { ...formField, ...commonProps, placeholder: field.placeholder });
    case "switch":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
        Switch,
        {
          checked: formField.value,
          onCheckedChange: formField.onChange,
          disabled: field.disabled
        }
      );
    case "checkbox":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
        Checkbox,
        {
          checked: formField.value,
          onCheckedChange: formField.onChange,
          disabled: field.disabled
        }
      );
    case "date":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
        DatePicker,
        {
          date: formField.value,
          onDateChange: formField.onChange,
          placeholder: field.placeholder,
          disabled: field.disabled
        }
      );
    case "select":
      return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(
        SelectRoot,
        {
          value: formField.value,
          onValueChange: formField.onChange,
          disabled: field.disabled,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(SelectRoot.Trigger, { placeholder: field.placeholder, children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(SelectRoot.Value, { placeholder: field.placeholder }) }),
            /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(SelectRoot.Sheet, {}),
            /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(SelectRoot.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(SelectRoot.Viewport, { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(SelectRoot.Group, { children: field.options?.map((opt, i) => /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(SelectRoot.Item, { index: i, value: opt.value, children: [
              /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(SelectRoot.ItemText, { children: opt.label }),
              /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(SelectRoot.ItemIndicator, { marginLeft: "auto" })
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
  const form = (0, import_react_hook_form2.useForm)({ defaultValues });
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Form, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(FormRoot, { tag: "form", onSubmit: form.handleSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(import_tamagui95.YStack, { gap: "$4", children: [
    schema.map((field) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
      FormField,
      {
        control: form.control,
        name: field.name,
        rules: { required: field.required ? "Campo obrigat\xF3rio" : false },
        render: ({ field: formField }) => /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(FormItem, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(FormLabel, { children: field.label }),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(FormControl, { children: renderFieldInput(field, formField) }),
          field.description && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(FormDescription, { children: field.description }),
          /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(FormMessage, {})
        ] })
      },
      field.name
    )),
    /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Button, { type: "submit", loading: isLoading, theme: "active", children: submitText })
  ] }) }) });
}

// src/organisms/HeatmapChart/HeatmapChart.tsx
var import_tamagui96 = require("tamagui");
var import_victory12 = require("victory");
var import_lucide_icons52 = require("@tamagui/lucide-icons");
var import_react74 = require("react");
var import_jsx_runtime96 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui96.useTheme)();
  const axisColor = theme.borderColor?.get() || "#ccc";
  const textColor = theme.color?.get() || "#000";
  const processedData = (0, import_react74.useMemo)(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)(import_tamagui96.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_lucide_icons52.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_tamagui96.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)(import_tamagui96.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_lucide_icons52.Grid, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_tamagui96.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)(
      import_victory12.VictoryChart,
      {
        domainPadding: { x: 20, y: 20 },
        height,
        containerComponent: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(import_victory12.VictoryContainer, { responsive: true }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
            import_victory12.VictoryAxis,
            {
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
            import_victory12.VictoryAxis,
            {
              dependentAxis: true,
              style: {
                axis: { stroke: axisColor },
                tickLabels: { fill: textColor, padding: 5, fontSize: 10, fontFamily: "inherit" }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
            import_victory12.VictoryScatter,
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
  return /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)(import_tamagui96.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/TreemapChart/TreemapChart.tsx
var import_tamagui97 = require("tamagui");
var import_lucide_icons53 = require("@tamagui/lucide-icons");
var import_react75 = require("react");
var import_react_native_svg5 = __toESM(require("react-native-svg"));
var import_jsx_runtime97 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui97.useTheme)();
  const textColor = theme.color?.get() || "#fff";
  const processedNodes = (0, import_react75.useMemo)(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(import_tamagui97.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_icons53.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_tamagui97.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!data || data.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(import_tamagui97.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_lucide_icons53.Grid, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_tamagui97.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(import_react_native_svg5.default, { width: "100%", height, viewBox: `0 0 500 ${height}`, children: processedNodes.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(import_react_native_svg5.G, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
        import_react_native_svg5.Rect,
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
      node.rect && node.rect.w > 20 && node.rect.h > 15 && /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
        import_react_native_svg5.Text,
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
  return /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(import_tamagui97.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/SankeyDiagram/SankeyDiagram.tsx
var import_tamagui98 = require("tamagui");
var import_lucide_icons54 = require("@tamagui/lucide-icons");
var import_react76 = require("react");
var import_react_native_svg6 = __toESM(require("react-native-svg"));
var import_jsx_runtime98 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui98.useTheme)();
  const primaryColor = theme.primary?.get() || "#0070f3";
  const layout2 = (0, import_react76.useMemo)(() => {
    if (!data || data.nodes.length === 0) return null;
    return computeLayout(data, width, height);
  }, [data, width, height]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_tamagui98.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_icons54.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_tamagui98.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!layout2 || layout2.nodes.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_tamagui98.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_lucide_icons54.Activity, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(import_tamagui98.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    const { nodes, links } = layout2;
    return /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_react_native_svg6.default, { width: "100%", height, viewBox: `0 0 ${width} ${height}`, children: [
      links.map((link, i) => {
        const x0 = link.sourceNode.x + 20;
        const x1 = link.targetNode.x;
        const y0 = link.y0;
        const y1 = link.y1;
        const midX = (x0 + x1) / 2;
        const d = `M ${x0} ${y0} C ${midX} ${y0}, ${midX} ${y1}, ${x1} ${y1}`;
        return /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
          import_react_native_svg6.Path,
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
      nodes.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_react_native_svg6.G, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
          import_react_native_svg6.Rect,
          {
            x: node.x,
            y: node.y,
            width: 20,
            height: node.dy,
            fill: primaryColor,
            fillOpacity: 0.8
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
          import_react_native_svg6.Text,
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
  return /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)(import_tamagui98.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/ChordDiagram/ChordDiagram.tsx
var import_tamagui99 = require("tamagui");
var import_lucide_icons55 = require("@tamagui/lucide-icons");
var import_react77 = require("react");
var import_react_native_svg7 = __toESM(require("react-native-svg"));
var import_jsx_runtime99 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui99.useTheme)();
  const layout2 = (0, import_react77.useMemo)(() => {
    if (!matrix || matrix.length === 0) return null;
    return computeLayout2(matrix, labels || [], width, height);
  }, [matrix, labels, width, height]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)(import_tamagui99.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(import_lucide_icons55.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(import_tamagui99.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!layout2 || layout2.groups.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)(import_tamagui99.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(import_lucide_icons55.Circle, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(import_tamagui99.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    const { groups, ribbons, cx, cy, outerRadius } = layout2;
    return /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(import_react_native_svg7.default, { width: "100%", height, viewBox: `0 0 ${width} ${height}`, children: /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)(import_react_native_svg7.G, { children: [
      ribbons.map((ribbon, i) => /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
        import_react_native_svg7.Path,
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
        return /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)(import_react_native_svg7.G, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
            import_react_native_svg7.Path,
            {
              d: group.path,
              fill: group.color,
              stroke: theme.borderColor?.get() || "white"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
            import_react_native_svg7.Text,
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
  return /* @__PURE__ */ (0, import_jsx_runtime99.jsxs)(import_tamagui99.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/NetworkGraph/NetworkGraph.tsx
var import_tamagui100 = require("tamagui");
var import_lucide_icons56 = require("@tamagui/lucide-icons");
var import_react78 = require("react");
var import_react_native_svg8 = __toESM(require("react-native-svg"));
var import_jsx_runtime100 = require("react/jsx-runtime");
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
  const theme = (0, import_tamagui100.useTheme)();
  const primaryColor = theme.primary?.get() || "#0070f3";
  const layout2 = (0, import_react78.useMemo)(() => {
    if (!data || data.nodes.length === 0) return null;
    return runSimulation(data.nodes, data.links, width, height);
  }, [data, width, height]);
  const renderContent = () => {
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(Skeleton, { height, width: "100%" });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(import_tamagui100.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_lucide_icons56.AlertTriangle, { color: "$red10" }),
        /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_tamagui100.Text, { color: "$red10", children: "Ocorreu um erro ao carregar os dados." })
      ] });
    }
    if (!layout2 || layout2.nodes.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(import_tamagui100.YStack, { flex: 1, justifyContent: "center", alignItems: "center", gap: "$2", height, children: [
        /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_lucide_icons56.Share2, { color: "$gray10" }),
        /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_tamagui100.Text, { children: "N\xE3o h\xE1 dados para exibir." })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_react_native_svg8.default, { width: "100%", height, viewBox: `0 0 ${width} ${height}`, children: /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(import_react_native_svg8.G, { children: [
      layout2.links.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
        import_react_native_svg8.Line,
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
      layout2.nodes.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(import_react_native_svg8.G, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
          import_react_native_svg8.Circle,
          {
            cx: node.x,
            cy: node.y,
            r: 20,
            fill: primaryColor,
            stroke: "white",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
          import_react_native_svg8.Text,
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
  return /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(import_tamagui100.YStack, { width: "100%", gap: "$4", paddingHorizontal: "$4", children: [
    headerContent,
    renderContent()
  ] });
};

// src/organisms/MediaGrid/MediaGrid.tsx
var import_react79 = require("react");
var import_tamagui101 = require("tamagui");
var import_lucide_icons57 = require("@tamagui/lucide-icons");
var import_jsx_runtime101 = require("react/jsx-runtime");
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
  const [internalViewMode, setInternalViewMode] = (0, import_react79.useState)(viewMode);
  const currentViewMode = onViewModeChange ? viewMode : internalViewMode;
  const handleViewModeChange = (mode) => {
    if (onViewModeChange) {
      onViewModeChange(mode);
    } else {
      setInternalViewMode(mode);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_tamagui101.YStack, { gap: "$4", f: 1, children: [
    /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_tamagui101.XStack, { justifyContent: "space-between", alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_tamagui101.XStack, { gap: "$2", children: [
        onUpload && /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_tamagui101.Button, { icon: import_lucide_icons57.Upload, onPress: onUpload, children: "Upload" }),
        selectedIds.length > 0 && onDelete && /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(
          import_tamagui101.Button,
          {
            theme: "red",
            icon: import_lucide_icons57.Trash2,
            onPress: () => onDelete(selectedIds),
            children: [
              "Delete (",
              selectedIds.length,
              ")"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_tamagui101.XStack, { gap: "$2", backgroundColor: "$background", padding: "$1", borderRadius: "$4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
          import_tamagui101.Button,
          {
            size: "$3",
            chromeless: currentViewMode !== "grid",
            theme: currentViewMode === "grid" ? "active" : void 0,
            icon: import_lucide_icons57.Grip,
            onPress: () => handleViewModeChange("grid")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
          import_tamagui101.Button,
          {
            size: "$3",
            chromeless: currentViewMode !== "list",
            theme: currentViewMode === "list" ? "active" : void 0,
            icon: import_lucide_icons57.List,
            onPress: () => handleViewModeChange("list")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_tamagui101.ScrollView, { children: /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_tamagui101.XStack, { flexWrap: "wrap", gap: "$4", children: [
      items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
        MediaItemCard,
        {
          item,
          selected: selectedIds.includes(item.id),
          onSelect: onSelect ? () => onSelect(item.id) : void 0,
          viewMode: currentViewMode
        },
        item.id
      )),
      items.length === 0 && !isLoading && /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_tamagui101.YStack, { f: 1, alignItems: "center", justifyContent: "center", padding: "$10", children: /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_tamagui101.Text, { color: "$color10", children: "No media found" }) })
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
    return /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(
      import_tamagui101.XStack,
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
          /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
            import_tamagui101.Image,
            {
              source: { uri: item.thumbnailUrl || item.url },
              width: 40,
              height: 40,
              borderRadius: "$2",
              objectFit: "cover"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_tamagui101.YStack, { f: 1, children: [
            /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_tamagui101.Text, { fontWeight: "bold", children: item.title }),
            /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(import_tamagui101.Text, { fontSize: "$2", color: "$color10", children: [
              item.type,
              " \u2022 ",
              formatBytes(item.size)
            ] })
          ] }),
          selected && /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_lucide_icons57.Check, { color: "$blue10" })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
          import_tamagui101.Image,
          {
            source: { uri: item.thumbnailUrl || item.url },
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        ),
        selected && /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
          import_tamagui101.Stack,
          {
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "$blue10",
            padding: 4,
            borderRadius: 100,
            children: /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_lucide_icons57.Check, { size: 12, color: "white" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
          import_tamagui101.YStack,
          {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "$2",
            children: /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_tamagui101.Text, { color: "white", numberOfLines: 1, fontSize: "$2", children: item.title })
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
var import_react80 = require("react");
var import_tamagui102 = require("tamagui");
var import_jsx_runtime102 = require("react/jsx-runtime");
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
  const [view, setView] = (0, import_react80.useState)(defaultView);
  const [email, setEmail] = (0, import_react80.useState)("");
  const [password, setPassword] = (0, import_react80.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, import_react80.useState)("");
  const [name, setName] = (0, import_react80.useState)("");
  const handleSubmit = () => {
    if (view === "login" && onLogin) {
      onLogin({ email, password });
    } else if (view === "register" && onRegister) {
      onRegister({ email, password, confirmPassword, name });
    } else if (view === "forgot-password" && onForgotPassword) {
      onForgotPassword(email);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_tamagui102.YStack, { f: 1, alignItems: "center", justifyContent: "center", padding: "$4", backgroundColor: "$background", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(Card, { width: "100%", maxWidth: 400, padding: "$6", gap: "$4", elevation: "$2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(import_tamagui102.YStack, { alignItems: "center", gap: "$2", marginBottom: "$4", children: [
      typeof logo === "string" ? /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_tamagui102.Image, { source: { uri: logo }, width: 60, height: 60, borderRadius: "$2" }) : logo,
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_tamagui102.Text, { fontSize: "$6", fontWeight: "bold", children: title || (view === "login" ? "Welcome Back" : "Create Account") }),
      subtitle && /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_tamagui102.Text, { color: "$color10", textAlign: "center", children: subtitle })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_tamagui102.YStack, { backgroundColor: "$red2", padding: "$2", borderRadius: "$2", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_tamagui102.Text, { color: "$red10", children: error }) }),
    /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(import_tamagui102.YStack, { gap: "$3", children: [
      view === "register" && /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        Input,
        {
          placeholder: "Name",
          value: name,
          onChangeText: setName
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        Input,
        {
          placeholder: "Email",
          value: email,
          onChangeText: setEmail,
          autoCapitalize: "none"
        }
      ),
      view !== "forgot-password" && /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        Input,
        {
          placeholder: "Password",
          value: password,
          onChangeText: setPassword,
          secureTextEntry: true
        }
      ),
      view === "register" && /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        Input,
        {
          placeholder: "Confirm Password",
          value: confirmPassword,
          onChangeText: setConfirmPassword,
          secureTextEntry: true
        }
      ),
      view === "login" && onForgotPassword && /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        import_tamagui102.Text,
        {
          fontSize: "$2",
          color: "$blue10",
          alignSelf: "flex-end",
          onPress: () => setView("forgot-password"),
          cursor: "pointer",
          children: "Forgot password?"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        Button,
        {
          themeInverse: true,
          onPress: handleSubmit,
          disabled: isLoading,
          icon: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(Spinner, {}) : void 0,
          children: view === "login" ? "Sign In" : view === "register" ? "Sign Up" : "Reset Password"
        }
      )
    ] }),
    socialProviders && socialProviders.length > 0 && view === "login" && /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(import_tamagui102.YStack, { gap: "$3", marginTop: "$2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(import_tamagui102.XStack, { alignItems: "center", gap: "$2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(Separator, {}),
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_tamagui102.Text, { fontSize: "$2", color: "$color10", children: "Or continue with" }),
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(Separator, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_tamagui102.XStack, { gap: "$2", justifyContent: "center", children: socialProviders.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_tamagui102.YStack, { alignItems: "center", marginTop: "$4", children: view === "login" ? /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(import_tamagui102.Text, { fontSize: "$2", color: "$color10", children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        import_tamagui102.Text,
        {
          color: "$blue10",
          fontWeight: "bold",
          onPress: () => setView("register"),
          cursor: "pointer",
          children: "Sign Up"
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(import_tamagui102.Text, { fontSize: "$2", color: "$color10", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
        import_tamagui102.Text,
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
var import_react81 = __toESM(require("react"));
var import_tamagui103 = require("tamagui");
var import_jsx_runtime103 = require("react/jsx-runtime");
var FieldFrame = (0, import_tamagui103.styled)(import_tamagui103.YStack, {
  name: "Field",
  gap: "$2"
});
var FieldLabel = Label;
var FieldControlFrame = (0, import_tamagui103.styled)(import_tamagui103.YStack, {
  name: "FieldControl",
  flex: 1
});
var FieldErrorFrame = (0, import_tamagui103.styled)(import_tamagui103.Text, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime103.jsxs)(FieldFrame, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(Skeleton, { height: "$4", width: "$20" }),
      /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(Skeleton, { height: "$10" })
    ] });
  }
  const childrenArray = import_react81.default.Children.toArray(children);
  const finalChildren = childrenArray.map((child, index) => {
    if (!import_react81.default.isValidElement(child)) {
      return child;
    }
    if (child.type === FieldLabel) {
      return import_react81.default.cloneElement(child, {
        key: `field-child-${index}`,
        state: hasError ? "error" : void 0,
        disabled: isDisabled
      });
    }
    if (child.type === FieldControlFrame) {
      const inputChild = import_react81.default.Children.only(child.props.children);
      const clonedInput = import_react81.default.cloneElement(
        inputChild,
        {
          state: hasError ? "error" : void 0,
          disabled: isDisabled
        }
      );
      const finalControl = import_react81.default.cloneElement(
        child,
        { key: `field-child-${index}` },
        clonedInput
      );
      if (rightSlot) {
        return /* @__PURE__ */ (0, import_jsx_runtime103.jsxs)(import_tamagui103.XStack, { gap: "$2", alignItems: "center", children: [
          finalControl,
          rightSlot
        ] }, `field-child-${index}`);
      }
      return finalControl;
    }
    return child;
  });
  return /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(FieldFrame, { ...props, children: finalChildren });
};
FieldRoot.displayName = "Field";
var Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
  Control: FieldControlFrame,
  Error: FieldErrorFrame
});

// src/molecules/InputGroup/InputGroup.tsx
var import_tamagui104 = require("tamagui");
var import_react82 = require("react");
var import_jsx_runtime104 = require("react/jsx-runtime");
var InputGroupFrame = (0, import_tamagui104.styled)(import_tamagui104.XStack, {
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
  const childrenArray = import_react82.Children.toArray(children);
  return /* @__PURE__ */ (0, import_jsx_runtime104.jsxs)(InputGroupFrame, { hasError, disabled: isDisabled, gap: "$2", children: [
    import_react82.Children.map(childrenArray, (child) => {
      if (child.type === Input) {
        return (0, import_react82.cloneElement)(child, {
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
        return (0, import_react82.cloneElement)(child, {
          disabled: isDisabled || isLoading,
          variant: "ghost"
        });
      }
      return child;
    }),
    isLoading && /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(import_tamagui104.Spinner, {})
  ] });
};

// src/molecules/NativeSelect/NativeSelect.tsx
var import_lucide_icons58 = require("@tamagui/lucide-icons");
var import_react83 = require("react");
var import_tamagui106 = require("tamagui");

// src/molecules/NativeSelect/NativeSelect.styles.ts
var import_tamagui105 = require("tamagui");
var SelectContainer = (0, import_tamagui105.styled)(import_tamagui105.YStack, {
  name: "SelectContainer",
  gap: "$2"
});
var SelectTrigger2 = (0, import_tamagui105.styled)(import_tamagui105.XStack, {
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
var SelectElement = (0, import_tamagui105.styled)("select", {
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
var Label8 = (0, import_tamagui105.styled)(import_tamagui105.Label, {
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
var import_jsx_runtime105 = require("react/jsx-runtime");
var NativeSelect = (0, import_react83.forwardRef)(
  ({ children, label, id, hasError = false, isLoading = false, disabled = false, ...props }, ref) => {
    const internalId = (0, import_react83.useId)();
    const selectId = id || internalId;
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime105.jsxs)(SelectContainer, { children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(Skeleton, { height: 20, width: 100 }),
        /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(Skeleton, { height: 40 })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime105.jsxs)(SelectContainer, { children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(Label8, { htmlFor: selectId, hasError, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime105.jsxs)(SelectTrigger2, { hasError, disabled, children: [
        /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(SelectElement, { id: selectId, ref, disabled, ...props, children }),
        /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_tamagui106.YStack, { pointerEvents: "none", position: "absolute", right: "$3", alignItems: "center", children: hasError ? /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_lucide_icons58.AlertCircle, { size: 16, color: "$red10" }) : /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(import_lucide_icons58.ChevronDown, { size: 16, color: "$color10" }) })
      ] })
    ] });
  }
);
NativeSelect.displayName = "NativeSelect";

// src/providers/AppProviders.tsx
var import_tamagui109 = require("tamagui");
var import_portal2 = require("@tamagui/portal");

// src/tamagui.config.ts
var import_tamagui108 = require("tamagui");

// ../../node_modules/@tamagui/use-presence/dist/esm/PresenceContext.mjs
var React81 = __toESM(require("react"), 1);
var import_jsx_runtime106 = require("react/jsx-runtime");
var PresenceContext = React81.createContext(null);
var ResetPresence = (props) => {
  const parent = React81.useContext(PresenceContext);
  return /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(PresenceContext.Provider, {
    value: props.disable ? parent : null,
    children: props.children
  });
};

// ../../node_modules/@tamagui/use-presence/dist/esm/usePresence.mjs
var React82 = __toESM(require("react"), 1);
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
var import_react84 = __toESM(require("react"), 1);
var import_react_native_web = require("react-native-web");
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
var AnimatedView = import_react_native_web.Animated.View;
var AnimatedText = import_react_native_web.Animated.Text;
function useAnimatedNumber(initial) {
  const state = import_react84.default.useRef(null);
  return state.current || (state.current = {
    composite: null,
    val: new import_react_native_web.Animated.Value(initial),
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
        const composite = import_react_native_web.Animated.spring(val, {
          ...config2,
          toValue: next,
          useNativeDriver: !isWeb
        });
        composite.start(handleFinish), state.current.composite = composite;
      } else {
        state.current.composite?.stop();
        const composite = import_react_native_web.Animated.timing(val, {
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
  import_react84.default.useEffect(() => {
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
      const isDisabled = isWeb && componentState.unmounted === true, isExiting = presence?.[0] === false, sendExitComplete = presence?.[1], animateStyles = import_react84.default.useRef({}), animatedTranforms = import_react84.default.useRef([]), animationsState = import_react84.default.useRef(/* @__PURE__ */ new WeakMap()), animateOnly = props.animateOnly || [], hasAnimateOnly = !!props.animateOnly, args = [JSON.stringify(style), componentState, isExiting, !!onDidAnimate], isThereNoNativeStyleKeys = import_react84.default.useMemo(() => isWeb ? true : Object.keys(style).some((key) => animateOnly ? !animatedStyleKey[key] && animateOnly.indexOf(key) === -1 : !animatedStyleKey[key]), args), res = import_react84.default.useMemo(() => {
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
          const value = animated || new import_react_native_web.Animated.Value(val), curInterpolation = animationsState.current.get(value);
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
                return import_react_native_web.Animated[animationConfig.type || "spring"](value, {
                  toValue: animateToValue,
                  useNativeDriver: !isWeb && !isThereNoNativeStyleKeys,
                  ...animationConfig
                });
              }
              (animationConfig.delay ? import_react_native_web.Animated.sequence([import_react_native_web.Animated.delay(animationConfig.delay), getAnimation()]) : getAnimation()).start(({
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
var import_tamagui107 = require("tamagui");
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
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  // ShadCN default (0.5rem)
  lg: 12,
  xl: 24,
  full: 9999
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
var tokens = (0, import_tamagui107.createTokens)({
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
    outlineColor: palette.rioDeepBlue
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
var import_theme_builder = require("@tamagui/theme-builder");
var Colors = __toESM(require("@tamagui/colors"));

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
var builtThemes = (0, import_theme_builder.createThemes)({
  componentThemes: import_theme_builder.defaultComponentThemes,
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
        shadowColor: darkShadows.shadow1,
        // Semantic Tokens Mapping (Dark)
        primary: darkPalette[8],
        // Strong blue
        primaryHover: darkPalette[7],
        primaryPress: darkPalette[6],
        primaryForeground: darkPalette[11],
        // White-ish
        secondary: darkPalette[2],
        // Dark gray/blue
        secondaryHover: darkPalette[3],
        secondaryPress: darkPalette[3],
        secondaryForeground: darkPalette[11],
        // Light
        muted: darkPalette[1],
        mutedForeground: darkPalette[6],
        accent: darkPalette[2],
        accentForeground: darkPalette[11],
        destructive: Colors.redDark.red10,
        destructiveHover: Colors.redDark.red11,
        destructivePress: Colors.redDark.red12,
        destructiveForeground: "#FFFFFF",
        border: darkPalette[3],
        input: darkPalette[3],
        ring: darkPalette[8],
        background: darkPalette[0],
        foreground: darkPalette[11]
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
  claro: baseThemes.claro,
  escuro: baseThemes.escuro
};
var ceraProFont = (0, import_tamagui108.createFont)({
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
  }
});
var config = (0, import_tamagui108.createTamagui)({
  // Animations
  animations,
  // Fonts
  fonts: {
    heading: ceraProFont,
    body: ceraProFont,
    brandHeading: ceraProFont,
    brandBody: ceraProFont,
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
var import_jsx_runtime107 = require("react/jsx-runtime");
var AppProviders = ({ theme = "claro", children }) => /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(import_tamagui109.TamaguiProvider, { config: tamagui_config_default, defaultTheme: theme, children: /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(import_portal2.PortalProvider, { shouldAddRootHost: true, children: /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(ErrorBoundary, { componentName: "AppProviders", children }) }) });

// src/fonts.ts
var fonts = {
  CeraProRegular: null,
  CeraProMedium: null,
  CeraProBlack: null
};

// src/organisms/AgentAnimationPanel/AgentAnimationPanel.tsx
var import_tamagui111 = require("tamagui");
var import_lucide_icons59 = require("@tamagui/lucide-icons");
var import_jsx_runtime108 = require("react/jsx-runtime");
var EventList = (0, import_tamagui111.styled)(import_tamagui111.YStack, {
  gap: "$3",
  padding: "$2"
});
var EventItem = (0, import_tamagui111.styled)(import_tamagui111.XStack, {
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
var Timestamp = (0, import_tamagui111.styled)(Typography, {
  fontSize: "$2",
  color: "$mutedForeground",
  minWidth: 50
});
var StatusIcon = ({ type }) => {
  switch (type) {
    case "error":
      return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_lucide_icons59.AlertCircle, { size: 16, color: "$red10" });
    case "success":
      return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_lucide_icons59.CheckCircle, { size: 16, color: "$green10" });
    case "working":
      return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_lucide_icons59.Activity, { size: 16, color: "$blue10" });
    case "warning":
      return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_lucide_icons59.AlertCircle, { size: 16, color: "$yellow10" });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_lucide_icons59.Info, { size: 16, color: "$gray10" });
  }
};
var AgentAnimationPanel = ({
  agentName,
  agentStatus,
  events
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(Card, { width: "100%", height: "100%", maxHeight: 600, children: [
    /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(import_tamagui111.XStack, { justifyContent: "space-between", alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(CardTitle, { children: agentName }),
      /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(Badge, { variant: agentStatus === "error" ? "destructive" : "default", children: agentStatus.toUpperCase() })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_tamagui111.ScrollView, { maxHeight: 400, children: events.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
      Empty,
      {
        title: "Nenhum evento registrado",
        description: "Aguardando atividades do agente..."
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(EventList, { children: events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(EventItem, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(StatusIcon, { type: event.type }),
      /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)(import_tamagui111.YStack, { flex: 1, children: [
        /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(Typography, { children: event.message }),
        /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(Timestamp, { children: new Date(event.timestamp).toLocaleTimeString() })
      ] })
    ] }, event.id)) }) }) })
  ] });
};

// src/organisms/AgentAnimationModal/AgentAnimationModal.tsx
var import_jsx_runtime109 = require("react/jsx-runtime");
var AgentAnimationModal = ({
  open,
  onOpenChange,
  ...panelProps
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(Dialog, { modal: true, open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(DialogContentComposite, { padding: 0, maxWidth: 600, maxHeight: "80vh", children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(AgentAnimationPanel, { ...panelProps }) }) });
};

// src/atoms/StatusLight/StatusLight.tsx
var import_react85 = __toESM(require("react"));
var import_tamagui112 = require("tamagui");
var import_jsx_runtime110 = require("react/jsx-runtime");
var StatusLightFrame = (0, import_tamagui112.styled)(import_tamagui112.XStack, {
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
var StatusDot = (0, import_tamagui112.styled)(import_tamagui112.Circle, {
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
var StatusText2 = (0, import_tamagui112.styled)(import_tamagui112.Text, {
  name: "StatusText",
  color: "$foreground",
  fontSize: "$3",
  fontFamily: "$body"
});
var StatusLight = import_react85.default.forwardRef(
  ({ children, variant = "neutral", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime110.jsxs)(StatusLightFrame, { ref, variant, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(StatusDot, { variant }),
      /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(StatusText2, { children })
    ] });
  }
);
StatusLight.displayName = "StatusLight";

// src/atoms/Meter/Meter.tsx
var import_react86 = __toESM(require("react"));
var import_tamagui113 = require("tamagui");
var import_jsx_runtime111 = require("react/jsx-runtime");
var MeterFrame = (0, import_tamagui113.styled)(import_tamagui113.YStack, {
  name: "Meter",
  width: "100%",
  gap: "$2"
});
var MeterHeader = (0, import_tamagui113.styled)(import_tamagui113.XStack, {
  justifyContent: "space-between",
  alignItems: "center"
});
var MeterLabel = (0, import_tamagui113.styled)(import_tamagui113.Text, {
  fontSize: "$3",
  fontWeight: "600",
  color: "$foreground"
});
var MeterValueLabel = (0, import_tamagui113.styled)(import_tamagui113.Text, {
  fontSize: "$3",
  color: "$mutedForeground"
});
var MeterTrack = (0, import_tamagui113.styled)(import_tamagui113.View, {
  height: 8,
  borderRadius: 4,
  backgroundColor: "$gray5",
  overflow: "hidden",
  position: "relative"
});
var MeterFill = (0, import_tamagui113.styled)(import_tamagui113.View, {
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
var Meter = import_react86.default.forwardRef(
  ({ value, min = 0, max = 100, label, valueLabel, variant, ...props }, ref) => {
    const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1) * 100;
    return /* @__PURE__ */ (0, import_jsx_runtime111.jsxs)(MeterFrame, { ref, ...props, children: [
      (label || valueLabel) && /* @__PURE__ */ (0, import_jsx_runtime111.jsxs)(MeterHeader, { children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(MeterLabel, { children: label }),
        valueLabel && /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(MeterValueLabel, { children: valueLabel })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(MeterTrack, { children: /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(MeterFill, { width: `${percentage}%`, variant }) })
    ] });
  }
);
Meter.displayName = "Meter";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  ComponentErrorBoundary,
  ContextMenu,
  DataTable,
  DatePicker,
  DecompositionTree,
  Dialog,
  DialogClose,
  DialogContent,
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
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Heading,
  HeatmapChart,
  HoverCard,
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
  Maps,
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
  NavigationMenu,
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
  Paragraph,
  ParallelCoordinates,
  PieChart,
  PolarChart,
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadarChart,
  RadioGroup,
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
  Select,
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
  Stepper,
  SunburstChart,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
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
  config,
  fonts,
  useCollapsibleContext,
  useFormField,
  usePopoverContext,
  useSheetCustomContext,
  useToast,
  withErrorBoundary
});
