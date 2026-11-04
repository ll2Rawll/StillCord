/**
 * @name StillCord
 * @author ll2Rawll
 * @version 3.3.0
 * @description An integrated OLED glass theme, minimal workspace, widgets and thoughtful motion.
 * @website https://github.com/ll2Rawll/StillCord
 * @source https://github.com/ll2Rawll/StillCord/blob/main/StillCord.plugin.js
 */

// Generated from the shared src/. Run npm run build to update.
const STILL_THEME = "/**\n * @name StillCord integrated theme source\n * @author ll2Rawll\n * @version 3.0.0\n * @description Embedded into StillCord.plugin.js by the build script. No separate theme installation.\n */\n\n/* Personalize these values, or use StillSpeed's settings panel. */\n:root {\n    --still-base: #000000;\n    --still-inset: #000000;\n    --still-rail: #000000;\n    --still-surface: #0b0b0b;\n    --still-raised: #141414;\n    --still-hover: #202020;\n    --still-text: #e6e6e6;\n    --still-muted: #ababab;\n    --still-faint: #858585;\n    --still-border: #292929;\n    --still-accent: #d9d9d9;\n    --still-accent-text: #161616;\n    --still-accent-soft: #111111;\n    --still-radius: 20px;\n    --still-radius-lg: 28px;\n    --still-glass-fill: rgb(17 17 17 / 82%);\n    --still-glass-tint: rgb(27 27 27 / 64%);\n    --still-glass-rim: rgb(245 245 245 / 19%);\n    --still-glass-edge: rgb(245 245 245 / 6%);\n    --still-glass-sheen: linear-gradient(145deg, rgb(255 255 255 / 14%) 0%, rgb(255 255 255 / 3%) 29%, transparent 56%, rgb(192 218 255 / 3%) 100%);\n    --still-glass-shadow: inset 0 1px 0 rgb(255 255 255 / 11%), inset 0 -1px 0 rgb(255 255 255 / 3%), 0 8px 28px rgb(0 0 0 / 24%);\n    --still-glass-filter: blur(12px) saturate(135%);\n    --still-star-veil: rgb(0 0 0 / 10%);\n    --still-wallpaper: linear-gradient(var(--still-star-veil), var(--still-star-veil)), var(--still-ambient-map);\n    --still-star-map: url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221440%22%20height%3D%22960%22%20viewBox%3D%220%200%201440%20960%22%3E%3Ccircle%20cx%3D%22241.2%22%20cy%3D%22166.8%22%20r%3D%221.10%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.83%22%2F%3E%3Ccircle%20cx%3D%221373.0%22%20cy%3D%22914.7%22%20r%3D%220.57%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%22812.9%22%20cy%3D%22307.6%22%20r%3D%220.60%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.29%22%2F%3E%3Ccircle%20cx%3D%22591.2%22%20cy%3D%22419.9%22%20r%3D%220.57%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.35%22%2F%3E%3Ccircle%20cx%3D%22335.9%22%20cy%3D%2285.7%22%20r%3D%220.61%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.43%22%2F%3E%3Ccircle%20cx%3D%22584.8%22%20cy%3D%2249.2%22%20r%3D%220.70%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.56%22%2F%3E%3Ccircle%20cx%3D%221276.7%22%20cy%3D%2278.7%22%20r%3D%220.56%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.25%22%2F%3E%3Ccircle%20cx%3D%221406.2%22%20cy%3D%22917.7%22%20r%3D%220.59%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.34%22%2F%3E%3Ccircle%20cx%3D%22487.3%22%20cy%3D%22589.7%22%20r%3D%220.62%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.30%22%2F%3E%3Ccircle%20cx%3D%221404.7%22%20cy%3D%22289.6%22%20r%3D%220.61%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%22343.4%22%20cy%3D%22409.9%22%20r%3D%220.53%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.36%22%2F%3E%3Ccircle%20cx%3D%221112.2%22%20cy%3D%22519.2%22%20r%3D%220.99%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.74%22%2F%3E%3Ccircle%20cx%3D%22392.8%22%20cy%3D%22360.7%22%20r%3D%220.56%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.49%22%2F%3E%3Ccircle%20cx%3D%22453.0%22%20cy%3D%22113.5%22%20r%3D%220.74%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%22840.0%22%20cy%3D%22286.1%22%20r%3D%220.71%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.23%22%2F%3E%3Ccircle%20cx%3D%22671.8%22%20cy%3D%22903.1%22%20r%3D%220.69%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.23%22%2F%3E%3Ccircle%20cx%3D%22780.2%22%20cy%3D%22825.1%22%20r%3D%220.77%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.44%22%2F%3E%3Ccircle%20cx%3D%221009.6%22%20cy%3D%22167.5%22%20r%3D%220.57%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.52%22%2F%3E%3Ccircle%20cx%3D%221150.2%22%20cy%3D%22522.1%22%20r%3D%220.47%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.37%22%2F%3E%3Ccircle%20cx%3D%2297.6%22%20cy%3D%22755.0%22%20r%3D%220.53%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.45%22%2F%3E%3Ccircle%20cx%3D%221004.6%22%20cy%3D%22548.8%22%20r%3D%220.52%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%22643.1%22%20cy%3D%22494.5%22%20r%3D%220.71%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.45%22%2F%3E%3Ccircle%20cx%3D%221356.0%22%20cy%3D%2245.4%22%20r%3D%221.19%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.73%22%2F%3E%3Ccircle%20cx%3D%22321.3%22%20cy%3D%22545.8%22%20r%3D%220.52%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%22917.6%22%20cy%3D%2215.9%22%20r%3D%220.53%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.29%22%2F%3E%3Ccircle%20cx%3D%22199.7%22%20cy%3D%22592.7%22%20r%3D%220.72%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.31%22%2F%3E%3Ccircle%20cx%3D%22834.0%22%20cy%3D%22675.6%22%20r%3D%220.65%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.50%22%2F%3E%3Ccircle%20cx%3D%22791.1%22%20cy%3D%22703.4%22%20r%3D%220.77%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.38%22%2F%3E%3Ccircle%20cx%3D%221312.5%22%20cy%3D%22744.2%22%20r%3D%220.66%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.40%22%2F%3E%3Ccircle%20cx%3D%221400.5%22%20cy%3D%22418.1%22%20r%3D%220.79%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.47%22%2F%3E%3Ccircle%20cx%3D%22124.9%22%20cy%3D%22575.2%22%20r%3D%220.46%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.49%22%2F%3E%3Ccircle%20cx%3D%221340.2%22%20cy%3D%22727.1%22%20r%3D%220.56%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.35%22%2F%3E%3Ccircle%20cx%3D%2296.8%22%20cy%3D%22623.6%22%20r%3D%220.65%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.40%22%2F%3E%3Ccircle%20cx%3D%22166.2%22%20cy%3D%22444.3%22%20r%3D%221.07%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.81%22%2F%3E%3Ccircle%20cx%3D%221378.5%22%20cy%3D%22916.7%22%20r%3D%220.65%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.44%22%2F%3E%3Ccircle%20cx%3D%221207.9%22%20cy%3D%22191.2%22%20r%3D%220.79%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.44%22%2F%3E%3Ccircle%20cx%3D%221281.4%22%20cy%3D%22583.7%22%20r%3D%220.69%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.46%22%2F%3E%3Ccircle%20cx%3D%221302.2%22%20cy%3D%22776.7%22%20r%3D%220.79%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.45%22%2F%3E%3Ccircle%20cx%3D%22254.4%22%20cy%3D%22277.3%22%20r%3D%220.48%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.33%22%2F%3E%3Ccircle%20cx%3D%22909.0%22%20cy%3D%22691.3%22%20r%3D%220.72%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.32%22%2F%3E%3Ccircle%20cx%3D%221186.0%22%20cy%3D%22876.5%22%20r%3D%220.69%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.31%22%2F%3E%3Ccircle%20cx%3D%22431.6%22%20cy%3D%22268.2%22%20r%3D%220.52%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.36%22%2F%3E%3Ccircle%20cx%3D%22607.1%22%20cy%3D%22362.2%22%20r%3D%220.48%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.48%22%2F%3E%3Ccircle%20cx%3D%221254.3%22%20cy%3D%22239.9%22%20r%3D%220.70%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.53%22%2F%3E%3Ccircle%20cx%3D%22275.3%22%20cy%3D%22191.1%22%20r%3D%221.03%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.83%22%2F%3E%3Ccircle%20cx%3D%22104.3%22%20cy%3D%22353.6%22%20r%3D%220.51%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.41%22%2F%3E%3Ccircle%20cx%3D%22691.2%22%20cy%3D%22399.8%22%20r%3D%220.62%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.32%22%2F%3E%3Ccircle%20cx%3D%22947.8%22%20cy%3D%22877.2%22%20r%3D%220.74%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.57%22%2F%3E%3Ccircle%20cx%3D%22756.8%22%20cy%3D%22433.4%22%20r%3D%220.48%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.31%22%2F%3E%3Ccircle%20cx%3D%22273.7%22%20cy%3D%22389.0%22%20r%3D%220.67%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.46%22%2F%3E%3Ccircle%20cx%3D%22726.1%22%20cy%3D%2232.0%22%20r%3D%220.58%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.41%22%2F%3E%3Ccircle%20cx%3D%221303.7%22%20cy%3D%22233.9%22%20r%3D%220.74%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.52%22%2F%3E%3Ccircle%20cx%3D%221329.3%22%20cy%3D%22176.6%22%20r%3D%220.50%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.45%22%2F%3E%3Ccircle%20cx%3D%22166.2%22%20cy%3D%22542.7%22%20r%3D%220.81%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.50%22%2F%3E%3Ccircle%20cx%3D%22493.3%22%20cy%3D%22318.0%22%20r%3D%220.75%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.45%22%2F%3E%3Ccircle%20cx%3D%22995.6%22%20cy%3D%2286.5%22%20r%3D%220.98%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.87%22%2F%3E%3Ccircle%20cx%3D%22476.0%22%20cy%3D%22384.3%22%20r%3D%220.81%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.39%22%2F%3E%3Ccircle%20cx%3D%22149.5%22%20cy%3D%22910.1%22%20r%3D%220.55%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%221205.1%22%20cy%3D%2216.5%22%20r%3D%220.75%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.25%22%2F%3E%3Ccircle%20cx%3D%22773.1%22%20cy%3D%22752.2%22%20r%3D%220.62%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.25%22%2F%3E%3Ccircle%20cx%3D%221181.8%22%20cy%3D%22693.5%22%20r%3D%220.60%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.54%22%2F%3E%3Ccircle%20cx%3D%22754.4%22%20cy%3D%22628.8%22%20r%3D%220.73%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.30%22%2F%3E%3Ccircle%20cx%3D%22254.0%22%20cy%3D%22365.6%22%20r%3D%220.78%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%221059.1%22%20cy%3D%22203.7%22%20r%3D%220.75%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%221409.8%22%20cy%3D%22417.7%22%20r%3D%220.55%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%22271.2%22%20cy%3D%22769.6%22%20r%3D%220.74%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.43%22%2F%3E%3Ccircle%20cx%3D%22201.1%22%20cy%3D%22420.9%22%20r%3D%220.98%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.71%22%2F%3E%3Ccircle%20cx%3D%22970.5%22%20cy%3D%22736.6%22%20r%3D%220.54%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%22242.7%22%20cy%3D%22493.7%22%20r%3D%220.52%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.52%22%2F%3E%3Ccircle%20cx%3D%22890.9%22%20cy%3D%22619.4%22%20r%3D%220.73%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%22677.8%22%20cy%3D%22891.2%22%20r%3D%220.71%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.50%22%2F%3E%3Ccircle%20cx%3D%22187.7%22%20cy%3D%22531.9%22%20r%3D%220.65%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%221175.5%22%20cy%3D%22708.8%22%20r%3D%220.64%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.31%22%2F%3E%3Ccircle%20cx%3D%22606.3%22%20cy%3D%22572.3%22%20r%3D%220.70%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.26%22%2F%3E%3Ccircle%20cx%3D%22254.2%22%20cy%3D%22421.1%22%20r%3D%220.47%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.57%22%2F%3E%3Ccircle%20cx%3D%22823.1%22%20cy%3D%22323.6%22%20r%3D%220.55%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%221168.9%22%20cy%3D%22703.7%22%20r%3D%220.49%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%22776.7%22%20cy%3D%22300.7%22%20r%3D%221.01%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.89%22%2F%3E%3Ccircle%20cx%3D%221156.5%22%20cy%3D%22370.1%22%20r%3D%220.60%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.48%22%2F%3E%3Ccircle%20cx%3D%22746.5%22%20cy%3D%22625.1%22%20r%3D%220.57%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.25%22%2F%3E%3Ccircle%20cx%3D%221061.7%22%20cy%3D%2231.6%22%20r%3D%220.47%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.37%22%2F%3E%3Ccircle%20cx%3D%22877.5%22%20cy%3D%22702.0%22%20r%3D%220.60%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.23%22%2F%3E%3Ccircle%20cx%3D%221167.8%22%20cy%3D%22151.8%22%20r%3D%220.71%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.45%22%2F%3E%3Ccircle%20cx%3D%221149.6%22%20cy%3D%22844.6%22%20r%3D%220.46%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.32%22%2F%3E%3Ccircle%20cx%3D%22320.5%22%20cy%3D%22105.0%22%20r%3D%220.67%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.32%22%2F%3E%3Ccircle%20cx%3D%22368.3%22%20cy%3D%22181.8%22%20r%3D%220.60%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%221193.1%22%20cy%3D%22124.6%22%20r%3D%220.60%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.40%22%2F%3E%3Ccircle%20cx%3D%221295.6%22%20cy%3D%22288.0%22%20r%3D%220.69%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.50%22%2F%3E%3Ccircle%20cx%3D%22332.2%22%20cy%3D%22478.9%22%20r%3D%221.18%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.71%22%2F%3E%3Ccircle%20cx%3D%22562.8%22%20cy%3D%22376.9%22%20r%3D%220.59%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.29%22%2F%3E%3Ccircle%20cx%3D%228.5%22%20cy%3D%22706.6%22%20r%3D%220.57%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.50%22%2F%3E%3Ccircle%20cx%3D%22387.8%22%20cy%3D%22105.6%22%20r%3D%220.63%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.53%22%2F%3E%3Ccircle%20cx%3D%22577.1%22%20cy%3D%22797.8%22%20r%3D%220.74%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.35%22%2F%3E%3Ccircle%20cx%3D%22801.3%22%20cy%3D%22550.3%22%20r%3D%220.59%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.25%22%2F%3E%3Ccircle%20cx%3D%22401.9%22%20cy%3D%22547.2%22%20r%3D%220.57%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.31%22%2F%3E%3Ccircle%20cx%3D%22862.6%22%20cy%3D%22519.9%22%20r%3D%220.62%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.47%22%2F%3E%3Ccircle%20cx%3D%22498.0%22%20cy%3D%22854.3%22%20r%3D%220.72%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.23%22%2F%3E%3Ccircle%20cx%3D%22319.6%22%20cy%3D%22482.1%22%20r%3D%220.45%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.57%22%2F%3E%3Ccircle%20cx%3D%221074.3%22%20cy%3D%22361.6%22%20r%3D%220.57%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.44%22%2F%3E%3Ccircle%20cx%3D%22290.6%22%20cy%3D%22883.5%22%20r%3D%220.97%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.86%22%2F%3E%3Ccircle%20cx%3D%221369.3%22%20cy%3D%22648.8%22%20r%3D%220.62%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.32%22%2F%3E%3Ccircle%20cx%3D%22118.5%22%20cy%3D%22528.7%22%20r%3D%220.56%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.41%22%2F%3E%3Ccircle%20cx%3D%221356.4%22%20cy%3D%22157.8%22%20r%3D%220.79%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.54%22%2F%3E%3Ccircle%20cx%3D%22365.9%22%20cy%3D%22683.0%22%20r%3D%220.51%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.41%22%2F%3E%3Ccircle%20cx%3D%221045.6%22%20cy%3D%22448.0%22%20r%3D%220.81%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.56%22%2F%3E%3Ccircle%20cx%3D%22560.2%22%20cy%3D%22737.6%22%20r%3D%220.66%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.25%22%2F%3E%3Ccircle%20cx%3D%22230.2%22%20cy%3D%22239.8%22%20r%3D%220.59%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.25%22%2F%3E%3Ccircle%20cx%3D%22230.5%22%20cy%3D%22541.7%22%20r%3D%220.71%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.55%22%2F%3E%3Ccircle%20cx%3D%22103.1%22%20cy%3D%22843.9%22%20r%3D%220.51%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%22390.0%22%20cy%3D%22906.3%22%20r%3D%220.52%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.33%22%2F%3E%3Ccircle%20cx%3D%221045.5%22%20cy%3D%22322.5%22%20r%3D%221.01%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.87%22%2F%3E%3Ccircle%20cx%3D%221191.7%22%20cy%3D%22390.4%22%20r%3D%220.68%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.54%22%2F%3E%3Ccircle%20cx%3D%22860.5%22%20cy%3D%22925.0%22%20r%3D%220.73%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.52%22%2F%3E%3Ccircle%20cx%3D%2228.5%22%20cy%3D%22641.9%22%20r%3D%220.59%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.46%22%2F%3E%3Ccircle%20cx%3D%22572.8%22%20cy%3D%22534.8%22%20r%3D%220.58%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.49%22%2F%3E%3Ccircle%20cx%3D%2246.9%22%20cy%3D%22470.6%22%20r%3D%220.70%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%22703.8%22%20cy%3D%22223.3%22%20r%3D%220.49%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.33%22%2F%3E%3Ccircle%20cx%3D%22593.2%22%20cy%3D%22363.2%22%20r%3D%220.48%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.23%22%2F%3E%3Ccircle%20cx%3D%22841.0%22%20cy%3D%22534.5%22%20r%3D%220.62%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.30%22%2F%3E%3Ccircle%20cx%3D%22921.0%22%20cy%3D%22449.6%22%20r%3D%220.51%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.29%22%2F%3E%3Ccircle%20cx%3D%221075.6%22%20cy%3D%22661.1%22%20r%3D%220.78%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%2271.4%22%20cy%3D%22416.4%22%20r%3D%221.12%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.73%22%2F%3E%3Ccircle%20cx%3D%221037.6%22%20cy%3D%22511.3%22%20r%3D%220.55%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%2246.7%22%20cy%3D%22423.2%22%20r%3D%220.74%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.52%22%2F%3E%3Ccircle%20cx%3D%22799.8%22%20cy%3D%22946.3%22%20r%3D%220.52%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.26%22%2F%3E%3Ccircle%20cx%3D%22884.8%22%20cy%3D%22189.9%22%20r%3D%220.78%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.43%22%2F%3E%3Ccircle%20cx%3D%22802.3%22%20cy%3D%22301.6%22%20r%3D%220.46%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.52%22%2F%3E%3Ccircle%20cx%3D%22450.3%22%20cy%3D%2231.0%22%20r%3D%220.64%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.51%22%2F%3E%3Ccircle%20cx%3D%22798.9%22%20cy%3D%22406.9%22%20r%3D%220.78%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%22367.1%22%20cy%3D%2261.2%22%20r%3D%220.68%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.43%22%2F%3E%3Ccircle%20cx%3D%22671.6%22%20cy%3D%22392.2%22%20r%3D%220.61%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%221003.9%22%20cy%3D%22403.3%22%20r%3D%220.56%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.52%22%2F%3E%3Ccircle%20cx%3D%22266.8%22%20cy%3D%22938.6%22%20r%3D%220.96%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.71%22%2F%3E%3Ccircle%20cx%3D%221176.6%22%20cy%3D%22512.0%22%20r%3D%220.67%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.34%22%2F%3E%3Ccircle%20cx%3D%221100.0%22%20cy%3D%2290.5%22%20r%3D%220.63%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.25%22%2F%3E%3Ccircle%20cx%3D%221143.2%22%20cy%3D%22444.0%22%20r%3D%220.79%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.23%22%2F%3E%3Ccircle%20cx%3D%221385.8%22%20cy%3D%22455.5%22%20r%3D%220.47%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.23%22%2F%3E%3Ccircle%20cx%3D%22349.2%22%20cy%3D%22299.2%22%20r%3D%220.59%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.26%22%2F%3E%3Ccircle%20cx%3D%2256.9%22%20cy%3D%22415.7%22%20r%3D%220.55%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.23%22%2F%3E%3Ccircle%20cx%3D%221311.9%22%20cy%3D%22665.5%22%20r%3D%220.77%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.40%22%2F%3E%3Ccircle%20cx%3D%221227.8%22%20cy%3D%22501.0%22%20r%3D%220.81%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.26%22%2F%3E%3Ccircle%20cx%3D%221135.6%22%20cy%3D%22289.8%22%20r%3D%220.47%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.23%22%2F%3E%3Ccircle%20cx%3D%22591.7%22%20cy%3D%22382.3%22%20r%3D%220.71%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.22%22%2F%3E%3Ccircle%20cx%3D%22558.8%22%20cy%3D%22416.3%22%20r%3D%220.97%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.90%22%2F%3E%3Ccircle%20cx%3D%22742.9%22%20cy%3D%22643.1%22%20r%3D%220.52%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.29%22%2F%3E%3Ccircle%20cx%3D%22630.4%22%20cy%3D%22688.0%22%20r%3D%220.48%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.38%22%2F%3E%3Ccircle%20cx%3D%221310.9%22%20cy%3D%22834.4%22%20r%3D%220.63%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.50%22%2F%3E%3Ccircle%20cx%3D%221255.2%22%20cy%3D%22771.1%22%20r%3D%220.69%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%22932.9%22%20cy%3D%22420.9%22%20r%3D%220.48%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.53%22%2F%3E%3Ccircle%20cx%3D%22184.4%22%20cy%3D%22150.2%22%20r%3D%220.48%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.49%22%2F%3E%3Ccircle%20cx%3D%221094.6%22%20cy%3D%22729.3%22%20r%3D%220.71%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.32%22%2F%3E%3Ccircle%20cx%3D%22995.2%22%20cy%3D%22814.7%22%20r%3D%220.46%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.45%22%2F%3E%3Ccircle%20cx%3D%22448.0%22%20cy%3D%22348.3%22%20r%3D%220.45%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.30%22%2F%3E%3Ccircle%20cx%3D%22154.6%22%20cy%3D%22564.0%22%20r%3D%220.70%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.47%22%2F%3E%3Ccircle%20cx%3D%22966.2%22%20cy%3D%2227.8%22%20r%3D%221.18%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.71%22%2F%3E%3Ccircle%20cx%3D%22161.5%22%20cy%3D%22532.2%22%20r%3D%220.55%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.25%22%2F%3E%3Ccircle%20cx%3D%22303.7%22%20cy%3D%2284.4%22%20r%3D%220.47%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.34%22%2F%3E%3Ccircle%20cx%3D%22348.5%22%20cy%3D%22499.0%22%20r%3D%220.60%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.24%22%2F%3E%3Ccircle%20cx%3D%22264.9%22%20cy%3D%22698.2%22%20r%3D%220.70%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.31%22%2F%3E%3Ccircle%20cx%3D%22945.8%22%20cy%3D%22868.6%22%20r%3D%220.59%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.22%22%2F%3E%3Ccircle%20cx%3D%2254.2%22%20cy%3D%22380.8%22%20r%3D%220.75%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.54%22%2F%3E%3Ccircle%20cx%3D%22469.3%22%20cy%3D%22930.3%22%20r%3D%220.55%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.31%22%2F%3E%3Ccircle%20cx%3D%221362.8%22%20cy%3D%22166.1%22%20r%3D%220.69%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.37%22%2F%3E%3Ccircle%20cx%3D%22674.0%22%20cy%3D%2211.5%22%20r%3D%220.73%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.33%22%2F%3E%3Ccircle%20cx%3D%221084.9%22%20cy%3D%22308.4%22%20r%3D%220.56%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.47%22%2F%3E%3Ccircle%20cx%3D%22560.8%22%20cy%3D%22576.7%22%20r%3D%221.16%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.87%22%2F%3E%3Ccircle%20cx%3D%22142.1%22%20cy%3D%22814.6%22%20r%3D%220.49%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.53%22%2F%3E%3Ccircle%20cx%3D%22795.3%22%20cy%3D%2258.1%22%20r%3D%220.53%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.53%22%2F%3E%3Ccircle%20cx%3D%221361.8%22%20cy%3D%22148.7%22%20r%3D%220.69%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.29%22%2F%3E%3Ccircle%20cx%3D%2228.7%22%20cy%3D%22680.7%22%20r%3D%220.73%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.22%22%2F%3E%3Ccircle%20cx%3D%22679.8%22%20cy%3D%22602.3%22%20r%3D%220.80%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.48%22%2F%3E%3Ccircle%20cx%3D%22207.0%22%20cy%3D%22466.5%22%20r%3D%220.68%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.55%22%2F%3E%3Ccircle%20cx%3D%22148.4%22%20cy%3D%22508.5%22%20r%3D%220.46%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%22933.4%22%20cy%3D%22346.5%22%20r%3D%220.80%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.34%22%2F%3E%3Ccircle%20cx%3D%2229.0%22%20cy%3D%22674.9%22%20r%3D%220.65%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.48%22%2F%3E%3Ccircle%20cx%3D%221395.7%22%20cy%3D%22946.3%22%20r%3D%220.79%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.54%22%2F%3E%3Ccircle%20cx%3D%221298.4%22%20cy%3D%22491.1%22%20r%3D%221.03%22%20fill%3D%22%23a6c5e5%22%20opacity%3D%220.72%22%2F%3E%3Ccircle%20cx%3D%221314.7%22%20cy%3D%22375.8%22%20r%3D%220.49%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.29%22%2F%3E%3Ccircle%20cx%3D%2255.6%22%20cy%3D%22704.0%22%20r%3D%220.57%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.47%22%2F%3E%3Ccircle%20cx%3D%22914.0%22%20cy%3D%22573.7%22%20r%3D%220.75%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.50%22%2F%3E%3Ccircle%20cx%3D%22885.4%22%20cy%3D%22587.2%22%20r%3D%220.46%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.28%22%2F%3E%3Ccircle%20cx%3D%221333.6%22%20cy%3D%22494.4%22%20r%3D%220.64%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.34%22%2F%3E%3Ccircle%20cx%3D%22763.6%22%20cy%3D%22834.1%22%20r%3D%220.76%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.26%22%2F%3E%3Ccircle%20cx%3D%221218.0%22%20cy%3D%22682.7%22%20r%3D%220.65%22%20fill%3D%22%23d5dfe9%22%20opacity%3D%220.48%22%2F%3E%3Cpath%20d%3D%22M190.8%20183h6.4M194%20179.8v6.4%22%20stroke%3D%22%23b8d3ef%22%20stroke-width%3D%22.55%22%20opacity%3D%22.48%22%2F%3E%3Ccircle%20cx%3D%22194%22%20cy%3D%22183%22%20r%3D%22.9%22%20fill%3D%22%23edf5ff%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M994.2%20116h5.6M997%20113.2v5.6%22%20stroke%3D%22%23b8d3ef%22%20stroke-width%3D%22.55%22%20opacity%3D%22.48%22%2F%3E%3Ccircle%20cx%3D%22997%22%20cy%3D%22116%22%20r%3D%22.9%22%20fill%3D%22%23edf5ff%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M709%20782h6M712%20779v6%22%20stroke%3D%22%23b8d3ef%22%20stroke-width%3D%22.55%22%20opacity%3D%22.48%22%2F%3E%3Ccircle%20cx%3D%22712%22%20cy%3D%22782%22%20r%3D%22.9%22%20fill%3D%22%23edf5ff%22%20opacity%3D%22.9%22%2F%3E%3Cpath%20d%3D%22M1281.4%20624h5.2M1284%20621.4v5.2%22%20stroke%3D%22%23b8d3ef%22%20stroke-width%3D%22.55%22%20opacity%3D%22.48%22%2F%3E%3Ccircle%20cx%3D%221284%22%20cy%3D%22624%22%20r%3D%22.9%22%20fill%3D%22%23edf5ff%22%20opacity%3D%22.9%22%2F%3E%3C%2Fsvg%3E\");\n    --still-ambient-map: url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221920%22%20height%3D%221080%22%20viewBox%3D%220%200%201920%201080%22%3E%20%3Cdefs%3E%20%3CradialGradient%20id%3D%22wash%22%20cx%3D%2290%25%22%20cy%3D%224%25%22%20r%3D%2278%25%22%3E%20%3Cstop%20stop-color%3D%22%23161616%22%2F%3E%20%3Cstop%20offset%3D%22.52%22%20stop-color%3D%22%23060606%22%2F%3E%20%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23010101%22%2F%3E%20%3C%2FradialGradient%3E%20%3ClinearGradient%20id%3D%22satin%22%20x1%3D%220%22%20y1%3D%22960%22%20x2%3D%221720%22%20y2%3D%22260%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%20%3Cstop%20stop-color%3D%22%23030303%22%2F%3E%20%3Cstop%20offset%3D%22.24%22%20stop-color%3D%22%23191919%22%2F%3E%20%3Cstop%20offset%3D%22.48%22%20stop-color%3D%22%230a0a0a%22%2F%3E%20%3Cstop%20offset%3D%22.75%22%20stop-color%3D%22%23242424%22%2F%3E%20%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23050505%22%2F%3E%20%3C%2FlinearGradient%3E%20%3ClinearGradient%20id%3D%22edge%22%20x1%3D%22180%22%20y1%3D%22600%22%20x2%3D%221830%22%20y2%3D%22140%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%20%3Cstop%20stop-color%3D%22%23484848%22%20stop-opacity%3D%220%22%2F%3E%20%3Cstop%20offset%3D%22.23%22%20stop-color%3D%22%23484848%22%20stop-opacity%3D%22.32%22%2F%3E%20%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%23696969%22%20stop-opacity%3D%22.1%22%2F%3E%20%3Cstop%20offset%3D%22.82%22%20stop-color%3D%22%23646464%22%20stop-opacity%3D%22.38%22%2F%3E%20%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23484848%22%20stop-opacity%3D%220%22%2F%3E%20%3C%2FlinearGradient%3E%20%3ClinearGradient%20id%3D%22fold%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%22560%22%20y2%3D%22740%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%20%3Cstop%20stop-color%3D%22%23161616%22%2F%3E%20%3Cstop%20offset%3D%22.58%22%20stop-color%3D%22%23070707%22%2F%3E%20%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23020202%22%2F%3E%20%3C%2FlinearGradient%3E%20%3C%2Fdefs%3E%20%3Cpath%20fill%3D%22url(%23wash)%22%20d%3D%22M0%200h1920v1080H0z%22%2F%3E%20%3Cpath%20fill%3D%22url(%23fold)%22%20d%3D%22M-180-100H990C792%2025%20709%20112%20561%20175%20341%20268%20101%20239-180%20470Z%22%2F%3E%20%3Cpath%20fill%3D%22url(%23satin)%22%20d%3D%22M-160%201110C105%20390%20432%20533%20726%20696%20978%20836%201146%20796%201325%20560%201513%20313%201618%2072%202090-140L2160%20231C1751%20284%201655%20760%201347%20962%201056%201153%20781%201048%20548%20931%20207%20761%2065%20858-22%201270Z%22%2F%3E%20%3Cpath%20fill%3D%22none%22%20stroke%3D%22url(%23edge)%22%20stroke-width%3D%221.35%22%20d%3D%22M-160%201110C105%20390%20432%20533%20726%20696%20978%20836%201146%20796%201325%20560%201513%20313%201618%2072%202090-140%22%2F%3E%20%3Cpath%20fill%3D%22none%22%20stroke%3D%22url(%23edge)%22%20stroke-width%3D%22.7%22%20opacity%3D%22.35%22%20d%3D%22M-130%201140C136%20457%20439%20590%20719%20745%20975%20887%201166%20848%201367%20593%201569%20337%201682%20122%202100-62%22%2F%3E%20%3C%2Fsvg%3E\");\n    --still-wallpaper-size: cover;\n    --still-wallpaper-repeat: no-repeat;\n    --still-font: \"Segoe UI Variable Text\", \"Segoe UI\", system-ui, sans-serif;\n}\n\n/* Semantic tokens style every screen that uses Discord's design system.\n   Both current tokens and older desktop tokens are covered. */\n:root, .theme-dark, .theme-light, .theme-darker, .theme-midnight {\n    color-scheme: dark;\n    --font-primary: var(--still-font) !important;\n    --font-display: var(--still-font) !important;\n    --font-headline: var(--still-font) !important;\n    --font-code: \"Cascadia Code\", Consolas, monospace !important;\n    --background-base-lowest: var(--still-rail) !important;\n    --background-base-lower: var(--still-inset) !important;\n    --background-base-low: var(--still-base) !important;\n    --background-surface-high: var(--still-surface) !important;\n    --background-surface-higher: var(--still-raised) !important;\n    --background-surface-highest: var(--still-hover) !important;\n    --background-primary: var(--still-base) !important;\n    --background-secondary: var(--still-inset) !important;\n    --background-secondary-alt: var(--still-rail) !important;\n    --background-tertiary: var(--still-rail) !important;\n    --background-floating: var(--still-surface) !important;\n    --background-accent: var(--still-raised) !important;\n    --background-nested-floating: var(--still-raised) !important;\n    --background-mobile-primary: var(--still-base) !important;\n    --background-mobile-secondary: var(--still-inset) !important;\n    --background-mod-subtle: color-mix(in srgb, var(--still-text) 3%, transparent) !important;\n    --background-mod-normal: color-mix(in srgb, var(--still-text) 5%, transparent) !important;\n    --background-mod-strong: color-mix(in srgb, var(--still-text) 8%, transparent) !important;\n    --background-mod-muted: color-mix(in srgb, var(--still-text) 2%, transparent) !important;\n    --background-modifier-hover: var(--background-mod-normal) !important;\n    --background-modifier-active: var(--background-mod-strong) !important;\n    --background-modifier-selected: var(--still-accent-soft) !important;\n    --background-modifier-accent: var(--still-border) !important;\n    --background-message-hover: var(--background-mod-subtle) !important;\n    --background-mentioned: color-mix(in srgb, var(--still-accent) 9%, transparent) !important;\n    --background-mentioned-hover: color-mix(in srgb, var(--still-accent) 13%, transparent) !important;\n    --background-message-highlight: var(--background-mentioned) !important;\n    --background-message-highlight-hover: var(--background-mentioned-hover) !important;\n    --background-code: var(--still-inset) !important;\n    --background-brand: var(--still-accent) !important;\n    --bg-base-primary: var(--still-base) !important;\n    --bg-base-secondary: var(--still-inset) !important;\n    --bg-base-tertiary: var(--still-rail) !important;\n    --bg-surface-raised: var(--still-surface) !important;\n    --bg-surface-overlay: var(--still-surface) !important;\n    --bg-surface-overlay-tmp: var(--still-surface) !important;\n    --bg-overlay-chat: none !important;\n    --bg-overlay-1: none !important;\n    --bg-overlay-2: none !important;\n    --bg-overlay-3: none !important;\n    --bg-overlay-selected: none !important;\n    --app-frame-background: var(--still-rail) !important;\n    --app-frame-border: var(--still-border) !important;\n    --chat-background: var(--still-base) !important;\n    --chat-background-default: var(--still-base) !important;\n    --channel-background-default: var(--still-inset) !important;\n    --channeltextarea-background: var(--still-surface) !important;\n    --input-background: var(--still-inset) !important;\n    --input-background-default: var(--still-inset) !important;\n    --input-background-hover: var(--still-surface) !important;\n    --input-border: var(--still-border) !important;\n    --modal-background: var(--still-base) !important;\n    --modal-footer-background: var(--still-inset) !important;\n    --card-background-default: var(--still-surface) !important;\n    --card-border-default: var(--still-border) !important;\n    --home-background: var(--still-base) !important;\n    --header-primary: var(--still-text) !important;\n    --header-secondary: var(--still-muted) !important;\n    --text-normal: var(--still-text) !important;\n    --text-default: var(--still-text) !important;\n    --text-strong: var(--still-text) !important;\n    --text-muted: var(--still-muted) !important;\n    --text-subtle: var(--still-muted) !important;\n    --text-brand: var(--still-accent) !important;\n    --text-link: var(--still-accent) !important;\n    --text-link-low-saturation: var(--still-accent) !important;\n    --text-invert: var(--still-accent-text) !important;\n    --text-positive: #8bd5ad !important;\n    --channels-default: var(--still-muted) !important;\n    --channel-icon: var(--still-faint) !important;\n    --interactive-normal: var(--still-muted) !important;\n    --interactive-hover: var(--still-text) !important;\n    --interactive-active: var(--still-text) !important;\n    --interactive-muted: var(--still-faint) !important;\n    --interactive-text-default: var(--still-muted) !important;\n    --interactive-text-hover: var(--still-text) !important;\n    --interactive-text-active: var(--still-text) !important;\n    --interactive-icon-default: var(--still-muted) !important;\n    --interactive-icon-hover: var(--still-text) !important;\n    --interactive-icon-active: var(--still-text) !important;\n    --interactive-background-hover: var(--still-hover) !important;\n    --interactive-background-selected: var(--still-accent-soft) !important;\n    --icon-primary: var(--still-text) !important;\n    --icon-secondary: var(--still-muted) !important;\n    --icon-tertiary: var(--still-faint) !important;\n    --border-subtle: color-mix(in srgb, var(--still-border) 70%, transparent) !important;\n    --border-muted: var(--border-subtle) !important;\n    --border-normal: var(--still-border) !important;\n    --border-strong: color-mix(in srgb, var(--still-muted) 45%, var(--still-border)) !important;\n    --border-focus: var(--still-accent) !important;\n    --focus-primary: var(--still-accent) !important;\n    --chat-border: var(--still-border) !important;\n    --divider-subtle: var(--still-border) !important;\n    --brand-experiment: var(--still-accent) !important;\n    --brand-500: var(--still-accent) !important;\n    --brand-560: color-mix(in srgb, var(--still-accent) 90%, black) !important;\n    --brand-600: color-mix(in srgb, var(--still-accent) 80%, black) !important;\n    --control-brand-foreground: var(--still-accent) !important;\n    --control-brand-foreground-new: var(--still-accent) !important;\n    --control-primary-background-default: var(--still-accent) !important;\n    --control-primary-background-hover: color-mix(in srgb, var(--still-accent) 85%, white) !important;\n    --control-primary-background-active: color-mix(in srgb, var(--still-accent) 90%, black) !important;\n    --control-primary-text-default: var(--still-accent-text) !important;\n    --control-primary-text-hover: var(--still-accent-text) !important;\n    --control-primary-text-active: var(--still-accent-text) !important;\n    --control-primary-icon-default: var(--still-accent-text) !important;\n    --control-primary-icon-hover: var(--still-accent-text) !important;\n    --control-primary-icon-active: var(--still-accent-text) !important;\n    --control-primary-border-default: transparent !important;\n    --control-primary-border-hover: transparent !important;\n    --control-primary-border-active: transparent !important;\n    --control-secondary-background-default: var(--still-raised) !important;\n    --control-secondary-background-hover: var(--still-hover) !important;\n    --control-secondary-background-active: var(--still-accent-soft) !important;\n    --control-secondary-text-default: var(--still-text) !important;\n    --control-secondary-text-hover: var(--still-text) !important;\n    --control-secondary-text-active: var(--still-text) !important;\n    --button-secondary-background: var(--still-raised) !important;\n    --button-secondary-background-hover: var(--still-hover) !important;\n    --button-secondary-text: var(--still-text) !important;\n    --button-outline-primary-border: var(--still-border) !important;\n    --button-outline-primary-text: var(--still-text) !important;\n    --scrollbar-auto-thumb: var(--still-border) !important;\n    --scrollbar-auto-track: transparent !important;\n    --scrollbar-thin-thumb: var(--still-border) !important;\n    --scrollbar-thin-track: transparent !important;\n    --scrollbar-auto-scrollbar-color-thumb: var(--still-border) !important;\n    --scrollbar-auto-scrollbar-color-track: transparent !important;\n    --radius-xs: 4px !important;\n    --radius-sm: 6px !important;\n    --radius-md: 7px !important;\n    --radius-lg: var(--still-radius) !important;\n    --radius-xl: var(--still-radius-lg) !important;\n    --button-border-radius: 999px !important;\n    --button-border-radius-lg: var(--still-radius) !important;\n}\n\n/* Still / Air — shared materials. The layout below activates only after the\n   companion has found and marked a compatible Discord shell. */\n:root { --still-air-ready: 1; --still-reading-width: 880px; --still-composer-width: 680px; --still-drawer-width: 344px; --still-chat-zoom: .85; }\n/* Discord's account-level gradient palette can otherwise bleed through the\n   transparent canvas and nested channel/server navigation surfaces. */\n:root, .theme-dark, .theme-light, .theme-darker, .theme-midnight, .custom-theme-background {\n    --background-gradient-app-frame: none !important;\n    --background-gradient-chat: none !important;\n    --background-gradient-chat-preview: none !important;\n    --background-gradient-lowest: none !important;\n    --background-gradient-lower: none !important;\n    --background-gradient-low: none !important;\n    --background-gradient-high: none !important;\n    --background-gradient-higher: none !important;\n    --background-gradient-highest: none !important;\n}\nbody, #app-mount { background-color: var(--still-base); font-family: var(--still-font); }\n#app-mount {\n    background-image: var(--still-wallpaper);\n    background-size: var(--still-wallpaper-size, cover);\n    background-position: center top;\n    background-repeat: var(--still-wallpaper-repeat, no-repeat);\n}\n#app-mount ::selection { background: var(--still-accent-soft); color: var(--still-text); }\n\n/* Monochrome presentation. Keep the native `color` on names so a CSS dot\n   inherits the role color, while text-fill paints only the lettering gray.\n   No name scanning, mutation observers, timers, or duplicated React nodes. */\n:root:not(.still-color) :is([class*=\"username_\"], [class*=\"globalName_\"], [class*=\"displayName_\"]) {\n    -webkit-text-fill-color: var(--still-text) !important;\n    text-shadow: none !important;\n    text-decoration-color: var(--still-muted) !important;\n    font-family: var(--font-primary) !important;\n    font-style: normal !important;\n    background-image: none !important;\n    animation: none !important;\n}\n/* Apply type emphasis only to the leaf name, so nested member wrappers do\n   not compound the size increase or draw a second underline. */\n:root:not(.still-color) :is([class*=\"username_\"], [class*=\"globalName_\"], [class*=\"displayName_\"]):not(:has([class*=\"username_\"], [class*=\"globalName_\"], [class*=\"displayName_\"])) {\n    text-decoration-line: underline !important;\n    text-decoration-style: solid !important;\n    text-decoration-thickness: 1px !important;\n    text-underline-offset: 2px;\n    text-decoration-skip-ink: auto;\n}\n:root:not(.still-color) [class*=\"username_\"]:not(:has([class*=\"username_\"], [class*=\"globalName_\"], [class*=\"displayName_\"])) {\n    font-size: 1.0625em !important;\n}\n/* Members have nested username wrappers; only the actual inner name gets a dot.\n   A name without a server role naturally uses a neutral dot. */\n:root:not(.still-color) :is([class*=\"username_\"], [class*=\"globalName_\"], [class*=\"displayName_\"]):not(:has([class*=\"username_\"], [class*=\"globalName_\"], [class*=\"displayName_\"]))::before {\n    content: \"\";\n    display: inline-block;\n    width: 5px; height: 5px;\n    margin-inline: 0 6px;\n    vertical-align: .18em;\n    border-radius: 50%;\n    background: currentColor;\n    box-shadow: none;\n    pointer-events: none;\n}\n/* Filter small identity artwork, never the app or conversation surface: the\n   role dots retain their color and shared photos/video retain their content. */\n:root:not(.still-color) :is(\n    img[class*=\"avatar_\"], .wrapper__44b0c,\n    [class*=\"guilds_\"] img, [class*=\"guilds_\"] [class*=\"folderIcon_\"],\n    [class*=\"guilds_\"] [class*=\"folderPreview_\"],\n    [class*=\"guildIcon_\"], [class*=\"guilds_\"] [class*=\"iconBadge_\"],\n    img[class*=\"roleIcon_\"], img.emoji, img[class*=\"emoji_\"],\n    [class*=\"sidebarList_\"] [class*=\"name_\"], [class*=\"membersGroup_\"],\n    [class*=\"activity_\"] img, [class*=\"activityCard_\"] img\n) { filter: grayscale(1) !important; }\n:root:not(.still-color) :is([class*=\"avatarDecoration_\"], [class*=\"profileEffect_\"]) { display: none !important; }\n/* Native nameplate artwork is a sibling of the account/member controls. */\n:root:not(.still-color) :is([class*=\"nameplated_\"], [class*=\"panels_\"]) .container_df39b2 { display: none !important; }\n:root:not(.still-color) [class*=\"nameplated_\"] { padding-inline-end: 0; }\n:root:not(.still-color) [class*=\"numberBadge_\"] {\n    background: #d9d9d9 !important;\n    color: #161616 !important;\n    -webkit-text-fill-color: #161616 !important;\n    font-weight: 600;\n}\n:root:not(.still-color) [class*=\"botTag_\"] {\n    background: var(--still-hover) !important;\n    color: var(--still-muted) !important;\n}\n:root:not(.still-color) :is(.mention, [class*=\"roleMention_\"], [class*=\"channelMention_\"]) {\n    color: var(--still-text) !important;\n    background-color: var(--still-accent-soft) !important;\n}\n:root:not(.still-color), :root:not(.still-color) :is(.theme-dark, .theme-light, .theme-darker, .theme-midnight) {\n    --still-glass-sheen: linear-gradient(145deg, rgb(255 255 255 / 14%) 0%, rgb(255 255 255 / 3%) 29%, transparent 56%, rgb(220 220 220 / 3%) 100%);\n    --text-positive: var(--still-text) !important;\n    --status-positive: #c8c8c8 !important;\n    --status-warning: #a3a3a3 !important;\n    --status-danger: #e6e6e6 !important;\n    --status-positive-background: #c8c8c8 !important;\n    --status-warning-background: #a3a3a3 !important;\n    --status-danger-background: #e6e6e6 !important;\n    --status-positive-text: #161616 !important;\n    --status-warning-text: #161616 !important;\n    --status-danger-text: #161616 !important;\n}\n[class*=\"chatContent_\"], [class*=\"peopleColumn_\"],\n[class*=\"contentRegion_\"], [class*=\"contentRegionScroller_\"],\n[class*=\"userSettingsContentPanel_\"], [class*=\"pageBody_\"] {\n    background-color: var(--still-base) !important;\n    background-image: var(--still-wallpaper) !important;\n    background-size: var(--still-wallpaper-size, cover) !important;\n    background-position: center top !important;\n    background-repeat: var(--still-wallpaper-repeat, no-repeat) !important;\n}\n[class*=\"contentRegion_\"]:has([class*=\"contentRegionScroller_\"]) { background-image: none !important; }\n[class*=\"guilds_\"], [class*=\"sidebarList_\"], [class*=\"privateChannels_\"],\n[class*=\"members_\"], [class*=\"membersWrap_\"], [class*=\"sidebarRegion_\"],\n[class*=\"sidebarRegionScroller_\"], [class*=\"standardSidebarView_\"] { background: var(--still-base) !important; }\n\n/* Navigation is quiet until selected; no box around every row. */\n[class*=\"sidebarList_\"] [class*=\"link_\"],\n[class*=\"privateChannels_\"] [class*=\"interactive_\"],\n[class*=\"members_\"] [class*=\"member_\"],\n[class*=\"side_\"] [class*=\"item_\"], [class*=\"settingsTabBarItem_\"] {\n    border-radius: 12px !important;\n    font-weight: 450;\n}\n[class*=\"sidebarList_\"] [class*=\"modeSelected_\"] [class*=\"link_\"],\n[class*=\"privateChannels_\"] [class*=\"selected_\"][class*=\"interactive_\"],\n[class*=\"side_\"] [class*=\"selected_\"], [class*=\"topPill_\"] [class*=\"selected_\"] {\n    color: var(--still-text) !important;\n    background: linear-gradient(150deg, rgb(255 255 255 / 12%), rgb(255 255 255 / 3%)) !important;\n    box-shadow: inset 0 1px 0 rgb(255 255 255 / 14%), inset 0 0 0 1px rgb(255 255 255 / 4%) !important;\n    border-radius: 14px !important;\n}\n[class*=\"membersGroup_\"], [class*=\"privateChannelsHeaderContainer_\"] {\n    color: var(--still-muted) !important;\n    letter-spacing: .035em;\n    font-size: 11px;\n    font-weight: 500;\n}\n[class*=\"sidebarList_\"] [class*=\"name_\"] { font-weight: 450; }\n\n/* Shared glass for controls and floating surfaces. */\n[class*=\"panels_\"], [class*=\"title_\"][class*=\"container_\"],\n[class*=\"channelTextArea_\"] [class*=\"scrollableContainer_\"],\n[role=\"menu\"], [class*=\"messagesPopoutWrap_\"], [class*=\"recentMentionsPopout_\"],\n[class*=\"browser_\"][class*=\"container_\"], [class*=\"quickswitcher_\"],\n[class*=\"emojiPicker_\"], [class*=\"stickerPicker_\"], [class*=\"gifPicker_\"],\n[role=\"dialog\"][class*=\"root_\"], [class*=\"userProfileOuter_\"],\n.user-profile-popout, .user-profile-modal, .user-profile-modal-v2,\n.user-profile-sidebar, .user-profile-embed {\n    background: var(--still-glass-sheen), var(--still-glass-fill) !important;\n    border: 1px solid var(--still-glass-edge) !important;\n    border-top-color: var(--still-glass-rim) !important;\n    border-inline-start-color: color-mix(in srgb, var(--still-glass-rim) 55%, transparent) !important;\n    box-shadow: var(--still-glass-shadow) !important;\n    backdrop-filter: var(--still-glass-filter) !important;\n    -webkit-backdrop-filter: var(--still-glass-filter) !important;\n    border-radius: var(--still-radius-lg) !important;\n}\n[class*=\"title_\"][class*=\"container_\"] { border-radius: 22px !important; }\n[class*=\"channelTextArea_\"] [class*=\"scrollableContainer_\"] { border-radius: 28px !important; }\n[class*=\"channelTextArea_\"]:focus-within [class*=\"scrollableContainer_\"] {\n    border-color: color-mix(in srgb, var(--still-accent) 32%, transparent) !important;\n}\n[class*=\"messageContent_\"] { color: var(--still-text); }\n/* Native Quest promotion mask, verified in the running account panel.\n   The voice wrapper is a separate sibling and must never be selected here. */\n[class*=\"panels_\"] > .mask__0d616 {\n    display: none !important;\n}\n[class*=\"panels_\"] [class*=\"containerQuestBarVisible_\"]:not([class*=\"containerRtcOpened_\"]):not([class*=\"containerListenAlongVisible_\"]) {\n    border-start-start-radius: inherit;\n    border-start-end-radius: inherit;\n}\n/* A subtle density adjustment, scoped to actual conversation text. */\n[data-still-messages] [class*=\"messageContent_\"] { font-size: .9375rem !important; line-height: 1.4 !important; overflow-wrap: anywhere; }\n[data-still-messages] [class*=\"groupStart_\"][class*=\"cozyMessage_\"] { margin-top: 13px !important; }\n/* Each author message is one content-sized glass card, including media.\n   The companion joins native consecutive messages with a single surface. */\n[data-still-messages] [class*=\"cozyMessage_\"] {\n    position: relative;\n    width: fit-content !important;\n    max-width: min(760px, calc(100% - 32px)) !important;\n    box-sizing: border-box;\n    margin-inline: 16px 0 !important;\n    padding: 12px 16px 12px 68px !important;\n    min-height: 64px;\n    border-radius: 28px;\n    background: linear-gradient(145deg, rgb(255 255 255 / 5%), transparent 65%), var(--still-glass-fill) !important;\n    box-shadow: inset 0 1px 0 rgb(255 255 255 / 11%), inset 0 0 0 1px var(--still-glass-edge), 0 3px 10px rgb(0 0 0 / 12%) !important;\n}\n[data-still-messages] [class*=\"cozyMessage_\"] > [class*=\"contents_\"] {\n    position: static; display: block; width: fit-content; max-width: 100%; box-sizing: border-box;\n    padding: 0; margin: 0;\n    background: transparent !important;\n    box-shadow: none !important;\n}\n[data-still-messages] [class*=\"cozyMessage_\"] > [class*=\"contents_\"]:has(> [class*=\"avatar_\"]) {\n    min-height: 0; min-width: 0; max-width: 100%;\n}\n[data-still-messages] [class*=\"cozyMessage_\"] > [class*=\"contents_\"] > [class*=\"avatar_\"] { left: 12px !important; top: 12px !important; }\n[data-still-messages] [class*=\"cozyMessage_\"] > [class*=\"contents_\"] > [class*=\"avatarDecoration_\"] { left: 8px !important; top: 8px !important; }\n[data-still-messages] [class*=\"cozyMessage_\"] > [class*=\"contents_\"] > [class*=\"header_\"] { margin: 0 0 3px !important; padding: 0 !important; }\n[data-still-messages] [class*=\"cozyMessage_\"]:has(> [class*=\"repliedMessage_\"]) > [class*=\"contents_\"] > [class*=\"avatar_\"] { top: 34px !important; }\n[data-still-messages] [class*=\"cozyMessage_\"]:has(> [class*=\"repliedMessage_\"]) > [class*=\"contents_\"] > [class*=\"avatarDecoration_\"] { top: 30px !important; }\n[data-still-messages] [class*=\"cozyMessage_\"]:not([data-still-sequence]):not(:has(> [class*=\"contents_\"] > [class*=\"avatar_\"])) {\n    margin-inline-start: 84px !important;\n    max-width: calc(100% - 100px) !important;\n    padding: 2px 0 !important; min-height: 0;\n    background: transparent !important; box-shadow: none !important;\n}\n[data-still-messages] [class*=\"cozyMessage_\"][class*=\"mentioned_\"] { background: var(--still-accent-soft) !important; }\n/* Shared bubbles are paint-only: message hit targets and React nodes stay native.\n   One gradient and rim cover the whole group, without seams or stacked blur. */\n[data-still-messages] [class*=\"cozyMessage_\"][data-still-sequence] {\n    margin-inline: 16px 0 !important;\n    margin-bottom: 0 !important;\n    max-width: min(760px, calc(100% - 32px)) !important;\n    background: transparent !important;\n    box-shadow: none !important;\n}\n[data-still-messages] [class*=\"cozyMessage_\"][data-still-sequence=\"start\"] {\n    isolation: isolate;\n    padding-bottom: 4px !important;\n    min-height: 56px;\n}\n[data-still-messages] [class*=\"cozyMessage_\"]:is([data-still-sequence=\"middle\"], [data-still-sequence=\"end\"]) {\n    margin-top: 0 !important;\n    padding: 4px 16px 4px 68px !important;\n    min-height: 0;\n}\n[data-still-messages] [class*=\"cozyMessage_\"][data-still-sequence=\"end\"] { padding-bottom: 12px !important; }\n[data-still-messages] .still-message-surface {\n    display: block !important;\n    position: absolute;\n    left: 0; top: 0; z-index: -1;\n    border-radius: 28px;\n    pointer-events: none;\n    background: linear-gradient(145deg, rgb(255 255 255 / 5%), transparent 65%), var(--still-glass-fill);\n    box-shadow: inset 0 1px 0 rgb(255 255 255 / 11%), inset 0 0 0 1px var(--still-glass-edge), 0 3px 10px rgb(0 0 0 / 12%);\n}\n[data-still-messages] [data-still-sequence][class*=\"mentioned_\"] > [class*=\"contents_\"] {\n    background: var(--still-accent-soft) !important;\n    border-radius: 6px;\n}\n[data-still-messages] [class*=\"cozyMessage_\"] [class*=\"avatar_\"] {\n    border-radius: 50%;\n    box-shadow: 0 0 0 1px var(--still-glass-rim), 0 3px 9px rgb(0 0 0 / 26%);\n}\n/* A role-colored crescent follows the bubble's left curve. Its color inherits\n   directly from the native author name; no role lookup or color observer. */\n[data-still-messages] [class*=\"username_\"]::before { display: none !important; }\n[data-still-messages] [class*=\"cozyMessage_\"] > [class*=\"contents_\"] > [class*=\"header_\"],\n[data-still-messages] [class*=\"cozyMessage_\"] > [class*=\"contents_\"] > [class*=\"header_\"] :is([class*=\"headerText_\"], [class*=\"username_\"]) { position: static !important; }\n[data-still-messages] [class*=\"cozyMessage_\"] > [class*=\"contents_\"] > [class*=\"header_\"] [class*=\"username_\"] { filter: none !important; transform: none !important; }\n[data-still-messages] [class*=\"cozyMessage_\"] > [class*=\"contents_\"] > [class*=\"header_\"] [class*=\"username_\"]:not(:has([class*=\"username_\"]))::after {\n    content: \"\"; display: block; position: absolute;\n    left: 0; top: 0; width: 56px; height: var(--still-bubble-height, 100%);\n    border-radius: 28px 0 0 28px;\n    background: transparent; box-shadow: inset 2px 0 0 currentColor;\n    opacity: .9; pointer-events: none;\n}\n[class*=\"mentioned_\"]::before { background: var(--still-accent) !important; }\n[class*=\"embedFull_\"], [class*=\"cardPrimary_\"], [class*=\"cardSecondary_\"],\n[class*=\"accountProfileCard_\"], [class*=\"guildCard_\"], .bd-addon-card {\n    background: linear-gradient(135deg, rgb(255 255 255 / 3%), transparent 60%), var(--still-surface) !important;\n    border: 1px solid var(--still-glass-edge) !important;\n    border-radius: var(--still-radius) !important;\n    box-shadow: none !important;\n}\n[class*=\"embedFull_\"] { border-inline-start: 2px solid color-mix(in srgb, var(--still-accent) 34%, transparent) !important; }\n[class*=\"markup_\"] code { background: var(--still-surface) !important; border-color: var(--still-border) !important; border-radius: 10px; }\n[class*=\"markup_\"] blockquote { border-left-color: var(--still-accent); }\n[class*=\"reaction_\"] { border-radius: 999px !important; }\n[class*=\"reactionMe_\"] { background: var(--still-accent-soft) !important; border-color: color-mix(in srgb, var(--still-accent) 28%, transparent) !important; }\n[class*=\"newMessagesBar_\"] {\n    background: var(--still-surface) !important;\n    color: var(--still-text) !important;\n    border: 1px solid var(--still-border) !important;\n    border-radius: 14px !important;\n    box-shadow: none !important;\n}\n[role=\"menu\"] [role^=\"menuitem\"] { border-radius: 12px !important; margin-block: 2px; }\n[role=\"menu\"] [class*=\"focused_\"]:not([class*=\"colorDanger_\"]) {\n    background: color-mix(in srgb, var(--still-text) 8%, transparent) !important;\n    color: var(--still-text) !important;\n}\n[class*=\"searchResultsWrap_\"], [class*=\"container_\"][class*=\"searchResult_\"] { background: var(--still-base) !important; }\n[class*=\"userProfileOuter_\"], .user-profile-popout, .user-profile-modal,\n.user-profile-modal-v2, .user-profile-sidebar, .user-profile-embed {\n    --profile-gradient-primary-color: transparent !important;\n    --profile-gradient-secondary-color: transparent !important;\n    --profile-gradient-overlay-color: transparent !important;\n    --profile-gradient-modal-background-color: transparent !important;\n    --profile-gradient-button-color: var(--still-accent) !important;\n    --profile-body-background-color: transparent !important;\n    --profile-body-divider-color: var(--still-glass-edge) !important;\n    --profile-body-background-hover: var(--still-hover) !important;\n    --profile-role-pill-background-color: var(--still-raised) !important;\n}\n.custom-user-profile-theme > [class*=\"inner_\"] { background: transparent !important; }\n[class*=\"role_\"][class*=\"pill_\"], [class*=\"rolePill_\"] { border-radius: 999px !important; }\n[class*=\"lookFilled_\"][class*=\"colorBrand_\"] {\n    background: linear-gradient(180deg, rgb(255 255 255 / 26%), transparent 75%), var(--still-accent) !important;\n    color: var(--still-accent-text) !important;\n    box-shadow: inset 0 1px 0 rgb(255 255 255 / 45%) !important;\n    font-weight: 600;\n}\n[class*=\"lookFilled_\"][class*=\"colorPrimary_\"] {\n    background: var(--still-glass-sheen), var(--still-glass-tint) !important;\n    border: 1px solid var(--still-glass-edge) !important;\n}\n[class*=\"lookFilled_\"], [class*=\"lookOutlined_\"], .bd-button { border-radius: 999px !important; }\n[class*=\"searchBar_\"] [class*=\"searchBarComponent_\"] {\n    background: var(--still-glass-tint) !important;\n    border: 1px solid var(--still-glass-edge);\n    border-radius: 999px;\n}\ninput:not([type=\"checkbox\"]):not([type=\"radio\"]):not([type=\"range\"]):not([type=\"color\"]),\ntextarea, [class*=\"select_\"][role=\"combobox\"] { border-radius: 12px; }\n[class*=\"tooltip_\"] { background: var(--still-raised) !important; color: var(--still-text) !important; border-radius: 10px !important; }\n[class*=\"authBox_\"] { background: var(--still-base) !important; border: 1px solid var(--still-border); border-radius: var(--still-radius-lg) !important; }\n#app-mount :is(button, a, input, textarea, select, [role=\"button\"]):focus-visible {\n    outline: 2px solid var(--still-accent);\n    outline-offset: 3px;\n}\n\n/* Custom spatial layout. A single canvas; navigation is a floating drawer.\n   Names/row heights inside Discord's virtual lists are left intact. No DOM is\n   reparented and the native sidebar (including voice/user controls) survives. */\n[data-still-shell] > [class*=\"bar_\"] {\n    opacity: 0;\n    transition: opacity 100ms ease-out;\n}\n[data-still-shell] > [class*=\"bar_\"]:is(:hover, :focus-within) { opacity: 1; }\n@media (prefers-reduced-motion: reduce) {\n    [data-still-shell] > [class*=\"bar_\"] { transition: none; }\n}\nhtml.still-background [data-still-shell] > [class*=\"bar_\"] { transition: none; }\n[data-still-shell] {\n    --custom-guild-list-width: 72px !important;\n    --custom-guild-sidebar-width: var(--still-drawer-width) !important;\n    grid-template-columns: [start] 0px [guildsEnd] 0px [channelsEnd] 1fr [end] !important;\n    background-color: var(--still-base) !important;\n    background-image: var(--still-wallpaper) !important;\n    background-size: var(--still-wallpaper-size, cover) !important;\n    background-position: center top !important;\n    background-repeat: var(--still-wallpaper-repeat, no-repeat) !important;\n}\n[data-still-page] { border: 0 !important; background: transparent !important; }\n[data-still-page] > :has([data-still-chat]) { min-width: 0; flex: 1 1 auto; }\n[data-still-chat],\n[data-still-page] [class*=\"chatContent_\"],\n[data-still-page] [class*=\"peopleColumn_\"] {\n    background: transparent !important;\n    border: 0 !important;\n}\n[data-still-sidebar] {\n    position: absolute !important;\n    inset: calc(var(--custom-app-top-bar-height, 32px) + 86px) auto 20px 20px !important;\n    width: min(var(--still-drawer-width), calc(100% - 40px)) !important;\n    height: auto !important;\n    max-height: 760px;\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: stretch;\n    padding: 12px 0 calc(var(--custom-app-panels-height, 56px) + 24px) !important;\n    box-sizing: border-box !important;\n    grid-area: auto !important;\n    border: 1px solid var(--still-glass-edge) !important;\n    border-top-color: var(--still-glass-rim) !important;\n    border-radius: 28px !important;\n    background: var(--still-glass-sheen), var(--still-glass-fill) !important;\n    box-shadow: var(--still-glass-shadow), 0 24px 80px rgb(0 0 0 / 45%) !important;\n    backdrop-filter: var(--still-glass-filter) !important;\n    z-index: 105 !important;\n    overflow: hidden !important;\n    visibility: hidden;\n    pointer-events: none;\n}\n[data-still-shell][data-still-navigation=\"open\"] [data-still-sidebar] { visibility: visible; pointer-events: auto; }\n[data-still-sidebar]::after { display: none !important; }\n[data-still-sidebar] > [class*=\"sidebarResizeHandle_\"] { display: none !important; }\n[data-still-sidebar] > [class*=\"guilds_\"] {\n    width: 72px !important;\n    flex: 0 0 72px !important;\n    height: auto !important;\n    margin: 0 !important;\n    background: transparent !important;\n}\n[data-still-sidebar] > [class*=\"sidebarList_\"] {\n    flex: 1 1 0 !important;\n    min-width: 0 !important;\n    width: auto !important;\n    height: auto !important;\n    border: 0 !important;\n    border-inline-start: 1px solid var(--still-glass-edge) !important;\n    border-radius: 0 !important;\n    background: transparent !important;\n    box-shadow: none !important;\n    padding-inline: 4px;\n}\n[data-still-sidebar] :is([class*=\"privateChannels_\"], [class*=\"scroller_\"], [class*=\"containerDefault_\"]) { background-color: transparent !important; }\n/* The drawer already reserves the actual user/voice panel height once. */\n[data-still-sidebar] > [class*=\"sidebarList_\"] > nav {\n    padding-bottom: 0 !important;\n    background: transparent !important;\n    min-height: 0;\n}\n[data-still-sidebar] > [class*=\"guilds_\"] > [class*=\"tree_\"] { background: transparent !important; }\n[data-still-sidebar] > [class*=\"panels_\"] {\n    inset-inline: 12px !important;\n    bottom: 12px !important;\n    width: calc(100% - 24px) !important;\n    border-radius: 20px !important;\n    backdrop-filter: none !important;\n}\n[data-still-sidebar] [class*=\"header_\"]:not([class*=\"headerText_\"]) { box-shadow: none !important; }\n[data-still-sidebar] [class*=\"guilds_\"] :is([class*=\"childWrapper_\"], [class*=\"circleIconButton_\"]) {\n    background: var(--still-glass-sheen), var(--still-glass-tint) !important;\n    box-shadow: inset 0 1px 0 var(--still-glass-rim) !important;\n}\n\n/* The custom controls live inside the app's base layer, under native modals.\n   If the theme is disabled, the controls disappear with the custom layout. */\n#stillspeed-air-controls {\n    display: flex !important;\n    position: absolute;\n    top: calc(var(--custom-app-top-bar-height, 32px) + 18px);\n    left: 20px;\n    height: 48px;\n    align-items: center;\n    gap: 3px;\n    padding: 4px;\n    box-sizing: border-box;\n    z-index: 110;\n    border: 1px solid var(--still-glass-edge);\n    border-top-color: var(--still-glass-rim);\n    border-radius: 999px;\n    background: var(--still-glass-sheen), var(--still-glass-fill);\n    box-shadow: var(--still-glass-shadow);\n    backdrop-filter: var(--still-glass-filter);\n    -webkit-app-region: no-drag;\n}\n#stillspeed-air-controls button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    height: 38px;\n    min-width: 38px;\n    border: 0;\n    border-radius: 999px;\n    background: transparent;\n    color: var(--still-muted);\n    font: 500 13px/1 var(--still-font);\n    padding: 0 12px;\n    cursor: pointer;\n}\n#stillspeed-air-controls button:last-child { padding: 0; }\n#stillspeed-air-controls button:hover { color: var(--still-text); background: rgb(255 255 255 / 6%); }\n#stillspeed-air-controls button[aria-expanded=\"true\"],\n#stillspeed-air-controls button[aria-pressed=\"true\"] { color: var(--still-text); background: rgb(255 255 255 / 9%); }\n#stillspeed-air-controls svg { width: 18px; height: 18px; flex-shrink: 0; }\n[data-still-shell][data-fullscreen=\"true\"] #stillspeed-air-controls,\n[data-still-shell][data-fullscreen=\"true\"] [data-still-sidebar] { display: none !important; }\n[data-still-shell][data-fullscreen=\"true\"] [data-still-page] { margin-inline: 0 !important; width: 100% !important; }\n\n/* Floating header and matching reading/composer widths. Changes to available\n   width reflow normally; no fixed height/padding imposed on message rows. */\n[data-still-page] [data-still-header] {\n    width: min(var(--still-reading-width), calc(100% - 220px)) !important;\n    min-width: 0 !important;\n    min-height: 52px !important;\n    height: auto !important;\n    margin: 16px 24px 18px max(196px, calc((100% - var(--still-reading-width)) / 2)) !important;\n    padding: 0 4px !important;\n    box-sizing: border-box;\n    border-radius: 999px !important;\n    z-index: 100;\n    background: transparent !important;\n    border: 0 !important;\n    box-shadow: none !important;\n    backdrop-filter: none !important;\n}\n[data-still-page] [data-still-header] [class*=\"toolbar_\"] {\n    min-height: 44px;\n    padding: 4px 10px;\n    gap: 10px;\n    box-sizing: border-box;\n    border: 1px solid var(--still-glass-edge);\n    border-top-color: var(--still-glass-rim);\n    border-radius: 999px;\n    background: var(--still-glass-sheen), var(--still-glass-fill);\n    box-shadow: var(--still-glass-shadow);\n    backdrop-filter: var(--still-glass-filter);\n}\n/* One quiet glass capsule for channel tools, with an inset search pill. */\n[data-still-page] [data-still-header] [class*=\"toolbar_\"] {\n    height: 42px !important; min-height: 42px; align-self: center; padding: 5px 7px; gap: 4px;\n    background: linear-gradient(160deg, rgb(255 255 255 / 10%), transparent 58%), var(--still-glass-fill);\n    border-radius: 23px; box-shadow: inset 0 1px 0 rgb(255 255 255 / 7%), 0 4px 14px rgb(0 0 0 / 12%);\n}\n[data-still-page] [data-still-header] > [class*=\"upperContainer_\"] { display: flex; align-items: center; min-width: 0; width: 100%; gap: 12px; }\n[data-still-page] [data-still-header] [class*=\"iconWrapper_\"] {\n    display: flex; align-items: center; justify-content: center;\n    width: 30px; height: 30px; margin: 0 !important; border-radius: 50%;\n    color: var(--still-muted); flex-shrink: 0;\n}\n[data-still-page] [data-still-header] [class*=\"iconWrapper_\"]:hover { background: color-mix(in srgb, var(--still-text) 7%, transparent); color: var(--still-text); }\n[data-still-page] [data-still-header] [class*=\"iconWrapper_\"] > svg { width: 18px; height: 18px; }\n[data-still-page] [data-still-header] [class*=\"search_\"] { margin-inline: 5px 0 !important; }\n[data-still-page] [data-still-header] [class*=\"searchBar_\"] {\n    height: 30px !important; min-height: 30px; min-width: 0;\n    border: 1px solid var(--still-glass-edge) !important; border-top-color: var(--still-glass-rim) !important;\n    border-radius: 999px !important; background: color-mix(in srgb, var(--still-base) 65%, transparent) !important;\n    padding: 0 10px !important; box-shadow: inset 0 1px 3px rgb(0 0 0 / 12%);\n    font-size: 12px !important; color: var(--still-muted);\n}\n[data-still-page] [data-still-header] [class*=\"searchBar_\"] [class*=\"icon_\"] { width: 16px; height: 16px; }\n[data-still-page] [data-still-header] [class*=\"searchBar_\"]:focus-within { border-color: color-mix(in srgb, var(--still-accent) 32%, transparent) !important; }\n[data-still-page] [data-still-header] [class*=\"children_\"] { gap: 9px; min-width: 0; }\n[data-still-page] [data-still-header] [class*=\"children_\"]::after { display: none !important; }\n[data-still-page] [data-still-header] [class*=\"title_\"] { font-weight: 550; letter-spacing: -.02em; }\n[data-still-messages] {\n    width: min(calc(100% - 24px), calc((var(--still-reading-width) + 32px) / var(--still-chat-zoom))) !important;\n    align-self: center;\n    min-height: 0;\n    box-sizing: border-box;\n    margin-block: 0 12px;\n    padding: 16px 20px;\n    border: 1px solid var(--still-glass-edge);\n    border-top: 0;\n    border-inline-start-color: color-mix(in srgb, var(--still-glass-rim) 55%, transparent);\n    border-radius: 0 0 28px 28px;\n    background: linear-gradient(0deg, rgb(255 255 255 / 3%), transparent 42%), var(--still-glass-sheen), color-mix(in srgb, var(--still-glass-fill) 70%, transparent) !important;\n    background-size: 100% calc(100vh / var(--still-chat-zoom)) !important;\n    background-position: left top !important;\n    box-shadow: inset 1px 0 0 rgb(255 255 255 / 11%), inset 0 -1px 0 rgb(255 255 255 / 3%), 0 6px 18px rgb(0 0 0 / 20%);\n    /* Reduce the glass alpha only; messages and avatars stay fully opaque.\n       A static surface avoids sampling/blur work while scrolling. */\n    backdrop-filter: none !important;\n    -webkit-backdrop-filter: none !important;\n    overflow: hidden;\n}\n/* Let the real scroll viewport reach the window edge beneath the hover title\n   bar. Negative flex margin adds the reclaimed height without moving composer\n   or member controls. Only the frame ancestors may overflow; messages still\n   clip inside their rounded surface. No decorative top filler is needed. */\n[data-still-shell] > [class*=\"bar_\"] { z-index: 111; }\n[data-still-shell][data-still-movable=\"true\"] > [class*=\"content_\"]:has([data-still-messages]),\n[data-still-shell][data-still-movable=\"true\"] [data-still-page]:has([data-still-messages]),\n[data-still-shell][data-still-movable=\"true\"] [data-still-page] :has([data-still-messages]) { overflow: visible !important; min-height: 0 !important; }\n[data-still-shell][data-still-movable=\"true\"] [data-still-messages] {\n    margin-top: calc(-1 * var(--custom-app-top-bar-height, 32px) / var(--still-chat-zoom));\n}\n[data-still-composer] {\n    width: min(calc(100% - 48px), calc(var(--still-composer-width) / var(--still-chat-zoom))) !important;\n    box-sizing: border-box;\n    align-self: center;\n    margin-inline: auto !important;\n    padding-inline: 0 !important;\n    margin-bottom: 18px !important;\n    margin-top: 0 !important;\n    flex-shrink: 0;\n}\n/* Keep Discord's virtual scroll viewport the same size in both modes.\n   Constant footer space keeps the newest message above the input. */\n[data-still-shell][data-still-reader-viewport] [data-still-messages] {\n    margin-bottom: var(--still-reader-margin, -84px);\n    border-bottom: 0; border-bottom-left-radius: 0; border-bottom-right-radius: 0;\n    clip-path: inset(0px 0px var(--still-reader-gap, 0px) 0px round 0px 0px 28px 28px);\n}\n[data-still-reader-viewport] [data-still-reader-scroll] {\n    box-sizing: border-box;\n    padding-bottom: calc(var(--still-reader-base-padding, 0px) + var(--still-reader-gap, 0px)) !important;\n}\n[data-still-shell][data-still-reader=\"expanded\"] [data-still-messages] { clip-path: none; }\n.still-reader-rim {\n    position: absolute; inset: auto -1px 0; height: 28px; box-sizing: border-box;\n    /* The viewport clips the rectangular side borders. Complete both arcs\n       inside that clip, so the lower-left edge never disappears into black. */\n    border: 1px solid var(--still-glass-edge); border-top: 0;\n    border-inline-start-color: color-mix(in srgb, var(--still-glass-rim) 55%, transparent);\n    border-radius: 0 0 28px 28px;\n    box-shadow: inset 0 -1px 0 rgb(255 255 255 / 3%);\n    transform: translateY(calc(-1 * var(--still-reader-gap, 0px)));\n    pointer-events: none; z-index: 2;\n}\n[data-still-reader=\"expanded\"] .still-reader-rim { transform: none; opacity: 0; }\n[data-still-shell][data-still-reader=\"expanded\"] [data-still-composer] {\n    transform: translateY(var(--still-reader-travel, 120px)); opacity: 0; pointer-events: none;\n}\n[data-still-shell][data-still-reader-mode=\"leaving\"] [data-still-composer] { pointer-events: auto; }\n[data-still-reader-scroll] { scroll-behavior: auto !important; overscroll-behavior: contain; }\n#stillspeed-reader-tab {\n    position: fixed; left: var(--still-reader-tab-x, -100px); top: var(--still-reader-tab-y, 0px);\n    width: 26px; height: 88px; box-sizing: border-box; z-index: 104;\n    align-items: center; justify-content: center; writing-mode: vertical-rl;\n    padding: 10px 5px; border: 1px solid var(--still-glass-edge); border-top-color: var(--still-glass-rim);\n    border-radius: 14px; background: var(--still-glass-sheen), var(--still-glass-fill);\n    color: var(--still-muted); font: 500 11px var(--still-font); letter-spacing: .04em;\n    box-shadow: var(--still-glass-shadow); backdrop-filter: none;\n    opacity: 0; transform: translateX(4px); pointer-events: none;\n    transition: opacity 220ms ease-out, transform 220ms cubic-bezier(.2,.8,.2,1);\n    cursor: pointer; -webkit-app-region: no-drag;\n}\n[data-still-shell][data-still-reader] #stillspeed-reader-tab { display: flex !important; }\n[data-still-shell][data-still-reader-tab=\"visible\"] #stillspeed-reader-tab { opacity: 1; transform: none; pointer-events: auto; }\n#stillspeed-reader-tab:hover { color: var(--still-text); }\n#stillspeed-reader-tab:focus-visible { outline: 2px solid var(--still-accent); outline-offset: 3px; }\n@media (prefers-reduced-motion: reduce) { [data-still-reader-motion=\"system\"] #stillspeed-reader-tab { transition: none; } }\nhtml.still-background #stillspeed-reader-tab { transition: none; }\n[data-still-chat] [class*=\"chatContent_\"] {\n    zoom: var(--still-chat-zoom);\n    box-sizing: border-box;\n    padding-inline-start: 0;\n}\n[data-still-page] [class*=\"form_\"]::before { display: none !important; }\n[data-still-page] [class*=\"channelTextArea_\"] {\n    margin-inline: 0 !important;\n    background: transparent !important;\n    border: 0 !important;\n    border-radius: 28px !important;\n    box-shadow: none !important;\n}\n[data-still-page] [class*=\"channelTextArea_\"] [class*=\"scrollableContainer_\"] { min-height: 54px; }\n[data-still-page] [class*=\"membersWrap_\"],\n[data-still-page] [class*=\"searchResultsWrap_\"],\n[data-still-page] .user-profile-sidebar {\n    margin: 0 20px 20px 0;\n    border: 1px solid var(--still-glass-edge) !important;\n    border-top-color: var(--still-glass-rim) !important;\n    border-radius: 24px !important;\n    background: var(--still-glass-sheen), var(--still-glass-fill) !important;\n    overflow: hidden;\n}\n[data-still-page] [class*=\"members_\"] { background: transparent !important; }\n/* Remove native presence/phone overlays and the matching avatar cutout only\n   inside member/activity lists. The avatar remains a complete circle. */\n[class*=\"members_\"] [class*=\"member_\"] [class*=\"avatar_\"] svg[class*=\"mask_\"] > g {\n    display: none !important;\n}\n[class*=\"members_\"] [class*=\"member_\"] [class*=\"avatar_\"] svg[class*=\"mask_\"] > foreignObject {\n    mask: none !important; clip-path: circle(50%);\n}\n/* Hide secondary activity/custom-status text. Native activity glyphs select\n   compact name-row indicators, without scanning members or adding listeners. */\n[class*=\"members_\"] [class*=\"member_\"] [class*=\"subText_\"] {\n    display: none !important;\n}\n[class*=\"members_\"] [class*=\"member_\"]:has([class*=\"subText_\"] [class*=\"textWithIconContainer_\"] > svg > path[d^=\"M20.97 4.06\"]) [class*=\"nameAndDecorators_\"]::after {\n    content: \"\";\n    display: block; flex: 0 0 15px; width: 15px; height: 15px;\n    margin-inline-start: 4px; align-self: center; order: 1;\n    background-color: #3ba568;\n    mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 5h10c2.2 0 3.7 1.5 4.1 3.6l1.2 7.3c.5 3-2.4 4.9-4.4 2.7L15.3 16H8.7l-2.6 2.6c-2 2.2-4.9.3-4.4-2.7l1.2-7.3C3.3 6.5 4.8 5 7 5Z' fill='none' stroke='black' stroke-width='1.7'/%3E%3Cpath d='M7 8v6M4 11h6' stroke='black' stroke-width='1.7'/%3E%3Ccircle cx='16' cy='10' r='1.1'/%3E%3Ccircle cx='19' cy='13' r='1.1'/%3E%3C/svg%3E\") center / contain no-repeat;\n    pointer-events: none;\n}\n[class*=\"members_\"] [class*=\"member_\"]:has([class*=\"subText_\"] svg > path[d^=\"M8.65 1.51\"]) [class*=\"nameAndDecorators_\"]::before {\n    content: \"\";\n    display: block; flex: 0 0 15px; width: 15px; height: 15px;\n    margin-inline-start: 4px; align-self: center; order: 2;\n    background-color: #3ba568;\n    mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9 18V5l11-2v13M9 9l11-2' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cellipse cx='6' cy='18' rx='3' ry='2'/%3E%3Cellipse cx='17' cy='16' rx='3' ry='2'/%3E%3C/svg%3E\") center / contain no-repeat;\n    pointer-events: none;\n}\n[class*=\"members_\"] [class*=\"member_\"] [class*=\"nameAndDecorators_\"] > [class*=\"name_\"] { flex: 0 1 auto; min-width: 0; }\n[class*=\"members_\"] [class*=\"member_\"] [class*=\"nameAndDecorators_\"] > :not([class*=\"name_\"]) { order: 3; }\n/* Keep Discord's virtualized separator geometry and grouping boundaries while\n   removing date/unread divider paint throughout chat and thread message lists. */\n:is([data-list-id=\"chat-messages\"], [data-still-messages]) [class*=\"divider_\"][role=\"separator\"] {\n    opacity: 0 !important; pointer-events: none !important;\n}\n/* The member rail continues through the bottom edge of the app window. */\n[data-still-page] [class*=\"membersWrap_\"] {\n    margin-bottom: 0;\n    border-bottom: 0 !important;\n    border-radius: 24px 24px 0 0 !important;\n}\n[data-still-shell][data-still-focus=\"on\"] [data-still-page] :is([class*=\"membersWrap_\"], .user-profile-sidebar, [class*=\"nowPlayingColumn_\"], [class*=\"nowPlayingSidebar_\"]) { display: none !important; }\n/* Discord leaves the member container's 1px divider after its contents hide.\n   Hide the complete empty container in Focus, and leave card rims to the card. */\n[data-still-page] [class*=\"container_\"]:has(> [class*=\"membersWrap_\"]) {\n    border-inline: 0 !important; background: transparent !important;\n}\n[data-still-shell][data-still-focus=\"on\"] [data-still-page] [class*=\"container_\"]:has(> [class*=\"membersWrap_\"]) { display: none !important; }\n[data-still-page] [class*=\"peopleList_\"] { max-width: 980px; margin-inline: auto; width: calc(100% - 48px); }\n/* Home/forum headers reserve the same space for Browse. */\n[data-still-page] > :not([class*=\"chat_\"]) > [class*=\"container_\"]:has(> [class*=\"toolbar_\"]) {\n    margin-inline-start: 196px;\n    margin-inline-end: 24px;\n}\n\n/* Settings form a spacious sheet with a consistent content measure. */\n[class*=\"standardSidebarView_\"] { padding: 24px !important; box-sizing: border-box; gap: 24px; }\n[class*=\"sidebarRegion_\"] { flex: 0 0 240px !important; min-width: 0 !important; }\n[class*=\"sidebarRegionScroller_\"] {\n    background: var(--still-glass-sheen), var(--still-glass-fill) !important;\n    border: 1px solid var(--still-glass-edge);\n    border-top-color: var(--still-glass-rim);\n    border-radius: 24px;\n}\n[class*=\"sidebarRegionScroller_\"] > [class*=\"sidebar_\"] { width: 100%; padding: 24px 16px !important; box-sizing: border-box; }\n[class*=\"contentRegion_\"] { border-radius: 24px; min-width: 0; }\n[class*=\"contentColumnDefault_\"] { max-width: 880px !important; padding: 40px !important; }\n.bd-addon-header, .bd-addon-footer { background: transparent !important; }\n.bd-addon-description { color: var(--still-muted); }\n\n/* Companion settings; labels and controls align on one shared rhythm. */\n.still-settings { font: 14px/1.55 var(--font-primary); color: var(--still-text); }\n.still-settings h2 { margin: 0 0 8px; font-size: 30px; font-weight: 550; letter-spacing: -1px; }\n.still-settings p { margin: 0 0 28px; color: var(--still-muted); max-width: 58ch; }\n.still-settings-row { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 20px 0; border-bottom: 1px solid var(--still-glass-edge); }\n.still-settings-label { display: block; font-weight: 550; }\n.still-settings-note { display: block; font-size: 12px; color: var(--still-muted); margin-top: 4px; max-width: 58ch; }\n.still-settings :is(select, input[type=\"text\"], button) {\n    background: var(--still-glass-sheen), var(--still-glass-fill);\n    color: var(--still-text);\n    border: 1px solid var(--still-glass-edge);\n    border-top-color: var(--still-glass-rim);\n    border-radius: 999px;\n    padding: 9px 14px;\n    font: inherit;\n    flex-shrink: 0;\n}\n.still-settings select { min-width: 142px; }\n.still-settings input[type=\"text\"] { width: 100px; }\n.still-settings input[aria-invalid=\"true\"] { border-color: #ef7b87; }\n.still-settings button { margin-top: 24px; cursor: pointer; }\n.still-settings input[type=\"checkbox\"] {\n    appearance: none;\n    width: 40px;\n    height: 24px;\n    flex-shrink: 0;\n    border-radius: 999px;\n    border: 1px solid rgb(255 255 255 / 13%);\n    background: linear-gradient(var(--still-glass-edge), var(--still-glass-edge)), var(--still-raised);\n    position: relative;\n    cursor: pointer;\n}\n.still-settings input[type=\"checkbox\"]::before {\n    content: \"\";\n    position: absolute;\n    width: 18px;\n    height: 18px;\n    top: 2px;\n    left: 2px;\n    border-radius: 50%;\n    background: linear-gradient(#ffffff, #cdd5de);\n    box-shadow: 0 1px 3px rgb(0 0 0 / 25%);\n}\n.still-settings input[type=\"checkbox\"]:checked { background: #34c759; border-color: #5dd67b; }\n.still-settings input[type=\"checkbox\"]:checked::before { left: 18px; }\n.still-settings input[type=\"checkbox\"]:focus-visible { outline: 2px solid var(--still-accent); outline-offset: 3px; }\n\n@media (max-width: 1000px) {\n    [data-still-page] [data-still-header] {\n        width: calc(100% - 180px) !important;\n        margin-inline: 164px 16px !important;\n        padding-inline: 12px !important;\n    }\n    #stillspeed-air-controls { left: 12px; }\n    #stillspeed-air-controls button { padding-inline: 9px; }\n    [data-still-page] [data-still-header] [class*=\"topic_\"] { display: none !important; }\n    [class*=\"standardSidebarView_\"] { gap: 16px; padding: 16px !important; }\n    [class*=\"sidebarRegion_\"] { flex-basis: 208px !important; }\n    [class*=\"contentColumnDefault_\"] { padding: 28px !important; }\n}\n@media (max-width: 760px) {\n    #stillspeed-air-controls [data-still-browse-label] { display: none; }\n    #stillspeed-air-controls button { padding: 0; }\n    [data-still-page] [data-still-header] { width: calc(100% - 124px) !important; margin-inline: 112px 12px !important; }\n    [data-still-sidebar] { inset-inline-start: 12px !important; width: min(344px, calc(100% - 24px)) !important; }\n    [data-still-composer] { width: calc(100% - 24px) !important; margin-bottom: 8px !important; }\n    [class*=\"contentColumnDefault_\"] { padding: 20px !important; }\n    .still-settings-row { gap: 16px; }\n}\n@media (min-width: 1200px) {\n    [data-still-shell][data-still-navigation=\"open\"] [data-still-page] {\n        margin-inline-start: calc(var(--still-drawer-width) + var(--still-nav-x, 20px));\n        width: calc(100% - var(--still-drawer-width) - var(--still-nav-x, 20px)) !important;\n    }\n    [data-still-shell][data-still-navigation=\"open\"] [data-still-page] [data-still-header] {\n        width: min(var(--still-reading-width), calc(100% - 48px)) !important;\n        margin-inline-start: max(24px, calc((100% - var(--still-reading-width)) / 2)) !important;\n    }\n}\n\n/* Still / Air workspace. Glass is static here: no backdrop sampling or loops. */\n[data-still-shell] { --still-widget-width: 236px; --still-widget-reserve: 280px; --still-widget-edge: 24px; }\n[data-still-shell][data-still-movable=\"true\"] [data-still-sidebar] {\n    inset: var(--still-nav-y, 118px) auto auto var(--still-nav-x, 20px) !important;\n    width: min(344px, calc(100% - 24px)) !important;\n    height: var(--still-nav-height, 660px) !important;\n    padding-top: 46px !important;\n}\n.still-window-bar {\n    position: absolute;\n    inset: 0 8px auto 8px;\n    height: 42px;\n    align-items: center;\n    gap: 2px;\n    -webkit-app-region: no-drag;\n    user-select: none;\n}\n[data-still-movable=\"true\"] .still-window-bar { display: flex !important; }\n.still-window-bar button, #stillspeed-widgets button, #stillspeed-widget-toggle {\n    font: inherit;\n    color: var(--still-text);\n    border: 0;\n    cursor: pointer;\n    background: transparent;\n    -webkit-app-region: no-drag;\n}\n.still-icon-button { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; padding: 6px; border-radius: 50%; flex-shrink: 0; }\n.still-icon-button svg, .still-window-grip svg { width: 18px; height: 18px; flex-shrink: 0; }\n.still-window-grip {\n    display: flex; align-items: center; gap: 6px; flex: 1; align-self: stretch;\n    padding: 0 8px; font: 500 12px var(--still-font) !important;\n    text-align: left; color: var(--still-muted) !important; cursor: grab !important; touch-action: none;\n}\n.still-window-grip svg { width: 14px; }\n.still-window-bar .still-icon-button { color: var(--still-muted); width: 28px; height: 28px; }\n.still-window-bar .still-icon-button svg { width: 14px; height: 14px; }\n.still-window-bar .still-icon-button:hover, #stillspeed-widgets button:not(:disabled):hover { background-color: color-mix(in srgb, var(--still-text) 7%, transparent); }\n[data-still-sidebar][data-still-dragging] {\n    transform: translate3d(var(--still-drag-x, 0px), var(--still-drag-y, 0px), 0) !important;\n    will-change: transform;\n    animation: none !important;\n    backdrop-filter: none !important;\n}\n[data-still-dragging] .still-window-grip { cursor: grabbing !important; }\n#stillspeed-widget-toggle {\n    position: absolute; top: calc(var(--custom-app-top-bar-height, 32px) + 22px); right: 24px;\n    width: 40px; height: 40px; border-radius: 50%; z-index: 110;\n    border: 1px solid var(--still-glass-edge); border-top-color: var(--still-glass-rim);\n    background: var(--still-glass-sheen), var(--still-glass-fill); box-shadow: var(--still-glass-shadow);\n}\n[data-still-shell]:not([data-still-widgets=\"disabled\"]) #stillspeed-widget-toggle { display: inline-flex !important; }\n#stillspeed-widget-toggle[aria-expanded=\"true\"] { color: var(--still-accent); }\n#stillspeed-widgets {\n    position: absolute; top: calc(var(--custom-app-top-bar-height, 32px) + 86px); right: 0; bottom: 20px;\n    width: calc(var(--still-widget-width) + var(--still-widget-edge)); flex-direction: column; gap: 12px; z-index: 102;\n    overflow: auto; overscroll-behavior: contain; scrollbar-width: none;\n    color: var(--still-text); font: 13px/1.4 var(--still-font); -webkit-app-region: no-drag;\n}\n#stillspeed-widgets::-webkit-scrollbar { display: none; }\n[data-still-shell][data-still-widgets=\"open\"] #stillspeed-widgets { display: flex !important; }\n.still-widget {\n    flex-shrink: 0; min-width: 0; padding: 16px calc(18px + var(--still-widget-edge)) 16px 18px; box-sizing: border-box; border-radius: 25px 0 0 25px;\n    background: linear-gradient(145deg, rgb(255 255 255 / 7%), transparent 48%), var(--still-glass-fill);\n    border: 1px solid var(--still-glass-edge); border-top-color: var(--still-glass-rim);\n    border-right: 0;\n    box-shadow: inset 0 1px 0 rgb(255 255 255 / 5%);\n    backdrop-filter: none !important;\n}\n.still-widget-heading { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 20px; margin-bottom: 9px; }\n.still-widget-heading h3 { font: 500 11px/1.3 var(--still-font); letter-spacing: .04em; color: var(--still-muted); margin: 0; }\n.still-widget-heading .still-icon-button { width: 24px; height: 24px; padding: 4px; margin: -4px -4px -4px 0; color: var(--still-muted) !important; }\n.still-widget-heading .still-icon-button svg { width: 14px; height: 14px; }\n.still-widget-caption { font-size: 10px; color: var(--still-faint); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.still-widget-muted { font-size: 11px; color: var(--still-muted); line-height: 1.5; }\n.still-widget-subtitle { font-size: 13px; font-weight: 500; margin-bottom: 3px; }\n.still-clock-time { display: block; font-size: 42px; font-weight: 400; letter-spacing: -2px; line-height: 1.2; font-variant-numeric: tabular-nums; white-space: nowrap; margin: 0 0 6px; }\n.still-weather-main { display: flex; align-items: center; justify-content: space-between; margin: 0 0 6px; }\n.still-weather-temperature { font-size: 43px; line-height: 1.1; letter-spacing: -2px; font-weight: 400; }\n.still-weather-symbol { width: 42px; height: 42px; color: var(--still-accent); margin-right: 2px; }\n.still-weather-symbol svg { width: 42px; height: 42px; }\n.still-weather-footer { display: flex; justify-content: space-between; gap: 6px; font-size: 9px; color: var(--still-faint); margin-top: 12px; }\n.still-weather-footer a { color: var(--still-faint); text-decoration: none; }\n.still-weather-footer a:hover { color: var(--still-text); text-decoration: underline; }\n.still-media-track { display: flex; align-items: center; gap: 11px; min-height: 44px; }\n.still-media-icon { display: grid; place-items: center; width: 38px; height: 42px; flex-shrink: 0; background: var(--still-glass-sheen), var(--still-glass-tint); border: 1px solid var(--still-glass-edge); border-radius: 12px; color: var(--still-accent); }\n.still-media-icon svg { width: 21px; height: 21px; }\n.still-media-copy { min-width: 0; }\n.still-media-title { font-size: 12px; font-weight: 550; max-height: 34px; line-height: 17px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; overflow-wrap: anywhere; }\n.still-media-copy .still-widget-muted { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 2px; }\n.still-media-controls { display: flex; align-items: center; justify-content: center; gap: 21px; margin: 14px 0 0; }\n.still-media-controls .still-icon-button { width: 32px; height: 32px; }\n#stillspeed-widgets .still-media-play { width: 38px; height: 38px; color: var(--still-text); background: color-mix(in srgb, var(--still-text) 9%, transparent); border: 1px solid var(--still-glass-edge); }\n#stillspeed-widgets button:disabled { cursor: default; opacity: .3; }\n.still-inbox-summary { color: var(--still-muted); font-size: 11px; line-height: 1.5; }\n.still-inbox-list { display: flex; flex-direction: column; gap: 2px; margin-top: 8px; }\n.still-inbox-list:empty { display: none; }\n#stillspeed-widgets .still-inbox-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; text-align: left; padding: 7px 4px; margin: 0 -4px; border-radius: 10px; }\n.still-inbox-copy { display: flex; flex-direction: column; min-width: 0; gap: 1px; }\n.still-inbox-name { font-size: 12px; font-weight: 500; color: var(--still-text); }\n.still-inbox-copy span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.still-inbox-badge { color: var(--still-accent); font-size: 10px; min-width: 16px; text-align: center; flex-shrink: 0; }\n.still-widget-empty { padding: 18px; border-radius: 24px; background: var(--still-glass-fill); }\n\n/* Reserve a rail on roomy windows; on small windows the dock is a collapsible\n   overlay. A Browse window parked on the left keeps its original chat gutter. */\n@media (min-width: 1101px) {\n    [data-still-shell][data-still-widgets=\"open\"] [data-still-page] {\n        margin-inline-end: var(--still-widget-reserve);\n        width: calc(100% - var(--still-widget-reserve)) !important;\n    }\n}\n@media (min-width: 1200px) {\n    [data-still-shell][data-still-navigation=\"open\"][data-still-widgets=\"open\"] [data-still-page] {\n        width: calc(100% - var(--still-drawer-width) - var(--still-nav-x, 20px) - var(--still-widget-reserve)) !important;\n    }\n    [data-still-shell][data-still-movable=\"true\"][data-still-navigation-docked=\"false\"] [data-still-page] {\n        margin-inline-start: 0 !important;\n        width: 100% !important;\n    }\n    [data-still-shell][data-still-movable=\"true\"][data-still-navigation-docked=\"false\"][data-still-widgets=\"open\"] [data-still-page] { width: calc(100% - var(--still-widget-reserve)) !important; }\n    [data-still-shell][data-still-navigation=\"open\"][data-still-movable=\"true\"][data-still-navigation-docked=\"false\"] [data-still-header] {\n        width: min(var(--still-reading-width), calc(100% - 220px)) !important;\n        margin-inline-start: max(196px, calc((100% - var(--still-reading-width)) / 2)) !important;\n    }\n}\n@media (max-width: 1100px) {\n    [data-still-shell] { --still-widget-edge: 16px; }\n    #stillspeed-widget-toggle { right: 16px; }\n    [data-still-shell]:not([data-still-widgets=\"disabled\"]) [data-still-header] { margin-inline-end: 64px !important; width: calc(100% - 260px) !important; }\n}\n@media (max-width: 1000px) {\n    [data-still-shell]:not([data-still-widgets=\"disabled\"]) [data-still-header] { width: calc(100% - 228px) !important; }\n}\n@media (max-width: 760px) {\n    [data-still-shell]:not([data-still-widgets=\"disabled\"]) [data-still-header] { width: calc(100% - 176px) !important; }\n    [data-still-shell] { --still-widget-edge: 12px; }\n    #stillspeed-widgets { top: 108px; }\n    #stillspeed-widget-toggle { right: 12px; }\n}\n[data-still-shell][data-fullscreen=\"true\"] #stillspeed-widget-toggle,\n[data-still-shell][data-fullscreen=\"true\"] #stillspeed-widgets { display: none !important; }\n[data-still-shell][data-fullscreen=\"true\"][data-still-widgets] [data-still-page] { margin-inline: 0 !important; width: 100% !important; }\n@media (prefers-reduced-motion: no-preference) {\n    #stillspeed-widgets button, #stillspeed-widget-toggle, .still-window-bar button { transition: opacity 80ms ease-out; }\n    #stillspeed-widgets button:not(:disabled):active, #stillspeed-widget-toggle:active { opacity: .75; }\n}\nhtml.still-background #stillspeed-widgets button, html.still-background #stillspeed-widget-toggle { transition: none; }\n\n/* One compact channel card, attached below the movable Browse window. The\n   native channel/search controls stay in their original React hierarchy. */\n[data-still-shell][data-still-navigation=\"open\"][data-still-movable=\"true\"] [data-still-page] [data-still-header] {\n    position: fixed !important;\n    inset: calc(var(--still-nav-y, 118px) + var(--still-nav-height, 620px) + 12px) auto auto var(--still-nav-x, 20px) !important;\n    width: min(344px, calc(100vw - 24px)) !important;\n    min-height: 104px !important; height: auto !important;\n    margin: 0 !important; padding: 13px 14px !important;\n    border-radius: 24px !important;\n    border: 1px solid var(--still-glass-edge) !important; border-top-color: var(--still-glass-rim) !important;\n    background: linear-gradient(150deg, rgb(255 255 255 / 8%), transparent 60%), var(--still-glass-fill) !important;\n    box-shadow: var(--still-glass-shadow) !important;\n    backdrop-filter: none !important;\n    z-index: 106;\n    -webkit-app-region: no-drag;\n}\n[data-still-shell][data-still-movable=\"true\"] [data-still-chat] > [class*=\"subtitleContainer_\"] { min-height: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important; }\n/* A small top-edge caption sits in the gutter left of the actual reading\n   surface when Browse is closed. All channel controls remain native. */\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-page] [data-still-header] {\n    position: fixed !important; container-type: normal !important;\n    inset: 0 auto auto var(--still-caption-left, max(12px, calc((100vw - var(--still-reading-width) - 32px) / 2 - 144px))) !important;\n    width: var(--still-caption-width, 140px) !important; min-width: 124px !important; max-width: 220px !important;\n    min-height: 0 !important; height: auto !important;\n    margin: 0 !important; padding: 11px 12px 12px !important;\n    border: 1px solid var(--still-glass-edge) !important; border-top: 0 !important;\n    border-radius: 0 0 18px 18px !important;\n    background: var(--still-glass-sheen), var(--still-glass-fill) !important;\n    box-shadow: var(--still-glass-shadow) !important;\n    backdrop-filter: none !important; z-index: 112;\n    -webkit-app-region: no-drag;\n}\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] > [class*=\"upperContainer_\"] { flex-direction: column; align-items: stretch; gap: 8px; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] [class*=\"children_\"] { display: flex; flex: 0 0 auto; flex-wrap: wrap; align-items: center; gap: 3px 5px; min-height: 0; padding: 0; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] [class*=\"titleWrapper_\"] { flex: 1 1 60px; min-width: 0; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] [class*=\"title_\"] { font-size: 13px !important; line-height: 18px !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] [class*=\"divider_\"] { display: none !important; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] [class*=\"topic_\"] { display: none !important; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] [class*=\"toolbar_\"] { width: 100%; height: auto !important; min-height: 24px !important; padding: 0; gap: 2px; flex-wrap: wrap; align-self: stretch; background: transparent !important; border: 0 !important; box-shadow: none !important; backdrop-filter: none !important; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] [class*=\"iconWrapper_\"] { width: 22px; height: 24px; min-width: 16px; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] [class*=\"iconWrapper_\"] > svg { width: 16px; height: 16px; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] [class*=\"search_\"] { flex: 1 1 70px; min-width: 60px; margin: 0 !important; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-header] [class*=\"searchBar_\"] { width: 100% !important; height: 24px !important; min-height: 24px; padding-inline: 7px !important; font-size: 10px !important; }\n[data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] #stillspeed-air-controls { position: fixed; left: auto; right: calc(100vw - var(--still-caption-left, 12px) - var(--still-caption-width, 140px)); top: 156px; }\n@media (max-width: 1799px) {\n    [data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-chat] [class*=\"chatContent_\"] { padding-inline-start: calc(152px / var(--still-chat-zoom)); }\n    [data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] [data-still-page] [data-still-header] { left: var(--still-caption-left, 12px) !important; }\n}\n@supports (position-anchor: --still-chat-surface) {\n    [data-still-shell][data-still-navigation=\"closed\"][data-still-movable=\"true\"] #stillspeed-air-controls {\n        position-anchor: --still-channel-card;\n        left: auto; right: anchor(right); top: calc(anchor(bottom) + 12px);\n    }\n}\n[data-still-shell][data-still-navigation=\"open\"][data-still-movable=\"true\"] [data-still-header] > [class*=\"upperContainer_\"] { flex-direction: column; align-items: stretch; gap: 10px; }\n[data-still-shell][data-still-navigation=\"open\"][data-still-movable=\"true\"] [data-still-header] [class*=\"children_\"] { flex: 0 0 auto; min-height: 24px; padding: 0 3px; }\n[data-still-shell][data-still-navigation=\"open\"][data-still-movable=\"true\"] [data-still-header] [class*=\"toolbar_\"] {\n    flex: 0 0 auto; align-self: stretch; height: auto !important; min-height: 30px;\n    padding: 0; gap: 3px; flex-wrap: wrap;\n    background: transparent !important; border: 0 !important; box-shadow: none !important;\n}\n[data-still-shell][data-still-navigation=\"open\"][data-still-movable=\"true\"] [data-still-header] [class*=\"search_\"] { flex: 1 1 118px; min-width: 100px; margin: 0 !important; }\n[data-still-shell][data-still-navigation=\"open\"][data-still-movable=\"true\"] [data-still-header] [class*=\"searchBar_\"] { width: 100% !important; }\n[data-still-shell][data-still-navigation=\"open\"][data-still-movable=\"true\"] [data-still-header] [class*=\"topic_\"] { display: none !important; }\n[data-still-shell][data-still-window-dragging] [data-still-header] { transform: translate3d(var(--still-drag-x, 0px), var(--still-drag-y, 0px), 0) !important; will-change: transform; }\n\n/* Extend the two left-hand surfaces to the window edge while preserving their\n   content positions. Dragging detaches them into ordinary rounded windows. */\n[data-still-shell][data-still-movable=\"true\"][data-still-navigation-docked=\"true\"]:not([data-still-window-dragging]) [data-still-sidebar] {\n    left: 0 !important;\n    width: min(calc(344px + var(--still-nav-x, 20px)), 100%) !important;\n    padding-inline-start: var(--still-nav-x, 20px) !important;\n    border-left: 0 !important;\n    border-radius: 0 28px 28px 0 !important;\n}\n[data-still-shell][data-still-movable=\"true\"][data-still-navigation-docked=\"true\"]:not([data-still-window-dragging]) [data-still-sidebar] > [class*=\"panels_\"] {\n    left: calc(12px + var(--still-nav-x, 20px)) !important;\n    width: calc(100% - 24px - var(--still-nav-x, 20px)) !important;\n}\n[data-still-shell][data-still-movable=\"true\"][data-still-navigation-docked=\"true\"]:not([data-still-window-dragging]) .still-window-bar { left: calc(8px + var(--still-nav-x, 20px)); }\n[data-still-shell][data-still-navigation=\"open\"][data-still-movable=\"true\"][data-still-navigation-docked=\"true\"]:not([data-still-window-dragging]) [data-still-page] [data-still-header] {\n    left: 0 !important;\n    width: min(calc(344px + var(--still-nav-x, 20px)), 100vw) !important;\n    padding-inline-start: calc(14px + var(--still-nav-x, 20px)) !important;\n    border-left: 0 !important;\n    border-radius: 0 24px 24px 0 !important;\n    background: var(--still-glass-sheen), var(--still-glass-fill) !important;\n}\n\n/* Browse 2: one full-width destination at a time. The native sidebar remains\n   mounted for voice controls, server menus, folders and the fallback view. */\n[data-still-sidebar][data-still-browser] { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n[data-still-sidebar][data-still-browser]:not([data-still-browse-view=\"native\"]) { flex-direction: column !important; }\n[data-still-sidebar][data-still-browser]:not([data-still-browse-view=\"native\"]) > [class*=\"guilds_\"] { display: none !important; }\n[data-still-sidebar][data-still-browser]:not([data-still-browse-view=\"native\"]) > [class*=\"sidebarList_\"] {\n    flex: 1 1 0 !important; min-height: 0 !important;\n    width: 100% !important; box-sizing: border-box;\n    border-inline-start: 0 !important; padding-inline: 10px;\n}\n[data-still-sidebar][data-still-browser] > .still-browse-toolbar { display: flex !important; }\n[data-still-sidebar][data-still-browser][data-still-browse-results=\"true\"] > [class*=\"sidebarList_\"] { display: none !important; }\n[data-still-sidebar][data-still-browser][data-still-browse-results=\"true\"] > .still-browse-results { display: block !important; }\n[data-still-sidebar][data-still-browser] > .still-browse-toolbar { order: -1; }\n.still-browse-toolbar {\n    flex: 0 0 auto; flex-direction: column; gap: 10px;\n    margin: 0 14px 10px; min-width: 0;\n    -webkit-app-region: no-drag;\n}\n.still-browse-top { display: flex; align-items: center; gap: 5px; min-width: 0; }\n.still-browse-modes {\n    display: flex; flex: 1; gap: 2px; padding: 3px;\n    border: 1px solid var(--still-glass-edge); border-radius: 15px;\n    background: rgb(255 255 255 / 3%);\n}\n.still-browse-toolbar button {\n    border: 0; color: var(--still-muted); background: transparent;\n    font: 500 12px var(--still-font); cursor: pointer;\n}\n.still-browse-modes button { flex: 1; min-width: 0; padding: 8px 4px; border-radius: 11px; }\n.still-browse-toolbar button[aria-pressed=\"true\"] {\n    color: var(--still-text); background: rgb(255 255 255 / 9%);\n    box-shadow: inset 0 1px 0 rgb(255 255 255 / 10%);\n}\n.still-browse-toolbar .still-browse-utility { width: 30px; height: 30px; padding: 7px; border-radius: 10px; }\n.still-browse-utility svg { width: 16px; height: 16px; }\n.still-browse-search-row { display: flex; gap: 7px; min-width: 0; }\n.still-browse-search {\n    display: flex; align-items: center; flex: 1; gap: 7px; min-width: 0;\n    height: 34px; box-sizing: border-box; padding: 0 10px;\n    border: 1px solid var(--still-glass-edge); border-radius: 12px;\n    background: rgb(0 0 0 / 16%);\n}\n.still-browse-search:focus-within { border-color: color-mix(in srgb, var(--still-muted) 65%, transparent); }\n.still-browse-search-symbol { color: var(--still-muted); font-size: 21px; line-height: 1; }\n.still-browse-search input {\n    flex: 1; width: 0; min-width: 0; padding: 0; margin: 0; border: 0;\n    outline: none; background: transparent; color: var(--still-text);\n    font: 400 12px var(--still-font); height: 100%;\n}\n.still-browse-search input::placeholder { color: var(--still-faint); opacity: 1; }\n.still-browse-search input:focus-visible { outline: none !important; box-shadow: none !important; }\n.still-browse-unread { border-radius: 12px; padding: 0 9px; }\n.still-browse-toolbar [hidden] { display: none !important; }\n.still-browse-results {\n    flex: 1 1 0; min-height: 0; overflow: auto; overscroll-behavior: contain;\n    margin: 0 8px 0 10px; padding: 0 4px 6px; scrollbar-width: thin;\n    scrollbar-color: var(--still-border) transparent;\n}\n.still-browse-heading { display: flex; justify-content: space-between; align-items: center; gap: 8px; padding: 8px 9px 10px; font: 500 13px var(--still-font); color: var(--still-text); }\n.still-browse-count { color: var(--still-faint); font-size: 11px; font-variant-numeric: tabular-nums; }\n.still-browse-section { padding: 10px 9px 5px; color: var(--still-faint); font: 500 10px var(--still-font); letter-spacing: .04em; }\n.still-browse-row {\n    display: flex; align-items: center; gap: 10px; box-sizing: border-box;\n    width: 100%; min-width: 0; min-height: 48px; padding: 8px 9px; margin: 2px 0;\n    border: 1px solid transparent; border-radius: 15px;\n    background: transparent; color: var(--still-text); cursor: pointer;\n    font: 500 13px var(--still-font); text-align: start;\n    -webkit-app-region: no-drag;\n}\n.still-browse-row[aria-current=\"true\"] { background: rgb(255 255 255 / 7%); border-color: var(--still-glass-edge); }\n.still-browse-row:hover, .still-browse-toolbar button:hover { background: rgb(255 255 255 / 6%); color: var(--still-text); }\n.still-browse-row:focus-visible, .still-browse-toolbar button:focus-visible { outline: 1px solid var(--still-muted); outline-offset: -2px; }\n.still-browse-avatar {\n    position: relative; display: grid; place-items: center; flex: 0 0 32px;\n    width: 32px; height: 32px; border-radius: 11px; overflow: hidden;\n    background: rgb(255 255 255 / 5%); color: var(--still-muted); font-size: 11px;\n}\n.still-browse-avatar img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }\n:root:not(.still-color) .still-browse-avatar img { filter: grayscale(1); }\n.still-browse-copy { display: flex; flex-direction: column; flex: 1; gap: 3px; min-width: 0; }\n.still-browse-name, .still-browse-context { display: block; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }\n.still-browse-context { font-size: 10px; font-weight: 400; color: var(--still-faint); }\n.still-browse-end { flex: 0 0 auto; min-width: 8px; text-align: center; font-size: 12px; color: var(--still-muted); }\n.still-browse-empty { padding: 26px 14px; text-align: center; color: var(--still-muted); font: 12px/1.6 var(--still-font); }\n.still-browse-empty strong { color: var(--still-text); font-weight: 500; }\n.still-browse-empty p { margin-top: 5px; }\n[data-still-sidebar][data-still-browser][data-still-browse-view=\"native\"] { padding-top: 96px !important; }\n[data-still-sidebar][data-still-browser][data-still-browse-view=\"native\"] > .still-browse-toolbar { position: absolute; top: 46px; left: 14px; right: 14px; margin: 0; }\n[data-still-shell][data-still-navigation-docked=\"true\"]:not([data-still-window-dragging]) [data-still-sidebar][data-still-browser][data-still-browse-view=\"native\"] > .still-browse-toolbar { left: calc(14px + var(--still-nav-x, 20px)); }\n[data-still-sidebar][data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"sidebarList_\"] [class*=\"link_\"] { min-height: 34px; border-radius: 11px !important; }\n@media (max-width: 1199px) {\n    [data-still-sidebar][data-still-browser] { background: var(--still-glass-sheen), color-mix(in srgb, var(--still-glass-fill) 35%, var(--still-base)) !important; }\n}\n\n/* Quiet channel rows retain native row heights and category behavior, which\n   keeps Discord's scroll positioning and voice controls predictable. */\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"sidebarList_\"] [class*=\"link_\"] {\n    background: transparent !important; box-shadow: none !important;\n    border-radius: 10px !important;\n}\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"sidebarList_\"] [class*=\"link_\"]:hover,\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"sidebarList_\"] [class*=\"link_\"]:focus-visible { background: rgb(255 255 255 / 4%) !important; }\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"modeSelected_\"] [class*=\"link_\"] {\n    background: rgb(255 255 255 / 6%) !important;\n    box-shadow: inset 2px 0 0 var(--still-muted) !important;\n}\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"link_\"] :is([class*=\"name_\"], [class*=\"name_\"] > span) {\n    font-size: 14px !important; line-height: 22px !important; font-weight: 450 !important;\n    letter-spacing: .005em; color: var(--still-muted);\n}\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"modeSelected_\"] [class*=\"link_\"] :is([class*=\"name_\"], [class*=\"name_\"] > span),\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"modeUnread_\"] [class*=\"link_\"] :is([class*=\"name_\"], [class*=\"name_\"] > span) { color: var(--still-text); font-weight: 500 !important; }\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"link_\"] svg[class*=\"icon_\"] { width: 16px; height: 16px; color: var(--still-faint); }\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"containerDefault_\"] h3 {\n    font-size: 10px !important; font-weight: 500 !important; letter-spacing: .055em;\n    color: var(--still-faint) !important;\n}\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"containerDefault_\"]:not(:hover):not(:focus-within) [class*=\"iconItem_\"][role=\"button\"] { opacity: 0; }\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"containerDefault_\"]:is(:hover,:focus-within) [class*=\"iconItem_\"][role=\"button\"] { opacity: 1; }\n[data-still-browser]:not([data-still-browse-view=\"native\"]) :is([class*=\"headerEllipseBackdrop_\"], [class*=\"headerEllipseForeground_\"], [class*=\"headerGlass_\"]) { display: none !important; }\n[data-still-browser]:not([data-still-browse-view=\"native\"]) [class*=\"header_\"] { background: transparent !important; backdrop-filter: none !important; }\n\n/* A small, explicit-submit editor in the space below Browse. One static surface;\n   no preview animation, continuous RPC updates or additional background task. */\n[data-still-header] { anchor-name: --still-channel-card; }\n[data-still-shell][data-still-navigation=\"open\"][data-still-movable=\"true\"][data-still-auxiliary=\"activity\"] > #stillspeed-activity-editor { display: flex !important; }\n#stillspeed-activity-editor {\n    position: fixed; z-index: 106;\n    left: var(--still-nav-x, 20px);\n    top: calc(var(--still-nav-y, 118px) + var(--still-nav-height, 620px) + 12px);\n    width: min(344px, calc(100vw - 24px)); height: 176px;\n    box-sizing: border-box; flex-direction: column; gap: 7px;\n    padding: 12px 14px; margin: 0; border-radius: 24px;\n    border: 1px solid var(--still-glass-edge); border-top-color: var(--still-glass-rim);\n    background: var(--still-glass-sheen), var(--still-glass-fill);\n    box-shadow: var(--still-glass-shadow); backdrop-filter: none;\n    color: var(--still-text); font: 12px var(--still-font);\n    -webkit-app-region: no-drag;\n}\n@supports (top: anchor(bottom)) {\n    #stillspeed-activity-editor { position-anchor: --still-browse-window; top: calc(anchor(bottom) + 12px); }\n}\n.still-activity-heading { display: flex; align-items: center; justify-content: space-between; min-height: 16px; font-size: 11px; font-weight: 500; }\n.still-activity-state { color: var(--still-faint); font-size: 10px; }\n.still-activity-fields { display: flex; gap: 7px; min-width: 0; }\n#stillspeed-activity-editor :is(input,select) {\n    height: 30px; min-height: 30px; padding: 0 9px; box-sizing: border-box; min-width: 0;\n    border: 1px solid var(--still-glass-edge); border-radius: 10px;\n    background: rgb(0 0 0 / 20%); color: var(--still-text); font: 12px var(--still-font);\n    outline: none; box-shadow: none;\n}\n#stillspeed-activity-editor .still-activity-fields input { flex: 1; width: 0; }\n#stillspeed-activity-editor select { width: 96px; flex: 0 0 96px; cursor: pointer; }\n#stillspeed-activity-editor option { background: var(--still-surface); }\n#stillspeed-activity-editor input::placeholder { color: var(--still-faint); opacity: 1; }\n#stillspeed-activity-editor :is(input,select):focus-visible { border-color: var(--still-muted); outline: none !important; }\n.still-activity-actions { display: flex; align-items: center; gap: 7px; min-height: 26px; }\n.still-activity-note { flex: 1; color: var(--still-muted); font-size: 10px; }\n#stillspeed-activity-editor button { height: 26px; padding: 0 13px; border-radius: 10px; border: 1px solid var(--still-glass-edge); background: transparent; color: var(--still-muted); font: 500 11px var(--still-font); cursor: pointer; }\n#stillspeed-activity-editor .still-activity-apply { background: var(--still-text); color: var(--still-base); }\n#stillspeed-activity-editor button:disabled { opacity: .4; cursor: default; }\n#stillspeed-activity-editor button:not(:disabled):active { opacity: .8; }\n.still-activity-hint { margin: 0; color: var(--still-faint); font: 10px/12px var(--still-font); }\n[data-still-shell][data-still-navigation-docked=\"true\"]:not([data-still-window-dragging]) > #stillspeed-activity-editor {\n    left: 0; width: min(calc(344px + var(--still-nav-x, 20px)), 100vw);\n    padding-inline-start: calc(14px + var(--still-nav-x, 20px)); border-left: 0; border-radius: 0 24px 24px 0;\n}\n[data-still-shell][data-still-window-dragging] > #stillspeed-activity-editor { transform: translate3d(var(--still-drag-x, 0px), var(--still-drag-y, 0px), 0); }\n@supports (top: anchor(bottom)) {\n    /* The anchor already follows Browse's vertical drag transform. */\n    [data-still-shell][data-still-window-dragging] > #stillspeed-activity-editor { transform: translateX(var(--still-drag-x, 0px)); }\n}\n[data-still-shell][data-fullscreen=\"true\"] > #stillspeed-activity-editor { display: none !important; }\n\n/* Hide only the native Boost Goal component and scheduled-events shortcut.\n   The event ID suffix is a guild ID; this matches every server. */\n[class*=\"sidebarList_\"] [class*=\"containerWithMargin_\"]:has([class*=\"boostCountText_\"]),\n[class*=\"sidebarList_\"] [class*=\"containerDefault_\"]:has(> [data-list-item-id^=\"channels___upcoming-events-\"]),\n[class*=\"sidebarList_\"] li:has(> [class*=\"containerDefault_\"] > [data-list-item-id^=\"channels___upcoming-events-\"]) { display: none !important; }\n\n/* The docked profile bar opens through the left edge like its parent cards.\n   Center only the account row; native voice/connection controls stay intact. */\n[data-still-shell][data-still-movable=\"true\"][data-still-navigation-docked=\"true\"]:not([data-still-window-dragging]) [data-still-sidebar] > [class*=\"panels_\"] {\n    inset-inline: 0 12px !important; left: 0 !important;\n    width: calc(100% - 12px) !important;\n    border-left: 0 !important; border-radius: 0 20px 20px 0 !important;\n}\n[data-still-sidebar] > [class*=\"panels_\"] > [class*=\"container_\"]:has(> [class*=\"accountPopoutButtonWrapper_\"]) {\n    display: flex !important; align-items: center !important; justify-content: center !important;\n    gap: 12px; padding-inline: 14px !important;\n}\n[data-still-sidebar] [class*=\"accountPopoutButtonWrapper_\"] {\n    flex: 0 1 auto !important; min-width: 0 !important; max-width: 160px;\n    align-items: center; justify-content: center;\n}\n[data-still-sidebar] [class*=\"nameTag_\"] { min-width: 0; text-align: center; }\n[data-still-sidebar] [class*=\"container_\"]:has(> [class*=\"accountPopoutButtonWrapper_\"]) > [class*=\"buttons_\"] { flex: 0 0 auto !important; align-items: center; justify-content: center; }\n\n/* Browse and its compact channel card form the resting layout. Activity replaces\n   that card temporarily; extra utilities stay in More without another toolbar. */\n[data-still-sidebar] { anchor-name: --still-browse-window; }\n[data-still-clean-left][data-still-navigation=\"open\"] #stillspeed-air-controls,\n[data-still-clean-left] .still-window-reset,\n[data-still-clean-left][data-still-navigation=\"open\"]:not([data-still-auxiliary=\"tools\"]) [data-still-header] { display: none !important; }\n.still-browse-toolbar { position: relative; }\n.still-browse-menu[role=\"menu\"] {\n    position: absolute; top: 43px; right: 0; z-index: 10; width: 224px;\n    box-sizing: border-box; padding: 6px !important; border-radius: 16px !important;\n    background: var(--still-glass-sheen), var(--still-surface) !important;\n    backdrop-filter: none !important; -webkit-backdrop-filter: none !important;\n    animation: none !important;\n}\n.still-browse-menu .still-browse-menu-item {\n    display: flex; align-items: center; justify-content: space-between;\n    width: 100%; min-height: 32px; padding: 8px 10px; border-radius: 10px;\n    font: 400 12px var(--still-font); text-align: left;\n}\n.still-browse-menu-item[aria-checked=\"true\"]::after { content: \"✓\"; margin-inline-start: 8px; color: var(--still-text); }\n.still-browse-menu-item:last-child { margin-top: 4px; }\n.still-activity-heading { gap: 8px; }\n.still-activity-heading > span:first-child { flex: 1; }\n#stillspeed-activity-editor .still-activity-dismiss { width: 20px; height: 20px; padding: 3px; border: 0; border-radius: 7px; }\n.still-activity-dismiss svg { width: 14px; height: 14px; }\n\n/* Self-contained settings styling, shared by the plugin page and quick panel. */\n.stillcord-settings { --sc-bg:#101113; --sc-line:rgb(255 255 255 / 8%); --sc-soft:#9b9ca3; --sc-text:#ededf0; color:var(--sc-text); font:14px/1.5 var(--still-font,system-ui); max-width:800px; margin:0 auto; padding:28px; box-sizing:border-box; }\n.stillcord-settings * {box-sizing:border-box;}\n.sc-settings-header {display:flex;align-items:center;gap:16px;}\n.sc-mark {display:grid;place-items:center;width:48px;height:48px;flex:none;border-radius:16px;border:1px solid #666;background:linear-gradient(145deg,#3e4045,#121315 65%);box-shadow:inset 0 1px 0 #ffffff40;font-size:25px;letter-spacing:-3px;padding-right:3px;}\n.sc-eyebrow {font-size:9px;letter-spacing:.18em;color:var(--sc-soft);}\n.sc-settings-header h2 {font-size:32px;letter-spacing:-1.3px;line-height:1.15;font-weight:550;margin:4px 0 0;}\n.sc-version {margin-left:auto;font-size:11px;color:var(--sc-soft);border:1px solid var(--sc-line);border-radius:20px;padding:4px 10px;}\n.sc-settings-intro {color:var(--sc-soft);margin:20px 0 24px;}\n.sc-tabs {display:flex;gap:4px;padding:5px;background:#08090a;border:1px solid var(--sc-line);border-radius:16px;margin-bottom:22px;}\n.stillcord-settings button {font:inherit;cursor:pointer;}\n.sc-tab {flex:1;min-width:0;border:1px solid transparent;border-radius:11px;background:transparent;color:var(--sc-soft);padding:9px 8px;white-space:nowrap;font-size:12px!important;}\n.sc-tab[aria-selected=\"true\"] {color:#f2f2f4;border-color:#ffffff13;background:linear-gradient(150deg,#303136,#1c1d20);box-shadow:inset 0 1px 0 #ffffff0d;}\n.sc-tab-panel[hidden] {display:none!important;}\n.sc-tab-panel {display:grid;gap:14px;}\n.sc-card {background:linear-gradient(145deg,#ffffff04,transparent 55%),var(--sc-bg);border:1px solid var(--sc-line);border-top-color:#ffffff19;border-radius:20px;padding:20px 22px;}\n.sc-card h3 {font-size:15px;font-weight:550;letter-spacing:-.2px;margin:0 0 8px;}\n.sc-card-note {font-size:12px;color:var(--sc-soft);margin:0 0 10px;}\n.sc-setting {display:flex;align-items:center;justify-content:space-between;gap:24px;padding:14px 0;border-bottom:1px solid #ffffff07;}\n.sc-setting:last-child {border-bottom:0;padding-bottom:2px;}\n.sc-setting-copy {min-width:0;cursor:pointer;}\n.sc-setting-name,.sc-setting-note {display:block;}\n.sc-setting-name {font-size:13px;font-weight:500;}\n.sc-setting-note {font-size:11px;color:var(--sc-soft);margin-top:3px;line-height:1.45;max-width:46ch;}\n.sc-switch {appearance:none!important;-webkit-appearance:none!important;width:34px!important;height:20px!important;min-width:34px;flex:none;border:1px solid #ffffff18;border-radius:20px;background:#303136;position:relative;cursor:pointer;}\n.sc-switch::before {content:\"\";position:absolute;left:3px;top:3px;width:12px;height:12px;border-radius:50%;background:#9799a0;transition:transform 100ms ease-out;}\n.sc-switch:checked {background:#d7d8db;border-color:#ececef;}\n.sc-switch:checked::before {background:#25262a;transform:translateX(14px);}\n.sc-select,.sc-zip {font:inherit!important;color:var(--sc-text)!important;border:1px solid #ffffff15!important;background:#08090b!important;border-radius:10px!important;padding:9px 12px!important;outline:none;}\n.sc-select {font-size:12px!important;max-width:160px;min-width:128px;}\n.sc-color {border:1px solid #ffffff20;border-radius:10px;background:#17181b;width:38px;height:30px;padding:3px;cursor:pointer;}\n.stillcord-settings :is(button,input,select):focus-visible {outline:2px solid #d1d3df;outline-offset:3px;}\n.stillcord-settings :is(button,input):disabled {opacity:.45;cursor:wait;}\n.sc-location-label {display:block;color:var(--sc-soft);font-size:11px;margin-top:16px;margin-bottom:7px;}\n.sc-location-fields {display:flex;gap:10px;}\n.sc-zip {width:140px;letter-spacing:.08em;}\n.sc-primary {border:1px solid #ececef;border-radius:11px;color:#17181b;background:#e1e2e5;padding:9px 16px;font-size:12px!important;font-weight:550!important;}\n.sc-location-status {font-size:12px;margin:12px 0 3px;color:#c6c7cf;}\n.sc-location-status[data-error] {color:#f4b5b5;}\n.sc-privacy {font-size:10px;color:#777a83;line-height:1.6;margin:14px 0 0;}\n.sc-settings-footer {display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:20px;font-size:10px;color:#777a83;}\n.sc-text-button {border:0;background:transparent;color:var(--sc-soft);font-size:10px!important;padding:5px 0;}\n.sc-restless-hero {position:relative;overflow:hidden;padding-top:30px;}\n.sc-restless-hero > :not(.sc-restless-art) {position:relative;z-index:1;}\n.sc-restless-hero h3 {font-size:34px;letter-spacing:-1.4px;font-weight:450;margin:8px 0;}\n.sc-restless-art {position:absolute;inset:0;overflow:hidden;pointer-events:none;}\n.sc-restless-art svg {position:absolute;width:90%;height:145%;right:-28%;top:-28%;opacity:.5;}\n.sc-presets {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:22px;}\n.sc-preset {border:1px solid #ffffff12;border-radius:13px;background:#0b0d1180;color:#b7bbc5;padding:11px 6px;text-align:center;}\n.sc-preset strong,.sc-preset span {display:block;}\n.sc-preset strong {font-size:12px;font-weight:550;}\n.sc-preset span {font-size:10px;margin-top:3px;color:#777e8c;}\n.sc-preset[aria-pressed=\"true\"] {background:#ffffff0b;border-color:#d9e4ff55;color:#f0f3f9;}\n.sc-effect-count {font-size:10px;color:#8c94a2;margin:12px 0 0;font-variant-numeric:tabular-nums;}\n.sc-restless-art i {position:absolute;width:340px;height:190px;right:-40px;top:-80px;rotate:-30deg;border-radius:50%;border:1px solid #ffffff18;background:linear-gradient(135deg,#ffffff0b,transparent 60%);}\n.sc-restless-art i:nth-child(2) {right:-85px;top:-15px;opacity:.7;}\n.sc-restless-art i:nth-child(3) {right:-130px;top:50px;opacity:.4;}\n.sc-scenes {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;border:0;padding:0;margin:22px 0 10px;}\n.sc-scenes legend {margin-bottom:10px;}\n.sc-scene {position:relative;display:flex;flex-direction:column;gap:3px;padding:8px 8px 12px;background:#090a0c;border:1px solid #ffffff10;border-radius:14px;cursor:pointer;min-width:0;}\n.sc-scene:has(input:checked) {border-color:#c1c7d980;background:#15171b;}\n.sc-scene:has(input:focus-visible) {outline:2px solid #d1d3df;outline-offset:3px;}\n.sc-scene input {position:absolute;inset:0;opacity:0;width:100%;height:100%;margin:0;z-index:1;cursor:pointer;}\n.sc-scene-title {font-size:12px;padding:6px 5px 0;}\n.sc-scene .sc-setting-note {padding:0 5px;font-size:10px;}\n.sc-scene-art {height:88px;background:#040507;position:relative;overflow:hidden;border-radius:8px;color:var(--sr-tint,#d3d9e4);}\n.sc-scene-art svg {position:absolute;inset:0;width:100%;height:100%;}\n.sc-scene-art i {position:absolute;display:block;}\n.sc-scene-silk i {width:180%;height:120%;left:-25%;top:30%;rotate:-24deg;border-radius:50%;border-top:1px solid #dbe2f333;background:linear-gradient(160deg,#9aa6c62b,transparent 60%);}\n.sc-scene-silk i+i {top:-80%;left:-55%;rotate:155deg;}\n.sc-scene-orbit i {width:100%;height:60%;top:20%;border:1px solid #e0e7f630;border-radius:50%;rotate:-25deg;background:linear-gradient(140deg,#a6b1d01c,transparent);}\n.sc-scene-orbit i+i {rotate:40deg;opacity:.5;}\n.sc-scene-aurora {background:radial-gradient(ellipse at 25% 20%,#aabbd43b,transparent 65%),radial-gradient(ellipse at 85% 100%,#8c9dbf30,transparent 65%),#040507;}\n.sc-range {width:140px;min-width:90px;accent-color:#d6d9e1;cursor:pointer;}\n.sc-restless-features .sc-setting {gap:14px;}\n.sc-restless-features .sc-setting::before {content:attr(data-effect);align-self:flex-start;margin-top:2px;color:#626771;font-size:10px;font-variant-numeric:tabular-nums;}\n.sc-restless-features .sc-setting-copy {flex:1;}\n.sc-effect-group {border-top:1px solid #ffffff0b;margin-top:10px;}\n.sc-effect-group summary {display:flex;align-items:center;gap:12px;cursor:pointer;list-style:none;padding:17px 0 7px;font-size:13px;}\n.sc-effect-group summary::-webkit-details-marker {display:none;}\n.sc-group-count {margin-left:auto;color:#777e8c;font-size:10px;}\n.sc-effect-group summary::after {content:'+';font-size:16px;color:#9ba3b0;}\n.sc-effect-group[open] summary::after {content:'−';}\n.sc-effect-group[open] {padding-bottom:10px;}\n.sc-effect-group summary:focus-visible {outline:2px solid #d1d3df;outline-offset:3px;border-radius:5px;}\n#stillcord-settings-dialog {padding:0;border:1px solid #ffffff22;border-radius:28px;background:#0b0c0f;color:#ededf0;width:min(800px,calc(100vw - 40px));max-height:calc(100vh - 48px);box-shadow:0 24px 90px #000b;overflow:auto;scrollbar-width:thin;}\n#stillcord-settings-dialog::backdrop {background:rgb(0 0 0 / 65%);}\n#stillcord-settings-dialog .sc-settings-close {position:sticky;float:right;right:18px;top:18px;margin:14px 14px -42px 0;z-index:3;width:28px;height:28px;border:1px solid #ffffff20;border-radius:50%;background:#222327;color:#bbb;font:18px system-ui;cursor:pointer;}\n#stillcord-settings-dialog .sc-version {margin-right:30px;}\n@media(max-width:620px){.stillcord-settings{padding:20px 16px;}.sc-tab{font-size:10px!important;padding:8px 4px;}.sc-card{padding:16px;}.sc-setting{gap:12px;}.sc-setting-note{max-width:32ch;}.sc-select{min-width:108px;width:108px;}}\n@media(prefers-reduced-motion:reduce){.sc-switch::before{transition:none;}}\n\n/* Static vector paint, animated only with transforms and opacity. */\n#still-restless-backdrop {display:none;position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none;color:var(--sr-tint,#d3d9e4);background:var(--still-base);contain:strict;}\nhtml.sr-live #still-restless-backdrop {display:block;}\nhtml.sr-live :is(#app-mount,#app-mount [class^=\"app_\"],[data-still-shell],[class^=\"bg_\"]) {background:transparent!important;}\nhtml.sr-live :is([class*=\"contentRegion_\"],[class*=\"contentRegionScroller_\"],[class*=\"userSettingsContentPanel_\"],[class*=\"pageBody_\"],[class*=\"peopleColumn_\"]) {background:color-mix(in srgb,var(--still-base) 52%,transparent)!important;}\nhtml.sr-live #app-mount {isolation:isolate;}\n.sr-depth-layer {position:absolute;inset:-2%;opacity:var(--sr-strength,.55);transition:transform 650ms cubic-bezier(.2,.75,.25,1);}\n.sr-artwork {position:absolute;inset:0;}\n.sr-field {position:absolute;inset:-7%;transform-origin:62% 48%;pointer-events:none;animation:sr-art-drift var(--sr-cycle) ease-in-out infinite alternate;}\n.sr-field svg {width:100%;height:100%;display:block;}\n.sr-field-1 {animation-name:sr-art-counter;animation-duration:calc(var(--sr-cycle)*1.25);}\n.sr-field-2 {animation-name:sr-art-glimmer;animation-duration:calc(var(--sr-cycle)*.9);}\n#still-restless-backdrop[data-scene=\"silk\"] .sr-field-1 {opacity:.75;}\n#still-restless-backdrop:is([data-scene=\"orbit\"],[data-scene=\"eclipse\"]) .sr-field {animation:sr-celestial-drift var(--sr-cycle) ease-in-out infinite alternate;}\n#still-restless-backdrop[data-scene=\"aurora\"] .sr-field {animation-name:sr-curtain-drift;}\n#still-restless-backdrop[data-scene=\"aurora\"] .sr-field-1 {animation-delay:-9s;}\n#still-restless-backdrop[data-scene=\"aurora\"] .sr-field-2 {animation-delay:-18s;}\n#still-restless-backdrop[data-scene=\"prism\"] .sr-field {animation-name:sr-prism-drift;}\n#still-restless-backdrop[data-scene=\"prism\"] .sr-field-1 {animation-delay:-5s;}\n#still-restless-backdrop[data-scene=\"contour\"] .sr-field-1 {opacity:.6;}\n@keyframes sr-art-drift {from{transform:translate3d(-2%,-3%,0) rotate(-3deg) scale(1.02);}to{transform:translate3d(2%,3%,0) rotate(3deg) scale(1.08);}}\n@keyframes sr-art-counter {from{transform:translate3d(3%,2%,0) rotate(3deg);}to{transform:translate3d(-3%,-2%,0) rotate(-2deg) scale(1.04);}}\n@keyframes sr-art-glimmer {from{opacity:.5;transform:translate3d(-2%,0,0);}to{opacity:1;transform:translate3d(2%,1%,0);}}\n@keyframes sr-celestial-drift {from{transform:translate3d(-1%,-1%,0) rotate(-1deg) scale(.99);}to{transform:translate3d(1%,1%,0) rotate(1deg) scale(1.03);}}\n@keyframes sr-curtain-drift {from{transform:translate3d(-5%,3%,0) skewX(-4deg);opacity:.65;}to{transform:translate3d(5%,-3%,0) skewX(4deg);opacity:1;}}\n@keyframes sr-prism-drift {from{transform:translate3d(-1%,-2%,0) rotate(-2deg);}to{transform:translate3d(1%,2%,0) rotate(2deg);}}\n\n.sr-atmosphere-layer {position:absolute;inset:0;opacity:var(--sr-flair,.65);pointer-events:none;overflow:hidden;}\n.sr-atmosphere-layer > div {position:absolute;pointer-events:none;display:none;}\n.sr-star-sheet {inset:-4%;opacity:.55;animation:sr-stars-drift calc(var(--sr-cycle)*2) ease-in-out infinite alternate;}\n.sr-star-sheet svg,.sr-caustic-sheet svg {width:100%;height:100%;}\n.sr-caustic-sheet {inset:-12%;opacity:.12;transform-origin:65% 60%;animation:sr-caustic-drift calc(var(--sr-cycle)*1.6) ease-in-out infinite alternate;}\n.sr-meteor {width:200px;height:1px;left:65%;top:5%;opacity:0;rotate:-34deg;background:linear-gradient(90deg,transparent,var(--sr-tint));box-shadow:0 0 5px color-mix(in srgb,var(--sr-tint) 30%,transparent);animation:sr-meteor-pass 21s linear infinite;}\n.sr-meteor-b {left:25%;top:35%;width:120px;animation-delay:9s;animation-duration:29s;}\n.sr-grain-sheet {inset:0;opacity:.1;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Cg fill='%23fff' opacity='.5'%3E%3Cpath d='M4 9h1v1H4zM31 5h1v1h-1zM61 23h1v1h-1zM83 7h1v1h-1zM13 42h1v1h-1zM47 49h1v1h-1zM72 64h1v1h-1zM9 79h1v1H9zM36 87h1v1h-1zM91 93h1v1h-1zM86 36h1v1h-1zM54 76h1v1h-1z'/%3E%3C/g%3E%3C/svg%3E\");}\n.sr-vignette-sheet {inset:0;background:radial-gradient(ellipse at 56% 44%,transparent 25%,rgb(0 0 0 / 25%) 75%,rgb(0 0 0 / 75%));}\nhtml.sr-constellations .sr-star-sheet,html.sr-caustics .sr-caustic-sheet,html.sr-meteors .sr-meteor,html.sr-grain .sr-grain-sheet,html.sr-vignette .sr-vignette-sheet {display:block;}\n@keyframes sr-stars-drift {from{transform:translate3d(-1%,1%,0);opacity:.35;}to{transform:translate3d(1%,-1%,0);opacity:.65;}}\n@keyframes sr-caustic-drift {from{transform:rotate(-16deg) scale(.95);}to{transform:rotate(16deg) scale(1.05);}}\n@keyframes sr-meteor-pass {0%,91%{opacity:0;transform:translateX(0) scaleX(.3);}92%{opacity:.65;}97%,100%{opacity:0;transform:translateX(-650px) scaleX(1);}}\n\n/* One moving paint group preserves all scene detail on smaller GPUs. Static\n   reflections and stars stay visible, without more full-window surfaces. */\nhtml.sr-efficient .sr-artwork {animation:sr-celestial-drift var(--sr-cycle) ease-in-out infinite alternate;}\nhtml.sr-efficient #still-restless-backdrop :is(.sr-field,.sr-star-sheet,.sr-caustic-sheet) {animation:none!important;}\nhtml.sr-efficient :is([data-still-sidebar],[data-still-header],.still-widget,#stillspeed-activity-editor,#stillspeed-air-controls,[class*=\"membersWrap_\"]) {backdrop-filter:none!important;-webkit-backdrop-filter:none!important;}\nhtml.sr-still #still-restless-backdrop * {animation:none!important;}\nhtml.sr-still .sr-depth-layer {transition:none!important;}\nhtml.sr-paused #still-restless-backdrop * {animation-play-state:paused!important;}\nhtml.sr-paused .sr-depth-layer {transition:none!important;}\n@media(prefers-reduced-motion:reduce){html.sr-system-motion #still-restless-backdrop *{animation:none!important;}}\n\n#still-restless-effects { position:fixed; inset:0; z-index:120; pointer-events:none; overflow:hidden; contain:strict; }\r\n.sr-hover-light { position:absolute; top:0; left:0; overflow:hidden; opacity:0; pointer-events:none; transition:opacity 180ms; }\r\n.sr-light-spot { width:320px; height:320px; background:radial-gradient(circle,color-mix(in srgb,var(--sr-tint) 10%,transparent),transparent 70%); }\r\nhtml:not(.sr-surfacelight) .sr-light-spot {display:none;}\r\nhtml.sr-prism .sr-hover-light::after {content:\"\";position:absolute;inset:0;padding:1px;border-radius:inherit;pointer-events:none;background:linear-gradient(125deg,transparent 8%,color-mix(in srgb,var(--sr-tint) 65%,transparent) 32%,transparent 49%,color-mix(in srgb,var(--sr-secondary) 60%,transparent) 78%,transparent);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;opacity:var(--sr-flair);}\r\n.sr-ripple-clip { position:absolute; overflow:hidden; pointer-events:none; }\r\n.sr-ripple { position:absolute; box-sizing:border-box; border:1px solid color-mix(in srgb,var(--sr-tint) 75%,transparent); border-radius:50%; background:radial-gradient(circle,transparent 25%,rgb(255 255 255 / 6%)); }\r\n\r\n/* Shared feedback reaches native Discord controls as well as StillCord. */\r\nhtml.still-restless:not(.sr-paused) :is(button,[role=\"button\"],[role=\"tab\"],input,select,[role=\"menuitem\"],[role=\"menuitemcheckbox\"]) { transition:opacity 150ms ease,background-color 170ms ease,border-color 170ms ease,scale 170ms cubic-bezier(.2,.75,.25,1)!important; }\r\nhtml.still-restless:not(.sr-paused) :is(button,[role=\"button\"],[role=\"tab\"]):active:not(:disabled):not([aria-disabled=\"true\"]) { scale:.97; }\r\n\r\n/* 02 â€” Edge sheen stays local to a hovered card, with no full-screen blur. */\r\nhtml.sr-liquidrims :is(.still-widget,.sc-card) { position:relative; overflow:hidden; }\r\nhtml.sr-liquidrims :is(.still-widget,.sc-card)::after { content:\"\"; position:absolute; top:0; left:0; width:52%; height:1px; background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--sr-tint) 80%,white),transparent); opacity:0; pointer-events:none; }\r\nhtml.sr-liquidrims:not(.sr-paused) :is(.still-widget,.sc-card):hover::after { animation:sr-rim 850ms ease-out both; }\r\n@keyframes sr-rim { 0% {opacity:0;transform:translateX(-100%);} 25% {opacity:.9;} 100% {opacity:0;transform:translateX(260%);} }\r\n\r\n/* 03 â€” Individual translate leaves Discord's positioning transforms intact. */\r\nhtml.sr-entrances:not(.sr-paused) :is([role=\"menu\"],[role=\"dialog\"],[class*=\"tooltip_\"],.user-profile-popout,[class*=\"userProfileOuter_\"],[class*=\"membersWrap_\"],[class*=\"peopleColumn_\"],[class*=\"contentRegion_\"],[class*=\"searchResultsWrap_\"],[class*=\"emojiPicker_\"],[class*=\"stickerPicker_\"],[class*=\"gifPicker_\"],.still-browse-menu) { animation:sr-enter var(--sr-time) cubic-bezier(.2,.75,.25,1) backwards!important; }\r\nhtml.sr-entrances:not(.sr-paused) :is([role=\"menu\"],[role=\"dialog\"]) :is([role=\"menu\"],[role=\"dialog\"]) { animation:none!important; }\r\n@keyframes sr-enter { from {opacity:.35;translate:0 6px;} to {opacity:1;translate:0 0;} }\r\n\r\n/* 05 â€” Actual avatars stay in their native hit targets. */\r\nhtml.sr-avatars:not(.sr-paused) :is([class*=\"cozyMessage_\"],[class*=\"member_\"],[class*=\"userProfileOuter_\"]) [class*=\"avatar_\"] { transition:scale 220ms ease,box-shadow 220ms ease!important; }\r\nhtml.sr-avatars:not(.sr-paused) :is([class*=\"cozyMessage_\"],[class*=\"member_\"]):hover [class*=\"avatar_\"],html.sr-avatars:not(.sr-paused) [class*=\"userProfileOuter_\"] [class*=\"avatar_\"]:hover { scale:1.055; box-shadow:0 0 0 2px var(--still-base),0 0 0 3px color-mix(in srgb,var(--sr-tint) 38%,transparent)!important; }\r\n\r\n/* 06 â€” Small translations, never row height or padding animations. */\r\nhtml.sr-navigation:not(.sr-paused) :is(.still-browse-row,[class*=\"sidebarList_\"] [class*=\"link_\"],[class*=\"privateChannels_\"] [class*=\"interactive_\"],[class*=\"members_\"] [class*=\"member_\"]) { transition:translate 200ms cubic-bezier(.2,.75,.25,1),background-color 180ms ease!important; }\r\nhtml.sr-navigation:not(.sr-paused) :is(.still-browse-row,[class*=\"sidebarList_\"] [class*=\"link_\"],[class*=\"privateChannels_\"] [class*=\"interactive_\"],[class*=\"members_\"] [class*=\"member_\"]):hover { translate:2px 0; }\r\nhtml.sr-navigation:not(.sr-paused) :is([class*=\"guilds_\"] [class*=\"listItemWrapper_\"],.still-browse-avatar) { transition:scale 220ms ease!important; }\r\nhtml.sr-navigation:not(.sr-paused) :is([class*=\"guilds_\"] [class*=\"listItemWrapper_\"],.still-browse-avatar):hover { scale:1.06; }\r\n\r\n/* 08 â€” Only the composer's decorative edge breathes; typed text stays still. */\r\nhtml.sr-composer [class*=\"channelTextArea_\"] [class*=\"scrollableContainer_\"] { position:relative; }\r\nhtml.sr-composer [class*=\"channelTextArea_\"] [class*=\"scrollableContainer_\"]::after { content:\"\"; position:absolute; inset:0; pointer-events:none; border-radius:inherit; box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--sr-tint) 38%,transparent); opacity:0; transition:opacity 220ms; }\r\nhtml.sr-composer:not(.sr-paused) [class*=\"channelTextArea_\"]:focus-within [class*=\"scrollableContainer_\"]::after { animation:sr-breathe 3.6s ease-in-out infinite alternate; }\r\n@keyframes sr-breathe { from {opacity:.25;} to {opacity:.75;} }\r\n\r\n/* 09 â€” Hover motion and a playback indicator, never perpetual text bobbing. */\r\nhtml.sr-widgets:not(.sr-paused) .still-widget { transition:translate 240ms cubic-bezier(.2,.75,.25,1),border-color 240ms ease!important; }\r\nhtml.sr-widgets:not(.sr-paused) .still-widget:hover { translate:0 -3px; border-color:color-mix(in srgb,var(--sr-tint) 25%,transparent); }\r\nhtml.sr-widgets:not(.sr-paused) .still-widget[data-still-playing=\"true\"] .still-media-icon svg { animation:sr-media 1.8s ease-in-out infinite alternate!important; }\r\n@keyframes sr-media { from {opacity:.45;scale:.93;} to {opacity:1;scale:1.04;} }\r\n\r\n/* New details stay decorative: native hit targets, text and scroll geometry stay put. */\r\n.sr-cursor-lights {display:none;position:absolute;inset:0;opacity:0;transition:opacity 260ms ease;pointer-events:none;}\r\nhtml.sr-trail:not(.sr-paused) .sr-cursor-lights {display:block;}\r\n.sr-cursor-lights i {position:absolute;top:-2px;left:-2px;width:calc(5px - var(--sr-index)*.65px);height:calc(5px - var(--sr-index)*.65px);border-radius:50%;background:var(--sr-tint);box-shadow:0 0 8px color-mix(in srgb,var(--sr-tint) 35%,transparent);opacity:calc((.48 - var(--sr-index)*.09)*var(--sr-flair));transition:transform calc(70ms + var(--sr-index)*65ms) cubic-bezier(.12,.7,.2,1);}\r\nhtml.sr-magnetic:not(.sr-paused) [data-sr-magnetic] {translate:var(--sr-mx,0px) var(--sr-my,0px);transition:translate 150ms cubic-bezier(.2,.75,.25,1)!important;}\r\nhtml.sr-photos:not(.sr-paused) [class*=\"imageWrapper_\"] img {transition:scale 320ms cubic-bezier(.2,.75,.25,1),rotate 320ms ease!important;}\r\nhtml.sr-photos:not(.sr-paused) [class*=\"imageWrapper_\"]:hover img {scale:1.025;rotate:.45deg;}\r\nhtml.sr-reactions:not(.sr-paused) [class*=\"reaction_\"]:hover :is(img.emoji,[class*=\"emoji_\"]) {animation:sr-reaction-pop 460ms cubic-bezier(.2,.75,.25,1) backwards!important;}\r\n@keyframes sr-reaction-pop {0%{scale:1;rotate:0deg;}42%{scale:1.22;rotate:-9deg;}70%{scale:1.1;rotate:5deg;}100%{scale:1;rotate:0deg;}}\r\nhtml.sr-unread:not(.sr-paused) :is([class*=\"sidebarList_\"] [class*=\"unread_\"],.still-browse-row[aria-label*=\"mentions\"] .still-browse-end) {animation:sr-beacon 1.3s ease-in-out 2;}\r\n@keyframes sr-beacon {0%,100%{opacity:1;}50%{opacity:.3;}}\r\n.sr-writing-indicator {position:absolute;left:0;top:0;display:flex;align-items:center;gap:3px;pointer-events:none;opacity:0;transition:opacity 200ms;}\r\n.sr-writing-indicator i {width:3px;height:3px;border-radius:50%;background:var(--sr-tint);}\r\nhtml.sr-writing:not(.sr-paused) .sr-writing-visible {opacity:calc(.85*var(--sr-flair));}\r\nhtml.sr-writing:not(.sr-paused) .sr-writing-visible i {animation:sr-writing-wave 700ms ease-in-out infinite;animation-delay:calc(var(--sr-index)*95ms);}\r\n@keyframes sr-writing-wave {0%,100%{translate:0 0;opacity:.3;}50%{translate:0 -3px;opacity:1;}}\r\nhtml.sr-search:not(.sr-paused) :is(.still-browse-search,[class*=\"searchBar_\"]):focus-within {box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--sr-tint) 42%,transparent),0 0 14px color-mix(in srgb,var(--sr-secondary) 8%,transparent)!important;transition:box-shadow 240ms ease!important;}\r\nhtml.sr-search input[type=\"search\"]:focus {outline:1px solid color-mix(in srgb,var(--sr-tint) 50%,transparent);outline-offset:2px;}\r\n.sr-crossing-clip {position:absolute;overflow:hidden;pointer-events:none;}\r\n.sr-crossing-beam {width:35%;height:100%;background:linear-gradient(105deg,transparent,color-mix(in srgb,var(--sr-tint) 7%,transparent),transparent);}\r\n.sr-reading-light {position:absolute;top:0;left:0;width:2px;height:44px;opacity:0;border-radius:99px;pointer-events:none;background:linear-gradient(transparent,var(--sr-tint),transparent);box-shadow:0 0 10px color-mix(in srgb,var(--sr-tint) 28%,transparent);transition:opacity 220ms,transform 70ms ease-out;}\r\n\r\n/* Hidden windows, fullscreen video and OS reduced-motion stop decorative work. */\r\nhtml.sr-paused #still-restless-backdrop *,html.sr-paused .still-widget svg { animation-play-state:paused!important; }\r\nhtml.sr-paused #still-restless-effects { display:none; }\r\nhtml.sr-paused .sr-depth-layer { transition:none!important; }\r\n@media(prefers-reduced-motion:reduce) {\r\n    html.sr-system-motion #still-restless-backdrop * { animation:none!important; }\r\n    html.still-restless.sr-system-motion :is(button,[role=\"button\"],[role=\"tab\"],[role=\"menu\"],[role=\"dialog\"],.still-widget,.sc-card) { animation:none!important;transition:none!important; }\r\n}\r\n";
const STILL_SCENES = Object.freeze([
    ["silk", "Silk", "Liquid chrome folds"], ["orbit", "Orbit", "Sculpted orbital light"],
    ["aurora", "Aurora", "Luminous flowing ribbons"], ["eclipse", "Eclipse", "An obsidian sun"],
    ["prism", "Prism", "Suspended optical glass"], ["contour", "Contour", "Waves of silver terrain"]
]);
let stillArtworkId = 0;

// Original vector scenes, painted once per selection. CSS moves three layers;
// geometry, gradients and light falloff never need a per-frame JS render pass.
function stillWallpaper(scene, layer = 0) {
    if (!STILL_SCENES.some(([key]) => key === scene)) scene = "silk";
    const id = `sr-art-${++stillArtworkId}`;
    const paint = name => `url(#${id}-${name})`;
    const defs = `<defs>
      <linearGradient id="${id}-metal" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="currentColor" stop-opacity=".02"/><stop offset=".34" stop-color="currentColor" stop-opacity=".12"/><stop offset=".46" stop-color="currentColor" stop-opacity=".8"/><stop offset=".49" stop-color="#fff" stop-opacity=".85"/><stop offset=".51" stop-color="currentColor" stop-opacity=".12"/><stop offset=".72" stop-color="var(--sr-secondary,#89939f)" stop-opacity=".04"/><stop offset="1" stop-color="currentColor" stop-opacity=".35"/></linearGradient>
      <linearGradient id="${id}-rim"><stop stop-color="currentColor" stop-opacity="0"/><stop offset=".36" stop-color="currentColor" stop-opacity=".2"/><stop offset=".58" stop-color="#fff" stop-opacity=".9"/><stop offset=".8" stop-color="currentColor" stop-opacity=".3"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient>
      <linearGradient id="${id}-veil" x1="0" y1="0" x2="1" y2="1"><stop stop-color="currentColor" stop-opacity=".34"/><stop offset=".4" stop-color="var(--sr-secondary,#89939f)" stop-opacity=".1"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient>
      <radialGradient id="${id}-halo"><stop stop-color="currentColor" stop-opacity=".35"/><stop offset=".42" stop-color="var(--sr-secondary,#89939f)" stop-opacity=".14"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient>
      <radialGradient id="${id}-sphere" cx=".72" cy=".2" r=".9"><stop stop-color="currentColor" stop-opacity=".3"/><stop offset=".16" stop-color="#1c2027"/><stop offset=".55" stop-color="#030405"/><stop offset="1" stop-color="#000"/></radialGradient>
      <radialGradient id="${id}-corona"><stop offset=".6" stop-color="currentColor" stop-opacity="0"/><stop offset=".68" stop-color="currentColor" stop-opacity=".08"/><stop offset=".73" stop-color="currentColor" stop-opacity=".7"/><stop offset=".75" stop-color="#fff" stop-opacity=".9"/><stop offset=".77" stop-color="currentColor" stop-opacity=".45"/><stop offset=".83" stop-color="currentColor" stop-opacity=".07"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient>
    </defs>`;
    let art = "";
    if (scene === "silk") {
        const shapes = [
            ['M-250 950C150 50 650 1220 1120 410S1550-240 1850 240L1840 480C1430-40 1430 650 1060 880S300 200-250 1220Z', 'M-250 950C150 50 650 1220 1120 410S1550-240 1850 240'],
            ['M-150 260C400-180 620 600 1200 200S1800 100 1800-100L1800 210C1330 760 710 250 300 300S40 430-150 550Z', 'M-150 260C400-180 620 600 1200 200S1800 100 1800-100']
        ];
        if (layer < 2) {
            const [d,edge] = shapes[layer];
            art = `<path d="${d}" fill="${paint('metal')}"/><path d="${edge}" fill="none" stroke="${paint('rim')}" stroke-width="1.6"/>`;
            for (let i=1;i<7;i++) art += `<path d="${edge}" transform="translate(0 ${i*5})" fill="none" stroke="currentColor" stroke-opacity="${.065-i*.007}" stroke-width=".7"/>`;
        } else art = `<ellipse cx="1230" cy="130" rx="640" ry="390" fill="${paint('halo')}"/><path d="M-100 1130Q800 580 1750 1050" fill="none" stroke="${paint('rim')}" stroke-width="2"/>`;
    } else if (scene === "orbit") {
        if (layer === 0) art = `<ellipse cx="1030" cy="470" rx="650" ry="440" fill="${paint('halo')}"/><g transform="rotate(-28 990 480)" fill="none" stroke="${paint('rim')}"><ellipse cx="990" cy="480" rx="680" ry="220" stroke-width="1.4"/><ellipse cx="990" cy="480" rx="580" ry="185" stroke-width="14" opacity=".13"/><ellipse cx="990" cy="480" rx="770" ry="290" opacity=".25"/></g>`;
        if (layer === 1) art = `<circle cx="990" cy="480" r="224" fill="${paint('sphere')}" stroke="${paint('rim')}" stroke-width="2"/><path d="M845 310A224 224 0 0 1 1209 447" fill="none" stroke="${paint('rim')}" stroke-width="4" opacity=".45"/>`;
        if (layer === 2) art = `<g transform="rotate(-28 990 480)" fill="none" stroke="${paint('rim')}"><path d="M310 480A680 220 0 0 0 1670 480" stroke-width="2.3"/><path d="M410 480A580 185 0 0 0 1570 480" stroke-width="18" opacity=".13"/><path d="M410 480A580 185 0 0 0 1570 480" stroke-width=".8"/><circle cx="1530" cy="610" r="4" fill="currentColor"/></g>`;
    } else if (scene === "aurora") {
        const paths = ['M-180 850C210-170 490 850 850 200S1450 950 1780 120','M-100 1100C290 160 720 1300 1020 580S1430-250 1810 160','M-200 40C410 720 590-100 1120 250S1300 850 1790 600'];
        const d=paths[layer];
        for(let i=0;i<9;i++) art+=`<path d="${d}" fill="none" stroke="${paint(i>5?'rim':'veil')}" stroke-width="${190-i*22}" stroke-opacity="${.025+i*.012}"/>`;
        art+=`<path d="${d}" fill="none" stroke="${paint('rim')}" stroke-width="1.1" opacity=".7"/>`;
    } else if (scene === "eclipse") {
        if(layer===0) art=`<ellipse cx="990" cy="470" rx="680" ry="550" fill="${paint('halo')}" opacity=".8"/><circle cx="990" cy="470" r="400" fill="${paint('corona')}"/>`;
        if(layer===1) art=`<circle cx="990" cy="470" r="296" fill="#010203"/><path d="M743 306A296 296 0 0 1 1267 366" fill="none" stroke="${paint('rim')}" stroke-width="2.1"/><ellipse cx="990" cy="470" rx="297" ry="296" fill="none" stroke="currentColor" stroke-opacity=".18"/>`;
        if(layer===2) art=`<g transform="rotate(-16 990 470)"><path d="M-100 610C600 500 650 430 990 478S1380 580 1770 320" fill="none" stroke="${paint('rim')}" stroke-width="1.4"/><path d="M-100 614C600 504 650 434 990 482S1380 584 1770 324" fill="none" stroke="${paint('veil')}" stroke-width="28" opacity=".25"/><ellipse cx="1250" cy="440" rx="300" ry="30" fill="${paint('halo')}"/></g>`;
    } else if (scene === "prism") {
        if(layer===0) art=`<ellipse cx="1080" cy="540" rx="650" ry="460" fill="${paint('halo')}" opacity=".6"/><path d="M790 40L1450 340 1080 970 420 660Z" fill="${paint('veil')}" stroke="${paint('rim')}"/>`;
        if(layer===1) art=`<g stroke="${paint('rim')}" stroke-width="1.2"><path d="M790 40L1080 970 420 660Z" fill="${paint('metal')}" opacity=".7"/><path d="M790 40L1450 340 1080 970Z" fill="${paint('veil')}"/><path d="M420 660L1450 340" fill="none" opacity=".4"/></g>`;
        if(layer===2) art=`<g stroke="${paint('rim')}" fill="${paint('veil')}" opacity=".8"><path d="M110 350L340 170 450 500 220 680Z"/><path d="M1320 710L1620 530 1740 880 1440 1060Z"/></g><path d="M790 40L1080 970" fill="none" stroke="${paint('rim')}" stroke-width="2"/>`;
    } else if (scene === "contour") {
        if(layer===2) art=`<ellipse cx="1000" cy="700" rx="800" ry="480" fill="${paint('halo')}" opacity=".5"/>`;
        else for(let i=0;i<22;i++) {
            const y=layer===0?460+i*18:-150+i*18, a=layer===0?-340:320;
            art+=`<path d="M-200 ${y}C300 ${y+a} 470 ${y+400} 980 ${y+80}S1550 ${y-310} 1830 ${y+30}" fill="none" stroke="${paint('rim')}" stroke-width="${i%7===0?1.9:.85}" stroke-opacity="${i%7===0?.8:.35}"/>`;
        }
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${defs}${art}</svg>`;
}

function stillAtmosphere() {
    let stars="";
    for(let i=0;i<64;i++) {
        const x=(i*317+71)%1600,y=(i*i*29+53)%1000,r=i%13===0?1.8:.65;
        stars+=`<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor" opacity="${.2+(i%5)*.13}"/>`;
        if(i%13===0) stars+=`<path d="M${x-5} ${y}h10M${x} ${y-5}v10" stroke="currentColor" stroke-width=".5" opacity=".32"/>`;
    }
    stars+='<path d="M71 53L388 82 705 169 1022 314M217 733L534 530 851 385" fill="none" stroke="currentColor" stroke-width=".6" opacity=".14"/>';
    return `<div class="sr-star-sheet"><svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">${stars}</svg></div><div class="sr-caustic-sheet">${stillWallpaper('contour',0)}</div><div class="sr-meteor sr-meteor-a"></div><div class="sr-meteor sr-meteor-b"></div><div class="sr-grain-sheet"></div><div class="sr-vignette-sheet"></div>`;
}

const STILL_RESTLESS_FEATURES = Object.freeze([
    ["restlessSurfaceLight", "Glass light", "A soft light follows your pointer across glass panels."],
    ["restlessLiquidRims", "Liquid rims", "A silver highlight sweeps over the edge of a hovered card."],
    ["restlessEntrances", "Soft entrances", "Panels, menus, profiles, and settings settle into place."],
    ["restlessMessages", "Message arrivals", "New messages ease in without shifting the conversation."],
    ["restlessAvatars", "Halo avatars", "Profile pictures lift into a fine halo on hover."],
    ["restlessNavigation", "Channel glide", "Channel, server, and member rows respond with a gentle glide."],
    ["restlessRipples", "Touch ripples", "A small, fading ring follows each button press."],
    ["restlessComposer", "Composer aura", "The message field glows softly while you write."],
    ["restlessWidgets", "Living widgets", "Cards lift on hover; the media icon breathes during playback."],
    ["restlessDepth", "Quiet depth", "The live canvas follows your pointer with subtle parallax."],
    ["restlessConstellations", "Constellations", "Small star clusters and fine connecting lines drift behind the glass."],
    ["restlessMeteors", "Shooting light", "Occasional silver streaks cross the canvas."],
    ["restlessCaustics", "Glass caustics", "Slow reflected light ripples across the background."],
    ["restlessGrain", "Frosted grain", "A fine, still texture gives the canvas a tactile finish."],
    ["restlessVignette", "Gallery lighting", "Darkened edges frame the artwork and keep the center readable."],
    ["restlessPrism", "Prismatic edges", "A two-tone reflection traces the glass panel under your pointer."],
    ["restlessTrail", "Comet cursor", "Four fading points of light follow pointer movement."],
    ["restlessMagnetic", "Magnetic icons", "Toolbar icons lean gently toward your pointer inside their buttons."],
    ["restlessPhotos", "Photo depth", "Images lift and tilt slightly when you hover over an attachment."],
    ["restlessReactions", "Reaction bounce", "Reaction emoji give a short, springy response on hover."],
    ["restlessUnread", "Unread beacons", "New unread markers give two soft pulses, then settle."],
    ["restlessWriting", "Writing rhythm", "Three small lights respond while you type in the message field."],
    ["restlessSearch", "Search lens", "Search fields gain a crisp, illuminated focus treatment."],
    ["restlessCrossings", "Channel crossing", "A brief light sweep marks the move into another channel."],
    ["restlessScrollGlint", "Reading glint", "A light on the chat edge follows your position while scrolling."]
]);
const STILL_RESTLESS_GROUPS = Object.freeze([
    ["Atmosphere", ["Depth","Constellations","Meteors","Caustics","Grain","Vignette"]],
    ["Glass & space", ["SurfaceLight","LiquidRims","Entrances","Prism","Crossings"]],
    ["Interaction", ["Navigation","Ripples","Trail","Magnetic","Photos","Reactions","Search"]],
    ["Conversation", ["Messages","Avatars","Composer","Widgets","Unread","Writing","ScrollGlint"]]
]);
function stillRestlessPreset(settings, name) {
    const enabled = name === "subtle" ? new Set(["SurfaceLight","Entrances","Messages","Navigation","Ripples","Avatars","Grain","Vignette","Search","ScrollGlint"])
        : name === "expressive" ? new Set(STILL_RESTLESS_FEATURES.map(([key])=>key.slice(8)).filter(key=>!["Trail","Meteors","Caustics"].includes(key)))
        : name === "allout" ? new Set(STILL_RESTLESS_FEATURES.map(([key])=>key.slice(8))) : null;
    if (!enabled) return null;
    return {...settings,restless:true,restlessLive:true,restlessQuality:name==="subtle"?"still":"efficient",restlessEnergy:name==="subtle"?35:name==="expressive"?65:85,restlessTempo:name==="subtle"?"calm":name==="expressive"?"balanced":"vivid",
        ...Object.fromEntries(STILL_RESTLESS_FEATURES.map(([key])=>[key,enabled.has(key.slice(8))]))};
}

class StillRestless {
    constructor(plugin) {
        this.plugin = plugin;
        this.animations = new Set();
        this.ripples = new Set();
        this.transients = new Set();
        this.listeners = [];
        this.frame = 0;
        this.scrollFrame = 0;
        this.pointerActive = false;
        this.trailTimer = 0;
        this.point = null;
        this.surface = null;
        this.trailPoints = [];
        this.lastPath = location.pathname;
        this.alive = true;
        this.motion = matchMedia("(prefers-reduced-motion: reduce)");
        this.backdrop = document.createElement("div");
        this.backdrop.id = "still-restless-backdrop";
        this.backdrop.setAttribute("aria-hidden", "true"); this.backdrop.inert = true;
        this.depth = document.createElement("div"); this.depth.className = "sr-depth-layer";
        this.artwork = document.createElement("div"); this.artwork.className = "sr-artwork";
        for (let i = 0; i < 3; i++) {
            const field = document.createElement("div"); field.className = `sr-field sr-field-${i}`;
            this.artwork.append(field);
        }
        this.depth.append(this.artwork);
        this.atmosphere = document.createElement("div"); this.atmosphere.className = "sr-atmosphere-layer"; this.atmosphere.innerHTML = stillAtmosphere();
        this.backdrop.append(this.depth,this.atmosphere); document.body.prepend(this.backdrop);
        this.effects = document.createElement("div"); this.effects.id = "still-restless-effects";
        this.effects.setAttribute("aria-hidden", "true"); this.effects.inert = true;
        this.light = document.createElement("div"); this.light.className = "sr-hover-light";
        this.spot = document.createElement("div"); this.spot.className = "sr-light-spot";
        this.light.append(this.spot); this.effects.append(this.light); document.body.append(this.effects);
        this.trail = document.createElement("div"); this.trail.className="sr-cursor-lights";
        for(let i=0;i<4;i++){const dot=document.createElement("i");dot.style.setProperty("--sr-index",i);this.trail.append(dot);}
        this.writing=document.createElement("div");this.writing.className="sr-writing-indicator";
        for(let i=0;i<3;i++){const dot=document.createElement("i");dot.style.setProperty("--sr-index",i);this.writing.append(dot);}
        this.glint=document.createElement("div");this.glint.className="sr-reading-light";
        this.effects.append(this.trail,this.writing,this.glint);
        this.surfaceSelector = '[data-still-sidebar], [data-still-header], [data-still-messages], .still-widget, .sc-card, [class*="membersWrap_"], [class*="userProfileOuter_"]';
        this.on(document, "pointermove", event => this.pointer(event), {passive:true});
        this.on(document, "pointerdown", event => this.press(event), {passive:true});
        this.on(document, "pointerleave", () => this.clearPointer());
        this.on(document, "scroll", event => this.scroll(event), {capture:true,passive:true});
        this.on(document, "input", event => this.typed(event), {passive:true});
        this.on(document, "focusout", () => this.clearWriting());
        this.on(window, "resize", () => this.clearPointer(), {passive:true});
        this.on(window, "blur", () => this.visibilityChanged());
        this.on(window, "focus", () => this.visibilityChanged());
        this.on(document, "fullscreenchange", () => this.visibilityChanged());
        this.on(this.motion, "change", () => this.visibilityChanged());
        // Discord replaces the root class list during navigation/theme changes.
        // Watch only that one attribute; write only missing or changed flags.
        this.rootObserver = new MutationObserver(() => this.updateClasses());
        this.rootObserver.observe(document.documentElement, {attributes:true,attributeFilter:["class"]});
    }
    on(target, name, callback, options) {
        target.addEventListener(name,callback,options);
        this.listeners.push(() => target.removeEventListener(name,callback,options));
    }
    active() { return this.alive && !document.hidden && document.hasFocus?.() !== false && !(this.motion.matches && this.plugin.settings.restlessRespectMotion) && !document.fullscreenElement; }
    updateClasses() {
        if (!this.alive) return;
        const s = this.plugin.settings, root = document.documentElement;
        const flags = [["still-restless",true],["sr-live",s.restlessLive],["sr-efficient",s.restlessQuality!=="layered"],["sr-still",s.restlessQuality==="still"],["sr-system-motion",s.restlessRespectMotion],["sr-paused",!this.active()],...STILL_RESTLESS_FEATURES.map(([key])=>[`sr-${key.slice(8).toLowerCase()}`,s[key]])];
        for (const [name,enabled] of flags) if (root.classList.contains(name) !== Boolean(enabled)) root.classList.toggle(name,Boolean(enabled));
    }
    sync() {
        const s = this.plugin.settings;
        this.updateClasses();
        if(this.backdrop.dataset.scene !== s.restlessScene) {
            [...this.artwork.children].forEach((field,i)=>{field.innerHTML=stillWallpaper(s.restlessScene,i);});
        }
        this.backdrop.dataset.scene = s.restlessScene;
        const pace = {calm:[46,330], balanced:[32,250], vivid:[22,200]}[s.restlessTempo];
        this.duration = pace[1];
        this.plugin.setStyle("stillcord-restless-config", `:root { --sr-tint: ${s.restlessTint}; --sr-secondary: ${s.restlessSecondary}; --sr-flair: ${s.restlessEnergy / 100}; --sr-strength: ${s.restlessStrength / 100}; --sr-cycle: ${pace[0]}s; --sr-time: ${pace[1]}ms; }`);
        for (const animation of [...this.animations]) animation.cancel();
        this.clearPointer();
        this.clearWriting(); this.clearScroll();
        this.visibilityChanged();
    }
    visibilityChanged() {
        this.updateClasses();
        if (!this.active()) {
            this.clearPointer();
            this.clearWriting(); this.clearScroll();
            for (const animation of [...this.animations]) animation.cancel();
        }
    }
    clearPointer() {
        if (!this.pointerActive && !this.frame && !this.magneticNode) return;
        this.pointerActive = false;
        cancelAnimationFrame(this.frame); this.frame = 0;
        this.point = null; this.surface = null;
        this.light.style.opacity = "0";
        this.depth.style.transform = "translate3d(0,0,0)";
        clearTimeout(this.trailTimer); this.trailTimer=0; this.trailPoints=[];
        this.trail.style.opacity="0";
        this.clearMagnet();
    }
    pointer(event) {
        if (!this.active() || event.pointerType === "touch" || event.buttons || this.plugin.shell?.hasAttribute("data-still-window-dragging")) return;
        const s = this.plugin.settings;
        if (!s.restlessSurfaceLight && !s.restlessPrism && !s.restlessTrail && !s.restlessMagnetic && !(s.restlessDepth && s.restlessLive && s.restlessQuality!=="still")) return;
        this.pointerActive = true;
        this.point = {x:event.clientX, y:event.clientY, target:event.target};
        if (this.frame) return;
        this.frame = requestAnimationFrame(() => {
            this.frame = 0; if (!this.active() || !this.point) return;
            const p = this.point;
            // Measure before changing styles: pointer input must not alternate
            // layout reads and writes on every display frame.
            const surface = (s.restlessSurfaceLight || s.restlessPrism) && p.target instanceof Element ? p.target.closest(this.surfaceSelector) : null;
            const visible = surface?.isConnected && !surface.closest('[aria-hidden="true"]');
            const rect = visible ? surface.getBoundingClientRect() : null;
            const radius = rect && (this.surface === surface ? this.radius : getComputedStyle(surface).borderRadius);
            this.magnet(s.restlessMagnetic ? p : null);
            if(s.restlessTrail) {
                this.trailPoints.unshift({x:p.x,y:p.y});this.trailPoints.length=Math.min(4,this.trailPoints.length);
                [...this.trail.children].forEach((dot,i)=>{const point=this.trailPoints[Math.min(i,this.trailPoints.length-1)];dot.style.transform=`translate3d(${point.x}px,${point.y}px,0)`;});
                this.trail.style.opacity="1";clearTimeout(this.trailTimer);
                this.trailTimer=setTimeout(()=>{this.trail.style.opacity="0";this.trailTimer=0;},160);
            }
            if (s.restlessDepth && s.restlessLive && s.restlessQuality!=="still") {
                const x = (p.x / Math.max(1,innerWidth) - .5) * 12, y = (p.y / Math.max(1,innerHeight) - .5) * 9;
                this.depth.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
            }
            if (!rect?.width || !rect.height) { this.light.style.opacity = "0"; return; }
            this.surface = surface; this.radius = radius;
            Object.assign(this.light.style,{width:`${rect.width}px`,height:`${rect.height}px`,borderRadius:radius,transform:`translate3d(${rect.left}px,${rect.top}px,0)`,opacity:"1"});
            this.spot.style.transform = `translate3d(${p.x-rect.left-160}px,${p.y-rect.top-160}px,0)`;
        });
    }
    clearMagnet(ease = false) {
        if(!this.magneticNode)return;
        if(ease) this.animate(this.magneticNode,[{translate:`${this.magneticNode.style.getPropertyValue("--sr-mx")} ${this.magneticNode.style.getPropertyValue("--sr-my")}`},{translate:"0px 0px"}],{duration:150});
        this.magneticNode.removeAttribute("data-sr-magnetic");
        for(const name of ["--sr-mx","--sr-my"])this.magneticNode.style.removeProperty(name);
        this.magneticNode=null;
    }
    magnet(point) {
        const button=point?.target instanceof Element ? point.target.closest('button,[role="button"]') : null;
        const rect=button?.getBoundingClientRect();
        const icon=rect && rect.width<=90 && rect.height<=90 && !button.matches(':disabled,[aria-disabled="true"]') ? button.querySelector("svg") : null;
        if(this.magneticNode!==icon)this.clearMagnet(true);
        if(!icon)return;
        this.magneticNode=icon;
        if(!icon.hasAttribute("data-sr-magnetic"))icon.setAttribute("data-sr-magnetic","");
        const energy=this.plugin.settings.restlessEnergy/100;
        icon.style.setProperty("--sr-mx",`${((point.x-rect.left-rect.width/2)/Math.max(1,rect.width)*5*energy).toFixed(2)}px`);
        icon.style.setProperty("--sr-my",`${((point.y-rect.top-rect.height/2)/Math.max(1,rect.height)*5*energy).toFixed(2)}px`);
    }
    clearWriting() {
        clearTimeout(this.writingTimer);this.writingTimer=0;
        this.writing.classList.remove("sr-writing-visible");
    }
    typed(event) {
        if(!this.active() || !this.plugin.settings.restlessWriting || !(event.target instanceof Element))return;
        const field=event.target.closest('[contenteditable="true"],textarea');
        if(!field || !this.plugin.composer?.contains(field))return;
        const rect=field.getBoundingClientRect();
        if(rect.bottom<0 || rect.top>innerHeight)return;
        this.writing.style.transform=`translate3d(${Math.max(4,Math.min(innerWidth-40,rect.right-32))}px,${Math.max(4,rect.top-10)}px,0)`;
        this.writing.classList.add("sr-writing-visible");clearTimeout(this.writingTimer);
        this.writingTimer=setTimeout(()=>this.clearWriting(),850);
    }
    clearScroll() {
        cancelAnimationFrame(this.scrollFrame);this.scrollFrame=0;
        clearTimeout(this.glintTimer);this.glintTimer=0;this.glint.style.opacity="0";
    }
    scroll(event) {
        this.clearPointer();
        const reader=this.plugin.reader,scroller=reader?.scroller;
        if(!this.active() || !this.plugin.settings.restlessScrollGlint || event.target!==scroller || this.scrollFrame)return;
        if(reader.busy){this.clearScroll();return;}
        this.scrollFrame=requestAnimationFrame(()=>{
            this.scrollFrame=0;
            if(!this.active() || !scroller?.isConnected)return;
            const rect=this.plugin.messages?.getBoundingClientRect();
            const range=scroller.scrollHeight-scroller.clientHeight;
            if(!rect || range<=0)return;
            const visibleBottom=rect.bottom-(reader.expanded?0:(reader.gap||0)*(reader.zoom||1));
            const top=Math.max(8,rect.top),bottom=Math.min(innerHeight-8,visibleBottom),progress=Math.max(0,Math.min(1,scroller.scrollTop/range));
            this.glint.style.transform=`translate3d(${rect.right-3}px,${top+Math.max(0,bottom-top-44)*progress}px,0)`;
            this.glint.style.opacity="1";clearTimeout(this.glintTimer);
            this.glintTimer=setTimeout(()=>{this.glint.style.opacity="0";this.glintTimer=0;},550);
        });
    }
    channelChanged() {
        const path=location.pathname;
        if(path===this.lastPath)return;
        this.lastPath=path;this.clearPointer();this.clearWriting();this.clearScroll();
        if(!this.active() || !this.plugin.settings.restlessCrossings || !this.plugin.messages || this.transients.size>=2)return;
        const rect=this.plugin.messages.getBoundingClientRect();
        if(!rect.width || !rect.height)return;
        const clip=document.createElement("div");clip.className="sr-crossing-clip";
        Object.assign(clip.style,{left:`${rect.left}px`,top:`${rect.top}px`,width:`${rect.width}px`,height:`${rect.height}px`,borderRadius:getComputedStyle(this.plugin.messages).borderRadius});
        const beam=document.createElement("div");beam.className="sr-crossing-beam";clip.append(beam);this.effects.append(clip);this.transients.add(clip);
        this.animate(beam,[{transform:"translateX(-110%)",opacity:0},{opacity:.65,offset:.2},{transform:"translateX(360%)",opacity:0}],{duration:650},()=>{clip.remove();this.transients.delete(clip);});
    }
    animate(node, frames, options, cleanup) {
        const budget = this.plugin.settings.restlessQuality === "layered" ? 24 : 10;
        if (!this.active() || !node?.isConnected || !node.animate || this.animations.size >= budget) { cleanup?.(); return; }
        const animation = node.animate(frames,{duration:this.duration,easing:"cubic-bezier(.2,.75,.25,1)",...options});
        this.animations.add(animation);
        const done = () => { this.animations.delete(animation); cleanup?.(); };
        animation.finished.then(done,done);
        return animation;
    }
    enter(node) {
        if (this.plugin.settings.restlessEntrances) this.animate(node,[{opacity:.4,translate:"0 6px"},{opacity:1,translate:"0 0"}]);
    }
    messagesAdded(rows) {
        if (!this.active() || !this.plugin.settings.restlessMessages) return;
        const scroller = this.plugin.reader?.scroller;
        if (scroller && scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight > 150) return;
        for (const [i,row] of rows.slice(-6).entries()) {
            const rect = row.getBoundingClientRect(); if (rect.bottom < 0 || rect.top > innerHeight) continue;
            const contents = row.querySelector(':scope > [class*="contents_"]');
            this.animate(contents,[{opacity:.3,translate:"0 4px"},{opacity:1,translate:"0 0"}],{delay:i*22});
        }
    }
    press(event) {
        if (!this.active() || !this.plugin.settings.restlessRipples || event.button !== 0 || this.ripples.size >= 4) return;
        const button = event.target instanceof Element && event.target.closest('button, [role="button"], [role="tab"]');
        if (!button || button.matches(':disabled,[aria-disabled="true"]') || button.closest('dialog') || button.closest('[contenteditable="true"]')) return;
        const rect = button.getBoundingClientRect();
        if (!rect.width || rect.width > 400 || rect.height > 120) return;
        const clip = document.createElement("span"); clip.className = "sr-ripple-clip";
        Object.assign(clip.style,{left:`${rect.left}px`,top:`${rect.top}px`,width:`${rect.width}px`,height:`${rect.height}px`,borderRadius:getComputedStyle(button).borderRadius});
        const ring = document.createElement("span"); ring.className = "sr-ripple";
        const size = Math.min(180,Math.max(rect.width,rect.height)*1.5);
        Object.assign(ring.style,{left:`${event.clientX-rect.left-size/2}px`,top:`${event.clientY-rect.top-size/2}px`,width:`${size}px`,height:`${size}px`});
        clip.append(ring); this.effects.append(clip); this.ripples.add(clip);
        this.animate(ring,[{opacity:.4,transform:"scale(.15)"},{opacity:0,transform:"scale(1)"}],{duration:420},()=>{clip.remove();this.ripples.delete(clip);});
    }
    destroy() {
        this.alive = false; this.clearPointer();
        this.clearWriting();this.clearScroll();
        this.rootObserver.disconnect();
        for (const remove of this.listeners) remove(); this.listeners=[];
        for (const animation of [...this.animations]) animation.cancel(); this.animations.clear();
        for (const ripple of this.ripples) ripple.remove(); this.ripples.clear();
        for (const node of this.transients)node.remove();this.transients.clear();
        this.backdrop.remove(); this.effects.remove();
        const root = document.documentElement;
        root.classList.remove("still-restless","sr-live","sr-efficient","sr-still","sr-paused","sr-system-motion");
        for (const [key] of STILL_RESTLESS_FEATURES) root.classList.remove(`sr-${key.slice(8).toLowerCase()}`);
        this.plugin.api.DOM.removeStyle("stillcord-restless-config");
        this.plugin.styleCache?.delete("stillcord-restless-config");
    }
}

// Only the ZIP code is sent to geocoding; forecasts receive city coordinates.
// A failed lookup never replaces a working location.
function stillLocation(value) {
    if (!value || !/^\d{5}$/.test(value.zip) || !Number.isFinite(value.latitude) || !Number.isFinite(value.longitude)
        || Math.abs(value.latitude) > 90 || Math.abs(value.longitude) > 180 || typeof value.name !== 'string'
        || typeof value.timezone !== 'string') return null;
    try { new Intl.DateTimeFormat('en', {timeZone:value.timezone}).format(); } catch { return null; }
    return {zip:value.zip, name:value.name.slice(0,80), region:String(value.region || '').slice(0,80),
        latitude:value.latitude, longitude:value.longitude, timezone:value.timezone};
}

async function stillResolveZip(api, zip, signal) {
    zip = String(zip).trim();
    if (!/^\d{5}$/.test(zip)) throw new Error('Enter a five-digit US ZIP code.');
    const response = await api.Net.fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${zip}&countryCode=US&count=10&language=en&format=json`,
        {method:'GET',timeout:12000,signal,redirect:'error'});
    if (!response.ok) throw new Error('Location lookup is unavailable. Try again shortly.');
    const data = await response.json();
    const place = data.results?.find(p => p.country_code === 'US' && p.postcodes?.includes(zip));
    const location = place && stillLocation({zip,name:place.name,region:place.admin1,latitude:place.latitude,longitude:place.longitude,timezone:place.timezone});
    if (!location) throw new Error('No location found for that ZIP code. Check it and try again.');
    return location;
}

function stillForecastUrl(location) {
    const params = new URLSearchParams({latitude:String(location.latitude),longitude:String(location.longitude),
        current:'temperature_2m,apparent_temperature,is_day,weather_code',daily:'temperature_2m_max,temperature_2m_min',
        temperature_unit:'celsius',timezone:location.timezone,forecast_days:'1'});
    return `https://api.open-meteo.com/v1/forecast?${params}`;
}

let stillSettingsId = 0;
function stillSettingsPanel(plugin) {
    const id = `stillcord-settings-${++stillSettingsId}`;
    const el = (tag, cls, text) => {const node=document.createElement(tag); if(cls)node.className=cls; if(text!==undefined)node.textContent=text; return node;};
    const root=el('section','stillcord-settings'); root.setAttribute('aria-label','StillCord settings');
    const header=el('header','sc-settings-header'), mark=el('span','sc-mark','S'); mark.setAttribute('aria-hidden','true');
    const brand=el('div');brand.append(el('div','sc-eyebrow','YOUR DISCORD, QUIETLY REFINED'),el('h2','','StillCord'));
    header.append(mark,brand,el('span','sc-version','3.3'));root.append(header);
    root.append(el('p','sc-settings-intro','A little less noise. A little more you.'));
    const tabs=el('div','sc-tabs');tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','Settings category');root.append(tabs);
    const panels=new Map(),buttons=[];
    const activate=(key,focus=false)=>{for(const [name,panel] of panels){const active=name===key;panel.hidden=!active;const button=buttons.find(b=>b.dataset.page===name);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;if(active&&focus)button.focus();}};
    for(const [key,title] of [['appearance','Appearance'],['layout','Layout'],['widgets','Widgets & location'],['motion','Motion'],['restless','Restless']]){
        const button=el('button','sc-tab',title);button.type='button';button.dataset.page=key;button.id=`${id}-${key}-tab`;button.setAttribute('role','tab');button.setAttribute('aria-controls',`${id}-${key}`);
        button.addEventListener('click',()=>activate(key));buttons.push(button);tabs.append(button);
        const panel=el('div','sc-tab-panel');panel.id=`${id}-${key}`;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',button.id);panels.set(key,panel);root.append(panel);
    }
    tabs.addEventListener('keydown',event=>{const index=buttons.indexOf(document.activeElement);if(index<0)return;let next=index;
        if(event.key==='ArrowRight')next=(index+1)%buttons.length;else if(event.key==='ArrowLeft')next=(index+buttons.length-1)%buttons.length;
        else if(event.key==='Home')next=0;else if(event.key==='End')next=buttons.length-1;else return;
        event.preventDefault();activate(buttons[next].dataset.page,true);});
    const card=(page,title,note)=>{const card=el('section','sc-card');card.append(el('h3','',title));if(note)card.append(el('p','sc-card-note',note));panels.get(page).append(card);return card;};
    const row=(target,key,title,note,control)=>{const wrapper=el('div','sc-setting');const label=el('label','sc-setting-copy');label.htmlFor=`${id}-${key}`;
        label.append(el('span','sc-setting-name',title));if(note){const detail=el('span','sc-setting-note',note);detail.id=`${id}-${key}-hint`;label.append(detail);control.setAttribute('aria-describedby',detail.id);}
        control.id=`${id}-${key}`;control.setAttribute('aria-label',title);wrapper.append(label,control);target.append(wrapper);return control;};
    const toggle=(target,key,title,note)=>{const input=el('input','sc-switch');input.type='checkbox';input.setAttribute('role','switch');input.checked=plugin.settings[key];input.addEventListener('change',()=>plugin.update(key,input.checked));return row(target,key,title,note,input);};
    const select=(target,key,title,note,choices)=>{const input=el('select','sc-select');for(const [value,label] of choices){const opt=el('option','',label);opt.value=value;input.append(opt);}input.value=plugin.settings[key];input.addEventListener('change',()=>plugin.update(key,input.value));return row(target,key,title,note,input);};
    const appearance=card('appearance','The canvas','Soft light, clean edges, room to breathe.');
    select(appearance,'palette','Finish','Choose the tone of your space.',[['oled','OLED black'],['graphite','Graphite'],['light','Soft light']]);
    select(appearance,'backgroundStyle','Artwork','Built in, static, and lightweight.',[['satin','Satin curves'],['stars','Quiet stars']]);
    select(appearance,'starIntensity','Brightness','How much of the artwork comes through.',[['subtle','Subtle'],['balanced','Balanced'],['bright','Brighter']]);
    toggle(appearance,'starfield','Show artwork','Switch off for a plain canvas.');
    const identity=card('appearance','Identity');
    toggle(identity,'monochrome','Monochrome','Neutral names and avatars. Role colors stay in the small accents.');
    const accent=el('input','sc-color');accent.type='color';accent.value=plugin.settings.accent;accent.addEventListener('change',()=>plugin.update('accent',accent.value));row(identity,'accent','Accent color','Visible when Monochrome is off.',accent);
    const layout=card('layout','Make room');
    for(const item of [
        ['customLayout','Floating layout','Chat, navigation, and widgets in their own space.'],
        ['movableBrowse','Move Browse','Drag its handle. Double-click to return it home.'],
        ['focusView','Focus view','Tuck away the member and profile sidebars.'],
        ['activityEditor','Activity editor','Set a custom Playing or Listening activity from Browse.']
    ])toggle(layout,...item);
    const quiet=card('layout','Keep it simple');
    toggle(quiet,'quietNavigation','Quiet navigation','Hide the Nitro and Shop shortcuts.');
    toggle(quiet,'hideActivity','Quiet Friends screen','Hide the extra activity column on Friends.');
    const location=card('widgets','Your place','One ZIP code for the forecast and the clock.');
    const locationForm=el('form','sc-location-form'),zip=el('input','sc-zip');zip.type='text';zip.inputMode='numeric';zip.autocomplete='postal-code';zip.maxLength=5;zip.pattern='[0-9]{5}';zip.required=true;zip.placeholder='US ZIP code';zip.value=plugin.location?.zip||'';zip.id=`${id}-zip`;
    const zipLabel=el('label','sc-location-label','ZIP code');zipLabel.htmlFor=zip.id;
    const save=el('button','sc-primary','Update location');save.type='submit';
    const fields=el('div','sc-location-fields');fields.append(zip,save);locationForm.append(zipLabel,fields);location.append(locationForm);
    const status=el('p','sc-location-status',plugin.location?`${plugin.location.name}, ${plugin.location.region} · ${plugin.location.timezone.replaceAll('_',' ')}`:'Choose a ZIP to enable weather. The clock uses your device time until then.');
    status.setAttribute('role','status');status.setAttribute('aria-live','polite');location.append(status);
    locationForm.addEventListener('submit',async event=>{event.preventDefault();if(!locationForm.reportValidity())return;save.disabled=true;zip.disabled=true;status.textContent='Finding your location…';status.removeAttribute('data-error');
        try{const place=await plugin.setLocation(zip.value);if(!root.isConnected)return;status.textContent=`${place.name}, ${place.region} · ${place.timezone.replaceAll('_',' ')}`;}
        catch(error){if(root.isConnected){status.textContent=error.name==='AbortError'?'Lookup cancelled.':error.message;status.setAttribute('data-error','true');}}
        finally{save.disabled=false;zip.disabled=false;}});
    toggle(location,'zipTime','Match the clock to your ZIP','Turn off to use your device time zone.');
    const privacy=el('p','sc-privacy','Location lookup uses Open-Meteo / GeoNames. Only your ZIP and city coordinates are sent; Discord data stays in Discord.');location.append(privacy);
    const widgets=card('widgets','At a glance');
    for(const item of [
        ['widgets','Widget dock','Show or hide the entire dock.'],['clockWidget','Clock','Time and date, updated once a minute.'],
        ['clock24','24-hour time','Use 18:30 instead of 6:30 PM.'],['weatherWidget','Weather','Refreshes at most every 15 minutes.'],
        ['fahrenheit','Fahrenheit','Turn off for Celsius.'],['mediaWidget','Windows media','Requires the optional local Windows adapter.'],
        ['notificationsWidget','Discord inbox','Mentions and unread DMs, available locally.']
    ])toggle(widgets,...item);
    const motion=card('motion','Smooth, with restraint','Short movements. No idle animation loop.');
    for(const item of [
        ['readingMode','Reading mode','The input slides away while you read older messages.'],
        ['smoothWheel','Smooth scrolling','Ease mouse-wheel ticks into a short, controlled glide.'],
        ['mouseWheelMode','Mouse-wheel input','Switch off for a trackpad with its own momentum.'],
        ['respectReaderMotion','Follow reduced motion','Use your system preference for scrolling and reading mode.'],
        ['microMotion','Small animations','Subtle popouts and button feedback.'],['reduceMotion','Trim Discord motion','Reduce long native transitions.']
    ])toggle(motion,...item);
    const performance=card('motion','Light on your desktop');
    toggle(performance,'efficientGlass','Lightweight glass','Static gloss on permanent panels.');
    toggle(performance,'reduceEffects','Low power finish','Remove extra shadows and blur.');
    toggle(performance,'pauseDecorations','Quiet decorations','Hide decorative profile effects.');
    const restless=card('restless','Restless','Six live worlds. Twenty-five ways to make them yours.');
    restless.classList.add('sc-restless-hero');
    const art=el('div','sc-restless-art');art.setAttribute('aria-hidden','true');
    art.innerHTML=stillWallpaper('eclipse',0)+stillWallpaper('eclipse',1);restless.prepend(art,el('span','sc-eyebrow','THE EXPANDED COLLECTION'));
    toggle(restless,'restless','Enable Restless','Coordinated motion throughout Discord. Switch off to return to your usual finish.');
    const presets=el('div','sc-presets');presets.setAttribute('aria-label','Restless presets');
    const count=el('p','sc-effect-count');
    const refreshRestless=()=>{
        root.style.setProperty('--sr-tint',plugin.settings.restlessTint);root.style.setProperty('--sr-secondary',plugin.settings.restlessSecondary);
        count.textContent=`${STILL_RESTLESS_FEATURES.filter(([key])=>plugin.settings[key]).length} / 25 effects enabled`;
        for(const control of panels.get('restless').querySelectorAll('[id]')) {
            const key=control.id.slice(id.length+1);if(!Object.hasOwn(plugin.settings,key))continue;
            if(control.type==='checkbox')control.checked=plugin.settings[key];else if('value' in control){control.value=plugin.settings[key];if(control.type==='range')control.setAttribute('aria-valuetext',`${control.value}%`);}
        }
        for(const button of presets.children){const next=stillRestlessPreset(plugin.settings,button.dataset.preset);button.setAttribute('aria-pressed',String(plugin.settings.restless&&next.restlessQuality===plugin.settings.restlessQuality&&next.restlessEnergy===plugin.settings.restlessEnergy&&next.restlessTempo===plugin.settings.restlessTempo&&STILL_RESTLESS_FEATURES.every(([key])=>next[key]===plugin.settings[key])));}
    };
    for(const [value,title,note] of [['subtle','Subtle','Low power'],['expressive','Expressive','Light & depth'],['allout','All out','The full collection']]){
        const button=el('button','sc-preset');button.type='button';button.dataset.preset=value;button.append(el('strong','',title),el('span','',note));
        button.addEventListener('click',()=>{plugin.setRestlessPreset(value);refreshRestless();});presets.append(button);
    }
    restless.append(presets,count);
    const canvas=card('restless','Live canvas','Original moving artwork. Quiet by default, yours to customize.');
    toggle(canvas,'restlessLive','Scene background','Original artwork behind your conversations.');
    select(canvas,'restlessQuality','Rendering','Efficient keeps every detail with shared motion. Still artwork uses no background animation.',[['efficient','Efficient (recommended)'],['layered','Full depth'],['still','Still artwork']]);
    const scenes=el('fieldset','sc-scenes'),legend=el('legend','sc-setting-name','Scene');scenes.append(legend);
    for(const [value,title,note] of STILL_SCENES){
        const label=el('label','sc-scene'),input=el('input');input.type='radio';input.name=`${id}-scene`;input.value=value;input.checked=plugin.settings.restlessScene===value;
        input.setAttribute('aria-label',title);input.addEventListener('change',()=>{if(input.checked)plugin.update('restlessScene',value);});
        const swatch=el('span','sc-scene-art');swatch.setAttribute('aria-hidden','true');swatch.innerHTML=[0,1,2].map(layer=>stillWallpaper(value,layer)).join('');
        label.append(input,swatch,el('span','sc-scene-title',title),el('span','sc-setting-note',note));scenes.append(label);
    }
    canvas.append(scenes);
    const tint=el('input','sc-color');tint.type='color';tint.value=plugin.settings.restlessTint;tint.addEventListener('change',()=>plugin.update('restlessTint',tint.value));row(canvas,'restlessTint','Light color','Silver, or a color of your own.',tint);
    const secondary=el('input','sc-color');secondary.type='color';secondary.value=plugin.settings.restlessSecondary;secondary.addEventListener('change',()=>plugin.update('restlessSecondary',secondary.value));row(canvas,'restlessSecondary','Reflection color','A second tone inside the glass and artwork.',secondary);
    const strength=el('input','sc-range');strength.type='range';strength.min='15';strength.max='85';strength.step='1';strength.value=plugin.settings.restlessStrength;
    strength.setAttribute('aria-valuetext',`${strength.value}%`);strength.addEventListener('input',()=>strength.setAttribute('aria-valuetext',`${strength.value}%`));strength.addEventListener('change',()=>plugin.update('restlessStrength',Number(strength.value)));
    row(canvas,'restlessStrength','Light intensity','Keep it subtle, or bring the artwork forward.',strength);
    const energy=el('input','sc-range');energy.type='range';energy.min='20';energy.max='100';energy.step='1';energy.value=plugin.settings.restlessEnergy;
    energy.setAttribute('aria-valuetext',`${energy.value}%`);energy.addEventListener('input',()=>energy.setAttribute('aria-valuetext',`${energy.value}%`));energy.addEventListener('change',()=>plugin.update('restlessEnergy',Number(energy.value)));
    row(canvas,'restlessEnergy','Extra light intensity','Constellations, reflections, and pointer lights.',energy);
    select(canvas,'restlessTempo','Pace','Background drift and panel arrivals.',[['calm','Calm'],['balanced','Balanced'],['vivid','Lively']]);
    toggle(canvas,'restlessRespectMotion','Follow system reduced motion','Keep Restless still when your device requests less animation. Turn off to control motion here.');
    const effects=card('restless','The collection','25 details, individually yours. Open a group to fine-tune it.');
    for(const [title,keys] of STILL_RESTLESS_GROUPS){
        const group=el('details','sc-effect-group'),summary=el('summary');summary.append(el('span','',title),el('span','sc-group-count',`${keys.length} effects`));group.append(summary);
        for(const key of keys){const index=STILL_RESTLESS_FEATURES.findIndex(([name])=>name==='restless'+key);const control=toggle(group,...STILL_RESTLESS_FEATURES[index]);control.parentElement.dataset.effect=String(index+1).padStart(2,'0');}
        effects.append(group);
    }
    effects.classList.add('sc-restless-features');
    panels.get('restless').addEventListener('change',refreshRestless);refreshRestless();
    panels.get('restless').append(el('p','sc-privacy','Restless pauses when Discord is hidden, unfocused, or a video is full screen. Subtle keeps the artwork still and adds light interaction feedback. System reduced motion is followed by default.'));
    const footer=el('footer','sc-settings-footer');footer.append(el('span','','Changes save automatically.'));
    const reset=el('button','sc-text-button','Reset preferences');reset.type='button';let armed=false;
    reset.addEventListener('click',()=>{if(!armed){armed=true;reset.textContent='Confirm reset';return;}plugin.settings={...DEFAULTS};plugin.api.Data.save('settings',plugin.settings);plugin.apply();root.replaceWith(stillSettingsPanel(plugin));});footer.append(reset);root.append(footer);
    activate('appearance');return root;
}



const DEFAULTS = Object.freeze({
    palette: "oled",
    accent: "#b9d8f4",
    monochrome: true,
    starfield: true,
    backgroundStyle: "satin",
    starIntensity: "subtle",
    reduceMotion: true,
    microMotion: true,
    restless: false,
    restlessLive: true,
    restlessScene: "silk",
    restlessTint: "#d3d9e4",
    restlessSecondary: "#89939f",
    restlessEnergy: 65,
    restlessStrength: 45,
    restlessTempo: "balanced",
    restlessQuality: "efficient",
    restlessRespectMotion: true,
    ...Object.fromEntries(STILL_RESTLESS_FEATURES.map(([key]) => [key, true])),
    readingMode: true,
    smoothWheel: true,
    mouseWheelMode: true,
    respectReaderMotion: true,
    efficientGlass: true,
    reduceEffects: false,
    pauseDecorations: true,
    quietNavigation: true,
    hideActivity: true,
    customLayout: true,
    focusView: true,
    pinNavigation: false,
    movableBrowse: true,
    activityEditor: true,
    widgets: true,
    clockWidget: true,
    weatherWidget: true,
    mediaWidget: true,
    notificationsWidget: true,
    fahrenheit: true,
    clock24: false,
    zipTime: true
});

const PALETTES = Object.freeze({
    graphite: {base: "#15171c", inset: "#101216", rail: "#0d0f13", surface: "#1c1f26", raised: "#242832", hover: "#272c36", text: "#e6e9ef", muted: "#a1a9b8", faint: "#7d8798", border: "#2c313c"},
    oled: {base: "#000000", inset: "#000000", rail: "#000000", surface: "#070a0e", raised: "#0b1016", hover: "#111923", text: "#dde5ee", muted: "#939eae", faint: "#798596", border: "#1b2531"},
    light: {base: "#f6f7f9", inset: "#eceef2", rail: "#e5e8ee", surface: "#ffffff", raised: "#f0f2f6", hover: "#e3e7ee", text: "#202735", muted: "#545f73", faint: "#667085", border: "#cdd3de"}
});

const STAR_VEILS = Object.freeze({subtle: "rgb(0 0 0 / 52%)", balanced: "rgb(0 0 0 / 18%)", bright: "rgb(0 0 0 / 0%)"});

const NEUTRAL_PALETTES = Object.freeze({
    oled: {base: "#000000", inset: "#000000", rail: "#000000", surface: "#0b0b0b", raised: "#141414", hover: "#202020", text: "#e6e6e6", muted: "#ababab", faint: "#858585", border: "#292929"},
    graphite: {base: "#171717", inset: "#121212", rail: "#0e0e0e", surface: "#202020", raised: "#282828", hover: "#303030", text: "#e6e6e6", muted: "#ababab", faint: "#898989", border: "#353535"},
    light: {base: "#f6f6f6", inset: "#ededed", rail: "#e6e6e6", surface: "#ffffff", raised: "#f0f0f0", hover: "#e4e4e4", text: "#252525", muted: "#595959", faint: "#707070", border: "#d1d1d1"}
});

const UI_MOTION = `
    [role="menu"], [role="menu"] [role^="menuitem"],
    [role="dialog"], [class*="layer_"], [class*="tooltip_"],
    [class*="sidebarList_"] [class*="link_"],
    [class*="privateChannels_"] [class*="interactive_"],
    [class*="members_"] [class*="member_"],
    [class*="button_"], [class*="item_"][role="tab"],
    [class*="userProfileOuter_"], .user-profile-popout, .user-profile-modal,
    .user-profile-modal-v2, .user-profile-sidebar, [class*="messagesPopoutWrap_"],
    [class*="quickswitcher_"], [class*="emojiPicker_"]
`;
const DECORATIONS = `[class*="avatarDecoration_"], [class*="profileEffect_"], [class*="premiumIcon_"], [class*="premiumButton_"]`;
const FLOATING_SURFACES = `[role="menu"], [role="dialog"], .user-profile-popout,
    [class*="messagesPopoutWrap_"], [class*="quickswitcher_"],
    [class*="emojiPicker_"], [class*="stickerPicker_"], [class*="gifPicker_"]`;
const PRESS_CONTROLS = `#stillspeed-air-controls button, .still-settings button,
    [data-still-sidebar] [class*="link_"], [role="menu"] [role^="menuitem"]`;

function normalizedSettings(saved) {
    const next = {...DEFAULTS};
    if (!saved || typeof saved !== "object") return next;
    if (Object.hasOwn(PALETTES, saved.palette)) next.palette = saved.palette;
    if (Object.hasOwn(STAR_VEILS, saved.starIntensity)) next.starIntensity = saved.starIntensity;
    if (["satin", "stars"].includes(saved.backgroundStyle)) next.backgroundStyle = saved.backgroundStyle;
    if (typeof saved.accent === "string" && /^#[0-9a-f]{6}$/i.test(saved.accent)) next.accent = saved.accent;
    if (STILL_SCENES.some(([key])=>key===saved.restlessScene)) next.restlessScene = saved.restlessScene;
    if (["calm", "balanced", "vivid"].includes(saved.restlessTempo)) next.restlessTempo = saved.restlessTempo;
    if (["efficient", "layered", "still"].includes(saved.restlessQuality)) next.restlessQuality = saved.restlessQuality;
    if (typeof saved.restlessTint === "string" && /^#[0-9a-f]{6}$/i.test(saved.restlessTint)) next.restlessTint = saved.restlessTint;
    if (typeof saved.restlessSecondary === "string" && /^#[0-9a-f]{6}$/i.test(saved.restlessSecondary)) next.restlessSecondary = saved.restlessSecondary;
    if (Number.isFinite(saved.restlessStrength)) next.restlessStrength = Math.round(Math.max(15, Math.min(85, saved.restlessStrength)));
    if (Number.isFinite(saved.restlessEnergy)) next.restlessEnergy = Math.round(Math.max(20, Math.min(100, saved.restlessEnergy)));
    for (const key of Object.keys(DEFAULTS)) {
        if (typeof DEFAULTS[key] === "boolean" && typeof saved[key] === "boolean") next[key] = saved[key];
    }
    return next;
}

function foregroundFor(hex) {
    const rgb = hex.match(/[0-9a-f]{2}/gi).map(v => parseInt(v, 16) / 255)
        .map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
    const luminance = .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
    return luminance > .179 ? "#000000" : "#ffffff";
}

function stillAttribute(node, name, value) {
    const text = String(value);
    if (node.getAttribute(name) !== text) node.setAttribute(name, text);
}

class StillCord {
    constructor(api) { this.api = api; }

    start() {
        if (this.running) return;
        this.api.prepare?.();
        this.location = stillLocation(this.api.Data.load("location"));
        this.styleCache = new Map();
        this.settings = normalizedSettings(this.api.Data.load("settings"));
        this.activity = new StillActivity(this);
        this.navigationOpen = this.api.Data.load("browseOpen") !== false;
        this.channelControlsVisible = this.api.Data.load("channelControlsVisible") !== false;
        this.auxiliary = this.channelControlsVisible ? "tools" : "none";
        this.onVisibility = () => {
            document.documentElement.classList.toggle("still-background", document.hidden);
            this.workspace?.visibilityChanged();
            this.workspace?.scheduleCaption();
            this.reader?.visibilityChanged();
            this.messageGroups?.schedule();
            this.browser?.sync();
            this.restless?.visibilityChanged();
        };
        this.running = true;
        try {
            document.addEventListener("visibilitychange", this.onVisibility);
            this.setStyle("stillcord-theme", STILL_THEME);
            this.onVisibility();
            this.apply();
        } catch (error) {
            this.stop();
            throw error;
        }
    }

    stop() {
        this.running = false;
        this.locationAbort?.abort(); this.locationAbort = null;
        this.closeSettings?.();
        this.restless?.destroy(); this.restless = null;
        this.unmountLayout();
        this.activity?.destroy();
        this.activity = null;
        if (this.onVisibility) document.removeEventListener("visibilitychange", this.onVisibility);
        this.onVisibility = null;
        document.documentElement.classList.remove("still-background", "still-color");
        this.api?.DOM.removeStyle("stillcord-theme");
        this.api?.DOM.removeStyle("stillspeed-appearance");
        this.api?.DOM.removeStyle("stillspeed-performance");
        this.styleCache?.clear();
    }

    setStyle(id, css) {
        // Focus/navigation updates should not replace global style sheets.
        // Reinsert if the style was removed externally, even if text matches.
        if (this.styleCache.get(id) === css && document.getElementById(id)) return;
        this.api.DOM.addStyle(id, css);
        this.styleCache.set(id, css);
    }

    apply() {
        if (!this.running) return;
        const s = this.settings;
        document.documentElement.classList.toggle("still-color", !s.monochrome);
        const palette = (s.monochrome ? NEUTRAL_PALETTES : PALETTES)[s.palette];
        const accent = s.monochrome ? (s.palette === "light" ? "#444444" : "#d9d9d9")
            : s.palette === "light" && s.accent === DEFAULTS.accent ? "#365fb0" : s.accent;
        const wallpaper = s.starfield && s.palette !== "light"
            ? `linear-gradient(var(--still-star-veil), var(--still-star-veil)), var(--still-${s.backgroundStyle === "stars" ? "star" : "ambient"}-map, none)`
            : "none";
        const vars = Object.entries(palette).map(([k, v]) => `--still-${k}: ${v} !important;`).join("\n");
        const isLight = s.palette === "light";
        const glassFill = isLight ? "rgb(255 255 255 / 86%)" : s.monochrome ? "rgb(17 17 17 / 82%)" : "rgb(14 17 23 / 82%)";
        const glassTint = s.monochrome ? (isLight ? "rgb(240 240 240 / 80%)" : "rgb(27 27 27 / 64%)")
            : isLight ? "rgb(235 241 249 / 80%)" : "rgb(20 25 34 / 64%)";
        this.setStyle("stillspeed-appearance", `
            :root, .theme-dark, .theme-light, .theme-darker, .theme-midnight {
                ${vars}
                --still-accent: ${accent} !important;
                --still-accent-text: ${foregroundFor(accent)} !important;
                --still-accent-soft: color-mix(in srgb, ${accent} 8%, ${palette.base}) !important;
                --still-star-veil: ${s.backgroundStyle === "stars" ? STAR_VEILS[s.starIntensity] : {subtle:"rgb(0 0 0 / 10%)", balanced:"rgb(0 0 0 / 0%)", bright:"rgb(255 255 255 / 3%)"}[s.starIntensity]} !important;
                --still-wallpaper: ${wallpaper} !important;
                --still-wallpaper-size: ${s.backgroundStyle === "stars" ? "1440px 960px" : "cover"} !important;
                --still-wallpaper-repeat: ${s.backgroundStyle === "stars" ? "repeat" : "no-repeat"} !important;
                --still-glass-fill: ${glassFill} !important;
                --still-glass-tint: ${glassTint} !important;
                --still-glass-filter: ${s.reduceEffects ? "none" : s.efficientGlass ? "blur(8px)" : "blur(12px) saturate(135%)"} !important;
                --still-glass-shadow: ${s.reduceEffects ? "none" : s.efficientGlass ? "inset 0 1px 0 rgb(255 255 255 / 11%), inset 0 -1px 0 rgb(255 255 255 / 3%), 0 6px 18px rgb(0 0 0 / 20%)" : "inset 0 1px 0 rgb(255 255 255 / 11%), inset 0 -1px 0 rgb(255 255 255 / 3%), 0 8px 28px rgb(0 0 0 / 24%)"} !important;
                --still-glass-rim: ${isLight ? "rgb(255 255 255 / 85%)" : s.monochrome ? "rgb(245 245 245 / 19%)" : "rgb(238 247 255 / 19%)"} !important;
                --still-glass-edge: ${s.monochrome ? (isLight ? "rgb(50 50 50 / 12%)" : "rgb(245 245 245 / 6%)") : isLight ? "rgb(35 55 80 / 12%)" : "rgb(238 247 255 / 6%)"} !important;
                color-scheme: ${s.palette === "light" ? "light" : "dark"} !important;
            }
        `);

        const css = [];
        if (s.reduceMotion && !s.restless) css.push(`
            :is(${UI_MOTION}) { transition-duration: 0s !important; animation-duration: .001ms !important; animation-iteration-count: 1 !important; }
            [class*="scroller_"], [class*="scrollerBase_"] { scroll-behavior: auto !important; }
        `);
        if (s.efficientGlass) css.push(`
            /* These bars sit over static space; gloss does not need live blur. */
            #stillspeed-air-controls,
            [data-still-sidebar] > [class*="panels_"],
            [data-still-header] [class*="toolbar_"],
            [data-still-page] [class*="channelTextArea_"] [class*="scrollableContainer_"] {
                backdrop-filter: none !important; -webkit-backdrop-filter: none !important;
            }
            [data-still-sidebar] { box-shadow: var(--still-glass-shadow), 0 16px 32px rgb(0 0 0 / 32%) !important; }
            /* Do not stack glass filters inside an already-filtered popout. */
            :is(${FLOATING_SURFACES}) :is(${FLOATING_SURFACES}) {
                backdrop-filter: none !important; -webkit-backdrop-filter: none !important;
            }
        `);
        if (s.reduceEffects) css.push(`
            :is([role="menu"], [role="dialog"], [class*="userProfileOuter_"], .user-profile-popout, .user-profile-modal, .user-profile-modal-v2, .user-profile-sidebar, [class*="messagesPopoutWrap_"], [class*="panels_"], [class*="tooltip_"], [data-still-sidebar], #stillspeed-air-controls) {
                backdrop-filter: none !important; -webkit-backdrop-filter: none !important; box-shadow: none !important;
            }
            [class*="profileFrameContainer_"]::before { box-shadow: none !important; }
        `);
        if (s.pauseDecorations) css.push(`
            :is(${DECORATIONS}), :is(${DECORATIONS})::before, :is(${DECORATIONS})::after { animation-play-state: paused !important; }
            [class*="profileEffects_"] { display: none !important; }
        `);
        css.push(`
            /* Reflow only once when a drawer or panel toggles. */
            [data-still-shell], [data-still-sidebar], [data-still-page] {
                transition: none !important;
            }
        `);
        if (s.microMotion && !s.restless) css.push(`
            @keyframes stillspeed-appear { from { opacity: .78; } to { opacity: 1; } }
            @media (prefers-reduced-motion: no-preference) {
                :root :is(${FLOATING_SURFACES}) {
                    animation: stillspeed-appear 100ms ease-out 1 !important;
                }
                :is(${FLOATING_SURFACES}) :is(${FLOATING_SURFACES}) { animation: none !important; }
                :is(${PRESS_CONTROLS}) { transition: opacity 80ms ease-out !important; }
                :is(${PRESS_CONTROLS}):active { opacity: .78; }
            }
        `);
        css.push(`
            @media (prefers-reduced-motion: reduce) {
                :is(${UI_MOTION}) {
                    transition-duration: 0s !important;
                    animation-duration: .001ms !important;
                    animation-iteration-count: 1 !important;
                }
                [data-still-sidebar], :is(${PRESS_CONTROLS}) {
                    animation: none !important; transition: none !important;
                }
            }
            html.still-background :is(${FLOATING_SURFACES}, [data-still-sidebar], ${PRESS_CONTROLS}),
            html.still-background [data-still-shell][data-still-navigation] [data-still-sidebar] {
                animation: none !important; transition: none !important;
            }
        `);
        css.push(`html.still-background :is(${UI_MOTION}, ${DECORATIONS}) { animation-play-state: paused !important; }`);
        if (s.quietNavigation) css.push(`
            [class*="privateChannels_"] a:is([href="/store"], [href="/shop"]),
            [class*="privateChannels_"] li:has(a:is([href="/store"], [href="/shop"])) { display: none !important; }
        `);
        if (s.hideActivity) css.push(`[class*="nowPlayingColumn_"], [class*="nowPlayingSidebar_"] { display: none !important; }`);
        this.setStyle("stillspeed-performance", css.join("\n"));
        this.mountLayout();
        this.syncRestless();
    }

    syncRestless() {
        if (!this.settings.restless) { this.restless?.destroy(); this.restless = null; return; }
        if (!this.restless) this.restless = new StillRestless(this);
        this.restless.sync();
    }

    onSwitch() {
        if (!this.running) return;
        this.mountLayout();
        this.restless?.channelChanged();
    }

    mountLayout() {
        if (!this.settings.customLayout) { this.unmountLayout(); return; }
        const list = document.querySelector('[class*="sidebarList_"]');
        const sidebar = list?.parentElement;
        const content = sidebar?.parentElement;
        const shell = content?.parentElement;
        const page = content?.querySelector(':scope > [class*="page_"]');
        const chat = page?.querySelector('[class*="chat_"]') || null;
        const header = chat?.querySelector(':scope > [class*="title_"], :scope > [class*="subtitleContainer_"] > [class*="title_"]') || null;
        const chatContent = chat?.querySelector('[class*="chatContent_"]') || null;
        const messages = chatContent?.querySelector(':scope > [class*="messagesWrapper_"]') || null;
        const composer = chatContent?.querySelector(':scope > [class*="form_"]') || null;
        // Only mark the verified current desktop shell; unknown structures keep
        // their native layout and receive material styling alone.
        if (!shell?.matches('[class*="base_"]') || !sidebar?.matches('[class*="sidebar_"]') ||
            !sidebar.querySelector(':scope > [class*="guilds_"]') || !page) {
            this.unmountLayout();
            if (!list && !this.cancelWaiting && this.api.DOM.onAdded) {
                this.cancelWaiting = this.api.DOM.onAdded('[class*="sidebarList_"]', () => {
                    this.cancelWaiting = null;
                    if (this.running) this.mountLayout();
                });
            }
            return;
        }
        if (this.shell !== shell || this.sidebar !== sidebar || this.page !== page ||
            this.chat !== chat || this.header !== header || this.messages !== messages || this.composer !== composer || !this.controls?.isConnected || !this.workspace?.handle?.isConnected) {
            const wasOpen = this.navigationOpen;
            this.unmountLayout();
            this.shell = shell;
            this.sidebar = sidebar;
            this.page = page;
            this.list = list;
            this.chat = chat;
            this.header = header;
            this.messages = messages;
            this.composer = composer;
            this.marked = [[shell, "data-still-shell"], [sidebar, "data-still-sidebar"], [page, "data-still-page"],
                [chat, "data-still-chat"], [header, "data-still-header"],
                [messages, "data-still-messages"], [composer, "data-still-composer"]].filter(([node]) => node);
            this.previousMarks = this.marked.map(([node, name]) => [node, name, node.getAttribute(name)]);
            for (const [node, name] of this.marked) node.setAttribute(name, "");
            if (!sidebar.id) {
                this.previousMarks.push([sidebar, "id", null]);
                sidebar.id = "stillspeed-air-sidebar";
            }
            this.controls = document.createElement("nav");
            this.controls.id = "stillspeed-air-controls";
            this.controls.setAttribute("aria-label", "Still layout");
            this.controls.style.display = "none"; // Safe when the theme is off.
            const icon = (paths) => {
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                for (const [key, value] of Object.entries({viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"})) svg.setAttribute(key, value);
                for (const d of paths) { const p = document.createElementNS(svg.namespaceURI, "path"); p.setAttribute("d", d); svg.append(p); }
                return svg;
            };
            this.browse = document.createElement("button");
            this.browse.type = "button";
            this.browse.setAttribute("aria-label", "Browse servers and channels");
            this.browse.setAttribute("aria-controls", sidebar.id);
            this.browse.setAttribute("aria-keyshortcuts", "Control+Alt+B");
            this.browse.title = "Servers, channels and your controls · Ctrl+Alt+B";
            const label = document.createElement("span");
            label.dataset.stillBrowseLabel = "";
            label.textContent = "Browse";
            this.browse.append(icon(["M4 5h16v14H4z", "M10 5v14"]), label);
            this.browse.addEventListener("click", () => this.setNavigation(!this.navigationOpen, true));
            this.focus = document.createElement("button");
            this.focus.type = "button";
            this.focus.setAttribute("aria-label", "Focus view");
            this.focus.append(icon(["M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3", "M9 12h6"]));
            this.focus.addEventListener("click", () => this.update("focusView", !this.settings.focusView));
            this.controls.append(this.browse, this.focus);
            shell.append(this.controls);
            this.onLayoutKey = event => {
                if (event.key === "Escape" && this.auxiliary === "activity" && !this.hasOpenPopup()) {
                    event.preventDefault(); this.closeAuxiliary(); this.browser?.menuButton?.focus({preventScroll:true}); return;
                }
                // Ordinary typing takes this fast exit before ANY layout read.
                const shortcut = event.ctrlKey && event.altKey && !event.shiftKey && !event.metaKey && event.code === "KeyB" && !event.repeat && !event.getModifierState("AltGraph");
                if (!shortcut) return;
                if (!this.running || !this.controls?.isConnected || shell.closest('[aria-hidden="true"]')) return;
                if (shortcut) {
                    event.preventDefault();
                    this.setNavigation(!this.navigationOpen, true);
                    (this.navigationOpen ? this.workspace?.grip : this.browse)?.focus({preventScroll: true});
                }
            };
            document.addEventListener("keydown", this.onLayoutKey);
            this.workspace = new StillWorkspace(this);
            this.browser = new StillBrowse(this);
            this.reader = messages && composer ? new StillReader(this) : null;
            this.messageGroups = messages ? new StillMessageGroups(messages, () => { this.workspace?.scheduleCaption(); this.reader?.scheduleLayout(); }, () => this.reader?.sync(), rows => this.restless?.messagesAdded(rows)) : null;
            // Watch structural child lists, including Discord's live wrappers.
            // Never observe the message list, its subtree, or attributes.
            this.shellObserver = new MutationObserver(records => {
                if (!this.running) return;
                if (!this.shell?.isConnected || records.some(record => record.target !== shell.parentElement)) this.mountLayout();
            });
            const structuralNodes = new Set([shell.parentElement, content, page, chat, chatContent, chatContent?.parentElement, header?.parentElement]);
            for (let ancestor = chat?.parentElement; ancestor && ancestor !== page; ancestor = ancestor.parentElement) structuralNodes.add(ancestor);
            for (const node of structuralNodes) if (node) this.shellObserver.observe(node, {childList: true});
            this.setNavigation(wasOpen);
        }
        const focusState = this.settings.focusView ? "on" : "off";
        if (this.shell.getAttribute("data-still-focus") !== focusState) {
            this.shell.setAttribute("data-still-focus", focusState);
            this.focus.setAttribute("aria-pressed", String(this.settings.focusView));
            this.focus.title = this.settings.focusView ? "Focus on · click to reveal open member and profile panels" : "Focus off · click to hide optional side panels";
        }
        this.workspace?.sync();
        this.browser?.sync();
        this.workspace?.scheduleCaption();
        this.reader?.sync();
        this.reader?.scheduleLayout();
    }

    hasOpenPopup() {
        return [...document.querySelectorAll('[role="dialog"], [role="menu"]')]
            .some(node => node.getClientRects().length && !node.closest('[aria-hidden="true"]'));
    }

    setNavigation(open, remember = false) {
        if (!this.shell) return;
        const state = open ? "open" : "closed";
        if (this.navigationOpen === Boolean(open) && this.shell.getAttribute("data-still-navigation") === state) return;
        const restoreFocus = !open && this.sidebar.contains(document.activeElement);
        if (!open) this.browser?.closeMenu();
        this.navigationOpen = Boolean(open);
        if (remember) this.api.Data.save("browseOpen", this.navigationOpen);
        this.shell.setAttribute("data-still-navigation", state);
        this.browse?.setAttribute("aria-expanded", String(Boolean(open)));
        if (restoreFocus) this.browse?.focus({preventScroll:true});
        if (open) this.workspace?.fitBrowse();
        this.browser?.sync();
        this.workspace?.scheduleCaption();
        if (open) this.restless?.enter(this.sidebar);
    }

    setAuxiliary(mode) {
        const next = ["tools", "activity"].includes(mode) ? mode : "none";
        if (next !== "activity" && this.channelControlsVisible !== (next === "tools")) {
            this.channelControlsVisible = next === "tools";
            this.api.Data.save("channelControlsVisible", this.channelControlsVisible);
        }
        if (this.auxiliary === next) return;
        this.auxiliary = next;
        this.workspace?.sync();
        this.restless?.enter(next === "activity" ? this.workspace?.activityView?.root : next === "tools" ? this.header : null);
    }

    closeAuxiliary() {
        if (this.auxiliary !== "activity") return;
        this.auxiliary = this.channelControlsVisible ? "tools" : "none";
        this.workspace?.sync();
    }

    unmountLayout() {
        this.reader?.destroy();
        this.reader = null;
        this.browser?.destroy();
        this.browser = null;
        this.messageGroups?.destroy();
        this.messageGroups = null;
        this.workspace?.destroy();
        this.workspace = null;
        this.cancelWaiting?.();
        this.cancelWaiting = null;
        this.shellObserver?.disconnect();
        this.shellObserver = null;
        if (this.onLayoutKey) document.removeEventListener("keydown", this.onLayoutKey);
        if (this.onLayoutClick) this.shell?.removeEventListener("click", this.onLayoutClick);
        if (this.controls?.contains(document.activeElement)) document.activeElement.blur();
        this.controls?.remove();
        this.shell?.removeAttribute("data-still-navigation");
        this.shell?.removeAttribute("data-still-focus");
        for (const [node, name, value] of this.previousMarks || []) {
            if (value === null) node.removeAttribute(name); else node.setAttribute(name, value);
        }
        this.previousMarks = [];
        this.marked = [];
        this.controls = this.shell = this.sidebar = this.page = this.list = this.browse = this.focus = null;
        this.chat = this.header = this.messages = this.composer = null;
        this.onLayoutKey = this.onLayoutClick = null;
    }

    update(key, value) {
        if (!this.running || !Object.hasOwn(DEFAULTS, key)) return;
        const next = normalizedSettings({...this.settings, [key]: value});
        if (next[key] === this.settings[key]) return;
        this.settings = next;
        this.api.Data.save("settings", this.settings);
        if (key.startsWith("restless") && key !== "restless") { this.syncRestless(); return; }
        if (["customLayout", "focusView", "pinNavigation", "movableBrowse", "activityEditor", "widgets", "clockWidget", "weatherWidget", "mediaWidget", "notificationsWidget", "fahrenheit", "clock24", "zipTime"].includes(key)) this.mountLayout();
        else this.apply();
    }

    setRestlessPreset(name) {
        if(!this.running)return;
        const next=stillRestlessPreset(this.settings,name);if(!next)return;
        const wasEnabled=this.settings.restless;
        this.settings=normalizedSettings(next);this.api.Data.save("settings",this.settings);
        if(wasEnabled)this.syncRestless();else this.apply();
    }

    async setLocation(zip) {
        if (!this.running) throw new Error("Enable StillCord before updating your location.");
        this.locationAbort?.abort();
        const abort = new AbortController(); this.locationAbort = abort;
        try {
            const place = await stillResolveZip(this.api, zip, abort.signal);
            if (!this.running || abort.signal.aborted || this.locationAbort !== abort) throw new DOMException("Cancelled", "AbortError");
            this.location = place; this.api.Data.save("location", place);
            this.workspace?.changeLocation();
            return place;
        } finally { if(this.locationAbort === abort)this.locationAbort = null; }
    }

    getSettingsPanel() {
        if (!this.running) { const note = document.createElement("p"); note.textContent = "Enable StillCord to customize your workspace."; return note; }
        return stillSettingsPanel(this);
    }

    openSettings() {
        if (this.settingsDialog?.isConnected) { this.settingsDialog.focus(); return; }
        const previous = document.activeElement, dialog = document.createElement("dialog");
        dialog.id = "stillcord-settings-dialog"; dialog.setAttribute("aria-label", "StillCord settings");
        const close = document.createElement("button"); close.type = "button"; close.className = "sc-settings-close";
        close.textContent = "×"; close.setAttribute("aria-label", "Close StillCord settings");
        this.closeSettings = () => { dialog.close(); dialog.remove(); this.settingsDialog = null; this.closeSettings = null; if(previous?.isConnected)previous.focus({preventScroll:true}); };
        close.addEventListener("click", () => this.closeSettings?.());
        dialog.addEventListener("cancel", event => { event.preventDefault(); this.closeSettings?.(); });
        dialog.addEventListener("click", event => { if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)this.closeSettings?.();} });
        dialog.append(close, this.getSettingsPanel()); document.body.append(dialog); this.settingsDialog=dialog; dialog.showModal();
        this.restless?.enter(dialog);
    }
};

// One painted surface per native consecutive-message group. Discord retains
// every message node and its controls. Sizing affects only an absolute decoration,
// so ResizeObserver cannot feed back into layout. No polling or content scanning.
/* A small local directory over Discord's stores. Native channel, voice and
   account controls stay mounted; no DOM polling or replacement of React nodes. */
/* Uses Discord's native LOCAL_ACTIVITY_UPDATE event through the host API. Activity is
   published only on an explicit form submit, never on input or startup. */
class StillActivity {
    constructor(plugin) {
        this.api = plugin.api;
        this.socketId = "StillSpeed-ProfileActivity";
        this.listeners = new Set();
        this.active = false;
        this.owned = false;
        this.error = "";
        const saved = this.api.Data.load("activityDraft") || {};
        this.draft = {type:saved.type === 2 ? 2 : 0, name:typeof saved.name === "string" ? saved.name.slice(0,128) : "", details:typeof saved.details === "string" ? saved.details.slice(0,128) : ""};
        this.savedSignature = JSON.stringify(this.draft);
        try {
            this.local = this.api.Webpack?.getStore?.("LocalActivityStore");
            this.privacy = this.api.Webpack?.getStore?.("UserSettingsProtoStore");
            this.dispatcher = this.local?._dispatcher || this.api.Webpack?.getModule?.(m => m && typeof m.dispatch === "function" && typeof m.subscribe === "function" && m._actionHandlers, {searchExports:true});
        } catch {}
        this.available = typeof this.dispatcher?.dispatch === "function" && typeof this.local?.getActivities === "function";
        this.onPrivacy = () => this.emit();
        this.privacy?.addChangeListener?.(this.onPrivacy);
    }
    sharing() { return this.privacy?.settings?.status?.showCurrentGame?.value; }
    saveDraft() {
        const signature = JSON.stringify(this.draft);
        if (signature === this.savedSignature) return;
        this.api.Data.save("activityDraft", {...this.draft});
        this.savedSignature = signature;
    }
    emit() { for (const fn of this.listeners) fn(); }
    apply() {
        if (!this.available) { this.error = "Activity controls are unavailable in this Discord version."; this.emit(); return false; }
        const name = this.draft.name.trim(), details = this.draft.details.trim();
        if (!name) { this.error = "Enter a game or song name."; this.emit(); return false; }
        const activity = {name, type:this.draft.type === 2 ? 2 : 0, application_id:"0", flags:1};
        if (details) activity.details = details;
        try {
            this.owned = true;
            this.dispatcher.dispatch({type:"LOCAL_ACTIVITY_UPDATE", socketId:this.socketId, activity});
            this.active = true;
            this.appliedSignature = JSON.stringify(this.draft);
            this.error = "";
            this.saveDraft();
            this.emit();
            return true;
        } catch {
            this.error = "Discord could not apply this activity. Try again.";
            this.emit();
            return false;
        }
    }
    clear() {
        if (!this.owned) return true;
        try {
            this.dispatcher.dispatch({type:"LOCAL_ACTIVITY_UPDATE", socketId:this.socketId, activity:null});
            this.active = this.owned = false;
            this.error = "";
            this.emit();
            return true;
        } catch {
            this.error = "Discord could not clear the activity. Try again.";
            this.emit(); return false;
        }
    }
    destroy() {
        this.listeners.clear();
        this.clear();
        this.saveDraft();
        this.privacy?.removeChangeListener?.(this.onPrivacy);
    }
}

class StillActivityView {
    constructor(workspace) {
        this.workspace = workspace;
        this.model = workspace.plugin.activity;
        const el = (tag, cls, text) => workspace.el(tag, cls, text);
        this.root = el("form", "still-activity-editor");
        this.root.id = "stillspeed-activity-editor";
        this.root.style.display = "none";
        this.root.setAttribute("aria-label", "Profile activity editor");
        const heading = el("div", "still-activity-heading");
        heading.append(el("span", "", "Profile activity"));
        this.state = el("span", "still-activity-state");
        heading.append(this.state);
        const close = workspace.button("Close activity editor", "close", () => workspace.plugin.closeAuxiliary());
        close.classList.add("still-activity-dismiss"); heading.append(close);
        const row = el("div", "still-activity-fields");
        this.type = el("select");
        this.type.setAttribute("aria-label", "Activity type");
        for (const [value, text] of [[0,"Playing"],[2,"Listening"]]) { const option = el("option", "", text); option.value = value; this.type.append(option); }
        this.type.value = String(this.model.draft.type);
        this.name = el("input"); this.name.type = "text"; this.name.maxLength = 128; this.name.required = true;
        this.name.placeholder = "Game or song"; this.name.setAttribute("aria-label", "Activity name"); this.name.autocomplete = "off"; this.name.value = this.model.draft.name;
        row.append(this.type, this.name);
        this.details = el("input"); this.details.type = "text"; this.details.maxLength = 128; this.details.placeholder = "Details · optional"; this.details.setAttribute("aria-label", "Activity details"); this.details.autocomplete = "off"; this.details.value = this.model.draft.details;
        const actions = el("div", "still-activity-actions");
        this.note = el("span", "still-activity-note"); this.note.setAttribute("role", "status");
        this.clear = el("button", "still-activity-clear", "Clear"); this.clear.type = "button";
        this.apply = el("button", "still-activity-apply", "Apply"); this.apply.type = "submit";
        actions.append(this.note, this.clear, this.apply);
        this.hint = el("p", "still-activity-hint");
        this.root.append(heading, row, this.details, actions, this.hint);
        this.root.addEventListener("input", () => this.readDraft());
        this.root.addEventListener("change", () => { this.readDraft(); this.model.saveDraft(); });
        this.root.addEventListener("submit", e => { e.preventDefault(); this.readDraft(); if (this.name.value.trim()) this.model.apply(); else this.name.focus(); });
        this.clear.addEventListener("click", () => this.model.clear());
        this.refresh = () => this.render();
        this.model.listeners.add(this.refresh);
        workspace.shell.append(this.root);
        workspace.shell.setAttribute("data-still-activity-editor", "");
        this.render();
    }
    readDraft() { this.model.draft = {type:Number(this.type.value) === 2 ? 2 : 0, name:this.name.value.slice(0,128), details:this.details.value.slice(0,128)}; this.render(); }
    render() {
        const model = this.model;
        this.state.textContent = model.active && JSON.stringify(model.draft) === model.appliedSignature ? "Applied" : model.draft.name.trim() ? "Draft" : "Off";
        this.note.textContent = model.error ? "Try again" : model.active ? "Ready" : "";
        this.apply.disabled = !model.available;
        this.clear.disabled = !model.owned;
        this.hint.textContent = model.error || (!model.available ? "Activity controls unavailable in this Discord version." : model.sharing() === false ? "Enable activity sharing in Settings → Activity Privacy." : "Apply shares on your profile. Clear stops this activity.");
    }
    destroy() {
        this.readDraft(); this.model.saveDraft();
        this.model.listeners.delete(this.refresh);
        this.root.remove();
        this.workspace.shell.removeAttribute("data-still-activity-editor");
    }
}


class StillBrowse {
    constructor(plugin) {
        this.plugin = plugin;
        this.api = plugin.api;
        this.sidebar = plugin.sidebar;
        this.workspace = plugin.workspace;
        this.alive = true;
        this.subscriptions = [];
        this.mode = "channels";
        this.unreadOnly = false;
        this.query = "";
        this.recent = (this.api.Data.load("browseRecentGuilds") || []);
        if (!Array.isArray(this.recent)) this.recent = [];
        this.recent = this.recent.filter(id => typeof id === "string").slice(0, 4);
        try {
            this.stores = Object.fromEntries(["GuildStore", "SortedGuildStore", "SelectedGuildStore", "SelectedChannelStore", "GuildChannelStore", "ChannelStore", "PermissionStore", "ReadStateStore"].map(n => [n, this.api.Webpack?.getStore?.(n)]));
            this.route = this.workspace.route || this.api.Webpack?.getByKeys?.("transitionTo", "replaceWith");
            if (!this.route) {
                const fn = this.api.Webpack?.getModule?.(v => typeof v === "function" && Function.prototype.toString.call(v).includes("transitionTo -"), {searchExports: true});
                if (fn) this.route = {transitionTo: fn};
            }
            if (!this.stores.GuildStore?.getGuilds || !this.stores.SelectedGuildStore?.getGuildId || !this.stores.GuildChannelStore?.getChannels || !this.stores.PermissionStore?.can || !this.route?.transitionTo) return;
            this.mount();
            for (const [name, store] of Object.entries(this.stores)) {
                if (!store?.addChangeListener || !store?.removeChangeListener) continue;
                const listener = () => {
                    const showingResults = this.mode === "servers" || this.mode === "channels" && (this.query || this.unreadOnly);
                    if (name !== "SelectedGuildStore" && !showingResults) return;
                    if (this.mode === "servers" && !["GuildStore", "SortedGuildStore", "SelectedGuildStore"].includes(name)) return;
                    if (name === "ReadStateStore" && (this.mode !== "channels" || (!this.query && !this.unreadOnly))) return;
                    this.schedule();
                };
                store.addChangeListener(listener);
                this.subscriptions.push(() => store.removeChangeListener(listener));
            }
            this.sync();
        } catch {
            // An unsupported client keeps the complete native sidebar.
            this.destroy();
        }
    }
    el(tag, cls = "", text) { return this.workspace.el(tag, cls, text); }
    button(label, action, cls = "") {
        const b = this.el("button", cls, label);
        b.type = "button";
        b.addEventListener("click", action);
        return b;
    }
    mount() {
        this.toolbar = this.el("div", "still-browse-toolbar");
        this.toolbar.style.display = "none";
        this.toolbar.setAttribute("aria-label", "Browse navigation");
        const top = this.el("div", "still-browse-top");
        const modes = this.el("div", "still-browse-modes");
        modes.setAttribute("role", "group");
        modes.setAttribute("aria-label", "Browse view");
        this.channelButton = this.button("Channels", () => this.setMode("channels"));
        this.serverButton = this.button("Servers", () => this.setMode("servers"));
        modes.append(this.channelButton, this.serverButton);
        const home = this.workspace.button("Direct messages", "inbox", () => this.navigate("/channels/@me"));
        home.classList.add("still-browse-utility");
        this.menuButton = this.workspace.button("More Browse options", "more", () => this.menu ? this.closeMenu() : this.openMenu());
        this.menuButton.classList.add("still-browse-utility");
        this.menuButton.setAttribute("aria-haspopup", "menu");
        this.menuButton.setAttribute("aria-expanded", "false");
        top.append(modes, home, this.menuButton);
        this.searchRow = this.el("div", "still-browse-search-row");
        const field = this.el("div", "still-browse-search");
        const searchIcon = this.el("span", "still-browse-search-symbol", "⌕");
        searchIcon.setAttribute("aria-hidden", "true");
        this.input = this.el("input");
        this.input.type = "search";
        this.input.autocomplete = "off";
        this.input.spellcheck = false;
        this.input.addEventListener("input", () => {
            this.query = this.input.value.trim().toLocaleLowerCase();
            this.sync();
        });
        this.input.addEventListener("keydown", e => {
            if (e.key === "Escape") {
                e.preventDefault(); e.stopPropagation();
                this.input.value = this.query = "";
                this.unreadOnly = false; this.sync();
            } else if (e.key === "ArrowDown") {
                if (this.sidebar.getAttribute("data-still-browse-results") !== "true") return;
                const first = this.results.querySelector("button[data-browse-key]");
                if (first) { e.preventDefault(); first.focus(); }
            } else if (e.key === "Enter") {
                if (this.sidebar.getAttribute("data-still-browse-results") !== "true") return;
                const first = this.results.querySelector("button[data-browse-key]");
                if (first) { e.preventDefault(); first.click(); }
            }
        });
        field.append(searchIcon, this.input);
        this.unreadButton = this.button("Unread", () => { this.unreadOnly = !this.unreadOnly; this.sync(); }, "still-browse-unread");
        this.unreadButton.setAttribute("aria-label", "Show unread channels");
        this.searchRow.append(field, this.unreadButton);
        this.toolbar.append(top, this.searchRow);
        this.results = this.el("div", "still-browse-results");
        this.results.style.display = "none";
        this.results.setAttribute("role", "region");
        this.results.setAttribute("aria-label", "Browse results");
        this.results.addEventListener("keydown", e => {
            const rows = [...this.results.querySelectorAll("button[data-browse-key]")];
            const index = rows.indexOf(document.activeElement);
            if (index < 0) return;
            if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const next = e.key === "Home" ? 0 : e.key === "End" ? rows.length - 1 : Math.max(0, Math.min(rows.length - 1, index + (e.key === "ArrowDown" ? 1 : -1)));
                rows[next]?.focus();
            } else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); this.input.focus(); }
        });
        this.sidebar.append(this.toolbar, this.results);
        this.sidebar.setAttribute("data-still-browser", "");
        this.plugin.shell.setAttribute("data-still-clean-left", "");
    }
    openMenu() {
        if (this.menu) return;
        this.menu = this.el("div", "still-browse-menu");
        this.menu.setAttribute("role", "menu");
        this.menu.setAttribute("aria-label", "More Browse options");
        const item = (label, action, checked) => {
            const button = this.button(label, () => { this.closeMenu(false); action(); }, "still-browse-menu-item");
            button.setAttribute("role", checked === undefined ? "menuitem" : "menuitemcheckbox");
            button.setAttribute("aria-label", label);
            if (checked !== undefined) button.setAttribute("aria-checked", String(checked));
            this.menu.append(button);
        };
        item("Channel controls", () => this.plugin.setAuxiliary(this.plugin.auxiliary === "tools" ? "none" : "tools"), this.plugin.auxiliary === "tools");
        if (this.workspace.activityView) item("Profile activity", () => {
            if (this.plugin.auxiliary === "activity") this.plugin.closeAuxiliary();
            else this.plugin.setAuxiliary("activity");
            if (this.plugin.auxiliary === "activity") this.workspace.activityView?.name.focus({preventScroll:true});
        }, this.plugin.auxiliary === "activity");
        item("Discord tools and server folders", () => this.setMode(this.mode === "native" ? "channels" : "native"), this.mode === "native");
        item("StillCord settings", () => this.plugin.openSettings());
        item("Focus view", () => this.plugin.update("focusView", !this.plugin.settings.focusView), this.plugin.settings.focusView);
        item("Reset Browse position", () => this.workspace.resetPosition());
        this.menu.addEventListener("keydown", e => {
            const buttons = [...this.menu.querySelectorAll("button")];
            const current = buttons.indexOf(document.activeElement);
            if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
                e.preventDefault(); const next = e.key === "Home" ? 0 : e.key === "End" ? buttons.length - 1 : (current + (e.key === "ArrowDown" ? 1 : -1) + buttons.length) % buttons.length; buttons[next]?.focus();
            } else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); this.closeMenu(true); }
            else if (e.key === "Tab") this.closeMenu(true);
        });
        this.outsideMenu = e => { if (!this.menu?.contains(e.target) && !this.menuButton.contains(e.target)) this.closeMenu(false); };
        document.addEventListener("pointerdown", this.outsideMenu);
        this.toolbar.append(this.menu);
        stillAttribute(this.menuButton, "aria-expanded", true);
        this.menu.querySelector("button")?.focus({preventScroll:true});
    }
    closeMenu(focus = false) {
        if (!this.menu) return;
        document.removeEventListener("pointerdown", this.outsideMenu);
        this.menu.remove(); this.menu = null; this.outsideMenu = null;
        stillAttribute(this.menuButton, "aria-expanded", false);
        if (focus) this.menuButton.focus({preventScroll:true});
    }
    setMode(mode) {
        this.closeMenu();
        this.mode = mode;
        this.input.value = this.query = "";
        this.unreadOnly = false;
        this.sync();
        if (mode === "servers") this.input.focus({preventScroll: true});
    }
    schedule() {
        if (!this.alive || !this.toolbar || document.hidden || !this.plugin.navigationOpen || this.timer) return;
        this.timer = setTimeout(() => { this.timer = 0; this.sync(); }, 120);
    }
    sync() {
        if (!this.alive || !this.toolbar || document.hidden || !this.plugin.navigationOpen) return;
        try {
            this.guildId = this.stores.SelectedGuildStore.getGuildId() || null;
            if (this.guildId !== this.lastGuildId) {
                if (this.lastGuildId !== undefined) { this.mode = "channels"; this.input.value = this.query = ""; this.unreadOnly = false; }
                this.lastGuildId = this.guildId;
                if (this.guildId && this.recent[0] !== this.guildId) {
                    this.recent = [this.guildId, ...this.recent.filter(id => id !== this.guildId)].slice(0, 4);
                    this.api.Data.save("browseRecentGuilds", this.recent);
                }
            }
            const servers = this.mode === "servers";
            const isResults = servers || this.mode === "channels" && Boolean(this.query || this.unreadOnly);
            stillAttribute(this.sidebar, "data-still-browse-view", this.mode);
            stillAttribute(this.sidebar, "data-still-browse-results", isResults);
            stillAttribute(this.channelButton, "aria-pressed", this.mode === "channels");
            stillAttribute(this.serverButton, "aria-pressed", servers);
            stillAttribute(this.input, "placeholder", servers ? "Find a server…" : "Find a channel…");
            stillAttribute(this.input, "aria-label", servers ? "Find a server" : "Find a channel");
            if (this.unreadButton.hidden !== servers) this.unreadButton.hidden = servers;
            stillAttribute(this.unreadButton, "aria-pressed", this.unreadOnly);
            if (this.searchRow.hidden !== (this.mode === "native")) this.searchRow.hidden = this.mode === "native";
            if (isResults) this.render(servers ? this.serverRows() : this.channelRows(), servers);
        } catch {
            this.sidebar.setAttribute("data-still-browse-view", "native");
            this.sidebar.setAttribute("data-still-browse-results", "false");
        }
    }
    serverRows() {
        const guilds = this.stores.GuildStore.getGuilds();
        const order = this.stores.SortedGuildStore?.getFlattenedGuildIds?.() || Object.keys(guilds);
        const ids = [...new Set([...this.recent, ...order, ...Object.keys(guilds)])];
        return ids.map(id => guilds[id]).filter(g => g && (!this.query || g.name.toLocaleLowerCase().includes(this.query))).map(g => ({id:g.id, name:g.name, icon:g.icon, current:g.id===this.guildId, group:!this.query && this.recent.includes(g.id) ? "Recent" : this.query ? "Search results" : "All servers"}));
    }
    channelRows() {
        if (!this.guildId) return [];
        const groups = this.stores.GuildChannelStore.getChannels(this.guildId);
        const seen = new Set();
        const selected = this.stores.SelectedChannelStore?.getChannelId?.();
        return [...(groups.SELECTABLE || []), ...(groups.VOCAL || [])].map(entry => entry.channel).filter(c => {
            if (!c || seen.has(c.id) || c.type === 4) return false;
            seen.add(c.id);
            if (!this.stores.PermissionStore.can(1024n, c)) return false;
            const category = this.stores.ChannelStore?.getChannel?.(c.parent_id)?.name || "";
            return (!this.query || (c.name + " " + category).toLocaleLowerCase().includes(this.query)) && (!this.unreadOnly || this.stores.ReadStateStore?.hasUnread?.(c.id) || this.stores.ReadStateStore?.getMentionCount?.(c.id) > 0);
        }).map(c => ({id:c.id, name:c.name, group:"Channels", context:this.stores.ChannelStore?.getChannel?.(c.parent_id)?.name || "", voice:c.type===2 || c.type===13, current:c.id===selected, mentions:this.stores.ReadStateStore?.getMentionCount?.(c.id) || 0}));
    }
    render(rows, servers) {
        const signature = JSON.stringify([servers, this.query, this.unreadOnly, this.guildId, rows]);
        if (signature === this.signature) return;
        this.signature = signature;
        const focused = this.results.contains(document.activeElement) ? document.activeElement.dataset.browseKey : null;
        const fragment = document.createDocumentFragment();
        const heading = this.el("div", "still-browse-heading");
        heading.append(this.el("span", "", servers ? "Your spaces" : this.unreadOnly ? "Unread channels" : "Channel results"), this.el("span", "still-browse-count", rows.length));
        fragment.append(heading);
        let lastGroup;
        for (const row of rows) {
            if (servers && row.group !== lastGroup) { fragment.append(this.el("div", "still-browse-section", row.group)); lastGroup = row.group; }
            const button = this.button("", () => servers ? this.openServer(row.id) : this.navigate(`/channels/${this.guildId}/${row.id}`), "still-browse-row");
            button.dataset.browseKey = row.id;
            if (row.current) button.setAttribute("aria-current", "true");
            const icon = this.el("span", "still-browse-avatar", servers ? row.name.replace(/[^\p{L}\p{N}\s]/gu, "").split(/\s+/).filter(Boolean).slice(0,2).map(s=>s[0]).join("").toUpperCase() || "·" : row.voice ? "◖" : "#");
            icon.setAttribute("aria-hidden", "true");
            if (servers && /^\d{5,20}$/.test(row.id) && /^[a-zA-Z0-9_]+$/.test(row.icon || "")) {
                const img = this.el("img"); img.alt = ""; img.loading = "lazy"; img.decoding = "async";
                img.src = `https://cdn.discordapp.com/icons/${row.id}/${row.icon}.webp?size=64`;
                img.addEventListener("error", () => img.remove(), {once:true}); icon.append(img);
            }
            const copy = this.el("span", "still-browse-copy");
            copy.append(this.el("span", "still-browse-name", row.name));
            if (!servers && (row.context || row.voice)) copy.append(this.el("span", "still-browse-context", [row.context, row.voice ? "Voice" : ""].filter(Boolean).join(" · ")));
            const end = this.el("span", "still-browse-end", row.mentions ? row.mentions > 99 ? "99+" : row.mentions : row.current ? "•" : "›");
            end.setAttribute("aria-hidden", "true");
            if (row.mentions) button.setAttribute("aria-label", `${row.name}, ${row.mentions} mentions`);
            button.title = row.name;
            button.append(icon, copy, end); fragment.append(button);
        }
        if (!rows.length) {
            const empty = this.el("div", "still-browse-empty");
            empty.append(this.el("strong", "", !servers && !this.guildId ? "Direct messages" : this.unreadOnly && !this.query ? "All caught up" : "Nothing found"), this.el("p", "", !servers && !this.guildId ? "Clear the search to return to your conversations." : this.unreadOnly && !this.query ? "Switch off Unread to see every channel." : "Try a shorter name or another search."));
            fragment.append(empty);
        }
        this.results.replaceChildren(fragment);
        if (focused) [...this.results.querySelectorAll("button[data-browse-key]")].find(e=>e.dataset.browseKey===focused)?.focus({preventScroll:true});
        else this.results.scrollTop = 0;
    }
    openServer(id) {
        const channelId = this.stores.SelectedChannelStore?.getLastSelectedChannelId?.(id);
        this.navigate(`/channels/${id}${channelId ? `/${channelId}` : ""}`);
    }
    navigate(path) {
        this.setMode("channels");
        try { this.route.transitionTo(path); }
        catch { this.setMode("native"); this.api.UI?.showToast("Use Discord tools to open this destination.", {type:"info"}); }
    }
    destroy() {
        this.alive = false;
        this.closeMenu();
        clearTimeout(this.timer);
        for (const unsubscribe of this.subscriptions || []) unsubscribe();
        this.subscriptions = [];
        this.toolbar?.remove(); this.results?.remove();
        for (const key of ["data-still-browser", "data-still-browse-view", "data-still-browse-results"]) this.sidebar?.removeAttribute(key);
        this.plugin.shell?.removeAttribute("data-still-clean-left");
    }
}


// A finite reading transition and short wheel easing. No idle frame loop,
// message reparenting, draft storage or whole-tree observer.
class StillReader {
    constructor(plugin) {
        this.plugin = plugin; this.shell = plugin.shell; this.messages = plugin.messages; this.composer = plugin.composer;
        this.alive = true; this.expanded = false; this.wantReading = false; this.mode = "latest";
        this.animations = []; this.revision = 0; this.listeners = [];
        this.motion = matchMedia("(prefers-reduced-motion: reduce)");
        this.tab = document.createElement("button"); this.tab.type = "button"; this.tab.id = "stillspeed-reader-tab";
        this.tab.textContent = "Message"; this.tab.title = "Restore the message input"; this.tab.setAttribute("aria-label", "Write a message");
        this.tab.style.display = "none"; this.shell.append(this.tab); this.showTab(false);
        this.rim = document.createElement("span"); this.rim.className = "still-reader-rim";
        this.rim.setAttribute("aria-hidden", "true"); this.messages.append(this.rim);
        this.listen(this.tab, "click", () => this.showComposer(true));
        this.listen(this.composer, "focusin", () => { this.manualReveal = true; this.setReading(false, {pin: false}); });
        this.listen(this.composer, "beforeinput", () => { this.typingAt = performance.now(); this.manualReveal = true; this.setReading(false, {pin:false, instant:true}); });
        this.listen(this.composer, "keydown", event => {
            if (!this.expanded) return;
            if (event.key === "Enter") { event.preventDefault(); event.stopPropagation(); this.manualReveal = true; this.setReading(false, {pin:false, instant:true}); }
        }, true);
        this.listen(this.composer, "focusout", () => this.scheduleCheck());
        this.listen(this.motion, "change", () => this.visibilityChanged());
        this.sync(); this.scheduleLayout();
    }
    listen(target, name, fn, options) { target.addEventListener(name, fn, options); this.listeners.push(() => target.removeEventListener(name, fn, options)); }
    get reduced() { return this.motion.matches && this.plugin.settings.respectReaderMotion !== false; }
    sync() {
        if (!this.alive) return;
        stillAttribute(this.shell, "data-still-reader-motion", this.plugin.settings.respectReaderMotion === false ? "custom" : "system");
        const scroller = this.messages.querySelector(':scope > [class*="scroller_"]') || this.messages.querySelector('[class*="scroller_"]');
        if (scroller !== this.scroller) {
            this.unbind(); this.scroller = scroller; this.interacted = false; this.manualReveal = false;
            if (scroller) {
                this.basePadding = parseFloat(scroller.style.getPropertyValue("--still-reader-base-padding") || getComputedStyle(scroller).paddingBottom) || 0;
                scroller.style.setProperty("--still-reader-base-padding", `${this.basePadding}px`);
                scroller.setAttribute("data-still-reader-scroll", "");
                this.onScroll = () => this.scheduleCheck();
                this.onWheel = event => this.wheel(event);
                this.onPointer = () => { this.interacted = true; this.manualReveal = false; this.stopWheel(); };
                this.onKey = event => { if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key) && !event.target.closest('input,textarea,[contenteditable="true"]')) { this.interacted = true; this.manualReveal = false; this.stopWheel(); } };
                scroller.addEventListener("scroll", this.onScroll, {passive:true});
                scroller.addEventListener("wheel", this.onWheel, {passive:false});
                this.messages.addEventListener("pointerdown", this.onPointer, {passive:true});
                this.messages.addEventListener("keydown", this.onKey);
            }
            this.reset(); this.scheduleLayout();
        }
        if (!this.plugin.settings.readingMode && this.expanded) this.setReading(false, {instant:true});
        if (!this.plugin.settings.smoothWheel) this.stopWheel();
    }
    unbind() {
        this.stopWheel();
        if (!this.scroller) return;
        this.scroller.removeEventListener("scroll", this.onScroll); this.scroller.removeEventListener("wheel", this.onWheel);
        this.messages.removeEventListener("pointerdown", this.onPointer); this.messages.removeEventListener("keydown", this.onKey);
        this.scroller.removeAttribute("data-still-reader-scroll"); this.scroller.style.removeProperty("--still-reader-base-padding"); this.scroller = null;
    }
    scheduleLayout() {
        if (!this.alive || document.hidden || this.layoutFrame) return;
        this.layoutFrame = requestAnimationFrame(() => { this.layoutFrame = 0; this.layout(); });
    }
    layout() {
        if (!this.alive || document.hidden || !this.scroller) return;
        if (this.busy) { this.layoutDirty = true; return; }
        const box = this.messages.getBoundingClientRect(), shell = this.shell.getBoundingClientRect(), input = this.composer.getBoundingClientRect();
        if (!box.width || !input.height) return;
        this.zoom = Number(getComputedStyle(this.composer.parentElement).zoom) || 1;
        if (!this.viewportReady) this.normalMargin = parseFloat(getComputedStyle(this.messages).marginBottom) || 0;
        const inputTop = input.top - (this.expanded ? (this.travel || 0) * this.zoom : 0);
        const gap = Math.max(0, (shell.bottom - inputTop) / this.zoom + this.normalMargin);
        this.gap = Number(gap.toFixed(3)); this.travel = Number(Math.max(input.height / this.zoom + 24, (shell.bottom - inputTop + 12) / this.zoom).toFixed(3));
        const viewport = this.messages.parentElement.getBoundingClientRect();
        const tabLeft = viewport.right - box.right >= 30 ? box.right + 4 : box.left - viewport.left >= 30 ? box.left - 30 : Math.min(shell.right - 30, box.right - 26);
        const vars = {"--still-reader-gap": `${this.gap}px`, "--still-reader-margin": `${Number((this.normalMargin - this.gap).toFixed(3))}px`, "--still-reader-travel": `${this.travel}px`, "--still-reader-tab-x": `${Number(Math.max(2, tabLeft).toFixed(3))}px`, "--still-reader-tab-y": `${Number(Math.max(96, shell.bottom - 126).toFixed(3))}px`};
        for (const [key, value] of Object.entries(vars)) if (this.shell.style.getPropertyValue(key) !== value) this.shell.style.setProperty(key, value);
        // Reserve the composer space inside one constant scroll viewport. Toggling
        // reading only changes the visible clip, never Discord's virtual-list size.
        this.viewportReady = true; stillAttribute(this.shell, "data-still-reader-viewport", "stable");
        stillAttribute(this.shell, "data-still-reader", this.expanded ? "expanded" : "latest");
    }
    scheduleCheck() {
        if (!this.alive || document.hidden || this.checkFrame) return;
        this.checkFrame = requestAnimationFrame(() => { this.checkFrame = 0; this.check(); });
    }
    distance() { return this.scroller ? Math.max(0, this.scroller.scrollHeight - this.scroller.clientHeight - this.scroller.scrollTop) : 0; }
    check() {
        if (!this.scroller || !this.plugin.settings.readingMode || !this.interacted || document.hidden) return;
        if (this.manualReveal || this.composer.contains(document.activeElement) && this.typingAt && performance.now() - this.typingAt < 1200) { this.setReading(false, {pin:false}); return; }
        const distance = this.distance();
        if (!this.wantReading && distance >= Math.max(160, (this.gap || 0) + 80)) this.setReading(true);
        else if (this.wantReading && distance <= 2 && !this.wheelFrame) this.setReading(false, {pin:true});
    }
    showTab(visible) {
        stillAttribute(this.tab, "aria-hidden", !visible); this.tab.tabIndex = visible ? 0 : -1;
        stillAttribute(this.shell, "data-still-reader-tab", visible ? "visible" : "hidden");
    }
    showComposer(focus = false) {
        this.manualReveal = true; this.stopWheel(); this.setReading(false, {pin: this.distance() <= 48});
        if (focus) this.composer.querySelector('[role="textbox"][contenteditable="true"],textarea:not([disabled]),input:not([disabled]),[contenteditable="true"]')?.focus({preventScroll:true});
    }
    setReading(reading, {pin = false, instant = false} = {}) {
        if (!this.alive || !this.scroller || reading === this.wantReading && (this.busy ? !instant : this.mode === (reading ? "reading" : "latest"))) return;
        if (reading && (!this.plugin.settings.readingMode || getComputedStyle(document.documentElement).getPropertyValue("--still-air-ready").trim() !== "1")) return;
        if (!this.expanded && reading) this.layout();
        const revision = ++this.revision, scroller = this.scroller;
        const fromClip = getComputedStyle(this.messages).clipPath;
        const fromTransform = getComputedStyle(this.composer).transform;
        const fromRim = getComputedStyle(this.rim).transform;
        for (const animation of this.animations) animation.cancel(); this.animations = [];
        this.wantReading = reading; this.showTab(false);
        if (!this.expanded && !reading) { this.mode = "latest"; return; }
        if (!this.expanded) {
            this.expanded = true; stillAttribute(this.shell, "data-still-reader", "expanded");
        }
        this.busy = true; this.mode = reading ? "entering" : "leaving";
        stillAttribute(this.shell, "data-still-reader-mode", this.mode);
        const clipped = `inset(0px 0px ${this.gap || 0}px 0px round 0px 0px 28px 28px)`, open = "inset(0px 0px 0px 0px round 0px 0px 0px 0px)";
        const clipStart = fromClip && fromClip !== "none" ? fromClip : open;
        const finish = () => {
            if (!this.alive || revision !== this.revision) return;
            this.expanded = reading; this.busy = false; this.mode = reading ? "reading" : "latest";
            stillAttribute(this.shell, "data-still-reader", reading ? "expanded" : "latest");
            stillAttribute(this.shell, "data-still-reader-mode", this.mode);
            for (const animation of this.animations) animation.cancel(); this.animations = [];
            this.layoutDirty = false; this.layout();
            this.showTab(reading && this.composer.getBoundingClientRect().top >= this.shell.getBoundingClientRect().bottom - 1);
        };
        if (instant || this.reduced || this.plugin.settings.microMotion === false || typeof this.messages.animate !== "function" || document.hidden) { finish(); return; }
        const options = {duration:reading ? 360 : 300, easing:"cubic-bezier(.22,.61,.36,1)", fill:"both"};
        this.animations.push(this.messages.animate([{clipPath:clipStart}, {clipPath:reading ? open : clipped}], options));
        this.animations.push(this.composer.animate([{transform:fromTransform, opacity:1}, {transform:reading ? `translateY(${this.travel}px)` : "none", opacity:1}], options));
        this.animations.push(this.rim.animate([{transform:fromRim, opacity:1}, {transform:reading ? "none" : `translateY(-${this.gap || 0}px)`, opacity:1}], options));
        Promise.all(this.animations.map(a => a.finished)).then(finish).catch(() => {});
    }
    wheel(event) {
        if (!this.alive || event.defaultPrevented || event.ctrlKey || event.metaKey || !event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY) * .35 || event.target.closest('input,textarea,[contenteditable="true"]')) return;
        this.interacted = true; this.manualReveal = false;
        const legacy = Math.abs(Number(event.wheelDeltaY || event.wheelDelta || 0));
        const stepped = this.plugin.settings.mouseWheelMode === true || event.deltaMode !== 0 || legacy >= 120 && legacy % 120 === 0 || !legacy && Math.abs(event.deltaY) >= 40 && Number.isInteger(event.deltaY);
        if (!this.plugin.settings.smoothWheel || this.reduced || !stepped || !event.cancelable) { this.stopWheel(); return; }
        const scroller = this.scroller, max = Math.max(0, scroller.scrollHeight - scroller.clientHeight), current = scroller.scrollTop;
        const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? scroller.clientHeight : 1);
        if (current <= 0 && delta < 0 || current >= max && delta > 0) return;
        event.preventDefault();
        if (!this.wheelFrame || Math.sign(delta) !== Math.sign(this.wheelTarget - current)) {
            this.wheelTarget = this.wheelPosition = this.wheelLastWrite = current;
            this.wheelVelocity = 0; this.wheelTime = performance.now();
        }
        this.wheelTarget = Math.max(0, Math.min(max, this.wheelTarget + delta));
        if (this.wheelFrame) return;
        const step = now => {
            this.wheelFrame = 0;
            if (!this.alive || document.hidden || scroller !== this.scroller) return;
            const actual = scroller.scrollTop, shift = actual - this.wheelLastWrite;
            if (Math.abs(shift) > 2) { this.wheelTarget += shift; this.wheelPosition += shift; }
            const limit = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
            this.wheelTarget = Math.max(0, Math.min(limit, this.wheelTarget));
            const dt = Math.max(1, Math.min(40, now - this.wheelTime)) / 1000; this.wheelTime = now;
            // Exact critically damped step: start with zero velocity and keep
            // fractional position between paints, even when scrollTop rounds.
            const omega = 32, offset = this.wheelPosition - this.wheelTarget;
            const impulse = (this.wheelVelocity + omega * offset) * dt, decay = Math.exp(-omega * dt);
            let position = this.wheelTarget + (offset + impulse) * decay;
            this.wheelVelocity = (this.wheelVelocity - omega * impulse) * decay;
            if (offset * (position - this.wheelTarget) < 0) { position = this.wheelTarget; this.wheelVelocity = 0; }
            this.wheelPosition = Math.max(0, Math.min(limit, position));
            scroller.scrollTop = this.wheelPosition; this.wheelLastWrite = this.wheelPosition;
            if (Math.abs(this.wheelTarget - this.wheelPosition) > .25 || Math.abs(this.wheelVelocity) > 8) this.wheelFrame = requestAnimationFrame(step);
            else { scroller.scrollTop = this.wheelTarget; this.wheelLastWrite = this.wheelTarget; this.wheelVelocity = 0; this.scheduleCheck(); }
        };
        this.wheelFrame = requestAnimationFrame(step);
    }
    stopWheel() { cancelAnimationFrame(this.wheelFrame); this.wheelFrame = 0; this.wheelVelocity = 0; }
    reset() {
        this.revision++; for (const animation of this.animations) animation.cancel(); this.animations = [];
        this.expanded = this.wantReading = this.busy = false; this.mode = "latest";
        stillAttribute(this.shell, "data-still-reader", "latest"); stillAttribute(this.shell, "data-still-reader-mode", "latest"); this.showTab(false);
    }
    visibilityChanged() {
        this.stopWheel();
        if (document.hidden) { this.reset(); cancelAnimationFrame(this.checkFrame); cancelAnimationFrame(this.layoutFrame); this.checkFrame = this.layoutFrame = 0; }
        else { this.scheduleLayout(); this.scheduleCheck(); }
    }
    destroy() {
        this.reset(); this.alive = false; this.unbind();
        cancelAnimationFrame(this.layoutFrame); cancelAnimationFrame(this.checkFrame);
        for (const remove of this.listeners) remove(); this.tab.remove(); this.rim.remove();
        for (const key of ["data-still-reader", "data-still-reader-mode", "data-still-reader-tab", "data-still-reader-motion", "data-still-reader-viewport"]) this.shell.removeAttribute(key);
        for (const key of ["--still-reader-margin", "--still-reader-gap", "--still-reader-travel", "--still-reader-tab-x", "--still-reader-tab-y"]) this.shell.style.removeProperty(key);
    }
}

class StillMessageGroups {
    constructor(root, onViewportChange, onStructureChange, onNewRows) {
        this.root = root;
        this.viewport = root.parentElement;
        this.onViewportChange = onViewportChange;
        this.onStructureChange = onStructureChange;
        this.onNewRows = onNewRows;
        this.alive = true;
        this.rows = new Set();
        this.surfaces = new Map();
        this.groups = [];
        this.frame = 0;
        this.dirty = true;
        this.mutations = new MutationObserver(records => {
            if (!records.some(r => r.type === "childList" ||
                /\bgroupStart_/.test(r.oldValue || "") !== /\bgroupStart_/.test(r.target.className || ""))) return;
            this.dirty = true;
            this.schedule();
        });
        this.resize = new ResizeObserver(records => {
            this.schedule();
            if (records.some(record => record.target === this.viewport || record.target === this.root)) this.onViewportChange?.();
        });
        if (this.viewport) this.resize.observe(this.viewport);
        this.resize.observe(this.root);
        this.schedule();
    }

    schedule() {
        if (!this.alive || this.frame || document.hidden) return;
        this.frame = requestAnimationFrame(() => {
            this.frame = 0;
            if (!this.alive || document.hidden) return;
            if (this.dirty) this.collect();
            this.paint();
        });
    }

    collect() {
        this.dirty = false;
        this.onStructureChange?.();
        const list = this.root.querySelector('[data-list-id="chat-messages"], [class*="scrollerInner_"]');
        const rows = new Set(), groups = [];
        let group = null;
        for (const item of list?.children || []) {
            const row = item.matches('[class*="cozyMessage_"]') ? item : item.querySelector(':scope > [class*="cozyMessage_"]');
            if (!row) { group = null; continue; } // Date/unread/system separators.
            rows.add(row);
            const starts = row.matches('[class*="groupStart_"]') || row.querySelector(':scope > [class*="contents_"] > [class*="avatar_"]');
            if (!group || starts) { group = []; groups.push(group); }
            group.push(row);
        }
        const connected = groups.filter(g => g.length > 1), starts = new Set(connected.map(g => g[0]));
        for (const [row, surface] of this.surfaces) {
            if (!starts.has(row)) { surface.remove(); row.style.removeProperty("--still-bubble-height"); this.surfaces.delete(row); }
        }
        const parts = new Map();
        for (const g of connected) {
            g.forEach((row, i) => parts.set(row, i === 0 ? "start" : i === g.length - 1 ? "end" : "middle"));
            if (!this.surfaces.has(g[0])) {
                const surface = document.createElement("div");
                surface.className = "still-message-surface";
                surface.setAttribute("aria-hidden", "true");
                surface.style.display = "none"; // Safe if the theme is disabled first.
                g[0].append(surface);
                this.surfaces.set(g[0], surface);
            }
        }
        for (const row of new Set([...this.rows, ...rows])) {
            const part = parts.get(row);
            if (part && row.getAttribute("data-still-sequence") !== part) row.setAttribute("data-still-sequence", part);
            else if (!part) row.removeAttribute("data-still-sequence");
            if (rows.has(row) && !this.rows.has(row)) this.resize.observe(row);
            if (!rows.has(row)) this.resize.unobserve(row);
        }
        const oldLast = [...this.rows].at(-1), ordered = [...rows];
        if (oldLast && rows.has(oldLast)) {
            const added = ordered.slice(ordered.indexOf(oldLast) + 1).filter(row => !this.rows.has(row));
            if (added.length) this.onNewRows?.(added);
        }
        this.rows = rows;
        this.groups = connected;
        // Shallow child-list watches catch virtualized rows/list replacement.
        // Row class watches only react when Discord changes a group boundary.
        this.mutations.disconnect();
        for (let node = list; node && this.root.contains(node); node = node.parentElement) {
            this.mutations.observe(node, {childList: true});
            if (node === this.root) break;
        }
        if (!list) this.mutations.observe(this.root, {childList: true});
        for (const row of rows) this.mutations.observe(row, {attributes: true, attributeFilter: ["class"], attributeOldValue: true});
        for (const item of list?.children || []) if (!rows.has(item)) this.mutations.observe(item, {childList: true});
    }

    paint() {
        if (!this.root.isConnected || !this.groups.length) return;
        const chat = this.root.closest('[class*="chatContent_"]');
        const zoom = Number(chat && getComputedStyle(chat).zoom) || 1;
        // Read all geometry first, then write only decorative sizes.
        const sizes = this.groups.map(group => {
            const rects = group.map(row => row.getBoundingClientRect());
            const first = rects[0], last = rects[rects.length - 1];
            return [this.surfaces.get(group[0]), group[0], Math.max(...rects.map(r => r.width)) / zoom, (last.bottom - first.top) / zoom];
        });
        for (const [surface, row, width, height] of sizes) {
            const w = `${width.toFixed(3)}px`, h = `${height.toFixed(3)}px`;
            if (surface.style.width !== w) surface.style.width = w;
            if (surface.style.height !== h) surface.style.height = h;
            if (row.style.getPropertyValue("--still-bubble-height") !== h) row.style.setProperty("--still-bubble-height", h);
        }
    }

    destroy() {
        this.alive = false;
        cancelAnimationFrame(this.frame);
        this.mutations.disconnect();
        this.resize.disconnect();
        for (const row of this.rows) { row.removeAttribute("data-still-sequence"); row.style.removeProperty("--still-bubble-height"); }
        for (const surface of this.surfaces.values()) surface.remove();
        this.rows.clear();
        this.surfaces.clear();
        this.groups = [];
    }
}

// Local workspace UI. Owns its nodes, timers, store listeners and media process.
// It never reparents Discord's React nodes or observes the message subtree.
class StillWorkspace {
    constructor(plugin) {
        this.plugin = plugin;
        this.api = plugin.api;
        this.shell = plugin.shell;
        this.sidebar = plugin.sidebar;
        this.alive = true;
        this.position = this.api.Data.load("browsePosition");
        this.collapsed = this.api.Data.load("widgetsCollapsed") === true;
        this.weather = this.api.Data.load("weatherCache");
        if (!plugin.location || this.weather?.zip !== plugin.location.zip) this.weather = null;
        this.media = {available: false};
        this.listeners = [];
        this.handle = this.el("div", "still-window-bar");
        this.handle.style.display = "none";
        this.grip = this.button("Move Browse window", "grip");
        this.grip.className = "still-window-grip";
        this.grip.append(this.el("span", "", "Browse"));
        this.grip.title = "Drag to move · Arrow keys to adjust · Double-click or Home to reset";
        const reset = this.button("Reset Browse position", "reset", () => this.resetPosition());
        reset.classList.add("still-window-reset");
        const close = this.button("Close Browse", "close", () => plugin.setNavigation(false, true));
        this.handle.append(this.grip, reset, close);
        this.sidebar.append(this.handle);
        this.on(this.grip, "pointerdown", e => this.beginDrag(e));
        this.on(this.grip, "pointermove", e => this.moveDrag(e));
        this.on(this.grip, "pointerup", () => this.endDrag());
        this.on(this.grip, "pointercancel", () => this.endDrag(true));
        this.on(this.grip, "lostpointercapture", () => this.endDrag());
        this.on(this.grip, "dblclick", () => this.resetPosition());
        this.on(this.grip, "keydown", e => {
            if (!this.plugin.settings.movableBrowse) return;
            if (e.key === "Home") { e.preventDefault(); this.resetPosition(); return; }
            const direction = {ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1]}[e.key];
            if (!direction) return;
            e.preventDefault();
            const step = e.shiftKey ? 40 : 10;
            this.position = {x: this.bounds.x + direction[0] * step, y: this.bounds.y + direction[1] * step};
            this.fitBrowse(); this.savePosition();
        });
        this.toggle = this.button("Widgets", "widgets", () => {
            this.collapsed = !this.collapsed;
            this.api.Data.save("widgetsCollapsed", this.collapsed);
            this.sync();
            if (!this.collapsed) this.plugin.restless?.enter(this.dock);
        });
        this.toggle.id = "stillspeed-widget-toggle";
        this.toggle.style.display = "none";
        this.toggle.title = "Show or hide your widgets";
        this.toggle.setAttribute("aria-controls", "stillspeed-widgets");
        this.dock = this.el("aside", "");
        this.dock.id = "stillspeed-widgets";
        this.dock.style.display = "none";
        this.dock.setAttribute("aria-label", "Still widgets");
        this.shell.append(this.toggle, this.dock);
        this.on(window, "resize", () => {
            if (this.resizeFrame) return;
            this.resizeFrame = requestAnimationFrame(() => { this.resizeFrame = 0; if (this.alive) { this.endDrag(true); this.fitBrowse(); this.updateCaption(); } });
        });
        this.sync();
    }

    el(tag, className = "", text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = String(text);
        return node;
    }
    icon(name) {
        const paths = {
            grip: ["M8 8h.01M16 8h.01M8 12h.01M16 12h.01M8 16h.01M16 16h.01"],
            more: ["M5 12h.01M12 12h.01M19 12h.01"],
            reset: ["M4 10a8 8 0 1 1 0 5", "M4 4v6h6"],
            close: ["m6 6 12 12M18 6 6 18"],
            widgets: ["M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"],
            moon: ["M20 13a8 8 0 0 1-9-9 8 8 0 1 0 9 9Z"],
            sun: ["M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1"],
            cloud: ["M6 18h12a4 4 0 0 0 .5-8 6 6 0 0 0-11.5-1A4.5 4.5 0 0 0 6 18Z"],
            rain: ["M5 15a4 4 0 0 1 1-8 6 6 0 0 1 11.5 1 4 4 0 0 1 .5 8M8 17l-1 3M13 17l-1 3"],
            snow: ["M12 3v18M4 7l16 10M4 17 20 7M9 5l3 2 3-2M9 19l3-2 3 2"],
            music: ["M9 18V5l11-2v13M9 15c-4-1-7 1-6 4s6 1 6-1M20 13c-4-1-7 1-6 4s6 1 6-1M9 9l11-2"],
            previous: ["M5 5v14M19 5 7 12l12 7V5Z"],
            next: ["M19 5v14M5 5l12 7-12 7V5Z"],
            play: ["m9 5 11 7-11 7V5Z"],
            pause: ["M8 5v14M16 5v14"],
            inbox: ["M4 4h16v16H4zM4 14h5l2 3h2l2-3h5"],
            arrow: ["M6 12h12M13 7l5 5-5 5"]
        };
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        for (const [key, value] of Object.entries({viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true"})) svg.setAttribute(key, value);
        for (const d of paths[name] || paths.cloud) { const p = document.createElementNS(svg.namespaceURI, "path"); p.setAttribute("d", d); svg.append(p); }
        return svg;
    }
    button(label, icon, action) {
        const button = this.el("button", "still-icon-button");
        button.type = "button";
        button.setAttribute("aria-label", label);
        button.title = label;
        button.append(this.icon(icon));
        if (action) button.addEventListener("click", action);
        return button;
    }
    on(target, name, callback) {
        target.addEventListener(name, callback);
        this.listeners.push(() => target.removeEventListener(name, callback));
    }
    scheduleCaption() {
        if (!this.alive || this.captionFrame || document.hidden || this.shell.getAttribute("data-still-navigation") !== "closed") return;
        this.captionFrame = requestAnimationFrame(() => { this.captionFrame = 0; this.updateCaption(); });
    }
    updateCaption() {
        if (!this.alive || document.hidden || !this.plugin.settings.movableBrowse || this.shell.getAttribute("data-still-navigation") !== "closed") return;
        const bounds = this.plugin.messages?.getBoundingClientRect();
        if (!bounds?.width) return;
        // One rectangle on layout changes, never a frame loop or member scan.
        const width = Math.max(124, Math.min(220, bounds.left - 16));
        const left = Math.max(12, bounds.left - width - 4);
        for (const [name, value] of [["--still-caption-left", left], ["--still-caption-width", width]]) {
            const text = `${Number(value.toFixed(3))}px`;
            if (this.shell.style.getPropertyValue(name) !== text) this.shell.style.setProperty(name, text);
        }
    }
    fitBrowse() {
        if (!this.alive || !this.plugin.settings.movableBrowse) return;
        const shell = this.shell.getBoundingClientRect();
        const width = Math.min(344, Math.max(0, shell.width - 24));
        const position = this.position && Number.isFinite(this.position.x) && Number.isFinite(this.position.y) ? this.position : {x: 20, y: 118};
        const auxiliary = this.shell.getAttribute("data-still-auxiliary");
        const reserve = auxiliary === "activity" && this.activityView ? 212 : auxiliary === "tools" ? 140 : 24;
        const height = Math.max(150, Math.min(620, shell.height - Math.max(44, position.y) - reserve));
        const top = Math.min(44, Math.max(0, shell.height - height));
        const maxX = Math.max(12, shell.width - width - 12), maxY = Math.max(top, shell.height - height - reserve);
        const x = Math.max(12, Math.min(maxX, position.x)), y = Math.max(top, Math.min(maxY, position.y));
        this.bounds = {x, y, maxX, maxY, top, height};
        for (const [name, value] of [["--still-nav-x", x], ["--still-nav-y", y], ["--still-nav-height", height]]) {
            const text = `${value}px`;
            if (this.shell.style.getPropertyValue(name) !== text) this.shell.style.setProperty(name, text);
        }
        stillAttribute(this.shell, "data-still-navigation-docked", x <= 40);
    }
    beginDrag(event) {
        if (!this.plugin.settings.movableBrowse || event.button !== 0 || !event.isPrimary) return;
        event.preventDefault();
        this.fitBrowse();
        this.grip.focus({preventScroll: true});
        this.drag = {pointer: event.pointerId, startX: event.clientX, startY: event.clientY, ...this.bounds};
        this.nextPosition = {x: this.bounds.x, y: this.bounds.y};
        this.sidebar.setAttribute("data-still-dragging", "");
        this.shell.setAttribute("data-still-window-dragging", "");
        this.grip.setPointerCapture(event.pointerId);
    }
    moveDrag(event) {
        const d = this.drag;
        if (!d || event.pointerId !== d.pointer) return;
        this.nextPosition = {x: Math.max(12, Math.min(d.maxX, d.x + event.clientX - d.startX)), y: Math.max(d.top, Math.min(d.maxY, d.y + event.clientY - d.startY))};
        if (this.dragFrame) return;
        this.dragFrame = requestAnimationFrame(() => {
            this.dragFrame = 0;
            if (!this.drag) return;
            this.shell.style.setProperty("--still-drag-x", `${this.nextPosition.x - d.x}px`);
            this.shell.style.setProperty("--still-drag-y", `${this.nextPosition.y - d.y}px`);
        });
    }
    endDrag(cancel = false) {
        if (!this.drag) return;
        const pointer = this.drag.pointer;
        this.drag = null;
        cancelAnimationFrame(this.dragFrame); this.dragFrame = 0;
        this.sidebar.removeAttribute("data-still-dragging");
        this.shell.removeAttribute("data-still-window-dragging");
        this.shell.style.removeProperty("--still-drag-x");
        this.shell.style.removeProperty("--still-drag-y");
        if (!cancel) this.position = this.nextPosition;
        if (this.grip.hasPointerCapture(pointer)) this.grip.releasePointerCapture(pointer);
        this.fitBrowse();
        if (!cancel) this.savePosition();
    }
    savePosition() { this.position = {x: this.bounds.x, y: this.bounds.y}; this.api.Data.save("browsePosition", this.position); }
    resetPosition() { this.endDrag(true); this.position = null; this.api.Data.save("browsePosition", null); this.fitBrowse(); }

    sync() {
        const s = this.plugin.settings;
        const showActivity = Boolean(s.activityEditor && s.movableBrowse && this.plugin.header && this.plugin.activity);
        const activityChanged = showActivity !== Boolean(this.activityView);
        if (activityChanged) {
            if (showActivity) this.activityView = new StillActivityView(this);
            else { this.activityView.destroy(); this.activityView = null; }
        }
        const auxiliary = this.plugin.auxiliary === "activity" && !this.activityView ? (this.plugin.channelControlsVisible ? "tools" : "none") : this.plugin.auxiliary;
        const auxiliaryChanged = this.shell.getAttribute("data-still-auxiliary") !== auxiliary;
        stillAttribute(this.shell, "data-still-auxiliary", auxiliary);
        const moved = this.shell.getAttribute("data-still-movable") !== String(s.movableBrowse);
        stillAttribute(this.shell, "data-still-movable", s.movableBrowse);
        if (moved || activityChanged || auxiliaryChanged || !this.bounds) this.fitBrowse();
        stillAttribute(this.shell, "data-still-widgets", !s.widgets ? "disabled" : this.collapsed ? "closed" : "open");
        stillAttribute(this.toggle, "aria-expanded", s.widgets && !this.collapsed);
        const signature = [s.clockWidget, s.weatherWidget, s.mediaWidget, s.notificationsWidget, this.plugin.location?.zip, s.zipTime].join("|");
        if (signature !== this.signature) { this.signature = signature; this.buildCards(); }
        const refresh = [signature, s.widgets, this.collapsed, document.hidden, s.fahrenheit, s.clock24, s.zipTime].join("|");
        if (refresh !== this.refreshSignature) { this.refreshSignature = refresh; this.visibilityChanged(); this.scheduleCaption(); }
    }
    visible() { return this.alive && this.plugin.settings.widgets && !this.collapsed && !document.hidden; }
    card(name, label) {
        const card = this.el("section", `still-widget still-widget-${name}`);
        card.setAttribute("aria-label", label);
        const heading = this.el("div", "still-widget-heading");
        heading.append(this.el("h3", "", label));
        card.append(heading);
        this.dock.append(card);
        return {card, heading};
    }
    buildCards() {
        this.dock.replaceChildren();
        this.clockUI = this.weatherUI = this.mediaUI = this.inboxUI = null;
        const s = this.plugin.settings;
        if (s.clockWidget) {
            const {card, heading} = this.card("clock", "Local time");
            const zone = this.el("span", "still-widget-caption", (s.zipTime && this.plugin.location ? this.plugin.location.name : Intl.DateTimeFormat().resolvedOptions().timeZone.split("/").pop().replaceAll("_", " ")));
            heading.append(zone);
            const time = this.el("time", "still-clock-time"), date = this.el("div", "still-widget-muted");
            card.append(time, date); this.clockUI = {time, date};
        }
        if (s.weatherWidget) {
            const {card, heading} = this.card("weather", this.plugin.location?.name || "Weather");
            const refresh = this.button("Refresh weather", "reset", () => this.refreshWeather(true));
            heading.append(refresh);
            const main = this.el("div", "still-weather-main"), temperature = this.el("div", "still-weather-temperature", "—"), symbol = this.el("div", "still-weather-symbol");
            symbol.append(this.icon("cloud")); main.append(temperature, symbol);
            const condition = this.el("div", "still-widget-subtitle", "Weather loading"), details = this.el("div", "still-widget-muted");
            const footer = this.el("div", "still-weather-footer"), status = this.el("span", ""), credit = this.el("a", "", "Open-Meteo");
            credit.href = "https://open-meteo.com/"; credit.target = "_blank"; credit.rel = "noopener noreferrer";
            footer.append(status, credit); card.append(main, condition, details, footer);
            this.weatherUI = {temperature, symbol, condition, details, status, refresh};
        }
        if (s.mediaWidget) {
            const {card, heading} = this.card("media", "Now playing");
            const source = this.el("span", "still-widget-caption", "Windows"); heading.append(source);
            const row = this.el("div", "still-media-track"), artwork = this.el("div", "still-media-icon"); artwork.append(this.icon("music"));
            const text = this.el("div", "still-media-copy"), title = this.el("div", "still-media-title", "Nothing playing"), artist = this.el("div", "still-widget-muted", "Play something in Spotify or a browser");
            text.append(title, artist); row.append(artwork, text);
            const controls = this.el("div", "still-media-controls");
            const previous = this.button("Previous track", "previous", () => this.mediaCommand("previous"));
            const toggle = this.button("Play", "play", () => this.mediaCommand("toggle")); toggle.classList.add("still-media-play");
            const next = this.button("Next track", "next", () => this.mediaCommand("next"));
            controls.append(previous, toggle, next); card.append(row, controls);
            this.mediaUI = {source, title, artist, previous, toggle, next};
        }
        if (s.notificationsWidget) {
            const {card, heading} = this.card("inbox", "Discord inbox");
            const open = this.button("Open Discord inbox", "arrow", () => this.openInbox()); heading.append(open);
            const summary = this.el("div", "still-inbox-summary", "Connecting to Discord"), list = this.el("div", "still-inbox-list");
            card.append(summary, list); this.inboxUI = {summary, list}; this.inboxSignature = null;
        }
        if (!this.dock.children.length) this.dock.append(this.el("p", "still-widget-muted still-widget-empty", "Enable widgets in StillCord settings."));
    }
    visibilityChanged() {
        clearTimeout(this.clockTimer); clearTimeout(this.weatherTimer); clearTimeout(this.inboxTimer);
        this.clockTimer = this.weatherTimer = this.inboxTimer = 0;
        if (!this.visible()) { this.weatherAbort?.abort(); this.unsubscribeInbox(); this.stopMedia(); return; }
        this.tickClock();
        if (this.weatherUI) { this.renderWeather(); this.refreshWeather(); }
        else this.weatherAbort?.abort();
        if (this.mediaUI) { this.startMedia(); this.renderMedia(); } else this.stopMedia();
        if (this.inboxUI) { this.subscribeInbox(); this.renderInbox(); } else this.unsubscribeInbox();
    }
    tickClock() {
        if (!this.visible() || !this.clockUI) return;
        const now = new Date(), timeZone = this.plugin.settings.zipTime ? this.plugin.location?.timezone : undefined;
        this.clockUI.time.textContent = new Intl.DateTimeFormat(undefined, {hour: "numeric", minute: "2-digit", hour12: !this.plugin.settings.clock24, timeZone}).format(now);
        this.clockUI.time.dateTime = now.toISOString();
        this.clockUI.date.textContent = new Intl.DateTimeFormat(undefined, {weekday: "long", month: "short", day: "numeric", timeZone}).format(now);
        this.clockTimer = setTimeout(() => this.tickClock(), 60000 - Date.now() % 60000 + 40);
    }
    changeLocation() {
        this.weatherAbort?.abort(); this.weatherAbort = null;
        clearTimeout(this.weatherTimer); this.weather = null; this.weatherError = false;
        this.lastWeatherAttempt = 0; this.signature = this.refreshSignature = null; this.sync();
    }
    async refreshWeather(force = false) {
        if (!this.visible() || !this.weatherUI || this.weatherAbort || !this.api.Net?.fetch || !this.plugin.location) return;
        const location = this.plugin.location;
        const age = Date.now() - Number(this.weather?.at || 0);
        if (!force && age >= 0 && age < 900000) { this.scheduleWeather(900000 - age); return; }
        if (force && Date.now() - (this.lastWeatherAttempt || 0) < 30000) return;
        this.lastWeatherAttempt = Date.now();
        const abort = new AbortController(); this.weatherAbort = abort;
        this.weatherUI.refresh.disabled = true;
        try {
            // Location-derived endpoint; no Discord identifiers or account credentials.
            const response = await this.api.Net.fetch(stillForecastUrl(location), {method: "GET", timeout: 12000, signal: abort.signal, redirect: "error"});
            if (!response.ok) throw new Error("Weather unavailable");
            const data = await response.json();
            const c = data.current, d = data.daily;
            if (![c?.temperature_2m, c?.apparent_temperature, c?.weather_code, d?.temperature_2m_max?.[0], d?.temperature_2m_min?.[0]].every(Number.isFinite)) throw new Error("Weather data unavailable");
            if (!this.alive || abort.signal.aborted || location !== this.plugin.location) return;
            this.weather = {zip:location.zip, at: Date.now(), temperature: c.temperature_2m, feels: c.apparent_temperature, code: c.weather_code, day: c.is_day === 1, high: d.temperature_2m_max[0], low: d.temperature_2m_min[0]};
            this.weatherError = false; this.api.Data.save("weatherCache", this.weather);
        } catch {
            if (this.alive && !abort.signal.aborted && location === this.plugin.location) this.weatherError = true;
        } finally {
            const current = this.weatherAbort === abort;
            if (current) this.weatherAbort = null;
            if (this.alive && current && location === this.plugin.location) {
                if (this.weatherUI) this.weatherUI.refresh.disabled = false;
                this.renderWeather(); this.scheduleWeather(this.weatherError ? 300000 : 900000);
            }
        }
    }
    scheduleWeather(delay) { clearTimeout(this.weatherTimer); if (this.visible() && this.weatherUI) this.weatherTimer = setTimeout(() => this.refreshWeather(), Math.max(1000, delay)); }
    renderWeather() {
        if (!this.weatherUI) return;
        const ui = this.weatherUI, w = this.weather;
        if (!this.plugin.location) { ui.condition.textContent = "Choose your location"; ui.details.textContent = "Set a ZIP in StillCord settings"; ui.refresh.disabled = true; return; }
        if (!w || ![w.temperature, w.high, w.low, w.feels, w.code, w.at].every(Number.isFinite)) {
            ui.condition.textContent = this.weatherError ? "Weather unavailable" : "Weather loading";
            ui.details.textContent = this.weatherError ? "Try again when you're online" : [this.plugin.location.name, this.plugin.location.region].filter(Boolean).join(", ");
            return;
        }
        const temp = value => Math.round(this.plugin.settings.fahrenheit ? value * 9 / 5 + 32 : value);
        const code = w.code;
        const condition = code === 0 ? [w.day ? "Clear sky" : "Clear night", w.day ? "sun" : "moon"] : code <= 3 ? [code === 3 ? "Overcast" : "Partly cloudy", "cloud"] : code <= 48 ? ["Fog", "cloud"] : code >= 95 ? ["Thunderstorms", "rain"] : (code >= 71 && code <= 77) || code === 85 || code === 86 ? ["Snow", "snow"] : [code < 60 ? "Drizzle" : "Rain", "rain"];
        ui.temperature.textContent = `${temp(w.temperature)}°`;
        ui.temperature.setAttribute("aria-label", `${temp(w.temperature)} degrees ${this.plugin.settings.fahrenheit ? "Fahrenheit" : "Celsius"}`);
        ui.condition.textContent = condition[0]; ui.symbol.replaceChildren(this.icon(condition[1]));
        ui.details.textContent = `H:${temp(w.high)}°  L:${temp(w.low)}°  ·  Feels ${temp(w.feels)}°`;
        const age = Math.max(0, Math.floor((Date.now() - w.at) / 60000));
        ui.status.textContent = this.weatherError || age >= 20 ? `Saved · ${age < 60 ? age + "m" : Math.floor(age / 60) + "h"} ago` : "Updated " + new Intl.DateTimeFormat(undefined, {hour: "numeric", minute: "2-digit"}).format(w.at);
    }

    async startMedia() {
        if (this.mediaSession || this.mediaRetry || !this.api.Media) return;
        const session = {}; this.mediaSession = session;
        try {
            let revision = -1;
            while (this.visible() && this.mediaSession === session) {
                const abort = new AbortController(); this.mediaAbort = abort;
                const startedAt = Date.now();
                const data = await this.api.Media.read(revision, abort.signal);
                if (this.mediaSession !== session || !this.visible()) break;
                if (!Number.isFinite(data.revision) || !data.state || typeof data.state.available !== "boolean") throw Error("Invalid media state");
                // An unchanged response should be held by the service. Back off
                // if a malfunctioning adapter starts returning it immediately.
                if (data.revision === revision && Date.now() - startedAt < 1000) throw Error("Media service did not wait");
                if (data.revision !== revision) { this.media = data.state; this.renderMedia(); }
                revision = data.revision;
            }
        } catch {
            if (this.mediaSession === session && this.visible()) {
                this.media = {available: false, error: "Windows media is reconnecting"}; this.renderMedia();
                this.mediaRetry = setTimeout(() => { this.mediaRetry = 0; if (this.visible()) this.startMedia(); }, 15000);
            }
        } finally { if (this.mediaSession === session) { this.mediaSession = null; this.mediaAbort = null; } }
    }
    stopMedia() {
        this.mediaSession = null;
        this.mediaAbort?.abort(); this.mediaAbort = null;
        clearTimeout(this.mediaRetry); this.mediaRetry = 0;
    }
    async mediaCommand(command) {
        if (!["toggle", "previous", "next"].includes(command) || !this.api.Media || !this.visible()) return;
        try {
            await this.api.Media.command(command);
        } catch { this.api.UI?.showToast("This player is unavailable. Try again when media is playing.", {type: "info"}); }
    }
    renderMedia() {
        if (!this.mediaUI) return;
        const ui = this.mediaUI, m = this.media;
        stillAttribute(ui.toggle.closest(".still-widget"), "data-still-playing", Boolean(m.available && m.playing));
        const source = String(m.source || "").toLowerCase();
        ui.source.textContent = !m.available ? "Windows" : source.includes("spotify") ? "Spotify" : source.includes("chrome") ? "Chrome" : source.includes("msedge") ? "Edge" : source.includes("firefox") ? "Firefox" : "Windows";
        ui.title.textContent = m.available ? String(m.title || "Media playing").slice(0, 300) : m.error || "Nothing playing";
        ui.title.title = ui.title.textContent;
        ui.artist.textContent = m.available ? String(m.artist || (m.playing ? "Playing" : "Paused")).slice(0, 300) : "Play something in Spotify or a browser";
        ui.previous.disabled = !m.available || !m.canPrevious;
        ui.next.disabled = !m.available || !m.canNext;
        ui.toggle.disabled = !m.available || !m.canToggle;
        const label = m.playing ? "Pause" : "Play";
        ui.toggle.setAttribute("aria-label", label); ui.toggle.title = label;
        ui.toggle.replaceChildren(this.icon(m.playing ? "pause" : "play"));
    }

    subscribeInbox() {
        if (this.inboxStores || !this.api.Webpack?.getStore) return;
        const names = ["ReadStateStore", "ChannelStore", "GuildStore", "UserStore", "PrivateChannelSortStore"];
        this.inboxStores = Object.fromEntries(names.map(name => [name, this.api.Webpack.getStore(name)]));
        this.route = this.api.Webpack.getByKeys?.("transitionTo", "replaceWith");
        if (!this.route) {
            const transitionTo = this.api.Webpack.getModule?.(value => typeof value === "function" && Function.prototype.toString.call(value).includes("transitionTo -"), {searchExports: true});
            if (transitionTo) this.route = {transitionTo};
        }
        this.onInboxChange = () => {
            if (!this.visible() || this.inboxTimer) return;
            this.inboxTimer = setTimeout(() => { this.inboxTimer = 0; if (this.visible()) this.renderInbox(); }, 200);
        };
        for (const store of Object.values(this.inboxStores)) store?.addChangeListener?.(this.onInboxChange);
    }
    unsubscribeInbox() {
        if (this.inboxStores) for (const store of Object.values(this.inboxStores)) store?.removeChangeListener?.(this.onInboxChange);
        this.inboxStores = null; this.onInboxChange = null;
    }
    renderInbox() {
        if (!this.inboxUI) return;
        const {ReadStateStore: read, ChannelStore: channels, GuildStore: guilds, UserStore: users, PrivateChannelSortStore: privateChannels} = this.inboxStores || {};
        if (!read?.getMentionChannelIds || !channels?.getChannel) { this.inboxUI.summary.textContent = "Open Discord inbox to see updates"; return; }
        try {
            const mentioned = Array.from(read.getMentionChannelIds() || []);
            const unreadDMs = Array.from(privateChannels?.getPrivateChannelIds?.() || []).filter(id => read.hasUnread?.(id));
            let total = 0;
            const rows = [...new Set([...mentioned, ...unreadDMs])].map(id => {
                if (!/^\d{5,25}$/.test(String(id))) return null;
                const channel = channels.getChannel(id); if (!channel) return null;
                const count = Math.max(0, Number(read.getMentionCount?.(id)) || 0); total += count;
                const guild = channel.guild_id ? guilds?.getGuild?.(channel.guild_id) : null;
                const name = channel.name || (channel.recipients || []).map(userId => { const u = users?.getUser?.(userId); return u?.globalName || u?.username || "Someone"; }).join(", ") || "Direct message";
                return {id: String(id), guildId: /^\d{5,25}$/.test(String(channel.guild_id)) ? String(channel.guild_id) : "@me", name, context: guild?.name || "Direct message", count, time: Number(read.lastMessageTimestamp?.(id)) || 0};
            }).filter(Boolean).sort((a, b) => Number(b.count > 0) - Number(a.count > 0) || b.time - a.time).slice(0, 3);
            const summary = total ? `${total > 999 ? "999+" : total} mention${total === 1 ? "" : "s"}${unreadDMs.length ? ` · ${unreadDMs.length} unread DM${unreadDMs.length === 1 ? "" : "s"}` : ""}` : unreadDMs.length ? `${unreadDMs.length} unread DM${unreadDMs.length === 1 ? "" : "s"}` : "You're all caught up";
            const signature = JSON.stringify([summary, rows]); if (signature === this.inboxSignature) return; this.inboxSignature = signature;
            this.inboxUI.summary.textContent = summary;
            this.inboxUI.list.replaceChildren();
            for (const row of rows) {
                const button = this.el("button", "still-inbox-row"); button.type = "button";
                const text = this.el("span", "still-inbox-copy"); text.append(this.el("span", "still-inbox-name", row.name), this.el("span", "still-widget-muted", row.context));
                button.append(text, this.el("span", "still-inbox-badge", row.count ? row.count > 99 ? "99+" : row.count : "•"));
                button.title = `${row.context} · ${row.name}`;
                button.addEventListener("click", () => {
                    if (typeof this.route?.transitionTo === "function") this.route.transitionTo(`/channels/${row.guildId}/${row.id}`);
                    else this.openInbox();
                });
                this.inboxUI.list.append(button);
            }
        } catch { this.inboxUI.summary.textContent = "Open Discord inbox to see updates"; }
    }
    openInbox() {
        const button = document.querySelector('[aria-label="Inbox"], [aria-label="Notification Center"], [aria-label="Notifications"]');
        if (button instanceof HTMLElement) button.click();
        else this.api.UI?.showToast("Use Discord's Inbox button in the title bar.", {type: "info"});
    }
    destroy() {
        this.alive = false;
        this.endDrag(true);
        this.activityView?.destroy(); this.activityView = null;
        cancelAnimationFrame(this.resizeFrame); cancelAnimationFrame(this.dragFrame); cancelAnimationFrame(this.captionFrame);
        clearTimeout(this.clockTimer); clearTimeout(this.weatherTimer); clearTimeout(this.inboxTimer);
        this.weatherAbort?.abort(); this.unsubscribeInbox(); this.stopMedia();
        for (const remove of this.listeners) remove();
        this.handle.remove(); this.toggle.remove(); this.dock.remove();
        for (const name of ["data-still-movable", "data-still-navigation-docked", "data-still-widgets", "data-still-window-dragging", "data-still-auxiliary"]) this.shell.removeAttribute(name);
        for (const name of ["--still-nav-x", "--still-nav-y", "--still-nav-height", "--still-drag-x", "--still-drag-y", "--still-caption-left", "--still-caption-width"]) this.shell.style.removeProperty(name);
    }
}

// BetterDiscord is the only build that has access to BdApi / require.
function stillBetterDiscordHost() {
    const api = new BdApi("StillCord");
    const mediaRequest = async (suffix, options) => {
        const fs = require("fs"), path = require("path");
        const shared = path.resolve(BdApi.Plugins.folder, "..", "..", "StillCord", "Media", "StillMediaBridge.json");
        const legacy = path.join(BdApi.Plugins.folder, "StillMediaBridge.json");
        const config = JSON.parse(fs.readFileSync(fs.existsSync(shared) ? shared : legacy, "utf8"));
        if (!Number.isInteger(config.port) || config.port < 1024 || config.port > 65535 || !/^[a-f0-9]{64}$/.test(config.key)) throw Error("Invalid media setup");
        const response = await api.Net.fetch(`http://127.0.0.1:${config.port}${suffix}`, {
            ...options, redirect: "error", headers: {Authorization: `Bearer ${config.key}`, "Content-Type": "application/json"}
        });
        if (!response.ok) throw Error("Media service unavailable");
        return response.json();
    };
    return {
        Data: api.Data, DOM: api.DOM, Webpack: api.Webpack, Net: api.Net, UI: api.UI,
        prepare() {
            if (api.Data.load("settings") === undefined) {
                const old = new BdApi("StillSpeed");
                for (const key of ["settings", "browseOpen", "channelControlsVisible", "activityDraft", "browseRecentGuilds", "browsePosition", "widgetsCollapsed"]) {
                    const value = old.Data.load(key);
                    if (value !== undefined) api.Data.save(key, value);
                }
            }
            if (BdApi.Plugins?.isEnabled("StillSpeed")) BdApi.Plugins.disable("StillSpeed");
            if (BdApi.Themes?.isEnabled("Still")) BdApi.Themes.disable("Still");
        },
        Media: {
            read: (revision, signal) => mediaRequest(`/state?after=${revision}`, {signal, timeout: 30000}),
            command: command => {
                if (!["toggle", "previous", "next"].includes(command)) throw Error("Invalid media control");
                return mediaRequest("/control", {method: "POST", body: JSON.stringify({command}), timeout: 5000});
            }
        }
    };
}

module.exports = class extends StillCord { constructor() { super(); } start() { if (!this.running) this.api = stillBetterDiscordHost(); super.start(); } };
