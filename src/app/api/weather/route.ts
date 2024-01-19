/**
 * @swagger
 * /api/weather:
 *  get:
 *   description: Get weather data
 *   responses:
 *    200:
 *     description: Success
 */
export async function GET(request: Request) {
    return new Response('Астана пиздес суык крч', { status: 200 })
}