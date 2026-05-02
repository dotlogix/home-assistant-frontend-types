import type { HassEntities, HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant, ValuePart } from "../types";
import type { EntityInput } from "./entities/types";
type MockRestCallback = (hass: MockHomeAssistant, method: string, path: string, parameters: Record<string, any> | undefined) => any;
export interface MockHomeAssistant extends HomeAssistant {
    mockEntities: any;
    updateHass(obj: Partial<MockHomeAssistant>): any;
    updateStates(newStates: HassEntities): any;
    addEntities(entities: EntityInput | EntityInput[], replace?: boolean): any;
    updateTranslations(fragment: null | string, language?: string): any;
    addTranslations(translations: Record<string, string>, language?: string): any;
    mockWS<T extends (...args: any[]) => any = any>(type: string, callback: (msg: any, hass: MockHomeAssistant, onChange?: (response: any) => void) => Awaited<ReturnType<T>>): any;
    mockAPI(path: string | RegExp, callback: MockRestCallback): any;
    mockEvent(event: any): any;
    mockTheme(theme: Record<string, string> | null): any;
    formatEntityState(stateObj: HassEntity, state?: string): string;
    formatEntityStateToParts(stateObj: HassEntity, state?: string): ValuePart[];
    formatEntityAttributeValue(stateObj: HassEntity, attribute: string, value?: any): string;
    formatEntityAttributeValueToParts(stateObj: HassEntity, attribute: string, value?: any): ValuePart[];
    formatEntityAttributeName(stateObj: HassEntity, attribute: string): string;
}
export declare const provideHass: (elements: any, overrideData?: Partial<HomeAssistant>, setHassProperty?: boolean) => MockHomeAssistant;
export {};
