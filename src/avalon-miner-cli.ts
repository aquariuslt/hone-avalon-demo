import { Socket } from 'net'


const END_OF_RESPONSE = '\u0000'

export const callMinerApi = (
  host: string,
  port: number,
  command: string,
  parameter?: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const client = new Socket()
    let response = ''

    client.connect(port, host, () => {
      console.log('Connected to server')
      const cmd = { command: command, parameter: parameter }
      const cmdString = JSON.stringify(cmd)
      console.log(`Executing command: ` + cmdString)
      client.write(cmdString)
    })

    client.on('data', data => {
      response += data.toString()
    })

    client.on('close', () => {
      console.log('Connection closed')
      const formattedResponse = response.replaceAll(END_OF_RESPONSE, '')
      resolve(JSON.parse(formattedResponse))
    })

    client.on('error', err => {
      console.error('Error: ' + err.message)
      reject(err)
    })
  })
}
