import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { callMinerApi } from './avalon-miner-cli.js'


const MINER_IP = '192.168.11.160'
const CGMINER_PORT = 4028

const port = 3000
const app = new Hono()

app.get('/ping/:command', async c => {
  const command = c.req.param('command')
  const parameter = c.req.query('parameter')
  const response = await callMinerApi(MINER_IP, CGMINER_PORT, command, parameter)

  return c.json(response)
})

console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
