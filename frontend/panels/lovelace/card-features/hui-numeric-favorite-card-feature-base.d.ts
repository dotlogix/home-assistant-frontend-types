import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeKeys } from "../../../common/translations/localize";
import "../../../components/ha-control-select";
import type { ExtEntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LovelaceCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
type NumericFavoriteEntity = HassEntity & {
    attributes: HassEntity["attributes"] & {
        current_position?: number;
        current_tilt_position?: number;
    };
};
export interface NumericFavoriteCardFeatureDefinition<TEntity extends NumericFavoriteEntity> {
    domain: string;
    supportsPosition: (stateObj: TEntity) => boolean;
    getFavoritePositions: (entry?: ExtEntityRegistryEntry | null) => number[] | undefined;
    getCurrentValue: (stateObj: TEntity) => number | undefined;
    normalizeFavoritePositions: (positions?: number[]) => number[];
    defaultFavoritePositions: number[];
    setPositionService: string;
    serviceDataKey: string;
    setPositionLabelKey: LocalizeKeys;
    featureLabelKey: LocalizeKeys;
}
export declare const supportsNumericFavoriteCardFeature: <TEntity extends NumericFavoriteEntity>(hass: HomeAssistant, context: LovelaceCardFeatureContext, definition: NumericFavoriteCardFeatureDefinition<TEntity>) => boolean;
export declare abstract class HuiNumericFavoriteCardFeatureBase<TEntity extends NumericFavoriteEntity, TConfig extends LovelaceCardFeatureConfig> extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    color?: string;
    protected _config?: TConfig;
    protected _entry?: ExtEntityRegistryEntry | null;
    protected _currentPosition?: number;
    private _unsubEntityRegistry?;
    private _subscribedEntityId?;
    private _subscribedConnection?;
    protected abstract get _definition(): NumericFavoriteCardFeatureDefinition<TEntity>;
    protected get _stateObj(): TEntity | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setConfig(config: LovelaceCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _refreshEntitySubscription;
    private _unsubscribeEntityRegistry;
    private _loadEntityEntry;
    private _subscribeEntityEntry;
    private _ensureEntitySubscription;
    private _valueChanged;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
export {};
