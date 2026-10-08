(() => {
  "use strict";

  /*
   * THE CAKERY — SEASONAL ENGINE
   * --------------------------------
   * Central system for seasonal campaigns.
   *
   * Current stage:
   * - Detects the active season
   * - Applies a season identifier to <html>
   * - Provides a safe foundation for future
   *   hero, images, animations, colors, content
   *   and offers.
   */

  const SEASONAL_SETTINGS = {
    /*
     * Keep this as null for automatic mode.
     *
     * For testing a season later, we can temporarily use:
     *
     * manualOverride: "onam"
     *
     * Then change it back to null before publishing.
     */
    manualOverride: null,

    timezone: "Asia/Kolkata"
  };


  /*
   * APPROVED THE CAKERY SEASONAL CAMPAIGNS
   */
  const SEASONS = {

    normal: {
      name: "Normal",
      enabled: true,
      dates: []
    },

    christmas: {
      name: "Christmas & New Year",
      enabled: false,
      dates: []
    },

    valentines: {
      name: "Valentine's Season",
      enabled: false,
      dates: []
    },

    ramadan: {
      name: "Ramadan",
      enabled: false,
      dates: []
    },

    vishu: {
      name: "Vishu",
      enabled: false,
      dates: []
    },

    bakrid: {
      name: "Bakrid",
      enabled: false,
      dates: []
    },

    independence: {
      name: "Independence Day",
      enabled: false,
      dates: []
    },

    onam: {
      name: "Onam",
      enabled: false,
      dates: []
    },

    diwali: {
      name: "Diwali",
      enabled: false,
      dates: []
    }

  };


  /*
   * Get today's date according to
   * India Standard Time.
   */
  function getIndiaDate() {

    const formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: SEASONAL_SETTINGS.timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });

    return formatter.format(new Date());
  }


  /*
   * Check whether today's date falls
   * inside a campaign period.
   */
  function isDateInRange(date, start, end) {

    return date >= start && date <= end;

  }


  /*
   * Automatically detect the current season.
   */
  function detectSeason() {

    /*
     * Manual testing mode.
     */
    if (
      SEASONAL_SETTINGS.manualOverride &&
      SEASONS[SEASONAL_SETTINGS.manualOverride]
    ) {

      return SEASONAL_SETTINGS.manualOverride;

    }


    const today = getIndiaDate();


    /*
     * Check every configured campaign.
     */
    for (const [seasonKey, season] of Object.entries(SEASONS)) {

      if (!season.enabled || !season.dates.length) {
        continue;
      }


      for (const period of season.dates) {

        if (
          isDateInRange(
            today,
            period.start,
            period.end
          )
        ) {

          return seasonKey;

        }

      }

    }


    /*
     * If no campaign is active,
     * use the normal website.
     */
    return "normal";

  }


  /*
   * Apply the detected season to
   * the website root element.
   */
  function applySeason(seasonKey) {

    const season =
      SEASONS[seasonKey] || SEASONS.normal;


    /*
     * Add a data attribute.
     *
     * Example:
     *
     * <html data-season="onam">
     */
    document.documentElement.dataset.season =
      seasonKey;


    /*
     * Remove previously applied
     * seasonal classes.
     */
    document.documentElement.classList.remove(
      "season-normal",
      "season-christmas",
      "season-valentines",
      "season-ramadan",
      "season-vishu",
      "season-bakrid",
      "season-independence",
      "season-onam",
      "season-diwali"
    );


    /*
     * Add the current season class.
     *
     * Example:
     *
     * <html class="season-onam">
     */
    document.documentElement.classList.add(
      `season-${seasonKey}`
    );


    /*
     * Development information.
     * This helps us verify the engine
     * from the browser console.
     */
    console.log(
      `[The Cakery] Seasonal mode: ${season.name}`
    );

  }


  /*
   * Start the seasonal engine.
   */
  function initSeasonalEngine() {

    const currentSeason =
      detectSeason();


    applySeason(currentSeason);


    /*
     * Make the seasonal engine available
     * globally for future development.
     */
    window.TheCakerySeasonal = {

      currentSeason,

      seasons: SEASONS,

      applySeason

    };

  }


  /*
   * Safely initialize after the HTML
   * document is ready.
   */
  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initSeasonalEngine
    );

  } else {

    initSeasonalEngine();

  }

})();
