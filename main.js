import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

// ✅ Set Cesium base URL
window.CESIUM_BASE_URL = "/Cesium/";

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMjFjYzhjMy02MjQyLTQ4NjktYmRhZS0xYzhkYzgyNTJkYzAiLCJpZCI6MjcyMjcwLCJpYXQiOjE3MzgyMDc5NjZ9.sfBk2vy0RcwFLNb8ySxabHstQYk2D08L4z1_R2DEHFY";

// ✅ Declare the viewer globally
let viewer;

// ✅ Async Function to Initialize Cesium with Terrain
async function initCesium() {
    try {
        const terrainProvider = await Cesium.CesiumTerrainProvider.fromIonAssetId(1);

        viewer = new Cesium.Viewer("cesiumContainer", {
            terrainProvider: terrainProvider,
            baseLayerPicker: false
        });

        // ✅ Hide the loading overlay once Cesium is loaded
        document.getElementById("loadingOverlay").style.display = "none";

        // ✅ Once viewer is loaded, render the events
        displayEvents(1789);

        console.log("Cesium terrain & events loaded successfully!");
    } catch (error) {
        console.error("Failed to load Cesium:", error);
    }
}

// ✅ Event List
const events = [
{ name: "First U.S. Presidential Election", year: 1789, lon: -77.0369, lat: 38.9072, color: Cesium.Color.BLUE, link: "https://en.wikipedia.org/wiki/1789_United_States_presidential_election" },
{ name: "U.S. Constitution Takes Effect", year: 1789, lon: -74.0060, lat: 40.7128, color: Cesium.Color.GREEN, link: "https://en.wikipedia.org/wiki/United_States_Constitution" },
{ name: "George Washington Becomes First U.S. President", year: 1789, lon: -74.0060, lat: 40.7128, color: Cesium.Color.ORANGE, link: "https://en.wikipedia.org/wiki/George_Washington" },
{ name: "Storming of the Bastille", year: 1789, lon: 2.3522, lat: 48.8566, color: Cesium.Color.RED, link: "https://en.wikipedia.org/wiki/Storming_of_the_Bastille" },
{ name: "Declaration of the Rights of Man and of the Citizen", year: 1789, lon: 2.3522, lat: 48.8566, color: Cesium.Color.LIME, link: "https://en.wikipedia.org/wiki/Declaration_of_the_Rights_of_Man_and_of_the_Citizen" },
{ name: "Women's March on Versailles", year: 1789, lon: 2.1204, lat: 48.8049, color: Cesium.Color.SILVER, link: "https://en.wikipedia.org/wiki/Women%27s_March_on_Versailles" },
{ name: "Bill of Rights Proposed", year: 1789, lon: -77.0369, lat: 38.9072, color: Cesium.Color.NAVY, link: "https://en.wikipedia.org/wiki/United_States_Bill_of_Rights" },
{ name: "Maryland Cedes Land for U.S. Capital", year: 1789, lon: -77.0369, lat: 38.9072, color: Cesium.Color.BLACK, link: "https://en.wikipedia.org/wiki/District_of_Columbia" },
{ name: "Foundation of Georgetown University", year: 1789, lon: -77.0736, lat: 38.9076, color: Cesium.Color.TEAL, link: "https://en.wikipedia.org/wiki/Georgetown_University" },
{ name: "North Carolina Ratifies the U.S. Constitution", year: 1789, lon: -78.6382, lat: 35.7796, color: Cesium.Color.VIOLET, link: "https://en.wikipedia.org/wiki/North_Carolina" },
{ name: "Great Fear in France", year: 1789, lon: 2.3522, lat: 48.8566, color: Cesium.Color.MAROON, link: "https://en.wikipedia.org/wiki/Great_Fear" },
{ name: "First Presidential Veto in U.S.", year: 1789, lon: -77.0369, lat: 38.9072, color: Cesium.Color.PINK, link: "https://en.wikipedia.org/wiki/Veto" },
{ name: "First U.S. Department of the Treasury", year: 1789, lon: -77.0369, lat: 38.9072, color: Cesium.Color.GOLD, link: "https://en.wikipedia.org/wiki/United_States_Department_of_the_Treasury" },
{ name: "First American Census Ordered", year: 1789, lon: -77.0369, lat: 38.9072, color: Cesium.Color.AQUA, link: "https://en.wikipedia.org/wiki/1790_United_States_census" },
{ name: "First Supreme Court Session", year: 1789, lon: -77.0369, lat: 38.9072, color: Cesium.Color.CYAN, link: "https://en.wikipedia.org/wiki/Supreme_Court_of_the_United_States" },
{ name: "Mutiny on the Bounty", year: 1789, lon: -175.1982, lat: -21.1789, color: Cesium.Color.YELLOW, link: "https://en.wikipedia.org/wiki/Mutiny_on_the_Bounty" },
{ name: "First Congress of the United States", year: 1789, lon: -77.0369, lat: 38.9072, color: Cesium.Color.LIGHTGRAY, link: "https://en.wikipedia.org/wiki/1st_United_States_Congress" },
{ name: "First U.S. Patent Law Passed", year: 1789, lon: -77.0369, lat: 38.9072, color: Cesium.Color.DARKBLUE, link: "https://en.wikipedia.org/wiki/United_States_patent_law" },
{ name: "First U.S. Secretary of War Appointed", year: 1789, lon: -77.0369, lat: 38.9072, color: Cesium.Color.DARKGREEN, link: "https://en.wikipedia.org/wiki/United_States_Secretary_of_War" },
{ name: "Pope Pius VI Condemns French Revolution", year: 1789, lon: 12.4964, lat: 41.9029, color: Cesium.Color.INDIGO, link: "https://en.wikipedia.org/wiki/Pope_Pius_VI" },
{ name: "Collapse of the Hittite Empire", year: -1200, lon: 34.6084, lat: 40.0213, color: Cesium.Color.PURPLE, link: "https://en.wikipedia.org/wiki/Hittite_Empire" },
{ name: "Destruction of Ugarit", year: -1200, lon: 35.9433, lat: 35.6012, color: Cesium.Color.BLUE, link: "https://en.wikipedia.org/wiki/Ugarit" },
{ name: "Decline of Mycenaean Civilization", year: -1200, lon: 22.7542, lat: 37.7308, color: Cesium.Color.GREEN, link: "https://en.wikipedia.org/wiki/Mycenaean_Greece" },
{ name: "Emergence of the Olmec Civilization", year: -1200, lon: -94.4036, lat: 17.8526, color: Cesium.Color.YELLOW, link: "https://en.wikipedia.org/wiki/Olmec" },
{ name: "Migration of the Sea Peoples", year: -1200, lon: 30.8025, lat: 26.8206, color: Cesium.Color.CYAN, link: "https://en.wikipedia.org/wiki/Sea_Peoples" },
{ name: "Ironworking Spreads in the Near East", year: -1200, lon: 35.2433, lat: 38.9637, color: Cesium.Color.ORANGE, link: "https://www.history.com/topics/pre-history/iron-age" },
{ name: "Battle in the Tollense Valley", year: -1200, lon: 13.0800, lat: 53.5030, color: Cesium.Color.DARKRED, link: "https://en.wikipedia.org/wiki/Tollense_valley_battlefield" },
{ name: "Foundation of Phoenician Trading Ports", year: -1200, lon: 35.5, lat: 33.9, color: Cesium.Color.DARKMAGENTA, link: "https://en.wikipedia.org/wiki/Phoenicia" },
{ name: "Composition of the Yajurveda", year: -1200, lon: 78.9629, lat: 20.5937, color: Cesium.Color.MAGENTA, link: "https://en.wikipedia.org/wiki/Yajurveda" },
{ name: "Decline of the Egyptian New Kingdom", year: -1200, lon: 31.2357, lat: 30.0444, color: Cesium.Color.MAROON, link: "https://en.wikipedia.org/wiki/New_Kingdom_of_Egypt" },
];

// ✅ Function to Display Events
function displayEvents(selectedYear) {
    if (!viewer) {
        console.error("Cesium Viewer is not initialized yet!");
        return;
    }

    viewer.entities.removeAll();

    events.forEach(event => {
        if (event.year === selectedYear) {
            viewer.entities.add(new Cesium.Entity({
                name: event.name,
                position: Cesium.Cartesian3.fromDegrees(event.lon, event.lat),
                point: { pixelSize: 10, color: event.color },
                description: `<h3>${event.name} (${event.year > 0 ? event.year + ' AD' : Math.abs(event.year) + ' BC'})</h3>
                              <p><a href="${event.link}" target="_blank">More Info</a></p>`
            }));
        }
    });
}

// ✅ Add Dropdown Selection Listener
document.getElementById('yearSelect').addEventListener('change', function () {
    const selectedYear = parseInt(this.value, 10);
    displayEvents(selectedYear);
});

// ✅ Call Async Function to Initialize
initCesium();

