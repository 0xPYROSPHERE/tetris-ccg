/**
 * Helper to get environment variable values from __TET_ENV__ placeholders.
 * Returns the substituted value on CI/Vercel, or the default from .env locally.
 *
 * Works in both main site and iframes (checks parent window if needed).
 * Supports booleans, numbers, and strings.
 *
 * @param {string} placeholder - The  placeholder
 * @returns {boolean|number|string}
 */
function getTetEnv(placeholder) {
  // If placeholder was substituted (on CI/Vercel), parse and return the value
  if (!placeholder.startsWith("__TET_ENV__")) {
    return parseEnvValue(placeholder);
  }

  var varName = placeholder.replace(/^__TET_ENV__|__$/g, "");
  var envKey = "TET_ENV_" + varName;

  // Check local TET_ENV_DEFAULTS first
  if (typeof TET_ENV_DEFAULTS !== "undefined" && TET_ENV_DEFAULTS[envKey] !== undefined) {
    return parseEnvValue(TET_ENV_DEFAULTS[envKey]);
  }

  // If in iframe, try parent window
  try {
    if (window.parent && window.parent !== window && window.parent.TET_ENV_DEFAULTS) {
      var parentDefaults = window.parent.TET_ENV_DEFAULTS;
      if (parentDefaults[envKey] !== undefined) {
        return parseEnvValue(parentDefaults[envKey]);
      }
    }
  } catch (e) {
    // Cross-origin restriction, ignore
  }

  // Final fallback
  return null;
}

/**
 * Parse a string value into its appropriate type (boolean, number, or string)
 */
function parseEnvValue(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "null") return null;
  if (!isNaN(value) && value !== "") return Number(value);
  return value;
}