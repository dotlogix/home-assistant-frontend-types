import type { FrontendLocaleData } from "../../data/translation";
import { type WeekdayIndex } from "./weekday";
export declare const firstWeekdayIndex: (locale: FrontendLocaleData) => WeekdayIndex;
export declare const firstWeekday: (locale: FrontendLocaleData) => "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
