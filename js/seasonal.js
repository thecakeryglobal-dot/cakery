(() => {
  "use strict";

  /*
   * THE CAKERY — SEASONAL ENGINE
   * --------------------------------
   * Central system for seasonal campaigns.
   *
   * Current features:
   * - Automatic seasonal detection foundation
   * - India timezone support
   * - URL-based testing
   * - Manual override support
   * - Normal fallback
   * - Seasonal HTML class/data attribute
   *
   * Future features:
   * - Hero videos
   * - Hero images
   * - Seasonal images
   * - Decorations
   * - Colors
   * - Animations
   * - Content
   * - Offers
   */


  /*
   * =========================================================
   * SETTINGS
   * =========================================================
   */

  const SEASONAL_SETTINGS = {

    /*
     * Keep this as null for normal operation.
     *
     * For development testing only, you can temporarily use:
     *
     * manualOverride: "onam"
     *
     * Then change it back to null before publishing.
     */
    manualOverride: null,

    /*
     * The Cakery operates in India.
     */
    timezone: "Asia/Kolkata"

  };


  /*
   * =========================================================
   * SEASONAL CAMPAIGNS
   * =========================================================
   *
   * The actual campaign dates will be added later
   * after the creative team finalizes them.
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
   * =========================================================
   * INDIA DATE
   * =========================================================
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
   * =========================================================
   * DATE RANGE CHECK
   * =========================================================
   */

  function isDateInRange(date, start, end) {

    return date >= start && date <= end;

  }


  /*
   * =========================================================
   * URL TESTING MODE
   * =========================================================
   *
   * Examples:
   *
   * https://www.thecakery.in/?season=onam
   * https://www.thecakery.in/?season=christmas
   * https://www.thecakery.in/?season=diwali
   *
   * This is only for testing.
   */

  function getTestingSeason() {

    const params =
      new URLSearchParams(window.location.search);

    const requestedSeason =
      params.get("season");


    if (
      requestedSeason &&
      SEASONS[requestedSeason]
    ) {

      return requestedSeason;

    }


    return null;

  }


  /*
   * =========================================================
   * DETECT CURRENT SEASON
   * =========================================================
   */

  function detectSeason() {


    /*
     * -------------------------------------------------------
     * 1. URL TESTING MODE
     * -------------------------------------------------------
     *
     * Example:
     *
     * ?season=onam
     */

    const testingSeason =
      getTestingSeason();


    if (testingSeason) {

      return testingSeason;

    }


    /*
     * -------------------------------------------------------
     * 2. MANUAL OVERRIDE
     * -------------------------------------------------------
     *
     * Used only during development.
     */

    if (
      SEASONAL_SETTINGS.manualOverride &&
      SEASONS[SEASONAL_SETTINGS.manualOverride]
    ) {

      return SEASONAL_SETTINGS.manualOverride;

    }


    /*
     * -------------------------------------------------------
     * 3. AUTOMATIC DATE DETECTION
     * -------------------------------------------------------
     */

    const today =
      getIndiaDate();


    /*
     * Check every configured campaign.
     */

    for (
      const [seasonKey, season]
      of Object.entries(SEASONS)
    ) {


      /*
       * Skip disabled campaigns.
       */

      if (
        !season.enabled ||
        !season.dates.length
      ) {

        continue;

      }


      /*
       * Check each campaign period.
       */

      for (
        const period
        of season.dates
      ) {

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
     * -------------------------------------------------------
     * 4. NORMAL FALLBACK
     * -------------------------------------------------------
     *
     * If no seasonal campaign is active,
     * use the normal Cakery website.
     */

    return "normal";

  }


  /*
   * =========================================================
   * APPLY SEASON
   * =========================================================
   */

  function applySeason(seasonKey) {


    /*
     * Make sure the requested season exists.
     */

    const season =
      SEASONS[seasonKey] ||
      SEASONS.normal;


    /*
     * -------------------------------------------------------
     * DATA ATTRIBUTE
     * -------------------------------------------------------
     *
     * Example:
     *
     * <html data-season="onam">
     */

    document.documentElement.dataset.season =
      seasonKey;


    /*
     * -------------------------------------------------------
     * REMOVE OLD SEASON CLASSES
     * -------------------------------------------------------
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
     * -------------------------------------------------------
     * ADD CURRENT SEASON CLASS
     * -------------------------------------------------------
     *
     * Example:
     *
     * <html class="season-onam">
     */

    document.documentElement.classList.add(
      `season-${seasonKey}`
    );


    /*
     * -------------------------------------------------------
     * DEVELOPMENT LOG
     * -------------------------------------------------------
     */

    console.log(
      `[The Cakery] Seasonal mode: ${season.name}`
    );

  }


  /*
   * =========================================================
   * INITIALIZE ENGINE
   * =========================================================
   */

  function initSeasonalEngine() {


    /*
     * Detect the current season.
     */

    const currentSeason =
      detectSeason();


    /*
     * Apply the season.
     */

    applySeason(
      currentSeason
    );


    /*
     * -------------------------------------------------------
     * GLOBAL ACCESS
     * -------------------------------------------------------
     *
     * Makes the engine available for future development.
     */

    window.TheCakerySeasonal = {

      currentSeason,

      seasons: SEASONS,

      detectSeason,

      applySeason

    };

  }


  /*
   * =========================================================
   * START ENGINE SAFELY
   * =========================================================
   */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initSeasonalEngine
    );

  } else {

    initSeasonalEngine();

  }

})();
