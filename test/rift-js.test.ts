import 'jest'
import { RiftClient } from '../src'

describe('Rift Client', () => {
  it('RiftClient is instantiable', () => {
    expect(new RiftClient()).toBeInstanceOf(RiftClient)
  })
})
