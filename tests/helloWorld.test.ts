import { helloWorld } from '../src'

describe('helloWorld', () => {
    it('returns "Hello World!"', () => {
        expect(helloWorld()).toBe('Hello World!')
    })
})
