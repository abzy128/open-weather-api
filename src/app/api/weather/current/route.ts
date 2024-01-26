import { getWeatherByCityName } from "../../../lib/openWeatherMapApi";
/**
 * @swagger
 * /api/weather/current:
 *  get:
 *   description: Get weather data
 *   parameters:
 *     - name: cityName
 *       in: query
 *       required: true
 *       schema:
 *       type: string
 *       example: "Astana"
 *   responses:
 *    200:
 *     description: Success
 *   400:
 *     description: Bad request
 *   500:
 *     description: Internal server error
 */
export async function GET(request: Request) {
    const url = new URL(request.url);
    const cityName = url.searchParams.get("cityName");
    if (!cityName) {
        return new Response("Missing city name", { status: 400 });
    }
    try {
        const response = await getWeatherByCityName(cityName);
        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error: any) {
        return new Response(error.message, { status: 500 });
    }
}