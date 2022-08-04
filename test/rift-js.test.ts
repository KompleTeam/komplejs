import { KompleClient } from '../src'

describe('Komple Client', () => {
  it('KompleClient is instantiable', () => {
    expect(new KompleClient()).toBeInstanceOf(KompleClient)

    const kompleClient = new KompleClient()
    const controller = kompleClient.getControllerContract()
  })
})
