// Bộ icon Font Awesome (free solid) cho LogiFuture. Mỗi icon là một component nhận className như trước,
// nên các section chỉ đổi đường import. Icon trang trí luôn aria-hidden.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, type IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faAward,
  faBarcode,
  faBoxesStacked,
  faBrain,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faAnglesRight,
  faCircleCheck,
  faCircleQuestion,
  faCloud,
  faEye,
  faFileLines,
  faCodeBranch,
  faGlobe,
  faKey,
  faLayerGroup,
  faLightbulb,
  faLocationDot,
  faArrowRightLong,
  faNetworkWired,
  faPiggyBank,
  faPlane,
  faPlus,
  faRotate,
  faRoute,
  faShieldHalved,
  faShip,
  faTruck,
  faWarehouse,
  faDiagramProject,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';

// Không dùng CSS mặc định của Font Awesome (ép cao 1em): cỡ icon do class size-* ở từng chỗ quyết định
config.autoAddCss = false;

export type IconProps = { className?: string; strokeWidth?: number; 'aria-hidden'?: boolean | 'true' | 'false' };
export type IconType = (props: IconProps) => React.ReactElement;

function make(icon: IconDefinition): IconType {
  function Icon({ className }: IconProps) {
    return <FontAwesomeIcon icon={icon} className={cn('shrink-0', className)} aria-hidden="true" />;
  }
  Icon.displayName = icon.iconName;
  return Icon;
}

export const ArrowRight = make(faArrowRight);
export const ArrowUpRight = make(faArrowUpRightFromSquare);
export const Award = make(faAward);
export const Barcode = make(faBarcode);
export const Boxes = make(faBoxesStacked);
export const BrainCircuit = make(faBrain);
export const Check = make(faCheck);
export const ChevronLeft = make(faChevronLeft);
export const ChevronRight = make(faChevronRight);
export const ChevronsRight = make(faAnglesRight);
export const CircleCheck = make(faCircleCheck);
export const CircleHelp = make(faCircleQuestion);
export const Cloud = make(faCloud);
export const Eye = make(faEye);
export const FileScan = make(faFileLines);
export const GitBranch = make(faCodeBranch);
export const Globe2 = make(faGlobe);
export const KeyRound = make(faKey);
export const Layers = make(faLayerGroup);
export const Lightbulb = make(faLightbulb);
export const MapPin = make(faLocationDot);
export const MoveRight = make(faArrowRightLong);
export const Network = make(faNetworkWired);
export const PiggyBank = make(faPiggyBank);
export const Plane = make(faPlane);
export const Plus = make(faPlus);
export const Repeat2 = make(faRotate);
export const Route = make(faRoute);
export const ShieldCheck = make(faShieldHalved);
export const Ship = make(faShip);
export const Truck = make(faTruck);
export const Warehouse = make(faWarehouse);
export const Workflow = make(faDiagramProject);
export const X = make(faXmark);
