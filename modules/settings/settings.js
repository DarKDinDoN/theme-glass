import { CONSTANTS } from "../shared/constants.js";
import { ColorThemeSettings } from "./ColorThemeSettings.js";
import { HideInterfaceSettings } from "./HideInterfaceSettings.js";

/** Settings global names */
export const SETTINGS = {
  ENABLE_BLUR: "enable-blur",
  CHAT_OPACITY_VALUE: "chat-opacity-value",
  CHAT_OPACITY_TIMER: "chat-opacity-timer",
  WINDOW_CONTENT_OPACITY_VALUE: "window-content-opacity-value",
  COLLAPSE_HOTBAR: "collapse-hotbar",
  NO_PAUSE: "no-pause",
  REDUCE_SCENE_LIST: "reduce-scene-list",
  HIDE_INTERFACE_FORM: "hide-interface-form",
  HIDE_INTERFACE_VALUES: "hide-interface-values",
  COLOR_THEME_FORM: "color-theme-form",
  COLOR_THEME_VALUES: "color-theme-values"
};

/** Register settings */
export function registerSettings() {
  // Blur Setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.ENABLE_BLUR, {
    name: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.ENABLE_BLUR}-name`),
    hint: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.ENABLE_BLUR}-hint`),
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
    onChange: () => foundry.utils.debouncedReload()
  });

  // Chat opacity value Setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.CHAT_OPACITY_VALUE, {
    name: game.i18n.localize(
      `${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.CHAT_OPACITY_VALUE}-name`
    ),
    hint: game.i18n.localize(
      `${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.CHAT_OPACITY_VALUE}-hint`
    ),
    scope: "world",
    config: true,
    default: 0.5,
    range: {
      min: 0.1,
      max: 1,
      step: 0.1
    },
    type: Number,
    onChange: () => foundry.utils.debouncedReload()
  });

  // Chat cards opacity timer Setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.CHAT_OPACITY_TIMER, {
    name: game.i18n.localize(
      `${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.CHAT_OPACITY_TIMER}-name`
    ),
    hint: game.i18n.localize(
      `${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.CHAT_OPACITY_TIMER}-hint`
    ),
    scope: "world",
    config: true,
    default: 10,
    range: {
      min: 1,
      max: 30,
      step: 1
    },
    type: Number,
    onChange: () => foundry.utils.debouncedReload()
  });

  // Window content opacity Setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.WINDOW_CONTENT_OPACITY_VALUE, {
    name: game.i18n.localize(
      `${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.WINDOW_CONTENT_OPACITY_VALUE}-name`
    ),
    hint: game.i18n.localize(
      `${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.WINDOW_CONTENT_OPACITY_VALUE}-hint`
    ),
    scope: "world",
    config: true,
    default: 0.9,
    range: {
      min: 0.5,
      max: 1,
      step: 0.1
    },
    type: Number,
    onChange: () => foundry.utils.debouncedReload()
  });

  // Collapse hotbar Setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.COLLAPSE_HOTBAR, {
    name: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.COLLAPSE_HOTBAR}-name`),
    hint: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.COLLAPSE_HOTBAR}-hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => foundry.utils.debouncedReload()
  });

  // No pause Setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.NO_PAUSE, {
    name: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.NO_PAUSE}-name`),
    hint: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.NO_PAUSE}-hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => foundry.utils.debouncedReload()
  });

  // Reduce scene list setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.REDUCE_SCENE_LIST, {
    name: game.i18n.localize(
      `${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.REDUCE_SCENE_LIST}-name`
    ),
    hint: game.i18n.localize(
      `${CONSTANTS.MODULE_NAME}.settings.${SETTINGS.REDUCE_SCENE_LIST}-hint`
    ),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: () => foundry.utils.debouncedReload()
  });

  // Hide interface setting window
  HideInterfaceSettings.register();

  // Color theme settings window
  ColorThemeSettings.register();
}
