import { createRoute } from "../runtime/tourGuideRuntime.js"; import { TourGuidePage } from "../features/tour/TourGuidePage";
export const Route = createRoute("/chats/tour-guide")({ component: TourGuidePage });
